# CARBON Production Deployment Checklist

## ✅ Completed Tasks

### 1. SEO & Meta Tags

- [x] Updated meta tags in index.html
- [x] Added Open Graph tags
- [x] Added Twitter Card tags
- [x] Added site description and keywords
- [x] Created robots.txt for search engine crawling
- [x] Created sitemap.xml for all pages

### 2. Error Handling & Resilience

- [x] Created ErrorBoundary component
- [x] Created 404 NotFound page
- [x] Integrated ErrorBoundary in App.jsx
- [x] Added 404 route fallback

### 3. Accessibility (A11y)

- [x] Added ARIA labels to mobile menu button
- [x] Added aria-expanded and aria-controls
- [x] Added aria-hidden to decorative icons
- [x] Added role="navigation" to mobile menu

### 4. Environment & Security

- [x] Created .env.example for environment variables
- [x] .gitignore already configured

### 5. Performance

- [x] Added preconnect to external resources
- [x] Logo optimization (already using SVG)
- [x] Image alt text (already implemented)

## ⚠️ TODO - Before Production Deployment

### Email Configuration

- [ ] Set up EmailJS account
- [ ] Add VITE_EMAILJS_SERVICE_ID to .env.local
- [ ] Add VITE_EMAILJS_TEMPLATE_ID to .env.local
- [ ] Add VITE_EMAILJS_PUBLIC_KEY to .env.local
- [ ] Test contact form submission

### Analytics Setup

- [ ] Create Google Analytics account
- [ ] Add GA tracking code to index.html (or use gtag library)
- [ ] Set up goal tracking
- [ ] Set up VITE_GOOGLE_ANALYTICS_ID in .env.local

### Error Tracking (Optional)

- [ ] Set up Sentry account (for error tracking)
- [ ] Integrate Sentry SDK
- [ ] Add error tracking to ErrorBoundary component

### Security Headers

- [ ] Configure netlify.toml with security headers
- [ ] Add X-Frame-Options header
- [ ] Add X-Content-Type-Options header
- [ ] Add Content-Security-Policy header

### Testing Before Launch

- [ ] Test all links (internal & external)
- [ ] Verify PDF download works
- [ ] Test contact form with real email
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on multiple devices (Mobile, Tablet, Desktop)
- [ ] Test with network throttling (slow 3G)
- [ ] Run Lighthouse audit
- [ ] Check Google PageSpeed Insights

### Deployment Verification

- [ ] Domain is properly configured
- [ ] SSL/HTTPS is enabled
- [ ] robots.txt is accessible at /robots.txt
- [ ] sitemap.xml is accessible at /sitemap.xml
- [ ] Custom domain DNS is pointing correctly
- [ ] Build process completes without warnings
- [ ] All environment variables are set on production

### Post-Launch Monitoring

- [ ] Monitor error logs
- [ ] Check Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Check analytics data
- [ ] Monitor uptime

## 🔧 Environment Variables Needed

Create `.env.local` in project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_ENVIRONMENT=production
```

## 📋 Deployment Commands

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Final Checks

- [ ] All features work correctly
- [ ] No console errors or warnings
- [ ] Performance metrics are acceptable
- [ ] Accessibility audit passes
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete
- [ ] Security headers configured
- [ ] Error tracking integrated
- [ ] Analytics configured

## 📞 Contact Information Verification

- [ ] Phone number works: +91 91488 25040
- [ ] Email works: admin@hitechit.com
- [ ] Phone number works: +91 96635 54608
- [ ] Email works: nihal@hitechit.com
- [ ] Company address is correct

## 💾 Backup & Version Control

- [ ] Code is committed to GitHub
- [ ] Production build is tested locally
- [ ] Environment variables are NOT committed
- [ ] Latest code is pushed to main branch

---

Created: 2026-05-24
Ready for Production Review
