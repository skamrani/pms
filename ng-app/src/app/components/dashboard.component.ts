import {Component, OnInit} from '@angular/core';
import {AuthGuard} from '../providers/auth.provider';

@Component({
    selector: 'app-dashboard',
    templateUrl: '../views/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    ngOnInit(): void {
        console.log('Dashboard component initialized');
    }

    constructor(private authGaurd: AuthGuard) {

    }

}
