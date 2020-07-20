const HEADER = "EngineLand";
const COMPANY = "EngineLand";
const MOBILE = "+51 990 033 357";
const WEB_LINK = "HTTPS://engineland.dev";
const IMAGE_LOGO = "http://t3am.ueuo.com/logo-az.png";
const EMAIL = "info@engineland.dev";
const EMAIL_TEAM = "EngineLandTeam@gmail.com";
const COPYRIGHT = "©2020";
const ADDRESS = "Av. Arequipa 1305, Lima";
const BRANCH = "Jr Grau 444, Puno";

const NAVBAR_DATA = [
  { ID: 1, URL: "#banner", LABEL: "Inicio" },
  { ID: 2, URL: "#servicios", LABEL: "Servicios" },
  { ID: 3, URL: "#nosotros", LABEL: "Nosotros" },
  { ID: 4, URL: "#testimonios", LABEL: "Testimonios" },
  { ID: 5, URL: "#contacto", LABEL: "Contacto" },
];

const BANNER_DATA = {
  ENCABEZADO: "Soluciones todo se trata de soluciones",
  DESCRIPCION:
    "Podemos ayudarlo con todas sus necesidades y resolver sus problemas. Nuestro equipo vive haciendo realidad sus mas alocadas ideas.",
  TUTORIAL_URL:
    "https://www.thinkwithgoogle.com/intl/en-gb/marketing-resources/programmatic/google-digital-academy/",
  TUTORIAL_VER: "Ver",
};

const SERVICIOS_DATA = {
  ENCABEZADO: "Nuestros Servicios",
  SERVICIOS: "Todos nuestros Servicios",
  SERVICIOS_LISTA: [
    {
      LABEL: "Optimizacion en motores de busqueda",
      DESCRIPCION:
        "Para personalizar el contenido, la funcionalidad técnica y el alcance de su sitio web para que sus páginas se muestren para un conjunto específico de palabras clave en la parte superior de una lista de motores de búsqueda. Al final, el objetivo es atraer tráfico a su sitio web cuando están buscando bienes, servicios o información relacionada con el negocio.",
      URL: "assets/img/service1.png",
    },
    {
      LABEL: "Estrategias de Marketing de Contenido",
      DESCRIPCION:
        "Es difícil pero vale la pena el esfuerzo de crear material inteligente que no sea de naturaleza promocional, sino que eduque e inspire. Les permite verlo como una fuente confiable de información al entregar contenido que sea significativo para su audiencia.",
      URL: "assets/img/service2.png",
    },
    {
      LABEL: "Desarrolar estrategias en Redes Sociales",
      DESCRIPCION:
        "Muchas personas confían en las redes sociales para descubrir, investigar y educarse sobre una marca antes de comprometerse con cualquier organización. Cuanto más quiera su audiencia interactuar con su contenido, más probable es que quieran compartirlo.",
      URL: "assets/img/service3.png",
    },
  ],
};

const NOSOTROS_DATA = {
  ENCABEZADO: "¡Porque elegirnos?",
  TITULO: "Porque somos diferentes",
  IMAGEN_URL: "images/network.png",
  PORQUE_NOSOTROS: [
    "Proporcionamos Marketing Digital mas rentable que otros.",
    "Buenas practicas y los mejores estandares en todos nuestros productos y servicios.",
    "Utilizamos tecnologia de vanguardia.",
    "Eficiencia de marketing y tiempo rápido para valorar.",
    "Documentacion clara y precisa.",
    "Proporcionamos automatización de marketing, que es una plataforma integral que une todo su marketing digital.",
    "Un fuerte deseo de establecer asociaciones comerciales duraderas.",
    "Proporcionar marketing digital al consumidor móvil.",
    "Estructura de tarifas clara y transparente.",
    "Ofrecemos una amplia gama de servicios a precios razonables.",
  ],
};

const TESTIMONIOS_DATA = {
  ENCABEZADO: "¿Que opinan de Nosotros?",
  TESTIMONIOS_LISTA: [
    {
      DESCRIPCION:
        "Engine Land ha marcado una gran diferencia en nuestro negocio con su buen trabajo y conocimiento de SEO y técnicas de marketing de empresa a empresa. Nuestro posicionamiento en motores de búsqueda es optimo y cada vez más personas nos contactan gracias al conocimiento y al trabajo duro de Alex!",
      IMAGEN_URL: "assets/img/user1.jpg",
      NOMBRE: "Julia Maldonado",
      CARGO: "Propietaria de Arista",
    },
    {
      DESCRIPCION:
        "Un equipo estupendo que nos a proporcionado una estrategia de marketing digital integral, rápida y bien planificada que ha dado excelentes resultados en términos de contenido, SEO y redes sociales. Es un placer trabajar con ellos, además de ser rápido para responder y adaptarse a las necesidades de nuestras marca.",
      IMAGEN_URL: "assets/img/user2.jpg",
      NOMBRE: "Marco Valderrama",
      CARGO: "Co-founder de Viz & Viz",
    },
  ],
};

const SOCIAL_DATA = {
  ENCABEZADO: "Encuentranos en redes sociales",
  IMAGENES_LISTA: [
    "assets/img/facebook-icon.png",
    "assets/img/instagram-icon.png",
    "assets/img/whatsapp-icon.png",
    "assets/img/twitter-icon.png",
    "assets/img/linkedin-icon.png",
    "assets/img/snapchat-icon.png",
  ],
};

const FOOTER_DATA = {
  DESCRIPCION:
    "Nos esforzamos en cubrir todas sus exigencias y darle siempre mucho mas de lo que necesita.",
  COPY: COPYRIGHT,
  EMPRESA: COMPANY,
  CONTACTO_INFO: {
    ENCABEZADO: "Contactenos",
    DIRECCION: ADDRESS,
    SUCURSAL: BRANCH,
    MOVIL: MOBILE,
    CORREO: EMAIL,
  },
  SUSCRIBIRSE: "Suscribete a nuestro Boletin",
  SUSCRIBETE: "Subscribete",
};

const MAIN_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICIOS_DATA,
  NOSOTROS_DATA,
  TESTIMONIOS_DATA,
  SOCIAL_DATA,
  FOOTER_DATA,
};
export default MAIN_DATA;
