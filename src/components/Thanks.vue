<template>
  <div class="thanks">
    <h1 class="display-1">¡Gracias!</h1>
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
import ua from 'universal-analytics';

export default {
  name: 'thanks',

  props: {
    survey: Object,
  },

  created() {
    const visitor = ua('UA-117667704-1');
    visitor.event('Age', this.survey.age).send();
    visitor.event('Gender', this.survey.gender).send();
    visitor.event('City', this.survey.city).send();
    visitor.event('Position', this.survey.position).send();
    visitor.event('Experience', this.survey.experience).send();
    visitor.event('Studies', this.survey.studies).send();
    visitor.event('Salary', this.survey.salary).send();
    visitor.event('Languages', this.survey.languages.join(', ')).send();
    visitor.event('Frameworks', this.survey.frameworks.join(', ')).send();
    visitor.event('DBs', this.survey.dbs.join(', ')).send();
    visitor.event('JS Library name', this.survey.jsLibraries.join(', ')).send();
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
