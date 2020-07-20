<p align="center">
	<img src="logo-T.png" width="40%"/>
	<img src="https:https://enginelandteam.github.io/dist/assets/image/T-21.png" width="400">
</p>

# ENGINELAND - SVELTE - WEBPACK -BOOTSTRAP

## GLOBAL

<!-- Acciones -->

### Acciones

**NPM**

**Instalacion y Configuracion Global de Npm**

- npm install -g _[paquete]@[version]_

- npm set init.author.name _@Nombre de usuario_
- npm set init.author.email _Email de usuario_
- npm set init.author.url _Url de Usuario_
- npm set init.license _Licencia_

**Cuenta de Npmjs.com**

- npm adduser _usuario y password_

**Flags**

**_Alias_**

- -i, add, install _Instalacion_
- -g, --global _Instalacion global_

**_Adicionales_** _(modificadores para package.json)_

- -S, -s, --save _opcion por defecto, registrado en dependecies_
- -E, -e, --save-exact _registra la version exacta_
- -B, -b, --save-bundle _en paquete, se registra en bundleDependecies_
- -D, -d, --save-dev _en desarrollo, registrado en devDependecies_
- -P, -p, --save-prod _produccion, registrado en dependecies_
- -O, -o, --save-optional _opcional, registrado en optionalDependecies_
- --no-save _no guarda registro alguno_

**_Instalacion_**

- npm install [dir] _Instalacion desde directorio local o archivo comprimido_
- npm install [url] _Instalacion desde un repositorio remoto_
- npm install [paquete] _Instala paquete con latest por defecto_
- npm install [paquete]@[version] _Instala paquete con su propia version_
- npm install [@dev][paquete]@[version] _Instala desde el registro del desarrollador del paquete_
- npm uninstall [paquete] _Desinstala el paquete_
- @latest _Ultima actualizacion del paquete_

**GIT**

**_Configuracion Global de Git_**

- git config --global user.name _@Nombre de usuario_
- git config --global user.email _Email de usuario_
- git config --global core.editor _Editor de git_
- git config --list _Visualizamos la configuracion de git_

<!-- Acciones -->

<!-- Command -->

### Commands GLOBAL

```
NPM
npm install -g npm@latest
npm set init.author.name "@T3am."
npm set init.author.email "EngineLandTeam@gmail.com"
npm set init.author.url "https://EngineLand.dev"
npm set init.license "MIT"
npm adduser

GIT
git config --global user.name "@T3am."
git config --global user.email "EngineLandTeam@gmail.com"
git config --global core.editor "C:\\Program Files\\Microsoft VS Code\\Code.exe" --wait
```

<!-- Command -->

---

## WEBPACK

<!-- Dependecias -->

### Dependencias

**WEBPACK**

**_Core_**

- @babel/core _nucleo de babel_
- webpack _nucleo de webpack_
- bootstrap _nucleo de bootstrap_
- tailwindcss _nucleo de tailwindcss_
- node-sass _nucleo y compilador de sass_
- svelte _nucleo de svelte_

**_Loader_**

- svelte-loader _reconoce e interpreta extenciones de svelte_
- babel-loader _reconoce e interpreta codigo generado en babel_
- eslint-loader _reconoce e verifica que nuestra sintaxis este correcta_
- html-loader _reconoce e interpreta codigo html_
- json-loader _reconoce e interpreta codigo json_
- css-loader _reconoce e interpreta codigo css_
- sass-loader _reconoce e interpreta codigo sass a css_
- style-loader _inserta estilos en nuestro MAIN declarado_
- @fortawesome/fontawesome-free _font awesome_
- file-loader _reconoce e interpreta archivos de imagenes, fuentes, etc_
- image-webpack-loader \_\_

**_Plugin_**

- @babel/preset-env \_\_

- webpack-cli _interfaz de linea de comandos de WebPack_
- webpack-dev-server _servidor de desarrollo on live de WebPack_

- html-webpack-plugin _copia archivos html de src a dist_

**_Xtras_**

- mini-css-extract-plugin _inserta vinculo de css en el html_
- optimize-css-assets-webpack-plugin _optimiza el tamaño de los archivos css_
- copy-webpack-plugin _copia archivos entre carpetas_
- babel-minify-webpack-plugin _minifica los archivos generados por babel_
- clean-webpack-plugin _limpia codigo no utilizado en dist/_

<!-- Acciones -->

---

<p align="center">
	<img src="logo-EL.png" width="70%"/>
</p>
