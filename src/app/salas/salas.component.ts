import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';



interface Person{
  id: string;
  name: string;
  sala: string;
  update: string;
  acciones: boolean;
}

//API CONECTAR  

@Component({
  selector: 'app-salas',
  standalone: true,
  imports: [RouterModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule
    , NzIconModule, NzLayoutModule, NzDividerModule, NzTableModule, NzBadgeModule, 
    NzModalModule, FormsModule
  ],
  templateUrl: './salas.component.html',
  styleUrl: './salas.component.css'
})
export class SalasComponent {

  selectedValue = null;

  listOfData: Person[] = [
    {
      id: '001',
      name: '1',
      sala: 'Sala 1',
      update: '10:30 am',
      acciones: true
    },
    {
      id: '002',
      name: '2',
      sala: 'Sala 2',
      update: '2:00 pm',
      acciones: false
    },
    {
      id: '003',
      name: '3',
      sala: 'Sala 3',
      update: '11:34 am',
      acciones: true
    },
    {
      id: '006',
      name: '3',
      sala: 'Sala 4',
      update: '11:34 am',
      acciones: false
    }

  ];

  /* AGREGAR NUEVA SALA */

  isVisible = false;

  handleCancel(): void{
    this.isVisible = false;
  }

  handleOk(): void{
    this.isVisible = false;
  }

  showModal(): void{
    this.isVisible = true;
  }

  confirmModal?: NzModalRef;

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

  showEdit(){
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Editando...',
      nzContent: 'Editado'
    })
  }

}
