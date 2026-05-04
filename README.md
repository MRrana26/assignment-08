# Tiles Gallery

## Project Name
Tiles Gallery

## Purpose
Tiles Gallery is a  web application that allows users to browse, search, and view  types of tiles. Users can register, log in, and manage  profiles.

## Live URL
View Live Project: https://assignment-08-pi.vercel.app
## Github Link
https://github.com/MRrana26/assignment-08

## Key Features

### Authentication
- User registration with name, email, password, and profile image URL
- User login with email and password
- Google social login integration


### Home Page
- Banner slider with "Discover Your Perfect Aesthetic" heading
- Browse Now button linking to All Tiles page
- Marquee showing announcements and updates
- Featured Tiles section displaying top 4 tiles

### All Tiles Page
- Search functionality to filter tiles by title
- Grid layout showing all tiles with images, titles, and prices
- View Details button for each tile

### Tile Details Page
- High-resolution tile preview image
- Detailed information including title, description, category, material, dimensions, price, and stock status


### My Profile Page
- View user profile information
- Update profile name and image URL
- Logout functionality

### Navigation
- Responsive navbar with desktop and mobile menu
- Conditional rendering based on login status
- Shows Sign Up/Sign In buttons for guests
- Shows user avatar, name, and logout for logged-in users

### Responsive Design
- Fully responsive 



### UI Components
- **@heroui/react**: UI component library
- **@heroui/icons**: Icon set for HeroUI

### Authentication
- **better-auth**: Authentication library
- **mongodb**: MongoDB driver for database operations
- **better-auth/adapters/mongodb**: MongoDB adapter for Better Auth

### use
- **swiper.js**: Touch slider component for banner carousel
- **swiper/css**: Swiper styles
- **swiper/css/navigation**: Swiper navigation styles
- **react-fast-marquee**: Scrolling text component
- **@gravity-ui/icons**




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
