# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm install --legacy-peer-deps  # Install dependencies (use legacy flag for peer dep conflicts)
```

## Architecture Overview

This is a **Next.js 14 portfolio website** using App Router, built as a single-page application with static content. The architecture follows a component-driven approach with no external data fetching or state management complexity.

### Technology Stack
- **Next.js 14.2.25** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** with PostCSS (using `@tailwindcss/postcss` plugin)
- **shadcn/ui** components built on Radix UI primitives
- **Geist font** for typography

### Component Structure
The app uses a flat component architecture where the main page (`app/page.tsx`) imports and composes portfolio sections:
- Each section component (Hero, Skills, Projects, Experience, Blog, Philosophy, Contact) is self-contained with its own static data
- UI components in `/components/ui/` are shadcn/ui components using Radix UI
- Components use the `asChild` pattern for composition and `class-variance-authority` for variant styling

### Design System
- **Color scheme**: Professional navy backgrounds with green accents
- **CSS variables**: Defined in `app/globals.css` using HSL values for theming
- **Dark mode**: Supported via Tailwind's class strategy
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Key Configuration Notes

### PostCSS Configuration
The `postcss.config.mjs` must use `@tailwindcss/postcss` instead of `tailwindcss` directly:
```javascript
plugins: {
  '@tailwindcss/postcss': {},
}
```

### Path Aliases
TypeScript is configured with `@/*` path alias mapping to the project root for clean imports.

### shadcn/ui Components
Components use the "new-york" style variant. When adding new shadcn components:
```bash
npx shadcn@latest add [component-name]
```

## Content Customization

### Personal Information Links
Update these files with actual personal information:
- `components/contact.tsx`: Email, GitHub, LinkedIn, Formspree form ID
- `components/hero.tsx`: CV link, social profiles
- `components/projects.tsx`: GitHub repository links
- Add CV PDF to `/public/cv.pdf`

### Static Data Pattern
All content is hardcoded in component files as const arrays. To update content, modify the data directly in the respective component file rather than looking for external data sources.

## Common Development Scenarios

### Running the Project
If encountering dependency conflicts, use:
```bash
npm install --legacy-peer-deps
npm run dev
```

### Adding New Sections
Create a new component in `/components/` and import it in `app/page.tsx`. Follow the existing pattern of self-contained components with embedded data.

### Modifying Styles
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes directly in components
- Theme colors: Update CSS variables in `globals.css`

## Production Deployment

### VPS Deployment (gaaus.net)
This portfolio is deployed on a Sakura VPS with nginx reverse proxy configuration.

#### Deployment Process
1. **Build the static site locally:**
   ```bash
   npm run build
   ```

2. **Deploy to VPS:**
   ```bash
   # Transfer built files to VPS
   scp -r out/ duc-portrait-sakura-vps:~/portrait/

   # SSH to VPS and start server
   ssh duc-portrait-sakura-vps
   cd ~/portrait/out
   npx serve -p 3000
   ```

#### VPS Configuration
- **Server**: Sakura VPS (Ubuntu 20.04.6 LTS)
- **Domain**: gaaus.net
- **Nginx**: Reverse proxy from gaaus.net → localhost:3000
- **SSL**: Handled by nginx configuration
- **Deployment Type**: Static site export (not Next.js server)
- **Static files**: Pre-built files served from `~/portrait/out/` directory using `serve` package

**Note**: We use static file serving instead of running Next.js server directly because:
- Lower resource usage (memory/CPU)
- Simpler deployment and maintenance
- Better performance for static content
- No need for Node.js runtime on production server

#### Server Management
```bash
# Check if server is running on port 3000
lsof -ti:3000

# Stop existing servers
pkill -f 'serve.*3000'

# Start clean server on port 3000
cd ~/portrait/out && npx serve -p 3000

# Verify deployment
curl -s gaaus.net | grep -A2 -B2 "profile_picture.jpg"
```

#### Deployment Checklist
- [ ] Build static site with `npm run build`
- [ ] Transfer `out/` directory to VPS `~/portrait/`
- [ ] Stop any existing servers on port 3000
- [ ] Start Python HTTP server on port 3000
- [ ] Verify profile image loads correctly on gaaus.net
- [ ] Clean up old deployment files and folders

#### Troubleshooting
- **Profile image not showing**: Check that `profile_picture.jpg` exists in `~/portrait/out/`
- **CSS/JS not loading**: Verify all static assets transferred correctly
- **Server conflicts**: Use `lsof -ti:3000` to check port usage
- **Old content served**: Clear browser cache or use incognito mode