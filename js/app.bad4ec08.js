(function(e){function a(a){for(var n,i,r=a[0],s=a[1],l=a[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,a=0;a<c.length;a++){for(var o=c[a],n=!0,i=1;i<o.length;i++){var r=o[i];0!==t[r]&&(n=!1)}n&&(c.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},t={app:0},c=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{actividad:"8ef0e666","chunk-0206bfa0":"c8eca6b0","chunk-04b93936":"19962711","chunk-13a6037e":"e70b0d86","chunk-16015154":"528758fb","chunk-17977988":"e043ddd8","chunk-2c06842c":"49f97516","chunk-2d208d90":"b1951bef","chunk-2d21d0e2":"ec9deb6d","chunk-2d22c123":"26bf68ea","chunk-2e80bb9a":"b72b0393","chunk-3145fe0f":"16ac1e17","chunk-328f70dd":"607e3ec3","chunk-3807499c":"659230ca","chunk-3dc647fd":"474c5e0d","chunk-4cdd78c0":"30688809","chunk-4fde0a08":"df5970a3","chunk-515a8379":"3ba89bb5","chunk-53ccb27e":"3ec78acf","chunk-59974754":"2ae8accf","chunk-766a929b":"f2ca5b3f","chunk-839300a6":"d9344c31","chunk-c796899c":"040d5dbc","chunk-dbb9869e":"d34777af",comple:"5673f9ca",creditos:"75db24ed",glosario:"854c8ee9",intro:"812983b5",referencias:"4799c5c4",tema1:"0d47a597"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"8dab2286","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"e1e4a70e","chunk-766a929b":"9f8a840b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"3d7f7c6c",creditos:"a3e41312",glosario:"44452a3d",intro:"0e433876",referencias:"ef99b9ce",tema1:"31d6cfe0"}[e]+".css",t=s.p+n,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===t))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===n||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete i[e],m.parentNode.removeChild(m),o(c)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var c=new Promise((function(a,o){n=t[e]=[a,o]}));a.push(n[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=t[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=c,s=o("2877"),l=Object(s["a"])(r,i,t,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema1").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema1").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema1").then(o.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Procesos y normatividad del sector eléctrico",descripcionCurso:"Conocer la normatividad relacionada con los productos e instalaciones eléctricas y la caracterización del sector eléctrico colombiano, permite al estudiante observar la aplicación práctica de los conceptos básicos adquiridos en el área de la electricidad y electrónica. Adicionalmente acerca al estudiante a los conceptos básicos que se manejan para los Sistemas de Gestión de la Energía.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Normatividad eléctrica",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Reglamento Técnico de Instalaciones Eléctricas - RETIE",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Reglamento Técnico de Iluminación y Alumbrado Público - RETILAP",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Código Eléctrico Colombiano NTC 2050",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Lineamientos de SST para las actividades en el sector eléctrico (Resolución 5018 de 2019)",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Caracterización del sector eléctrico colombiano",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Organización del sector",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Agentes del mercado de la energía eléctrica",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Sistemas de Puesta a Tierra - SPAT",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"SPAT tipo TT",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"SPAT tipo TN",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"SPAT tipo IT",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Conformidad de las instalaciones eléctricas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Certificados de conformidad de producto",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Demostración de conformidad de las instalaciones eléctricas",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Dictamen de inspección",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Acciones de vigilancia y control",hash:"t_4_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA."},{referencia:"Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013."},{referencia:"Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009."},{referencia:"Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019."},{referencia:"Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA."}],glosario:[{termino:"CREG",significado:"Comisión de Regulación de Energía y Gas."},{termino:"Normativa",significado:"norma o conjunto de normas que guían, dirigen y ajustan el comportamiento de un individuo, organización, materia y/o actividad."},{termino:"Partes energizadas",significado:"conductores, barras, terminales o componentes eléctricos sin aislar o expuestos, que crean riesgo de descarga eléctrica."},{termino:"Persona calificada",significado:"persona capacitada y familiarizada con la construcción y funcionamiento de los equipos y los riesgos que conllevan."},{termino:"Puesto a tierra",significado:"conectado a tierra o a cualquier cuerpo conductor que pueda actuar como tierra."},{termino:"Reglamento Técnico",significado:"según la Ley 170 de 1994, es un documento en el que se establecen las características de un producto, los procesos y métodos de producción con ellas relacionados, con inclusión de las disposiciones administrativas aplicables, y cuya observancia es obligatoria."},{termino:"Requisito",significado:"es una condición necesaria para tener acceso a algo, o para que una cosa suceda."},{termino:"RETIE",significado:"Reglamento Técnico de Instalaciones Eléctricas."},{termino:"RETILAP",significado:"Reglamento Técnico de Iluminación y Alumbrado Público."},{termino:"Tensión a tierra",significado:"en los circuitos puestos a tierra, es la tensión entre un conductor dado y  el punto del conductor del circuito que está puesto a tierra; en los circuitos no puestos a tierra, es la mayor diferencia de tensión entre un conductor dado y cualquier otro conductor del circuito."},{termino:"Tensión de contacto",significado:"diferencia de potencial que durante una falla se presenta entre una estructura metálica puesta a tierra y un punto de la superficie del terreno a una distancia de un metro. Esta distancia horizontal es equivalente a la máxima que se puede alcanzar al extender un brazo."},{termino:"Tensión de paso",significado:"diferencia de potencial que durante una falla se presenta entre dos puntos de la superficie del terreno, separados por una distancia de un paso."},{termino:"Tensión nominal",significado:"valor nominal asignado a un circuito o sistema para designar habitualmente su nivel de tensión (por ejemplo., 120 V/240 V, 480 V/277 V (sistema en estrella), 600 V). La tensión a la que funciona un circuito puede variar sobre la nominal dentro de un margen que permita el funcionamiento satisfactorio de los equipos."},{termino:"Tensión transferida",significado:"es un caso especial de tensión de contacto, donde un potencial es conducido hasta un punto remoto respecto a la subestación o a una puesta a tierra."},{termino:"UPME",significado:"Unidad de Planeación Minero Energética."}],complementario:[{texto:"CENS Grupo EPM. (2015). Clases de Redes Eléctricas - Aprende con CENS [Video]. Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=tlQNRJxpvxU&t=63s"},{texto:"Comisión CREG. (2014). Conoce la factura de energía eléctrica [Video]. Youtube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=LriXlAKUd9A&t=25s"},{texto:"Comisión de Regulación de Energía y Gas - CREG (2021). Funciones.",tipo:"Página web de la Comisión de Regulación de Energía y Gas.",link:"https://www.creg.gov.co/creg/quienes-somos/funciones"},{texto:"Comité Asesor de Comercialización del sector eléctrico. Quiénes somos. ",tipo:"Página web del Comité Asesor de Comercialización del sector eléctrico.",link:"http://www.cac.org.co/2016/html/quienes.html"},{texto:"Consejo Nacional de Operación del sector Eléctrico (2016). Quienes somos. ",tipo:"Página web del Consejo Nacional de Operación del sector Eléctrico.",link:"https://www.cno.org.co/content/quienes-somos"},{texto:"Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.",tipo:"Norma Técnica Colombiana Código Eléctrico Colombiano.",link:"https://login.bdigital.sena.edu.co/login?url=https://e-collection.icontec.org/pdfview/viewer.aspx?locale=es-419&Q=C195B9DF4FA291EC9E5470A4AD574D93312408EA304CDFA9&Req="},{texto:"ISAGEN. (2012). Cómo se genera la energía [Video]. Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=YWEXLSjaYf0&t=178s"},{texto:"Ministerio de Minas y Energía de Colombia (2021). Funciones.",tipo:"Página web del Ministerio de Minas y Energía de Colombia.",link:"https://www.minenergia.gov.co/funciones-y-deberes"},{texto:"Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.",tipo:"Resolución Reglamento Técnico de Iluminación y Alumbrado Público RETILAP.",descarga:"downloads/RES180540_2010.pdf"},{texto:"Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.",tipo:"Resolución de Lineamientos en Seguridad y Salud en el Trabajo.",descarga:"downloads/Resolucion_5018_del_20112019_SST_en_energia_electrica.pdf"},{texto:"Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.",tipo:"Resolución Reglamento Técnico de Instalaciones Eléctricas RETIE.",descarga:"downloads/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf"},{texto:"Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA.",tipo:"Publicación Oficial.",link:"https://hdl.handle.net/11404/2138"},{texto:"Superintendencia de Industria y Comercio (2021). Objetivos y funciones.",tipo:"Página web de la Superintendencia de Industria y Comercio.",link:"https://www.sic.gov.co/objetivos-y-funciones"},{texto:"Superintendencia de Servicios Públicos Domiciliarios (2021). Funciones.",tipo:"Página web de la Superintendencia de Servicios Públicos Domiciliarios.",link:"https://www.superservicios.gov.co/nuestra-entidad/quienes-somos/funciones"},{texto:"Unidad de Planeación Minero Energética - UPME (2021). Funciones y deberes.",tipo:"Página web de la Unidad de Planeación Minero Energética.",link:"https://www1.upme.gov.co/Entornoinstitucional/NuestraEntidad/Paginas/Funciones-y-deberes.aspx"},{texto:"XM (2021). Qué hacemos.",tipo:"Página web de XM.",link:"https://www.xm.com.co/nuestra-empresa/nosotros/que-hacemos"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Javier González Cuevas",cargo:"Experto técnico",centro:"Centro Electricidad Electrónica y Telecomunicaciones -  Distrito Capital"},{nombre:"Marlon Augusto Villamizar Morales",cargo:"Experto técnico",centro:"Global Green Growth Institute (GGGI)"},{nombre:"Leidy Carolina Arias Aguirre",cargo:" Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Revisión de estilo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Anllelo Andres Reina Montañez",cargo:"Diseño web ",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Edgar Mauricio Cortes García",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.e1e612ca.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.1674fe60.png"}});
//# sourceMappingURL=app.bad4ec08.js.map