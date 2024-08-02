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
  seccionesImagenesTexto = [
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
      imagen: 'img/cartel-miramar-tren.webp',
      imagenPrimero: true,
      bgColor: 'transparent',
    },
    {
      id: 2,
      subtitulo: '',
      titulo: 'Remises',
      descripcion: `
      Ver todos los remises en Google con sus valoraciones | 
      <a href="https://www.google.com/search?sca_esv=e59d9031b627fbb2&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=ADLYWIJD3ry-PYgAUHBXpQrjXzNMtsrKDw:1721142254901&q=remises+en+miramar&rflfq=1&num=10&sa=X&ved=2ahUKEwis6NfF6quHAxWUppUCHcFRC6sQjGp6BAggEAE&biw=1358&bih=620&dpr=1#rlfi=hd:;si:6636147762236742401,l,ChJyZW1pc2VzIGVuIG1pcmFtYXJIpuC2jY-rgIAIWhgQABgCIhJyZW1pc2VzIGVuIG1pcmFtYXKSAQx0YXhpX3NlcnZpY2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkNkbHBRZDFoUkVBRaoBSBABKgsiB3JlbWlzZXMoDjIfEAEiGyq3jVeud_Dtz3AmYKd-f91H_SiqFuAmNVpHpDIWEAIiEnJlbWlzZXMgZW4gbWlyYW1hcg;mv:[[-38.262890299999995,-57.834284],[-38.275551899999996,-57.848665000000004]]"
      target="_blank">Clic Aquí</a>
Listado de Remises:
Remisse Plaza
Dirección: C. 23 1768 Cómo llegar
Teléfono: 02291 43-1349 llamar  ext. 432076 llamar
Remis Sur
Dirección: C. 23 2225 Cómo llegar
Teléfono: 02291 42-1017 llamar
Remisse Pronto
Dirección: Centro Zona 4, C. 23 1031 Cómo llegar
Teléfono: 02291 42-0000 llamar
Remise Plaza panda
Dirección: Diagonal Fortunato de la Plaza 1452, Centro Cómo llegar
Teléfono: 02291 43-0517 llamar
Remiseria Miramar
Dirección: Calle 21 1818, Centro Cómo llegar
Teléfono: 02291 42-3200 llamar
Remises Danny
Dirección: C. 26 1859 Cómo llegar
Teléfono: 02291 43-0034 llamar
Hola Remisse
Dirección: C. 30 1053 Cómo llegar
Teléfono: 02291 42-2720 llamar
Centro Taxi
Dirección: Calle 21 1621, Centro Cómo llegar
Teléfono: 02291 43-2929 llamar
Mitre Remisse
Dirección: C. 26 664 Cómo llegar
Teléfono: 02291 43-0055 llamar

      `,
      imagen: 'img/terminal.webp',
      imagenPrimero: false,
      bgColor: '',
    },
    {
      id: 3,
      subtitulo: '',
      titulo: 'Responsabilidad Social',
      descripcion:
        'Asumimos la responsabilidad de nuestras acciones y su impacto en la comunidad y el medio ambiente. Nos comprometemos a operar de manera sostenible y a tomar medidas proactivas para minimizar nuestro impacto en el entorno. Además, nos responsabilizamos de proporcionar productos de calidad y un servicio excepcional a nuestros clientes, cumpliendo con sus expectativas en todo momento.',
      imagen: 'img/especificas/nosotros/imagen-texto/resp_social.webp',
      imagenPrimero: true,
      bgColor: 'var(--rojo-en-fondos)',
    },
    {
      id: 4,
      subtitulo: '',
      titulo: 'Educación y Respeto',
      descripcion:
        'Valoramos la educación y el respeto como pilares fundamentales de nuestra cultura empresarial. Fomentamos un ambiente de aprendizaje continuo donde nuestros empleados puedan crecer y desarrollarse profesionalmente. Además, nos esforzamos por promover el respeto mutuo y la diversidad en todas nuestras interacciones, creando un ambiente inclusivo donde cada persona se sienta valorada y respetada.',
      imagen: 'img/especificas/nosotros/imagen-texto/educacion.webp',
      imagenPrimero: false,
      bgColor: 'var(--violeta)',
    },
    {
      id: 5,
      subtitulo: '',
      titulo: 'Innovación tecnológica',
      descripcion:
        'Abrazamos la innovación tecnológica como una herramienta para mejorar la experiencia de compra de nuestros clientes y optimizar nuestras operaciones. Estamos comprometidos a mantenernos a la vanguardia de la tecnología, implementando soluciones innovadoras para ofrecer un servicio más eficiente, conveniente y personalizado a nuestros clientes.',
      imagen: 'img/especificas/nosotros/imagen-texto/innovacion.webp',
      imagenPrimero: true,
      bgColor: 'var(--verde)',
    },
    {
      id: 6,
      subtitulo: '',
      titulo: 'Pasión',
      descripcion:
        'La pasión impulsa todo lo que hacemos. Estamos apasionados por servir a nuestra comunidad y por ofrecer productos y servicios de la más alta calidad. Nuestra dedicación y entusiasmo se reflejan en cada interacción con nuestros clientes, creando experiencias de compra memorables y satisfactorias.',
      imagen: 'img/especificas/nosotros/imagen-texto/pasion.webp',
      imagenPrimero: false,
      bgColor: 'var(--azul)',
    },
    {
      id: 7,
      subtitulo: '',
      titulo: 'Equipo',
      descripcion:
        'En Don Ángel Mayorista, valoramos el trabajo en equipo y el espíritu colaborativo. Reconocemos que el éxito de nuestra empresa depende del talento y el compromiso de nuestro equipo. Nos esforzamos por crear un ambiente de trabajo inclusivo y motivador donde cada miembro del equipo se sienta valorado, apoyado y empoderado para alcanzar su máximo potencial.',
      imagen: 'img/especificas/nosotros/imagen-texto/equipo.webp',
      imagenPrimero: true,
      bgColor: 'var(--violeta)',
    },
  ];
}
