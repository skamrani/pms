import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'dynamic-select',
  template: '<select class="form-control" name="team" id="team" [(ngModel)]="team" ><option  *ngFor="let team of teams"  value="{{team.id}}">{{team.text}}</option></select>',
})

export class SelectComponent{
  @Input() componentTypes: any;
  teams = [
    {id: 1, text: 'Innovation'},
    {id: 2, text: 'Activation'},
    {id: 3, text: 'Calibration'},
    {id: 4, text: 'Web Service'},
    {id: 5, text: 'Mobile Application Development'},
    {id: 6, text: 'Document'},
    {id: 6, text: 'Quality Assurance'},
  ];
}
