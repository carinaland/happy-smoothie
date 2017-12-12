webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/add-smoothie/add-smoothie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button{\n    margin-left: 230px;\n}\n\nh3{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-smoothie/add-smoothie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal\">\n    <h3>Add Smoothie</h3>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Image:</label>\n      <div class=\"col-sm-3\">\n        <input type=\"text\" #newimage class=\"form-control\" placeholder=\"Enter image URL\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Name:</label>\n      <div class=\"col-sm-3\">\n        <input type=\"text\" #newname class=\"form-control\" placeholder=\"Enter Name\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Price:</label>\n      <div class=\"col-sm-3\">\n        <input type=\"text\" #newprice class=\"form-control\" placeholder=\"Enter Price\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Ingredients:</label>\n      <div class=\"col-sm-3\">\n        <input type=\"text\" #newingredients class=\"form-control\" placeholder=\"Enter ingredient\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Description:</label>\n      <div class=\"col-sm-4\">\n        <textarea #newdescription class=\"form-control\" rows=\"5\" id=\"comment\"></textarea> </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" (click)=\"addSmoothie(newimage, newname, newprice, newingredients, newdescription)\" class=\"btn btn-success\">Add smoothie db</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-smoothie/add-smoothie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSmoothieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__ = __webpack_require__("../../../../../src/app/providers/smoothie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AddSmoothieComponent = class AddSmoothieComponent {
    constructor(_smoothieService) {
        this._smoothieService = _smoothieService;
        this.showAdd = false;
    }
    ngOnInit() {
    }
    addSmoothie(image, name, price, ingredients, description) {
        console.log(` Image: ${image.value}, Name: ${name.value} Price: ${price.value} Ingredient: ${ingredients.value} Description: ${description.value} `);
        var smoothie = {
            'name': name.value,
            'price': price.value,
            'description': description.value,
            'imageUrl': image.value
        };
        this._smoothieService.addSmoothie(smoothie).subscribe(res => {
            var res = res;
            console.log(res);
        });
        return false;
    }
};
AddSmoothieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-smoothie',
        template: __webpack_require__("../../../../../src/app/admin/add-smoothie/add-smoothie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/add-smoothie/add-smoothie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */]) === "function" && _a || Object])
], AddSmoothieComponent);

var _a;
//# sourceMappingURL=add-smoothie.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <div class=\"row\">   \n        <button class=\"btn btn-warning btn-lg pull-right\" (click)=\"logout()\">Logout</button> \n      <h1>Welcome Admin</h1>\n  </div>\n</div>\n\n<app-smoothie-items></app-smoothie-items>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AdminComponent = class AdminComponent {
    constructor(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
        this.afAuth.auth.onAuthStateChanged((user) => {
            if (user != null) {
                console.log("Logged in");
                this.router.navigate(['admin']);
            }
            else {
                console.log("Logged out");
            }
        });
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['loginAdmin']);
    }
};
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h2>Login To Your Account</h2>\n    <button class=\"btn btn-warning btn-lg \" (click)=\"login()\">Login With Google</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
        this.title = 'app';
        this.afAuth.auth.onAuthStateChanged((user) => {
            if (user == null) {
                console.log("Logged out");
                this.user_displayName = '';
                this.user_email = '';
            }
        });
    }
    ngOnInit() {
    }
    login() {
        this.authService.loginWithGoogle().then((data) => {
            this.router.navigate(['admin']);
        });
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/admin/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/smoothie-items/smoothie-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n.ui button{\n    margin-left: 300px;\n}\n*/\n\nh3{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/smoothie-items/smoothie-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <button (click)=\"showAddForm()\" *ngIf=\"!showAdd\" type=\"button\" class=\"btn btn-info btn-lg pull-right\">Add Smoothie</button>\n  <h3>List of all Smoothies</h3>\n  <span class=\"clearfix\"></span>\n  <hr>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Image</th>\n        <th>Product</th>\n        <th>Price</th>\n        <th>Ingredients</th>\n        <th>Description</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <!--; let index=i -->\n      <tr *ngFor=\"let sInfo of smoothies; let i = index;\">\n        <td> <img [src]='sInfo.imageUrl' [style.width.px]='imageWidth' [style.height.px]='imageHeight' [style.margin.px]='imageMargin'></td>\n        <td #name>{{sInfo.name }}</td>\n        <td #price>{{sInfo.price | currency: \"EUR\" :true:\"1.2-2\"}}</td>\n        <td #ingredients>\n          <div *ngFor=\"let ingre of sInfo.ingrediants\">\n            {{ingre.name}}\n          </div>\n        </td>\n        <td #description>{{sInfo.description}}</td>\n        <td><button (click)=\"editSmoothie(i)\" class=\"btn btn-sm btn-success\"><span class=\"glyphicon glyphicon-edit\"></span></button>\n          <button id=\"delbtn\" (click)=\"deleteSmoothie(sInfo.idSmoothie)\" class=\"btn btn-sm btn-danger\"><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div *ngIf=\"edit\" class='panel panel-primary'>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"container\">\n            <form class=\"form-horizontal\">\n              <h3>Edit Smoothie</h3>\n              <div *ngFor=\"let sInfo of oneSmoothie\">\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Image:</label>\n                  <div class=\"col-sm-3\">\n                      <input type=\"hidden\" #idSmoothie  value=\"{{sInfo.idSmoothie}}\">\n                    <input type=\"text\" class=\"form-control\" #imageUrl value=\"{{sInfo.imageUrl}}\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Name:</label>\n                  <div class=\"col-sm-3\">\n                    <input type=\"text\" class=\"form-control\" #name value=\"{{sInfo.name}}\" >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Price:</label>\n                  <div class=\"col-sm-3\">\n                    <input type=\"text\" class=\"form-control\" #price value=\" {{sInfo.price}}\" >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Ingredients:</label>\n                  <div *ngFor=\"let ingre of sInfo.ingrediants\" class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" #editIngre value=\"{{ingre.name}}\"  placeholder=\"Enter ingredient\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Description:</label>\n                  <div class=\"col-sm-4\">\n                    <textarea #description value=\"{{sInfo.description}}\"  rows=\"5\" id=\"comment\"></textarea>\n                  </div>\n                </div>\n                <div class=\"ui buttons \">\n                  <button (click)=\"updateSmoothie(idSmoothie, name, price , description, imageUrl )\" type=\"button\" class=\"btn btn-sm btn-info\">\n                <span class=\"glyphicon glyphicon-ok-sign\"></span> Save\n              </button>\n                  <div class=\"or\"></div>\n                  <button (click)=\"Close()\" class=\"btn btn-sm btn-warning\">Close</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div *ngIf=\"showAdd\" class='panel panel-primary'>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <app-add-smoothie></app-add-smoothie>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/smoothie-items/smoothie-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothieItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__ = __webpack_require__("../../../../../src/app/providers/smoothie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_service__ = __webpack_require__("../../../../../src/app/details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SmoothieItemsComponent = class SmoothieItemsComponent {
    constructor(_smoothieService, _detailsService) {
        this._smoothieService = _smoothieService;
        this._detailsService = _detailsService;
        this.imageWidth = 40;
        this.imageHeight = 40;
        this.imageMargin = 12;
        this.edit = false;
        this.showAdd = false;
        this.groß = 'hallo';
        this.oneSmoothie = [];
    }
    getDatabaseData() {
        this._smoothieService.getData().subscribe(smoothies => {
            this.smoothies = smoothies;
        });
    }
    editSmoothie(i) {
        this.oneSmoothie.push(this.smoothies[i]);
        this.edit = true;
    }
    updateSmoothie(idSmoothie, name, price, description, imageUrl) {
        console.log(idSmoothie.value, imageUrl.value, name.value, price.value, description.value);
        var smoothie = {
            'idSmoothie': idSmoothie.value,
            'name': name.value,
            'price': price.value,
            'description': description.value,
            'imageUrl': imageUrl.value
        };
        this._smoothieService.updateSmoothie(smoothie).subscribe(res => {
            var res = res;
            console.log(res);
        });
        return false;
    }
    deleteSmoothie(i) {
        //this._smoothieService.deleteSmoothie(i);
        console.log(i);
        this._smoothieService.deleteSmoothie(i).subscribe(res => {
            var res = res;
            console.log(res);
        });
    }
    ngOnInit() {
        this.getDatabaseData();
    }
    showAddForm() {
        this.showAdd = true;
    }
    Close() {
        this.edit = false;
    }
};
SmoothieItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-smoothie-items',
        template: __webpack_require__("../../../../../src/app/admin/smoothie-items/smoothie-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/smoothie-items/smoothie-items.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__details_service__["a" /* DetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__details_service__["a" /* DetailsService */]) === "function" && _b || Object])
], SmoothieItemsComponent);

