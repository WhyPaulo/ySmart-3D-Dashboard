import { Component, OnInit, HostListener } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';

import CameraControls from 'camera-controls';
CameraControls.install({ THREE: THREE });

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  public id: any;
  public sessionDate: string;
  public sessionDuration: any;
  public totalFrames: number;
  public showSpinner = true;
  public timestamp = '0';
  public currentFrame = 0;
  public frameTimestamp = '0';
  public requestId: number;
  public paused = false;
  public smoothing = false;
  public distance = true;
  public rawData = false;
  public statusMsg = '';
  public actorMaxArea= { x: 20, y: 200, z: 20 }

  private data = {
    frameConfig: {
      x: 640,
      y: 480,
      z: 5,
      bedW: 100,
      bedD: 200,
      bedH: 20,
      camY: -300,
      camRX: -36,
      minP: 0,
      maxMovement: 5
    },
    frames: [],
    camaPoints: {
      x: 0.10985056310892105,
      y: -0.13395646214485168,
      z: 3.380000114440918
    },
    dispensadores: [],
    floor: [
      { x: -1.1797891855239868, y: 1.4506481885910034, z: 3.2119998931884766 },
      { x: -1.1293202638626099, y: 0.6508018970489502, z: 4.093999862670898 },
      { x: 1.1487586498260498, y: 0.4948367774486542, z: 4.421000003814697 },
      { x: 1.1579986810684204, y: 1.4244699478149414, z: 3.247999906539917 },
      { x: -1.1797891855239868, y: 1.4506481885910034, z: 3.2119998931884766 }
    ]
  };

  constructor(
    private _Activatedroute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.sessionDate = new Date(this.id * 1000).toLocaleString('pt-PT');
    
  }
  ngOnInit() {
    this.http
    .get('https://ysmartdata.whymob.dev/get/session/' + this.id)
    .subscribe((data: any) => {
      this.sessionDuration = data.duration;
      this.data.frames = Object.entries(data.frames).sort();
      this.totalFrames = this.data.frames.length;
      this.data.dispensadores = data.dispensadores;
      //this.data.camaPoints = data.camaPoints;
      this.buildViewer();
      this.showSpinner = false;
    });
  }

  buildViewer() {
    let comp = this;
    let camera,
      scene,
      renderer,
      actors,
      sessao,
      floor,
      cameraControls,
      clock,
      stats,
      gui;

    let frameConfig, framePointsCount;
    let currentPoints = [];
    let paused = false;
    let fps = 15;
    let factor = 100;
    let currentFrame = 0;
    //Frames
    var frames, camaPoints, dispensadores, detectedFloor;

    frameConfig = this.data.frameConfig;
    frames = this.data.frames;
    framePointsCount = frameConfig.framePointsCount;
    camaPoints = this.data.camaPoints;
    dispensadores = this.data.dispensadores;
    detectedFloor = this.data.floor;
    init();
    animate();

    function init() {
      // Set renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        document.getElementById('viewer').offsetWidth,
        document.getElementById('viewer').offsetWidth / 2
      );

      document.getElementById('viewer').appendChild(renderer.domElement);

      // Set scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xeeeeee);

      // Set floor helper
      floor = new THREE.GridHelper(frameConfig.x, 10);
      scene.add(floor);

      // Set Camera
      camera = new THREE.PerspectiveCamera(70, 1.5, 1, 2000);
      camera.up.set(0, 0.5, 0);
      // Set Camera Controls
      clock = new THREE.Clock();
      cameraControls = new CameraControls(camera, renderer.domElement);
      cameraControls.setLookAt(
        0,
        frameConfig.x / 4,
        frameConfig.x / 2,
        0,
        0,
        0,
        true
      );

      sessao = new THREE.Group();
      sessao.name = 'sessao';

      //CAMA
      const cama = new THREE.Group();
      cama.name = 'cama';
      let camaWidth = frameConfig.bedW,
        camaHeight = frameConfig.bedH,
        camaDepth = frameConfig.bedD;
      const camaGeo = new THREE.BoxGeometry(camaWidth, camaHeight, camaDepth);
      const camaMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const camaMesh = new THREE.Mesh(camaGeo, camaMaterial);
      let camaPoint = fixAxis(camaPoints);
      cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
      camaMesh.position.set(0, 0, camaDepth / 2);
      cama.add(camaMesh);
      sessao.add(cama);

      //DISPENSADOR
      const dispensador1 = new THREE.Group();
      dispensador1.name = 'dispensador1';
      const dispensadorMat = new THREE.MeshPhongMaterial({ color: 0xffff00 });

      const dispensador1Geo = new THREE.BoxGeometry(25, 50, 25);
      const dispensador2Geo = new THREE.BoxGeometry(25, 50, 25);

      const dispensador1mesh = new THREE.Mesh(dispensador1Geo, dispensadorMat);
      console.log(dispensadores)
      let fixedDispensadorPoint = fixAxis(dispensadores[0]);
      dispensador1.position.set(
        fixedDispensadorPoint.x,
        fixedDispensadorPoint.y,
        fixedDispensadorPoint.z
      );
      dispensador1.add(dispensador1mesh);
      sessao.add(dispensador1);

      //ADD Detected floor
      //create a blue LineBasicMaterial
      var floorLineineMaterial = new THREE.LineBasicMaterial({
        color: '#00ff00'
      });
      const floorPoints = [];
      for (let i = 0; i < detectedFloor.length; i++) {
        let fixedFloorPoint = fixAxis(detectedFloor[i]);
        floorPoints.push(
          new THREE.Vector3(
            fixedFloorPoint.x,
            fixedFloorPoint.y,
            fixedFloorPoint.z
          )
        );
      }

      const floorGeometry = new THREE.BufferGeometry().setFromPoints(
        floorPoints
      );
      const baseFloor = new THREE.Line(floorGeometry, floorLineineMaterial);
      //sessao.add(baseFloor);

      //Create actor group for animation
      actors = new THREE.Group();
      actors.name = 'actors';
      sessao.add(actors);
      scene.add(sessao);
      //newFrame2();
      redrawFrame();

      //lights
      const dirLight1 = new THREE.DirectionalLight(0xffffff);
      dirLight1.position.set(1, 1, 1);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x002288);
      dirLight2.position.set(-1, -1, -1);
      scene.add(dirLight2);

      const ambientLight = new THREE.AmbientLight(0x222222);
      scene.add(ambientLight);

      //
      window.removeEventListener('resize', onWindowResize);
      window.addEventListener('resize', onWindowResize);
      //stats = new Stats();
      //stats.domElement.style.position = 'absolute';
      //document.getElementById('viewer').appendChild(stats.dom);

      //initGui();
    }

    function fixAxis(point) {
      let tempX = point.x * factor;
      let tempY = point.y * factor * -1;
      let tempZ = point.z * factor * -1;

      return { x: tempX, y: tempY, z: tempZ, p: point.p };
    }

    function onWindowResize() {
      if (document.getElementById('viewer')) {
        //camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(
          document.getElementById('viewer').offsetWidth,
          document.getElementById('viewer').offsetWidth / 2
        );
      }
    }

    function animate() {
      if (document.getElementById('viewer')) {
        comp.requestId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(comp.requestId);
        console.log('No animate for you!', comp.requestId);
      }
      //stats.update();

      const delta = clock.getDelta();
      const hasControlsUpdated = cameraControls.update(delta);

      // you can skip this condition to render though
      if (hasControlsUpdated) {
        renderer.render(scene, camera);
      }
      sessao.rotation.x = frameConfig.camRX * (Math.PI / 180);
      sessao.getObjectByName('cama').rotation.x =
        frameConfig.camRX * -1 * (Math.PI / 180);
      sessao.getObjectByName('dispensador1').rotation.x =
        frameConfig.camRX * -1 * (Math.PI / 180);

      sessao.position.z = -frameConfig.camY / 2;
      sessao.position.y = -frameConfig.camY;

      render();
    }

    function render() {
      //console.log(this.timestamp)
      renderer.render(scene, camera);
    }
    function newFrame2() {
      //var selectedObject = scene.getObjectByName('actor');
      actors.clear();
      sessao.remove(actors);
      let startIndex =
        (currentFrame % (frames.length / framePointsCount)) * framePointsCount;

      //console.log('/////////////////')
      //console.log('// FRAME',currentFrame%(frame.length/framePointsCount))

      //rebuild actor
      //create a blue LineBasicMaterial
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: (<any>THREE).VertexColors, // inform material that geometry will provide color info
        linewidth: 40 // lineWidth not universally supported works with safari
      });
      const pointMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: (<any>THREE).VertexColors
      });

      let pointColors = [];
      let points = [];

      actors = new THREE.Group();
      actors.name = 'actors';

      for (let i = 0; i < 5; i++) {
        let fixedPoint = fixAxis(frames[startIndex + i]);
        pointColors.push(1 - 1 * frames[i][3], 1 * frames[i][3], 0);
        points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
      }

      const headGeometry = new THREE.BufferGeometry();
      headGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(points, 3)
      );
      headGeometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(pointColors, 3)
      );
      let head = new THREE.Points(headGeometry, pointMaterial);

      actors.add(head);

      const bodyPointsIndex = [
        [10, 8, 6, 12, 14, 16],
        [11, 9, 7, 13, 15, 17],
        [6, 7],
        [12, 13]
      ];
      let linePoints = [];
      let lineGeometries = [];
      let lineColors = [];
      let lines = [];
      let currentPoint;
      for (let i = 0; i < bodyPointsIndex.length; i++) {
        linePoints[i] = [];
        lineColors[i] = [];
        lineGeometries[i] = new THREE.BufferGeometry().setFromPoints(
          linePoints[i]
        );
        for (let j = 0; j < bodyPointsIndex[i].length; j++) {
          //Skip point if it's above threshold
          if (
            frames[startIndex + (bodyPointsIndex[i][j] - 1)].p > frameConfig.minP
          ) {
            let fixedPoint = { x: 0, y: 0, z: 0, p: 0 };
            let newPoint = { x: 0, y: 0, z: 0, p: 1 };
            //if starting frame skip max velocity check
            comp.statusMsg = comp.smoothing?'smoothing on':'smoothing off';
            if (startIndex < framePointsCount || !comp.smoothing) {
              fixedPoint = fixAxis(
                frames[startIndex + (bodyPointsIndex[i][j] - 1)]
              );
              currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
            } if(comp.paused){
              comp.statusMsg = 'limiter drift disabled - ' + comp.statusMsg;
              fixedPoint = currentPoints[bodyPointsIndex[i][j] - 1];
            } else {
              fixedPoint = fixAxis(
                frames[startIndex + (bodyPointsIndex[i][j] - 1)]
              );
              currentPoint = currentPoints[bodyPointsIndex[i][j] - 1];
              newPoint.x = motionLimiter(
                fixedPoint.x,
                currentPoint.x,
                frameConfig.maxMovement
              );
              newPoint.y = motionLimiter(
                fixedPoint.y,
                currentPoint.y,
                frameConfig.maxMovement
              );
              newPoint.z = motionLimiter(
                fixedPoint.z,
                currentPoint.z,
                frameConfig.maxMovement
              );
              newPoint.p = fixedPoint.p;
              fixedPoint = newPoint;
              currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
            }

            linePoints[i].push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
            lineColors[i].push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
          }
        }
        lineGeometries[i].setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePoints[i], 3)
        );
        lineGeometries[i].setAttribute(
          'color',
          new THREE.Float32BufferAttribute(lineColors[i], 3)
        );
        lines[i] = new THREE.Line(lineGeometries[i], lineMaterial);
        lines[i].computeLineDistances();
        actors.add(lines[i]);
      }
      sessao.add(actors);
      //scene.add(sessao)
      if (!comp.paused) {
        comp.currentFrame++;
      } else {
        comp.statusMsg = 'paused - ' + comp.statusMsg;
      }
      if (document.getElementById('viewer')) {
        comp.timestamp = (
          comp.currentFrame %
          (frames.length / framePointsCount)
        ).toString();
        setTimeout(newFrame2, 1000 / fps);
      } else {
        console.log('newframe stopped');
      }
      //console.log(actor)
    }

    function redrawFrame() {
      actors.clear();
      sessao.remove(actors);

      actors = new THREE.Group();
      actors.name = 'actors';
      comp.frameTimestamp = frames[comp.currentFrame][0]
      comp.statusMsg = comp.smoothing?'Suavização de velocidade on': comp.distance?'Suavização de distância on':comp.rawData?'Suavização off':'Suavização de velocidade off';
      frames[comp.currentFrame][1].forEach((actor: object, index: any) =>
        drawActors(actor, index)
      );

      sessao.add(actors);
      if (!comp.paused) {
        comp.currentFrame = ++comp.currentFrame % frames.length;
      } else {
        comp.statusMsg = 'paused - ' + comp.statusMsg;
      }

      if (document.getElementById('viewer')) {
        comp.timestamp = comp.currentFrame.toString();
        setTimeout(redrawFrame, 1000 / fps);
      } else {
        console.log('newframe stopped');
      }
    }
    function drawActors(actor: object, index: any) {
      //actor object received, add actor to actor Three Group
      //console.log(actor)
      const addedActor = new THREE.Group();
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: (<any>THREE).VertexColors, // inform material that geometry will provide color info
        linewidth: 40 // lineWidth not universally supported works with safari
      });
      const pointMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: (<any>THREE).VertexColors
      });

      let p = 'p';

      let pointColors = [];
      let points = [];
      for (let i = 1; i <= 5; i++) {
        let fixedPoint = fixAxis(actor[p + i]);
        pointColors.push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
        points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
      }
      const headGeometry = new THREE.BufferGeometry();
      headGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(points, 3)
      );
      headGeometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(pointColors, 3)
      );
      let head = new THREE.Points(headGeometry, pointMaterial);

      addedActor.add(head);
      const bodyPointsIndex = [
        [10, 8, 6, 12, 14, 16],
        [11, 9, 7, 13, 15, 17],
        [6, 7],
        [12, 13]
      ];
      let linePoints = [];
      let lineGeometries = [];
      let lineColors = [];
      let lines = [];
      let centralPoint = fixAxis(actor['ponto_central']);
      for (let i = 0; i < bodyPointsIndex.length; i++) {
        linePoints[i] = [];
        lineColors[i] = [];
        lineGeometries[i] = new THREE.BufferGeometry().setFromPoints(
          linePoints[i]
        );
        for (let j = 0; j < bodyPointsIndex[i].length; j++) {
          //Skip point if it's above threshold
          if (actor[p + bodyPointsIndex[i][j]].p > frameConfig.minP) {
            //if starting frame skip max velocity check
            let fixedPoint = fixAxis(actor[p + bodyPointsIndex[i][j]]);
            if(comp.distance){
              //Distance smoothing
              fixedPoint.x = motionLimiter(
                fixedPoint.x,
                centralPoint.x,
                comp.actorMaxArea.x
              );
              fixedPoint.y = motionLimiter(
                fixedPoint.y,
                centralPoint.y,
                comp.actorMaxArea.y
              );
              fixedPoint.z = motionLimiter(
                fixedPoint.z,
                centralPoint.z,
                comp.actorMaxArea.z
              );
            } else if(comp.smoothing){

            }
            

            linePoints[i].push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
            lineColors[i].push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
          }
        }
        lineGeometries[i].setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePoints[i], 3)
        );
        lineGeometries[i].setAttribute(
          'color',
          new THREE.Float32BufferAttribute(lineColors[i], 3)
        );
        lines[i] = new THREE.Line(lineGeometries[i], lineMaterial);
        lines[i].computeLineDistances();
        actors.add(lines[i]);
      }
      actors.add(addedActor);
    }

    function scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    function motionLimiter(x, current, limit) {
      //determine if x if in inside the left limit
      if (x < current - limit) {
        //console.log('from', current, 'to', x, 'limited to', current-limit)
        return current - limit;
      } else if (x >= current - limit && x <= current + limit) {
        //console.log('from', current, 'to', x, 'no limit aplied', x)
        return x;
      } else if (x > current + limit) {
        //console.log('from', current, 'to', x, 'limited to', current+limit)
        return current + limit;
      } else {
        //console.log('limiter exception, keeping original value', current)
        return current;
      }
    }
  }

  ngOnDestroy() {
    console.log('stop', this.requestId);
    cancelAnimationFrame(this.requestId);
  }
}
