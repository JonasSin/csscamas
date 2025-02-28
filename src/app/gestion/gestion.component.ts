import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { PisosComponent } from '../pisos/pisos.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NzCardModule, NzGridModule, 
    PisosComponent
  ],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