var _a, _b;
//# sourceMappingURL=smoothie-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#bannerLogo {\r\n    width:300px;\r\n    height: 110px;\r\n    margin: 5px;\r\n}\r\n\r\n    .width-adjust{\r\n    padding-left: 9%;\r\n    padding-right: 9%;\r\n}\r\n\r\n\r\n.navbar{\r\n    box-shadow: 0px 0px 1px 0px #d1bcc2;\r\n    padding-right:0px;\r\n}\r\n.navbar-right{\r\n    margin-right:5%;\r\n}\r\nfooter{\r\n    text-align: center;\r\n    margin-top: 35px;\r\n    margin-bottom: 40px;\r\n    border-top: 1px solid #ccc;\r\n}\r\n.adjust-footer{\r\n    text-align: center;\r\n    margin-top: 70px;\r\n}\r\n@media only screen and (max-width: 1056px) {\r\n    .width-adjust{\r\n        padding-left: 3%;\r\n        padding-right: 3%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 564px) {\r\n    #bannerLogo {\r\n        width:55%;\r\n        height: 55%;\r\n    }\r\n    .width-adjust{\r\n        padding-left: 0%;\r\n        padding-right: 0%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\">\n  <p class=\"navbar-text navbar-right\">Logged In: {{user_displayName}} ({{user_email}})\n    <p>\n</div>\n<div *ngIf=\"!isLoggedIn\">\n  <p class=\"navbar-text navbar-right\">Logged Out</p>\n</div>\n\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\n</head>\n\n<div style=\"text-align:center\">\n  <a class=\"active item\" [routerLink]=\"['home']\">\n      <img id=\"bannerLogo\" src=\"https://i.imgur.com/zCOGRwK.png\" title=\"logo\" />\n      </a>\n</div>\n<!--<app-smoothies></app-smoothies>\n<app-contact></app-contact> -->\n\n\n\n<!-- -->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <!--<img id=\"bannerLogo\" class=\"navbar-brand\" src=\"https://i.imgur.com/zCOGRwK.png\" title=\"logo\"/>-->\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"width-adjust\">\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"active item\" [routerLink]=\"['home']\"> Home</a></li>\n          <li><a class=\"active item\" [routerLink]=\"['smoothies']\"> Smoothies</a></li>\n          <li><a class=\"active item\" [routerLink]=\"['shop']\"> Shop</a></li>\n          <li><a class=\"active item\" [routerLink]=\"['contact']\">Contact Us</a></li>\n\n        </ul>\n\n        <!--<form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Search</button>\n      </form>-->\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a class=\"active item\" [routerLink]=\"['loginAdmin']\">Admin</a></li>\n          <li><a [routerLink]=\"['signup']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n          <li><a [routerLink]=\"['login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n          <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout </a></li>\n        </ul>\n      </div>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer>\n\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li><a [routerLink]=\"['loginAdmin']\">Admin</a></li>\n    <li><a [routerLink]=\"['signup']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n    <li><a [routerLink]=\"['login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout </a></li>\n  </ul>\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li><a [routerLink]=\"['home']\"> Home</a></li>\n    <li><a [routerLink]=\"['smoothies']\"> Smoothies</a></li>\n    <li><a [routerLink]=\"['shop']\"> Shop</a></li>\n    <li><a [routerLink]=\"['contact']\">Contact Us</a></li>\n\n\n  </ul>\n  <div class=\"container adjust-footer\">Copyright &copy; <strong>HappySmoothies Inc.</strong> 2017</div>\n</footer>\n\n\n\n\n<!--\n  <div class=\"container\">\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n       <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n       <strong><a href=\"http://codingthesmartway.com/courses/angular2-firebase\" target=\"_blank\">[ONLINE COURSE] - Angular 2 Firebase - Build a Web App with Typescript</a></strong> +++ Learn how to build a Web Application from A to Z using Angular 2, Firebase 3 and Typescript\n     </div>\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"http://codingthesmartway.com\">CodingTheSmartWay.com</a>\n        </div>\n        <div *ngIf=\"isLoggedIn\">\n          <p class=\"navbar-text navbar-right\">Logged In: {{user_displayName}} ({{user_email}})<p>\n        </div>\n        <div *ngIf=\"!isLoggedIn\">\n          <p class=\"navbar-text navbar-right\">Logged Out</p>\n        </div>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n  \n-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_providers_auth_user_service__ = __webpack_require__("../../../../../src/app/providers/auth-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
        this.title = 'app';
        this.afAuth.auth.onAuthStateChanged((user) => {
            if (user != null) {
                this.isLoggedIn = true;
                this.user_displayName = user.displayName;
                this.user_email = user.email;
                console.log("Logged in");
            }
            else {
                console.log("Logged out");
                //  this.user_displayName = '';
                // this.user_email ='';
                // this.router.navigate(['loginAdmin']);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.user_displayName = '';
        this.user_email = '';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_providers_auth_user_service__["a" /* AuthUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_providers_auth_user_service__["a" /* AuthUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smoothies_smoothies_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smoothies_smoothie_list_smoothie_list_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__smoothies_smoothie_details_smoothie_details_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_star_rating_star_rating_component__ = __webpack_require__("../../../../../src/app/shared/star-rating/star-rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_details_contact_details_component__ = __webpack_require__("../../../../../src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_map_map_component__ = __webpack_require__("../../../../../src/app/contact/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_cart_details_cart_details_component__ = __webpack_require__("../../../../../src/app/cart/cart-details/cart-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_personal_details_personal_details_component__ = __webpack_require__("../../../../../src/app/cart/personal-details/personal-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cart_payment_details_payment_details_component__ = __webpack_require__("../../../../../src/app/cart/payment-details/payment-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_add_smoothie_add_smoothie_component__ = __webpack_require__("../../../../../src/app/admin/add-smoothie/add-smoothie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_smoothie_items_smoothie_items_component__ = __webpack_require__("../../../../../src/app/admin/smoothie-items/smoothie-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_cart_ordersmoothie_service__ = __webpack_require__("../../../../../src/app/cart/ordersmoothie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__smoothies_smoothie_details_description_section_description_section_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__smoothies_smoothie_details_description_section_add_to_basket_add_to_basket_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_details_service__ = __webpack_require__("../../../../../src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_smoothies_smoothie_details_comments_comment_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_cart_cart_service__ = __webpack_require__("../../../../../src/app/cart/cart-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_smoothies_smoothie_details_description_section_tropical_fruits_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/tropical-fruits.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_smoothie_service__ = __webpack_require__("../../../../../src/app/providers/smoothie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__smoothies_smoothie_details_comments_comments_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__smoothies_smoothie_details_comments_comment_comment_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__smoothies_smoothie_details_comments_add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__admin_login_login_component__ = __webpack_require__("../../../../../src/app/admin/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_auth_guard__ = __webpack_require__("../../../../../src/app/providers/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_auth_user_service__ = __webpack_require__("../../../../../src/app/providers/auth-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































//firebase stuff

//import { AngularFireAuthModule } from 'angularfire2/auth';













const firebaseConfig = {
    apiKey: "AIzaSyDEqtsaNEzKQGOfcarbh38phCD7tDvjAcg",
    authDomain: "auth-project-1f851.firebaseapp.com",
    databaseURL: "https://auth-project-1f851.firebaseio.com",
    projectId: "auth-project-1f851",
    storageBucket: "",
    messagingSenderId: "686014718336"
};
/* unused harmony export firebaseConfig */

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__smoothies_smoothies_component__["a" /* SmoothiesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smoothies_smoothie_list_smoothie_list_component__["a" /* SmoothieListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_star_rating_star_rating_component__["a" /* StarRatingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_7__smoothies_smoothie_details_smoothie_details_component__["a" /* SmoothieDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__cart_cart_details_cart_details_component__["a" /* CartDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cart_personal_details_personal_details_component__["a" /* PersonalDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__cart_payment_details_payment_details_component__["a" /* PaymentDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_add_smoothie_add_smoothie_component__["a" /* AddSmoothieComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_smoothie_items_smoothie_items_component__["a" /* SmoothieItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__smoothies_smoothie_details_comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__smoothies_smoothie_details_comments_comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_35__smoothies_smoothie_details_comments_add_comment_add_comment_component__["a" /* AddCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_24__smoothies_smoothie_details_description_section_description_section_component__["a" /* DescriptionSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_25__smoothies_smoothie_details_description_section_add_to_basket_add_to_basket_component__["a" /* AddToBasketComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__admin_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_46__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_47__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_48__signup_signup_component__["a" /* SignupComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["c" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["f" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_36_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_21__angular_router__["c" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */] },
                { path: 'smoothies', component: __WEBPACK_IMPORTED_MODULE_5__smoothies_smoothies_component__["a" /* SmoothiesComponent */] },
                { path: './app/smoothies', component: __WEBPACK_IMPORTED_MODULE_5__smoothies_smoothies_component__["a" /* SmoothiesComponent */] },
                { path: 'smoothies/details/:id', component: __WEBPACK_IMPORTED_MODULE_7__smoothies_smoothie_details_smoothie_details_component__["a" /* SmoothieDetailsComponent */] },
                { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */] },
                { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
                { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_17__admin_admin_component__["a" /* AdminComponent */] },
                { path: 'loginAdmin', component: __WEBPACK_IMPORTED_MODULE_38__admin_login_login_component__["a" /* LoginComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_47__signin_signin_component__["a" /* SigninComponent */] },
                { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_48__signup_signup_component__["a" /* SignupComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_43_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_39_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD7_xl8mC74sHupd-EeGB2jthb4spdGcmo'
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_44__providers_auth_user_service__["a" /* AuthUserService */],
            __WEBPACK_IMPORTED_MODULE_45__providers_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_40__providers_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_37__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_39_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_32__providers_smoothie_service__["a" /* SmoothieService */],
            __WEBPACK_IMPORTED_MODULE_22_app_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_23_app_cart_ordersmoothie_service__["a" /* OrdersmoothieService */],
            __WEBPACK_IMPORTED_MODULE_27_app_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_28_app_details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_29_app_smoothies_smoothie_details_comments_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_30_app_cart_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_26_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_31_app_smoothies_smoothie_details_description_section_tropical_fruits_service__["a" /* TropicalFruitsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart-details/cart-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"cs-table table table-striped p-a-1\" *ngIf=\"selectedSmoothies && selectedSmoothies.length > 0; else EmptyCartInfo\">\n  <thead>\n    <tr>\n      <th>Image</th>\n      <th>Product</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Subtotal</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <tr *ngFor=\"let c of cart; let i = index;\">\n      <td><img [src]='c.imageUrl' [title]='c.name' [style.width.px]='imageWidth' [style.height.px]='imageHeight' [style.margin.px]='imageMargin'></td>\n      <td>{{c.name}}</td>\n      <td><button class=\"btn btn-success btn-sm\" (click)=\"incrementQuantity(i)\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n      {{c.quantity}}\n        <button class=\"btn btn-warning btn-sm\" (click)=\"decrementQuantity(i)\"><span class=\"glyphicon glyphicon-minus\"></span></button>\n      </td>\n      <td>{{c.price | currency: \"EUR\" :true:\"1.2-2\"}}</td>\n      <td>{{c.quantity * c.price | currency: \"EUR\" :true:\"1.2-2\"}}</td>\n      <td><button class=\"btn btn-sm btn-danger\" (click)=\"removeProduct(i)\"><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"4\" class=\"text-right\" >Total:{{total | currency: \"EUR\" :true:\"1.2-2\"}}</td>\n    </tr>\n  </tfoot>\n</table>\n<ng-template #EmptyCartInfo>\n  <div>\n    <p>Your cart is empty</p>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart-details/cart-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_cart_cart_service__ = __webpack_require__("../../../../../src/app/cart/cart-service.ts");
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



let CartDetailsComponent = class CartDetailsComponent {
    constructor(cartService, cookieService) {
        this.cartService = cartService;
        this.cookieService = cookieService;
        this.imageWidth = 50;
        this.imageHeight = 50;
        this.imageMargin = 2;
        //selectedSmoothies: ISelectedSmoothie[];
        this.selectedSmoothies = [];
        this.objSmoothieArray = [];
        this.smoothieIDs = "";
        this.smoothieIDsArray = [];
        this.smoothieQuantity = [];
        this.total = 0;
    }
    ngOnInit() {
        this.loadCart();
    }
    loadCart() {
        this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
        console.log("cookie" + this.selectedSmoothies.length);
        if (this.selectedSmoothies.length > 0) {
            this.selectedSmoothies.sort(function (a, b) {
                return a.id - b.id;
            });
            for (var i = 0; i < this.selectedSmoothies.length; i++) {
                this.objSmoothie = this.selectedSmoothies[i];
                // console.log("objSmoothie" + this.objSmoothie);
                this.objSmoothieArray.push(this.objSmoothie);
                //console.log("objSmoothieArray.id" + this.objSmoothie.id);
                // console.log("objSmoothieArray.quantity" + this.objSmoothie.quantity);
                this.smoothieIDsArray.push(this.objSmoothie.id);
                this.smoothieQuantity.push(this.objSmoothie.quantity);
                this.smoothieIDs += this.objSmoothie.id + ',';
            }
            this.cartService.getCart(this.smoothieIDs).subscribe((returnedCart) => {
                this.cart = returnedCart;
                console.log("cart len" + this.cart.length);
                for (var i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].idSmoothie == this.objSmoothieArray[i].id) {
                        this.cart[i].quantity += this.objSmoothieArray[i].quantity - this.cart[i].quantity;
                    }
                }
                this.countTotal(this.cart);
            });
        }
        else {
            var message = "Cart is empty";
        }
    }
    //increment quantity
    incrementQuantity(index) {
        this.cart[index].quantity += 1;
        this.objSmoothie = this.selectedSmoothies[index];
        this.objSmoothie.quantity = this.cart[index].quantity;
        this.selectedSmoothies[index] = this.objSmoothie;
        this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
        this.total += this.cart[index].price;
    }
    //decrementt quantity
    decrementQuantity(index) {
        if (this.cart[index].quantity > 1)
            this.cart[index].quantity -= 1;
        this.objSmoothie = this.selectedSmoothies[index];
        this.objSmoothie.quantity = this.cart[index].quantity;
        this.selectedSmoothies[index] = this.objSmoothie;
        this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
        this.total -= this.cart[index].price;
    }
    //remove the smoothie from cart
    removeProduct(index) {
        this.total -= this.cart[index].price * this.cart[index].quantity;
        this.cart.splice(index, 1);
        this.selectedSmoothies.splice(index, 1);
        this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
    }
    //calculate total
    countTotal(cart) {
        console.log(this.cart);
        for (var i = 0; i < this.cart.length; i++) {
            this.total += this.cart[i].price * this.cart[i].quantity;
            console.log(this.total);
        }
    }
};
CartDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart-details',
        template: __webpack_require__("../../../../../src/app/cart/cart-details/cart-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_cart_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_cart_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], CartDetailsComponent);

var _a, _b;
//# sourceMappingURL=cart-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://peaceful-reef-13737.herokuapp.com/api/Cart";
    }
    /*getCart(id : number) : Observable<ICart> {
      return this.http.get(this.apiUrl + `/${id}`)
        .map((res) => res.json())
    }*/
    getCart(id) {
        return this.http.get(this.apiUrl + `/${id}`)
            .map((res) => res.json());
    }
};
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Global settings */\r\n$color-border: #eee;\r\n$color-label: #aaa;\r\n$font-default: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n$font-bold: 'HelveticaNeue-Medium', 'Helvetica Neue Medium';\r\n\r\n\r\n/* Global \"table\" column settings */\r\n.product-image { float: left; width: 20%; }\r\n.product-details { float: left; width: 37%; }\r\n.product-price { float: left; width: 12%; }\r\n.product-quantity { float: left; width: 10%; }\r\n.product-removal { float: left; width: 9%; }\r\n.product-line-price { float: left; width: 12%; text-align: right; }\r\n\r\n\r\n/* This is used as the traditional .clearfix class */\r\n.group:before,\r\n.group:after {\r\n    content: '';\r\n    display: table;\r\n} \r\n.group:after {\r\n    clear: both;\r\n}\r\n.group {\r\n    zoom: 1;\r\n}\r\n\r\n\r\n/* Apply clearfix in a few places */\r\n.shopping-cart, .column-labels, .product, .totals-item {\r\n  @extend .group;\r\n}\r\n\r\n\r\n/* Apply dollar signs */\r\n.product .product-price:before, .product .product-line-price:before, .totals-value:before {\r\n  content: '$';\r\n}\r\n\r\n\r\n/* Body/Header stuff */\r\nbody {\r\n  padding: 0px 30px 30px 20px;\r\n  font-family: $font-default;\r\n  font-weight: 100;\r\n}\r\n\r\nh1 {\r\n  font-weight: 100;\r\n}\r\n\r\nlabel {\r\n  color: $color-label;\r\n}\r\n\r\n.shopping-cart {\r\n  margin-top: -45px;\r\n}\r\n\r\n\r\n/* Column headers */\r\n.column-labels {\r\n  label {\r\n    padding-bottom: 15px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid $color-border;\r\n  }\r\n  \r\n  .product-image, .product-details, .product-removal {\r\n    text-indent: -9999px;\r\n  }\r\n}\r\n\r\n\r\n/* Product entries */\r\n.product {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid $color-border;\r\n  \r\n  .product-image {\r\n    text-align: center;\r\n    img {\r\n      width: 100px;\r\n    }\r\n  }\r\n  \r\n  .product-details {\r\n    .product-title {\r\n      margin-right: 20px;\r\n      font-family: $font-bold;\r\n    }\r\n    .product-description {\r\n      margin: 5px 20px 5px 0;\r\n      line-height: 1.4em;\r\n    }\r\n  }\r\n  \r\n  .product-quantity {\r\n    input {\r\n      width: 40px;\r\n      \r\n    }\r\n  }\r\n  \r\n  .remove-product {\r\n    border: 0;\r\n    padding: 4px 8px;\r\n    background-color: #c66;\r\n    color: #fff;\r\n    font-family: $font-bold;\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .remove-product:hover {\r\n    background-color: #a44;\r\n  }\r\n}\r\n\r\n\r\n/* Totals section */\r\n.totals {\r\n  .totals-item {\r\n    float: right;\r\n    clear: both;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    \r\n    label {\r\n      float: left;\r\n      clear: both;\r\n      width: 79%;\r\n      text-align: right;\r\n    }\r\n    \r\n    .totals-value {\r\n      float: right;\r\n      width: 21%;\r\n      text-align: right;\r\n    }\r\n  }\r\n  \r\n  .totals-item-total {\r\n    font-family: $font-bold;\r\n  }\r\n}\r\n\r\n.checkout {\r\n  float: right;\r\n  border: 0;\r\n  margin-top: 20px;\r\n  padding: 6px 25px;\r\n  background-color: #6b6;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.checkout:hover {\r\n  background-color: #494;\r\n}\r\n\r\n\r\n/* Make more adjustments for phone */\r\n@media screen and (max-width: 350px) {\r\n  \r\n  .product-removal {\r\n    float: right;\r\n  }\r\n  \r\n  .product-line-price {\r\n    float: right;\r\n    clear: left;\r\n    width: auto;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .product .product-line-price:before {\r\n    content: 'Item Total: $';\r\n  }\r\n  \r\n  .totals \r\n      label {\r\n        width: 60%;\r\n      }\r\n      \r\n      .totals-value {\r\n        width: 40%;\r\n      }\r\n    }\r\n.checkContinueBtn{\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n#payBtn{\r\n  float: right;\r\n  margin-top:15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class='panel panel-primary'>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <app-cart-details></app-cart-details>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"text-right\" id=\"checkContinueBtn\">\n        <button class=\"btn btn-info\" routerLink=\"/\">Continue Shopping</button>\n        <button class=\"btn btn-success\" id=\"testBTN\" (click)=\"showAddress()\" *ngIf=\"!showAdd\">Checkout</button>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div *ngIf=\"showAdd\" class='panel panel-primary'>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <app-personal-details></app-personal-details>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"showAdd\" class='panel panel-primary'>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <app-payment-details></app-payment-details>\n        </div>\n      </div>\n      <button type=\"subbmit\" class=\"btn btn-success btn-sm\" id=\"payBtn\" (click)=\"addTotalOrder()\">Pay</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_order_service__ = __webpack_require__("../../../../../src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordersmoothie_service__ = __webpack_require__("../../../../../src/app/cart/ordersmoothie.service.ts");
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




let CartComponent = class CartComponent {
    constructor(orderService, ordersmoothieService, cookieService) {
        this.orderService = orderService;
        this.ordersmoothieService = ordersmoothieService;
        this.cookieService = cookieService;
        this.selectedSmoothies = [];
        this.showAdd = false;
        this.lastOrderId = [];
        this.OrderIDArray = [];
        this.objSmoothieArray = [];
        this.userID = [];
    }
    ngOnInit() {
    }
    showAddress() {
        this.showAdd = true;
    }
    addOrder() {
        //insert order into order table
        console.log("ok");
        var order = {
            "idUser": 2222,
            "date": new Date()
        };
        console.log("addOrder" + order);
        this.orderService.addOrder(order).subscribe(res => {
            var res = res;
            //this.addOrderVar = res;
            console.log("orderplaced");
        });
    }
    getLastOrderId() {
        //getting the last orderID
        console.log("get last order");
        this.orderService.getLastOrderID().subscribe((returedOrderID) => {
            this.lastOrderId = returedOrderID;
            for (var i = 0; i < this.lastOrderId.length; i++) {
                this.OrderID = this.lastOrderId[i];
                console.log("OrderID" + this.OrderID);
                this.OrderIDArray.push(this.OrderID.idOrder);
                for (var i = 0; i < this.OrderIDArray.length; i++) {
                    this.lastlastOderID = this.OrderIDArray[i];
                    console.log("lastlastOderID" + this.lastlastOderID);
                }
            }
        });
    }
    addSmoothieOrder() {
        //getting smoothieID and quantity from cookie
        this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
        console.log("selectedSmoothies" + this.selectedSmoothies);
        for (var i = 0; i < this.selectedSmoothies.length; i++) {
            this.objSmoothie = this.selectedSmoothies[i];
            this.objSmoothieArray.push(this.objSmoothie);
        }
        //insert smoothieID and quantity into smoothieOrders table with the last orderID
        for (var i = 0; i < this.objSmoothieArray.length; i++) {
            console.log("check addSmoothieOrder");
            var smoothieorder = {
                "idSmoothie": this.objSmoothieArray[i].id,
                "idOrder": this.lastlastOderID,
                "quantity": this.objSmoothieArray[i].quantity
            };
            this.ordersmoothieService.addSmoothieOrder(smoothieorder).subscribe(res => {
                var res = res;
                console.log("check addSmoothieOrder");
            });
        }
    }
    addTotalOrder() {
        this.addOrder();
        setTimeout(() => {
            this.getLastOrderId();
        }, 3000);
        setTimeout(() => {
            this.addSmoothieOrder();
        }, 5000);
    }
};
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ordersmoothie_service__["a" /* OrdersmoothieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ordersmoothie_service__["a" /* OrdersmoothieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/ordersmoothie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersmoothieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OrdersmoothieService = class OrdersmoothieService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://peaceful-reef-13737.herokuapp.com/api/";
    }
    addSmoothieOrder(smoothieorder) {
        console.log("check service" + smoothieorder.idSmoothie);
        console.log("check service" + smoothieorder.lastlastOderID);
        console.log("check service" + smoothieorder.quantity);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(smoothieorder);
        console.log(data);
        return this.http.post(this.apiUrl + '/SmoothieOrders/add', data, { headers: headers })
            .map(res => res.json());
    }
};
OrdersmoothieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrdersmoothieService);

var _a;
//# sourceMappingURL=ordersmoothie.service.js.map

/***/ }),

/***/ "../../../../../src/app/cart/payment-details/payment-details.component.html":
/***/ (function(module, exports) {

module.exports = "  <form  id=\"payment-form\" method=\"post\">\n    <label>Name on Card</label>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <input class='form-control' size='4' type='text'>\n      </div>\n    </div>\n    <label>Card Number</label>\n    <div class=\"row\">\n        <div class='col-xs-12'>\n            <input autocomplete='off' class='form-control' size='20' type='text'>\n          </div>\n        </div>\n        <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label>CVC</label>\n        <input autocomplete='off' class='form-control' placeholder='ex. 123' size='4' type='text'>\n      </div>\n      <div class='col-md-4'>\n        <label>Expiration</label>\n        <input class='form-control' placeholder='MM' size='2' type='text'>\n      </div>\n      <div class=\"col-md-4\">\n        <label> </label>\n        <input class='form-control card-expiry-year' placeholder='YYYY' size='4' type='text'>\n      </div>\n    </div>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/cart/payment-details/payment-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaymentDetailsComponent = class PaymentDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-payment-details',
        template: __webpack_require__("../../../../../src/app/cart/payment-details/payment-details.component.html")
    }),
    __metadata("design:paramtypes", [])
], PaymentDetailsComponent);

//# sourceMappingURL=payment-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/personal-details/personal-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"myForm\"   *ngFor=\"let u of user\" novalidate > \n  <label for=\"firstName\">Name:</label>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input type=\"text\" class=\"form-control\" name=\"name\" value={{u.name}} #name required />\n    </div>\n  </div>\n  <label for=\"street\" class=\"control-label\">Street: </label>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input type=\"text\" class=\"form-control\" name=\"street\" value={{u.street}} #street/>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <label for=\"city\" class=\"control-label\">City: </label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" value={{u.city}} #city/>\n    </div>\n    <div class=\"col-md-2\">\n      <label for=\"county\" class=\"control-label\">County: </label>\n      <input type=\"text\" class=\"form-control\" name=\"county\"  value={{u.county}} #county/>\n    </div>\n    <div class=\"col-md-4\">\n      <label for=\"eircode\" class=\"control-label\">Eircode: </label>\n      <input type=\"text\" class=\"form-control\" name=\"eircode\" value={{u.eircode}}  #eircode/>\n    </div>\n  </div>\n  <label for=\"firstName\">Email:</label>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input type=\"text\" class=\"form-control\" name=\"email\" value={{u.email}} #email required />\n    </div>\n  </div>\n  <div  class=\"row text-right\" id=\"editBtn\">\n    <div class=\"col-sm-12\">\n        <br>\n        <button type=\"subbmit\" class=\"btn btn-success btn-sm\" (click)=\"editUserDetails()\" >Edit</button>\n      <button type=\"subbmit\" class=\"btn btn-success btn-sm\" id=\"saveBtn\"(click)=\"updateUser(name, street, city, county, eircode, email)\" *ngIf=\"savePersonalDetails\">Save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/cart/personal-details/personal-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
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



let PersonalDetailsComponent = class PersonalDetailsComponent {
    constructor(userService, cookieService) {
        this.userService = userService;
        this.cookieService = cookieService;
        /*address: string;
        city: string;
        name: string;*/
        this.showAdd = false;
        this.editPersonalDetails = true;
        this.savePersonalDetails = false;
        this.myform = false;
        this.userIDCookie = [];
        this.userID = [];
    }
    ngOnInit() {
        this.loadPersonalDetails();
    }
    loadPersonalDetails() {
        console.log("userIDCookie check");
        this.userIDCookie = JSON.parse(this.cookieService.get('userID'));
        console.log("userIDCookie" + this.userIDCookie);
        this.userID.push(this.userIDCookie[0]);
        console.log("userIDCookie" + this.userID);
        this.userService.getUserById(this.userIDlast[0]).subscribe((returnedUser) => {
            this.user = returnedUser;
            console.log("userName" + this.user.name);
        });
    }
    editUserDetails() {
        this.savePersonalDetails = true;
        this.editPersonalDetails = false;
    }
    updateUser(name, street, city, county, eircode, email) {
        var user = {
            iduser: "5",
            name: name.value,
            street: street.value,
            city: city.value,
            county: county.value,
            eircode: eircode.value,
            email: email.value,
        };
        this.userService.updateUser(user).subscribe(res => {
            var res = res;
            console.log(res);
        });
    }
    ;
    /* updateUser() {
       this.userService.updateUser(1, "John").subscribe(() => {
         console.log("component edit user")
       });
     }*/
    showAddress() {
        this.showAdd = true;
    }
};
PersonalDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-personal-details',
        template: __webpack_require__("../../../../../src/app/cart/personal-details/personal-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], PersonalDetailsComponent);

var _a, _b;
//# sourceMappingURL=personal-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-details/contact-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contact li{\r\n    font-size: 2rem;\r\n    text-decoration: none;\r\n}\r\n#contact ul {\r\n  list-style-type: none;\r\n}\r\nh1{\r\n    color: #ff1e40;\r\n}\r\n\r\n#contact img{\r\n\tfloat: left;\r\n    margin-top: 1rem;\r\n\twidth: 4rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact-details/contact-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"col-xs-12\">\n    <ul> \n        <li><h1>Get In Touch With Us:</h1></li>\n        <li>happysmoothie@mail.ie</li>\n        <li></li>\n\n    </ul>\n</div>     "

/***/ }),

