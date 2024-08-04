import { AfterViewInit, Component } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

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
export class PrincipalComponent implements AfterViewInit{
  constructor(
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }
}
