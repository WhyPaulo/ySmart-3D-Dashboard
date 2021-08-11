(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5604:
/*!********************************************************!*\
  !*** ./src/app/all-sessions/all-sessions.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllSessionsComponent": function() { return /* binding */ AllSessionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_all_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./all-sessions.component.html */ 3712);
/* harmony import */ var _all_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-sessions.component.css */ 8592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





let AllSessionsComponent = class AllSessionsComponent {
    constructor(http) {
        this.http = http;
        this.showSpinner = true;
    }
    ngOnInit() {
        this.http
            .get('https://ysmartdata.whymob.dev/get/sessions')
            .subscribe(Response => {
            // If response comes
            this.sessions = Response;
            this.sessions.forEach(session => {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
            });
            this.showSpinner = false;
        });
    }
};
AllSessionsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AllSessionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-all-sessions',
        template: _raw_loader_all_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_all_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllSessionsComponent);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
        this.title = '3D ySmart Dashboard'; //VERSION.major
        this.v = '2.0.1';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: '.app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./small-sessions/small-sessions.component */ 1329);
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/viewer.component */ 7101);
/* harmony import */ var _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-sessions/all-sessions.component */ 5604);
/* harmony import */ var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-details/session-details.component */ 4121);
/* harmony import */ var _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processed-sessions/processed-sessions.component */ 6458);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
















const routes = [
    { path: '', component: _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__.AllSessionsComponent },
    { path: 'small', component: _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SmallSessionsComponent },
    { path: 'processed', component: _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__.ProcessedSessionsComponent },
    { path: 'view/:id', component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ViewerComponent }
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, { useHash: true }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SmallSessionsComponent,
            _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ViewerComponent,
            _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__.AllSessionsComponent,
            _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_4__.SessionDetailsComponent,
            _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__.ProcessedSessionsComponent
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__.APP_BASE_HREF,
                useValue: '/' // + (window.location.pathname.split('/')[1] || '')
            }
        ]
    })
], AppModule);



/***/ }),

/***/ 6458:
/*!********************************************************************!*\
  !*** ./src/app/processed-sessions/processed-sessions.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessedSessionsComponent": function() { return /* binding */ ProcessedSessionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_processed_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./processed-sessions.component.html */ 4172);
/* harmony import */ var _processed_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processed-sessions.component.css */ 9217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProcessedSessionsComponent = class ProcessedSessionsComponent {
    constructor() {
        this.sessions = [
            {
                session: 1625843694,
                startTime: 1625843694,
                endTime: 1625843710,
                duration: '00:00:16',
                frames: 263
            },
            {
                session: 1625844273,
                startTime: 1625844273,
                endTime: 1625844455,
                duration: '00:03:02',
                frames: 4748
            },
            {
                session: 1626265938,
                startTime: 1626265938,
                endTime: 1626265952,
                duration: '00:00:14',
                frames: 182
            }
        ];
        this.sessions.forEach(session => {
            session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
            session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
        });
    }
    ngOnInit() {
        this.loadJsFile('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js', 'jquery');
    }
    loadJsFile(url, id) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.id = id;
        if (document.getElementById(id)) {
            console.log('script already present');
        }
        else {
            //document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
};
ProcessedSessionsComponent.ctorParameters = () => [];
ProcessedSessionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-processed-sessions',
        template: _raw_loader_processed_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_processed_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProcessedSessionsComponent);



/***/ }),

/***/ 4121:
/*!**************************************************************!*\
  !*** ./src/app/session-details/session-details.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailsComponent": function() { return /* binding */ SessionDetailsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_session_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-details.component.html */ 8580);
/* harmony import */ var _session_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-details.component.css */ 3443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SessionDetailsComponent = class SessionDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SessionDetailsComponent.ctorParameters = () => [];
SessionDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-session-details',
        template: _raw_loader_session_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_details_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionDetailsComponent);



/***/ }),

/***/ 1329:
/*!************************************************************!*\
  !*** ./src/app/small-sessions/small-sessions.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallSessionsComponent": function() { return /* binding */ SmallSessionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_small_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./small-sessions.component.html */ 5695);
/* harmony import */ var _small_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./small-sessions.component.css */ 9659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





