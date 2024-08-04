import { Component } from '@angular/core';
import {
  ImagenTextoComponent,
  PublicFooterComponent,
  PublicNavComponent,
  ToTopButtonComponent,
} from '../../core/components/reutilizables';
import {
  CabeceraParalaxComponent,
  ContactoComponent,
  DescripcionComponent,
} from '../../core/components/especificos/principal';
import { AnimationsDirective } from '../../core/directives';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    AnimationsDirective,
    PublicNavComponent,
    PublicFooterComponent,
    ToTopButtonComponent,
    DescripcionComponent,
    ImagenTextoComponent,
    CabeceraParalaxComponent,
    ContactoComponent,
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  transporte = 
    {
      id: 1,
      subtitulo: '',
      titulo: 'Transporte',
      descripcion: ` 
      Página de Facebook Costa Azul | <a 
      class="gf"
      href="https://www.facebook.com/profile.php?id=100063484871855" 
      target="_blank"><strong>Clic Aquí</strong></a>
      <br>
      Es la página oficial del único micro que une:
      <br>
      Miramar - Mar Del Plata
      <br>
      Miramar - Mar del Sur
      <br>
      Miramar - Otamendi
      <br>
      Allí podrás ver los horarios del Micro`,
      imagen: 'img/terminal.webp',
      imagenPrimero: true,
      bgColor: 'transparent',
    }
}
