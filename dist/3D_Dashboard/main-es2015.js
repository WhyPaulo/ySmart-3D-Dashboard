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
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessions.service */ 4659);





let AllSessionsComponent = class AllSessionsComponent {
    constructor(sess) {
        this.sess = sess;
        sess.getData().subscribe((data) => {
            this.sessions = data;
            this.sessions.forEach(session => {
                session.startDate = new Date(session.startTime * 1000).toLocaleString('pt-PT');
                session.endDate = new Date(session.endTime * 1000).toLocaleString('pt-PT');
            });
        });
    }
    ngOnInit() { }
};
AllSessionsComponent.ctorParameters = () => [
    { type: _sessions_service__WEBPACK_IMPORTED_MODULE_2__.SessionsService }
];
AllSessionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-all-sessions',
        template: _raw_loader_all_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_all_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllSessionsComponent);



/***/ }),

/***/ 4659:
/*!**************************************************!*\
  !*** ./src/app/all-sessions/sessions.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsService": function() { return /* binding */ SessionsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let SessionsService = class SessionsService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('https://ysmartdata.whymob.dev/get/sessions');
    }
};
SessionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
SessionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SessionsService);



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
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'my-app',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.component */ 8324);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _small_sessions_get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./small-sessions/get-small-sessions.service */ 4507);
/* harmony import */ var _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./small-sessions/small-sessions.component */ 1329);
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer/viewer.component */ 7101);
/* harmony import */ var _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-sessions/all-sessions.component */ 5604);
/* harmony import */ var _all_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-sessions/sessions.service */ 4659);
/* harmony import */ var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session-details/session-details.component */ 4121);
/* harmony import */ var _viewer_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer/session.service */ 909);
/* harmony import */ var _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processed-sessions/processed-sessions.component */ 6458);


















const routes = [
    { path: '', component: _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__.AllSessionsComponent },
    { path: 'small', component: _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__.SmallSessionsComponent },
    { path: 'processed', component: _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__.ProcessedSessionsComponent },
    { path: 'view/:id', component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ViewerComponent }
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _hello_component__WEBPACK_IMPORTED_MODULE_1__.HelloComponent,
            _small_sessions_small_sessions_component__WEBPACK_IMPORTED_MODULE_3__.SmallSessionsComponent,
            _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ViewerComponent,
            _all_sessions_all_sessions_component__WEBPACK_IMPORTED_MODULE_5__.AllSessionsComponent,
            _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_7__.SessionDetailsComponent,
            _processed_sessions_processed_sessions_component__WEBPACK_IMPORTED_MODULE_9__.ProcessedSessionsComponent
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [
            _small_sessions_get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__.GetSmallSessionsService,
            _all_sessions_sessions_service__WEBPACK_IMPORTED_MODULE_6__.SessionsService,
            _viewer_session_service__WEBPACK_IMPORTED_MODULE_8__.SessionService,
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.APP_BASE_HREF,
                useValue: '/' + (window.location.pathname.split('/')[1] || '')
            }
        ]
    })
], AppModule);



/***/ }),

/***/ 8324:
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloComponent": function() { return /* binding */ HelloComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts_css_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_node_modules_ngtools_webpack_src_inline_data_loader_js_data_aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ_3D_3D_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ%3D%3D!./src/app/hello.component.ts */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
HelloComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: [C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts_css_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_node_modules_ngtools_webpack_src_inline_data_loader_js_data_aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ_3D_3D_C_Users_Paulo_Fernandes_Desktop_ysmart_3d_dashboard_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__.default]
    })
], HelloComponent);



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

/***/ 4507:
/*!**************************************************************!*\
  !*** ./src/app/small-sessions/get-small-sessions.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetSmallSessionsService": function() { return /* binding */ GetSmallSessionsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let GetSmallSessionsService = class GetSmallSessionsService {
    constructor(http) {
        this.http = http;
    }
    getData(duration) {
        return this.http.get('https://ysmartdata.whymob.dev/get/small-sessions/' + duration);
    }
};
GetSmallSessionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GetSmallSessionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], GetSmallSessionsService);



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
/* harmony import */ var _get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-small-sessions.service */ 4507);





let SmallSessionsComponent = class SmallSessionsComponent {
    constructor(sess) {
        this.sess = sess;
        this.limit = 10;
        sess.getData(this.limit).subscribe((data) => {
            this.sessions = data;
        });
    }
    ngOnInit() { }
};
SmallSessionsComponent.ctorParameters = () => [
    { type: _get_small_sessions_service__WEBPACK_IMPORTED_MODULE_2__.GetSmallSessionsService }
];
SmallSessionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-small-sessions',
        template: _raw_loader_small_sessions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_small_sessions_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SmallSessionsComponent);



