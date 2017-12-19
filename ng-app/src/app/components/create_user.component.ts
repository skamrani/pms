import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-create-user',
    templateUrl: '../views/create_user.component.html',
})
export class CreateUserComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        console.log("Create User Component initialized");
    }

}
