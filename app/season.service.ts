import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Season } from './season';

@Injectable()
export class SeasonService {

    private seasonsUrl = 'app/seasons';

    constructor(private http: Http) { }

    getSeasons(): Promise<Season[]> {
        return this.http.get(this.seasonsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getSeason(id: number) {
        return this.getSeasons()
            .then(seasons => seasons.find(season => season.id === id));
    }

    createSeason(season: Season): Promise<Season>  {
        return this.post(season);
    }

    updateSeason(season: Season): Promise<Season> {
        return this.put(season);
    }

    deleteSeason(id: number) {
        return this.delete(id);
    }

    private post(season: Season): Promise<Season> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.seasonsUrl, JSON.stringify(season), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(seasonId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.seasonsUrl}/${seasonId}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private put(season: Season) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.seasonsUrl}/${season.id}`;

        return this.http
            .put(url, JSON.stringify(season), {headers: headers})
            .toPromise()
            .then(() => season)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
