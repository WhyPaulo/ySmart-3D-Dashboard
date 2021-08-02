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


      var _sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sessions.service */
      4659);

      var _AllSessionsComponent = /*#__PURE__*/function () {
        function AllSessionsComponent(sess) {
          var _this = this;

          _classCallCheck(this, AllSessionsComponent);

          this.sess = sess;
          sess.getData().subscribe(function (data) {
            _this.sessions = data;

            _this.sessions.forEach(function (session) {
              session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
              session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
            });
          });
        }

        _createClass(AllSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllSessionsComponent;
      }();

      _AllSessionsComponent.ctorParameters = function () {
        return [{
          type: _sessions_service__WEBPACK_IMPORTED_MODULE_2__.SessionsService
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
    4659: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionsService": function SessionsService() {
          return (
            /* binding */
            _SessionsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _SessionsService = /*#__PURE__*/function () {
        function SessionsService(http) {
          _classCallCheck(this, SessionsService);

          this.http = http;
        }

        _createClass(SessionsService, [{
          key: "getData",
          value: function getData() {
            return this.http.get('https://ysmartdata.whymob.dev/get/sessions');
          }
        }]);

        return SessionsService;
      }();

      _SessionsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _SessionsService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _SessionsService);
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
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'my-app',
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


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hello.component */
      8324);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);
      /* harmony import */


      var _small_sessions_get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./small-sessions/get-small-sessions.service */
      4507);
      /* harmony import */


      var _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./small-sessions/small-sessions.component */
      1329);
      /* harmony import */


      var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./viewer/viewer.component */
      7101);
      /* harmony import */


      var _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./all-sessions/all-sessions.component */
      5604);
      /* harmony import */


      var _all_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./all-sessions/sessions.service */
      4659);
      /* harmony import */


      var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./session-details/session-details.component */
      4121);
      /* harmony import */


      var _viewer_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./viewer/session.service */
      909);
      /* harmony import */


      var _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./processed-sessions/processed-sessions.component */
      6458);

      var routes = [{
        path: '',
        component: _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__.AllSessionsComponent
      }, {
        path: 'small',
        component: _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__.SmallSessionsComponent
      }, {
        path: 'processed',
        component: _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__.ProcessedSessionsComponent
      }, {
        path: 'view/:id',
        component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ViewerComponent
      }];

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _hello_component__WEBPACK_IMPORTED_MODULE_1__.HelloComponent, _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__.SmallSessionsComponent, _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ViewerComponent, _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__.AllSessionsComponent, _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_7__.SessionDetailsComponent, _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__.ProcessedSessionsComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [_small_sessions_get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__.GetSmallSessionsService, _all_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__.SessionsService, _viewer_session_service__WEBPACK_IMPORTED_MODULE_8__.SessionService, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.APP_BASE_HREF,
          useValue: '/' + (window.location.pathname.split('/')[1] || '')
        }]
      })], _AppModule);
      /***/
    },

    /***/
    8324: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelloComponent": function HelloComponent() {
          return (
            /* binding */
            _HelloComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts_css_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_node_modules_ngtools_webpack_src_inline_data_loader_js_data_aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ_3D_3D_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ%3D%3D!./src/app/hello.component.ts */
      5474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      _HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };
      _HelloComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'hello',
        template: "<h1>Hello {{name}}!</h1>",
        styles: [C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts_css_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_node_modules_ngtools_webpack_src_inline_data_loader_js_data_aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ_3D_3D_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__["default"]]
      })], _HelloComponent);
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


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProcessedSessionsComponent = /*#__PURE__*/function () {
        function ProcessedSessionsComponent() {
          _classCallCheck(this, ProcessedSessionsComponent);

          this.sessions = [{
            session: 1625843694,
            startTime: 1625843694,
            endTime: 1625843710,
            duration: '00:00:16',
            frames: 263
          }, {
            session: 1625844273,
            startTime: 1625844273,
            endTime: 1625844455,
            duration: '00:03:02',
            frames: 4748
          }, {
            session: 1626265938,
            startTime: 1626265938,
            endTime: 1626265952,
            duration: '00:00:14',
            frames: 182
          }];
          this.sessions.forEach(function (session) {
            session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
            session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
          });
        }

        _createClass(ProcessedSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadJsFile('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js', 'jquery');
          }
        }, {
          key: "loadJsFile",
          value: function loadJsFile(url, id) {
            var node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.id = id;

            if (document.getElementById(id)) {
              console.log('script already present');
            } else {//document.getElementsByTagName('head')[0].appendChild(node);
            }
          }
        }]);

        return ProcessedSessionsComponent;
      }();

      _ProcessedSessionsComponent.ctorParameters = function () {
        return [];
      };

      _ProcessedSessionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
    4507: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GetSmallSessionsService": function GetSmallSessionsService() {
          return (
            /* binding */
            _GetSmallSessionsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _GetSmallSessionsService = /*#__PURE__*/function () {
        function GetSmallSessionsService(http) {
          _classCallCheck(this, GetSmallSessionsService);

          this.http = http;
        }

        _createClass(GetSmallSessionsService, [{
          key: "getData",
          value: function getData(duration) {
            return this.http.get('https://ysmartdata.whymob.dev/get/small-sessions/' + duration);
          }
        }]);

        return GetSmallSessionsService;
      }();

      _GetSmallSessionsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _GetSmallSessionsService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _GetSmallSessionsService);
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


      var _get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./get-small-sessions.service */
      4507);

      var _SmallSessionsComponent = /*#__PURE__*/function () {
        function SmallSessionsComponent(sess) {
          var _this2 = this;

          _classCallCheck(this, SmallSessionsComponent);

          this.sess = sess;
          this.limit = 10;
          sess.getData(this.limit).subscribe(function (data) {
            _this2.sessions = data;
          });
        }

        _createClass(SmallSessionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SmallSessionsComponent;
      }();

      _SmallSessionsComponent.ctorParameters = function () {
        return [{
          type: _get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__.GetSmallSessionsService
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
    909: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionService": function SessionService() {
          return (
            /* binding */
            _SessionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _SessionService = /*#__PURE__*/function () {
        function SessionService(http) {
          _classCallCheck(this, SessionService);

          this.http = http;
        }

        _createClass(SessionService, [{
          key: "getData",
          value: function getData(id) {
            return this.http.get('https://ysmartdata.whymob.dev/get/actor-frames/' + id);
          }
        }]);

        return SessionService;
      }();

      _SessionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _SessionService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _SessionService);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./session.service */
      909);
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! three */
      7758);
      /* harmony import */


      var camera_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! camera-controls */
      2508);

      camera_controls__WEBPACK_IMPORTED_MODULE_3__["default"].install({
        THREE: three__WEBPACK_IMPORTED_MODULE_4__
      });

      var _ViewerComponent = /*#__PURE__*/function () {
        function ViewerComponent(_Activatedroute, sess) {
          var _this3 = this;

          _classCallCheck(this, ViewerComponent);

          this._Activatedroute = _Activatedroute;
          this.sess = sess;
          this.dataLoaded = false;
          this.timestamp = '00:00:00';
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
              mode: '3d',
              framePointsCount: 18,
              maxMovement: 5
            },
            actores: [],
            camaPoints: {
              x: 0.10985056310892105,
              y: -0.13395646214485168,
              z: 3.380000114440918
            },
            dispensadores: [{
              x: 0.2630771994590759,
              y: -0.019362561404705048,
              z: 3.4200000762939453
            }],
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
          sess.getData(this.id).subscribe(function (data) {
            _this3.totalFrames = data.actores[0].length / 18;
            _this3.sessionDuration = data.duration;
            _this3.data.actores = data.actores; //this.data.camaPoints = data.camaPoints;

            _this3.buildViewer();

            _this3.dataLoaded = true;
          });
        }

        _createClass(ViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "buildViewer",
          value: function buildViewer() {
            this.timestamp = '0';
            var comp = this; // Find the latest version by visiting https://unpkg.com/three.

            var camera, scene, renderer, actor, sessao, floor, cameraControls, clock, stats, gui;
            var frameConfig, framePointsCount;
            var currentPoints = [];
            var play = true;
            var paused = false;
            var fps = 15;
            var factor = 100;
            var currentFrame = 0;
            var maxFrames; //Frames

            var frame, camaPoints, dispensadores, detectedFloor;
            frameConfig = this.data.frameConfig;
            frame = this.data.actores[0];
            framePointsCount = frameConfig.framePointsCount;
            camaPoints = this.data.camaPoints;
            dispensadores = this.data.dispensadores;
            detectedFloor = this.data.floor;
            maxFrames = this.data.actores[0].length / framePointsCount;
            init();
            animate();

            function init() {
              console.log('Positions using', frameConfig.mode); // Set renderer

              renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({
                antialias: true
              });
              renderer.setSize(document.getElementById('viewer').offsetWidth, document.getElementById('viewer').offsetWidth / 2);
              document.getElementById('viewer').appendChild(renderer.domElement); // Set scene

              scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
              scene.background = new three__WEBPACK_IMPORTED_MODULE_4__.Color(0xeeeeee); // Set floor helper

              floor = new three__WEBPACK_IMPORTED_MODULE_4__.GridHelper(frameConfig.x, 10);
              scene.add(floor); // Set Camera

              camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(70, 1.5, 1, 2000);
              camera.up.set(0, 0.5, 0); // Set Camera Controls

              clock = new three__WEBPACK_IMPORTED_MODULE_4__.Clock();
              cameraControls = new camera_controls__WEBPACK_IMPORTED_MODULE_3__["default"](camera, renderer.domElement);
              cameraControls.setLookAt(0, frameConfig.x / 4, frameConfig.x / 2, 0, 0, 0, true);
              sessao = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
              sessao.name = 'sessao'; //CAMA

              var cama = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
              cama.name = 'cama';
              var camaWidth = frameConfig.bedW,
                  camaHeight = frameConfig.bedH,
                  camaDepth = frameConfig.bedD;
              var camaGeo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(camaWidth, camaHeight, camaDepth);
              var camaMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.MeshPhongMaterial({
                color: 0x00ff00
              });
              var camaMesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(camaGeo, camaMaterial);
              var camaPoint = fixAxis(camaPoints);
              cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
              camaMesh.position.set(0, 0, camaDepth / 2);
              cama.add(camaMesh);
              sessao.add(cama); //DISPENSADOR

              var dispensadorMat = new three__WEBPACK_IMPORTED_MODULE_4__.MeshPhongMaterial({
                color: 0xffff00
              });
              var dispensador1Geo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(25, 50, 25);
              var dispensador2Geo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(25, 50, 25);
              var dispensador1 = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(dispensador1Geo, dispensadorMat);
              var fixedDispensadorPoint = fixAxis(dispensadores[0]);
              dispensador1.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
              var dispensador2 = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(dispensador2Geo, dispensadorMat);
              fixedDispensadorPoint = fixAxis([903.75, 186.5, 3.917]);
              dispensador2.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
              sessao.add(dispensador1); //scene.add( dispensador2 )
              //ADD Detected floor
              //create a blue LineBasicMaterial

              var floorLineineMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.LineBasicMaterial({
                color: '#00ff00'
              });
              var floorPoints = [];

              for (var i = 0; i < detectedFloor.length; i++) {
                var fixedFloorPoint = fixAxis(detectedFloor[i]);
                floorPoints.push(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(fixedFloorPoint.x, fixedFloorPoint.y, fixedFloorPoint.z));
              }

              var floorGeometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(floorPoints);
              var baseFloor = new three__WEBPACK_IMPORTED_MODULE_4__.Line(floorGeometry, floorLineineMaterial); //sessao.add(baseFloor);
              //Create actor group for animation

              actor = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
              actor.name = 'actor';
              sessao.add(actor);
              scene.add(sessao);
              newFrame2(); //lights

              var dirLight1 = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0xffffff);
              dirLight1.position.set(1, 1, 1);
              scene.add(dirLight1);
              var dirLight2 = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0x002288);
              dirLight2.position.set(-1, -1, -1);
              scene.add(dirLight2);
              var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0x222222);
              scene.add(ambientLight); //

              window.removeEventListener('resize', onWindowResize);
              window.addEventListener('resize', onWindowResize); //stats = new Stats();
              //stats.domElement.style.position = 'absolute';
              //document.getElementById('viewer').appendChild(stats.dom);
              //initGui();
            }

            function fixAxis(point) {
              if (frameConfig.mode == 'pixel') {
                //Frame axis is top left, world is center bottom
                //offset x half the frame withd to the left
                var tempX = scale(point[0], 0, frameConfig.x, frameConfig.x / 2 * -1, frameConfig.x / 2); //point[0] - (frameConfig.x /2);

                var tempY = scale(point[1], 0, frameConfig.y, frameConfig.y, 0); //frameConfig.y-point[1]-frameConfig.camY;

                var tempZ = scale(point[2], 0, frameConfig.z, frameConfig.x / 2, frameConfig.x / 2 * -1);
                return {
                  x: tempX,
                  y: tempY,
                  z: tempZ,
                  p: point[3]
                }; //return {x: point[0], y:point[1], z:point[2]*200, p:point[3]}
              } else {
                var _tempX = point.x * factor;

                var _tempY = point.y * factor * -1;

                var _tempZ = point.z * factor * -1;

                return {
                  x: _tempX,
                  y: _tempY,
                  z: _tempZ,
                  p: point.p
                };
              }
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
              actor.clear();
              sessao.remove(actor);
              var startIndex = currentFrame % (frame.length / framePointsCount) * framePointsCount; //console.log('/////////////////')
              //console.log('// FRAME',currentFrame%(frame.length/framePointsCount))
              //rebuild actor
              //create a blue LineBasicMaterial

              var lineMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.LineBasicMaterial({
                vertexColors: three__WEBPACK_IMPORTED_MODULE_4__.VertexColors,
                linewidth: 40 // lineWidth not universally supported works with safari

              });
              var pointMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.PointsMaterial({
                size: 2,
                vertexColors: three__WEBPACK_IMPORTED_MODULE_4__.VertexColors
              });
              var pointColors = [];
              var points = [];
              actor = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
              actor.name = 'actor';

              for (var i = 0; i < 5; i++) {
                var fixedPoint = fixAxis(frame[startIndex + i]);
                pointColors.push(1 - 1 * frame[i][3], 1 * frame[i][3], 0);
                points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
              }

              var headGeometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry();
              headGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(points, 3));
              headGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(pointColors, 3));
              var head = new three__WEBPACK_IMPORTED_MODULE_4__.Points(headGeometry, pointMaterial);
              actor.add(head);
              var bodyPointsIndex = [[10, 8, 6, 12, 14, 16], [11, 9, 7, 13, 15, 17], [6, 7], [12, 13]];
              var linePoints = [];
              var lineGeometries = [];
              var lineColors = [];
              var lines = [];
              var currentPoint;

              for (var _i = 0; _i < bodyPointsIndex.length; _i++) {
                linePoints[_i] = [];
                lineColors[_i] = [];
                lineGeometries[_i] = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(linePoints[_i]);

                for (var j = 0; j < bodyPointsIndex[_i].length; j++) {
                  //Skip point if it's above threshold
                  if (frame[startIndex + (bodyPointsIndex[_i][j] - 1)].p > frameConfig.minP) {
                    var _fixedPoint = {
                      x: 0,
                      y: 0,
                      z: 0,
                      p: 0
                    };
                    var newPoint = {
                      x: 0,
                      y: 0,
                      z: 0,
                      p: 1
                    }; //if starting frame skip max velocity check

                    if (startIndex < framePointsCount) {
                      _fixedPoint = fixAxis(frame[startIndex + (bodyPointsIndex[_i][j] - 1)]);
                      currentPoints[bodyPointsIndex[_i][j] - 1] = _fixedPoint;
                    } else {
                      _fixedPoint = fixAxis(frame[startIndex + (bodyPointsIndex[_i][j] - 1)]);
                      currentPoint = currentPoints[bodyPointsIndex[_i][j] - 1];
                      newPoint.x = motionLimiter(_fixedPoint.x, currentPoint.x, frameConfig.maxMovement);
                      newPoint.y = motionLimiter(_fixedPoint.y, currentPoint.y, frameConfig.maxMovement);
                      newPoint.z = motionLimiter(_fixedPoint.z, currentPoint.z, frameConfig.maxMovement);
                      newPoint.p = _fixedPoint.p;
                      _fixedPoint = newPoint;
                      currentPoints[bodyPointsIndex[_i][j] - 1] = _fixedPoint;
                    }

                    linePoints[_i].push(_fixedPoint.x, _fixedPoint.y, _fixedPoint.z);

                    lineColors[_i].push(1 - 1 * _fixedPoint.p, 1 * _fixedPoint.p, 0);
                  }
                }

                lineGeometries[_i].setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(linePoints[_i], 3));

                lineGeometries[_i].setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(lineColors[_i], 3));

                lines[_i] = new three__WEBPACK_IMPORTED_MODULE_4__.Line(lineGeometries[_i], lineMaterial);

                lines[_i].computeLineDistances();

                actor.add(lines[_i]);
              }

              sessao.add(actor); //scene.add(sessao)

              if (!paused) {
                currentFrame++;
              }

              if (document.getElementById('viewer')) {
                document.getElementById('timestamp').innerText = (currentFrame % (frame.length / framePointsCount)).toString();
                setTimeout(newFrame2, 1000 / fps);
              } else {
                console.log('newframe stopped');
              } //console.log(actor)

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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService
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
    5474: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1 { font-family: Lato; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGlCQUFpQixFQUFFIiwiZmlsZSI6ImhlbGxvLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgZm9udC1mYW1pbHk6IExhdG87IH0iXX0= */";
      /***/
    },

    /***/
    8592: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".isDisabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n.isDisabled > a {\r\n  color: currentColor;\r\n  display: inline-block; /* For IE11/ MS Edge bug */\r\n  pointer-events: none;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFFLDBCQUEwQjtFQUNqRCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzRGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5pc0Rpc2FibGVkID4gYSB7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIEZvciBJRTExLyBNUyBFZGdlIGJ1ZyAqL1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    1249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.295);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsNENBQTRDO0FBQzlDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjk1KTtcbn1cbiJdfQ== */";
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


      __webpack_exports__["default"] = "#viewer {\r\n  position: relative;\r\n}\r\n#timestamp {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  color: #666;\r\n  text-align: right;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2YiLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlld2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3RpbWVzdGFtcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    3712: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Início</th>\n      <th scope=\"col\">Fim</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.startDate}}</td>\n      <td>{{session.endDate}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>";
      /***/
    },

    /***/
    1106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"text-center\">{{title}}</h1>\n<hr />\n<nav class=\"text-center\">\n  <a routerLink=\"/\">Todas as sessões</a>\n  &nbsp;\n  <a routerLink=\"/small\">Sessões de curta duração</a>\n  &nbsp;\n  <a routerLink=\"/processed\">Sessões processadas</a>\n</nav>\n<hr />\n<router-outlet></router-outlet>\n<footer class=\"text-end p-2 text-muted\">powered by whymob</footer>";
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


      __webpack_exports__["default"] = "<h4 class=\"text-center\">Sessões gravadas com duração inferior a: {{limit}}s</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Duração</th>\n      <th scope=\"col\">Frames</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.duration}}</td>\n      <td>{{session.frames}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>";
      /***/
    },

    /***/
    504: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p class=\"text-center fw-bold text-uppercase\">\n  Sessão {{id}}\n</p>\n<div id=\"viewer\">\n  <span id=\"timestamp\"></span>\n  <img *ngIf=\"!dataLoaded\" id=\"loading\" class=\"m-auto d-block\" style='width:60px' src=\"https://whymob.dev/ysmart/loading.gif\">\n</div>\n<p class=\"text-center\" *ngIf=\"dataLoaded\">Sessão gravada em {{sessionDate}} com uma duração de {{sessionDuration}} e\n  {{totalFrames}} frames. ({{requestId}})\n</p>";
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