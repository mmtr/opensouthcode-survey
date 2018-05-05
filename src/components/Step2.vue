<template>
  <Step
      title="... y sobre tu profesión..."
      description="Nos interesa saber a qué te dedicas 🤓"
      :form="form"
      :survey="survey"
      :skip="true"
      :back="true"
      :error="error"
      @skip="skip"
      @prev-step="prev"
      @next-step="next">
  </Step>
</template>

<script>
import Step from './Step.vue';

const positions = [
  {
    value: 'backend',
    display: 'Back-end developer',
  }, {
    value: 'frontend',
    display: 'Front-end developer',
  }, {
    value: 'fullstack',
    display: 'Full-stack developer',
  }, {
    value: 'student',
    display: 'Student',
  }, {
    value: 'dba',
    display: 'Database administrator',
  }, {
    value: 'designer',
    display: 'Designer',
  }, {
    value: 'system',
    display: 'System administrator',
  }, {
    value: 'devops',
    display: 'DevOps',
  }, {
    value: 'manager',
    display: 'Manager',
  }, {
    value: 'ba',
    display: 'Data or Business analyst',
  }, {
    value: 'qa',
    display: 'QA or test developer',
  }, {
    value: 'game',
    display: 'Game developer',
  }, {
    value: 'ml',
    display: 'Data scientist or machine learning specialist',
  },
];

const experiences = [
  {
    value: '<2',
    display: '< 2',
  }, {
    value: '2-5',
    display: '2 - 5',
  }, {
    value: '6-12',
    display: '6 - 12',
  }, {
    value: '12-18',
    display: '12 - 18',
  }, {
    value: '>18',
    display: '> 18',
  },
];

const studies = [
  {
    value: 'level1',
    display: 'Educación Primaria',
  }, {
    value: 'level2',
    display: 'Educación Secundaria',
  }, {
    value: 'level3',
    display: 'Formación Profesional',
  }, {
    value: 'level4',
    display: 'Diplomatura, Ingeniería Técnica o Grado',
  }, {
    value: 'level5',
    display: 'Licenciatura, Ingeniería o Máster',
  }, {
    value: 'level0',
    display: 'No tengo ninguna formación específica',
  },
];

const salaries = [
  {
    value: '<16k',
    display: '< 16k',
  }, {
    value: '16k - 19k',
    display: '16k - 19k',
  }, {
    value: '20k-29k',
    display: '20k - 29k',
  }, {
    value: '30k-39k',
    display: '30k - 39k',
  }, {
    value: '40k-50k',
    display: '40k - 50k',
  }, {
    value: '>50k',
    display: '> 50k',
  },
];

export default {
  name: 'step-2',
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
    };
  },

  watch: {
    survey: {
      handler() {
        this.huha.getTask('Opensouth Survey').addInteraction();
        this.huha.getTask('Step 2').addInteraction();
        this.error = false;
      },
      deep: true,
    },
    error() {
      if (this.error) {
        this.huha.getTask('Opensouth Survey').addError();
        this.huha.getTask('Step 2').addError();
      }
    },
  },

  computed: {
    form() {
      return [
        {
          name: 'position',
          label: 'Rol',
          type: 'radio',
          values: positions,
        }, {
          name: 'experience',
          label: 'Años en la profesión',
          type: 'radio',
          values: experiences,
        }, {
          name: 'studies',
          label: 'Nivel de estudios',
          type: 'radio',
          values: studies,
        }, {
          name: 'salary',
          label: 'Rango salarial',
          type: 'radio',
          values: salaries,
        },
      ];
    },

    valid() {
      return this.survey.position !== null && this.survey.experience !== null &&
        this.survey.studies !== null && this.survey.salary !== null;
    },
  },

  methods: {
    next() {
      this.huha.getTask('Opensouth Survey').addInteraction();
      this.huha.getTask('Step 2').addInteraction();
      if (this.valid) {
        this.error = false;
        this.huha.getTask('Step 2').complete();
        this.$emit('next-step');
      } else {
        this.error = true;
      }
    },

    skip() {
      this.huha.getTask('Opensouth Survey').addInteraction();
      this.huha.getTask('Step 2').addInteraction();
      this.huha.getTask('Step 2').abandon();
      this.$emit('next-step');
    },

    prev() {
      this.huha.getTask('Opensouth Survey').addInteraction();
      this.huha.getTask('Step 2').addInteraction();
      this.huha.getTask('Step 2').abandon();
      this.$emit('prev-step');
    },
  },

  created() {
    this.huha.createTask('Step 2');
  },
};
</script>
