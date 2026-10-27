# Marcenaria Jardim Paulista

@asset:da_01m5z97rp0fx5ank3np3yers0m:"Container" Quero que faça para mim um site de marcenaria baseado no modelo que lhe enviei. Aqui está o dados da marcenaria: Av. Luís Gonzaga do Nascimento, N° 300 - JARDIM PAULISTA, Monte Mor - SP, 13198-432

Telefone: (19) 98902-4149

Em anexo vai as fotos e o logo, faça um site bem legal para mim

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/624c6751-704b-4caf-8ba6-670eef17fb91).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The GitHub Actions workflow builds and publishes the static site to GitHub Pages
when changes are pushed to `main`. In the repository settings, set **Pages >
Build and deployment > Source** to **GitHub Actions**.

The Pages build is separate from the default Cloudflare build:

```sh
npm run build:pages
```

It prerenders the site and writes the deployable files to `dist/client`.
The regular `npm run build` remains configured for Cloudflare.
