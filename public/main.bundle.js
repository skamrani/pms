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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_provider__ = __webpack_require__("../../../../../src/app/providers/dataservice.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__ = __webpack_require__("../../../../../src/app/providers/auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_component__ = __webpack_require__("../../../../../src/app/components/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_component__ = __webpack_require__("../../../../../src/app/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_blank_component__ = __webpack_require__("../../../../../src/app/components/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_component__ = __webpack_require__("../../../../../src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__["a" /* AuthGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__["a" /* AuthGuard */]]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_component__["a" /* RegisterComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
        console.log('Angular app initialized');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_blank_component__["a" /* BlankComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_dataservice_provider__["a" /* CustomHttp */], __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_provider__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_provider__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__ = __webpack_require__("../../../../../src/app/providers/auth.provider.ts");
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
    function AppComponent(authGaurd) {
        this.authGaurd = authGaurd;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('App component initialized');
        this.userLogedIn = this.authGaurd.userLogedIn;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/views/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["a" /* AuthGuard */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blank',
            template: __webpack_require__("../../../../../src/app/views/blank.component.html"),
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__ = __webpack_require__("../../../../../src/app/providers/auth.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authGaurd) {
        this.authGaurd = authGaurd;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('Dashboard component initialized');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/views/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["a" /* AuthGuard */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/views/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_dataservice_provider__ = __webpack_require__("../../../../../src/app/providers/dataservice.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
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
    function LoginComponent(service, router, cookie) {
        this.service = service;
        this.router = router;
        this.cookie = cookie;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Login component initialized');
        console.log('Log out...');
        this.service.logout(function (res) {
            _this.cookie.deleteAll();
            console.log(res);
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login({ username: this.username, password: this.password }, function (res) {
            if (res.data.user_id) {
                _this.router.navigate(["dashboard"]);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/login.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_dataservice_provider__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_dataservice_provider__ = __webpack_require__("../../../../../src/app/providers/dataservice.provider.ts");
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
    function RegisterComponent(service) {
        this.service = service;
        // Roles call from db for now its static
        this.roles = [
            { id: 1, text: 'Employee' },
            { id: 2, text: 'TeamLead' },
            { id: 3, text: 'Admin' },
        ];
        this.teams = [
            { id: 1, text: 'Innovation' },
            { id: 2, text: 'Activation' },
            { id: 3, text: 'Calibration' },
            { id: 4, text: 'Web Service' },
            { id: 5, text: 'Mobile Application Development' },
            { id: 6, text: 'Document' },
            { id: 6, text: 'Quality Assurance' },
        ];
        this.role = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('Register component initialized');
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            this.service.register({ email: this.email, username: this.username, password: this.password, team: this.team, role: this.role }, function (data) {
                console.log(data);
            });
        }
        else {
            window.alert('Please enter a valid Username & Password');
        }
    };
    RegisterComponent.prototype.updateRoles = function (event) {
        if (event.target.checked) {
            this.role.push(event.target.value);
        }
        else {
            this.role.splice(this.role.indexOf(event.target.value), 1);
        }
        console.log("RoleID: ", event.target.value);
        console.log("RoleValue: ", this.role);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/views/register.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_dataservice_provider__["b" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/views/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
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
    function AuthGuard(router, cookie) {
        this.router = router;
        this.cookie = cookie;
        this.userLogedIn = false;
        this.userLogedIn = this.cookie.check("connect.sid");
    }
    AuthGuard.prototype.canActivate = function () {
        this.userLogedIn = this.cookie.check("connect.sid");
        console.log('Checking if user cookie exists...', this.cookie.check("connect.sid"));
        //check is user is loged in 
        if (this.userLogedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/providers/dataservice.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomHttp = (function () {
    function CustomHttp(http) {
        this.http = http;
        this.base_url = 'http://localhost:5000/';
        this.requestOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        };
    }
    CustomHttp.prototype.post = function (route, data, callback) {
        //withCredentials allow the angular to parse session and resend the cookie
        this.http.post(this.base_url + route, data, this.requestOptions).subscribe(function (data) {
            callback(data);
        }, function (err) {
            console.log('Something wen wrong', err);
        });
    };
    CustomHttp.prototype.get = function (route, callback, params) {
        this.http.get(this.base_url + route, this.requestOptions)
            .subscribe(function (data) {
            callback(data);
        }, function (err) {
            console.log('Something wen wrong', err);
        });
    };
    CustomHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomHttp);
    return CustomHttp;
}());

var UserService = (function () {
    function UserService(http) {
        this.http = http;
        //testing api call
    }
    UserService.prototype.login = function (data, callback) {
        console.log('Calling user/login');
        this.http.post('user/login', data, callback);
    };
    UserService.prototype.register = function (data, callback) {
        console.log('Calling user/register');
        this.http.post('user/register', data, callback);
    };
    UserService.prototype.logout = function (callback) {
        console.log('Calling user/logout');
        this.http.get('user/logout', callback);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [CustomHttp])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/views/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!--//conditiion if not loged in-->\r\n<!--display only login component-->\r\n<!--<app-login></app-login>-->\r\n\r\n<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n\r\n<div class=\"wrapper\">\r\n\r\n\r\n    <div class=\"content-wrapper\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n\r\n    <footer class=\"main-footer\">\r\n        <div class=\"pull-right hidden-xs\">\r\n            <b>Version</b> 2.4.0\r\n        </div>\r\n        <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\r\n        reserved.\r\n    </footer>\r\n</div>\r\n\r\n<!--<div *ngIf=\"userLogedIn; else loginBlock\">\r\n    <app-header></app-header>\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"wrapper\">\r\n        <div class=\"content-wrapper\">\r\n            <h2>{{userLogedIn}}</h2>\r\n        </div>\r\n        <footer class=\"main-footer\">\r\n            <div class=\"pull-right hidden-xs\">\r\n                <b>Version</b> 2.4.0\r\n            </div>\r\n            <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\r\n            reserved.\r\n        </footer>\r\n    </div>\r\n</div>\r\n<ng-template #loginBlock>\r\n    <h2>{{userLogedIn}}</h2>\r\n    <app-login></app-login>\r\n</ng-template>-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/blank.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Content Header (Page header)--> \n<section class=\"content-header\">\n    <h1>\n        Blank page\n        <small>it all starts here</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li><a href=\"#\">Examples</a></li>\n        <li class=\"active\">Blank page</li>\n    </ol>\n</section>\n\n<!--Main content--> \n<section class=\"content\">\n\n    <!--Default box--> \n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Title</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                        title=\"Collapse\">\n                    <i class=\"fa fa-minus\"></i></button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                    <i class=\"fa fa-times\"></i></button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n            <!--Start creating your amazing application!-->\n        </div>\n        <!--/.box-body--> \n        <div class=\"box-footer\">\n            Footer\n        </div>\n        <!--/.box-footer-->\n    </div>\n    <!--/.box--> \n\n</section>\n<!--/.content--> "

/***/ }),

/***/ "../../../../../src/app/views/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar></app-sidebar>\n<div class=\"wrapper\">\n    <div class=\"content-wrapper\">\n        <h2>{{userLogedIn}}</h2>\n        <router-outlet></router-outlet>\n    </div>\n    <footer class=\"main-footer\">\n        <div class=\"pull-right hidden-xs\">\n            <b>Version</b> 2.4.0\n        </div>\n        <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\n        reserved.\n    </footer>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"../../index2.html\" class=\"logo\">\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class=\"logo-mini\"><b>A</b>LT</span>\n        <!-- logo for regular state and mobile devices -->\n        <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n        <!-- Sidebar toggle button-->\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </a>\n\n        <div class=\"navbar-custom-menu\">\n            <ul class=\"nav navbar-nav\">\n                <!-- Messages: style can be found in dropdown.less-->\n                <li class=\"dropdown messages-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-envelope-o\"></i>\n                        <span class=\"label label-success\">4</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"header\">You have 4 messages</li>\n                        <li>\n                            <!-- inner menu: contains the actual data -->\n                            <ul class=\"menu\">\n                                <li><!-- start message -->\n                                    <a href=\"#\">\n                                        <div class=\"pull-left\">\n                                            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                                        </div>\n                                        <h4>\n                                            Support Team\n                                            <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                                        </h4>\n                                        <p>Why not buy a new awesome theme?</p>\n                                    </a>\n                                </li>\n                                <!-- end message -->\n                            </ul>\n                        </li>\n                        <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n                    </ul>\n                </li>\n                <!-- Notifications: style can be found in dropdown.less -->\n                <li class=\"dropdown notifications-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-bell-o\"></i>\n                        <span class=\"label label-warning\">10</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"header\">You have 10 notifications</li>\n                        <li>\n                            <!-- inner menu: contains the actual data -->\n                            <ul class=\"menu\">\n                                <li>\n                                    <a href=\"#\">\n                                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"footer\"><a href=\"#\">View all</a></li>\n                    </ul>\n                </li>\n                <!-- Tasks: style can be found in dropdown.less -->\n                <li class=\"dropdown tasks-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-flag-o\"></i>\n                        <span class=\"label label-danger\">9</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"header\">You have 9 tasks</li>\n                        <li>\n                            <!-- inner menu: contains the actual data -->\n                            <ul class=\"menu\">\n                                <li><!-- Task item -->\n                                    <a href=\"#\">\n                                        <h3>\n                                            Design some buttons\n                                            <small class=\"pull-right\">20%</small>\n                                        </h3>\n                                        <div class=\"progress xs\">\n                                            <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                                                 aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                                                <span class=\"sr-only\">20% Complete</span>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                <!-- end task item -->\n                            </ul>\n                        </li>\n                        <li class=\"footer\">\n                            <a href=\"#\">View all tasks</a>\n                        </li>\n                    </ul>\n                </li>\n                <!-- User Account: style can be found in dropdown.less -->\n                <li class=\"dropdown user user-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <img src=\"../../dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n                        <span class=\"hidden-xs\">Alexander Pierce</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <!-- User image -->\n                        <li class=\"user-header\">\n                            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                            <p>\n                                Alexander Pierce - Web Developer\n                                <small>Member since Nov. 2012</small>\n                            </p>\n                        </li>\n                        <!-- Menu Body -->\n                        <li class=\"user-body\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-4 text-center\">\n                                    <a href=\"#\">Followers</a>\n                                </div>\n                                <div class=\"col-xs-4 text-center\">\n                                    <a href=\"#\">Sales</a>\n                                </div>\n                                <div class=\"col-xs-4 text-center\">\n                                    <a href=\"#\">Friends</a>\n                                </div>\n                            </div>\n                            <!-- /.row -->\n                        </li>\n                        <!-- Menu Footer-->\n                        <li class=\"user-footer\">\n                            <div class=\"pull-left\">\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                            </div>\n                            <div class=\"pull-right\">\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n                <!-- Control Sidebar Toggle Button -->\n                <li>\n                    <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/views/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n    <div class=\"login-logo\">\r\n        <a href=\"../../index2.html\"><b>Admin</b>LTE</a>\r\n    </div>\r\n    <!-- /.login-logo -->\r\n    <div class=\"login-box-body\">\r\n        <p class=\"login-box-msg\">Sign in to start your session</p>\r\n        <form #frm=\"ngForm\" (ngSubmit)=\"onSubmit(frm)\">\r\n            <div class=\"form-group has-feedback\">\r\n                <input type=\"email\" name=\"username\" [(ngModel)]=\"username\"  required=\"required\" class=\"form-control\" placeholder=\"m.zubair@centricsource.com\">\r\n                <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group has-feedback\">\r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required=\"required\" class=\"form-control\" placeholder=\"Password\">\r\n                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"checkbox icheck\">\r\n                        <label>\r\n                            <input type=\"checkbox\"> Remember Me\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <!-- /.col -->\r\n                <div class=\"col-xs-4\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\r\n                </div>\r\n                <!-- /.col -->\r\n            </div>\r\n        </form>\r\n\r\n        <a href=\"#\">I forgot my password</a><br>\r\n        <a href=\"register.html\" class=\"text-center\">Register a new membership</a>\r\n\r\n    </div>\r\n    <!-- /.login-box-body -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Content Header (Page header)-->\r\n<section class=\"content-header\">\r\n  <h1>\r\n    Register User !\r\n    <small>it all starts here</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> User</a></li>\r\n    <li><a  class=\"active\" href=\"#\">Register</a></li>\r\n  </ol>\r\n</section>\r\n\r\n<!--Main content-->\r\n<section class=\"content\">\r\n\r\n  <!--Default box-->\r\n  <div class=\"box\" style=\"background:none!important\">\r\n    <div class=\"box-header with-border\">\r\n\r\n    </div>\r\n    <div class=\"box-body\">\r\n      <!--Start creating your amazing application!-->\r\n      <div class=\"register-box\">\r\n        <div class=\"register-logo\">\r\n          <a href=\"\"><b>Create</b>User</a>\r\n        </div>\r\n\r\n        <div class=\"register-box-body\">\r\n          <p class=\"login-box-msg\">Register a new membership</p>\r\n          <form #frm=\"ngForm\" (ngSubmit)=\"onSubmit(frm)\">\r\n\r\n            <div class=\"form-group has-feedback\">\r\n              <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"User Email\" [(ngModel)]=\"email\">\r\n              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n            </div>\r\n            <div class=\"form-group has-feedback\">\r\n              <input type=\"name\"  id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Employee Name\" [(ngModel)]=\"username\">\r\n              <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n            </div>\r\n            <div class=\"form-group has-feedback\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\">\r\n              <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Assgin Team</label>\r\n              <select class=\"form-control\" name=\"team\" id=\"team\" [(ngModel)]=\"team\" >\r\n                <option  *ngFor=\"let team of teams\"  value=\"{{team.id}}\">{{team.text}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Role</label>\r\n              <div class=\"checkbox\" *ngFor=\"let role of roles\">\r\n                <label><input  (change) =\"updateRoles($event)\"  id= \"{{role.id}}\"type=\"checkbox\" name=\"role\" value=\"{{role.id}}\">{{role.text}}</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-8\">\r\n                <div class=\"checkbox icheck\" style=\"display: none;\">\r\n                  <label class=\"\">\r\n                    <div class=\"icheckbox_square-blue\" aria-checked=\"false\" aria-disabled=\"false\" style=\"position: relative; \">\r\n                      <input type=\"checkbox\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"><ins class=\"iCheck-helper\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins></div> I agree to the <a href=\"#\">terms</a>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- /.col -->\r\n              <div class=\"col-xs-4\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Register</button>\r\n              </div>\r\n              <!-- /.col -->\r\n            </div>\r\n          </form>\r\n           <a href=\"/login\" class=\"text-center\">I already have an account</a>\r\n        </div>\r\n        <!-- /.form-box -->\r\n      </div>\r\n    </div>\r\n    <!--/.box-body-->\r\n\r\n    <!--/.box-footer-->\r\n  </div>\r\n  <!--/.box-->\r\n\r\n</section>\r\n<!--/.content-->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the sidebar -->\n<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n        <!-- Sidebar user panel -->\n        <div class=\"user-panel\">\n            <div class=\"pull-left image\">\n                <img src=\"http://placehold.it/160/160\" class=\"img-circle\" alt=\"User Image\">\n            </div>\n            <div class=\"pull-left info\">\n                <p>Alexander Pierce</p>\n                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n            </div>\n        </div>\n        <!-- sidebar menu: : style can be found in sidebar.less -->\n        <ul class=\"sidebar-menu\" data-widget=\"tree\">\n            <li class=\"header\">MAIN NAVIGATION</li>\n            <li class=\"treeview\">\n                <a href=\"#\">\n                    <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n                    <span class=\"pull-right-container\">\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li><a routerLink=\"/login\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n                    <li><a href=\"../../index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n                </ul>\n            </li>\n            <li><a routerLink=\"/login\"><i class=\"fa fa-lock\"></i> <span>Logout</span></a></li>\n            <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n            <li class=\"header\">LABELS</li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n        </ul>\n    </section>\n    <!-- /.sidebar -->\n</aside>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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