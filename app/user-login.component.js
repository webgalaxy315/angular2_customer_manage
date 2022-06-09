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
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var router_2 = require('@angular/router');
var UserLoginComponent = (function () {
    function UserLoginComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.navigated = true; // true if navigated here
        this.submitted = false;
        this.model = new user_1.User();
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.navigated = true;
    };
    UserLoginComponent.prototype.on_create_click = function () {
        this.router.navigate(['/user-register']);
    };
    UserLoginComponent.prototype.onLoginSubmit = function () {
        var password_tmp = this.model.password;
        var username_tmp = this.model.username;
        var router = this.router;
        var ret = this.userService.validateUser(this.model)
            .then(function (userInfo) {
            if (password_tmp === userInfo.password) {
                router.navigate(['/dashboard']);
            }
            else {
                alert("Password incorrect!");
            }
        });
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'templates/login.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_2.Router])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map