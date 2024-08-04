import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.css'
})
export class PublicNavComponent {
  @ViewChild('nav') navbar!: ElementRef<HTMLElement>;
  @ViewChild('header') menu!: ElementRef<HTMLElement>;

  navItems = [
    {
      nombre: 'Inicio',
      routerLink: '',
      fragment: ''
    },
    {
      nombre: 'Sucursales',
      routerLink: '',
      fragment: 'Sucursales'
    },
    {
      nombre: 'Ofertas Semanales',
      routerLink: '',
      fragment: 'OfertasSemanales'
    },
    {
      nombre: 'Ofertas Exclusivas',
      routerLink: '',
      fragment: 'OfertasExclusivas'
    },
    {
      nombre: 'Nosotros',
      routerLink: '/nosotros',
      fragment: ''
    },
    {
      nombre: 'Distribuidora',
      routerLink: '/distribuidora',
      fragment: ''
    },
    {
      nombre: 'Mega Ahorro',
      routerLink: '/megaahorro',
      fragment: ''
    },
    {
      nombre: 'Trabajá con Nosotros',
      routerLink: '/nosotros',
      fragment: 'TrabajaConNosotros'
    },
    {
      nombre: 'Contacto',
      routerLink: '/nosotros',
      fragment: 'Contacto'
    },
  ];

  toggleNavbar() {
    this.navbar.nativeElement.classList.toggle('navbar-mobile');
    const toggleIcon = this.navbar.nativeElement.querySelector('.mobile-nav-toggle');
    if (toggleIcon) {
      toggleIcon.classList.toggle('bi-list');
      toggleIcon.classList.toggle('bi-x');
    }
  }

  toggleNavbar2() {
    const navbar = this.navbar.nativeElement;
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      const navbarToggle = navbar.querySelector('.mobile-nav-toggle');
      navbarToggle?.classList.toggle('bi-list');
      navbarToggle?.classList.toggle('bi-x');
    }
  }


  

}
