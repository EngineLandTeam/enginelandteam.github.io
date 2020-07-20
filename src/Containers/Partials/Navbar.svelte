<script>
  export let navbarData = [];
  export let header;
  console.log(navbarData);
</script>

<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    text-align: left;
  }
</style>

<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navbarData as lista}
          <li class="nav-item">
            <a class="nav-link light-color" href={lista.URL}>{lista.LABEL}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>