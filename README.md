<p align="center" style="padding-top:20px">
 <img width="100px" src="images/handy-dev-logo.svg" align="center" alt="Handy Development Logo" />
 <h1 align="center">Handy Development</h1>
 <p align="center">Portfolio and business website for Handy Development, built with Hugo, Tailwind CSS 4, and Alpine.js.</p>
</p>
  <p align="center">
    <a href="https://gohugo.io/">
      <img src="https://img.shields.io/badge/Hugo%20-0.105.0%20-gray.svg?colorA=c9177e&colorB=FF4088&style=for-the-badge"/>
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/TailwindCSS%20-V4-gray.svg?colorA=0284c7&colorB=38bdf8&style=for-the-badge"/>
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite%20-V7-gray.svg?colorA=646cff&colorB=747bff&style=for-the-badge"/>
    </a>
    <a href="https://alpinejs.dev/">
      <img src="https://img.shields.io/badge/Alpine.js%20-V3-gray.svg?colorA=68a5af&colorB=77c1d2&style=for-the-badge"/>
    </a>
  </p>

## Development Setup

### Prerequisites
- [Hugo Extended](https://gohugo.io/) (v0.148.2+)
- [Node.js](https://nodejs.org/) (for pnpm/npm)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
cd /home/matt/development/portfolio/handy-dev-website
pnpm install
```

Or with npm:
```bash
npm install
```

### Development

Start the development server with hot reloading:

```bash
pnpm run dev
```

Or with npm:
```bash
npm run dev
```

This runs Vite CSS processing with cache busting alongside Hugo server with hot reloading.

### Building for Production

Build the static site:

```bash
pnpm run build
```

Or with npm:
```bash
npm run build
```

## Available Scripts

- `pnpm run dev` - Development: Concurrent Vite + Hugo with hot reloading
- `pnpm run build` - Production: Build CSS then generate Hugo site
- `pnpm run build:css` - Build CSS only with Vite
- `pnpm run watch:css` - Watch CSS changes only
- `pnpm run watch:hugo` - Hugo server only

## Features

- Light/Dark mode toggle
- Responsive design
- Automatic WebP image conversion
- Form handling via FormSubmit.co
- Paginated categories and tags
- Cache-busted CSS with Vite
- OKLCH color system for modern, perceptually uniform colors

## Form Configuration

The contact form uses [FormSubmit.co](https://formsubmit.co/). Update the form action in `content/contact.md`:

```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

## Image Shortcode

Use the custom shortcode for WebP images:

```hugo
{{< imgc src="img-name.jpg" alt="Place alt text here." >}}
```

## Credits

Built using the [TailBliss](https://github.com/nusserstudios/tailbliss) Hugo theme by NusserStudios.

**Original Theme:** 4044ever - [Hugo-Tailwind-3.0](https://github.com/4044ever/Hugo-Tailwind-3.0.git)  
**Alpine.js Navbar:** Jan Heise - [responsive-navbar-with-dropdown](https://github.com/jan-heise/responsive-navbar-with-dropdown)  
**Tailwind CSS 4 Migration:** TailBliss Team