import { Component} from '@angular/core';
import { AnimationsDirective } from '../../../../directives';

@Component({
  selector: 'app-cabecera-paralax',
  standalone: true,
  imports: [AnimationsDirective],
  templateUrl: './cabecera-paralax.component.html',
  styleUrl: './cabecera-paralax.component.css'
})
export class CabeceraParalaxComponent {

  imagen: string = 'img/especificas/principal/cabecera/fondo.webp';

}