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
export default {
  name: 'thanks',
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
