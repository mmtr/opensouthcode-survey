<template>
  <div class="step">
    <h2 class="step__title">{{ title }}</h2>
    <p class="step__description" v-html="description"></p>

    <div class="alert alert-danger" v-if="error">
      Todos los campos son obligatorios.
      <p v-if="skip">
        Si no quieres rellenarlos, pulsa en "Saltar".
      </p>
    </div>

    <div class="form-group step__form" :class="`step__form--${field.type}`"
         v-for="field in form" :key="field.name">
      <template v-if="field.type === 'radio'">
        <label>{{ field.label }}</label>
        <div class="custom-control custom-radio" v-for="value in field.values" :key="value.value">
          <input type="radio" :id="`${field.name}${value.value}`"
                 class="custom-control-input" :value="value.value"
                 v-model="survey[field.name]">
          <label class="custom-control-label" :for="`${field.name}${value.value}`">
            {{ value.display }}
          </label>
        </div>
      </template>

      <template v-if="field.type === 'checkbox'">
        <label>{{ field.label }}</label>
        <div class="custom-control custom-checkbox" v-for="value in field.values"
             :key="value.value">
          <input type="checkbox" :id="`${field.name}${value.value}`"
                 class="custom-control-input" :value="value.value"
                 v-model="survey[field.name]">
          <label class="custom-control-label" :for="`${field.name}${value.value}`">
            {{ value.display }}
          </label>
        </div>
      </template>

      <template v-else-if="field.type === 'text'">
        <label :for="field.name">{{ field.label }}</label>
        <input type="text" :id="field.name"
               v-model="survey[field.name]" class="form-control">
      </template>
    </div>

    <div class="text-center" v-if="skip">
      <button type="button" class="btn btn-link"
              @click="$emit('skip')">
        Saltar
      </button>
    </div>

    <template v-if="back">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-lg btn-block btn-outline-primary"
                  @click="$emit('prev-step')">
            Atrás
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-lg btn-block btn-primary"
                  @click="$emit('next-step')">
            <template v-if="send">Enviar</template>
            <template v-else>Siguiente</template>
          </button>
        </div>
      </div>
    </template>

    <button v-else type="button" class="btn btn-lg btn-block btn-primary"
            @click="$emit('next-step')">
      <template v-if="send">Enviar</template>
      <template v-else>Siguiente</template>
    </button>
  </div>
</template>

<script>
export default {
  name: 'step',

  props: {
    survey: Object,
    error: Boolean,
    title: String,
    description: String,
    form: Array,
    skip: Boolean,
    back: Boolean,
    send: Boolean,
  },

  watch: {
    error() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
  .step {
    .step__title,
    .step__description {
      text-align: center;
    }

    .step__description {
      margin-bottom: 2rem;
    }

    .step__form {
      &.step__form--checkbox {
        display: flex;
        flex-wrap: wrap;

        label {
          flex: 0 0 100%;
        }

        .custom-control {
          flex: 0 0 50%;
        }
      }
    }
  }
</style>
