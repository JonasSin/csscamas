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
    NzDividerModule, NzTableModule, NzTableModule, NzBadgeModule
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


}
