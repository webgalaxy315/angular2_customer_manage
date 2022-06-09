import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { User }        from './user';
import { UserService } from './user.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'templates/dashboard.html'
})
export class DashboardComponent implements OnInit {

    users: User[] = [];

    constructor(
        private router: Router,
        private userService: UserService) {
    }

    ngOnInit() {

    }
}
