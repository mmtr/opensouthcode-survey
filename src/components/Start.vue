<template>
  <div class="start">
    <h1 class="display-1">¡Holi!</h1>
    <p>Nos encantaría conocer mejor a todas las personas que forman parte de la familia
      Opensouthcode</p>

    <strong>¿Nos ayudas?</strong>
    <p>Esta encuesta no te llevará más de 5 minutos</p>

    <button type="button" class="btn btn-lg btn-block btn-primary" @click="$emit('next-step')">
      Empezar
    </button>

    <div class="start__disclaimer">
      <p><small>
        Estos datos serán usados únicamente para el propósito de la charla
        <a href="https://www.opensouthcode.org/conferences/opensouthcode2018/program/proposals/105" target="_blank">
          Analizando la UX con Javascript</a> que tendrá lugar el viernes 1 de junio a las 18:00 en La Térmica.
      </small></p>

      <p><small>Esta no esa otra suvery de S*** O***, cualquier parecido con la realidad
        es pura coincidencia.</small></p>

      <p><small>No kitten has been harmed during the
        <a href="https://carmel.es/" target="_blank">design</a> or
        <a href="https://github.com/mmtr" target="_blank">development</a> of this survey.</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',

  props: {
    huha: Object,
  },
};
</script>

<style scoped lang="scss">
  .start {
    text-align: center;
    margin-top: 2rem;

    .start__disclaimer {
      margin-top: 4rem;
      font-size: 0.85rem;
    }
  }
</style>
