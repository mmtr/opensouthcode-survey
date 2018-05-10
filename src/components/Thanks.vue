<template>
  <div class="thanks">
    <h2 class="display-2">¡Gracias!</h2>
    <p>Si tienes curiosidad por conocer "los resultados" de esta encuesta, no te pierdas nuestra
    charla el 1 de junio a las 18h, en la Térmica #opensouthcode</p>

    <strong>Ayúdanos a difundir</strong>
    <div class="thanks__share">
      <a href="https://twitter.com/intent/tweet?text=He+participado+en+la+survey+de+%40Opensouthcode+https%3A%2F%2Fmmtr.github.io%2Fopensouthcode-survey+y+estoy+deseando+conocer+los+resultados+el+d%C3%ADa+1+de+Junio+a+las+18h+%23UXconJS"
         target="_tab"
         class="thanks__share__twitter">
        <img src="../assets/twitter.png" class="img-fluid">
      </a>
    </div>
  </div>
</template>

<script>
/* global gtag */
export default {
  name: 'thanks',

  props: {
    survey: Object,
    huha: Object,
  },

  created() {
    gtag('event', 'Edad', {
      event_category: 'Sobre ti',
      event_label: this.survey.age,
      value: 1,
    });
    gtag('event', 'Género', {
      event_category: 'Sobre ti',
      event_label: this.survey.gender,
      value: 1,
    });
    gtag('event', 'Ciudad', {
      event_category: 'Sobre ti',
      event_label: this.survey.city,
      value: 1,
    });
    gtag('event', 'Rol', {
      event_category: 'Profesión',
      event_label: this.survey.position,
      value: 1,
    });
    gtag('event', 'Años en la profesión', {
      event_category: 'Profesión',
      event_label: this.survey.experience,
      value: 1,
    });
    gtag('event', 'Nivel de estudios', {
      event_category: 'Profesión',
      event_label: this.survey.studies,
      value: 1,
    });
    gtag('event', 'Rango salarial', {
      event_category: 'Profesión',
      event_label: this.survey.salary,
      value: 1,
    });
    this.survey.languages.forEach((language) => {
      gtag('event', 'Lenguajes de programación, scripting y marcado', {
        event_category: 'Intereses',
        event_label: language,
        value: 1,
      });
    });
    this.survey.frameworks.forEach((framework) => {
      gtag('event', 'Frameworks, librerías y herramientas', {
        event_category: 'Intereses',
        event_label: framework,
        value: 1,
      });
    });
    this.survey.dbs.forEach((db) => {
      gtag('event', 'Bases de datos', {
        event_category: 'Intereses',
        event_label: db,
        value: 1,
      });
    });
    this.survey.jsLibraries.forEach((jsLibrary) => {
      gtag('event', 'Nombre favorito para una posible librería JS', {
        event_category: 'Intereses',
        event_label: jsLibrary,
        value: 1,
      });
    });
    this.huha.getTask('Opensouth Survey').complete();
  },
};
</script>

<style scoped lang="scss">
  .thanks {
    text-align: center;
    margin-top: 2rem;

    .thanks__share {
      text-align: center;

      .thanks__share__twitter {
        display: inline-block;
        max-width: 50px;
      }
    }
  }
</style>
