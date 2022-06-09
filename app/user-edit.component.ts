import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User }        from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user',
    templateUrl: 'templates/user-edit.html'
})
export class UserEditComponent implements OnInit, OnDestroy {
    @Input() user: User;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;
    navigated = false; // true if navigated here

    constructor(
        private userService: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.userService.getUser(id)
                    .then(user => this.user = user);
            } else {
                this.navigated = false;
                this.user = new User();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.userService
            .save(this.user)
            .then(user => {
                this.user = user; // saved user, w/ id if new
                this.goBack(user);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    goBack(savedUser: User = null) {
        this.close.emit(savedUser);
        if (this.navigated) { window.history.back(); }
    }
}