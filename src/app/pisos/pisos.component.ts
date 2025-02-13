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
    NzDividerModule, NzTableModule],
  templateUrl: './pisos.component.html',
  styleUrl: './pisos.component.css'
})
export class PisosComponent {

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
    },
    
  ];



}
