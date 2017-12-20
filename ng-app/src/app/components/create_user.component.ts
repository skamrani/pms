import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider';

@Component({
    selector: 'app-create-user',
    templateUrl: '../views/create_user.component.html'
})
export class CreateUserComponent implements OnInit {

    model: any = {
        email: '',
        full_name: '',
        password: '',
        team_id: '',
        role: []
    };
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        console.log("Create User Component initialized");
    }

    onSubmit() {
        console.log('Form is submitting');
        this.userService.addUser(this.model, (res) => {
            console.log('response :', res.msg);
        });

    }
    diagnostic() {
        return JSON.stringify(this.model);
    }

    onSelectChange(team_id: string) {
        this.model["team_id"] = team_id;
    }

}
