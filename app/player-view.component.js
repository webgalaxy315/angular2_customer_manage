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
var player_service_1 = require("./player.service");
var PlayerViewComponent = (function () {
    function PlayerViewComponent(router, route, playerService) {
        var _this = this;
        this.router = router;
        this.player = {};
        this._player = {};
        this.playerService = playerService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.playerService.getPlayer(id).then(function (player) {
                _this.player = _this._player = player;
            });
        });
    }
    PlayerViewComponent.prototype.onEdit = function () {
        this.edit = true;
        this._player = this.player;
    };
    PlayerViewComponent.prototype.onReset = function () {
        this.edit = false;
        this.player = this._player;
    };
    PlayerViewComponent.prototype.onSaveChanges = function () {
        var _this = this;
        this.playerService.save(this.player).then(function (player) {
            _this._player = player;
        });
    };
    PlayerViewComponent.prototype.onSave = function () {
        var _this = this;
        this.playerService.save(this.player).then(function (player) {
            _this._player = player;
            _this.edit = false;
            console.log("Saved!");
        });
    };
    PlayerViewComponent.prototype.ngOnInit = function () {
    };
    PlayerViewComponent = __decorate([
        core_1.Component({
            selector: 'player',
            templateUrl: 'templates/player-view.html',
            providers: [player_service_1.PlayerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, player_service_1.PlayerService])
    ], PlayerViewComponent);
    return PlayerViewComponent;
}());
exports.PlayerViewComponent = PlayerViewComponent;
//# sourceMappingURL=player-view.component.js.map