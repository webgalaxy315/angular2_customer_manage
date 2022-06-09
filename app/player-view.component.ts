import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }            from '@angular/router';
import { PlayerService } from "./player.service";
import  { Player } from "./player"
@Component({
    selector: 'player',
    templateUrl: 'templates/player-view.html',
    providers: [PlayerService]
})
export class PlayerViewComponent implements OnInit {
    playerService:PlayerService;
    route:ActivatedRoute;
    player = {};
    _player = {};
    edit:boolean;
    constructor(private router: Router, route: ActivatedRoute, playerService:PlayerService) {
        this.playerService = playerService;
        this.route = route;
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.playerService.getPlayer(id).then(player => {
                this.player = this._player = player;
            });
        });
    }


    onEdit(){
        this.edit = true;
        this._player = this.player;
    }
    onReset(){
        this.edit = false;
        this.player = this._player;
    }
    onSaveChanges() {
        this.playerService.save(this.player).then(player=>{
            this._player = player;
        })
    }
    onSave(){
        this.playerService.save(this.player).then(player=>{
            this._player = player;
            this.edit = false;
            console.log(`Saved!`);
        });
    }

    ngOnInit() {



    }
}
