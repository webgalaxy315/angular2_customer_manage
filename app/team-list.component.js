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
var team_service_1 = require('./team.service');
var TeamListComponent = (function () {
    function TeamListComponent(teamService, router) {
        this.teamService = teamService;
        this.router = router;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.loadTeams();
    };
    TeamListComponent.prototype.loadTeams = function () {
        var _this = this;
        this.teamService
            .getTeams()
            .then(function (teams) { return _this.teams = teams; });
    };
    TeamListComponent.prototype.onDeleteTeam = function (teamId) {
        var _this = this;
        this.teamService
            .deleteTeam(teamId)
            .then(function (response) { return _this.loadTeams(); });
    };
    TeamListComponent = __decorate([
        core_1.Component({
            selector: 'team',
            templateUrl: 'templates/team-list.html',
            providers: [team_service_1.TeamService],
            directives: [router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router])
    ], TeamListComponent);
    return TeamListComponent;
}());
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map