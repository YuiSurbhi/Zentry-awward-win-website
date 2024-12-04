# Zentry - Award-Winning Website

Welcome to [Zentry](https://zentry-awward-win-website.vercel.app/), a website dedicated to the YouTube channel [JavaScript Mastery](https://www.youtube.com/watch?v=zA9r5zTllx4&t=8808s) that takes JavaScript to the next level. This project features advanced UI elements, custom animations, and smooth interactions, showcasing the power of React, Tailwind CSS, and SVG filters for modern web development.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Overview

Zentry is a visually engaging website that highlights advanced UI and UX patterns, including custom clip paths, animations, and smooth hover effects. The website is built using React and Tailwind CSS to ensure responsiveness and a modern design system. The site is ideal for showcasing portfolios, creative work, or any project where high-quality visuals and interactions are essential.

## Features

- **Custom Animations**: Includes animated elements such as indicator lines and dot wobble effects.
- **Responsive Design**: The site is optimized for all screen sizes, from mobile to desktop, using Tailwind CSS's mobile-first approach.
- **Clip Paths**: Stylish clip-path effects are applied to images for unique visual design.
- **SVG Filters**: Custom filters like Gaussian blur to add a soft visual touch.
- **Floating Navigation**: Animated navigation button that responds to hover effects.
- **Hero Section**: A dynamic hero section with a bold heading and styled typography.
- **Bento Grid Layout**: Flexible and responsive grid layout for content display.

## Tech Stack

- **Frontend**:
  - [React](https://reactjs.org/): JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
  - [SVG Filters](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter): Used for applying blur and color effects on images.
  - [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face): For custom fonts like "Zentry."

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/YuiSurbhi/zentry-award-winning-website.git
2. Navigate into the project directory:

   ```bash
   cd zentry-award-winning-website
   
3. Install the dependencies:

   ```bash
   npm install
   
4. Run the development server:

   ```bash
   npm start
Open your browser and go to http://localhost:3000 to see the website.

## Usage
The website is fully responsive and can be viewed on any device.
Customize the images and text content in the src folder to personalize the website.
Update the SVG filters or animations in the index.css file for unique effects.
The project uses Tailwind CSS, so you can add your own styles by editing the tailwind.config.js or creating custom classes in the index.css.

## Folder Structure
Here’s a quick overview of the folder structure:

  ```graphql
  zentry-award-winning-website/
  ├── public/
  │   ├── audio/            # Store audio files
  |   ├── fonts/            # Store fonts
  |   ├── img/              # Store images
  |   ├── videos/           # Store videos
  |   └── my-logo.png       # Logo of the website  
  ├── src/
  │   ├── assets/           # Static assets
  │   ├── components/       # React components like Button, ImageClipBox
  │   ├── App.jsx           # Main App component
  |   ├── index.css         # Custom CSS files
  │   └── main.jsx          # Entry point for React app
  ├── gitignore             # Specifies files to be ignored by Git
  ├── index.html            # Main HTML file
  ├── package.json          # Project metadata and dependencies
  ├── README.md             # This file
  ├── tailwind.config.js    # Tailwind CSS configuration file
  └── vite.config.js
  ```
## Contributing
We welcome contributions to this project! Here’s how you can help:

1. Fork the repository.<br />
2. Create a new branch (`git checkout -b feature-branch`).<br />
3. Make your changes.<br />
4. Commit your changes (`git commit -m 'Add new feature'`).<br />
5. Push to the branch (`git push origin feature-branch`).<br />
6. Open a pull request to the main branch.<br />
---

Thank you for exploring Zentry. I hope this project inspires you to build your own Metagame website!