/***/ }),

/***/ 909:
/*!*******************************************!*\
  !*** ./src/app/viewer/session.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": function() { return /* binding */ SessionService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let SessionService = class SessionService {
    constructor(http) {
        this.http = http;
    }
    getData(id) {
        return this.http.get('https://ysmartdata.whymob.dev/get/actor-frames/' + id);
    }
};
SessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
SessionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SessionService);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ 909);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ 7758);
/* harmony import */ var camera_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! camera-controls */ 2508);








camera_controls__WEBPACK_IMPORTED_MODULE_3__.default.install({ THREE: three__WEBPACK_IMPORTED_MODULE_4__ });
let ViewerComponent = class ViewerComponent {
    constructor(_Activatedroute, sess) {
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
            dispensadores: [
                { x: 0.2630771994590759, y: -0.019362561404705048, z: 3.4200000762939453 }
            ],
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
        sess.getData(this.id).subscribe((data) => {
            this.totalFrames = data.actores[0].length / 18;
            this.sessionDuration = data.duration;
            this.data.actores = data.actores;
            //this.data.camaPoints = data.camaPoints;
            this.buildViewer();
            this.dataLoaded = true;
        });
    }
    ngOnInit() { }
    buildViewer() {
        this.timestamp = '0';
        let comp = this;
        // Find the latest version by visiting https://unpkg.com/three.
        let camera, scene, renderer, actor, sessao, floor, cameraControls, clock, stats, gui;
        let frameConfig, framePointsCount;
        let currentPoints = [];
        let play = true;
        let paused = false;
        let fps = 15;
        let factor = 100;
        let currentFrame = 0;
        let maxFrames;
        //Frames
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
            console.log('Positions using', frameConfig.mode);
            // Set renderer
            renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({ antialias: true });
            renderer.setSize(document.getElementById('viewer').offsetWidth, document.getElementById('viewer').offsetWidth / 2);
            document.getElementById('viewer').appendChild(renderer.domElement);
            // Set scene
            scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
            scene.background = new three__WEBPACK_IMPORTED_MODULE_4__.Color(0xeeeeee);
            // Set floor helper
            floor = new three__WEBPACK_IMPORTED_MODULE_4__.GridHelper(frameConfig.x, 10);
            scene.add(floor);
            // Set Camera
            camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(70, 1.5, 1, 2000);
            camera.up.set(0, 0.5, 0);
            // Set Camera Controls
            clock = new three__WEBPACK_IMPORTED_MODULE_4__.Clock();
            cameraControls = new camera_controls__WEBPACK_IMPORTED_MODULE_3__.default(camera, renderer.domElement);
            cameraControls.setLookAt(0, frameConfig.x / 4, frameConfig.x / 2, 0, 0, 0, true);
            sessao = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
            sessao.name = 'sessao';
            //CAMA
            const cama = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
            cama.name = 'cama';
            let camaWidth = frameConfig.bedW, camaHeight = frameConfig.bedH, camaDepth = frameConfig.bedD;
            const camaGeo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(camaWidth, camaHeight, camaDepth);
            const camaMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.MeshPhongMaterial({ color: 0x00ff00 });
            const camaMesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(camaGeo, camaMaterial);
            let camaPoint = fixAxis(camaPoints);
            cama.position.set(camaPoint.x, camaPoint.y, camaPoint.z);
            camaMesh.position.set(0, 0, camaDepth / 2);
            cama.add(camaMesh);
            sessao.add(cama);
            //DISPENSADOR
            const dispensadorMat = new three__WEBPACK_IMPORTED_MODULE_4__.MeshPhongMaterial({ color: 0xffff00 });
            const dispensador1Geo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(25, 50, 25);
            const dispensador2Geo = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(25, 50, 25);
            const dispensador1 = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(dispensador1Geo, dispensadorMat);
            let fixedDispensadorPoint = fixAxis(dispensadores[0]);
            dispensador1.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
            const dispensador2 = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(dispensador2Geo, dispensadorMat);
            fixedDispensadorPoint = fixAxis([903.75, 186.5, 3.917]);
            dispensador2.position.set(fixedDispensadorPoint.x, fixedDispensadorPoint.y, fixedDispensadorPoint.z);
            sessao.add(dispensador1);
            //scene.add( dispensador2 )
            //ADD Detected floor
            //create a blue LineBasicMaterial
            var floorLineineMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.LineBasicMaterial({
                color: '#00ff00'
            });
            const floorPoints = [];
            for (let i = 0; i < detectedFloor.length; i++) {
                let fixedFloorPoint = fixAxis(detectedFloor[i]);
                floorPoints.push(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(fixedFloorPoint.x, fixedFloorPoint.y, fixedFloorPoint.z));
            }
            const floorGeometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(floorPoints);
            const baseFloor = new three__WEBPACK_IMPORTED_MODULE_4__.Line(floorGeometry, floorLineineMaterial);
            //sessao.add(baseFloor);
            //Create actor group for animation
            actor = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
            actor.name = 'actor';
            sessao.add(actor);
            scene.add(sessao);
            newFrame2();
            //lights
            const dirLight1 = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0xffffff);
            dirLight1.position.set(1, 1, 1);
            scene.add(dirLight1);
            const dirLight2 = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0x002288);
            dirLight2.position.set(-1, -1, -1);
            scene.add(dirLight2);
            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0x222222);
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
            if (frameConfig.mode == 'pixel') {
                //Frame axis is top left, world is center bottom
                //offset x half the frame withd to the left
                let tempX = scale(point[0], 0, frameConfig.x, (frameConfig.x / 2) * -1, frameConfig.x / 2); //point[0] - (frameConfig.x /2);
                let tempY = scale(point[1], 0, frameConfig.y, frameConfig.y, 0); //frameConfig.y-point[1]-frameConfig.camY;
                let tempZ = scale(point[2], 0, frameConfig.z, frameConfig.x / 2, (frameConfig.x / 2) * -1);
                return { x: tempX, y: tempY, z: tempZ, p: point[3] };
                //return {x: point[0], y:point[1], z:point[2]*200, p:point[3]}
            }
            else {
                let tempX = point.x * factor;
                let tempY = point.y * factor * -1;
                let tempZ = point.z * factor * -1;
                return { x: tempX, y: tempY, z: tempZ, p: point.p };
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
            let startIndex = (currentFrame % (frame.length / framePointsCount)) * framePointsCount;
            //console.log('/////////////////')
            //console.log('// FRAME',currentFrame%(frame.length/framePointsCount))
            //rebuild actor
            //create a blue LineBasicMaterial
            const lineMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.LineBasicMaterial({
                vertexColors: three__WEBPACK_IMPORTED_MODULE_4__.VertexColors,
                linewidth: 40 // lineWidth not universally supported works with safari
            });
            const pointMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.PointsMaterial({
                size: 2,
                vertexColors: three__WEBPACK_IMPORTED_MODULE_4__.VertexColors
            });
            let pointColors = [];
            let points = [];
            actor = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
            actor.name = 'actor';
            for (let i = 0; i < 5; i++) {
                let fixedPoint = fixAxis(frame[startIndex + i]);
                pointColors.push(1 - 1 * frame[i][3], 1 * frame[i][3], 0);
                points.push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
            }
            const headGeometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry();
            headGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(points, 3));
            headGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(pointColors, 3));
            let head = new three__WEBPACK_IMPORTED_MODULE_4__.Points(headGeometry, pointMaterial);
            actor.add(head);
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
                lineGeometries[i] = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(linePoints[i]);
                for (let j = 0; j < bodyPointsIndex[i].length; j++) {
                    //Skip point if it's above threshold
                    if (frame[startIndex + (bodyPointsIndex[i][j] - 1)].p > frameConfig.minP) {
                        let fixedPoint = { x: 0, y: 0, z: 0, p: 0 };
                        let newPoint = { x: 0, y: 0, z: 0, p: 1 };
                        //if starting frame skip max velocity check
                        if (startIndex < framePointsCount) {
                            fixedPoint = fixAxis(frame[startIndex + (bodyPointsIndex[i][j] - 1)]);
                            currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
                        }
                        else {
                            fixedPoint = fixAxis(frame[startIndex + (bodyPointsIndex[i][j] - 1)]);
                            currentPoint = currentPoints[bodyPointsIndex[i][j] - 1];
                            newPoint.x = motionLimiter(fixedPoint.x, currentPoint.x, frameConfig.maxMovement);
                            newPoint.y = motionLimiter(fixedPoint.y, currentPoint.y, frameConfig.maxMovement);
                            newPoint.z = motionLimiter(fixedPoint.z, currentPoint.z, frameConfig.maxMovement);
                            newPoint.p = fixedPoint.p;
                            fixedPoint = newPoint;
                            currentPoints[bodyPointsIndex[i][j] - 1] = fixedPoint;
                        }
                        linePoints[i].push(fixedPoint.x, fixedPoint.y, fixedPoint.z);
                        lineColors[i].push(1 - 1 * fixedPoint.p, 1 * fixedPoint.p, 0);
                    }
                }
                lineGeometries[i].setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(linePoints[i], 3));
                lineGeometries[i].setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_4__.Float32BufferAttribute(lineColors[i], 3));
                lines[i] = new three__WEBPACK_IMPORTED_MODULE_4__.Line(lineGeometries[i], lineMaterial);
                lines[i].computeLineDistances();
                actor.add(lines[i]);
            }
            sessao.add(actor);
            //scene.add(sessao)
            if (!paused) {
                currentFrame++;
            }
            if (document.getElementById('viewer')) {
                document.getElementById('timestamp').innerText = (currentFrame %
                    (frame.length / framePointsCount)).toString();
                setTimeout(newFrame2, 1000 / fps);
            }
            else {
                console.log('newframe stopped');
            }
            //console.log(actor)
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService }
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

