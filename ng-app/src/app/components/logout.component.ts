import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-logout',
    template: '<h2>Logging out....</h2>',
})
export class LogoutComponent implements OnInit {

    constructor(private service: UserService, private cookie: CookieService) {}

    ngOnInit(): void {
        console.log('Logging out...');
        this.cookie.deleteAll();
        this.service.logout((res: any) => {
            console.log(res);
        });
    }
}