/***/ "../../../../../src/app/contact/contact-details/contact-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContactDetailsComponent = class ContactDetailsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ContactDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-details',
        template: __webpack_require__("../../../../../src/app/contact/contact-details/contact-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact-details/contact-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactDetailsComponent);

//# sourceMappingURL=contact-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contactUs{\r\n    padding-top: 2rem;\r\n    padding-bottom:2rem;\r\n    text-align: center;\r\n}\r\n.multiple-borders {\r\n    box-shadow: 0px 0px 0px 5px #fff,  0px 0px 5px 6px #b7b7b7;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Kontakt -->\n  <div id=\"contactUs\" class= \"container\">\n    <div >\n      <div class=\"panel-body\">\n          <div class=\"row\">\n         </div>\n       <div class=\"row\">\n        <!-- Formularz -->\n        <div class=\"col-xs-12 col-sm-6\">\n           <app-contact-details></app-contact-details>\n        </div>\n         <!-- Map -->\n         <div id=\"maps\" class=\"col-xs-12 col-sm-6 multiple-borders\">\n            <app-map></app-map>\n        </div>\n          </div>\n        </div>\n      </div>\n    </div>\n   \n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }\r\n#maps\r\n  {\r\n    width: 100%;\r\n    height: 300px;\r\n    border-radius: 15px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/contact/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MapComponent = class MapComponent {
    constructor() {
        this.lat = 54.27775144695452;
        this.lng = -8.459063946129238;
        this.zoom = 16;
    }
    ngOnInit() {
    }
};
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/contact/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var api = 'https://peaceful-reef-13737.herokuapp.com/api/';

