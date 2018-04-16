<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div class="survey">
          <div class="survey__logo">
            <img class="survey__logo__img" src="./assets/logo_osc.png">
          </div>
          <Start
              v-if="step === 0"
              @next-step="goToNextStep"
          />
          <Step1
              v-if="step === 1"
              :survey="survey"
              @next-step="goToNextStep"
          />
          <Step2
              v-if="step === 2"
              :survey="survey"
              @next-step="goToNextStep"
              @prev-step="goToPrevStep"
          />
          <Step3
              v-if="step === 3"
              :survey="survey"
              @next-step="goToNextStep"
              @prev-step="goToPrevStep"
          />
          <Thanks
              v-if="step === 4"
              :survey="survey"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Start from './components/Start.vue';
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';
import Thanks from './components/Thanks.vue';

export default {
  name: 'survey',
  components: {
    Start,
    Step1,
    Step2,
    Step3,
    Thanks,
  },

  data() {
    return {
      step: 0,
      survey: {
        age: null,
        gender: null,
        city: null,
        position: null,
        experience: null,
        studies: null,
        salary: null,
        languages: [],
        frameworks: [],
        dbs: [],
        jsLibraries: [],
      },
    };
  },

  methods: {
    goToNextStep() {
      this.step += 1;
    },

    goToPrevStep() {
      this.step -= 1;
    },
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  $body-color: #4C5157;
  $primary: #83C24C;
  $yiq-contrasted-threshold: 200;

  @import '~@/../node_modules/bootstrap/scss/bootstrap';

  .survey {
    font-family: 'Open Sans', sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    .survey__logo {
      text-align: center;
      margin-bottom: 3rem;

      .survey__logo__img {
        max-width: 60%;
      }
    }
  }
</style>
