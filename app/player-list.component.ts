import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {PlayerService } from "./player.service";
import {Player} from "./player";

@Component({
    selector: 'player',
    templateUrl: 'templates/player-list.html',
    providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
    playerService:PlayerService;
    players:Player[];
    player = {};
    router:Router;
    constructor(router:Router,playerService:PlayerService) {
        this.playerService = playerService;
        this.router = router;
    }

    ngOnInit() {
        this.playerService.getPlayers().then(players => {
            this.players = players;
        });
    }
    onSelect(player: Player) {
        this.router.navigate(['/player-view', player.id]);
    }

    addPlayer(){
        this.playerService.save(this.player).then(player => {
            this.player = {};
            this.playerService.getPlayers().then(players => {
                console.log(players)
                this.players = players;
            })
        })
    }

    deletePlayer(player){
        if(confirm('Are you sure?')) {
            this.playerService.deletePlayer(player).then(()=> {
                this.playerService.getPlayers().then(players => {
                    this.players = players;
                })
            })
        }
    }

}