let DetailsService = class DetailsService {
    constructor(http) {
        this.http = http;
    }
    getSmoothie(idSmoothie) {
        return this.http.get(api + 'Smoothie/' + idSmoothie)
            .map(res => res.json());
    }
    getIngrediants(idSmoothie) {
        console.log(idSmoothie);
        return this.http.get(api + 'Smoothie/' + idSmoothie + '/Ingrediants')
            .map(res => res.json());
    }
};
DetailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DetailsService);

var _a;
//# sourceMappingURL=details.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    line-height: 36px;\r\n\r\n}\r\nh1{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    color: #ff1e40;\r\n}\r\nimg{\r\n    width:99%;\r\n}\r\n\r\n.home-map-text{\r\n    margin-bottom: 40px;\r\n    margin-top: 50px;\r\n    margin-left: 100px;\r\n}\r\n.re-adjust-right{\r\n    float: right;\r\n}\r\n\r\n\r\n.re-adjust-left{\r\n    float: left;\r\n}\r\n.row{\r\n    margin-top: 50px;\r\n }\r\n  \r\n .bottom {\r\n    border-bottom: 1px solid #ccc;\r\n    margin-top: 120px;\r\n}\r\n.multiple-borders {\r\n    box-shadow: 0px 0px 0px 5px #fff,  0px 0px 5px 6px #b7b7b7;\r\n}\r\n@media only screen and (max-width: 1056px) {\r\n    .home-map-text{\r\n\r\n        margin-left: 50px;\r\n    }\r\n}\r\n@media only screen and (max-width: 990px) {\r\n    .re-adjust-right{\r\n        padding-left: 30px;\r\n    }\r\n}\r\n@media only screen and (max-width: 664px) {\r\n    .home-map-text{\r\n        margin-left: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Page Content -->\n  <div class=\"container\">\n\n    <!-- Heading Row -->\n    <div class=\"row my-4\">\n      <div class=\"col-lg-6\">\n        <img class=\"img-fluid rounded multiple-borders\" src=\"https://i.imgur.com/HLVhVKt.jpg\" alt=\"man and woman enjoying smoothie\">\n      </div>\n      <!-- /.col-lg-6 -->\n      <div class=\"col-lg-6\">\n        <h1>Find a flavour that suit you</h1>\n        <p>Here at HappySmoothies we work hard to always have new and exciting flavours to suit everyone. whether you are a\n          sweet pete or a bitter betty we have the perfect tasting smoothie for you. Click the button below to view our wide\n          range of smoothies now! </p>\n        <a class=\"btn btn-warning btn-lg\" [routerLink]=\"['./app/smoothies']\"> View our Smoothies</a>\n      </div>\n      <!-- /.col-md-6 -->\n    </div>\n    <!-- /.row -->\n\n    <!-- Heading Row -->\n    <div class=\"row my-4\">\n      <div class=\"col-lg-6 re-adjust-right\">\n        <img class=\"multiple-borders\" src=\"https://i.imgur.com/THUbLov.jpg\" alt=\"Smoothie surrounded by fruit\">\n      </div>\n      <!-- /.col-lg-6 -->\n      <div class=\"col-lg-6\">\n        <h1>Our Goal</h1>\n        <p>We here at HappySmoothies are always aiming for perfection. Each new smoothie we reelase has been rigorously tested\n          to ensure the highest standard of quality and taste. Each and everyone of you who has tried our smoothies are very\n          important to us! your opinions matter, please contact us with your opinions.\n        </p>\n        <a class=\"btn btn-warning btn-lg\" [routerLink]=\"['contact']\"> Give us Feedback</a>\n      </div>\n      <!-- /.col-md-6 -->\n\n    </div>\n    <!-- /.row -->\n    <div class=\"row my-4\">\n      <div class=\"col-lg-6\">\n        <img class=\"img-fluid rounded multiple-borders\" src=\"https://i.imgur.com/Voaiq39.jpg\" alt=\"red and green christmas smoothie\">\n      </div>\n      <!-- /.col-lg-6 -->\n      <div class=\"col-lg-6\">\n        <h1>Santa's Smoothies range\n          <h2>COMING SOON</h2>\n        </h1>\n        <p>Christmas is almost here and soon it'll be time to launch our legendary \"Santa's Smoothies\" Range. This Christmas\n          why not enjoy a smoothie with your family while being all wrapped up and cosy infront of the fireplace. </p>\n      </div>\n      \n      <!-- /.col-md-6 -->\n    </div>\n    <!-- /.row -->\n\n    <!-- Content Row \n    <div class=\"row\">\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Card One</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias\n              corporis quod, ea minima accusamus.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n          </div>\n        </div>\n      </div>\n      <!-- /.col-md-4 \n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Card Two</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur\n              voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n          </div>\n        </div>\n      </div>\n      <!-- /.col-md-4\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Card Three</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias\n              corporis quod, ea minima accusamus.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n          </div>\n        </div>\n      </div>\n      <!-- /.col-md-4 -->\n\n  </div>\n  <!-- /.row -->\n  <div class=\"bottom\"></div>\n  <div class=\"home-map-text\">\n    <h1>Now Open in Sligo! </h1>\n    <h2>Come Visit and try out one of our fresh new smoothies.</h2>\n  </div>\n  <div class=\"home-map\">\n    <app-map></app-map>\n  </div>\n</div>\n<!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"display\">\n  <mat-card-content>\n    {{message}}\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NotificationComponent = class NotificationComponent {
    constructor(notifier) {
        this.notifier = notifier;
        this.display = false;
        notifier.emitter.subscribe(data => {
            this.display = data.display;
            this.message = data.message;
        });
    }
    removeMessage() {
        this.display = false;
        this.message = '';
    }
    ngOnInit() {
    }
};
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://peaceful-reef-13737.herokuapp.com/api/";
    }
    /* addOrder(order) {
       console.log('service order');
       return this.http.post(this.apiUrl, {order})
         .map((res) => res.json())
     }*/
    getLastOrderID() {
        return this.http.get(this.apiUrl + 'Order')
            .map((res) => res.json());
    }
    addOrder(order) {
        console.log(order);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(order);
        console.log(data);
        return this.http.post(this.apiUrl + 'Order/add', data, { headers: headers })
            .map(res => res.json());
    }
};
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_service__ = __webpack_require__("../../../../../src/app/providers/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AuthUserService = class AuthUserService {
    constructor(_firebaseAuth, router, notifier) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.notifier = notifier;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
    }
    signup(email, password, name) {
        // clear all messages
        this.notifier.display(false, '');
        this._firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
            this.sendEmailVerification();
            const message = 'A verification email has been sent, please check your email and follow the steps!';
            this.notifier.display(true, message);
            return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('users/' + res.uid).set({
                email: res.email,
                uid: res.uid,
                registrationDate: new Date().toString(),
                name: name
            })
                .then(() => {
                __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signOut();
                this.router.navigate(['login']); //after register navigate to login
            });
        })
            .catch(err => {
            console.log(err);
            this.notifier.display(true, err.message);
        });
    }
    sendEmailVerification() {
        this._firebaseAuth.authState.subscribe(user => {
            user.sendEmailVerification()
                .then(() => {
                console.log('email sent');
            });
        });
    }
    login(email, password) {
        // clear all messages
        this.notifier.display(false, '');
        this._firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
            if (user.emailVerified) {
                this.router.navigate(['home']);
                // Redirect the user here
            }
            else {
                const message = 'A verification email has been sent, please check your email and follow the steps!';
                this.notifier.display(true, message);
            }
        })
            .catch(err => {
            console.log('Something went wrong:', err.message);
            this.notifier.display(true, err.message);
        });
    }
    isLoggedIn() {
        if (this.user == null) {
            return false;
        }
        else {
            return true;
        }
    }
    logout() {
        console.log('logging out...');
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['login']));
    }
};
AuthUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], AuthUserService);