let SmallSessionsComponent = class SmallSessionsComponent {
    constructor(http) {
        this.http = http;
        this.limit = 10;
    }
    ngOnInit() {
        this.http
            .get('https://ysmartdata.whymob.dev/get/small-sessions/' + this.limit)
            .subscribe(Response => {
            // If response comes
            this.sessions = Response;
            this.sessions.forEach(session => {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
            });
        });
    }
};
SmallSessionsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
SmallSessionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-small-sessions',
        template: _raw_loader_small_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_small_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SmallSessionsComponent);



/***/ }),

/***/ 7101:
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewerComponent": function() { return /* binding */ ViewerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./viewer.component.html */ 504);
/* harmony import */ var _viewer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer.component.css */ 394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ 7758);
/* harmony import */ var camera_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camera-controls */ 2508);








camera_controls__WEBPACK_IMPORTED_MODULE_2__.default.install({ THREE: three__WEBPACK_IMPORTED_MODULE_3__ });
let ViewerComponent = class ViewerComponent {
    constructor(_Activatedroute, http) {
        this._Activatedroute = _Activatedroute;
        this.http = http;
        this.showSpinner = true;
        this.timestamp = '0';
        this.currentFrame = 0;
        this.frameTimestamp = '0';
        this.paused = false;
        this.smoothing = false;
        this.distance = true;
        this.rawData = false;
        this.statusMsg = '';
        this.actorMaxArea = { x: 20, y: 200, z: 20 };
        this.data = {
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
        this.id = this._Activatedroute.snapshot.paramMap.get('id');
        this.sessionDate = new Date(this.id * 1000).toLocaleString('pt-PT');
    }
    ngOnInit() {
        this.http
            .get('https://ysmartdata.whymob.dev/get/session/' + this.id)
            .subscribe((data) => {
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
        let camera, scene, renderer, actors, sessao, floor, cameraControls, clock, stats, gui;
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
            renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({ antialias: true });
            renderer.setSize(document.getElementById('viewer').offsetWidth, document.getElementById('viewer').offsetWidth / 2);
            document.getElementById('viewer').appendChild(renderer.domElement);
            // Set scene
            scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
            scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0xeeeeee);
            // Set floor helper
            floor = new three__WEBPACK_IMPORTED_MODULE_3__.GridHelper(frameConfig.x, 10);
            scene.add(floor);
            // Set Camera
            camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, 1.5, 1, 2000);
            camera.up.set(0, 0.5, 0);
            // Set Camera Controls
            clock = new three__WEBPACK_IMPORTED_MODULE_3__.Clock();
            cameraControls = new camera_controls__WEBPACK_IMPORTED_MODULE_2__.default(camera, renderer.domElement);
            cameraControls.setLookAt(0, frameConfig.x / 4, frameConfig.x / 2, 0, 0, 0, true);
            sessao = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            sessao.name = 'sessao';
            //CAMA
            const cama = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            cama.name = 'cama';
            let camaWidth = frameConfig.bedW, camaHeight = frameConfig.bedH, camaDepth = frameConfig.bedD;
            const camaGeo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(camaWidth, camaHeight, camaDepth);
            const camaMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({ color: 0x00ff00 });
            const camaMesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(camaGeo, camaMaterial);
            let camaPoint = fixAxis(camaPoints);
            cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
            camaMesh.position.set(0, 0, camaDepth / 2);
            cama.add(camaMesh);
            sessao.add(cama);
            //DISPENSADOR
            const dispensador1 = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            dispensador1.name = 'dispensador1';
            const dispensadorMat = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({ color: 0xffff00 });
            const dispensador1Geo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(25, 50, 25);
            const dispensador2Geo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(25, 50, 25);
            const dispensador1mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(dispensador1Geo, dispensadorMat);
            console.log(dispensadores);
            let fixedDispensadorPoint = fixAxis(dispensadores[0]);
            dispensador1.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
            dispensador1.add(dispensador1mesh);
            sessao.add(dispensador1);
            //ADD Detected floor
            //create a blue LineBasicMaterial
            var floorLineineMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.LineBasicMaterial({
                color: '#00ff00'
            });
            const floorPoints = [];
            for (let i = 0; i < detectedFloor.length; i++) {
                let fixedFloorPoint = fixAxis(detectedFloor[i]);
                floorPoints.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(fixedFloorPoint.x, fixedFloorPoint.y, fixedFloorPoint.z));
            }
            const floorGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(floorPoints);
            const baseFloor = new three__WEBPACK_IMPORTED_MODULE_3__.Line(floorGeometry, floorLineineMaterial);
            //sessao.add(baseFloor);
            //Create actor group for animation
            actors = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            actors.name = 'actors';
            sessao.add(actors);
            scene.add(sessao);
            redrawFrame();
            //lights
            const dirLight1 = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff);
            dirLight1.position.set(1, 1, 1);
            scene.add(dirLight1);
            const dirLight2 = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x002288);
            dirLight2.position.set(-1, -1, -1);
            scene.add(dirLight2);
            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0x222222);
            scene.add(ambientLight);
            window.removeEventListener('resize', onWindowResize);
            window.addEventListener('resize', onWindowResize);
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
                renderer.setSize(document.getElementById('viewer').offsetWidth, document.getElementById('viewer').offsetWidth / 2);
            }
        }
        function animate() {
            if (document.getElementById('viewer')) {
                comp.requestId = requestAnimationFrame(animate);
            }
            else {
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
        function redrawFrame() {
            actors.clear();
            sessao.remove(actors);
            actors = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            actors.name = 'actors';
            comp.frameTimestamp = frames[comp.currentFrame][0];
            comp.statusMsg = comp.smoothing ? 'Suavização de velocidade on' : comp.distance ? 'Suavização de distância on' : comp.rawData ? 'Suavização off' : 'Suavização de velocidade off';
            frames[comp.currentFrame][1].forEach((actor, index) => drawActors(actor, index));
            sessao.add(actors);
            if (!comp.paused) {
                comp.currentFrame = ++comp.currentFrame % frames.length;
            }
            else {
                comp.statusMsg = 'paused - ' + comp.statusMsg;
            }
            if (document.getElementById('viewer')) {
                comp.timestamp = comp.currentFrame.toString();
                setTimeout(redrawFrame, 1000 / fps);
            }
            else {
                console.log('newframe stopped');
            }
        }
        function drawActors(actor, index) {
            //actor object received, add actor to actor Three Group
            //console.log(actor)
            const addedActor = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
            const lineMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.LineBasicMaterial({
                vertexColors: three__WEBPACK_IMPORTED_MODULE_3__.VertexColors,
                linewidth: 40 // lineWidth not universally supported works with safari
            });
            const pointMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.PointsMaterial({
                size: 2,
                vertexColors: three__WEBPACK_IMPORTED_MODULE_3__.VertexColors
            });
            let p = 'p';
            let pointColors = [];
            let points = [];
            for (let i = 1; i <= 5; i++) {
                let fixedPoint = fixAxis(actor[p + i]);
                pointColors.push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
                points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
            }
            const headGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry();
            headGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(points, 3));
            headGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(pointColors, 3));
            let head = new three__WEBPACK_IMPORTED_MODULE_3__.Points(headGeometry, pointMaterial);
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
                lineGeometries[i] = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(linePoints[i]);
                for (let j = 0; j < bodyPointsIndex[i].length; j++) {
                    //Skip point if it's above threshold
                    if (actor[p + bodyPointsIndex[i][j]].p > frameConfig.minP) {
                        //if starting frame skip max velocity check
                        let fixedPoint = fixAxis(actor[p + bodyPointsIndex[i][j]]);
                        if (comp.distance) {
                            //Distance smoothing
                            fixedPoint.x = motionLimiter(fixedPoint.x, centralPoint.x, comp.actorMaxArea.x);
                            fixedPoint.y = motionLimiter(fixedPoint.y, centralPoint.y, comp.actorMaxArea.y);
                            fixedPoint.z = motionLimiter(fixedPoint.z, centralPoint.z, comp.actorMaxArea.z);
                        }
                        else if (comp.smoothing) {
                        }
                        linePoints[i].push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
                        lineColors[i].push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
                    }
                }
                lineGeometries[i].setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(linePoints[i], 3));
                lineGeometries[i].setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(lineColors[i], 3));
                lines[i] = new three__WEBPACK_IMPORTED_MODULE_3__.Line(lineGeometries[i], lineMaterial);
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
            }
            else if (x >= current - limit && x <= current + limit) {
                //console.log('from', current, 'to', x, 'no limit aplied', x)
                return x;
            }
            else if (x > current + limit) {
                //console.log('from', current, 'to', x, 'limited to', current+limit)
                return current + limit;
            }
            else {
                //console.log('limiter exception, keeping original value', current)
                return current;
            }
        }
    }
    ngOnDestroy() {
        console.log('stop', this.requestId);
        cancelAnimationFrame(this.requestId);
    }
};
ViewerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
ViewerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-viewer',
        template: _raw_loader_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewerComponent);



