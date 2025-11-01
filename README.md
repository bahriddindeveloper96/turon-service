# ServiceHub - Professional Services Platform

Modern creative platform similar to hh.ru and fl.ru for service providers, built with Vue.js 3 and Vite.

## Features

- 🎨 Modern and creative design with TailwindCSS
- 📱 Fully responsive layout
- 🔍 Advanced search and filtering
- 👥 Specialist profiles and portfolios
- 📊 Category-based service organization
- ⭐ Rating and review system
- 🌐 Multi-language support (Uzbek, Russian, English)

## Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Icons**: Lucide Vue Next
- **UI Components**: Headless UI

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   └── SpecialistCard.vue
├── views/
│   ├── Home.vue
│   ├── Categories.vue
│   ├── CategoryDetail.vue
│   └── SpecialistDetail.vue
├── stores/
│   └── services.js
├── router/
│   └── index.js
├── App.vue
├── main.js
└── style.css
```

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Service Categories

The platform includes 8 main service categories:

1. **IT va Dasturlash** - Web development, mobile apps, software development
2. **Dizayn va Kreativ** - Graphic design, branding, creative services
3. **Marketing va SMM** - Digital marketing, social media, advertising
4. **Yozuv va Tarjima** - Content writing, translation, editing
5. **Video va Audio** - Video editing, audio production, multimedia
6. **Biznes va Konsalting** - Business consulting, strategy, management
7. **Ta'lim va Treninglar** - Online tutoring, training, coaching
8. **Texnik Xizmatlar** - Technical support, repairs, setup

## Key Pages

- **Home** (`/`) - Hero section, featured categories, top specialists
- **Categories** (`/categories`) - All service categories with search
- **Category Detail** (`/category/:slug`) - Specialists in specific category
- **Specialist Detail** (`/specialist/:id`) - Individual specialist profile

## Features Implementation

### Search & Filtering
- Real-time search across specialists and categories
- Filter by price range, rating, experience
- Sort by various criteria
- Subcategory filtering

### Specialist Profiles
- Detailed profiles with portfolios
- Skills and experience showcase
- Rating and review system
- Availability status
- Contact information

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Progressive enhancement

## Customization

### Colors
The platform uses a primary blue color scheme. You can customize colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
Update service categories and specialists data in `src/stores/services.js`.

### Styling
Global styles are defined in `src/style.css` using TailwindCSS utilities.

## Development

The project uses Vue 3 Composition API for better code organization and TypeScript-like development experience.

### Adding New Features

1. Create new components in `src/components/`
2. Add new pages in `src/views/`
3. Update routing in `src/router/index.js`
4. Manage state in `src/stores/`

### Code Style

- Use Composition API for new components
- Follow Vue 3 best practices
- Use TailwindCSS for styling
- Keep components small and focused

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
