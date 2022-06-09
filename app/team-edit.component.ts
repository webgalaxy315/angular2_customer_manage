import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Team } 			from './team';
import { TeamService } 		from './team.service';

@Component({
    selector: 'team',
    templateUrl: 'templates/team-edit.html',
    providers: [TeamService]
})
export class TeamEditComponent implements OnInit {
    id: any;
    team = new Team();
    paramsSub;

    constructor(
        private activatedRoute: ActivatedRoute,
        private teamService: TeamService,
        private router: Router) {
    }

    private isEdit(){
        return this.id != 'new'
    }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
        if(this.isEdit())
            this.loadTeamDetails();
    }

    loadTeamDetails(){
        this.teamService.getTeam(parseInt(this.id))
            .then(team => this.team = team);
    }

    onSubmitTeam(){
        if(!this.isEdit())
            this.teamService.createTeam(this.team)
                .then(response => this.router.navigate(['/team-list']));
        else
            this.teamService.updateTeam(this.team)
                .then(response => this.router.navigate(['/team-list']))
    }

    onCancel(){
        this.router.navigate(['/team-list']);
    }
}
