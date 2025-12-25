# SENABEL - Luxury Fashion Landing Page

A production-ready, responsive landing page for SENABEL, a high-end custom fashion brand. Built with React.js, Tailwind CSS, and Framer Motion, featuring a stunning "Dark Luxury" design aesthetic.

![SENABEL Hero](https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop)

## 🌟 Features

### Design & Aesthetics
- **Dark Luxury Theme**: Midnight black (#0a0a0a) background with burnished gold (#D4AF37) accents
- **Premium Typography**: Playfair Display & Cinzel for headings, Montserrat & Lato for body text
- **Sophisticated Animations**: Smooth transitions and micro-interactions powered by Framer Motion
- **Fully Responsive**: Mobile-first design that scales beautifully across all devices

### Components

#### 1. **Navbar with Critical Scroll Animation**
- Transparent background on page load
- Smooth transition to solid dark background on scroll (50px threshold)
- Fixed positioning for persistent navigation
- Mobile hamburger menu with smooth animations

#### 2. **Hero Section**
- Full viewport height (100vh) for maximum impact
- Parallax scroll effect on background image
- Dark gradient overlay for optimal text readability
- Animated scroll indicator

#### 3. **Bespoke Process Section**
- 50/50 split layout: Image (left) | Text (right)
- Scroll-triggered fade-in animations
- Hover effects on images
- Detailed brand story and process description

#### 4. **Muse Collection Gallery**
- Reversed layout: Text (left) | Gallery Grid (right)
- 2x2 masonry image gallery
- Staggered image animations
- Hover overlays with collection titles

#### 5. **Contact Form**
- Luxury form styling with transparent backgrounds
- Thin gold borders with focus states
- Required fields: Full Name, Email, City, Contact Number
- Gold submit button with hover animations
- Form validation and success states

#### 6. **Footer**
- Minimal dark design
- Social media icons (Instagram, Facebook, Pinterest, TikTok)
- Hover animations on icons
- Copyright notice

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "c:\Users\shiva\OneDrive\Desktop\salman\projects\senabel - 2"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The page will hot-reload on file changes

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Midnight Black | `#0a0a0a` | Main background |
| Deep Charcoal | `#121212` | Section backgrounds |
| Burnished Gold | `#D4AF37` | Primary accents, headings, borders |
| Warm Cream | `#F5F5DC` | Body text, labels |

## 📁 Project Structure

```
senabel - 2/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Scroll-animated navigation
│   │   ├── Hero.jsx            # Full-height hero with parallax
│   │   ├── BespokeProcess.jsx  # Image + text section
│   │   ├── MuseCollection.jsx  # Text + gallery section
│   │   ├── ContactForm.jsx     # Luxury contact form
│   │   └── Footer.jsx          # Minimal footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind custom theme
├── postcss.config.js           # PostCSS setup
└── package.json                # Dependencies

```

## 🔧 Technology Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.3
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.0.0
- **Fonts**: Google Fonts (Playfair Display, Cinzel, Montserrat, Lato)

## ✨ Key Features Explained

### Navbar Scroll Animation Logic

The navbar uses React's `useState` and `useEffect` hooks to track scroll position:

1. **Scroll Listener**: Attached on component mount
2. **Threshold**: 50px scroll distance triggers state change
3. **CSS Transitions**: `transition-all duration-300` provides smooth background change
4. **States**:
   - Initial: `bg-transparent` (fully transparent)
   - Scrolled: `bg-deep-charcoal/95` with `backdrop-blur-md` (solid with blur)

### Responsive Behavior

- **Mobile-First Approach**: Base styles target mobile devices
- **Breakpoints**:
  - `sm`: 640px (small tablets)
  - `md`: 768px (tablets)
  - `lg`: 1024px (desktops)
  - `xl`: 1280px (large desktops)

### Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on form inputs
- Alt text on all images

### Performance Optimizations

- Lazy loading for images
- Framer Motion's `once: true` to prevent re-animations
- Optimized animations with GPU acceleration
- Production bundle optimization via Vite

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 SENABEL. All Rights Reserved.

---

**Developed with precision for luxury fashion excellence** ✨
