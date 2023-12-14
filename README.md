# Candour

#### Live URL: [Click Here](https://candour-service.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

## Introduction

At Candour, we are here to help with your IT challenges, providing simple solutions across domains like Data Analytics, Cloud Services, Managed IT Services, and Software Development. We don't just offer services; we create experiences that drive your business towards exponential growth and robust digital transformation. Let's work together to build and grow your business.

## Services

Below are the key services Candour offers:

- **Software Development:** Creating platforms that resonate with users and meet evolving business needs is crucial in a world dominated by applications and software.
- **Cloud Services:** Cloud Services are a cornerstone of our offerings. With the digital landscape evolving rapidly, we've immersed ourselves in mastering platforms like AWS, MS Azure, and GCP.
- **Managed IT Services:** Managed IT Services form a pivotal segment of our suite of offerings. In an era where technology is intertwined with every facet of business operations, having a reliable IT backbone is paramount.
- **Data & Analytics:** Data Management and Data Analytics are at the heart of modern decision-making. With the vast amount of information generated daily, having a structured approach to managing and interpreting this data is essential.

## Technologies Used

List of technologies, frameworks, and libraries used in this project.

<div style="display: flex; justify-content: center; align-items: baseline; gap: 30px; margin-bottom: 40px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="100" height="100">
  <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Vite" width="100" height="100">
  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS" width="100" height="100">
  <img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" alt="React Query" width="100" height="100">
  <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="Framer Motion" width="100" height="100">
  <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="GSAP width="100" height="100">
</div>

### This `React` project is initialized using `Vite` as the build tool, and the styling is implemented with `TailwindCSS`. For smoot experience, animations are powered by `GSAP` and `Framer Motion`.

## Installation

To run this project locally, follow these steps:

- ### Clone the Repository

Next, clone your repository locally by running:

```bash
git clone https://github.com/your-username/eazyswap-widget.git
```

- ### Create a `.env.local` file

Navigate to the project's root directory and create a new `.env.local` file:

```bash
cd candour
touch .env.local
```

- ### Edit the `.env` File

Open the .env file in a text editor of your choice and add the necessary environment variables:

```ini
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

- ## Folder Structure

  ```
  project-root/
  │
  ├── public/
  │ ├── android-chrome-192x192.png
  │ ├── android-chrome-512x512.png
  │ ├── apple-touch-icon.png
  │ ├── favicon-16x16.png
  │ ├── favicon-32x32.png
  │ ├── favicon.ico
  │ ├── site.webmanifest
  │ └── ...
  │
  ├── src/
  │ ├── assets/
  │ │ ├── about/
  │ │ ├── blog/
  │ │ ├── contact/
  │ │ ├── global/
  │ │ ├── home/
  │ │ ├── services/
  │ │ ├── work/
  │ │ └── ...
  │ ├── components/
  │ │ ├── HereToHelp.jsx
  │ │ ├── InputField.jsx
  │ │ ├── PrimaryButton.jsx
  │ │ ├── RenderMarkdown.jsx
  │ │ └── ...
  │ ├── constants/
  │ │ ├── assets.js
  │ │ ├── BLogPostContent.js
  │ │ ├── NavItems.js
  │ │ ├── ServicesContent.js
  │ │ ├── WorkContent.js
  │ │ └── ...
  │ ├── containers/
  │ │ ├── About/
  │ │ ├── Blog/
  │ │ ├── Contact/
  │ │ ├── Home/
  │ │ ├── Layout/
  │ │ ├── NotFound/
  │ │ ├── Services/
  │ │ ├── Work/
  │ │ └── ...
  │ ├── hooks/
  │ │ ├── useDocumentTitle.js
  │ │ ├── useModal.jsx
  │ │ └── ...
  │ ├── pages/
  │ │ ├── AboutPage.jsx
  │ │ ├── BlogPage.jsx
  │ │ ├── BlogPostPage.jsx
  │ │ ├── ContactPage.jsx
  │ │ ├── ErrorPage.jsx
  │ │ ├── HomePage.jsx
  │ │ ├── ServicesPage.jsx
  │ │ ├── WorkPage.jsx
  │ │ ├── WorkProjectsPage.jsx
  │ │ └── ...
  │ ├── routes/
  │ │ ├── Routes.jsx
  │ │ └── ...
  │ ├── utils/
  │ │ ├── AnimatedLogo.jsx
  │ │ ├── ContactUsAnimation.js
  │ │ ├── Sent.jsx
  │ │ ├── SmoothScroll.jsx
  │ │ └── ...
  │ ├── App.jsx
  │ ├── index.css
  │ ├── mian.jsx
  │ └── ...
  │
  ├── .env.local
  ├── .eslintrc.cjs
  ├── .gitignore
  ├── index.html
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── README.md
  ├── tailwind.config.js
  ├── vercel.json
  ├── vite.config.js
  └── ...
  ```

### Let's go through each directory and file and describe their purpose:

# Project Structure

## `public/`

Contains static assets publicly accessible to the web, such as images and icons.

- `android-chrome-192x192.png` and `android-chrome-512x512.png`: Icons for Android devices.
- `apple-touch-icon.png`: Icon for Apple devices.
- `favicon-16x16.png`, `favicon-32x32.png`, and `favicon.ico`: Various sizes of the favicon.
- `site.webmanifest`: Metadata for installing the web app on a mobile device.

## `src/`

The core of the application, housing various source code components.

- **`assets/`**: This directory holds all the assets used in this project, assets are arranged base on their page.

- **`components/`**: Reusable React components used in the projct. It include `HereToHelp.jsx`, `InputField.jsx`, `PrimaryButton.jsx` and `RenderMarkdown.jsx`

- **`constants/`**: Constants used throughout the application, including data for `assets`, `blog posts`, `navigation items`, `services` and `work content`.

- **`containers/`**: React components acting as containers for different pages or sections of the site.

  - `About/`, `Blog/`, `Contact/`, `Home/`, `Layout/`, `NotFound/`, `Services/`, `Work/`, etc.

- **`hooks/`**: Custom React hooks like `useDocumentTitle.js` and `useModal.jsx`.

- **`pages/`**: React components representing different pages of the site.

  - `AboutPage.jsx`, `BlogPage.jsx`, `BlogPostPage.jsx`, `ContactPage.jsx`, `ErrorPage.jsx`, `HomePage.jsx`, `ServicesPage.jsx`, `WorkPage.jsx`, `WorkProjectsPage.jsx`, etc.

- **`routes/`**: Contains the routing configuration, such as `Routes.jsx`.

- **`utils/`**: Utility functions and components like `AnimatedLogo.jsx`, `ContactUsAnimation.js`, `Sent.jsx`, `SmoothScroll.jsx`, etc.

- **`App.jsx`**: The main component representing the entire application.

- **`index.css`**: Stylesheet for the application.

- **`main.jsx`**: Entry point for rendering the React app.

## Root Files

- `.env.local`: Local environment variables.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.
- `index.html`: HTML template for the application.
- `jsconfig.json`: Configuration file for JavaScript projects in Visual Studio Code.
- `package-lock.json`: Lock file for Node.js dependencies.
- `package.json`: Manifest file for Node.js projects, specifying project details and dependencies.
- `postcss.config.js`: Configuration file for PostCSS, a tool for transforming styles with JS plugins.
- `README.md`: Documentation for the project.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vercel.json`: Configuration for Vercel, a cloud platform for static sites and serverless functions.
- `vite.config.js`: Configuration file for Vite, a build tool for modern web projects.

## Contact

For any inquiries or feedback, please submit a form via [our website](https://candour-service.vercel.app/contact-us).
