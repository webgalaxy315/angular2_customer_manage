"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var aside_component_1 = require('./aside.component');
var header_nav_component_1 = require('./header-nav.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SF Winterbach';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'templates/page.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                aside_component_1.ASideComponent,
                header_nav_component_1.HeaderNavComponent
            ],
            providers: [
                user_service_1.UserService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map