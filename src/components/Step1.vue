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
  },

  data() {
    return {
      error: false,
    };
  },

  watch: {
    survey: {
      handler() {
        this.error = false;
      },
      deep: true,
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
      if (this.valid) {
        this.error = false;
        this.$emit('next-step');
      } else {
        this.error = true;
      }
    },
  },
};
</script>
