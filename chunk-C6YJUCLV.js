import{B as A,D as B,a as c,b as F,c as x,d as b,e as O,f as s,g,h as f,i as C,j as M,k as E,l as t,m as n,n as i,o as S,p as _,q as I,r as P,s as k,t as y,u as e,v as w,w as p,y as D,z as T}from"./chunk-LEKVS4SW.js";var v=(()=>{let o=class o{constructor(l){this.el=l,this.animationInput="",this.animationOutput="fadeOut",this.opacityEnd="1",this.delay="0s",this.isOneTime=!1}ngAfterViewInit(){this.observer=new IntersectionObserver(l=>{l.forEach(r=>{this.el.nativeElement.style.opacity=r.isIntersecting?this.opacityEnd:"0",this.el.nativeElement.classList.toggle(this.animationInput,r.isIntersecting)})}),this.observer.observe(this.el.nativeElement)}};o.\u0275fac=function(r){return new(r||o)(g(O))},o.\u0275dir=F({type:o,selectors:[["","appAnimations",""]],inputs:{animationInput:"animationInput",animationOutput:"animationOutput",opacityEnd:"opacityEnd",delay:[0,"animationDelay","delay"],isOneTime:"isOneTime"},standalone:!0});let a=o;return a})();var L=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=c({type:o,selectors:[["app-public-footer"]],standalone:!0,features:[p],decls:27,vars:0,consts:[[1,"contenedor"],[1,"contenido"],[1,"titulo"],[1,"descripcion"],[1,"contacto"],["href","https://www.linkedin.com/in/ulisesbasualdo","target","_blank","rel","noopener"],["href","https://wa.me/542291407553","target","_blank","rel","noopener"],["href","mailto:ulimiramar@gmail.com","target","_blank","rel","noopener"],[1,"derechos"],[1,"gf"]],template:function(r,m){r&1&&(t(0,"footer")(1,"div",0)(2,"div",1)(3,"div",2)(4,"p"),e(5,"Miramar Centralizada es un proyecto que busca reunir la informaci\xF3n m\xE1s importante de la ciudad de Miramar en un solo lugar "),n()(),t(6,"div",3)(7,"p"),e(8,"Creado por "),t(9,"strong"),e(10,"Ulises Basualdo"),n(),t(11,"strong"),e(12," Programador Full Stack"),n()(),t(13,"p"),e(14,"Contacto"),n(),t(15,"p",4)(16,"a",5),e(17,"LinkedIn"),n(),e(18," | "),t(19,"a",6),e(20,"WhatsApp"),n(),e(21," | "),t(22,"a",7),e(23,"ulimiramar@gmail.com"),n()()(),t(24,"div",8)(25,"i",9),e(26,'"Agotar los medios para lograr el objetivo con lo que se tiene m\xE1s a la mano"'),n()()()()())},styles:["footer[_ngcontent-%COMP%]{margin-top:5%}.contenedor[_ngcontent-%COMP%]{width:100%;background:linear-gradient(45deg,#0f3286 15%,#1441a9,#0f3286 85%);color:#fff;text-align:center;padding-block:4%}.contenido[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:2em}.contacto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#65feff}i[_ngcontent-%COMP%]{font-family:Zain,sans-serif;font-size:1.2vmax}@media (max-width: 768px){.contenedor[_ngcontent-%COMP%]{padding-block:10%}.contenido[_ngcontent-%COMP%]{padding-inline:10%}i[_ngcontent-%COMP%]{font-size:1.8vmax}.descripcion[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}}"]});let a=o;return a})();var z=["btnMenuMovil"],N=["navItemsContainer"];function V(a,o){if(a&1&&(t(0,"li")(1,"a",4),e(2),n()()),a&2){let d=o.$implicit;s(),f("routerLink",d.routerLink)("fragment",d.fragment),s(),w(d.nombre)}}function q(a,o){if(a&1){let d=S();t(0,"li")(1,"a",9),_("click",function(){x(d);let r=I();return b(r.abrirCerrarMenuMovil())}),e(2),n()()}if(a&2){let d=o.$implicit;s(),f("routerLink",d.routerLink)("fragment",d.fragment),s(),w(d.nombre)}}var j=(()=>{let o=class o{constructor(l){this.viewportScroller=l,this.isMenuMovilAbierto=!1,this.navItems=[{nombre:"Inicio",routerLink:"",fragment:"top",method:"scrollToTop"},{nombre:"Salud",routerLink:"",fragment:"salud"},{nombre:"Polic\xEDa",routerLink:"",fragment:"policia"},{nombre:"Bomberos",routerLink:"",fragment:"bomberos"},{nombre:"Transporte",routerLink:"",fragment:"transporte"},{nombre:"Remises",routerLink:"",fragment:"remises"},{nombre:"Perdidos y Extraviados",routerLink:"",fragment:"perdidos"},{nombre:"Electricidad",routerLink:"",fragment:"electricidad"},{nombre:"Actividades",routerLink:"",fragment:"actividades"}]}scrollToTop(){this.viewportScroller.scrollToPosition([0,0])}abrirCerrarMenuMovil(){this.isMenuMovilAbierto=!this.isMenuMovilAbierto,this.btnMenuMovil.nativeElement.innerText=this.isMenuMovilAbierto?"X":"Men\xFA"}};o.\u0275fac=function(r){return new(r||o)(g(T))},o.\u0275cmp=c({type:o,selectors:[["app-public-nav"]],viewQuery:function(r,m){if(r&1&&(P(z,5),P(N,5)),r&2){let u;k(u=y())&&(m.btnMenuMovil=u.first),k(u=y())&&(m.navItemsContainer=u.first)}},standalone:!0,features:[p],decls:17,vars:3,consts:[["navItemsContainer",""],["btnMenuMovil",""],[1,"nav"],[1,"nav-logo"],[3,"routerLink","fragment"],[1,"nav-items"],[1,"contenedor-btn-menu-movil"],[1,"btn-menu-movil",3,"click"],[1,"nav-items-menu-movil",3,"ngClass"],[3,"click","routerLink","fragment"]],template:function(r,m){if(r&1){let u=S();t(0,"div",2)(1,"div",3)(2,"a",4),e(3,"Miramar Centralizada"),n()(),t(4,"div",5,0)(6,"ul"),M(7,V,3,3,"li",null,C),n()(),t(9,"div",6)(10,"button",7,1),_("click",function(){return x(u),b(m.abrirCerrarMenuMovil())}),e(12,"Men\xFA"),n()()(),t(13,"div",8)(14,"ul"),M(15,q,3,3,"li",null,C),n()()}r&2&&(s(2),f("routerLink","")("fragment","top"),s(5),E(m.navItems),s(6),f("ngClass",m.isMenuMovilAbierto?"abierto fadeInTop":"cerrado"),s(2),E(m.navItems))},dependencies:[B,D],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#00f;font-size:1.5vmax;font-family:Zain,sans-serif}.nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:2% 0%;background-color:#fff;width:100%;position:sticky;top:0;z-index:9999;box-shadow:0 2px 13px #00000069}.nav[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-inline:5%}.nav-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;list-style:none;gap:1.5em}.contenedor-btn-menu-movil[_ngcontent-%COMP%]{display:none}.btn-menu-movil[_ngcontent-%COMP%]{background-color:transparent;color:#c200ff;padding:10%;border:none;font-size:3.5vmax;transition:all .5s}.nav-items-menu-movil[_ngcontent-%COMP%]{display:none}@media (max-width:991px){.nav[_ngcontent-%COMP%]{background-color:#ffffffad;justify-content:flex-end}.nav[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-right:10%}.nav-logo[_ngcontent-%COMP%]{display:none}.contenedor-btn-menu-movil[_ngcontent-%COMP%]{display:block}.nav-items[_ngcontent-%COMP%]{display:none}.nav-items-menu-movil.abierto[_ngcontent-%COMP%]{display:block;position:fixed;z-index:999;width:100%;box-shadow:0 2px 13px #00000069}.nav-items-menu-movil.abierto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:flex-end;text-align:right;list-style:none;padding:5% 10%}.nav-items-menu-movil[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:4vmax}}"]});let a=o;return a})();var R=(()=>{let o=class o{constructor(){this.imagen="img/especificas/principal/cabecera/fondo.webp"}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=c({type:o,selectors:[["app-cabecera-paralax"]],standalone:!0,features:[p],decls:9,vars:0,consts:[[1,"header"],[1,"header-content"],["appAnimations","","animationInput","fadeInTop-hero"],["appAnimations","","animationInput","fadeInBottom-hero"],["src","img/atardecer-verano.webp","alt","Mi Lugar Miramar",1,"header-image"]],template:function(r,m){r&1&&(t(0,"section",0)(1,"div",1)(2,"h1",2),e(3,"Miramar "),t(4,"span"),e(5,"Centralizada"),n()(),t(6,"p",3),e(7,"Toda su informaci\xF3n vital en un solo lugar!"),n()(),i(8,"img",4),n())},dependencies:[v],styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:normal;text-shadow:rgb(0,0,0) 1px 1px 9px}p[_ngcontent-%COMP%]{color:#fff;text-shadow:rgb(0,0,0) 1px 1px 9px}.header[_ngcontent-%COMP%]{display:grid;place-items:center;position:relative;height:100dvh;overflow-x:clip}.header-content[_ngcontent-%COMP%]{margin:30px;text-align:center}.header-image[_ngcontent-%COMP%]{grid-column:1 / -1;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1}img.header-image[_ngcontent-%COMP%]{filter:brightness(.7);object-position:bottom}span[_ngcontent-%COMP%]{color:var(--marketing)}@media (min-width: 768px){h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:center}}@supports (animation-timeline: view()){.header[_ngcontent-%COMP%]{height:100dvh}.header-content[_ngcontent-%COMP%]{animation:fade-out linear;animation-timeline:view();animation-range:exit -200px}.header-image[_ngcontent-%COMP%]{animation:header-image-animation linear forwards;animation-timeline:view();animation-range:exit;position:fixed}@media (hover:hover){.header-image[_ngcontent-%COMP%]{scale:1.2}}}@supports (view-transition-name: hero1){img[_ngcontent-%COMP%]{view-transition-name:hero1}}"]});let a=o;return a})();var Se=(()=>{let o=class o{constructor(l){this.route=l}ngAfterViewInit(){this.route.fragment.subscribe(l=>{l&&setTimeout(()=>{let r=document.getElementById(l);r&&r.scrollIntoView({behavior:"smooth"})},0)})}};o.\u0275fac=function(r){return new(r||o)(g(A))},o.\u0275cmp=c({type:o,selectors:[["app-principal"]],standalone:!0,features:[p],decls:393,vars:0,consts:[["id","top"],["id","salud",1,"contenedor-cards","salud"],[1,"title"],["appAnimations","","animationInput","fadeInBottom"],["appAnimations","","animationInput","fadeInBottom",1,"warning"],[1,"cards"],["appAnimations","","animationInput","fadeInBottom",1,"card"],[1,"card-header"],[1,"card-body"],["href","https://g.co/kgs/GpV6kuh","target","_blank","rel","noopener"],["href","tel:+542291431778"],["href","https://g.co/kgs/sNjAaj8","target","_blank","rel","noopener"],["href","tel:+542291431253"],["href","https://g.co/kgs/1ZgvqdH","target","_blank","rel","noopener"],["href","tel:+542291421149"],["href","https://g.co/kgs/3XNe4Af","target","_blank","rel","noopener"],["href","https://g.co/kgs/cNbrc9V","target","_blank","rel","noopener"],["href","tel:+542291433809"],["href","https://g.co/kgs/pbruyEd","target","_blank","rel","noopener"],["href","tel:+542291433295"],["href","https://g.co/kgs/6rDvaDk","target","_blank","rel","noopener"],["href","tel:+542291423607"],["id","policia",1,"contenedor-cards","seguridad"],["href","https://g.co/kgs/1i5bFwL","target","_blank","rel","noopener"],["href","tel:+542291420613"],["id","bomberos",1,"contenedor-cards","bomberos"],["href","https://g.co/kgs/hfSbTdN","target","_blank","rel","noopener"],["href","tel:+542291421611"],["id","transporte",1,"contenedor-cards","transporte"],["href","https://www.facebook.com/profile.php?id=100063484871855","target","_blank","rel","noopener"],["id","remises",1,"contenedor-cards","remises"],["href","https://g.co/kgs/GbxFFwL","target","_blank","rel","noopener"],["href","tel:+542291431349"],["href","tel:+542291432076"],["href","https://g.co/kgs/zt1jGdy","target","_blank","rel","noopener"],["href","tel:+542291421017"],["href","https://g.co/kgs/eV7EpUr","target","_blank","rel","noopener"],["href","tel:+542291420000"],["href","https://g.co/kgs/P5Va3Bu","target","_blank","rel","noopener"],["href","tel:+542291430517"],["href","https://g.co/kgs/hheioJB","target","_blank","rel","noopener"],["href","tel:+542291423200"],["href","https://g.co/kgs/SA7D8WB","target","_blank","rel","noopener"],["href","tel:+542291430034"],["href","https://g.co/kgs/srjFPzu","target","_blank","rel","noopener"],["href","tel:+542291422720"],["href","https://g.co/kgs/pvBxFQc","target","_blank","rel","noopener"],["href","tel:+542291432929"],["href","https://g.co/kgs/ErmRx72","target","_blank","rel","noopener"],["href","tel:+542291430055"],["id","perdidos",1,"contenedor-cards","perdidos"],["href","https://www.facebook.com/groups/2598745080393567","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/1066923993686478","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/1206236049403572","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/605310976240889/","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/260178384125302/","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/289762537851902/","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/209747219675527/","target","_blank","rel","noopener"],["href","https://www.facebook.com/groups/1243846509046200/","target","_blank","rel","noopener"],["id","electricidad",1,"contenedor-cards","electricidad"],["href","https://g.co/kgs/9n4L1jG","target","_blank","rel","noopener"],["href","tel:+542291421258"],["id","actividades",1,"contenedor-cards","espectaculos"],["href","https://www.facebook.com/mgacultura","target","_blank","rel","noopener"],["href","https://www.instagram.com/mgacultura/","target","_blank","rel","noopener"]],template:function(r,m){r&1&&(i(0,"app-public-nav",0)(1,"app-cabecera-paralax"),t(2,"section",1)(3,"div",2)(4,"h2",3),e(5,"Salud"),n(),t(6,"p",4),e(7,"Aclaraci\xF3n: Los dos primeros hospitales listados son el mismo, pero en Google aparecen como distintos y tienen distinto n\xFAmero de tel\xE9fono, aunque la direcci\xF3n es la misma"),n()(),t(8,"div",5)(9,"div",6)(10,"div",7)(11,"h3"),e(12,"Hospital Miramar"),n()(),t(13,"div",8)(14,"p"),i(15,"strong")(16,"br"),e(17," Direcci\xF3n: Diag. J. M. Dupuy 1550 "),t(18,"a",9),e(19,"\xBFC\xF3mo llegar?"),n(),i(20,"br"),e(21," Tel\xE9fono: "),t(22,"a",10),e(23,"02291 43-1778"),n()()()(),t(24,"div",6)(25,"div",7)(26,"h3"),e(27,"Hospital Municipal Dr. Marino Cassano"),n()(),t(28,"div",8)(29,"p"),i(30,"strong")(31,"br"),e(32," Direcci\xF3n: Diag. J. M. Dupuy 1550 "),t(33,"a",11),e(34,"\xBFC\xF3mo llegar?"),n(),i(35,"br"),e(36," Tel\xE9fono: "),t(37,"a",12),e(38,"02291 43-1253"),n()()()(),t(39,"div",6)(40,"div",7)(41,"h3"),e(42,"Instituto Medico Privado Mitre SRL"),n()(),t(43,"div",8)(44,"p"),i(45,"strong")(46,"br"),e(47," Direcci\xF3n: Av B Mitre 1146 "),t(48,"a",13),e(49,"\xBFC\xF3mo llegar?"),n(),i(50,"br"),e(51," Tel\xE9fono: "),t(52,"a",14),e(53,"02291 42-1149"),n()()()(),t(54,"div",6)(55,"div",7)(56,"h3"),e(57,"Salita Parquemar, Miramar"),n()(),t(58,"div",8)(59,"p"),i(60,"strong")(61,"br"),e(62," Direcci\xF3n: Av. Mar\xEDa Erramouspe "),t(63,"a",15),e(64,"\xBFC\xF3mo llegar?"),n()()()(),t(65,"div",6)(66,"div",7)(67,"h3"),e(68,'Centro De Atenci\xF3n primaria De Salud "Las Flores"'),n()(),t(69,"div",8)(70,"p"),i(71,"strong")(72,"br"),e(73," Direcci\xF3n: C. 9 3761 "),t(74,"a",16),e(75,"\xBFC\xF3mo llegar?"),n(),i(76,"br"),e(77," Tel\xE9fono: "),t(78,"a",17),e(79,"02291 43-3809"),n()()()(),t(80,"div",6)(81,"div",7)(82,"h3"),e(83,"Caps Belgrano"),n()(),t(84,"div",8)(85,"p"),i(86,"strong")(87,"br"),e(88," Direcci\xF3n: C. 43 2399-2499 "),t(89,"a",18),e(90,"\xBFC\xF3mo llegar?"),n(),i(91,"br"),e(92," Tel\xE9fono: "),t(93,"a",19),e(94,"02291 43-3295"),n()()()(),t(95,"div",6)(96,"div",7)(97,"h3"),e(98,"Consultorio Pedi\xE1trico Miramar"),n()(),t(99,"div",8)(100,"p"),i(101,"strong")(102,"br"),e(103," Direcci\xF3n: C. 23 1158 "),t(104,"a",20),e(105,"\xBFC\xF3mo llegar?"),n(),i(106,"br"),e(107," Tel\xE9fono: "),t(108,"a",21),e(109,"02291 42-3607"),n()()()()()(),t(110,"section",22)(111,"div",2)(112,"h2",3),e(113,"Polic\xEDa"),n()(),t(114,"div",5)(115,"div",6)(116,"div",7)(117,"h3"),e(118,"Comisar\xEDa"),n()(),t(119,"div",8)(120,"p"),i(121,"strong")(122,"br"),e(123," Direcci\xF3n: C. 23 1137 "),t(124,"a",23),e(125,"\xBFC\xF3mo llegar?"),n(),i(126,"br"),e(127," Tel\xE9fono: "),t(128,"a",24),e(129,"02291 42-0613"),n()()()()()(),t(130,"section",25)(131,"div",2)(132,"h2",3),e(133,"Bomberos"),n()(),t(134,"div",5)(135,"div",6)(136,"div",7)(137,"h3"),e(138,"Bomberos Miramar"),n()(),t(139,"div",8)(140,"p"),i(141,"strong")(142,"br"),e(143," Direcci\xF3n: Calle 17 1660 "),t(144,"a",26),e(145,"\xBFC\xF3mo llegar?"),n(),i(146,"br"),e(147," Tel\xE9fono: "),t(148,"a",27),e(149,"02291 42-1611"),n()()()()()(),t(150,"section",28)(151,"div",2)(152,"h2",3),e(153,"Transporte"),n()(),t(154,"div",5)(155,"div",6)(156,"div",8)(157,"h3")(158,"a",29),e(159,"Costa Azul | Facebook"),n()(),t(160,"p"),e(161," Es la p\xE1gina oficial del \xFAnico micro que une: Miramar - Mar Del Plata, Miramar - Mar del Sur, Miramar - Otamendi. "),i(162,"br"),e(163," All\xED Pod\xE9s ver los horarios del Micro. "),n()()()()(),t(164,"section",30)(165,"div",2)(166,"h2",3),e(167,"Remises"),n()(),t(168,"div",5)(169,"div",6)(170,"div",7)(171,"h3"),e(172,"Remisse Plaza"),n()(),t(173,"div",8)(174,"p"),i(175,"strong")(176,"br"),e(177," Calle 23 1768 "),t(178,"a",31),e(179,"\xBFC\xF3mo llegar?"),n(),i(180,"br"),e(181," Tel\xE9fonos "),i(182,"br"),t(183,"a",32),e(184,"02291 43-1349"),n(),i(185,"br"),t(186,"a",33),e(187,"02291 432076"),n()()()(),t(188,"div",6)(189,"div",7)(190,"h3"),e(191,"Remis Sur"),n()(),t(192,"div",8)(193,"p"),i(194,"strong")(195,"br"),e(196," Direcci\xF3n: Calle 23 2225 "),t(197,"a",34),e(198,"\xBFC\xF3mo llegar?"),n(),i(199,"br"),e(200," Tel\xE9fono: "),t(201,"a",35),e(202,"02291 42-1017"),n()()()(),t(203,"div",6)(204,"div",7)(205,"h3"),e(206,"Remisse Pronto"),n()(),t(207,"div",8)(208,"p"),i(209,"strong")(210,"br"),e(211," Direcci\xF3n: Centro Zona 4, Calle 23 1031 "),t(212,"a",36),e(213,"\xBFC\xF3mo llegar?"),n(),i(214,"br"),e(215," Tel\xE9fono: "),t(216,"a",37),e(217,"02291 42-0000"),n()()()(),t(218,"div",6)(219,"div",7)(220,"h3"),e(221,"Remise Plaza panda"),n()(),t(222,"div",8)(223,"p"),i(224,"strong")(225,"br"),e(226," Direcci\xF3n: Diagonal Fortunato de la Plaza 1452, Centro "),t(227,"a",38),e(228,"\xBFC\xF3mo llegar?"),n(),i(229,"br"),e(230," Tel\xE9fono: "),t(231,"a",39),e(232,"02291 43-0517"),n()()()(),t(233,"div",6)(234,"div",7)(235,"h3"),e(236,"Remiseria Miramar"),n()(),t(237,"div",8)(238,"p"),i(239,"strong")(240,"br"),e(241," Direcci\xF3n: Calle 21 1818, Centro "),t(242,"a",40),e(243,"\xBFC\xF3mo llegar?"),n(),i(244,"br"),e(245," Tel\xE9fono: "),t(246,"a",41),e(247,"02291 42-3200"),n()()()(),t(248,"div",6)(249,"div",7)(250,"h3"),e(251,"Remises Danny"),n()(),t(252,"div",8)(253,"p"),i(254,"strong")(255,"br"),e(256," Direcci\xF3n: Calle 26 1859 "),t(257,"a",42),e(258,"\xBFC\xF3mo llegar?"),n(),i(259,"br"),e(260," Tel\xE9fono: "),t(261,"a",43),e(262,"02291 43-0034"),n()()()(),t(263,"div",6)(264,"div",7)(265,"h3"),e(266,"Hola Remisse"),n()(),t(267,"div",8)(268,"p"),i(269,"strong")(270,"br"),e(271," Direcci\xF3n: Calle 30 1053 "),t(272,"a",44),e(273,"\xBFC\xF3mo llegar?"),n(),i(274,"br"),e(275," Tel\xE9fono: "),t(276,"a",45),e(277,"02291 42-2720"),n()()()(),t(278,"div",6)(279,"div",7)(280,"h3"),e(281,"Centro Taxi"),n()(),t(282,"div",8)(283,"p"),i(284,"strong")(285,"br"),e(286," Direcci\xF3n: Calle 21 1621, Centro "),t(287,"a",46),e(288,"\xBFC\xF3mo llegar?"),n(),i(289,"br"),e(290," Tel\xE9fono: "),t(291,"a",47),e(292,"02291 43-2929"),n()()()(),t(293,"div",6)(294,"div",7)(295,"h3"),e(296,"Mitre Remisse"),n()(),t(297,"div",8)(298,"p"),i(299,"strong")(300,"br"),e(301," Direcci\xF3n: Calle 26 664 "),t(302,"a",48),e(303,"\xBFC\xF3mo llegar?"),n(),i(304,"br"),e(305," Tel\xE9fono: "),t(306,"a",49),e(307,"02291 43-0055"),n()()()()()(),t(308,"section",50)(309,"div",2)(310,"h2",3),e(311," \xBFSe te perdi\xF3 tu mascota? \xBFSe te perdi\xF3 algo? "),n(),t(312,"p"),e(313,"Grupos de Facebook p\xFAblicos y con actividad, ideales para publicar"),n()(),t(314,"div",5)(315,"div",6)(316,"div",8)(317,"h3")(318,"a",51),e(319,"MI LUGAR EN EL MUNDO MIRAMAR | Facebook"),n()()()(),t(320,"div",6)(321,"div",8)(322,"h3")(323,"a",52),e(324,"Delivery's Miramar | Facebook"),n()()()(),t(325,"div",6)(326,"div",8)(327,"h3")(328,"a",53),e(329,"Clasificados Miramar Y Alrededores | Facebook"),n()()()(),t(330,"div",6)(331,"div",8)(332,"h3")(333,"a",54),e(334,"Miramar (compra y vende) | Facebook"),n()()()(),t(335,"div",6)(336,"div",8)(337,"h3")(338,"a",55),e(339,"Clasificados Miramar | Facebook"),n()()()(),t(340,"div",6)(341,"div",8)(342,"h3")(343,"a",56),e(344,"Shopping Virtual Miramar y Zona | Facebook"),n()()()(),t(345,"div",6)(346,"div",8)(347,"h3")(348,"a",57),e(349,"SHOPPING VIRTUAL MIRAMAR, MAR DEL SUD, OTAMENDI, CHAPADMALAL | Facebook"),n()()()(),t(350,"div",6)(351,"div",8)(352,"h3")(353,"a",58),e(354,"Mercado libre miramar | Facebook"),n()()()()()(),t(355,"section",59)(356,"div",2)(357,"h2",3),e(358,"Problemas El\xE9ctricos"),n()(),t(359,"div",5)(360,"div",6)(361,"div",7)(362,"h3"),e(363,"EDEA Miramar"),n()(),t(364,"div",8)(365,"p"),i(366,"strong")(367,"br"),e(368," Direcci\xF3n: C. 32 490 "),t(369,"a",60),e(370,"\xBFC\xF3mo llegar?"),n(),i(371,"br"),e(372," Tel\xE9fono: "),t(373,"a",61),e(374,"02291 42-1258"),n()()()()()(),t(375,"section",62)(376,"div",2)(377,"h2",3),e(378,"Espect\xE1culos y Actividades para hacer"),n(),t(379,"p",3),e(380,"En las p\xE1ginas oficiales de cultura se suben cronogramas de espect\xE1culos y actividades"),n()(),t(381,"div",5)(382,"div",6)(383,"div",8)(384,"h3")(385,"a",63),e(386,"Cultura Miramar Gral Alvarado | Facebook"),n()()()(),t(387,"div",6)(388,"div",8)(389,"h3")(390,"a",64),e(391,"CulturaMGA | Instagram"),n()()()()()(),i(392,"app-public-footer"))},dependencies:[v,j,L,R],styles:[".title[_ngcontent-%COMP%]{text-wrap:balance}section.contenedor-cards[_ngcontent-%COMP%]{text-align:center;padding:7% 5% 0%}section.remises[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;margin-bottom:1rem}.card[_ngcontent-%COMP%]{padding:1em;text-align:left;box-shadow:0 0 45px 26px #00000017;-webkit-box-shadow:0px 0px 45px 26px rgba(0,0,0,.09);-moz-box-shadow:0px 0px 45px 26px rgba(0,0,0,.09)}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block}.cards[_ngcontent-%COMP%]{display:flex;gap:1em;justify-content:center;align-items:stretch;flex-wrap:wrap;margin-top:2rem}@media (max-width: 768px){.title[_ngcontent-%COMP%]{text-align:left}.card[_ngcontent-%COMP%]{width:100%}.cards[_ngcontent-%COMP%]{display:flex;gap:1em;justify-content:flex-start}}"]});let a=o;return a})();export{Se as PrincipalComponent};
