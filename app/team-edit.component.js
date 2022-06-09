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
var team_1 = require('./team');
var team_service_1 = require('./team.service');
var TeamEditComponent = (function () {
    function TeamEditComponent(activatedRoute, teamService, router) {
        this.activatedRoute = activatedRoute;
        this.teamService = teamService;
        this.router = router;
        this.team = new team_1.Team();
    }
    TeamEditComponent.prototype.isEdit = function () {
        return this.id != 'new';
    };
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        if (this.isEdit())
            this.loadTeamDetails();
    };
    TeamEditComponent.prototype.loadTeamDetails = function () {
        var _this = this;
        this.teamService.getTeam(parseInt(this.id))
            .then(function (team) { return _this.team = team; });
    };
    TeamEditComponent.prototype.onSubmitTeam = function () {
        var _this = this;
        if (!this.isEdit())
            this.teamService.createTeam(this.team)
                .then(function (response) { return _this.router.navigate(['/team-list']); });
        else
            this.teamService.updateTeam(this.team)
                .then(function (response) { return _this.router.navigate(['/team-list']); });
    };
    TeamEditComponent.prototype.onCancel = function () {
        this.router.navigate(['/team-list']);
    };
    TeamEditComponent = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: 'templates/team-edit.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, team_service_1.TeamService, router_1.Router])
    ], TeamEditComponent);
    return TeamEditComponent;
}());
exports.TeamEditComponent = TeamEditComponent;
//# sourceMappingURL=team-edit.component.js.map