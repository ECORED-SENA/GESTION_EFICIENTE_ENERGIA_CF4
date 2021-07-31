<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Conformidad de las instalaciones eléctricas

    div.back-img.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}")
      .row
        .col-5.p-5
          p.texto-blanco.mb-5 Para garantizar el correcto funcionamiento y seguridad de las instalaciones, y asegurar la integridad de las personas y demás seres vivos, es necesario que exista un mecanismo de verificación del cumplimiento de todos los requisitos exigidos por los Reglamentos Técnicos. A continuación, mostraremos las generalidades del cumplimiento de requisitos para productos e instalaciones eléctricas.
          p.texto-blanco.mb-0 Como mecanismo de verificación del cumplimiento y de apoyo al control y vigilancia ejercida por el Estado, se recurre a los organismos de evaluación de la conformidad debidamente acreditados, con el fin de ejecutar la certificación de productos, la certificación de personas, la realización de pruebas y ensayos en laboratorios y la inspección de las instalaciones.
    
    p.mb-4 Un organismo de inspección es una entidad que realiza actividades de medición, ensayo o comparación con un patrón o documento de referencia de una instalación y confronta los resultados con unos requisitos especificados.
    p.mb-5 Le invitamos a leer el artículo 32 del RETIE para conocer más a detalle acerca del Mecanismo de Evaluación de la Conformidad.

    #t_4_1.titulo-segundo
      h2 4.1 Certificados de conformidad de producto

    .row.mb-5
      .col-lg-6
        .cajon-b.color-acento-botones.p-4.mb-3
          p.mb-0 Para que un producto pueda ser comercializado y utilizado en las instalaciones eléctricas, debe primero obtener una certificación que permitirá evidenciar que dicho producto está conforme a los requisitos mínimos exigidos por el RETIE. Todos los productos incluidos en el alcance del RETIE deben contar con el certificado de conformidad, por lo tanto, las instalaciones objeto del RETIE que no cumplan este requisito, deberán ser rechazadas y no podrán acceder al servicio de energía.

        .cajon.color-acento-botones.p-5   
          p.mb-4 El certificado de producto es un documento mediante el cual un organismo da constancia por escrito que un producto cumple con los requisitos establecidos en el RETIE. La certificación se fundamenta en la evaluación del producto de acuerdo con métodos de ensayo establecidos previamente.
          p.mb-0 Le invitamos a leer el artículo 33 del RETIE para conocer más detalles acerca de la certificación de conformidad de productos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema4/img02.svg') 

    #t_4_2.titulo-segundo
      h2 4.2 Demostración de conformidad de las instalaciones eléctricas

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 Una vez construido el proyecto, para poder obtener el servicio de energía eléctrica se debe previamente demostrar la conformidad de la instalación. Para las instalaciones a las cuales se les aplica el RETIE, se hará exigible el certificado de conformidad.<br><br>ependiendo del tipo de instalación eléctrica, el RETIE establece las condiciones que se deben cumplir para la demostración de la conformidad.<br><br>Le invitamos a leer el artículo 34 del RETIE para conocer más detalles acerca de la demostración de conformidad de las instalaciones eléctricas.

    #t_4_3.titulo-segundo
      h2 4.3 Dictamen de inspección

    .row.mb-5
      .col-lg-6.d-flex
        .cajon.color-primario.p-5         
          p.mb-4 Un dictamen de inspección es un documento emitido por un organismo de inspección que contiene a manera de lista de chequeo las características que comprueben el cumplimiento o no de los requisitos establecidos en el RETIE. El dictamen de la inspección es realizado una vez finalizado el proceso de inspección de las instalaciones eléctricas. La inspección debe ser realizada por una organización acreditada por el Organismo Nacional de Acreditación de Colombia.
          p.mb-0 Le invitamos a leer el artículo 34 del RETIE para conocer más detalles acerca del dictamen de inspección y los formatos utilizados.
      .col-lg-6.d-flex
        figure
          img(src='@/assets/curso/tema4/img04.png') 

    #t_4_4.titulo-segundo
      h2 4.4 Acciones de vigilancia y control

    p.mb-5 Con el fin de controlar el cumplimiento del RETIE, el Gobierno Nacional ha encargado a las siguientes entidades para su vigilancia y el control:

    .row.mb-4
      .col-lg-1
      .col-lg-3.d-flex
        div
          div.t4-div1.p-3(style="height:50%")
            p.texto-blanco.mb-0 <b>Superintendencia de Servicios Públicos Domiciliarios:</b> encargada de vigilar el cumplimiento del RETIE en lo relacionado con las instalaciones eléctricas para la prestación del servicio público de electricidad.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img05.png')
      .col-lg-3.d-flex
        div
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img06.png')
          div.t4-div2.p-3(style="height:50%")
            p.texto-blanco <b>Superintendencia de Industria y Comercio:</b> encargada de supervisar vigilar y sancionar a los organismos de certificación e inspección, así como a los laboratorios de pruebas y ensayos y de metrología, que presten servicio de evaluación de la conformidad relacionados con el presente reglamento          
      .col-lg-3.d-flex
        div
          div.t4-div3.p-3(style="height:50%")
            p.texto-blanco.mb-0 <b>Alcaldías municipales o distritales:</b> los alcaldes ejercerán en sus respectivas jurisdicciones las mismas facultades administrativas de control y vigilancia que la Superintendencia de Industria y Comercio.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img07.png')
      
    .row.mb-5
      .col-lg-1      
      .col-lg-3.d-flex
        div
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img08.png')
          div.t4-div4.p-3(style="height:50%")
            p.texto-blanco <b>Dirección de Impuestos y Aduanas Nacionales:</b> encargada de la revisión documental del registro o licencia de importación.        
      .col-lg-3.d-flex
        div
          div.t4-div5.p-3(style="height:50%")
            p.texto-blanco.mb-0 <b>Consejos Profesionales:</b> encargada de la vigilancia y control del ejercicio profesional de los ingenieros, tecnólogos y técnicos de la electrotecnia, que intervienen en dichas instalaciones.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img09.png')

    p Le invitamos a leer los artículos 36 y 37 del RETIE para conocer más detalles acerca de la vigilancia, control y régimen sancionatorio.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Capítulo 1 (artículos 1 al 8)',
        texto:
          'Disposiciones generales.<br>En este capítulo se establecen el campo de aplicación y excepciones del reglamento así como las definiciones, simbología y unidades usadas.<br><br>También se determinan los requisitos mínimos que deben incluir el plan de comunicaciones y el programa de seguridad y salud ocupacional de cualquier persona natural o jurídica que desarrolle actividades relacionadas con la construcción, operación y mantenimiento de instalaciones de energía eléctrica sin perjuicio de lo establecido en la resolución 5018 de 2019 expedida por el ministerio de trabajo posterior a la publicación del RETIE.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Capítulo 2 (artículos 9 al 19)',
        texto:
          'Requisitos técnicos esenciales.<br>En este capítulo se describe una metodología para evaluar los riesgos de origen eléctrico y las competencias laborales requeridas para intervenir instalaciones eléctricas, se clasifican por niveles las magnitudes de las tensiones de servicio, se establecen las distancias de seguridad de acuerdo a cada nivel, se especifican los valores límites de exposición a campos electromagnéticos y los componentes del sistema de protección contra rayos, se determina la organización y el procedimiento de trabajo tanto para redes energizadas y desenergizadas (Reglas de oro).',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Capítulo 3 (artículos 20.1 al 20.29)',
        texto:
          'Requisitos de productos<br>En este capítulo se establece el listado de productos objeto del RETIE, es decir los de mayor utilización en instalaciones eléctricas, y los criterios y requisitos que deben cumplir y demostrar cada uno de ellos mediante certificado de conformidad de producto expedido por un organismo de certificación acreditado.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Capítulo 4 (artículos 21.1 al 21.7)',
        texto:
          'Requisitos para el proceso de generación<br>En este capítulo se define Central o planta de generación como el conjunto de instalaciones que contienen máquinas, generadores, motores, aparatos de control, maniobra, protección y medida, que sirven para la producción de energía eléctrica, distintas a las consideradas como plantas de emergencia y se establecen los requisitos aplicables exclusivamente al proceso de generación propiamente dicho.<br><br>Sin embargo, al definirse de esta manera, una central de generación tiene implícitos los procesos de transmisión, transformación, distribución y uso final y por lo tanto debe cumplir adicionalmente con los requisitos de cada proceso que le sean aplicables.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Capítulo 5 (artículos 22.1 al 22.13)',
        texto:
          'Requisitos para el proceso de transmisión<br>En este capítulo se establecen los requisitos que deben cumplir las líneas eléctricas aéreas de alta y extra alta tensión de corriente alterna trifásica a 60 Hz de frecuencia nominal.<br><br><h3>Capítulo 6 (artículos 23 al 24)</h3>Requisitos para el proceso de transformación (subestaciones)<br>En este capítulo se establecen los requisitos que deben cumplir las subestaciones con tensiones nominales superiores a 1 kV, entendiéndose por subestación a el conjunto de equipos utilizados para transferir el flujo de energía en un sistema de potencia, garantizar la seguridad del sistema por medio de dispositivos automáticos de protección y para redistribuir el flujo de energía a través de rutas alternas durante contingencias',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Capítulo 7 (artículos 25 al 26)',
        texto:
          'Requisitos para el proceso de distribución<br>En este capítulo se establecen los requisitos que deben cumplir las redes de distribución definidas como todo conjunto de aparatos y de circuitos asociados para transporte y transformación de la energía eléctrica, cuyas tensiones nominales sean iguales o superiores a 120 V y menores a 57,5 kV.<br><br><h3>Capítulo 8 (artículos 27 al 30)</h3>Requisitos para instalaciones de uso final<br>En este capítulo se establecen los requisitos que deben cumplir las instalaciones eléctricas destinadas a la conexión de equipos o aparatos para el uso final de la electricidad y en todo tipo de construcciones, ya sean de carácter público o privado.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: 'Capítulo 9 (artículos 31.1 al 31.4)',
        texto:
          'Prohibiciones<br>En este capítulo por considerarse contrario a los principios y objetivos del RETIE, se prohíbe la comercialización y uso de pararrayos radiactivos y productos que contengan compuestos orgánicos persistentes, el uso de materiales o artefactos reutilizados o remanufacturados en instalaciones de uso final y el uso de la tierra como único conductor de retorno.<br><br><h3>Capítulo 10 (artículos 32 al 35)</h3>Demostración de la conformidad<br>En este capítulo se establecen y describen los mecanismos de evaluación de conformidad de las instalaciones eléctricas con el RETIE ',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: 'Capítulo 11 (artículos 36 al 37)',
        texto:
          'Vigilancia, control y régimen sancionatorio<br>En este capítulo se establecen las entidades encargadas de la vigilancia y control del cumplimiento del RETIE y las sanciones aplicables en caso de incumplimiento<br><br><h3>Capítulo 12 (artículos 38.1 al 38.4)</h3>Disposiciones transitorias. Aquí, se establecen los periodos de tiempo a partir de la entrada en vigencia del RETIE para la exigencia del cumplimiento de algunos requisitos.<br><br><h3>Capítulo 13 (artículo 39)</h3>Revisión y actualización. Se establece que el Ministerio de Minas y Energía de Colombia es el órgano competente para la elaboración, revisión, actualización, interpretación y modificación del RETIE, lo cual lo podrá hacer de oficio o por solicitud de terceros .',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
