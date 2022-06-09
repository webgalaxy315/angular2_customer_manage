import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User }                from './user';
import { UserService }         from './user.service';

@Component({
    selector: 'user',
    template: '',
})
export class UsersComponent implements OnInit {
    users: User[];
    selectedUser: User;
    addingUser = false;
    error: any;

    constructor(
        private router: Router,
        private userService: UserService) { }

    getUsers() {
        this.userService
            .getUsers()
            .then(users => this.users = users)
            .catch(error => this.error = error);
    }

    addUser() {
        this.addingUser = true;
        this.selectedUser = null;
    }

    close(savedUser: User) {
        this.addingUser = false;
        if (savedUser) { this.getUsers(); }
    }

    deleteUser(user: User, event: any) {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.users = this.users.filter(h => h !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getUsers();
    }

    onSelect(user: User) {
        this.selectedUser = user;
        this.addingUser = false;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedUser.id]);
    }
}
