<template>
  <Step
      title="Cuéntanos sobre ti..."
      description="Sólo algunos datos, los que mejor te describan 👽"
      :form="form"
      :survey="survey"
      :error="error"
      @next-step="next">
  </Step>
</template>

<script>
import Vue from 'vue';
import Step from './Step.vue';

const ages = [
  {
    value: '16-25',
    display: '16-25',
  }, {
    value: '26-35',
    display: '26-35',
  }, {
    value: '36-45',
    display: '36-45',
  }, {
    value: '46-55',
    display: '46-55',
  }, {
    value: '> 56',
    display: '> 56',
  },
];

const genders = [
  {
    value: 'female',
    display: 'Mujer',
  }, {
    value: 'male',
    display: 'Hombre',
  }, {
    value: 'not-binary',
    display: 'No binario',
  }, {
    value: 'unknown',
    display: 'Prefiero no decirlo',
  },
];

export default {
  name: 'step-1',
  components: {
    Step,
  },

  props: {
    survey: Object,
    huha: Object,
  },

  data() {
    return {
      error: false,
      previousCity: null,
    };
  },

  watch: {
    survey: {
      handler() {
        const newCity = this.survey.city;
        const oldCity = this.previousCity;

        if (newCity) {
          this.previousCity = newCity;
        }

        const cityHasChanged = newCity !== oldCity;

        console.log(cityHasChanged, newCity, oldCity);

        if (!cityHasChanged) {
          this.huha.getTask('Opensouth Survey').addInteraction();
          this.huha.getTask('Step 1').addInteraction();
        }
        this.error = false;
      },
      deep: true,
    },
    error() {
      if (this.error) {
        this.huha.getTask('Opensouth Survey').addError();
        this.huha.getTask('Step 1').addError();
      }
    },
  },

  computed: {
    form() {
      return [
        {
          name: 'age',
          label: 'Edad',
          type: 'radio',
          values: ages,
        }, {
          name: 'gender',
          label: 'Género',
          type: 'radio',
          values: genders,
        }, {
          name: 'city',
          label: 'Ciudad',
          type: 'text',
        },
      ];
    },

    valid() {
      return this.survey.age !== null && this.survey.gender !== null && this.survey.city !== null;
    },
  },

  methods: {
    next() {
      this.huha.getTask('Opensouth Survey').addInteraction();
      this.huha.getTask('Step 1').addInteraction();
      if (this.valid) {
        this.error = false;
        this.huha.getTask('Step 1').complete();
        this.$emit('next-step');
      } else {
        this.error = true;
      }
    },
  },

  created() {
    if (!this.huha.getTask('Opensouth Survey')) {
      this.huha.createTask('Opensouth Survey');
    }
    this.huha.createTask('Step 1');
  },

  mounted() {
    document.querySelector('#city').addEventListener('focus', () => {
      this.huha.getTask('Opensouth Survey').addInteraction();
      this.huha.getTask('Step 1').addInteraction();
    });
  },
};
</script>