/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})
    .catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 7277);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 8592:
/*!*********************************************************!*\
  !*** ./src/app/all-sessions/all-sessions.component.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".isDisabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n.isDisabled > a {\r\n  color: currentColor;\r\n  display: inline-block; /* For IE11/ MS Edge bug */\r\n  pointer-events: none;\r\n  text-decoration: none;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1002;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blurred {\r\n  filter: blur(2px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFFLDBCQUEwQjtFQUNqRCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYWxsLXNlc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNEaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmlzRGlzYWJsZWQgPiBhIHtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogRm9yIElFMTEvIE1TIEVkZ2UgYnVnICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ibHVycmVkIHtcclxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 9217:
/*!*********************************************************************!*\
  !*** ./src/app/processed-sessions/processed-sessions.component.css ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzZWQtc2Vzc2lvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 3443:
/*!***************************************************************!*\
  !*** ./src/app/session-details/session-details.component.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 9659:
/*!*************************************************************!*\
  !*** ./src/app/small-sessions/small-sessions.component.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbWFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 394:
/*!*********************************************!*\
  !*** ./src/app/viewer/viewer.component.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#viewer {\r\n  position: relative;\r\n}\r\n#timestamp {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  color: #666;\r\n  text-align: right;\r\n  padding: 10px;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1002;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blurred {\r\n  filter: blur(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ2aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jdGltZXN0YW1wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJsdXJyZWQge1xyXG4gIGZpbHRlcjogYmx1cigycHgpO1xyXG59Il19 */");

/***/ }),

