# 🚀 Personal Portfolio - Mohamed Elmshaly

A modern, animated portfolio website showcasing my work as a Frontend Developer. Built with Next.js 16 and featuring advanced animations using Framer Motion and GSAP.

## ✨ Features

### 🎨 **Advanced Animations**
- **Custom Cursor**: Smooth-following cursor with fluid transitions that responds to hover states
- **Interactive Project Cards**: Dynamic image reveals on hover with cursor-tracking effects
- **Page Transitions**: Elegant overlay animations on page load, refresh, and navigation
- **Scroll Animations**: GSAP-powered scroll-triggered animations throughout

### 🎯 **Core Functionality**
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast load times with Next.js App Router and image optimization
- **Smooth Navigation**: Seamless page transitions with route change animations
- **Contact Form**: Integrated contact functionality with form validation
- **Project Showcase**: Clean, modern layout displaying featured work
- **Downloadable Resume**: Direct PDF download link

### 🛠️ **Technical Highlights**
- Built with **Next.js 16 App Router** for optimal performance
- **TypeScript** for type safety and better developer experience
- **Framer Motion** for declarative animations
- **GSAP (GreenSock)** for complex timeline-based animations
- **Tailwind CSS** for utility-first styling
- Deployed on **Vercel** for global edge network delivery

## 🚀 Live Demo

Visit the live site: [moyelmshaly.vercel.app](https://moyelmshaly.vercel.app)

## 🎓 Learning Outcomes

This project challenged me to level up my animation skills and taught me:

1. **Custom Cursor Implementation**
   - Mouse position tracking with smooth interpolation
   - State-based cursor transformations (hover, click, drag)
   - Performance optimization for 60fps animations

2. **Advanced Hover Effects**
   - Image reveal animations synchronized with cursor movement
   - Magnetic cursor effects on interactive elements
   - Smooth transitions between different states

3. **Page Transition System**
   - Loading overlays with staggered animations
   - Route change detection and animation coordination
   - Exit and enter animations for seamless navigation

4. **GSAP Timeline Mastery**
   - Complex animation sequences
   - Scroll-triggered animations with ScrollTrigger
   - Timeline control and animation chaining

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: 
  - Framer Motion (component animations)
  - GSAP (scroll animations, timelines)
  - Lenis (smooth scroll)
- **Deployment**: Vercel
- **Font**: Geist (Vercel's font family)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Clone Repository
```bash
git clone https://github.com/Mohamed-17/Mo_Portfolio
cd portfolio
```

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Key Animation Components

### 1. Custom Cursor
```typescript
// Smooth cursor that follows mouse with magnetic effect
// Features: scale transforms, blend modes, hover states
```

### 2. Project Card Hover
```typescript
// Image reveal animation tied to cursor position
// Implements: mouse tracking, image positioning, smooth transitions
```

### 3. Page Transition Overlay
```typescript
// Animated overlay on route changes
// Uses: Framer Motion AnimatePresence, stagger effects
```

## 🌟 Featured Sections

### **Hero Section**
- Animated text reveals
- Smooth scroll indicator
- Gradient background effects

### **Projects Gallery**
- Grid layout with hover effects
- Cursor-following image previews
- Project details on click

### **About Section**
- Skills showcase with icons
- Timeline animation on scroll
- Tech stack badges

### **Contact**
- Animated form inputs
- Validation with error states
- Success/error feedback animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Animations adapt to device capabilities:
- Reduced motion support for accessibility
- Touch-optimized interactions on mobile
- Disabled cursor effects on touch devices

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

Optimizations:
- Next.js Image component for automatic optimization
- Code splitting with dynamic imports
- Lazy loading for below-the-fold content
- Optimized GSAP bundles

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://moyelmshaly.vercel.app
```

### Customization
To customize for your own portfolio:

1. **Update Personal Info**: Edit `lib/data/personal-info.ts`
2. **Add Projects**: Modify `lib/data/projects.ts`
3. **Change Theme**: Adjust colors in `tailwind.config.ts`
4. **Replace Resume**: Update PDF in `public/assets/`
5. **Update Metadata**: Edit `app/layout.tsx` for SEO

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

```bash
# Or use Vercel CLI
vercel deploy
```

### Other Platforms
The project works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## 📚 Learning Resources

Resources that helped build this project:

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Awwwards](https://www.awwwards.com/) - Design inspiration
- [Codrops](https://tympanus.net/codrops/) - Animation tutorials

## 🤝 Contributing

While this is a personal portfolio, feel free to:
- Report bugs
- Suggest improvements
- Use the code as reference for your own portfolio
- Fork and create your own version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mohamed Elmshaly (Mo)**
- Portfolio: [moyelmshaly.vercel.app](https://moyelmshaly.vercel.app)
- GitHub: [@Mohamed-17](https://github.com/Mohamed-17)
- LinkedIn: [linkedin.com/in/mo](https://www.linkedin.com/in/mo-elmshaly)
- Email: mohamed.works@outlook.com

## 🙏 Acknowledgments

- Inspired by award-winning portfolio sites on Awwwards
- Animation techniques learned from various GSAP and Framer Motion tutorials
- Design principles from modern web design trends

---

⭐ **If you found this project helpful, please give it a star!**

Built with 💙 by Mohamed Elmshaly
