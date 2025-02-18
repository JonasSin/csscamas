import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NzCardModule, NzGridModule],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
