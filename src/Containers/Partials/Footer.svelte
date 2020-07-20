<script>
  export let footerData = {};
  export let header = "";
  const {
    DESCRIPCION,
    COPY,
    EMPRESA,
    CONTACTO_INFO,
    SUSCRIBIRSE,
    SUSCRIBETE
  } = footerData;
  const { ENCABEZADO, DIRECCION, SUCURSAL, MOVIL, CORREO } = CONTACTO_INFO;
</script>

<style>
  .footer-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .footer-box button {
    margin-top: 30px;
  }

  .round-border {
    border-radius: 20px !important;
  }
  .wave-img {
    width: 100%;
    height: auto;
  }
</style>

<section class="main-bgcolor light-color" id="footer">
  <img src="assets/img/wave2.png" alt="" class="wave-img" />
  <div class="container">
    <div class="row section-body">
      <div class="col-md-4 footer-box">
        <div class="company_brand">{header}</div>
        <p>{DESCRIPCION}</p>
        <p>{COPY} {EMPRESA}</p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{ENCABEZADO}</p>
        <p>
          <i class="fas fa-map-marker-alt" />
          {DIRECCION}
        </p>
        <p>
          <i class="fas fa-map-marker-alt" />
          {SUCURSAL}
        </p>
        <p>
          <i class="fas fa-phone" />
          {MOVIL}
        </p>
        <p>
          <i class="fas fa-envelope" />
          {CORREO}
        </p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{SUSCRIBIRSE}</p>
        <input
          type="email"
          class="form-control round-border"
          placeholder="Your Email" />
        <button type="button" class="btn btn-outline-light round-border">
          {SUSCRIBETE}
        </button>
      </div>
    </div>
  </div>
</section>