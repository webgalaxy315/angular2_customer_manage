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
var SeasonService = (function () {
    function SeasonService(http) {
        this.http = http;
        this.seasonsUrl = 'app/seasons';
    }
    SeasonService.prototype.getSeasons = function () {
        return this.http.get(this.seasonsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SeasonService.prototype.getSeason = function (id) {
        return this.getSeasons()
            .then(function (seasons) { return seasons.find(function (season) { return season.id === id; }); });
    };
    SeasonService.prototype.createSeason = function (season) {
        return this.post(season);
    };
    SeasonService.prototype.updateSeason = function (season) {
        return this.put(season);
    };
    SeasonService.prototype.deleteSeason = function (id) {
        return this.delete(id);
    };
    SeasonService.prototype.post = function (season) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.seasonsUrl, JSON.stringify(season), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SeasonService.prototype.delete = function (seasonId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.seasonsUrl + "/" + seasonId;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    SeasonService.prototype.put = function (season) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.seasonsUrl + "/" + season.id;
        return this.http
            .put(url, JSON.stringify(season), { headers: headers })
            .toPromise()
            .then(function () { return season; })
            .catch(this.handleError);
    };
    SeasonService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SeasonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SeasonService);
    return SeasonService;
}());
exports.SeasonService = SeasonService;
//# sourceMappingURL=season.service.js.map