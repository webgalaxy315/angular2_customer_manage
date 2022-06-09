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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PlayerService = (function () {
    function PlayerService(http) {
        this.playersUrl = 'app/players';
        this.http = http;
    }
    PlayerService.prototype.getPlayer = function (id) {
        return this.getPlayers()
            .then(function (players) { return players.find(function (player) { return player.id === id; }); });
    };
    // Add new Player
    PlayerService.prototype.post = function (player) {
        player.status = "pending";
        player.id = Date.now();
        return this.http
            .post(this.playersUrl, JSON.stringify(player))
            .toPromise()
            .then(function (res) {
            console.log(res.json().data);
        })
            .catch(this.handleError);
    };
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(this.playersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PlayerService.prototype.save = function (player) {
        if (player.id) {
            return this.put(player);
        }
        return this.post(player);
    };
    PlayerService.prototype.deletePlayer = function (player) {
        var url = this.playersUrl + "/" + player.id;
        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
    };
    // Update existing Player
    PlayerService.prototype.put = function (player) {
        var url = this.playersUrl + "/" + player.id;
        return this.http
            .put(url, JSON.stringify(player))
            .toPromise()
            .then(function () { return player; })
            .catch(this.handleError);
    };
    PlayerService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map