import {Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'vg-chip-list-input',
  templateUrl: 'chip-list.component.html',
  styleUrls: ['chip-list.component.scss']
})
export class ChipListComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  claves: any[] = [];

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.claves.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.formControl.setValue(this.claves);
  }

  remove(clave: any): void {
    const index = this.claves.indexOf(clave);
    if (index >= 0) {
      this.claves.splice(index, 1);
      this.formControl.setValue(this.claves);
    }
  }
}
