<script>
  export let bannerData = {};
  const { ENCABEZADO, DESCRIPCION, TUTORIAL_URL, TUTORIAL_VER } = bannerData;
</script>

<style>
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }

  .ver-btn {
    margin: auto 20px;
    position: relative;
    top: 8px;
  }

  section a {
    text-decoration: none;
  }

  .wave-img {
    width: 100%;
    height: auto;
  }
</style>

<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>{ENCABEZADO}</h1>
        <p>{DESCRIPCION}</p>
        <a href={TUTORIAL_URL} target="_blank" class="light-color">
          <i class="far fa-play-circle fa-2x ver-btn" />
          {TUTORIAL_VER}
        </a>
      </div>
      <div class="col-md-6">
        <img src="assets/img/home.png" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
  <img src="assets/img/wave1.png" alt="" class="wave-img" />
</section>