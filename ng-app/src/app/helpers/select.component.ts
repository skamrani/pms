import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CustomHttp} from '../providers/dataservice.provider';

@Component({
    selector: 'app-select',
    template: `<select #select class="{{attrClass}}" id="{{attrId}}" name="{{attrName}}" (change)="onChange(select)">
    <option *ngFor="let item of items"  value="{{item[valueField]}}">{{item[textField]}}</option>
</select>`,
})
export class SelectComponent implements OnInit {

    @Input() url: string;
    @Input() valueField: string;
    @Input() textField: string;
    @Input() modelBind: string;

    @Input() attrName: string;
    @Input() attrId: string;
    @Input() attrClass: string = "form-control select-select2";

    @Output() sendValue: EventEmitter<string> = new EventEmitter<string>();

    public items: any;

    ngOnInit(): void {
        console.log('Select component initialized', this.url);
        this.getData();
    }

    constructor(private service: CustomHttp) {}

    getData() {
        let that = this;
        this.service.get(this.url, (data: any) => {
            if (data["data"]) {
                that.items = data["data"] || [];
            }
        })
    }

    onChange(select: any) {
        this.sendValue.emit(select.value);
    }



}
