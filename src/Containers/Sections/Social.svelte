<script>
  export let socialData = {};
  const { IMAGENES_LISTA, ENCABEZADO } = socialData;
</script>

<style>
  .social-iconos img {
    width: 75px;
    transition: 0.5s;
  }
  .social-iconos a:hover img {
    transform: translateY(-10px);
  }
  a:hover {
    text-decoration: none;
  }
</style>

<section id="social-media" class="section grey-bgcolor">
  <div class="container text-center">
    <h2 class="title text-center">{ENCABEZADO}</h2>
    <div class="social-iconos section-body">
      {#each IMAGENES_LISTA as lista}
        <a
          href="https://www.linkedin.com/"
          target="_blank">
          <img src={lista} alt="Social media {lista}" />
        </a>
      {/each}
    </div>
  </div>
</section>