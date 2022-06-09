import { Injectable }    from '@angular/core';
import {Http, Response,HTTP_PROVIDERS} from '@angular/http';
import { Player } from './player';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PlayerService {
    public http:Http;
    private playersUrl:string = 'app/players';
    constructor(http:Http) {
        this.http = http;
    }

    getPlayer(id: number) {
        return this.getPlayers()
            .then(players => players.find(player => player.id === id));
    }


    // Add new Player
    post(player){
        player.status = "pending";
        player.id = Date.now();
        return this.http
            .post(this.playersUrl, JSON.stringify(player))
            .toPromise()
            .then(res =>{
                console.log(res.json().data)
            } )
            .catch(this.handleError);
    }

    getPlayers(){
        return this.http.get(this.playersUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    save(player){
        if (player.id) {
            return this.put(player);
        }
        return this.post(player);
    }

    deletePlayer(player) {
        let url = `${this.playersUrl}/${player.id}`;
        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    // Update existing Player
    private put(player) {
        let url = `${this.playersUrl}/${player.id}`;

        return this.http
            .put(url, JSON.stringify(player))
            .toPromise()
            .then(() => player)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
    }
}
