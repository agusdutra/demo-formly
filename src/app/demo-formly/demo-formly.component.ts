import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {DemoFormlyService} from '../services/demo-formly.service';

@Component({
  selector: 'app-demo-formly',
  templateUrl: './demo-formly.component.html',
  styleUrls: ['./demo-formly.component.scss']
})
export class DemoFormlyComponent implements OnInit {


  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private demoFormlyService: DemoFormlyService) {
  }

  ngOnInit(): void {
    this.fields = this.demoFormlyService.getFormlyFields();
  }

  getPrintModel() {
    return JSON.stringify(this.model, null, '  ');
  }


  getInputFields() {

  }

  getSelectField() {

  }

  onSubmitForm() {

  }

}
