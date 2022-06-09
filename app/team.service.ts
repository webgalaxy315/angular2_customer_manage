import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Team } from './team';

@Injectable()
export class TeamService {

    private teamsUrl = 'app/teams';

    constructor(private http: Http) { }

    getTeams(): Promise<Team[]> {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getTeam(id: number) {
        return this.getTeams()
            .then(teams => teams.find(team => team.id === id));
    }

    createTeam(team: Team): Promise<Team>  {
        return this.post(team);
    }

    updateTeam(team: Team): Promise<Team> {
        return this.put(team);
    }

    deleteTeam(id: number) {
        return this.delete(id);
    }

    private post(team: Team): Promise<Team> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.teamsUrl, JSON.stringify(team), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(teamId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.teamsUrl}/${teamId}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private put(team: Team) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.teamsUrl}/${team.id}`;

        return this.http
            .put(url, JSON.stringify(team), {headers: headers})
            .toPromise()
            .then(() => team)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
