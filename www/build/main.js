webpackJsonp([3],{

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/clientes-cadastro/clientes-cadastro.module": [
		225
	],
	"../pages/contas-cadastro/contas-cadastro.module": [
		228
	],
	"../pages/login/login.module": [
		484,
		2
	],
	"../pages/produtos-cadastro/produtos-cadastro.module": [
		230
	],
	"../pages/produtos-listagem/produtos-listagem.module": [
		485,
		1
	],
	"../pages/vendas-cadastro/vendas-cadastro.module": [
		232
	],
	"../pages/vendas-listagem/vendas-listagem.module": [
		486,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesCadastroPageModule", function() { return ClientesCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_cadastro__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesCadastroPageModule = /** @class */ (function () {
    function ClientesCadastroPageModule() {
    }
    ClientesCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes_cadastro__["a" /* ClientesCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes_cadastro__["a" /* ClientesCadastroPage */]),
            ],
        })
    ], ClientesCadastroPageModule);
    return ClientesCadastroPageModule;
}());

//# sourceMappingURL=clientes-cadastro.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_models_model__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ClientesCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientesCadastroPage = /** @class */ (function () {
    function ClientesCadastroPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.clients = new Array();
        this.client = new __WEBPACK_IMPORTED_MODULE_2__app_core_models_model__["a" /* Client */]();
    }
    ClientesCadastroPage.prototype.saveClient = function () {
        this.clients.push(this.client);
        console.log('clients :', this.clients);
    };
    ClientesCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clientes-cadastro',template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/clientes-cadastro/clientes-cadastro.html"*/'<!--\n  Generated template for the ClientesCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="client.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input type="text" name="cpf" [(ngModel)]="client.cpf"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Data de Nascimento</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" name="dateOfBirtday" [(ngModel)]="client.dateOfBirtday"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Endereço</ion-label>\n      <ion-input type="text" name="adress" [(ngModel)]="client.adress"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-fab>\n      <button ion-fab color="secondary" (click)="saveClient()">+</button>\n\n      <button ion-fab color="danger">X</button>\n    </ion-fab>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/clientes-cadastro/clientes-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], ClientesCadastroPage);
    return ClientesCadastroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=clientes-cadastro.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* unused harmony export Account */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var Sale = /** @class */ (function () {
    function Sale() {
        this.itemsSale = new Array();
    }
    return Sale;
}());

var ItemSale = /** @class */ (function () {
    function ItemSale() {
    }
    return ItemSale;
}());

var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());

var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasCadastroPageModule", function() { return ContasCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contas_cadastro__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContasCadastroPageModule = /** @class */ (function () {
    function ContasCadastroPageModule() {
    }
    ContasCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contas_cadastro__["a" /* ContasCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contas_cadastro__["a" /* ContasCadastroPage */]),
            ],
        })
    ], ContasCadastroPageModule);
    return ContasCadastroPageModule;
}());

//# sourceMappingURL=contas-cadastro.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContasCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContasCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContasCadastroPage = /** @class */ (function () {
    function ContasCadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContasCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContasCadastroPage');
    };
    ContasCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contas-cadastro',template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/contas-cadastro/contas-cadastro.html"*/'<!--\n  Generated template for the ContasCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Tabs</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding></ion-content>\n\n'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/contas-cadastro/contas-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContasCadastroPage);
    return ContasCadastroPage;
}());

//# sourceMappingURL=contas-cadastro.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosCadastroPageModule", function() { return ProdutosCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos_cadastro__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutosCadastroPageModule = /** @class */ (function () {
    function ProdutosCadastroPageModule() {
    }
    ProdutosCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produtos_cadastro__["a" /* ProdutosCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos_cadastro__["a" /* ProdutosCadastroPage */]),
            ],
        })
    ], ProdutosCadastroPageModule);
    return ProdutosCadastroPageModule;
}());

//# sourceMappingURL=produtos-cadastro.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProdutosCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosCadastroPage = /** @class */ (function () {
    function ProdutosCadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdutosCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosCadastroPage');
    };
    ProdutosCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos-cadastro',template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/produtos-cadastro/produtos-cadastro.html"*/'<!--\n  Generated template for the ProdutosCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Produtos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n          <ion-label floating>Código de Barras</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Descrição</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Valor</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Qtde em Estoque</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <br/>\n        <ion-fab>\n          <button ion-fab color="secondary">+</button>\n    \n          <button ion-fab color="danger">X</button>\n        </ion-fab>\n    \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/produtos-cadastro/produtos-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProdutosCadastroPage);
    return ProdutosCadastroPage;
}());

//# sourceMappingURL=produtos-cadastro.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendasCadastroPageModule", function() { return VendasCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendas_cadastro__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendasCadastroPageModule = /** @class */ (function () {
    function VendasCadastroPageModule() {
    }
    VendasCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendas_cadastro__["a" /* VendasCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vendas_cadastro__["a" /* VendasCadastroPage */]),
            ],
        })
    ], VendasCadastroPageModule);
    return VendasCadastroPageModule;
}());

