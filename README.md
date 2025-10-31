# Habbt Landing Page

A modern, professional landing page for Habbt - the habit tracking app that helps you build better habits together.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Install dependencies:
```bash
cd habbt-landing
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

## 📝 Project Structure

```
habbt-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Features.tsx      # Features grid
│   │   ├── SocialFeatures.tsx # Social features showcase
│   │   ├── HowItWorks.tsx    # Step-by-step guide
│   │   ├── Download.tsx      # Download section
│   │   └── Footer.tsx        # Footer with links
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      accent: { ... }
    }
  }
}
```

### Content

All content is in the individual component files in `src/components/`. Edit these files to update:
- Hero messaging
- Feature descriptions
- Steps and workflows
- Download links
- Footer content

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Other Platforms

Build the project and serve the `dist` folder with any static hosting service.

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ for Habbt

