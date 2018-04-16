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
    gtag('event', 'Age', {
      event_category: this.survey.age,
    });
    gtag('event', 'Gender', {
      event_category: this.survey.gender,
    });
    gtag('event', 'City', {
      event_category: this.survey.city,
    });
    gtag('event', 'Position', {
      event_category: this.survey.position,
    });
    gtag('event', 'Experience', {
      event_category: this.survey.experience,
    });
    gtag('event', 'Studies', {
      event_category: this.survey.studies,
    });
    gtag('event', 'Salary', {
      event_category: this.survey.salary,
    });
    gtag('event', 'Languages', {
      event_category: this.survey.languages.join(', '),
    });
    gtag('event', 'Frameworks', {
      event_category: this.survey.frameworks.join(', '),
    });
    gtag('event', 'DBs', {
      event_category: this.survey.dbs.join(', '),
    });
    gtag('event', 'JS Library name', {
      event_category: this.survey.jsLibraries.join(', '),
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
