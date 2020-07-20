<p align="center">
	<img src="./public/assets/img/engine-logo.png" width="40%"/>
</p>

# ENGINELAND - SVELTE - WEBPACK -BOOTSTRAP

## INICIO DE REPOSITORIO

<!-- Acciones -->

### Acciones

- Creamos y accedemos a carpeta EngineLand
- Creamos Estructura de Carpetas
- Inicializamos Git
- Inicializamos Npm
- Creamos y adaptamos .gitignore

<!-- Acciones -->

<!-- Command -->

### Command

```
mkdir EngineLand && cd EngineLand
git init
npm init -y

git add .
git commit -m "Inicio de Repositorio"
```

<!-- Command -->

---

## SVELTE - WEBPACK - BABEL

<!-- Acciones -->

### Acciones

- Requerimos Svelte _Lo registramos en dependencies_
- Instalamos dependencias svelte _Las registramos en devDependencies_
- Instalamos dependencias babel _Las registramos en devDependencies_
- Instalamos dependencias webpack _Las registramos en devDependencies_

- Descargamos y actualizamos dependencias
- Configuramos Package.json
- Adaptamos .gitignore
- Ejecutamos proyecto _modo desarrollo_

**_Svelte_**

svelte@latest _core svelte_
svelte-loader _reconoce e interpreta extenciones de svelte_

**_Babel_**

@babel/core _core babel_
babel-loader _reconoce e interpreta archivos generados por babel_
@babel/polyfill **
@babel/preset-env **

**_Webpack_**

webpack _core _
webpack-cli _core _
webpack-dev-server _core _

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -S svelte@latest
npm i -D svelte-loader
*npm i -D svelte@latest svelte-loader*

npm i -D @babel/core
npm i -D babel-loader
npm i -D @babel/polyfill
npm i -D @babel/preset-env
*npm i -D @babel/core babel-loader @babel/polyfill @babel/preset-env*

npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-dev-server
*npm i -D webpack webpack-cli webpack-dev-server*

npm install
npm run dev
git init

git add .
git commit -m "Svelte Webpack Babel"
```

<!-- Command -->

---

## BOOTSTRAP FONTAWESOME SASS CSS

<!-- Acciones -->

### Acciones

- Instalamos dependencias html _Las registramos en devDependencies_

**_Core_**

- bootstrap _core bootstrap_
- jquery _core jquery_
- @popperjs/core _core popperjs/core_
- @fortawesome/fontawesome-free _core font awesome_

**_Loader_**

- Css-loader _reconoce e interpreta css_
- Style-loader _injecta css dentro de html_

- url-loader _Transforma las dependencias a base 64 trabaja en conjunto con file-loader._
- sass-loader _Carga archivos en formato sass y los transforma a css._
- node-sass _Dependencia de sass._
- file-loader _carga archivos externos_

**_Plugin_**

- extract-text-webpack-plugin _genera un archivo separado de css_
- mini-css-extract-plugin _injecta css dentro de html_
- html-webpack-plugin _injecta el vinculo a css dentro de html_

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -D bootstrap@latest
npm i -D jquery@latest
npm i -D @popperjs/core
npm i -D popper.js
npm i -D @fortawesome/fontawesome-free
*npm i -D bootstrap@latest jquery@latest @popperjs/core @fortawesome/fontawesome-free*

npm i -D html-loader
npm i -D css-loader
npm i -D style-loader
npm i -D node-sass
npm i -D sass-loader
*npm i -D html-loader css-loader style-loader node-sass sass-loader*

npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D file-loader
npm i -D babel-minify-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin
npm i -D clean-webpack-plugin
*npm i -D html-webpack-plugin mini-css-extract-plugin file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

*npm i -D html-webpack-plugin bootstrap@latest @fortawesome/fontawesome-free css-loader sass-loader node-sass style-loader
mini-css-extract-plugin file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

git add .
git commit -m "Bootstrap FontAwesome Sass Css"

```

<!-- Command -->

---

## OPTIMIZACION Y COPY MIX WEBPACK

<!-- Acciones -->

### Acciones

- Mejoramos y corregimos pequeños errores en Webpack/webpack.init.js
- Mejoramos y corregimos pequeños errores en webpack.config.js
- Incluimos dependencias para desarrolo en Webpack/webpack.init.js hacia Public/
- Requerimos dependencias hacia Dist/

<!-- Acciones -->

<!-- Command -->

### Command

```
npm run build:view

git add .
git commit -m "Optimizacion y Copy Mix Webpack"

```

<!-- Command -->

---

## CONSTRUCCION DEL SITE Y CORRECCIONES

<!-- Acciones -->

### Acciones

- Reubicamos archivos y carpetas
- Generamos todo el Site
- Clasificamos todo nuestro material en carpetas
- Mejoramos la usabilidad de nuestros BUILDS
  build:init
  build:prod
  build:dev
  build:serv

<!-- Acciones -->

<!-- Command -->

### Command

```
git add .
git commit -m "Construccion del site y Correcciones"

```

<!-- Command -->

---

## WEBPACK PRODUCCION

<!-- Acciones -->

### Acciones

- Reubicamos archivos y carpetas
- Generamos archivo webpack.prod.js
- Modificamos vinculos de dependencias
- Relacionamos con CDN en public/index.hmtl
- Creamos BUILD PROD en Package.json

<!-- Acciones -->

<!-- Command -->

### Command

```
npm run prod

git add .
git commit -m "Webpack Produccion"

```

<!-- Command -->

---

<p align="center">
	<img src="./public/assets/img/engine-logo.png" width="70%"/>
</p>
