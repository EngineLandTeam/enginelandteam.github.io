<script>
  import Navbar from "./Partials/Navbar.svelte";
  import Banner from "./Partials/Banner.svelte";
  import Servicios from "./Sections/Servicios.svelte";
  import Nosotros from "./Sections/Nosotros.svelte";
  import Testimonios from "./Sections/Testimonios.svelte";
  import Social from "./Sections/Social.svelte";
  import Footer from "./Partials/Footer.svelte";
  import DATA from "../Core/Data";
  // console.log(DATA);
</script>

<Navbar navbarData={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<Banner bannerData={DATA.BANNER_DATA} } />
<Servicios serviciosData={DATA.SERVICIOS_DATA} />
<Nosotros nosotrosData={DATA.NOSOTROS_DATA} />
<Testimonios testimoniosData={DATA.TESTIMONIOS_DATA} />
<Social socialData={DATA.SOCIAL_DATA} />
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />