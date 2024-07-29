import { Component } from '@angular/core';
import { ImagenTextoComponent, PublicFooterComponent, PublicNavComponent, ToTopButtonComponent } from '../../core/components/reutilizables';
import { CabeceraParalaxComponent, ContactoComponent, DescripcionComponent } from "../../core/components/especificos/principal";
import { AnimationsDirective } from '../../core/directives';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [AnimationsDirective, PublicNavComponent, PublicFooterComponent, ToTopButtonComponent, DescripcionComponent, ImagenTextoComponent, CabeceraParalaxComponent, ContactoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  seccionesImagenesTexto = [
    {
      id: 1,
      subtitulo: '',
      titulo: 'Empleados',
      descripcion: 'En Don Ángel Mayorista, valoramos a nuestros empleados como parte fundamental de nuestro éxito. Nos esforzamos por crear un ambiente de trabajo inclusivo y colaborativo, donde cada miembro del equipo se sienta valorado y motivado para ofrecer un servicio excepcional a nuestros clientes.',
      imagen: 'img/especificas/nosotros/imagen-texto/empleados.webp',
      imagenPrimero: true,
      bgColor: 'var(--verde)'
    },
    {
      id: 2,
      subtitulo: '',
      titulo: 'Valores',
      descripcion: 'Integridad: la integridad es el corazón de todo lo que hacemos. Nos comprometemos a actuar con honestidad, transparencia y ética en todas nuestras interacciones con clientes, empleados y socios comerciales. Creemos que la integridad es la base de la confianza y el respeto mutuo, y nos esforzamos por mantener los más altos estándares en todo lo que hacemos.',
      imagen: 'img/especificas/nosotros/imagen-texto/valores.webp',
      imagenPrimero: false,
      bgColor: 'var(--azul)',
    },
    {
      id: 3,
      subtitulo: '',
      titulo: 'Responsabilidad Social',
      descripcion: 'Asumimos la responsabilidad de nuestras acciones y su impacto en la comunidad y el medio ambiente. Nos comprometemos a operar de manera sostenible y a tomar medidas proactivas para minimizar nuestro impacto en el entorno. Además, nos responsabilizamos de proporcionar productos de calidad y un servicio excepcional a nuestros clientes, cumpliendo con sus expectativas en todo momento.',
      imagen: 'img/especificas/nosotros/imagen-texto/resp_social.webp',
      imagenPrimero: true,
      bgColor: 'var(--rojo-en-fondos)',
    },
    {
      id: 4,
      subtitulo: '',
      titulo: 'Educación y Respeto',
      descripcion: 'Valoramos la educación y el respeto como pilares fundamentales de nuestra cultura empresarial. Fomentamos un ambiente de aprendizaje continuo donde nuestros empleados puedan crecer y desarrollarse profesionalmente. Además, nos esforzamos por promover el respeto mutuo y la diversidad en todas nuestras interacciones, creando un ambiente inclusivo donde cada persona se sienta valorada y respetada.',
      imagen: 'img/especificas/nosotros/imagen-texto/educacion.webp',
      imagenPrimero: false,
      bgColor: 'var(--violeta)',
    },
    {
      id: 5,
      subtitulo: '',
      titulo: 'Innovación tecnológica',
      descripcion: 'Abrazamos la innovación tecnológica como una herramienta para mejorar la experiencia de compra de nuestros clientes y optimizar nuestras operaciones. Estamos comprometidos a mantenernos a la vanguardia de la tecnología, implementando soluciones innovadoras para ofrecer un servicio más eficiente, conveniente y personalizado a nuestros clientes.',
      imagen: 'img/especificas/nosotros/imagen-texto/innovacion.webp',
      imagenPrimero: true,
      bgColor: 'var(--verde)',
    },
    {
      id: 6,
      subtitulo: '',
      titulo: 'Pasión',
      descripcion: 'La pasión impulsa todo lo que hacemos. Estamos apasionados por servir a nuestra comunidad y por ofrecer productos y servicios de la más alta calidad. Nuestra dedicación y entusiasmo se reflejan en cada interacción con nuestros clientes, creando experiencias de compra memorables y satisfactorias.',
      imagen: 'img/especificas/nosotros/imagen-texto/pasion.webp',
      imagenPrimero: false,
      bgColor: 'var(--azul)',
    },
    {
      id: 7,
      subtitulo: '',
      titulo: 'Equipo',
      descripcion: 'En Don Ángel Mayorista, valoramos el trabajo en equipo y el espíritu colaborativo. Reconocemos que el éxito de nuestra empresa depende del talento y el compromiso de nuestro equipo. Nos esforzamos por crear un ambiente de trabajo inclusivo y motivador donde cada miembro del equipo se sienta valorado, apoyado y empoderado para alcanzar su máximo potencial.',
      imagen: 'img/especificas/nosotros/imagen-texto/equipo.webp',
      imagenPrimero: true,
      bgColor: 'var(--violeta)',
    },
  ];
}
