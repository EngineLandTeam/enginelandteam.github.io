<script>
  export let nosotrosData = {};
  const { ENCABEZADO, TITULO, IMAGEN_URL, PORQUE_NOSOTROS } = nosotrosData;
</script>

<style>
  .nosotros-titulo {
    margin-top: 8%;
    margin-bottom: 20px;
  }

  section ul li {
    margin: 10px 0;
  }

  section ul {
    padding-left: 23px;
  }
</style>

<section id="nosotros" class="section grey-bgcolor">
  <div class="container">
    <h2 class="titulo text-center">{ENCABEZADO}</h2>
    <div class="row section-body">
      <div class="col-md-6">
        <h3 class="nosotros-titulo">{TITULO}</h3>
        <ul>
          {#each PORQUE_NOSOTROS as lista}
            <li>{lista}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6">
        <img src={IMAGEN_URL} alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</section>