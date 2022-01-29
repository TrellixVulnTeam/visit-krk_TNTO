(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lookouts-lookouts-module"],{

/***/ "+iMV":
/*!***********************************************************!*\
  !*** ./src/app/pages/lookouts/lookouts-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LookoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookoutsPageRoutingModule", function() { return LookoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lookouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookouts.page */ "f8jc");




const routes = [
    {
        path: '',
        component: _lookouts_page__WEBPACK_IMPORTED_MODULE_3__["LookoutsPage"]
    }
];
let LookoutsPageRoutingModule = class LookoutsPageRoutingModule {
};
LookoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LookoutsPageRoutingModule);



/***/ }),

/***/ "65Jt":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lookouts/lookouts.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\" color=\"primary\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>\n      {{'navigation.lookouts' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content fullscreen>\n    <ion-card *ngFor=\"let sight of sights\">\n      <img [src]=\"'assets/images/sights/' + sight + '_1.jpg'\" />\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.lookout' | translate }}</ion-card-subtitle>\n        <ion-card-title>{{ 'lookouts.' + sight + '.title' | translate }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-button (click)=\"goToDetails(sight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n          <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n          {{ 'read_more' | translate}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-content>\n\n");

/***/ }),

/***/ "Apye":
/*!***************************************************!*\
  !*** ./src/app/pages/lookouts/lookouts.module.ts ***!
  \***************************************************/
/*! exports provided: createTranslateLoader, LookoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookoutsPageModule", function() { return LookoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lookouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookouts-routing.module */ "+iMV");
/* harmony import */ var _lookouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookouts.page */ "f8jc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let LookoutsPageModule = class LookoutsPageModule {
};
LookoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lookouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["LookoutsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_lookouts_page__WEBPACK_IMPORTED_MODULE_6__["LookoutsPage"]]
    })
], LookoutsPageModule);



/***/ }),

/***/ "HfIY":
/*!***************************************************!*\
  !*** ./src/app/pages/lookouts/lookouts.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb29rb3V0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "f8jc":
/*!*************************************************!*\
  !*** ./src/app/pages/lookouts/lookouts.page.ts ***!
  \*************************************************/
/*! exports provided: LookoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookoutsPage", function() { return LookoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lookouts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lookouts.page.html */ "65Jt");
/* harmony import */ var _lookouts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lookouts.page.scss */ "HfIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/cro.json */ "lVkN");
var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/cro.json */ "lVkN", 1);








let LookoutsPage = class LookoutsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getLookouts();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getLookouts() {
        this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["lookouts"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].LOOKOUTS + '/' + sight);
    }
};
LookoutsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LookoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lookouts',
        template: _raw_loader_lookouts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lookouts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LookoutsPage);



/***/ })

}]);
//# sourceMappingURL=pages-lookouts-lookouts-module.js.map