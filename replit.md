# Portfolio Application - Replit Configuration

## Overview

This is a full-stack portfolio application built with a modern web stack featuring a React frontend, Express backend, and PostgreSQL database. The application showcases a cloud engineer's portfolio with sections for about, skills, projects, and contact information. It uses shadcn/ui components for a polished UI and includes a contact form with backend processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints under `/api` prefix
- **Error Handling**: Centralized error middleware with proper status codes
- **Logging**: Custom request/response logging middleware

### Data Storage
- **Database**: PostgreSQL (configured for use with Neon)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schema with Zod validation
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contacts Table**: Contact form submissions (id, firstName, lastName, email, subject, message, createdAt)
- **Validation**: Drizzle Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin)

### Frontend Pages
- **Portfolio Page**: Main landing page with sections for hero, about, skills, projects, and contact
- **404 Page**: Custom not found page with helpful messaging

### UI Components
- **Navigation**: Fixed header with smooth scrolling and theme toggle
- **Hero Section**: Profile image, introduction, and call-to-action buttons
- **About Section**: Personal information and social media links
- **Skills Section**: Categorized skill display with progress indicators
- **Projects Section**: Featured project showcase with images and descriptions
- **Contact Section**: Form with validation and toast notifications
- **Footer**: Social links and copyright information

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **Server Processing**: Express routes handle requests with validation and error handling
3. **Database Operations**: Drizzle ORM manages database interactions with type safety
4. **Response Handling**: Structured JSON responses with proper error codes
5. **State Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Framework Dependencies
- React ecosystem: react, react-dom, @vitejs/plugin-react
- Backend: express, drizzle-orm, @neondatabase/serverless
- Validation: zod, drizzle-zod, @hookform/resolvers

### UI and Styling
- Tailwind CSS with PostCSS processing
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- Class variance authority for component variants

### Development Tools
- TypeScript for type safety across the stack
- TSX for development server with hot reload
- ESBuild for production bundling
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Vite dev server with HMR and custom middleware
- Express server with request logging and error handling
- Environment variables for database connection
- Replit-specific configurations for cloud development

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild compiles server code to `dist/index.js`
- Static file serving for production assets
- Database migrations managed via Drizzle Kit

### Database Configuration
- PostgreSQL connection via environment variable `DATABASE_URL`
- Drizzle migrations stored in `./migrations` directory
- Schema definition in shared folder for type consistency
- Connection pooling through Neon serverless driver

### Key Architectural Decisions

1. **Monorepo Structure**: Shared schema and types between client and server for consistency
2. **Type Safety**: End-to-end TypeScript with Zod validation for runtime safety
3. **Component Architecture**: Modular shadcn/ui components for maintainability
4. **Theme System**: CSS variables with light/dark mode support
5. **Development Experience**: Hot reload, error overlays, and Replit integration
6. **Database Strategy**: Serverless PostgreSQL for scalability and ease of deployment

The application follows modern full-stack patterns with emphasis on type safety, developer experience, and production readiness.