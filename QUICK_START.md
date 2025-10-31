# Habbt Landing Page - Quick Start Guide

## ⚡ Installation & Setup (5 minutes)

### Step 1: Navigate to the directory
```bash
cd /media/mustafa/Data/Study/Projects/habbt/habbt-landing
```

### Step 2: Install dependencies
```bash
npm install
```
This will install:
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.3.1
- Tailwind CSS 3.4.4
- Lucide React (icons)

### Step 3: Start the development server
```bash
npm run dev
```

**Or use the startup script:**
```bash
./start.sh
```

### Step 4: Open in browser
```
http://localhost:3000
```

---

## 🎯 What You'll See

When you open the landing page, you'll see:

1. **Fixed Navigation** - Glass effect navbar with smooth scroll
2. **Hero Section** - Eye-catching gradient headline with CTAs
3. **Features Grid** - 8 beautifully designed feature cards
4. **Social Features** - Interactive circle demo
5. **How It Works** - 4-step visual process
6. **Download Section** - App store buttons and web app CTA
7. **Footer** - Links and social media icons

---

## 🛠️ Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📝 Customization Quick Tips

### Change Colors
Edit `tailwind.config.js` lines 9-27:
```js
colors: {
  primary: { /* your blue shades */ },
  accent: { /* your purple shades */ }
}
```

### Update Hero Text
Edit `src/components/Hero.tsx` lines 28-34:
```tsx
<h1>
  Your New Title
  <span className="text-gradient">Gradient Text</span>
</h1>
```

### Modify Features
Edit `src/components/Features.tsx` lines 13-73:
```tsx
const features = [
  { icon, title, description, color },
  // Add/remove features here
]
```

### Add Real Screenshots
Replace placeholder in `src/components/Hero.tsx` line 72-80 with:
```tsx
<img src="/screenshots/app-preview.png" alt="Habbt App" />
```

### Update Download Links
Edit `src/components/Download.tsx` lines 41-71:
```tsx
<button onClick={() => window.location.href = 'YOUR_APP_STORE_LINK'}>
```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest)
1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Add landing page"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite
6. Click "Deploy"
7. Done! You get: `your-site.vercel.app`

### Option 2: Netlify
1. Build the site:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Done! You get: `your-site.netlify.app`

### Option 3: GitHub Pages
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 📱 Mobile Testing

Test responsive design:

### Method 1: Browser DevTools
1. Open page in Chrome/Firefox
2. Press `F12` (DevTools)
3. Click device icon (top-left)
4. Select device: iPhone, iPad, etc.

### Method 2: Local Network
1. Find your IP: `ifconfig` or `ipconfig`
2. Start dev server: `npm run dev`
3. On mobile browser: `http://YOUR_IP:3000`

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Change port in vite.config.ts
server: {
  port: 3001, // or any other port
}
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check TypeScript errors
npm run build
# Fix any type errors shown
```

### Styling not loading
```bash
# Ensure Tailwind is processing
# Check if index.css is imported in main.tsx
```

---

## 📚 Project Structure Reference

```
habbt-landing/
├── src/
│   ├── components/          # All page sections
│   │   ├── Navbar.tsx      # Top navigation
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Feature cards
│   │   ├── SocialFeatures.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Download.tsx
│   │   └── Footer.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies
```

---

## ✨ Next Steps

1. **Add Screenshots**: Replace placeholder with real app images
2. **Update Links**: Add actual App Store/Play Store URLs
3. **Customize Content**: Tailor text to your brand voice
4. **Add Analytics**: Integrate Google Analytics or Plausible
5. **SEO**: Update meta tags in `index.html`
6. **Performance**: Run Lighthouse audit
7. **Deploy**: Push to production

---

## 🎉 You're All Set!

The landing page is ready to use. Customize it, deploy it, and start getting users!

**Need help?** Check:
- `README.md` - Full documentation
- `VISUAL_GUIDE.md` - Design reference
- `LANDING_PAGE_SUMMARY.md` - Complete feature list

---

Built with ❤️ for Habbt

