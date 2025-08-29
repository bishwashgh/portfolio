# Bishwas Ghimire - Personal Portfolio

A world-class, modern, and interactive personal portfolio website built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scroll-triggered animations and hover effects using Framer Motion
- **Interactive Components**: Dynamic testimonial carousel, filterable portfolio, and animated skill bars
- **Performance Optimized**: Fast loading and lightweight implementation
- **TypeScript**: Fully typed for better development experience and code reliability
- **Accessible**: Semantic HTML structure and accessibility best practices

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📋 Sections

1. **Hero Section**: Full-screen intro with animated background particles
2. **About Me**: Personal bio, skills with animated progress bars, and achievement timeline
3. **Portfolio**: Filterable project grid with hover effects and live demo links
4. **Experience**: Timeline-style work experience with alternating layout
5. **Testimonials**: Interactive carousel with client testimonials and social proof
6. **Blog**: Article cards with newsletter signup
7. **Contact**: Interactive contact form with social links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bishwas-ghimire/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a'
  }
}
```

### Content
Update the content in each component file:
- Personal information in `Hero.tsx`
- Skills and bio in `About.tsx`
- Projects in `Portfolio.tsx`
- Work experience in `Experience.tsx`
- Testimonials in `Testimonials.tsx`
- Blog posts in `Blog.tsx`
- Contact information in `Contact.tsx`

### Images
Replace placeholder images with your own:
- Profile photo in Hero section
- Project screenshots in Portfolio section
- Testimonial avatars
- Blog post images

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Performance Optimizations

- Lazy loading for images
- Intersection Observer for scroll animations
- Optimized bundle size with code splitting
- Efficient re-renders with React best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bishwas-ghimire/portfolio/issues).

## 📞 Contact

Bishwas Ghimire - [bishwas@example.com](mailto:bishwas@example.com)

Project Link: [https://github.com/bishwas-ghimire/portfolio](https://github.com/bishwas-ghimire/portfolio)

---

⭐ Star this repo if you found it helpful!