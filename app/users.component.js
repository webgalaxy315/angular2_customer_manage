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
var UsersComponent = (function () {
    function UsersComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.addingUser = false;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .then(function (users) { return _this.users = users; })
            .catch(function (error) { return _this.error = error; });
    };
    UsersComponent.prototype.addUser = function () {
        this.addingUser = true;
        this.selectedUser = null;
    };
    UsersComponent.prototype.close = function (savedUser) {
        this.addingUser = false;
        if (savedUser) {
            this.getUsers();
        }
    };
    UsersComponent.prototype.deleteUser = function (user, event) {
        var _this = this;
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(function (res) {
            _this.users = _this.users.filter(function (h) { return h !== user; });
            if (_this.selectedUser === user) {
                _this.selectedUser = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        this.addingUser = false;
    };
    UsersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedUser.id]);
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: '',
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map