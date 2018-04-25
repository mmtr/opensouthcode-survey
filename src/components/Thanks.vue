<template>
  <div class="thanks">
    <h2 class="display-2">¡Gracias!</h2>
    <p>Si tienes curiosidad por conocer "los resultados" de esta encuesta, no te pierdas nuestra
    charla el 1 de junio a las 18h, en la Térmica #opensotuhcode</p>

    <strong>Ayúdanos a difundir</strong>
    <div class="thanks__share">
      <a href="https://twitter.com/intent/tweet?text=httpsn://mmtr.github.io/opensouthcode-survey"
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
    gtag('event', 'Survey', {
      event_category: 'Step 1',
      event_label: 'Age',
      value: this.survey.age,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 1',
      event_label: 'Gender',
      value: this.survey.gender,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 1',
      event_label: 'City',
      value: this.survey.city,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 2',
      event_label: 'Position',
      value: this.survey.position,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 2',
      event_label: 'Experience',
      value: this.survey.experience,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 2',
      event_label: 'Studies',
      value: this.survey.studies,
    });
    gtag('event', 'Survey', {
      event_category: 'Step 2',
      event_label: 'Salary',
      value: this.survey.salary,
    });
    this.survey.languages.forEach((language) => {
      gtag('event', 'Survey', {
        event_category: 'Step 3',
        event_label: 'Language',
        value: language,
      });
    });
    this.survey.frameworks.forEach((framework) => {
      gtag('event', 'Survey', {
        event_category: 'Step 3',
        event_label: 'Framework',
        value: framework,
      });
    });
    this.survey.dbs.forEach((db) => {
      gtag('event', 'Survey', {
        event_category: 'Step 3',
        event_label: 'DB',
        value: db,
      });
    });
    this.survey.jsLibraries.forEach((jsLibrary) => {
      gtag('event', 'Survey', {
        event_category: 'Step 3',
        event_label: 'JS Library name',
        value: jsLibrary,
      });
    });
    this.huha.getTask('Survey').complete();
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
