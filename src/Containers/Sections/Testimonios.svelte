<script>
  export let testimoniosData = {};
  const { ENCABEZADO, TESTIMONIOS_LISTA } = testimoniosData;
</script>

<style>
  .testimonio {
    border-left: 4px solid #0072ff80;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .testimonio img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .usuario-detalles {
    display: inline-block;
    font-size: 12px;
  }
</style>

<section id="testimonios" class="section">
  <div class="container">
    <h2 class="title text-center">{ENCABEZADO}</h2>
    <div class="row offset-1 section-body">
      {#each TESTIMONIOS_LISTA as lista}
        <div class="col-md-5 testimonio">
          <p>{lista.DESCRIPCION}</p>
          <img src={lista.IMAGEN_URL} alt="" />
          <p class="usuario-detalles">
            <b>{lista.NOMBRE}</b>
            <br />
            {lista.CARGO}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>