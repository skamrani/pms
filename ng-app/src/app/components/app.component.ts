import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
})
export class AppComponent {
    title = 'app';
    constructor() {
        console.log('testing');
    }
}