//# sourceMappingURL=vendas-cadastro.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_models_model__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendasCadastroPage = /** @class */ (function () {
    function VendasCadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.products = [
            { 'description': 'Fone de Ouvido', 'valor': 80.00 },
            { 'description': 'Pen Drive 4 gb', 'valor': 20.00 },
            { 'description': 'I3 4ª geração', 'valor': 500.00 },
            { 'description': 'Gabinete Gamer', 'valor': 100.00 },
            { 'description': 'Teclado Gamer', 'valor': 200.00 },
            { 'description': 'Mouse Optico', 'valor': 50.60 }
        ];
        this.itemsOfSale = new Array();
        this.item = new __WEBPACK_IMPORTED_MODULE_2__app_core_models_model__["b" /* ItemSale */]();
        this.sale = new __WEBPACK_IMPORTED_MODULE_2__app_core_models_model__["c" /* Sale */]();
    }
    VendasCadastroPage.prototype.addItemOfSale = function () {
        this.itemsOfSale.push(this.item);
        this.itemsOfSale = [];
    };
    VendasCadastroPage.prototype.registerSale = function () {
        this.sale.dateOfSale = Date.now().toString();
        this.sale.itemsSale = this.itemsOfSale;
        console.log('items: ', this.sale);
    };
    VendasCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vendas-cadastro',template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/vendas-cadastro/vendas-cadastro.html"*/'<!--\n  Generated template for the VendasCadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vendas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/vendas-cadastro/vendas-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VendasCadastroPage);
    return VendasCadastroPage;
}());

//# sourceMappingURL=vendas-cadastro.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_cadastro_clientes_cadastro__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produtos_cadastro_produtos_cadastro__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendas_cadastro_vendas_cadastro__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contas_cadastro_contas_cadastro__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.goScreenRegisterProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produtos_cadastro_produtos_cadastro__["a" /* ProdutosCadastroPage */]);
    };
    HomePage.prototype.goScreenRegisterClient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__clientes_cadastro_clientes_cadastro__["a" /* ClientesCadastroPage */]);
    };
    HomePage.prototype.goScreenRegisterVenda = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vendas_cadastro_vendas_cadastro__["a" /* VendasCadastroPage */]);
    };
    HomePage.prototype.goScreenAccounts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contas_cadastro_contas_cadastro__["a" /* ContasCadastroPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>Menu</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-list>\n        <ion-item menuClose detail-none (click)="goScreenRegisterProduct()">Cadastrar Produto</ion-item>\n        <ion-item menuClose detail-none (click)="goScreenRegisterClient()">Cadastrar Cliente</ion-item>\n        <ion-item menuClose detail-none (click)="goScreenRegisterVenda()">Cadastrar Venda</ion-item>\n        <ion-item menuClose detail-none (click)="goScreenAccounts()">Contas</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clientes_cadastro_clientes_cadastro_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_produtos_cadastro_produtos_cadastro_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vendas_cadastro_vendas_cadastro_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contas_cadastro_contas_cadastro_module__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = {
    apiKey: "AIzaSyBlz7GtH-1HJheLZK_tAuTuClciKcf-Ov4",
    authDomain: "controle-vendas-ff001.firebaseapp.com",
    databaseURL: "https://controle-vendas-ff001.firebaseio.com",
    projectId: "controle-vendas-ff001",
    storageBucket: "",
    messagingSenderId: "745715689013"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    menuType: 'push',
                    platforms: {
                        ios: {
                            menuType: 'overlay',
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/clientes-cadastro/clientes-cadastro.module#ClientesCadastroPageModule', name: 'ClientesCadastroPage', segment: 'clientes-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contas-cadastro/contas-cadastro.module#ContasCadastroPageModule', name: 'ContasCadastroPage', segment: 'contas-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos-cadastro/produtos-cadastro.module#ProdutosCadastroPageModule', name: 'ProdutosCadastroPage', segment: 'produtos-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos-listagem/produtos-listagem.module#ProdutosListagemPageModule', name: 'ProdutosListagemPage', segment: 'produtos-listagem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendas-cadastro/vendas-cadastro.module#VendasCadastroPageModule', name: 'VendasCadastroPage', segment: 'vendas-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendas-listagem/vendas-listagem.module#VendasListagemPageModule', name: 'VendasListagemPage', segment: 'vendas-listagem', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_10__pages_clientes_cadastro_clientes_cadastro_module__["ClientesCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_produtos_cadastro_produtos_cadastro_module__["ProdutosCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_vendas_cadastro_vendas_cadastro_module__["VendasCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_contas_cadastro_contas_cadastro_module__["ContasCadastroPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/iranalyf/ionicProjects/controle-vendas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/iranalyf/ionicProjects/controle-vendas/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map