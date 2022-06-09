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
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'app/teams';
    }
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.getTeam = function (id) {
        return this.getTeams()
            .then(function (teams) { return teams.find(function (team) { return team.id === id; }); });
    };
    TeamService.prototype.createTeam = function (team) {
        return this.post(team);
    };
    TeamService.prototype.updateTeam = function (team) {
        return this.put(team);
    };
    TeamService.prototype.deleteTeam = function (id) {
        return this.delete(id);
    };
    TeamService.prototype.post = function (team) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.teamsUrl, JSON.stringify(team), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.delete = function (teamId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.teamsUrl + "/" + teamId;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    TeamService.prototype.put = function (team) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.teamsUrl + "/" + team.id;
        return this.http
            .put(url, JSON.stringify(team), { headers: headers })
            .toPromise()
            .then(function () { return team; })
            .catch(this.handleError);
    };
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map