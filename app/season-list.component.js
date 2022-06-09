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
var router_2 = require('@angular/router');
var season_service_1 = require('./season.service');
var SeasonListComponent = (function () {
    function SeasonListComponent(seasonService, router) {
        this.seasonService = seasonService;
        this.router = router;
    }
    SeasonListComponent.prototype.ngOnInit = function () {
        this.loadSeasons();
    };
    SeasonListComponent.prototype.loadSeasons = function () {
        var _this = this;
        this.seasonService
            .getSeasons()
            .then(function (seasons) { return _this.seasons = seasons; });
    };
    SeasonListComponent.prototype.onDeleteSeason = function (seasonId) {
        var _this = this;
        this.seasonService
            .deleteSeason(seasonId)
            .then(function (response) { return _this.loadSeasons(); });
    };
    SeasonListComponent = __decorate([
        core_1.Component({
            selector: 'season',
            templateUrl: 'templates/season-list.html',
            providers: [season_service_1.SeasonService],
            directives: [router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [season_service_1.SeasonService, router_1.Router])
    ], SeasonListComponent);
    return SeasonListComponent;
}());
exports.SeasonListComponent = SeasonListComponent;
//# sourceMappingURL=season-list.component.js.map