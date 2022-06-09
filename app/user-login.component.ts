import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { NgForm }               from '@angular/forms';
import { User }                 from './user';
import { UserService }          from './user.service';
import { Router }           from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: 'templates/login.html'
})
export class UserLoginComponent implements OnInit {
    error: any;
    sub: any;
    navigated = true; // true if navigated here
    submitted = false;
    new_name;   new_email;  new_password;   conf_new_password;  new_username;
    model = new User();

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
        ) {
    }

    ngOnInit() {
        this.navigated = true;
    }
    on_create_click() {
        this.router.navigate(['/user-register']);
    }
    onLoginSubmit() {
        var password_tmp = this.model.password;
        var username_tmp = this.model.username;
        var router = this.router;

        var ret = this.userService.validateUser(this.model)
            .then(function(userInfo) {
                if (password_tmp === userInfo.password) {
                    router.navigate(['/dashboard']);
                }   else    {
                    alert("Password incorrect!");
                }
            });
    }
}
