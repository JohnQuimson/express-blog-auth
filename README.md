<h1 align="center">
  
 express-blog-auth
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

- Creiamo le seguenti rotte:

  - home
  - posts/ (index)
  - posts/ (store)
  - posts/:slug (show)

- Tramite JTW creiamo una rotta per autenticare un utente ed ottenere il Token JWT
- tramite un middleware limitiamo l'accesso alla rota store dei post ai soli utenti loggati.
- Gestiamo, attraverso dei middlewares, gli errori e le pagine 404.
  Questi middleware dovranno rispondere con un json contente il codice ed il messaggio dell'errore.

Svolgiamo tutto l'esercizio tramite relativi controller e router.

### Bonus

- Ritornare un errore diverso nel caso il jwt sia non valido o scaduto
- Creare un middleware per proteggere le rotte riservate agli utenti admin

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
