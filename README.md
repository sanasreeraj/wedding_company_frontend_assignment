# Quiz Application

A modern, interactive quiz application built with Next.js, React, and TypeScript. This application features a beautiful glassmorphism design with smooth animations and an intuitive user interface.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.0.8](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React 19.2.1](https://react.dev/) - Modern React with latest features
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.23.26](https://www.framer.com/motion/) - Production-ready motion library
- **Fonts**: 
  - [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) - Serif font for headings
  - [Manrope](https://fonts.google.com/specimen/Manrope) - Sans-serif font for body text
  - [Inter](https://fonts.google.com/specimen/Inter) - Fallback sans-serif font
- **Icons**: Custom SVG icons for navigation
- **Image Optimization**: Next.js Image component for optimized asset loading

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Git**: For version control (optional)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd quiz-app
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

### 5. Run Linting

```bash
npm run lint
```

## ✨ Key Features Implemented

### 1. **Interactive Quiz Interface**
   - Four quiz questions with multiple-choice options
   - Real-time answer selection with visual feedback
   - Smooth transitions between questions using Framer Motion

### 2. **Progress Tracking**
   - Visual progress indicator showing completion status
   - Individual progress bars for each question
   - Animated progress updates

### 3. **Navigation System**
   - Previous/Next buttons for question navigation
   - Disabled states for first/last questions
   - Submit button appears on the final question

### 4. **Score Display**
   - Animated score counter with vertical rolling effect
   - Percentage-based scoring system
   - "Start Again" button appears after score animation completes

### 5. **Modern UI/UX Design**
   - Glass morphism effect with layered cards
   - Gradient backgrounds with blur effects
   - Responsive design for mobile and desktop
   - Smooth hover and selection animations
   - Custom gradient text effects

### 6. **Performance Optimizations**
   - React hooks optimization (useMemo, useCallback)
   - Next.js Image optimization for assets
   - Code splitting and lazy loading
   - Efficient re-rendering with proper dependency arrays

### 7. **Accessibility Features**
   - Semantic HTML structure
   - ARIA attributes for interactive elements
   - Keyboard navigation support
   - Screen reader friendly labels

## 📁 Project Structure

```
quiz-app/
├── public/
│   ├── navigation/          # SVG navigation icons
│   │   ├── bwd.svg          # Backward arrow
│   │   └── fwd.svg          # Forward arrow
│   ├── bol.svg              # Best of Luck SVG
│   └── paw.gif              # Animated paw GIF
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with fonts
│   │   ├── page.tsx         # Main quiz page component
│   │   ├── globals.css      # Global styles
│   │   ├── QuizPage.tsx     # Quiz interface component
│   │   ├── ScorePage.tsx    # Score display component
│   │   ├── QuestionCard.tsx # Question display component
│   │   ├── Options.tsx      # Answer options component
│   │   ├── Navigation.tsx   # Navigation buttons component
│   │   ├── ProgressSlider.tsx # Progress indicator component
│   │   └── GifBox.tsx       # Decorative GIF component
│   ├── types/               # TypeScript type definitions
│   │   └── quiz.ts          # Quiz-related types
│   ├── constants/           # Application constants
│   │   └── questions.ts     # Quiz questions data
│   └── lib/                 # Utility functions
│       └── utils.ts         # Helper functions
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Dark**: `#15313D`
- **Primary Light**: `#3CABDA`
- **Background Gradient**: `#BECFEE → #71C6E2 → #D9F4FA → #BECFEE`
- **Card Background**: `#F4FDFF`
- **Accent Colors**: `#C6E9F7`, `#E5F8FF`, `#96E5FF`

### Typography
- **Headings**: DM Serif Display (Italic) - Gradient text effect
- **Body Text**: Manrope (Medium/Semibold)
- **Fallback**: Inter

### Animations
- Page transitions with direction-based animations
- Score counter with vertical rolling effect
- Smooth hover effects on interactive elements
- Progress bar animations

## 🔧 Code Quality & Best Practices

### 1. **TypeScript Implementation**
   - Strict type checking enabled
   - Comprehensive type definitions
   - Type-safe component props and functions

### 2. **Component Architecture**
   - Modular, reusable components
   - Separation of concerns
   - Single Responsibility Principle

### 3. **Performance Optimizations**
   - React.memo for component memoization
   - useMemo for expensive calculations
   - useCallback for function memoization
   - Optimized re-renders with proper dependencies

### 4. **Code Organization**
   - Centralized type definitions
   - Constants separated from logic
   - Utility functions in dedicated files
   - Clear file naming conventions

### 5. **Error Handling**
   - Null checks for data safety
   - Boundary conditions handled
   - Graceful fallbacks

### 6. **Accessibility**
   - Semantic HTML elements
   - ARIA attributes where needed
   - Keyboard navigation support
   - Alt text for images

## 📝 Assumptions Made

1. **Question Format**: All questions follow a consistent format with exactly 3 options each
2. **Scoring System**: Each question is worth equal points (25% each for 4 questions)
3. **User Flow**: Users must answer all questions before submitting
4. **Browser Support**: Modern browsers with ES6+ support
5. **Screen Sizes**: Responsive design optimized for mobile (320px+) and desktop (1024px+)
6. **Assets**: SVG and GIF files are provided in the public directory
7. **No Backend**: Application is frontend-only, no API calls or data persistence

## ⏱️ Time Spent on Assignment

- **Initial Setup & Structure**: ~1 hour
- **UI/UX Implementation**: ~4 hours
  - Design matching and refinement
  - Component creation
  - Styling and animations
- **Code Quality Improvements**: ~2 hours
  - TypeScript type definitions
  - Code optimization
  - Folder structure organization
- **Testing & Refinement**: ~1 hour
  - Bug fixes
  - Performance optimization
  - Responsive design adjustments
- **Documentation**: ~1 hour
  - README.md creation
  - Code comments
  - Type definitions

**Total Estimated Time**: ~9 hours

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Production Dependencies
- `next`: 16.0.8
- `react`: 19.2.1
- `react-dom`: 19.2.1
- `framer-motion`: 12.23.26
- `@heroicons/react`: 2.2.0

### Development Dependencies
- `typescript`: ^5
- `@types/node`: ^20
- `@types/react`: ^19
- `@types/react-dom`: ^19
- `tailwindcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 16.0.8



## 👤 Author

Developed by Sana Sreeraj as part of a frontend development assignment.

