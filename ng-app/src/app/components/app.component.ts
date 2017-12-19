import {Component, OnInit} from '@angular/core';
import {AuthGuard} from '../providers/auth.provider';
import {UserService} from '../providers/dataservice.provider';
import {Router} from '@angular/router';
import {of} from 'rxjs/observable/of';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
})
export class AppComponent implements OnInit {

    public user: any;

    ngOnInit(): void {
        console.log('App component initialized');
        this.userService.authenticate((res: any) => {
            console.log(res);
            if (res["status"] == 200) {
                this.user = of(res["data"]);
            } else {
                this.user = false;
                //                this.router.navigate(['/login'], {queryParams: {force: true}});
            }
        });

    }

    constructor(private authGaurd: AuthGuard, private userService: UserService, private router: Router) {}

}