/***/ 5474:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/inline-data-loader.js?data=aDEgeyBmb250LWZhbWlseTogTGF0bzsgfQ%3D%3D!./src/app/hello.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 { font-family: Lato; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGlCQUFpQixFQUFFIiwiZmlsZSI6ImhlbGxvLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgZm9udC1mYW1pbHk6IExhdG87IH0iXX0= */");

/***/ }),

/***/ 8592:
/*!*********************************************************!*\
  !*** ./src/app/all-sessions/all-sessions.component.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".isDisabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n.isDisabled > a {\r\n  color: currentColor;\r\n  display: inline-block; /* For IE11/ MS Edge bug */\r\n  pointer-events: none;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFFLDBCQUEwQjtFQUNqRCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFsbC1zZXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzRGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5pc0Rpc2FibGVkID4gYSB7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIEZvciBJRTExLyBNUyBFZGdlIGJ1ZyAqL1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n}\nfooter {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.295);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsNENBQTRDO0FBQzlDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjk1KTtcbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("#viewer {\r\n  position: relative;\r\n}\r\n#timestamp {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  color: #666;\r\n  text-align: right;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2YiLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlld2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3RpbWVzdGFtcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3712:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-sessions/all-sessions.component.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Todas Sessões gravadas</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Início</th>\n      <th scope=\"col\">Fim</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.startDate}}</td>\n      <td>{{session.endDate}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">{{title}}</h1>\n<hr />\n<nav class=\"text-center\">\n  <a routerLink=\"/\">Todas as sessões</a>\n  &nbsp;\n  <a routerLink=\"/small\">Sessões de curta duração</a>\n  &nbsp;\n  <a routerLink=\"/processed\">Sessões processadas</a>\n</nav>\n<hr />\n<router-outlet></router-outlet>\n<footer class=\"text-end p-2 text-muted\">powered by whymob</footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Sessões gravadas com duração inferior a: {{limit}}s</h4>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sessão ID</th>\n      <th scope=\"col\">Duração</th>\n      <th scope=\"col\">Frames</th>\n      <th scope=\"col\">link</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let session of sessions\">\n      <th scope=\"row\">{{session.session}}</th>\n      <td>{{session.duration}}</td>\n      <td>{{session.frames}}</td>\n      <td class=\"\">\n        <a [routerLink]=\"['/view/', session.session]\">Visualizar</a>\n      </td>\n    </tr>\n  </tbody>\n</table>");

/***/ }),

/***/ 504:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/viewer.component.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text-center fw-bold text-uppercase\">\n  Sessão {{id}}\n</p>\n<div id=\"viewer\">\n  <span id=\"timestamp\"></span>\n  <img *ngIf=\"!dataLoaded\" id=\"loading\" class=\"m-auto d-block\" style='width:60px' src=\"https://whymob.dev/ysmart/loading.gif\">\n</div>\n<p class=\"text-center\" *ngIf=\"dataLoaded\">Sessão gravada em {{sessionDate}} com uma duração de {{sessionDuration}} e\n  {{totalFrames}} frames. ({{requestId}})\n</p>");

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