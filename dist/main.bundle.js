webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"viewheight\">\n    <app-login-navbar *ngIf='!(currentUser | async)' ></app-login-navbar>\n    <app-projects-overview-navbar *ngIf='(currentUser | async)' ></app-projects-overview-navbar>\n    <!--<router-outlet name=\"navbar\"></router-outlet>-->\n    <div id=\"content\" role=\"main\">\n      <!-- Rendering body -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <router-outlet  class=\"footer\" name=\"footer\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300; }\n\n/*#content {\n  min-height: 525px;\n  margin-bottom: 60px;\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_authentticationService) {
        this._authentticationService = _authentticationService;
    }
    Object.defineProperty(AppComponent.prototype, "currentUser", {
        get: function () {
            return this._authentticationService.user$;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_navbar_login_navbar_component__ = __webpack_require__("../../../../../src/app/components/login-navbar/login-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_projects_overview_projects_overview_component__ = __webpack_require__("../../../../../src/app/components/projects-overview/projects-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_projects_overview_navbar_projects_overview_navbar_component__ = __webpack_require__("../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_todos_overview_todos_overview_component__ = __webpack_require__("../../../../../src/app/components/todos-overview/todos-overview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules






// Services & Guards





// Components










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_navbar_login_navbar_component__["a" /* LoginNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_projects_overview_projects_overview_component__["a" /* ProjectsOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_projects_overview_navbar_projects_overview_navbar_component__["a" /* ProjectsOverviewNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_todos_overview_todos_overview_component__["a" /* TodosOverviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_login_navbar_login_navbar_component__["a" /* LoginNavbarComponent */], outlet: 'navbar' },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */], outlet: 'footer' },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */] },
                    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__["a" /* LogoutComponent */] },
                    { path: 'projects-overview', component: __WEBPACK_IMPORTED_MODULE_18__components_projects_overview_projects_overview_component__["a" /* ProjectsOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'todos-overview/:projectid', component: __WEBPACK_IMPORTED_MODULE_20__components_todos_overview_todos_overview_component__["a" /* TodosOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_7__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_10__services_todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer\" id=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"footer-sectie col-lg-4  col-md-4 col-sm-4 col-xs-4\">\n          <h3>Algemeen</h3>\n          <ul>\n            <li>\n              <a href=\"#\">Login</a>\n            </li>\n            <li>\n              <a href=\"#\">Cookies</a>\n            </li>\n            <li>\n              <a href=\"#\">Over ons</a>\n            </li>\n            <li>\n              <a href=\"#\">Nieuws</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"footer-sectie col-lg-4  col-md-4 col-sm-4 col-xs-4\">\n          <h3>Follow Us</h3>\n          <ul>\n            <li>\n              <a href=\"#\">Facebook</a>\n            </li>\n            <li>\n              <a href=\"#\">Instagram</a>\n            </li>\n            <li>\n              <a href=\"#\">Twitter</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"footer-sectie col-lg-4  col-md-4 col-sm-4 col-xs-4\">\n          <h3>JUST DO IT</h3>\n          <ul>\n            <li>\n              <p>4750 Pride Avenue\n                <br>New York\n                <br>USA</p>\n              <br>\n            </li>\n            <li>\n              <p>718-371-1192 <br>\n                <a href=\"mailto:info@justdoit.com?\" target=\"_top\">info@justdoit.com</a>\n              </p>\n              <br>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!--/.row-->\n    </div>\n    <!--/.container-->\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background: black;\n  height: auto;\n  padding-bottom: 20px;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  border-bottom: 1px solid #CCCCCC;\n  border-top: 1px solid #DDDDDD; }\n\n.footer p {\n  margin: 0; }\n\n.footer h3 {\n  border-bottom: 1px solid #CACACA;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 27px;\n  padding: 25px 0 0px;\n  text-transform: uppercase; }\n\n.footer ul {\n  font-size: 13px;\n  list-style-type: none;\n  margin-left: 0;\n  padding-left: 0;\n  margin-top: 15px;\n  color: white; }\n\n.footer ul li a {\n  padding: 0 0 5px 0;\n  display: block; }\n\n.footer a {\n  color: white; }\n\n@media (max-width: 992px) {\n  .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .footer-sectie {\n    width: 45%; } }\n\n@media (max-width: 450px) {\n  .footer-sectie {\n    width: 90%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"jumbotron\">\n      <h1>JUST DO IT.</h1>\n      <p>The number 1 in todo applications&#33;</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/motivational-wallpaper.jpg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100% !important;\n  margin: 0px; }\n  .wrapper .jumbotron {\n    text-align: center;\n    background: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login-navbar/login-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo\">\n    <a [routerLink]=\"['/']\">\n      <img class=\"logo\" src=\"../../assets/images/Just-Do-It.png\" alt=\"logo-just-do-it.\">\n    </a>\n\n  </div>\n  <nav class=\"nav\">\n    <div class=\"mobile-nav\">\n      <div class=\"mobile-nav-toggle\">\n        <span></span>\n      </div>\n      <div class=\"logo-mobile\">\n        <a [routerLink]=\"['/']\">\n          <img src=\"../../assets/images/white-checkmark.png\" alt=\"white-checkmark\">\n        </a>\n      </div>\n    </div>\n    <ul class=\"menu\">\n      <li>\n        <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/login']\">Login</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login-navbar/login-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  width: 100%;\n  background-color: black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 70px; }\n  .header .logo {\n    width: 150px;\n    margin-left: 10px; }\n  .header .logo-mobile {\n    display: none; }\n  .header .nav {\n    width: 100%; }\n    .header .nav ul {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      list-style: none;\n      height: 70px; }\n    .header .nav li {\n      margin-right: 30px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 70px; }\n      .header .nav li a {\n        text-decoration: none;\n        color: white;\n        font-size: 14pt;\n        font-weight: 300; }\n        .header .nav li a:hover {\n          color: #00aced; }\n    .header .nav li:last-of-type {\n      margin-right: 50px; }\n\n@media screen and (max-width: 850px) {\n  .header {\n    min-height: 70px;\n    height: auto;\n    display: block; }\n    .header .logo {\n      display: none; }\n    .header .logo-mobile {\n      display: block;\n      width: 70px;\n      height: 70px; }\n      .header .logo-mobile img {\n        width: 45px;\n        height: 45px;\n        margin: 12.5px; }\n    .header .nav ul {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      position: absolute;\n      -webkit-transform: translateY(-200%);\n              transform: translateY(-200%);\n      transition: all 0.3s ease-in-out;\n      margin-bottom: 20px;\n      padding: 0px;\n      z-index: 99; }\n      .header .nav ul li {\n        margin-left: 0px;\n        width: 100%;\n        margin-right: 0px;\n        margin-bottom: 10px;\n        margin-bottom: 20px; }\n        .header .nav ul li:first-child {\n          margin-left: 0px; }\n    .header .is-open ul {\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%);\n      background-color: black; }\n  .mobile-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .mobile-nav-toggle {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 50px;\n    height: 50px;\n    margin-left: 20px; }\n  .mobile-nav-toggle span,\n  .mobile-nav-toggle span::before,\n  .mobile-nav-toggle span::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: white;\n    position: relative;\n    transition: all 0.3s ease-in-out; }\n  .mobile-nav-toggle span::before {\n    top: 15px; }\n  .mobile-nav-toggle span::after {\n    top: -17px; }\n  .mobile-nav-toggle.is-open span {\n    background: transparent; }\n  .mobile-nav-toggle.is-open span::before,\n  .mobile-nav-toggle .is-open span::after {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .mobile-nav-toggle.is-open span::after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    top: -3px; }\n  .mobile-nav-toggle.is-open span::before {\n    top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-navbar/login-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginNavbarComponent = (function () {
    function LoginNavbarComponent() {
    }
    LoginNavbarComponent.prototype.ngOnInit = function () {
    };
    LoginNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-navbar',
            template: __webpack_require__("../../../../../src/app/components/login-navbar/login-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login-navbar/login-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginNavbarComponent);
    return LoginNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"login-form\">\n    <flash-messages class=\"message\"></flash-messages>\n    <h2>Login</h2>\n    <form #f='ngForm' (ngSubmit)='onLoginSubmit(f.value)' name=\"form\">\n      <div class=\"form-group\">\n        <label for=\"username\">Gebruikersnaam</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" required [(ngModel)]=\"user.username\" #username=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Wachtwoord</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"user.password\" #password=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btnLogin btn btn-primary\">Login</button>\n        <a (click)=\"registerBtnClick()\" class=\".Register btn btn-link\">Register</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  font-family: 'Open Sans', sans-serif;\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .wrapper .login-form {\n    max-width: 600px;\n    margin-top: -70px;\n    width: 100%; }\n    .wrapper .login-form h2 {\n      margin-bottom: 10px; }\n    .wrapper .login-form .btnLogin {\n      background: #00aced;\n      border-color: #00aced; }\n      .wrapper .login-form .btnLogin:hover {\n        background: #0084b4;\n        border-color: #0084b4; }\n    .wrapper .login-form .register {\n      color: #0084b4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, _flashMessagesService, _validateService, _authenticationService) {
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this._validateService = _validateService;
        this._authenticationService = _authenticationService;
    }
    Object.defineProperty(LoginComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this._user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](0, null, null, null, null, null);
    };
    LoginComponent.prototype.registerBtnClick = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent.prototype.onLoginSubmit = function (user, isValid) {
        var _this = this;
        // Validate fields
        if (!this._validateService.validateLogin(this.user)) {
            this._flashMessagesService.show('Gelieve alle velden in te vullen', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        this._authenticationService.login(user.username, user.password).subscribe(function (val) {
            if (val) {
                console.log(val);
                _this.router.navigate(['/projects-overview']);
            }
            else {
                console.log(val);
                _this._flashMessagesService.show('De door u ingevulde gegevens zijn niet correct', { cssClass: 'alert alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n      <h1>U bent succesvol uitgelogd!</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: -50px;\n  margin-bottom: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._router.navigate(['']);
        }, 3000);
        this._authenticationService.logout();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo\">\n    <a [routerLink]=\"['/projects-overview']\">\n      <img class=\"logo\" src=\"../../assets/images/Just-Do-It.png\" alt=\"logo-just-do-it.\">\n    </a>\n\n  </div>\n  <nav class=\"nav\">\n    <div class=\"mobile-nav\">\n      <div class=\"mobile-nav-toggle\">\n        <span></span>\n      </div>\n      <div class=\"logo-mobile\">\n        <a [routerLink]=\"['/projects-overview']\">\n          <img src=\"../../assets/images/white-checkmark.png\" alt=\"white-checkmark\">\n        </a>\n      </div>\n    </div>\n    <ul class=\"menu\">\n      <li>\n        <a [routerLink]=\"['/projects-overview']\">Projects</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/logout']\">Logout</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  width: 100%;\n  background-color: black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 70px; }\n  .header .logo {\n    width: 150px;\n    margin-left: 10px; }\n  .header .logo-mobile {\n    display: none; }\n  .header .nav {\n    width: 100%; }\n    .header .nav ul {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      list-style: none;\n      height: 70px; }\n    .header .nav li {\n      margin-right: 30px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 70px; }\n      .header .nav li a {\n        text-decoration: none;\n        color: white;\n        font-size: 14pt;\n        font-weight: 300; }\n        .header .nav li a:hover {\n          color: #00aced; }\n    .header .nav li:last-of-type {\n      margin-right: 50px; }\n\n@media screen and (max-width: 850px) {\n  .header {\n    min-height: 70px;\n    height: auto;\n    display: block; }\n    .header .logo {\n      display: none; }\n    .header .logo-mobile {\n      display: block;\n      width: 70px;\n      height: 70px; }\n      .header .logo-mobile img {\n        width: 45px;\n        height: 45px;\n        margin: 12.5px; }\n    .header .nav ul {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      position: absolute;\n      -webkit-transform: translateY(-200%);\n              transform: translateY(-200%);\n      transition: all 0.3s ease-in-out;\n      margin-bottom: 20px;\n      padding: 0px;\n      z-index: 99; }\n      .header .nav ul li {\n        margin-left: 0px;\n        width: 100%;\n        margin-right: 0px;\n        margin-bottom: 10px;\n        margin-bottom: 20px; }\n        .header .nav ul li:first-child {\n          margin-left: 0px; }\n    .header .is-open ul {\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%);\n      background-color: black; }\n  .mobile-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .mobile-nav-toggle {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 50px;\n    height: 50px;\n    margin-left: 20px; }\n  .mobile-nav-toggle span,\n  .mobile-nav-toggle span::before,\n  .mobile-nav-toggle span::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: white;\n    position: relative;\n    transition: all 0.3s ease-in-out; }\n  .mobile-nav-toggle span::before {\n    top: 15px; }\n  .mobile-nav-toggle span::after {\n    top: -17px; }\n  .mobile-nav-toggle.is-open span {\n    background: transparent; }\n  .mobile-nav-toggle.is-open span::before,\n  .mobile-nav-toggle .is-open span::after {\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .mobile-nav-toggle.is-open span::after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    top: -3px; }\n  .mobile-nav-toggle.is-open span::before {\n    top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsOverviewNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsOverviewNavbarComponent = (function () {
    function ProjectsOverviewNavbarComponent() {
    }
    ProjectsOverviewNavbarComponent.prototype.ngOnInit = function () {
    };
    ProjectsOverviewNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-overview-navbar',
            template: __webpack_require__("../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects-overview-navbar/projects-overview-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsOverviewNavbarComponent);
    return ProjectsOverviewNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects-overview/projects-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container col-xs-10 col-md-8 col-lg-6\">\n    <div class=\"project-list\">\n      <h1>Mijn Projecten</h1>\n      <div class=\"\">\n        <div *ngFor=\"let project of projects\" class=\"project\">\n          <button class=\"btn btn-default projectName\" (click)='projectNameClicked(project.id)'>\n            <p>{{project.projectName}}</p>\n          </button>\n          <div class=\"project-buttons\">\n            <div class=\"projectButton first\">\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"onEditButtonClicked(project)\" data-toggle=\"modal\" data-target=\"#editProjectModal\">\n                <span class=\"glyphicon glyphicon-edit\"></span>\n              </button>\n            </div>\n            <div class=\"projectButton\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)='onDeleteButtonPressed(project)'>\n                <span class=\"glyphicon glyphicon-remove\"></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"!checkIfUserHasActiveProjects()\" class=\"noActiveProjects\">\n          <p>U heeft op dit moment geen actieve projecten.</p>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-default btn-lg addButton\" id=\"addProject\" data-toggle=\"modal\" data-target=\"#projectModal\">Project Toevoegen</button>\n  </div>\n</div>\n\n<!-- Create Project Modal -->\n<div class=\"modal fade\" id=\"projectModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <flash-messages class=\"message\"></flash-messages>\n        <h1>Nieuw project toevoegen</h1>\n      </div>\n      <div class=\"modal-body\">\n        <form #f='ngForm' (ngSubmit)='onAddProjectSubmit()' role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"projectName\">Project Naam</label>\n            <input type=\"text\" class=\"form-control\" name=\"projectName\" placeholder=\"Vb: Project Webapps 4\" [(ngModel)]=\"newProject.projectName\"\n              #projectName=\"ngModel\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default btn-success btn-block\">Toevoegen</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-default btn-default pull-left\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Project Modal -->\n<div class=\"modal fade\" id=\"editProjectModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n  \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h1>Project Wijzigen</h1>\n        </div>\n        <div class=\"modal-body\">\n          <form #f2='ngForm' (ngSubmit)='onEditProjectSubmit()' role=\"form\">\n            <div class=\"form-group\">\n              <label for=\"projectName\">Project Naam</label>\n              <input type=\"text\" class=\"form-control\" name=\"projectName\" placeholder=\"Vb: Project Webapps 4\" [(ngModel)]=\"selectedProject.projectName\"\n                #projectName=\"ngModel\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default btn-success btn-block\">Wijzigen</button>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-default btn-default pull-left\" data-dismiss=\"modal\">\n            <span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/projects-overview/projects-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required] {\n  border: 1px solid #42A948 !important; }\n\n.ng-invalid[required] {\n  border: 1px solid #ff0000 !important; }\n\n.wrapper {\n  font-family: 'Open Sans', sans-serif;\n  min-height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .wrapper .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    min-height: 550px;\n    max-width: 1000px;\n    position: relative; }\n  .wrapper .project-list {\n    width: 100%;\n    margin-bottom: 50px; }\n    .wrapper .project-list h1 {\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 40px; }\n    .wrapper .project-list .position-center {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      min-height: 350px; }\n    .wrapper .project-list .project {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-height: 52px;\n      margin: 20px 0;\n      width: 100%; }\n      .wrapper .project-list .project .projectName {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        text-decoration: none;\n        background-color: black; }\n        .wrapper .project-list .project .projectName p {\n          margin-left: 10px;\n          text-decoration: none;\n          color: white;\n          font-size: 18px; }\n        .wrapper .project-list .project .projectName:hover p {\n          color: #00aced; }\n      .wrapper .project-list .project .project-buttons {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .wrapper .project-list .project .project-buttons .projectButton {\n          margin-top: 0px;\n          height: 50px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          .wrapper .project-list .project .project-buttons .projectButton button {\n            height: 50px;\n            width: 50px; }\n          .wrapper .project-list .project .project-buttons .projectButton.first {\n            margin-right: 10px;\n            margin-left: 10px; }\n    .wrapper .project-list .noActiveProjects p {\n      text-align: center;\n      vertical-align: center; }\n  .wrapper .addButton {\n    position: absolute;\n    bottom: 10px; }\n\n@media (max-width: 600px) {\n  .wrapper .project {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 30px !important; }\n    .wrapper .project .project-buttons {\n      -webkit-box-pack: justify !important;\n          -ms-flex-pack: justify !important;\n              justify-content: space-between !important; }\n      .wrapper .project .project-buttons .projectButton {\n        margin-left: 0 !important;\n        width: 49%; }\n        .wrapper .project .project-buttons .projectButton button {\n          width: 100% !important; }\n    .wrapper .project .projectName {\n      height: 50px;\n      margin-bottom: 10px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .wrapper .project .projectName p {\n        margin-left: 0px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects-overview/projects-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_project__ = __webpack_require__("../../../../../src/app/models/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectsOverviewComponent = (function () {
    function ProjectsOverviewComponent(router, _projectService, _flashMessagesService, _validateService) {
        this.router = router;
        this._projectService = _projectService;
        this._flashMessagesService = _flashMessagesService;
        this._validateService = _validateService;
        this._newProject = new __WEBPACK_IMPORTED_MODULE_3__models_project__["a" /* Project */](null);
        this._selectdProject = new __WEBPACK_IMPORTED_MODULE_3__models_project__["a" /* Project */](null);
    }
    ProjectsOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjectsFromUser(JSON.parse(localStorage.getItem("currentUser")).userid).subscribe(function (items) { return _this._projects = items; });
    };
    ProjectsOverviewComponent.prototype.sortProjects = function () {
        // Sort Lineups and Referees alphabetically with 1 second delay
        this._projects.sort(function (p1, p2) {
            if (p1.projectName < p2.projectName) {
                return -1;
            }
            if (p1.projectName > p2.projectName) {
                return 1;
            }
            return 0;
        });
    };
    Object.defineProperty(ProjectsOverviewComponent.prototype, "projects", {
        get: function () {
            this.sortProjects();
            return this._projects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectsOverviewComponent.prototype, "newProject", {
        get: function () {
            return this._newProject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectsOverviewComponent.prototype, "selectedProject", {
        get: function () {
            return this._selectdProject;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsOverviewComponent.prototype.onAddProjectSubmit = function () {
        if (!this._validateService.validateProject(this.newProject)) {
            this._flashMessagesService.show('Gelieve een naam in te vullen voor uw project.', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        this._projectService.addProjectToUser(JSON.parse(localStorage.getItem("currentUser")).userid, this.newProject).subscribe();
        location.reload();
        //this.router.navigate(['/projects-overview']);
    };
    ProjectsOverviewComponent.prototype.onDeleteButtonPressed = function (project) {
        this._projectService.deleteProjectFromUser(JSON.parse(localStorage.getItem("currentUser")).userid, project).subscribe(function (item) { return console.log(item); });
        location.reload();
    };
    ProjectsOverviewComponent.prototype.projectNameClicked = function (projectid) {
        this.router.navigateByUrl('/todos-overview/' + projectid);
    };
    ProjectsOverviewComponent.prototype.onEditButtonClicked = function (project) {
        this._selectdProject = project;
    };
    ProjectsOverviewComponent.prototype.onEditProjectSubmit = function () {
        if (!this._validateService.validateProject(this.selectedProject)) {
            return false;
        }
        this._projectService.updateProject(this.selectedProject).subscribe(function (item) { return console.log(item); });
        location.reload();
    };
    ProjectsOverviewComponent.prototype.checkIfUserHasActiveProjects = function () {
        if (this.projects == undefined || this.projects.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ProjectsOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-projects-overview',
            template: __webpack_require__("../../../../../src/app/components/projects-overview/projects-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects-overview/projects-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_0__services_validate_service__["a" /* ValidateService */]])
    ], ProjectsOverviewComponent);
    return ProjectsOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper container\">\n  <div class=\"register-form\">\n    <flash-messages class=\"message\"></flash-messages>\n    <h2>Registreren</h2>\n    <form #f=\"ngForm\" (ngSubmit)='onRegisterSubmit(f.value, f.valid)' name=\"form\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">Voornaam</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstname\" required [(ngModel)]=\"user.firstname\" #firstname=\"ngModel\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Achternaam</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastname\" required [(ngModel)]=\"user.lastname\" #lastname=\"ngModel\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">E-mail</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" required [(ngModel)]=\"user.email\" #email=\"ngModel\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Gebruikersnaam</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" required [(ngModel)]=\"user.username\" #username=\"ngModel\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Wachtwoord</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"user.password\" #password=\"ngModel\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwordCheck\">Herhaal Wachtwoord</label>\n        <input type=\"password\" class=\"form-control\" name=\"passwordCheck\" required [(ngModel)]=\"passwordCheck\"/>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btnRegister btn btn-primary\">Registreren</button>\n        <a (click)=\"cancelBtnClick()\" class=\"cancel btn btn-link\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  font-family: 'Open Sans', sans-serif;\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .wrapper .register-form {\n    max-width: 600px;\n    margin-top: -70px;\n    width: 100%; }\n    .wrapper .register-form h2 {\n      margin-bottom: 10px; }\n    .wrapper .register-form .btnRegister {\n      background: #00aced;\n      border-color: #00aced; }\n      .wrapper .register-form .btnRegister:hover {\n        background: #0084b4;\n        border-color: #0084b4; }\n    .wrapper .register-form .cancel {\n      color: #0084b4; }\n\n.ng-valid[required] {\n  border: 1px solid #42A948 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(router, _flashMessagesService, _validateService, _authenticationService) {
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this._validateService = _validateService;
        this._authenticationService = _authenticationService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this._user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](0, null, null, null, null, null);
    };
    Object.defineProperty(RegisterComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegisterSubmit = function (user, isValid) {
        var _this = this;
        // Validate fields
        if (!this._validateService.validateRegister(user)) {
            this._flashMessagesService.show('Gelieve alle velden in te vullen', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this._validateService.validateEmail(user.email)) {
            this._flashMessagesService.show('Gelieve een geldig emailadres te gebruiken', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        // Validate username
        if (!this._validateService.validateUsername(user.username)) {
            this._flashMessagesService.show('Gelieve enkel alfanumerieke tekens te gebruiken in uw gebruikernaam', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        // Validate passwords
        if (!this._validateService.validatePasswords(user, this.passwordCheck)) {
            this._flashMessagesService.show('Gelieve twee maal hetzelfde wachtwoord op te geven', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        this._authenticationService.checkUserNameAvailability(this.user.username).subscribe(function (available) {
            if (available) {
                // Register user
                _this._authenticationService.registerUser(_this.user).subscribe(function (data) {
                    if (data) {
                        console.log("De gebruiker is succesvol geregistreerd!\n" + user.firstname + "\n" + user.lastname + "\n" + user.email + "\n" + user.username + "\n" + user.password + "\n" + isValid);
                        _this._flashMessagesService.show('Succes! U bent geregistreerd en kunt nu inloggen.', { cssClass: 'alert alert-success', timeout: 3000 });
                        setTimeout(function (router) {
                            _this.router.navigate(['/login']);
                        }, 3000);
                    }
                    else {
                        _this._flashMessagesService.show('Oeps.. Er is iets misgelopen.', { cssClass: 'alert alert-danger', timeout: 3000 });
                        setTimeout(function (router) {
                            _this.router.navigate(['/login']);
                        }, 3000);
                    }
                });
            }
            else {
                _this._flashMessagesService.show('Deze gebruikersnaam is al in gebruik, gelieve een andere gebruikernaam te kiezen.', { cssClass: 'alert alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent.prototype.cancelBtnClick = function () {
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todos-overview/todos-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container col-xs-10 col-md-8 col-lg-6\">\n    <div class=\"todo-list\">\n      <h1>{{selectedProject.projectName}}</h1>\n      <div *ngFor=\"let todo of todos\" class=\"todo\">\n        <div class=\"todo-details\">\n          <p>{{todo.description}}</p>\n          <p>{{formatDate(todo.dueDate)}}</p>\n        </div>\n        <div class='todo-buttons'>\n          <div class=\"todoButton first\">\n            <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#editTodoModal\" (click)='onEditButtonClicked(todo)'>\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </button>\n          </div>\n          <div class=\"todoButton\">\n            <button type=\"button\" class=\"btn btn-success\" (click)='onCompleteButtonClicked(todo)'>\n              <span class=\"glyphicon glyphicon-ok\"></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!checkIfProjectHasActiveTodos()\" class=\"noActiveTodos\">\n        <p>U heeft op dit moment geen todo's voor dit project.</p>\n      </div>\n    </div>\n    <div class=\"action-buttons\">\n      <button type=\"button\" class=\"btn btn-default btn-lg\" (click)='onBackButtonClicked()'>\n        <span class='glyphicon glyphicon-chevron-left'></span>Terug</button>\n      <button type=\"button\" class=\"btn btn-default btn-lg\" data-toggle=\"modal\" data-target=\"#todoModal\">Todo Toevoegen</button>\n    </div>\n  </div>\n</div>\n\n<!-- Create Todo Modal -->\n<div class=\"modal fade\" id=\"todoModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n  <!-- Modal Content -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <flash-messages class=\"message\"></flash-messages>\n        <h1>Nieuwe todo toevoegen</h1>\n      </div>\n      <div class=\"modal-body\">\n        <form #f='ngForm' (ngSubmit)='onAddTodoSubmit()' id=\"editTodoForm\" role=\"form\" >\n          <div class=\"form-group\">\n            <label for=\"todoDescription\">Todo Beschrijving</label>\n            <input type=\"text\" class=\"form-control\" name=\"todoDescription\" required placeholder=\"Vb: Layout homepagina in orde brengen\"\n              [(ngModel)]=\"newTodo.description\" #todoDescription=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"dueDate\">Deadline</label>\n            <input type=\"date\" class=\"form-control\" id=\"datePicker\" name=\"dueDate\" required [(ngModel)]=\"newTodo.dueDate\" #dueDate=\"ngModel\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default btn-success btn-block\" id=\"addTodo\">Toevoegen</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-default btn-default pull-left\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Todo Modal -->\n<div class=\"modal fade\" id=\"editTodoModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    <!-- Modal Content -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h1>Todo wijzigen</h1>\n        </div>\n        <div class=\"modal-body\">\n          <form #f2='ngForm' (ngSubmit)='onEditTodoSubmit()' role=\"form\">\n            <div class=\"form-group\">\n              <label for=\"editTodoDescription\">Todo Beschrijving</label>\n              <input type=\"text\" class=\"form-control\" name=\"editTodoDescription\" required placeholder=\"Vb: Layout homepagina in orde brengen\"\n                [(ngModel)]=\"selectedTodo.description\" #editTodoDescription=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"editDueDate\">Deadline</label>\n              <input type=\"date\" class=\"form-control\" name=\"editDueDate\" id=\"datePicker\" required [(ngModel)]=\"selectedTodo.dueDate\" #editDueDate=\"ngModel\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default btn-success btn-block\">Wijzigen</button>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-default btn-default pull-left\" data-dismiss=\"modal\">\n            <span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todos-overview/todos-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required] {\n  border: 1px solid #42A948 !important; }\n\n.ng-invalid[required] {\n  border: 1px solid #ff0000 !important; }\n\n.wrapper {\n  font-family: 'Open Sans', sans-serif;\n  min-height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .wrapper .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    min-height: 550px;\n    max-width: 1000px;\n    position: relative; }\n  .wrapper .todo-list {\n    width: 100%;\n    margin-bottom: 50px; }\n    .wrapper .todo-list h1 {\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 40px; }\n    .wrapper .todo-list .todo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-height: 52px;\n      margin: 20px 0;\n      width: 100%; }\n      .wrapper .todo-list .todo .todo-details {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        text-decoration: none;\n        background-color: black;\n        border-radius: 4px;\n        padding-top: 5px;\n        padding-bottom: 5px; }\n        .wrapper .todo-list .todo .todo-details p {\n          text-decoration: none;\n          color: white;\n          font-size: 18px; }\n          .wrapper .todo-list .todo .todo-details p:first-of-type {\n            margin-left: 20px;\n            margin-right: 10px; }\n          .wrapper .todo-list .todo .todo-details p:last-of-type {\n            margin-right: 20px;\n            margin-left: 10px; }\n      .wrapper .todo-list .todo .todo-buttons {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .wrapper .todo-list .todo .todo-buttons .todoButton {\n          margin-top: 0px;\n          height: 50px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          .wrapper .todo-list .todo .todo-buttons .todoButton button {\n            height: 50px;\n            width: 50px; }\n          .wrapper .todo-list .todo .todo-buttons .todoButton.first {\n            margin-right: 10px;\n            margin-left: 10px; }\n    .wrapper .todo-list .noActiveTodos p {\n      text-align: center;\n      vertical-align: center; }\n  .wrapper .action-buttons {\n    position: absolute;\n    bottom: 10px; }\n\n@media (max-width: 600px) {\n  .wrapper .todo {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 30px !important; }\n    .wrapper .todo .todo-buttons {\n      -webkit-box-pack: justify !important;\n          -ms-flex-pack: justify !important;\n              justify-content: space-between !important; }\n      .wrapper .todo .todo-buttons .todoButton {\n        margin-left: 0 !important;\n        width: 49%; }\n        .wrapper .todo .todo-buttons .todoButton button {\n          width: 100% !important; }\n    .wrapper .todo .todo-details {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 10px; }\n      .wrapper .todo .todo-details p {\n        text-align: center; }\n        .wrapper .todo .todo-details p:first-of-type {\n          margin-left: 10px !important; }\n        .wrapper .todo .todo-details p:last-of-type {\n          margin-right: 10px !important; } }\n\n@media (max-width: 360px) {\n  .action-buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .action-buttons button:first-of-type {\n      margin-bottom: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todos-overview/todos-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_todo__ = __webpack_require__("../../../../../src/app/models/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodosOverviewComponent = (function () {
    function TodosOverviewComponent(_route, _router, _flashMessagesService, _validateService, _todoService, _projectService) {
        this._route = _route;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
        this._validateService = _validateService;
        this._todoService = _todoService;
        this._projectService = _projectService;
        this._newTodo = new __WEBPACK_IMPORTED_MODULE_2__models_todo__["a" /* Todo */](null, new Date());
        this._selectedTodo = new __WEBPACK_IMPORTED_MODULE_2__models_todo__["a" /* Todo */](null, null);
    }
    Object.defineProperty(TodosOverviewComponent.prototype, "todos", {
        get: function () {
            this.sortTodos();
            return this._todos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosOverviewComponent.prototype, "newTodo", {
        get: function () {
            return this._newTodo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosOverviewComponent.prototype, "projectId", {
        get: function () {
            return this._projectId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosOverviewComponent.prototype, "selectedProject", {
        get: function () {
            return this._selectedProject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodosOverviewComponent.prototype, "selectedTodo", {
        get: function () {
            return this._selectedTodo;
        },
        enumerable: true,
        configurable: true
    });
    TodosOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectId = this._route.snapshot.paramMap.get('projectid');
        this._todoService.getTodosFromProject(this.projectId).subscribe(function (items) { return _this._todos = items; });
        this._projectService.getProjectById(this._projectId).subscribe(function (item) { return _this._selectedProject = item; });
    };
    TodosOverviewComponent.prototype.sortTodos = function () {
        // Sort todos by date
        this._todos.sort(function (t1, t2) {
            if (t1.dueDate < t2.dueDate) {
                return -1;
            }
            if (t1.dueDate > t2.dueDate) {
                return 1;
            }
            return 0;
        });
    };
    TodosOverviewComponent.prototype.onBackButtonClicked = function () {
        this._router.navigate(['/projects-overview']);
    };
    TodosOverviewComponent.prototype.onAddTodoSubmit = function () {
        if (!this._validateService.validateTodo(this.newTodo)) {
            this._flashMessagesService.show('Gelieve alle velden in te vullen voor uw todo.', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        /* if(!this._validateService.validatDueDate(this.newTodo))
        {
          this._flashMessagesService.show('Gelieve een deadline op te geven die in de toekomst ligt.', {cssClass: 'alert alert-danger', timeout: 3000});
          return false;
        } */
        this._todoService.addTodoToProject(this.projectId, this.newTodo).subscribe(function (item) { return console.log(item); });
        location.reload();
    };
    TodosOverviewComponent.prototype.onCompleteButtonClicked = function (todo) {
        this._todoService.deleteTodoFromProject(this.projectId, todo).subscribe(function (item) { return console.log(item); });
        location.reload();
    };
    TodosOverviewComponent.prototype.onEditButtonClicked = function (todo) {
        this._selectedTodo = todo;
    };
    TodosOverviewComponent.prototype.onEditTodoSubmit = function () {
        if (!this._validateService.validateTodo(this.selectedTodo)) {
            console.log("something is wrong");
            return false;
        }
        this._todoService.updateTodo(this.selectedTodo).subscribe(function (item) { return console.log(item); });
        location.reload();
    };
    TodosOverviewComponent.prototype.formatDate = function (date) {
        var newDate = new Date(date);
        //return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
        return newDate.toLocaleDateString();
    };
    TodosOverviewComponent.prototype.checkIfProjectHasActiveTodos = function () {
        if (this.todos == undefined || this.todos.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    };
    TodosOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-todos-overview',
            template: __webpack_require__("../../../../../src/app/components/todos-overview/todos-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todos-overview/todos-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages_module__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]])
    ], TodosOverviewComponent);
    return TodosOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authenticationService.user$.getValue()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/models/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project(projectName, todos) {
        this._projectName = projectName;
        this._todos = todos || new Array();
    }
    Object.defineProperty(Project.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectName", {
        get: function () {
            return this._projectName;
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "todos", {
        get: function () {
            return this._todos;
        },
        set: function (value) {
            this._todos = value;
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.addTodo = function (todo) {
        this._todos.push(todo);
    };
    Project.fromJSON = function (json) {
        var project = new Project(json.projectName, json.todos);
        project.id = json._id;
        return project;
    };
    Project.prototype.toJSON = function () {
        return {
            _id: this._id,
            projectName: this._projectName,
            todos: this._todos
        };
    };
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/models/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(description, dueDate) {
        this._description = description;
        this._completed = false;
        this._dueDate = dueDate || null;
    }
    Object.defineProperty(Todo.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "dueDate", {
        get: function () {
            return this._dueDate;
        },
        set: function (value) {
            this._dueDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "completed", {
        get: function () {
            return this._completed;
        },
        set: function (value) {
            this._completed = value;
        },
        enumerable: true,
        configurable: true
    });
    Todo.fromJSON = function (json) {
        var todo = new Todo(json.description, json.dueDate);
        todo.id = json._id;
        return todo;
    };
    Todo.prototype.toJSON = function () {
        return {
            _id: this._id,
            description: this._description,
            completed: this._completed,
            dueDate: this._dueDate
        };
    };
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, firstname, lastname, email, username, password, projects) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._username = username;
        this._password = password;
        this._projects = projects || new Array();
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        set: function (value) {
            this._projects = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._url = "/users";
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* BehaviorSubject */](currentUser && currentUser.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).token;
        },
        enumerable: true,
        configurable: true
    });
    /* getLoggedInUser()
    {
      return this.http.get(`${this._url}/${JSON.parse(localStorage.getItem("currentUser")).username}`);
    } */
    AuthenticationService.prototype.registerUser = function (user) {
        var _this = this;
        return this.http.post(this._url + "/register", {
            username: user.username,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: res.token }));
                _this._user$.next(user.username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username }).map(function (res) { return res.json(); })
            .map(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            var userid = res.user._id;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, userid: userid, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_project__ = __webpack_require__("../../../../../src/app/models/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this._url = '/projects';
    }
    ProjectService.prototype.getProjectsFromUser = function (userid) {
        return this.http.get(this._url + "/user/" + userid, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (response) { return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__models_project__["a" /* Project */].fromJSON(item); }); });
    };
    ProjectService.prototype.addProjectToUser = function (userid, project) {
        return this.http.post(this._url + "/user/" + userid, project, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProjectFromUser = function (userid, project) {
        return this.http.delete(this._url + "/" + userid + "/" + project.id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectById = function (projectid) {
        return this.http.get(this._url + "/" + projectid, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (response) { return __WEBPACK_IMPORTED_MODULE_3__models_project__["a" /* Project */].fromJSON(response.json()); });
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.http.post(this._url + "/" + project.id, project, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_todo__ = __webpack_require__("../../../../../src/app/models/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this._url = "/todos";
    }
    TodoService.prototype.getTodosFromProject = function (projectId) {
        return this.http.get(this._url + "/project/" + projectId, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (response) { return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__models_todo__["a" /* Todo */].fromJSON(item); }); });
    };
    TodoService.prototype.addTodoToProject = function (projectid, todo) {
        return this.http.post(this._url + "/project/" + projectid, todo, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTodoFromProject = function (projectId, todo) {
        return this.http.delete(this._url + "/" + projectId + "/" + todo.id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.updateTodo = function (todo) {
        console.log("TodoService was reached");
        return this.http.post(this._url + "/" + todo.id, todo, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.authenticationService.token }) })
            .map(function (res) { return res.json(); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email);
    };
    ValidateService.prototype.validatePasswords = function (user, password) {
        if (user.password === password) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateUsername = function (username) {
        var regexAlphanumeric = /^[a-z0-9]+$/i;
        return regexAlphanumeric.test(username);
    };
    ValidateService.prototype.validateProject = function (project) {
        if (project.projectName == undefined || project.projectName == "" || project.projectName == " ") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateTodo = function (todo) {
        if (todo.description == undefined || todo.description == "" || todo.description == " " || todo.dueDate == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatDueDate = function (todo) {
        var today = new Date();
        if (todo.dueDate < today) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/motivational-wallpaper.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "motivational-wallpaper.1dc1377629373373537c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map