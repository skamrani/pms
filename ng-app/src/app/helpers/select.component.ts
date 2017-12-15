import {Component, OnInit, Input} from '@angular/core';
import {CustomHttp} from '../providers/dataservice.provider';

@Component({
    selector: 'app-select',
    template: '<h1>{{test}}:{{valuefield}}</h1>',
})
export class SelectComponent implements OnInit {

    @Input() url: string;
    @Input() valuefield: string;
    @Input() textField: string;
    public data: any;

    ngOnInit(): void {
        console.log('Select component initialized', this.url);
        this.service.get('user/getteams', (data) => {
            this.data = data;
        })
    }

    constructor(private service: CustomHttp) {}

}
