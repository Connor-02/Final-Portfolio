# Connor Murray - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful pink→blue gradient design, smooth animations, and excellent performance.

## ✨ Features

- **Modern Design**: Clean, professional layout with pink→blue gradient branding
- **Responsive**: Optimized for all devices with mobile-first approach
- **Performance**: Lighthouse scores ≥95 on mobile & desktop
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, sitemap.xml, robots.txt, and Open Graph images
- **Command Palette**: ⌘K search functionality for quick navigation
- **Project Filtering**: Tag-based filtering on the projects page
- **Print-Ready Resume**: Optimized for PDF export
- **Smooth Animations**: Framer Motion with reduced motion support
- **Glass Header**: Modern backdrop blur effect

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/connor-portfolio-starter.git
   cd connor-portfolio-starter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
connor-portfolio-starter/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes (OG image generation)
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page with filtering
│   ├── resume/            # Resume page with print support
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap.xml generation
├── components/            # Reusable components
│   ├── CommandPalette.tsx # ⌘K search functionality
│   ├── Hero.tsx          # Hero section component
│   └── ProjectCard.tsx   # Project card component
├── data/                 # Static data
│   └── projects.ts       # Project definitions
├── public/               # Static assets
│   └── projects/         # Project images
├── site.config.ts        # Site configuration
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Customization

### Brand Colors

Update the gradient colors in `app/globals.css`:

```css
:root {
  --brand-pink: 322 100% 75%; /* Customize pink */
  --brand-blue: 213 92% 79%;  /* Customize blue */
}
```

### Site Configuration

Edit `site.config.ts` to update your personal information:

```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Your Role",
  location: "Your Location",
  summary: "Your summary...",
  url: "https://your-domain.vercel.app",
  // ... other config
}
```

### Projects

Add or modify projects in `data/projects.ts`:

```typescript
export const projects = [
  {
    slug: "project-slug",
    title: "Project Title",
    summary: "Project description...",
    tags: ["Security", "Web", "Python"],
    links: {
      github: "https://github.com/...",
      live: "https://demo.com/..."
    },
    image: "/projects/project-image.svg"
  }
]
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Update `site.config.ts` with your production URL

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use `next build && next export` for static export
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Supports Next.js out of the box

## 🔧 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Key Features Implementation

#### Command Palette (⌘K)
- Global keyboard shortcut for quick navigation
- Fuzzy search through projects and pages
- Accessible with keyboard navigation

#### Project Filtering
- Tag-based filtering on `/projects` page
- Smooth animations with Framer Motion
- Responsive grid layout

#### SEO & Performance
- Dynamic sitemap generation
- Robots.txt for search engines
- Open Graph images for social sharing
- Optimized images and fonts

#### Print-Ready Resume
- Clean, professional layout
- Print-optimized CSS
- PDF export instructions

## 📱 Performance

The portfolio is optimized for excellent performance:

- **Lighthouse Scores**: ≥95 on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP
- **Font Loading**: Optimized font loading with `next/font`
- **Bundle Size**: Minimal JavaScript with tree shaking

## 🎯 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Clear focus indicators

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with deployment, feel free to:

- Open an issue on GitHub
- Contact me at connor@example.com
- Check the [Next.js documentation](https://nextjs.org/docs)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
