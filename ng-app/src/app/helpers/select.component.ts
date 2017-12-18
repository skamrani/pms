import {Component, OnInit, Input} from '@angular/core';
import {CustomHttp} from '../providers/dataservice.provider';

@Component({
    selector: 'app-select',
    template: '<select id="{{textId}}" name="{{textName}}"><option  *ngFor="let team of data"  value="{{team}}">{{team}}</option></select>',
})
export class SelectComponent implements OnInit {

    @Input() url: string;
    @Input() valuefield: void;
    @Input() textField: string;
    @Input() textId: string;
    @Input() textName: string;
    public data: any;

    ngOnInit(): void {

        console.log('Select component initialized', this.url);
        this.valuefield = this.getTeam();
    }

    constructor(private service: CustomHttp) {}

    getTeam(){
      let that = this;
      this.service.get(this.url, (data) => {
        that.valuefield = data;
      })
    }



}
