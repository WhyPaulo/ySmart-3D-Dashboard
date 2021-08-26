(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5604: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllSessionsComponent": function AllSessionsComponent() {
          return (
            /* binding */
            _AllSessionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_all_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./all-sessions.component.html */
      3712);
      /* harmony import */


      var _all_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./all-sessions.component.css */
      8592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _AllSessionsComponent = /*#__PURE__*/function () {
        function AllSessionsComponent(http) {
          _classCallCheck(this, AllSessionsComponent);

          this.http = http;
          this.showSpinner = true;
        }

        _createClass(AllSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.http.get('https://ysmartdata.whymob.dev/get/sessions').subscribe(function (Response) {
              // If response comes
              _this.sessions = Response;

              _this.sessions.forEach(function (session) {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
              });

              _this.showSpinner = false;
            });
          }
        }]);

        return AllSessionsComponent;
      }();

      _AllSessionsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _AllSessionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-all-sessions',
        template: _raw_loader_all_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_all_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllSessionsComponent);
      /***/
    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      1106);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      1249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = '3D ySmart Dashboard'; //VERSION.major

        this.v = '2.0.1';
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: '.app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      5396);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);
      /* harmony import */


      var _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./small-sessions/small-sessions.component */
      1329);
      /* harmony import */


      var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./viewer/viewer.component */
      7101);
      /* harmony import */


      var _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-sessions/all-sessions.component */
      5604);
      /* harmony import */


      var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./session-details/session-details.component */
      4121);
      /* harmony import */


      var _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./processed-sessions/processed-sessions.component */
      6458);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);

      var routes = [{
        path: '',
        component: _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__.AllSessionsComponent
      }, {
        path: 'small',
        component: _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SmallSessionsComponent
      }, {
        path: 'processed',
        component: _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__.ProcessedSessionsComponent
      }, {
        path: 'view/:id',
        component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ViewerComponent
      }];

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, {
          useHash: true
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SmallSessionsComponent, _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ViewerComponent, _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_3__.AllSessionsComponent, _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_4__.SessionDetailsComponent, _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_5__.ProcessedSessionsComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__.APP_BASE_HREF,
          useValue: '/' // + (window.location.pathname.split('/')[1] || '')

        }]
      })], _AppModule);
      /***/
    },

    /***/
    6458: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessedSessionsComponent": function ProcessedSessionsComponent() {
          return (
            /* binding */
            _ProcessedSessionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_processed_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./processed-sessions.component.html */
      4172);
      /* harmony import */


      var _processed_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./processed-sessions.component.css */
      9217);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ProcessedSessionsComponent = /*#__PURE__*/function () {
        function ProcessedSessionsComponent(http) {
          _classCallCheck(this, ProcessedSessionsComponent);

          this.http = http;
          this.showSpinner = true;
        }

        _createClass(ProcessedSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.http.get('https://ysmartdata.whymob.dev/get/filtred-sessions').subscribe(function (Response) {
              // If response comes
              _this2.sessions = Response;

              _this2.sessions.forEach(function (session) {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
              });

              _this2.showSpinner = false;
            });
          }
        }]);

        return ProcessedSessionsComponent;
      }();

      _ProcessedSessionsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _ProcessedSessionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-processed-sessions',
        template: _raw_loader_processed_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_processed_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProcessedSessionsComponent);
      /***/
    },

    /***/
    4121: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionDetailsComponent": function SessionDetailsComponent() {
          return (
            /* binding */
            _SessionDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_session_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./session-details.component.html */
      8580);
      /* harmony import */


      var _session_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./session-details.component.css */
      3443);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SessionDetailsComponent = /*#__PURE__*/function () {
        function SessionDetailsComponent() {
          _classCallCheck(this, SessionDetailsComponent);
        }

        _createClass(SessionDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SessionDetailsComponent;
      }();

      _SessionDetailsComponent.ctorParameters = function () {
        return [];
      };

      _SessionDetailsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-session-details',
        template: _raw_loader_session_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_session_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SessionDetailsComponent);
      /***/
    },

    /***/
    1329: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmallSessionsComponent": function SmallSessionsComponent() {
          return (
            /* binding */
            _SmallSessionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_small_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./small-sessions.component.html */
      5695);
      /* harmony import */


      var _small_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./small-sessions.component.css */
      9659);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _SmallSessionsComponent = /*#__PURE__*/function () {
        function SmallSessionsComponent(http) {
          _classCallCheck(this, SmallSessionsComponent);

          this.http = http;
          this.limit = 10;
        }

        _createClass(SmallSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.http.get('https://ysmartdata.whymob.dev/get/small-sessions/' + this.limit).subscribe(function (Response) {
              // If response comes
              _this3.sessions = Response;

              _this3.sessions.forEach(function (session) {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
              });
            });
          }
        }]);

        return SmallSessionsComponent;
      }();

      _SmallSessionsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _SmallSessionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-small-sessions',
        template: _raw_loader_small_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_small_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SmallSessionsComponent);
      /***/
    },

    /***/
    7101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewerComponent": function ViewerComponent() {
          return (
            /* binding */
            _ViewerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./viewer.component.html */
      504);
      /* harmony import */


      var _viewer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./viewer.component.css */
      394);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! three */
      7758);
      /* harmony import */


      var camera_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! camera-controls */
      2508);

      camera_controls__WEBPACK_IMPORTED_MODULE_2__["default"].install({
        THREE: three__WEBPACK_IMPORTED_MODULE_3__
      });

      var _ViewerComponent = /*#__PURE__*/function () {
        function ViewerComponent(_Activatedroute, http) {
          _classCallCheck(this, ViewerComponent);

          this._Activatedroute = _Activatedroute;
          this.http = http;
          this.showSpinner = true;
          this.fps = 15;
          this.timestamp = '0';
          this.currentFrame = 0;
          this.frameTimestamp = 0;
          this.captureFpsStatus = '0';
          this.playbackFpsStatus = '0';
          this.paused = false;
          this.smoothing = false;
          this.distance = true;
          this.rawData = false;
          this.statusMsg = '';
          this.actorMaxArea = {
            x: 20,
            y: 200,
            z: 20
          };
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
            floor: [{
              x: -1.1797891855239868,
              y: 1.4506481885910034,
              z: 3.2119998931884766
            }, {
              x: -1.1293202638626099,
              y: 0.6508018970489502,
              z: 4.093999862670898
            }, {
              x: 1.1487586498260498,
              y: 0.4948367774486542,
              z: 4.421000003814697
            }, {
              x: 1.1579986810684204,
              y: 1.4244699478149414,
              z: 3.247999906539917
            }, {
              x: -1.1797891855239868,
              y: 1.4506481885910034,
              z: 3.2119998931884766
            }]
          };
          this.id = this._Activatedroute.snapshot.paramMap.get('id');
          this.sessionDate = new Date(this.id * 1000).toLocaleString('pt-PT');
        }

        _createClass(ViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.http.get('https://ysmartdata.whymob.dev/get/session/' + this.id).subscribe(function (data) {
              _this4.sessionDuration = data.duration;
              _this4.data.frames = Object.entries(data.frames).sort();
              _this4.totalFrames = _this4.data.frames.length;
              _this4.data.dispensadores = data.dispensadores; //this.data.camaPoints = data.camaPoints;

              _this4.buildViewer();

              _this4.showSpinner = false;
            });
          }
        }, {
          key: "buildViewer",
          value: function buildViewer() {
            var comp = this;
            var camera, scene, renderer, actors, sessao, floor, cameraControls, clock, cfps, stats, gui;
            var frameConfig, framePointsCount;
            var currentPoints = [];
            var factor = 100;
            var currentFrame = 0; //Frames

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
              renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
                antialias: true
              });
              renderer.setSize(document.getElementById('viewer').offsetWidth, document.getElementById('viewer').offsetWidth / 2);
              document.getElementById('viewer').appendChild(renderer.domElement); // Set scene

              scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
              scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color(0xeeeeee); // Set floor helper

              floor = new three__WEBPACK_IMPORTED_MODULE_3__.GridHelper(frameConfig.x, 10);
              scene.add(floor); // Set Camera

              camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, 1.5, 1, 2000);
              camera.up.set(0, 0.5, 0); // Set Camera Controls

              clock = new three__WEBPACK_IMPORTED_MODULE_3__.Clock();
              cameraControls = new camera_controls__WEBPACK_IMPORTED_MODULE_2__["default"](camera, renderer.domElement);
              cameraControls.setLookAt(0, frameConfig.x / 4, frameConfig.x / 2, 0, 0, 0, true);
              sessao = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
              sessao.name = 'sessao'; //CAMA

              var cama = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
              cama.name = 'cama';
              var camaWidth = frameConfig.bedW,
                  camaHeight = frameConfig.bedH,
                  camaDepth = frameConfig.bedD;
              var camaGeo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(camaWidth, camaHeight, camaDepth);
              var camaMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
                color: 0x00ff00
              });
              var camaMesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(camaGeo, camaMaterial);
              var camaPoint = fixAxis(camaPoints);
              cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
              camaMesh.position.set(0, 0, camaDepth / 2);
              cama.add(camaMesh);
              sessao.add(cama); //DISPENSADOR

              var dispensador1 = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
              dispensador1.name = 'dispensador1';
              var dispensadorMat = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
                color: 0xffff00
              });
              var dispensador1Geo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(25, 50, 25);
              var dispensador2Geo = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(25, 50, 25);
              var dispensador1mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(dispensador1Geo, dispensadorMat);
              console.log(dispensadores);
              var fixedDispensadorPoint = fixAxis(dispensadores[0]);
              dispensador1.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
              dispensador1.add(dispensador1mesh);
              sessao.add(dispensador1); //ADD Detected floor
              //create a blue LineBasicMaterial

              var floorLineineMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.LineBasicMaterial({
                color: '#00ff00'
              });
              var floorPoints = [];

              for (var i = 0; i < detectedFloor.length; i++) {
                var fixedFloorPoint = fixAxis(detectedFloor[i]);
                floorPoints.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(fixedFloorPoint.x, fixedFloorPoint.y, fixedFloorPoint.z));
              }

              var floorGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(floorPoints);
              var baseFloor = new three__WEBPACK_IMPORTED_MODULE_3__.Line(floorGeometry, floorLineineMaterial); //sessao.add(baseFloor);
              //Create actor group for animation

              actors = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
              actors.name = 'actors';
              sessao.add(actors);
              scene.add(sessao);
              redrawFrame(); //lights

              var dirLight1 = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff);
              dirLight1.position.set(1, 1, 1);
              scene.add(dirLight1);
              var dirLight2 = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x002288);
              dirLight2.position.set(-1, -1, -1);
              scene.add(dirLight2);
              var ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0x222222);
              scene.add(ambientLight);
              window.removeEventListener('resize', onWindowResize);
              window.addEventListener('resize', onWindowResize);
            }

            function fixAxis(point) {
              var tempX = point.x * factor;
              var tempY = point.y * factor * -1;
              var tempZ = point.z * factor * -1;
              return {
                x: tempX,
                y: tempY,
                z: tempZ,
                p: point.p
              };
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
              } else {
                cancelAnimationFrame(comp.requestId);
                console.log('No animate for you!', comp.requestId);
              } //stats.update();


              var delta = clock.getDelta();
              var hasControlsUpdated = cameraControls.update(delta); // you can skip this condition to render though

              if (hasControlsUpdated) {
                renderer.render(scene, camera);
              }

              sessao.rotation.x = frameConfig.camRX * (Math.PI / 180);
              sessao.getObjectByName('cama').rotation.x = frameConfig.camRX * -1 * (Math.PI / 180);
              sessao.getObjectByName('dispensador1').rotation.x = frameConfig.camRX * -1 * (Math.PI / 180);
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
              comp.frameTimestamp == 0 ? comp.frameTimestamp = frames[comp.currentFrame][0] : null;

              if (comp.frameTimestamp < frames[comp.currentFrame][0]) {
                cfps = String(Math.round(frames[comp.currentFrame][0] - comp.frameTimestamp)).padStart(3, '0');
              } else if (comp.frameTimestamp > frames[comp.currentFrame][0]) {
                cfps = String(Math.round(comp.frameTimestamp - frames[comp.currentFrame][0])).padStart(3, '0');
              }

              comp.captureFpsStatus = 'Captura a ' + cfps + ' fps';
              comp.playbackFpsStatus = 'Reprodução a ' + comp.fps + ' fps'; //comp.frameTimestampStatus += comp.frameTimestamp +'-'+ frames[comp.currentFrame][0]

              comp.frameTimestamp = frames[comp.currentFrame][0];
              comp.statusMsg = comp.smoothing ? 'Suavização de velocidade on' : comp.distance ? 'Suavização de distância on' : comp.rawData ? 'Suavização off' : 'Suavização de velocidade off';
              frames[comp.currentFrame][1].forEach(function (actor, index) {
                return drawActors(actor, index);
              });
              sessao.add(actors);

              if (!comp.paused) {
                comp.currentFrame = ++comp.currentFrame % frames.length;
              } else {
                comp.statusMsg = 'paused - ' + comp.statusMsg;
              }

              if (document.getElementById('viewer')) {
                comp.timestamp = comp.currentFrame.toString();
                setTimeout(redrawFrame, 1000 / comp.fps);
              } else {
                console.log('newframe stopped');
              }
            }

            function drawActors(actor, index) {
              //actor object received, add actor to actor Three Group
              //console.log(actor)
              var addedActor = new three__WEBPACK_IMPORTED_MODULE_3__.Group();
              var lineMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.LineBasicMaterial({
                vertexColors: three__WEBPACK_IMPORTED_MODULE_3__.VertexColors,
                linewidth: 40 // lineWidth not universally supported works with safari

              });
              var pointMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.PointsMaterial({
                size: 2,
                vertexColors: three__WEBPACK_IMPORTED_MODULE_3__.VertexColors
              });
              var p = 'p';
              var pointColors = [];
              var points = [];

              for (var i = 1; i <= 5; i++) {
                var fixedPoint = fixAxis(actor[p + i]);
                pointColors.push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
                points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
              }

              var headGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry();
              headGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(points, 3));
              headGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(pointColors, 3));
              var head = new three__WEBPACK_IMPORTED_MODULE_3__.Points(headGeometry, pointMaterial);
              addedActor.add(head);
              var bodyPointsIndex = [[10, 8, 6, 12, 14, 16], [11, 9, 7, 13, 15, 17], [6, 7], [12, 13]];
              var linePoints = [];
              var lineGeometries = [];
              var lineColors = [];
              var lines = [];
              var centralPoint = fixAxis(actor['ponto_central']);

              for (var _i = 0; _i < bodyPointsIndex.length; _i++) {
                linePoints[_i] = [];
                lineColors[_i] = [];
                lineGeometries[_i] = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(linePoints[_i]);

                for (var j = 0; j < bodyPointsIndex[_i].length; j++) {
                  //Skip point if it's above threshold
                  if (actor[p + bodyPointsIndex[_i][j]].p > frameConfig.minP) {
                    //if starting frame skip max velocity check
                    var _fixedPoint = fixAxis(actor[p + bodyPointsIndex[_i][j]]);

                    if (comp.distance) {
                      //Distance smoothing
                      _fixedPoint.x = motionLimiter(_fixedPoint.x, centralPoint.x, comp.actorMaxArea.x);
                      _fixedPoint.y = motionLimiter(_fixedPoint.y, centralPoint.y, comp.actorMaxArea.y);
                      _fixedPoint.z = motionLimiter(_fixedPoint.z, centralPoint.z, comp.actorMaxArea.z);
                    } else if (comp.smoothing) {}

                    linePoints[_i].push(_fixedPoint.x, _fixedPoint.y, _fixedPoint.z);

                    lineColors[_i].push(1 - 1 * _fixedPoint.p, 1 * _fixedPoint.p, 0);
                  }
                }

                lineGeometries[_i].setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(linePoints[_i], 3));

                lineGeometries[_i].setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_3__.Float32BufferAttribute(lineColors[_i], 3));

                lines[_i] = new three__WEBPACK_IMPORTED_MODULE_3__.Line(lineGeometries[_i], lineMaterial);

                lines[_i].computeLineDistances();

                actors.add(lines[_i]);
              }

              actors.add(addedActor);
            }

            function scale(number, inMin, inMax, outMin, outMax) {
              return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('stop', this.requestId);
            cancelAnimationFrame(this.requestId);
          }
        }]);

        return ViewerComponent;
      }();

      _ViewerComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }];
      };

      _ViewerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-viewer',
        template: _raw_loader_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewerComponent);
      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      7435);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      6747);

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    7435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js */
      7277);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
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

      /***/

    },

    /***/
    8592: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".isDisabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n.isDisabled > a {\r\n  color: currentColor;\r\n  display: inline-block; /* For IE11/ MS Edge bug */\r\n  pointer-events: none;\r\n  text-decoration: none;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1002;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blurred {\r\n  filter: blur(2px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFFLDBCQUEwQjtFQUNqRCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYWxsLXNlc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNEaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmlzRGlzYWJsZWQgPiBhIHtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogRm9yIElFMTEvIE1TIEVkZ2UgYnVnICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ibHVycmVkIHtcclxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    1249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    9217: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzZWQtc2Vzc2lvbnMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    3443: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    9659: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbWFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    394: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#viewer {\r\n  position: relative;\r\n}\r\n#timestamp {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  color: #666;\r\n  text-align: right;\r\n  padding: 10px;\r\n}\r\n.overlay {\r\n  position: absolute;\r\n  z-index: 1002;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.blurred {\r\n  filter: blur(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ2aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jdGltZXN0YW1wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJsdXJyZWQge1xyXG4gIGZpbHRlcjogYmx1cigycHgpO1xyXG59Il19 */";
      /***/
    },

    /***/
    3712: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<div class=\"position-relative\">\n  <table class=\"table table-striped\" [class.blurred]=\"showSpinner\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Sessão ID</th>\n        <th scope=\"col\">Início</th>\n        <th scope=\"col\">Fim</th>\n        <th scope=\"col\">Frames</th>\n        <th scope=\"col\">Grupo</th>\n        <th scope=\"col\">link</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let session of sessions\">\n        <th scope=\"row\">{{session.session}}</th>\n        <td>{{session.startDate}}</td>\n        <td>{{session.endDate}}</td>\n        <td>{{session.frames}}</td>\n        <td>{{session.totalFrames == session.frames ? 'Não':'Sim'}}</td>\n        <td class=\"\">\n          <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"overlay position-absolute top-0 end-0\" *ngIf=\"showSpinner\">\n    <div class=\"spinner-wrapper pt-5\">\n      <img class=\"m-auto d-block mt-5\" style='width:60px' src=\"https://whymob.dev/ysmart/loading.gif\">\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    1106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6 col-sm-12\"><h1 class=\"text-left\">{{title}}</h1></div>\n  <div class=\"col-md-6 col-sm-12 d-flex justify-content-md-end justify-content-sm-between align-items-md-center align-items-sm-start\">\n    <nav class=\"text-right\">\n      <a routerLink=\"/\">Todas as sessões</a>\n      &nbsp;\n      <a routerLink=\"/small\">Sessões de curta duração</a>\n      &nbsp;\n      <a routerLink=\"/processed\">Sessões processadas</a>\n    </nav>\n  </div>\n</div>\n<hr />\n<router-outlet></router-outlet>\n<footer class=\"fixed-bottom p-2 text-end text-muted\" style=\"background-color: rgba(255, 255, 255, 0.6);\">powered by whymob (<a href=\"./assets/release-notes.txt\">v{{v}}</a>)</footer>";
      /***/
    },

    /***/
    4172: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Início</th>\n      <th scope=\"col\">Fim</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.startDate}}</td>\n      <td>{{session.endDate}}</td>\n      <td>\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>";
      /***/
    },

    /***/
    8580: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\nsession-details works!\n</p>";
      /***/
    },

    /***/
    5695: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"text-center\">Sessões gravadas com duração inferior a: {{limit}}s</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Duração</th>\n      <th scope=\"col\">Frames</th>\n      <th scope=\"col\">Grupo</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.duration}}</td>\n      <td>{{session.frames}}</td>\n      <td>{{session.totalFrames == session.frames ? 'Não':'Sim'}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>";
      /***/
    },

    /***/
    504: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3 class=\"text-center fw-bold text-uppercase\">\n  Sessão {{id}}\n</h3>\n<div class=\"position-relative\">\n  <div class=\"viewer-wrapper\" [class.blurred]=\"showSpinner\">\n    <div id=\"viewer\" class=\"position-relative\">\n      <span class=\"d-block end-0 pe-3 position-absolute pt-2 text-end top-0\">\n        {{captureFpsStatus}}<br>\n        {{playbackFpsStatus}}\n        <div *ngIf=\"paused\">Frame Timestamp: {{frameTimestamp}}</div>\n      </span>\n      <span class=\"d-block start-0 ps-3 position-absolute pt-2 text-start top-0\">{{timestamp}}</span>\n      <span class=\"bottom-0 d-block end-0 pb-2 pe-3 position-absolute text-end\">{{statusMsg}}</span>\n    </div>\n    <div class=\"row\" *ngIf=\"!showSpinner\">\n      <div class=\"col-md-4 col-sm-6 pt-4\">\n          <h4>Dados da sessão</h4> \n          <div>Sessão gravada em:</div>\n          <div class=\"fw-bolder\">{{sessionDate}} </div>\n          <div>com uma duração de:</div>\n          <div><span class=\"fw-bolder\">{{sessionDuration}}</span> e <span class=\"fw-bolder\">{{totalFrames}}</span> frames.</div>\n          <div>(Animation frame ID:<span class=\"fw-bolder\">{{requestId}}</span>)</div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 pt-4\">\n          <h5>Dados de oportunidades</h5> \n          <p>Informação a adiccionar.</p>\n          <h6>Playback</h6>\n          <div class=\"mt-2 mb-2\">\n              <div class=\"btn-group me-2\" role=\"group\" aria-label=\"First group\">\n                  <button type=\"button\" class=\"btn btn-outline-secondary\"(click)=\"currentFrame = (currentFrame == 0)? totalFrames-1 : currentFrame -1 \">\n                      <i class=\"bi bi-skip-backward-fill\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"paused = !paused\">\n                      <i class=\"bi bi-play-fill\" *ngIf=\"paused\"></i>\n                      <i class=\"bi bi-pause-fill\" *ngIf=\"!paused\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"currentFrame = (currentFrame + 1)% totalFrames\">\n                      <i class=\"bi bi-skip-forward-fill\"></i>\n                  </button>\n              </div>\n          </div>\n          <h6>Velocidade Reprodução</h6>\n          <div class=\"mt-2\">\n            <input type=\"range\" class=\"custom-range\" min=\"1\" max=\"60\" step=\"1\" [(ngModel)]=\"fps\" id=\"fps\">\n            <span> {{fps}} fps</span>\n          </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12 pt-4\">\n          <h5>Visualizador</h5>\n          <h6>Estratégia de suavização</h6>\n          <div class=\"form-check form-switch\" *ngIf=\"false\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"smoothing\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"distance = !smoothing; rawData = false\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Velocidade max. (corpo)</label>\n          </div> \n          <div class=\"form-check form-switch\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"distance\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"smoothing = false; rawData = !distance\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Distância Central (corpo)</label>\n          </div>  \n          <div class=\"form-check form-switch\" *ngIf=\"false\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" [(ngModel)]=\"rawData\"\n              [ngModelOptions]=\"{standalone: true}\" (change)=\"distance = !rawData; smoothing = false\">\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Sem suavização</label>\n          </div>\n          <div *ngIf=\"distance\">\n            <label for=\"customRange3\">Limites de distância</label><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"20\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.x\" id=\"actorMaxAreaX\">\n            <span> x: {{actorMaxArea.x}}</span><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"202\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.y\" id=\"actorMaxAreaY\">\n            <span> y: {{actorMaxArea.y}}</span><br>\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"20\" step=\"0.5\" [(ngModel)]=\"actorMaxArea.z\" id=\"actorMaxAreaZ\">\n            <span> z: {{actorMaxArea.z}}</span>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"position-absolute top-0 bottom-0 start-0 end-0\" *ngIf=\"showSpinner\">\n    <div class=\"spinner-wrapper pt-5\">\n      <img class=\"m-auto d-block mt-5\" style=\"width:60px\" src=\"https://whymob.dev/ysmart/loading.gif\">\n      <span class=\"m-auto d-block mt-2 w-50 text-center text-secondary\">Loading</span>\n    </div>\n  </div>\n</div>\n\n\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map