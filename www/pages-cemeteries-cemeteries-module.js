(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cemeteries-cemeteries-module"],{

/***/ "QPHG":
/*!*****************************************************!*\
  !*** ./src/app/pages/cemeteries/cemeteries.page.ts ***!
  \*****************************************************/
/*! exports provided: CemeteriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CemeteriesPage", function() { return CemeteriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cemeteries_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cemeteries.page.html */ "gOiI");
/* harmony import */ var _cemeteries_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cemeteries.page.scss */ "pwq+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/cro.json */ "lVkN");
var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/cro.json */ "lVkN", 1);








let CemeteriesPage = class CemeteriesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getCemeteries();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getCemeteries() {
        this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["cemeteries"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].CEMETERIES + '/' + sight);
    }
};
CemeteriesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CemeteriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cemeteries',
        template: _raw_loader_cemeteries_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cemeteries_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CemeteriesPage);



/***/ }),

/***/ "VCD6":
/*!*******************************************************!*\
  !*** ./src/app/pages/cemeteries/cemeteries.module.ts ***!
  \*******************************************************/
/*! exports provided: createTranslateLoader, CemeteriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CemeteriesPageModule", function() { return CemeteriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cemeteries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cemeteries-routing.module */ "kH6/");
/* harmony import */ var _cemeteries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cemeteries.page */ "QPHG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let CemeteriesPageModule = class CemeteriesPageModule {
};
CemeteriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cemeteries_routing_module__WEBPACK_IMPORTED_MODULE_5__["CemeteriesPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_cemeteries_page__WEBPACK_IMPORTED_MODULE_6__["CemeteriesPage"]]
    })
], CemeteriesPageModule);



/***/ }),

/***/ "gOiI":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cemeteries/cemeteries.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\" color=\"primary\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>\n      {{'navigation.cemeteries' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content fullscreen>\n    <ion-card *ngFor=\"let sight of sights\">\n      <img [src]=\"'assets/images/sights/' + sight + '_1.jpg'\" />\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.cemetery' | translate }}</ion-card-subtitle>\n        <ion-card-title>{{ 'cemeteries.' + sight + '.title' | translate }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-button (click)=\"goToDetails(sight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n          <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n          {{ 'read_more' | translate}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-content>\n");

/***/ }),

/***/ "kH6/":
/*!***************************************************************!*\
  !*** ./src/app/pages/cemeteries/cemeteries-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CemeteriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CemeteriesPageRoutingModule", function() { return CemeteriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cemeteries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cemeteries.page */ "QPHG");




const routes = [
    {
        path: '',
        component: _cemeteries_page__WEBPACK_IMPORTED_MODULE_3__["CemeteriesPage"]
    }
];
let CemeteriesPageRoutingModule = class CemeteriesPageRoutingModule {
};
CemeteriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CemeteriesPageRoutingModule);



/***/ }),

/***/ "pwq+":
/*!*******************************************************!*\
  !*** ./src/app/pages/cemeteries/cemeteries.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW1ldGVyaWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-cemeteries-cemeteries-module.js.map