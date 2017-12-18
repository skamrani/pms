import {Component, OnInit, Input} from '@angular/core';
import {CustomHttp} from '../providers/dataservice.provider';

@Component({
    selector: 'app-select',
    template: '<select class="{{textClass}}" id="{{textId}}" name="{{textName}}"><option  *ngFor="let team of valuefield"  value="{{team}}">{{team}}</option></select>',
})
export class SelectComponent implements OnInit {

    @Input() url: string;
    @Input() valuefield: void;
    @Input() textField: string;
    @Input() textId: string;
    @Input() textName: string;
    @Input() textClass: string;
    public data: any;

    ngOnInit(): void {

        console.log('Select component initialized', this.url);
        this.valuefield = this.getTeam();
        console.log(this.valuefield );
    }

    constructor(private service: CustomHttp) {}

    getTeam(){
      let that = this;
      this.service.get(this.url, (data) => {
        that.valuefield = data.data;
      })
    }



}