var _a, _b, _c;
//# sourceMappingURL=auth-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_user_service__ = __webpack_require__("../../../../../src/app/providers/auth-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.isLoggedIn) {
            return true;
        }
        console.log('access denied!');
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_user_service__["a" /* AuthUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_user_service__["a" /* AuthUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';



let AuthService = class AuthService {
    constructor(af, router) {
        this.af = af;
        this.router = router;
    }
    loginWithGoogle() {
        return this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    }
    logout() {
        console.log('logging out...');
        this.af.auth.signOut()
            .then((res) => this.router.navigate(['loginAdmin']));
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let NotificationService = class NotificationService {
    constructor() {
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["a" /* Subject */]();
        this.emitter = this.sub.asObservable();
    }
    display(display, message) {
        this.sub.next({ display, message });
    }
};
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/smoothie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SmoothieService = class SmoothieService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://peaceful-reef-13737.herokuapp.com/api/Smoothies";
    }
    //http://peaceful-reef-13737.herokuapp.com/api/Smoothies
    getData() {
        return this.http.get("https://peaceful-reef-13737.herokuapp.com/api/Smoothies")
            .map((res) => res.json());
    }
    getIngrediants(idSmoothie) {
        return this.http.get('https://peaceful-reef-13737.herokuapp.com/api/Smoothie/' + idSmoothie + '/Ingrediants')
            .map(res => res.json()).toPromise();
    }
    /*
    getLastSmoothID(){
      return this.http.get(this.apiUrl)
        .map((res) => res.json());
    }
  */
    addSmoothie(smoothie) {
        console.log('Check add smoothie service!!!!!!');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(smoothie);
        console.log(data);
        console.log('getting there!!!!!!');
        return this.http.post('https://peaceful-reef-13737.herokuapp.com/api/Smoothies/Add', data, { headers: headers })
            .map(res => res.json());
    }
    updateSmoothie(smoothie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(smoothie);
        console.log("check smoothie id: " + smoothie.idSmoothie);
        return this.http.put('https://peaceful-reef-13737.herokuapp.com/api/Smoothies/update/' + smoothie.idSmoothie, data, { headers: headers })
            .map(res => res.json());
    }
    deleteSmoothie(idSmoothie) {
        console.log('Check delete smoothie service!!!!!!');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var object = { 'idSmoothie': idSmoothie };
        var data = JSON.stringify(object);
        console.log('datatattatataa', data);
        console.log('getting there!!!!!!');
        return this.http.delete('https://peaceful-reef-13737.herokuapp.com/api/Smoothies/delete/' + idSmoothie, { headers: headers })
            .map((res) => {
            console.log(res.toString());
            res.json();
        });
    }
};
SmoothieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SmoothieService);

