import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Util} from '../helpers/util.helper';

@Injectable()
export class CustomHttp {
    private base_url: string = 'http://localhost:5000/';
    private requestOptions: any;
    private util: Util;
    constructor(private http: HttpClient, private router: Router) {
        this.util = new Util();
        this.requestOptions = {
            //            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            withCredentials: true
        };
    }

    post(route: string, data: any, callback: Function) {
        //withCredentials allow the angular to parse session and resend the cookie
        this.http.post(this.base_url + route, data, this.requestOptions).subscribe(data => {
            this.util.displayErrors(data);
            callback(data);
        }, (err) => {
            this.errChecker(err);
        });
    }

    get(route: string, callback: Function, params?: any) {
        this.http.get(this.base_url + route, this.requestOptions)
            .subscribe(data => {
                callback(data);
            }, (err) => {
                this.errChecker(err);
            });
    }

    errChecker(err: any) {

        if (err.status == 401) {
            this.router.navigate(['']).then((res) => {
                if (res) {
                    window.location.reload();
                }
            });
        }
    }

}

@Injectable()
export class UserService {

    constructor(private http: CustomHttp) {
        //testing api call
    }

    login(data: any, callback?: Function) {
        this.http.post('user/login', data, callback);
    }

    authenticate(callback?: Function) {
        this.http.get('user/authenticate', callback);
    }

    register(data: any, callback?: Function) {
        console.log('Calling user/register');
        this.http.post('users/register', data, callback);
    }

    logout(callback?: Function) {
        console.log('Calling user/logout');
        this.http.get('user/logout', callback);

    }

    getRoles(callback?: Function) {
        console.log('Calling user/roles');
        this.http.get('roles', callback);
    }

    getTeam(callback?: Function) {
        console.log('Calling user/teams');
        this.http.get('users/get_all_teams', callback);
    }
}
