<script>
  export let serviciosData = {};
  const { ENCABEZADO, SERVICIOS, SERVICIOS_LISTA } = serviciosData;
</script>

<style>
  .servicio-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  .servicio h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .titulo {
    text-transform: uppercase;
  }

  .titulo::before {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .titulo::after {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
  }
</style>

<section id="servicios" class="section">
  <div class="container text-center">
    <h2 class="titulo">{ENCABEZADO}</h2>
    <div class="row section-body">
      {#each SERVICIOS_LISTA as lista}
        <div class="col-md-4 servicio">
          <img src={lista.URL} alt={lista.LABEL} class="servicio-img" />
          <h4>{lista.LABEL}</h4>
          <p>{lista.DESCRIPCION}</p>
        </div>
      {/each}
    </div>
    <buttom class="btn btn-primary round-border main-bgcolor">
      {SERVICIOS}
    </buttom>
  </div>
</section>