var _a;
//# sourceMappingURL=smoothie.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/star-rating/star-rating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crop {\r\n    overflow: hidden;\r\n}\r\ndiv{\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/star-rating/star-rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.width.px]=\"starWidth\" [title]=\"rating\">\n  <div style=\"width:86px\">\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n    <span class=\"glyphicon glyphicon-star\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/star-rating/star-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let StarRatingComponent = class StarRatingComponent {
    constructor() { }
    ngOnChanges() {
        this.starWidth = this.rating * 86 / 5;
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], StarRatingComponent.prototype, "rating", void 0);
StarRatingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-star-rating',
        template: __webpack_require__("../../../../../src/app/shared/star-rating/star-rating.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/star-rating/star-rating.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarRatingComponent);

//# sourceMappingURL=star-rating.component.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}\n\nbutton{\n    margin-left: 340px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <app-notification></app-notification>\n          <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h4>Login</h4>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <form>\n                <mat-input-container>\n                    <input [(ngModel)]=\"email\" name=\"email\" matInput placeholder=\"email\" type=\"email\">\n                </mat-input-container>\n                <mat-input-container>\n                    <input [(ngModel)]=\"password\" name=\"password\" matInput placeholder=\"password\" type=\"password\">\n                </mat-input-container>\n                <br>\n                <button class=\"btn btn-warning \" (click)=\"loginUserID()\" >Login</button>\n                </form>\n            </mat-card-content>\n          </mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__ = __webpack_require__("../../../../../src/app/providers/auth-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
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




let SigninComponent = class SigninComponent {
    constructor(auth, userService, cookieService) {
        this.auth = auth;
        this.userService = userService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
    }
    login() {
        this.auth.login(this.email, this.password);
        console.log(this.email);
        console.log(this.password);
    }
    getUserID() {
        console.log(this.email);
        this.userService.getUserID(this.email).subscribe(returnedUserID => {
            this.userID = returnedUserID[0];
            this.cookieService.set('userID', JSON.stringify(this.userID));
        });
    }
    loginUserID() {
        this.login();
        this.getUserID();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SigninComponent.prototype, "user", void 0);
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__["a" /* AuthUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__["a" /* AuthUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #ff1e40;\n}\n\nbutton{\n    margin-left: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-notification></app-notification>\n<mat-card>\n  <mat-card-header>\n      <mat-card-title>\n          <h4>Register New User</h4>\n      </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n      <form>\n          <mat-input-container>\n              <input [(ngModel)]=\"email\" name=\"email\" matInput placeholder=\"email\" type=\"email\">\n          </mat-input-container>\n          <mat-input-container>\n              <input [(ngModel)]=\"pwd\" name=\"password\" matInput placeholder=\"password\" type=\"password\">\n          </mat-input-container>\n          <br>\n          <mat-input-container>\n              <input [(ngModel)]=\"name\" name=\"name\" matInput placeholder=\"name\">\n          </mat-input-container>\n          <br>\n          <mat-input-container style=\"width: 33%\">\n              <textarea [(ngModel)]=\"description\" name=\"description\" matInput placeholder=\"description\"></textarea>\n          </mat-input-container>\n          <br>\n     \n        <button class=\"btn btn-warning btn-lg\"  (click)=\"registerUser()\" >Register</button>\n      </form>\n  </mat-card-content>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__ = __webpack_require__("../../../../../src/app/providers/auth-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SignupComponent = class SignupComponent {
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    ngOnInit() {
    }
    register() {
        this.auth.signup(this.email, this.pwd, this.name);
        console.log(this.email);
        console.log(this.pwd);
        // this.authService.registerUser(this.registerData)
    }
    addUser() {
        console.log("ok");
        var user = {
            name: this.name,
            street: "",
            city: "",
            county: "",
            eircode: "",
            email: this.email,
        };
        console.log(user);
        this.userService.addUser(user).subscribe(res => {
            var res = res;
            console.log(res);
        });
    }
    registerUser() {
        this.register();
        this.addUser();
    }
};
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__["a" /* AuthUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_user_service__["a" /* AuthUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothielist.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=smoothielist.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-a{\n    margin:5px;\n    width:100%;\n}\n\ntextarea{\n    width:100%;\n}\n\n.comment-container{\n    border:1px solid black;\n    background-color: #FFDEDE;\n    padding:10px;\n    display:inline-block;\n}\n\n.red{\n    background-color:#E20B2F !important;\n}\n\n.w-50{\n    display:table-cell;\n    width:50%;\n    float:left;\n}\n\n.right{\n    text-align:right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-a comment-container\">\n    <div class=\"\">\n        <textarea placeholder=\"...add comment here\"\n                  [(ngModel)]=\"comment\"\n        ></textarea>\n        <div class=\"w-50\">\n            <input [(ngModel)]=\"rating\" type=\"text\" [style.width.px]=\"30\" min=\"1\" max=\"5\"> / 5 Sternen\n            <app-star-rating [rating]=\"rating\"></app-star-rating>\n        </div>\n        <div class=\"w-50 right\">\n            <button type=\"submit\" class=\"btn btn-success red\" (click)=\"addComment()\"><i class=\"fa fa-share\"></i> Share</button>\n        </div>\n    </div><!-- Status Upload  -->\n</div><!-- Widget Area -->\n"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AddCommentComponent = class AddCommentComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.comment = '';
        this.rating = 5;
        this.url = 'http://localhost:3100';
    }
    ngOnInit() {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
    }
    addComment() {
        var comment = {
            'idUser': 2,
            'idSmoothie': this.idSmoothie,
            'content': this.comment,
            'rating': this.rating
        };
        this.commentService.addComment(comment).subscribe(res => {
            var res = res;
        });
        setTimeout(function () {
            this.socket.emit('add-comment', comment);
        }, 1);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], AddCommentComponent.prototype, "idSmoothie", void 0);
AddCommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-comment',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/add-comment/add-comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]) === "function" && _a || Object])
], AddCommentComponent);

var _a;
//# sourceMappingURL=add-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var api = 'https://peaceful-reef-13737.herokuapp.com/api/';

let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
    }
    /**
     * get all comments of one Smoothie
     * @param idSmoothie
     * @returns {Observable<R>}
     */
    getCommentsOfSmoothie(idSmoothie) {
        console.log(idSmoothie);
        return this.http.get(api + 'Smoothie/' + idSmoothie + '/Comments')
            .map(res => res.json());
    }
    /**
     * get one single comment by Id
     * @param idComment
     * @returns {Observable<R>}
     */
    getComment(idComment) {
        return this.http.get(api + 'Comment/' + idComment)
            .map(res => res.json());
    }
    /**
     * add one comment to database
     * @param comment
     * @returns {OperatorFunction<T, R>}
     */
    addComment(comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(comment);
        return this.http.post(api + 'Comment/add', data, { headers: headers })
            .map(res => res.json());
    }
};
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-box{\n    border:1px solid grey;\n    padding:10px;\n    margin:5px;\n    display:inline-block;\n    width:100%;\n}\n\n.comment-info{\n    border-right: 1px solid black;\n    float:left;\n    width:150px;\n}\n\n.comment-content{\n    padding-left: 15px;\n    display:inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-box\">\n  <div class=\"comment-info\">\n    <b>{{idUser}}</b><br/>\n    {{date | date: 'dd/MM/yyyy'}}<br/>\n    <app-star-rating [rating]=\"rating\"></app-star-rating>\n  </div>\n  <div class=\"comment-content\">\n    {{content}}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CommentComponent = class CommentComponent {
    constructor(commentService) {
        this.commentService = commentService;
    }
    ngOnInit() {
        this.commentService.getComment(this.idComment).subscribe(comments => {
            this.comment = comments[0];
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "idComment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "idUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentComponent.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "rating", void 0);
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]) === "function" && _a || Object])
], CommentComponent);

