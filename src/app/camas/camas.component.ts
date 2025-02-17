import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  id: string;
  name: string;
  piso: boolean;
  update: string;
  acciones: boolean;
}


@Component({
  selector: 'app-camas',
  standalone: true,
  imports: [RouterModule, NzButtonModule, NzFormModule,
    NzInputModule, NzSelectModule, NzIconModule, NzLayoutModule,
    NzDividerModule, NzTableModule, NzTableModule, NzBadgeModule, NzModalModule,
    NzFormModule, ReactiveFormsModule, FormsModule
  ],
  templateUrl: './camas.component.html',
  styleUrl: './camas.component.css'
})
export class CamasComponent {

  listOfData: Person[] = [
    {
      id: '001',
      name: '1',
      piso: true,
      update: '10:30 am',
      acciones: true
    },
    {
      id: '002',
      name: '2',
      piso: true,
      update: '2:00 pm',
      acciones: false
    },
    {
      id: '003',
      name: '3',
      piso: true,
      update: '11:34 am',
      acciones: true
    },
    {
      id: '006',
      name: '3',
      piso: true,
      update: '11:34 am',
      acciones: true
    }

  ];

  /* Agregar cama - Modal */

  isVisible = false;

  showModal(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
    console.log('El botón fue cliqueado');

  }

  handleOk(){
    this.isVisible = false;
    console.log('El boton fue cancelado');
  }

  selectedValue = null;


  confirmModal?: NzModalRef; // Para prueba ahora

  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '¿Quieres eliminar esta cama?',
      nzContent: 'Al hacer clic en el botón Aceptar, este cuadro de diálogo se cerrará después de 1 segundo.',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

}
