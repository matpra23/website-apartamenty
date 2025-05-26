# Apartamenty Łeba - Website Project

[Visit the Website](https://morzeiplaza.com/)

## Project Overview
A modern, responsive website showcasing rental apartments in Łeba. The project includes an interactive landing page with a photo carousel and dedicated galleries for each apartment.

## Main Features

### Home Page
- Interactive image slider featuring the building and apartment interiors
- Responsive contact panels with dynamic positioning
- Button linking to tourist attractions (opens in a new tab)
- Navigation to individual apartment galleries
- Fully optimized for mobile devices
- Smooth animations and transitions

### Photo Galleries
- Separate galleries for Apartment Morze and Apartment Plaża
- Hover zoom effect on photos
- Interactive return button to the homepage
- Responsive design for various screen sizes
- Optimized modal viewer for image display

### Reviews Section
- Dedicated page for customer reviews
- Responsive layout with styled components
- Optimized loading and presentation

## Implementation Details

### Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript
- Flickity.js (lightweight carousel with performance optimizations)

### Project Structure

```
website-apartamenty/
├── index.html
├── style.css
├── index.js
├── galeriamorze/
│   ├── index.html
│   ├── galerymorze.css
│   ├── script.js
│   └── morze-zdjecia/
├── galeriaplaza/
│   ├── index.html
│   ├── galeryplaza.css
│   ├── script.js
│   └── plaza-zdjecia/
├── opinie/
│   ├── opinie.html
│   ├── opinie.css
│   └── script.js
└── zdjecia/
├── glowna/
└── opinie/
```

## Code Optimization
- Use of CSS variables for consistent colors and animation effects
- Grouped selectors for better performance
- Updated CSS syntax
- Removal of unnecessary vendor prefixes
- Media query optimization
- Modular and maintainable structure

## Performance Enhancements
- Responsive images with appropriate attributes
- Fast loading due to optimized CSS and assets
- Core Web Vitals improvements
- Reduced First Contentful Paint (FCP)
- Browser cache optimization

## SEO Optimization
- Clean, semantic HTML structure
- SEO-friendly URLs
- Optimized meta tags for better indexing
- Image and asset compression

## Security Measures
- Safe external linking (`rel="noopener noreferrer"`)
- Secure opening of external links in new tabs
- Protection against XSS attacks
- Clickjacking prevention
- Content Security Policy (CSP) implementation

## Cross-Browser Compatibility
- Support for modern browsers
- Fallbacks for older browser versions
- Responsive across all screen sizes and resolutions