var _a;
//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<b>COMMENTS:</b>\n<div *ngFor='let comment of commentList'>\n  <app-comment [idComment]=\"comment.idComments\"\n               [idUser]=\"comment.email\"\n               [date]=\"comment.date\"\n               [content]=\"comment.content\"\n               [rating]=\"comment.rating\"\n\n  ></app-comment>\n</div>\n\n<app-add-comment [idSmoothie]=\"passedId\" ></app-add-comment>"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CommentsComponent = class CommentsComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.url = 'http://localhost:3100';
    }
    ngOnInit() {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.getComments();
        this.socket.on('new-comment', () => {
            this.getComments();
        });
    }
    /**
     * get comments onInit
     */
    getComments() {
        this.commentService.getCommentsOfSmoothie(this.passedId).subscribe(comments => {
            this.commentList = comments;
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentsComponent.prototype, "passedId", void 0);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]) === "function" && _a || Object])
], CommentsComponent);

var _a;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-container{\n    text-align:right;\n}\n\n.basket-button{\n    border: 1px solid black;\n    border-radius: 3px;\n    color: white;\n    background-color: #E20B2F;\n    padding:10px;\n    margin:15px;\n    display: inline-block;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"inarow\" syle=\"display: inline;\">{{smoothie.name}}</h3>\n<div class=\"button-container\">\n    <div class=\"basket-button\" (click)=\"addToBasket()\">add to basket</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToBasketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smoothielist__ = __webpack_require__("../../../../../src/app/smoothielist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smoothielist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__smoothielist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AddToBasketComponent = class AddToBasketComponent {
    //selectedSmoothies: ISelectedSmoothie[];
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.selectedSmoothies = [];
    }
    /**
     * add smoothie to cookie for read it in basket
     */
    addToBasket() {
        if (this.cookieService.check('selectedSmoothies')) {
            this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
        }
        this.selectedSmoothies.push({ "id": this.smoothie.idSmoothie, "quantity": "1" });
        this.cookieService.set('selectedSmoothies', JSON.stringify(this.selectedSmoothies));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__smoothielist__["ISmoothie"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__smoothielist__["ISmoothie"]) === "function" && _a || Object)
], AddToBasketComponent.prototype, "smoothie", void 0);
AddToBasketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-to-basket',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], AddToBasketComponent);

var _a, _b;
//# sourceMappingURL=add-to-basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".smoothie-img{\n    width:100%;\n}\n\n.ingrediant{\n    cursor: pointer;\n}\n\n.ingrediants{\n    margin-top:10px;\n    border-left: 1px solid black;\n    padding-left:5px;\n}\n\n.price{\n    font-weight:bold;\n    font-size:1.5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\n</head>\n\n<div *ngIf='smoothie'>\n  <app-add-to-basket [smoothie]=\"smoothie\"></app-add-to-basket>\n</div>\n\n  <div id=\"description-section\" class= \"container\">\n    <div class='panel panel-primary'>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-4 smoothie-description\">\n            <img class=\"smoothie-img\" [src]=\"smoothie.imageUrl\" alt=\"smoothie\"/>\n          </div>\n          <div class=\"col-xs-12 col-sm-4 description-details\">\n            <div class=\"rating\"><app-star-rating [rating]=\"smoothie.rating\"></app-star-rating></div>\n            <div class=\"smoothie-description\">{{smoothie.description}}</div>\n            <div class=\"price\">{{smoothie.price}} €</div>\n            Ingrediants:\n            <div class=\"ingrediants\" *ngIf='ingrediants'>\n              <div class=\"ingrediant-container\" *ngFor=\"let ingre of ingrediants\">\n                <div class=\"ingrediant\" (click)=\"showIngrediantDetails(ingre.name)\">{{ingre.name}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-4 ingrediants-details\">\n            <div *ngIf='!details'>...click on ingrediant so show details</div>\n            <div *ngIf='details'>\n              <b>What it brings to your health:</b><br/>\n              {{details}}\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tropical_fruits_service__ = __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/tropical-fruits.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_service__ = __webpack_require__("../../../../../src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smoothielist__ = __webpack_require__("../../../../../src/app/smoothielist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smoothielist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__smoothielist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DescriptionSectionComponent = class DescriptionSectionComponent {
    constructor(fruitService, detailsService) {
        this.fruitService = fruitService;
        this.detailsService = detailsService;
    }
    ngOnInit() {
        console.log(this.smoothie);
        this.getIngrediants(this.smoothie.idSmoothie);
    }
    /**
     * gets all Ingrediants
     * @param id
     */
    getIngrediants(id) {
        console.log(id);
        this.detailsService.getIngrediants(id).subscribe(ingrediants => {
            this.ingrediants = ingrediants;
            console.log(this.ingrediants);
        });
    }
    /**
     * gets Ingrediant details from external api
     * @param name
     */
    showIngrediantDetails(name) {
        this.fruitService.getDetails(name).subscribe(details => {
            this.details = this.fruitService.health;
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__smoothielist__["ISmoothie"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__smoothielist__["ISmoothie"]) === "function" && _a || Object)
], DescriptionSectionComponent.prototype, "smoothie", void 0);
DescriptionSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-description-section',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/description-section/description-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__tropical_fruits_service__["a" /* TropicalFruitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tropical_fruits_service__["a" /* TropicalFruitsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__details_service__["a" /* DetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__details_service__["a" /* DetailsService */]) === "function" && _c || Object])
], DescriptionSectionComponent);

