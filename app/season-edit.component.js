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
var season_1 = require('./season');
var season_service_1 = require('./season.service');
var SeasonEditComponent = (function () {
    function SeasonEditComponent(activatedRoute, seasonService, router) {
        this.activatedRoute = activatedRoute;
        this.seasonService = seasonService;
        this.router = router;
        this.season = new season_1.Season();
    }
    SeasonEditComponent.prototype.isEdit = function () {
        return this.id != 'new';
    };
    SeasonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        if (this.isEdit())
            this.loadSeasonDetails();
    };
    SeasonEditComponent.prototype.loadSeasonDetails = function () {
        var _this = this;
        this.seasonService.getSeason(parseInt(this.id))
            .then(function (season) { return _this.season = season; });
    };
    SeasonEditComponent.prototype.onSubmitSeason = function () {
        var _this = this;
        if (!this.isEdit())
            this.seasonService.createSeason(this.season)
                .then(function (response) { return _this.router.navigate(['/season-list']); });
        else
            this.seasonService.updateSeason(this.season)
                .then(function (response) { return _this.router.navigate(['/season-list']); });
    };
    SeasonEditComponent.prototype.onCancel = function () {
        this.router.navigate(['/season-list']);
    };
    SeasonEditComponent = __decorate([
        core_1.Component({
            selector: 'season',
            templateUrl: 'templates/season-edit.html',
            providers: [season_service_1.SeasonService]
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, season_service_1.SeasonService, router_1.Router])
    ], SeasonEditComponent);
    return SeasonEditComponent;
}());
exports.SeasonEditComponent = SeasonEditComponent;
//# sourceMappingURL=season-edit.component.js.map