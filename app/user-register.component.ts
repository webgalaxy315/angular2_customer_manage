import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { NgForm }               from '@angular/forms';
import { User }                 from './user';
import { UserService }          from './user.service';
import { Router }               from '@angular/router';

@Component({
    selector: 'register-form',
    templateUrl: 'templates/user-register.html'
})
export class UserRegisterComponent implements OnInit {
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

    on_back_click() {
        this.router.navigate(['/login']);
    }

    onRegisterSubmit() {
        var cust_router = this.router;
        if (this.new_name && this.new_email && this.new_password && this.new_username) {
            if (this.new_password === this.conf_new_password) {
                let new_user = new User();
                new_user.name = this.new_name;
                new_user.username = this.new_username;
                new_user.password = this.new_password;
                new_user.role = this.new_email;
                new_user.id = 30;
                console.log(new_user);
                this.userService.save(new_user).then(function(data) {
                    cust_router.navigate(['/login']);
                });
            }   else    {
                alert("Password incorrect");
            }                    
        }   else    {
            alert("You must enter UserName, Fullname , email address, password");
        }
    }

}
