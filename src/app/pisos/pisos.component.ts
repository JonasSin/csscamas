import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { FormsModule } from '@angular/forms';

import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


type Gender = 'male' | 'female';

interface Person {
  id: string;
  name: string;
  piso: string;
  update: string;
  acciones: boolean;
}

@Component({
  selector: 'app-pisos',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NzButtonModule, NzFormModule, 
    NzInputModule, NzSelectModule, NzIconModule, NzLayoutModule,
    NzDividerModule, NzTableModule, FormsModule, NzModalModule],
  templateUrl: './pisos.component.html',
  styleUrl: './pisos.component.css'
})
export class PisosComponent {

  selectedValue = null;

  listOfData: Person[] = [
    {
      id: '001',
      name: '1',
      piso: 'piso 1',
      update: '10:30 am',
      acciones: true
    },
    {
      id: '002',
      name: '2',
      piso: 'piso 2',
      update: '2:00 pm',
      acciones: false
    },
    {
      id: '003',
      name: '3',
      piso: 'piso 3',
      update: '11:34 am',
      acciones: true
    },
    {
      id: '006',
      name: '3',
      piso: 'piso 3',
      update: '11:34 am',
      acciones: true
    }

  ];

  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  listOfSelected: string[] = [];

  isSelected(value: string): boolean {
    return this.listOfSelected.indexOf(value) !== -1;
  }


  /* Configuracion del modal, para la creación de un piso*/

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('El botón fue cliqueado');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Boton cancelado');
    this.isVisible = false;
  }


  /*ELIMINAR Y EDITAR UNA FILA */

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

  showEdit(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Editando...',
      nzContent: 'Editado'
    })
  }

}
