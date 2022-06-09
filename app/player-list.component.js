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
var PlayerListComponent = (function () {
    function PlayerListComponent(router, playerService) {
        this.player = {};
        this.playerService = playerService;
        this.router = router;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers().then(function (players) {
            _this.players = players;
        });
    };
    PlayerListComponent.prototype.onSelect = function (player) {
        this.router.navigate(['/player-view', player.id]);
    };
    PlayerListComponent.prototype.addPlayer = function () {
        var _this = this;
        this.playerService.save(this.player).then(function (player) {
            _this.player = {};
            _this.playerService.getPlayers().then(function (players) {
                console.log(players);
                _this.players = players;
            });
        });
    };
    PlayerListComponent.prototype.deletePlayer = function (player) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.playerService.deletePlayer(player).then(function () {
                _this.playerService.getPlayers().then(function (players) {
                    _this.players = players;
                });
            });
        }
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'player',
            templateUrl: 'templates/player-list.html',
            providers: [player_service_1.PlayerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map