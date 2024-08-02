import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnimationsDirective } from '../../../directives/animations.directive';

@Component({
  selector: 'app-imagen-texto',
  standalone: true,
  imports: [NgClass, AnimationsDirective],
  templateUrl: './imagen-texto.component.html',
  styleUrl: './imagen-texto.component.css'
})
export class ImagenTextoComponent {
  @Input()subtitulo: string = '';
  @Input()titulo: string = '';
  @Input()descripcion: string = '';
  @Input()imagen: string = '';
  @Input()imagenPrimero: boolean = true;
  @Input()bgColor: string = '#fff';
  @Input()animationInputImagen: string = 'fadeInTop';
  @Input()animationInputTexto: string = 'fadeInRight';
  @Input()color: string= '#000';
  @Input()topSubtitulo!: string;
}
