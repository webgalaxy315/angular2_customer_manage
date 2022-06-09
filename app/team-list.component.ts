import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { Team } 			from './team';
import { TeamService } 		from './team.service';

@Component({
    selector: 'team',
    templateUrl: 'templates/team-list.html',
    providers: [TeamService],
    directives: [ROUTER_DIRECTIVES]
})
export class TeamListComponent implements OnInit {

    constructor(
        private teamService: TeamService,
        private router: Router) {
    }

    teams: Team[];

    ngOnInit() {
        this.loadTeams();
    }

    private loadTeams() {
        this.teamService
            .getTeams()
            .then(teams => this.teams = teams);
    }

    onDeleteTeam(teamId: number){
        this.teamService
            .deleteTeam(teamId)
            .then(response => this.loadTeams());
    }
}