var _a, _b, _c;
//# sourceMappingURL=description-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/description-section/tropical-fruits.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TropicalFruitsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var api = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=';

let TropicalFruitsService = class TropicalFruitsService {
    constructor(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    /**
     * gets Details from external Api
     * @param ingrediant
     * @returns {OperatorFunction<T, R>}
     */
    getDetails(ingrediant) {
        let apiUrl = 'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=';
        let pine = this.http.get(apiUrl + ingrediant)
            .map(res => {
            this.health = res.json().results[0].health;
            return res.json().results.map(i => { });
        });
        console.log(typeof pine);
        return pine;
    }
};
TropicalFruitsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _b || Object])
], TropicalFruitsService);

var _a, _b;
//# sourceMappingURL=tropical-fruits.service.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-box{\n    border:1px solid grey;\n}\n\n.user{\n    color:cornflowerblue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\n</head>\n<div class=\"container\">\n    <div *ngIf='product'>\n        <app-description-section [smoothie]=\"product\"></app-description-section>\n    </div>\n\n    <br/>\n    <div *ngIf='product'>\n        <app-comments [passedId]=\"passedId\"></app-comments>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothieDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("../../../../../src/app/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SmoothieDetailsComponent = class SmoothieDetailsComponent {
    constructor(detailsService, activatedRoute) {
        this.detailsService = detailsService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        //get id from url
        this.activatedRoute.params.subscribe(params => {
            this.passedId = params['id'].slice(1);
        });
        this.detailsService.getSmoothie(this.passedId).subscribe(product => {
            this.product = product[0];
        });
    }
};
SmoothieDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-smoothie-details',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-details/smoothie-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], SmoothieDetailsComponent);

var _a, _b;
//# sourceMappingURL=smoothie-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh1, h2{\r\n    color: #ff1e40;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\nh2{\r\n    font-size: 20px;\r\n}\r\n.col-xs-8 > p {\r\n     color: #ff0c30;\r\n     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.blogShort{ border-bottom:1px solid #FF8A8A;\r\n}\r\n.add{background: #BB0000; padding: 10%; height: 300px;}\r\n\r\n.nav-sidebar { \r\n    width: 100%;\r\n    padding: 8px 0; \r\n    border-right: 1px solid #FFA2A2;\r\n}\r\n.nav-sidebar a {\r\n    color: #E20B2F;\r\n    transition: all 0.08s linear;\r\n}\r\n.nav-sidebar .active a { \r\n    cursor: default;\r\n    background-color: #34ca78; \r\n    color: #fff; \r\n}\r\n.nav-sidebar .active a:hover {\r\n    background-color: #37D980;   \r\n}\r\n.nav-sidebar .text-overflow a,\r\n.nav-sidebar .text-overflow .media-body {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n}\r\n\r\n.btn-blog {\r\n    color: #ffffff;\r\n    background-color:#FF9100;\r\n    border-color: #D37C03;\r\n    border-radius:0;\r\n    margin-bottom:15px\r\n}\r\n.btn-blog:hover,\r\n.btn-blog:focus,\r\n.btn-blog:active,\r\n.btn-blog.active,\r\n.open .dropdown-toggle.btn-blog {\r\n    color: white;\r\n    background-color: #FFBB00;\r\n    border-color: #CCCF06;\r\n}\r\n\r\n  /* stop the glowing blue shadow */\r\n  .add-on .form-control:focus {\r\n   box-shadow:none;\r\n   -webkit-box-shadow:none; \r\n   border-color:#FFA0A0; \r\n  }\r\n  .form-control{width:20%;\r\n    border: 1px solid #B9B9B9;\r\n}\r\n  .navbar-nav > li > a {\r\n    border-right: 1px solid #ddd;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n  }\r\n  .navbar-nav:last-child{ border-right:0}\r\n\r\n  .multiple-borders {\r\n    box-shadow: 0px 0px 0px 5px #fff,  0px 0px 5px 6px #b7b7b7;\r\n    margin-top: 18px;\r\n  }\r\n\r\n  @media only screen and (max-width: 564px) {\r\n    h1{font-size: 22px;\r\n    }\r\n\r\n}\r\n@media only screen and (max-width: 764px) {\r\n\r\n    .container{width:99%;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\n  </head>\n  \n  <div class=\"container\">\n  <div>\n    \n    <div class=\"panel-body\">\n      <div >\n          \n        <div class=\"col-xs-12\">\n            <h1>Our Smoothies</h1>\n            <h2>Search Our Smoothies :</h2>\n            <p></p>\n            <div class=\"input-group add-on\">\n                <input  [(ngModel)]=\"listFilter\" \n                class=\"form-control\" placeholder=\"e.g. fruity, bitter..\" name=\"srch\" id=\"srch\" type=\"text\">\n              </div>\n        </div>\n      </div>\n\n      \n\n      <div class=\"col-xs-12 blogShort multiple-borders\" *ngFor=\"let smoothie of filteredSmoothies\">\n        <h1>{{smoothie.name}} - {{smoothie.price | currency: \"EUR\" :true:\"1.2-2\"}}</h1>\n        <img [src]=\"smoothie.imageUrl\" [title]=\"smoothie.name\" [style.width.px]=\"imageWidth\" \n        [style.height.px]=\"imageHeight\" [style.margin.px]=\"imageMargin\"\n          class=\"pull-left img-responsive thumb margin10 img-thumbnail\">\n        <article>\n          <p>\n            {{smoothie.description}}\n          </p>\n        </article>\n        <app-star-rating [rating]=\"smoothie.rating\"></app-star-rating>\n        <a class=\"btn btn-blog pull-right \"[routerLink]=\"['details/:' + smoothie.idSmoothie]\">READ MORE</a>\n        <a class=\"marginBottom10\"></a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__ = __webpack_require__("../../../../../src/app/providers/smoothie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SmoothieListComponent = class SmoothieListComponent {
    constructor(_smoothieService) {
        this._smoothieService = _smoothieService;
        this.imageWidth = 125;
        this.imageHeight = 125;
        this.imageMargin = 2;
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredSmoothies = this.listFilter ? this.performFilter(this.listFilter) : this.smoothie;
    }
    getAllSmoothies() {
        this._smoothieService.getData().subscribe(smoothies => {
            this.smoothie = smoothies;
            this.filteredSmoothies = this.smoothie;
        });
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.smoothie.filter((smoothie) => smoothie.name.toLocaleLowerCase().indexOf(filterBy) != -1 || smoothie.description.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
    ngOnInit() {
        this.getAllSmoothies();
    }
};
SmoothieListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-smoothie-list',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothie-list/smoothie-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_providers_smoothie_service__["a" /* SmoothieService */]) === "function" && _a || Object])
], SmoothieListComponent);

var _a;
//# sourceMappingURL=smoothie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{text-align:center;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothies.component.html":
/***/ (function(module, exports) {

module.exports = "<app-smoothie-list></app-smoothie-list>\n"

/***/ }),

/***/ "../../../../../src/app/smoothies/smoothies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SmoothiesComponent = class SmoothiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SmoothiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-smoothies',
        template: __webpack_require__("../../../../../src/app/smoothies/smoothies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smoothies/smoothies.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SmoothiesComponent);

//# sourceMappingURL=smoothies.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://peaceful-reef-13737.herokuapp.com/api/User";
    }
    getUserById(id) {
        return this.http.get(this.apiUrl + `/${id}`)
            .map((res) => res.json());
    }
    getUserID(email) {
        console.log("service email" + email);
        return this.http.get(this.apiUrl + '/GetId' + `/${email}`)
            .map((res) => res.json());
    }
    addUser(user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(user);
        console.log(data);
        return this.http.post(this.apiUrl + '/Add', data, { headers: headers })
            .map(res => res.json());
    }
    updateUser(user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(user);
        console.log("user service check name: " + user.name);
        console.log("user service check id: " + user.iduser);
        return this.http.put(this.apiUrl + '/Update/' + user.iduser, data, { headers: headers })
            .map(res => res.json());
    }
};
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDEqtsaNEzKQGOfcarbh38phCD7tDvjAcg",
        authDomain: "auth-project-1f851.firebaseapp.com",
        databaseURL: "https://auth-project-1f851.firebaseio.com",
        projectId: "auth-project-1f851",
        storageBucket: "",
        messagingSenderId: "686014718336"
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map