/***/ 3712:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-sessions/all-sessions.component.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<div class=\"position-relative\">\n  <table class=\"table table-striped\" [class.blurred]=\"showSpinner\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Sessão ID</th>\n        <th scope=\"col\">Início</th>\n        <th scope=\"col\">Fim</th>\n        <th scope=\"col\">Frames</th>\n        <th scope=\"col\">Grupo</th>\n        <th scope=\"col\">link</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let session of sessions\">\n        <th scope=\"row\">{{session.session}}</th>\n        <td>{{session.startDate}}</td>\n        <td>{{session.endDate}}</td>\n        <td>{{session.frames}}</td>\n        <td>{{session.totalFrames == session.frames ? 'Não':'Sim'}}</td>\n        <td class=\"\">\n          <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"overlay position-absolute top-0 end-0\" *ngIf=\"showSpinner\">\n    <div class=\"spinner-wrapper pt-5\">\n      <img class=\"m-auto d-block mt-5\" style='width:60px' src=\"https://whymob.dev/ysmart/loading.gif\">\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">{{title}}</h1>\n<hr />\n<nav class=\"text-center\">\n  <a routerLink=\"/\">Todas as sessões</a>\n  &nbsp;\n  <a routerLink=\"/small\">Sessões de curta duração</a>\n  &nbsp;\n  <a routerLink=\"/processed\">Sessões processadas</a>\n</nav>\n<hr />\n<router-outlet></router-outlet>\n<footer class=\"fixed-bottom p-2 text-end text-muted\" style=\"background-color: rgba(255, 255, 255, 0.6);\">powered by whymob (v{{v}})</footer>");

/***/ }),

/***/ 4172:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/processed-sessions/processed-sessions.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Início</th>\n      <th scope=\"col\">Fim</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.startDate}}</td>\n      <td>{{session.endDate}}</td>\n      <td>\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>");

/***/ }),

