<template>
  <Step
      title="... y tus intereses, y ya."
      description="Y ahora lo que de verdad importa
      <a href='https://www.youtube.com/watch?v=J4EejgDs8-s' target='_blank'>¿eres Mac o eres PC?</a> 🙊"
      :form="form"
      :survey="survey"
      :back="true"
      :send="true"
      @prev-step="$emit('prev-step')"
      @next-step="$emit('next-step')">
  </Step>
</template>

<script>
import Step from './Step.vue';

const languages = [
  {
    value: 'javascript',
    display: 'Javascript',
  }, {
    value: 'html/css',
    display: 'HTML/CSS',
  }, {
    value: 'python',
    display: 'Python',
  }, {
    value: 'c',
    display: 'C, C++, C#',
  }, {
    value: 'java',
    display: 'Java',
  }, {
    value: 'sql',
    display: 'SQL',
  }, {
    value: 'bash',
    display: 'Bash/Shell',
  }, {
    value: 'php',
    display: 'PHP',
  }, {
    value: 'ruby',
    display: 'Ruby',
  }, {
    value: 'swift',
    display: 'Swift',
  }, {
    value: 'go',
    display: 'Go',
  }, {
    value: 'scala',
    display: 'Scala',
  }, {
    value: 'r',
    display: 'R',
  }, {
    value: 'net',
    display: 'VB.NET',
  },
];

const frameworks = [
  {
    value: 'node',
    display: 'Node.js',
  }, {
    value: 'angular',
    display: 'Angular',
  }, {
    value: 'react',
    display: 'Ract',
  }, {
    value: 'netcore',
    display: '.NET Core',
  }, {
    value: 'django',
    display: 'Django',
  }, {
    value: 'spring',
    display: 'Spring',
  }, {
    value: 'xamarin',
    display: 'Xamarin',
  }, {
    value: 'spark',
    display: 'Spark',
  }, {
    value: 'hadoop',
    display: 'Hadoop',
  }, {
    value: 'tensorflow',
    display: 'Tensorflow',
  }, {
    value: 'cordova',
    display: 'Cordova',
  },
];

const dbs = [
  {
    value: 'mysql',
    display: 'MySQL',
  }, {
    value: 'sqlserver',
    display: 'SQL Server',
  }, {
    value: 'postgres',
    display: 'postgreSQL',
  }, {
    value: 'mongo',
    display: 'MongoDB',
  }, {
    value: 'sqlite',
    display: 'SQLite',
  }, {
    value: 'redis',
    display: 'Redis',
  }, {
    value: 'elasticsearch',
    display: 'Elasticsearch',
  }, {
    value: 'mariadb',
    display: 'MariaDB',
  }, {
    value: 'oracle',
    display: 'Oracle',
  }, {
    value: 'azure',
    display: 'Microsoft Azure',
  }, {
    value: 'googlecloud',
    display: 'Google Cloud Storage',
  }, {
    value: 'cassandra',
    display: 'Cassandra',
  }, {
    value: 'dynamodb',
    display: 'Amazon DynamoDB',
  }, {
    value: 'neo4j',
    display: 'Neo4j',
  },
];

const jsLibraries = [
  {
    value: 'plsdontgoJS',
    display: 'plsdontgoJS',
  }, {
    value: 'extasiJS',
    display: 'SQL extasiJS',
  }, {
    value: 'diabloJS',
    display: 'diabloJS',
  }, {
    value: 'huhaJS',
    display: 'huhaJS',
  }, {
    value: 'asimegustaJS',
    display: 'asimegustaJS',
  }, {
    value: 'pacopilJS',
    display: 'pacopilJS',
  }, {
    value: 'technoJS',
    display: 'technoJS',
  }, {
    value: 'uhlalalaJS',
    display: 'uhlalalaJS',
  },
];

export default {
  name: 'step-3',
  components: {
    Step,
  },

  props: {
    survey: Object,
  },

  computed: {
    form() {
      return [
        {
          name: 'languages',
          label: 'Lenguajes de programación, scripting y marcado',
          type: 'checkbox',
          values: languages,
        }, {
          name: 'frameworks',
          label: 'Frameworks, librerías y herramientas',
          type: 'checkbox',
          values: frameworks,
        }, {
          name: 'dbas',
          label: 'Bases de datos',
          type: 'checkbox',
          values: dbs,
        }, {
          name: 'jsLibraries',
          label: 'Nombre favorito para una posible librería JS',
          type: 'checkbox',
          values: jsLibraries,
        },
      ];
    },
  },
};
</script>
