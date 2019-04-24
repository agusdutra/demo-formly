import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {LocationService} from './location.service';

@Injectable()
export class DemoFormlyService {

  constructor(private locationService: LocationService) {

  }

  getFormlyFields() {

    return [
      this.getFieldNombre(),
      this.getFieldApellido(),
      this.getFieldCedula(),
      this.getFieldEdad(),
      this.getFieldSexo(),
      this.getGroupDireccion(),
      this.getMultiCheckboxField(),
      this.getOtrasPreferencias()

    ];


  }


  /**
   * Input string basico con required
   */
  getFieldNombre() {
    return {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Nombre',
        placeholder: 'Nombre de usuario',
        required: true,
      }
    };
  }

  /**
   * Input string basico con required
   */
  getFieldSexo() {
    return {
      key: 'sexo',
      type: 'radio',
      templateOptions: {
        label: 'Sexo',
        required: true,
        options: [
          {label: 'Masculino', value: 'M'},
          {label: 'Femenino', value: 'F'},
          {label: 'Otro', value: 'O'}]
      }
    };
  }


  /**
   * Input string basico con required
   */
  getMultiCheckboxField() {
    return {
      key: 'preferencias',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Preferencias',
        required: true,
        options: [
          {key: 'deportes', value: 'Deportes'},
          {key: 'libros', value: 'Libros'},
          {key: 'tecnologia', value: 'Tecnología'},
          {key: 'otros', value: 'Otros'}]
      }
    };
  }


  /**
   * Input de tipo password
   */
  getFieldApellido() {
    return {
      key: 'apellido',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Apellido',
        required: true,
      }
    };
  }


  /**
   * Edad con valor min
   */
  getFieldEdad() {
    return {
      key: 'edad',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Edad',
        min: 18,
        required: true,
      },
    };
  }

  /**
   * Grupo que tiene 2 campos
   */
  getGroupDireccion() {

    let group: FormlyFieldConfig;
    group = {
      key: 'direccion',
      templateOptions: {label: 'Dirección'},
      wrappers: ['panel'],
      fieldGroupClassName: 'flex-row',
      fieldGroup: [
        {
          className: 'flex-2',
          key: 'calle',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Calle',
            placeholder: 'Calle',
          }
        },
        {
          className: 'flex-2',
          key: 'numero',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Número',
            placeholder: 'Número',
          }
        },
        {
          className: 'flex-1',
          key: 'pais',
          type: 'select',
          templateOptions: {
            label: 'País',
            options: this.locationService.getCountries(),
            labelProp: 'name',
            valueProp: 'id'
          }
        },
        {
          className: 'flex-1',
          key: 'departamento',
          type: 'select',
          templateOptions: {
            label: 'Departamento',
            options: this.locationService.getDepartaments(),
            labelProp: 'name',
            valueProp: 'id',
          },
          hideExpression: (model) => model.pais !== 'URU',

        },
      ]
    };
    return group;
  }


  getOtrasPreferencias() {
    return {
      key: 'otrasPreferencias',
      type: 'chipListInput',
      templateOptions: {
        label: 'Otras Preferencias',
        placeholder: 'Opciones',
      },
      hideExpression: (model: any, formState: any) => {
        return model.preferencias ? !model.preferencias.otros : true;
      },
    };
  }

  getFieldCedula() {
    return {
      key: 'cedula',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Cédula'
      },
      validators: {
        validation: ['cedula'],
      },
    };
  }

}
