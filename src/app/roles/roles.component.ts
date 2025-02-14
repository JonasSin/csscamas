import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

interface Person{
  id: string;
  name: string;
  sala: string;
  update: string;
  acciones: boolean;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [NzButtonModule, NzFormModule, NzInputModule,
    NzSelectModule, NzIconModule, NzLayoutModule, NzDividerModule, 
    NzTableModule, NzBadgeModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

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

}
