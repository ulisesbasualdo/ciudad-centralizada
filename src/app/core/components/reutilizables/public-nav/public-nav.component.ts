import { NgClass, NgStyle, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public-nav',
  standalone: true,
  imports: [RouterLink, NgClass, NgStyle],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.css'
})
export class PublicNavComponent {
  @ViewChild('btnMenuMovil') btnMenuMovil!: ElementRef<HTMLButtonElement>;
  @ViewChild('navItemsContainer')navItemsContainer!: ElementRef<HTMLDivElement>;
  isMenuMovilAbierto = false;
  // TODO La navegación al top no se produce cuando ya se navegó al indice top
  navItems = [
    {
      nombre: 'Inicio',
      routerLink: '',
      fragment: 'top',
      method: 'scrollToTop'
    },
    {
      nombre: 'Salud',
      routerLink: '',
      fragment: 'salud'
    },
    {
      nombre: 'Policía',
      routerLink: '',
      fragment: 'policia'
    },
    {
      nombre: 'Bomberos',
      routerLink: '',
      fragment: 'bomberos'
    },
    {
      nombre: 'Transporte',
      routerLink: '',
      fragment: 'transporte'
    },
    {
      nombre: 'Remises',
      routerLink: '',
      fragment: 'remises'
    },
    {
      nombre: 'Perdidos y Extraviados',
      routerLink: '',
      fragment: 'perdidos'
    },
    {
      nombre: 'Electricidad',
      routerLink: '',
      fragment: 'electricidad'
    },
    {
      nombre: 'Actividades',
      routerLink: '',
      fragment: 'actividades'
    },
  ];

  constructor(private viewportScroller: ViewportScroller) { }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  abrirCerrarMenuMovil(){
    this.isMenuMovilAbierto = !this.isMenuMovilAbierto;
    this.btnMenuMovil.nativeElement.innerText = this.isMenuMovilAbierto ? 'X' : 'Menú';
  }



  

}
