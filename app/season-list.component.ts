import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { Season }             from './season';
import { SeasonService }      from './season.service';

@Component({
    selector: 'season',
    templateUrl: 'templates/season-list.html',
    providers: [SeasonService],
    directives: [ROUTER_DIRECTIVES]
})
export class SeasonListComponent implements OnInit {

    constructor(
        private seasonService: SeasonService,
        private router: Router) {
    }

    seasons: Season[];

    ngOnInit() {
        this.loadSeasons();
    }

    private loadSeasons() {
        this.seasonService
            .getSeasons()
            .then(seasons => this.seasons = seasons);
    }

    onDeleteSeason(seasonId: number){
        this.seasonService
            .deleteSeason(seasonId)
            .then(response => this.loadSeasons());
    }
}
