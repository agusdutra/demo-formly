import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatButtonModule, MatChipsModule, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MainComponent} from './main/main.component';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {DemoFormlyComponent} from './demo-formly/demo-formly.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoFormlyService} from './services/demo-formly.service';
import {LocationService} from './services/location.service';
import {PanelWrapperComponent} from './custom-formly/wrappers/panel.wrapper';
import {ChipListComponent} from './custom-formly/types/custom-templates/chip-list.component';
import {CiValidator} from './custom-formly/validators/validate_ci';

function minErrorMessage(context: { min, actual }) {
  return `${context.actual} no es válido, el mínimo es ${context.min}.`;
}
function cedulaErrorMessage(context: { min, actual }) {
  return `${context.actual} no es un número de cédula válido.`;
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DemoFormlyComponent,
    PanelWrapperComponent,
    ChipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'chipListInput', component: ChipListComponent}
      ],
      validators: [
        {name: 'cedula', validation: CiValidator},
      ], wrappers: [
        {name: 'panel', component: PanelWrapperComponent},
      ],
      validationMessages: [
        {name: 'required', message: 'Este campo es requerido!'},
        {name: 'min', message: minErrorMessage},
        {name: 'cedula', message: cedulaErrorMessage},
      ],
    }),
    FormlyMaterialModule,
  ],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {appearance: 'outline'}
  }, DemoFormlyService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