/***/ 8580:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session-details/session-details.component.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\nsession-details works!\n</p>");

/***/ }),

/***/ 5695:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/small-sessions/small-sessions.component.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Sessões gravadas com duração inferior a: {{limit}}s</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Duração</th>\n      <th scope=\"col\">Frames</th>\n      <th scope=\"col\">Grupo</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.duration}}</td>\n      <td>{{session.frames}}</td>\n      <td>{{session.totalFrames == session.frames ? 'Não':'Sim'}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>");

/***/ }),

/***/ 504:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/viewer.component.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"text-center fw-bold text-uppercase\">\n  Sessão {{id}}\n</h3>\n<div class=\"position-relative\">\n  <div class=\"viewer-wrapper\" [class.blurred]=\"showSpinner\">\n    <div id=\"viewer\" class=\"position-relative\">\n      <span class=\"d-block end-0 pe-3 position-absolute pt-2 text-end top-0\">{{frameTimestamp}}</span>\n      <span class=\"d-block start-0 ps-3 position-absolute pt-2 text-start top-0\">{{timestamp}}</span>\n      <span class=\"bottom-0 d-block end-0 pb-2 pe-3 position-absolute text-end\">{{statusMsg}}</span>\n    </div>\n    <div class=\"row\" *ngIf=\"!showSpinner\">\n      <div class=\"col-md-4 col-sm-6 pt-4\">\n          <h4>Dados da sessão</h4> \n          <div>Sessão gravada em:</div>\n          <div class=\"fw-bolder\">{{sessionDate}} </div>\n          <div>com uma duração de:</div>\n          <div><span class=\"fw-bolder\">{{sessionDuration}}</span> e <span class=\"fw-bolder\">{{totalFrames}}</span> frames.</div>\n          <div>(Animation frame ID:<span class=\"fw-bolder\">{{requestId}}</span>)</div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 pt-4\">\n          <h5>Dados de oportunidades</h5> \n          <p>Informação a adiccionar.</p>\n          <h6>Playback</h6>\n          <div class=\"mt-2\">\n              <div class=\"btn-group me-2\" role=\"group\" aria-label=\"First group\">\n                  <button type=\"button\" class=\"btn btn-outline-secondary\"(click)=\"currentFrame = (currentFrame == 0)? totalFrames-1 : currentFrame -1 \">\n                      <i class=\"bi bi-skip-backward-fill\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"paused = !paused\">\n                      <i class=\"bi bi-play-fill\" *ngIf=\"paused\"></i>\n                      <i class=\"bi bi-pause-fill\" *ngIf=\"!paused\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"currentFrame = (currentFrame + 1)% totalFrames\">\n                      <i class=\"bi bi-skip-forward-fill\"></i>\n                  </button>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12 pt-4\">\n          <h5>Visualizador</h5>\n          <h6>Estratégia de suavização</h6>\n          <div class=\"form-check form-switch\" *ngIf=\"false\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"smoothing\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"distance = !smoothing; rawData = false\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Velocidade max. (corpo)</label>\n          </div> \n          <div class=\"form-check form-switch\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"distance\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"smoothing = false; rawData = !distance\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Distância Central (corpo)</label>\n          </div>  \n          <div class=\"form-check form-switch\" *ngIf=\"false\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"rawData\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"distance = !rawData; smoothing = false\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Sem suavização</label>\n          </div>\n          <div *ngIf=\"distance\">\n            <label for=\"customRange3\">Limites de distância</label><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"20\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.x\" id=\"customRange3\">\n            <span> x: {{actorMaxArea.x}}</span><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"202\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.y\" id=\"customRange3\">\n            <span> y: {{actorMaxArea.y}}</span><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"20\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.z\" id=\"customRange3\">\n            <span> z: {{actorMaxArea.z}}</span>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"position-absolute top-0 bottom-0 start-0 end-0\" *ngIf=\"showSpinner\">\n    <div class=\"spinner-wrapper pt-5\">\n      <img class=\"m-auto d-block mt-5\" style=\"width:60px\" src=\"https://whymob.dev/ysmart/loading.gif\">\n      <span class=\"m-auto d-block mt-2 w-50 text-center text-secondary\">Loading</span>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map