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
var UserRegisterComponent = (function () {
    function UserRegisterComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.navigated = true; // true if navigated here
        this.submitted = false;
        this.model = new user_1.User();
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.navigated = true;
    };
    UserRegisterComponent.prototype.on_back_click = function () {
        this.router.navigate(['/login']);
    };
    UserRegisterComponent.prototype.onRegisterSubmit = function () {
        var cust_router = this.router;
        if (this.new_name && this.new_email && this.new_password && this.new_username) {
            if (this.new_password === this.conf_new_password) {
                var new_user = new user_1.User();
                new_user.name = this.new_name;
                new_user.username = this.new_username;
                new_user.password = this.new_password;
                new_user.role = this.new_email;
                new_user.id = 30;
                console.log(new_user);
                this.userService.save(new_user).then(function (data) {
                    cust_router.navigate(['/login']);
                });
            }
            else {
                alert("Password incorrect");
            }
        }
        else {
            alert("You must enter UserName, Fullname , email address, password");
        }
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-form',
            templateUrl: 'templates/user-register.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_2.Router])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=user-register.component.js.map