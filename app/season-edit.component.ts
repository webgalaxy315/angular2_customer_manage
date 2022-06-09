import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Season }       from './season';
import { SeasonService }     from './season.service';

@Component({
    selector: 'season',
    templateUrl: 'templates/season-edit.html',
    providers: [SeasonService]
})
export class SeasonEditComponent implements OnInit {
    id: any;
    season = new Season();
    paramsSub;

    constructor(
        private activatedRoute: ActivatedRoute,
        private seasonService: SeasonService,
        private router: Router) {
    }

    private isEdit(){
        return this.id != 'new'
    }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
        if(this.isEdit())
            this.loadSeasonDetails();
    }

    loadSeasonDetails(){
        this.seasonService.getSeason(parseInt(this.id))
            .then(season => this.season = season);
    }

    onSubmitSeason(){
        if(!this.isEdit())
            this.seasonService.createSeason(this.season)
                .then(response => this.router.navigate(['/season-list']));
        else
            this.seasonService.updateSeason(this.season)
                .then(response => this.router.navigate(['/season-list']))
    }

    onCancel(){
        this.router.navigate(['/season-list']);
    }
}
