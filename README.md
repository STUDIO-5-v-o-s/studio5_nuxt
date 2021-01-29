# STUDIO 5 - Nuxt.js frontend + Strapi

## Frontend
### Build and run serve

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```    
### Hierarchy assets

- `assets`
  - default .scss files, fonts and images
- `components`
  - `global` - global components like logo, custom icons, custom buttons and much more
  - `header` - components like TopBar, Nav, MobileMenu
  - `body` - components like Hero, Features, Newsletter, ContactForm
  - `footer` - components like Credits, FooterMenu or FooterContact
- `content`
  - multilanguage .json files for easy define all website content
  - `cs.json` `en.json` `de.json` - all content in current language
- `layouts`
  - `default.vue` - components of defined custom icons and social icons
  - `error.vue` - components of defined custom icons and social icons
  - `CaseStudy.vue` - components of defined custom icons and social icons
- `pages`
  - `index.vue` - default website page
- `plugins`
  - place for external plugins witch has not npm packages
- `static` - place for static content witch will be generate in root of website
  - `images` - all images in default @1x and @2x size
    - `icons` - custom icons usabled in components
    - `brand` - all variations of logo usables in components
    - `placeholders` - some size and color variations of placeholders
  - `favicon.ico` - website favicon for browsers

### Nuxt.js

Nuxt.js is a framework for creating Vue.js applications, which supports SSR. For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
```bash
# documentation & Git
https://nuxtjs.org/guide/installation
https://github.com/nuxt/nuxt.js
```

### Vue

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. For detailed explanation on how things work, checkout [Vue.js docs](https://vuejs.org/v2/guide/).
```bash
# documentation & Git
https://vuejs.org/v2/guide/
https://github.com/vuejs/vue
```

### BootstrapVue

With BootstrapVue you can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library. [BootstrapVue docs](https://bootstrap-vue.js.org/docs/)
```bash
# documentation & Git
https://bootstrap-vue.org/docs
https://github.com/bootstrap-vue/bootstrap-vue
``` 

### Sass
Saas includes various features such as variables, nested rules, mixins, inline imports, built-in functions to manipulate color and other values, all with a fully CSS-compatible syntax. [Sass docs](http://sass-lang.com)

## Backend

### Strapi application

A quick description of your strapi application
```bash
# documentation
https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html
``` 
