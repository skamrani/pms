
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CustomHttp {
    private base_url: string = 'http://localhost:5000/';
    private requestOptions: any;
    constructor(private http: HttpClient) {

        this.requestOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            withCredentials: true
        };
    }

    post(route: string, data: any, callback: Function) {
        //withCredentials allow the angular to parse session and resend the cookie
        this.http.post(this.base_url + route, data, this.requestOptions).subscribe(data => {
            callback(data);
        }, err => {
            console.log('Something wen wrong', err);
        });
    }

    get(route: string, callback: Function, params?: any) {
        this.http.get(this.base_url + route, this.requestOptions)
            .subscribe(data => {
                callback(data);
            }, err => {
                console.log('Something wen wrong', err);
            });
    }

}

@Injectable()
export class UserService {

    constructor(private http: CustomHttp) {
        //testing api call
    }

    login(data: any, callback?: Function) {
        console.log('Calling user/login');
        this.http.post('users/login', data, callback);
    }

    register(data: any, callback?: Function) {
        console.log('Calling user/register');
        this.http.post('users/register', data, callback);
    }

    logout(callback?: Function) {
        console.log('Calling user/logout');
        this.http.get('users/logout', callback);

    }
    getRoles(callback?: Function) {
      console.log('Calling user/roles');
      this.http.get('roles', callback);
    }

}

