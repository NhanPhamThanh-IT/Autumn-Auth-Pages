<div align="center">

# Autumn Auth Pages

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) ![Vite](https://img.shields.io/badge/Vite-7.1.7-blueviolet?logo=vite) ![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Node](https://img.shields.io/badge/node-%3E=18.0.0-green?logo=node.js)

A beautiful, modern authentication page set built with **React** and **Vite**. This project features animated autumn-themed backgrounds, responsive design, and clean, reusable authentication forms for login and signup. Available in both **JavaScript** and **TypeScript** versions.

</div>

<div align="justify">

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Advanced Usage](#advanced-usage)
- [Screenshots & GIFs](#screenshots--gifs)
- [Contributing](#contributing)
- [Credits](#credits)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Changelog](#changelog)
- [Related Projects](#related-projects)
- [Security](#security)
- [Contact](#contact)
- [License](#license)

## Features

- 🍁 **Animated Autumn Background**: Immersive, animated leaves and themed illustrations.
- 🔒 **Authentication Forms**: Login and Signup pages with reusable form components.
- ⚛️ **React 19**: Built with the latest React and React Router.
- 📘 **TypeScript Support**: Full TypeScript implementation with type definitions.
- ⚡ **Vite**: Fast development and build tooling.
- 🎨 **Modern CSS**: Glassmorphism, responsive layouts, and smooth animations.
- 🧩 **Component-Based**: Clean separation of UI and logic for easy extension.
- 🔀 **Dual Language Support**: Choose between JavaScript and TypeScript versions.

## Demo

![Screenshot](./src/JavaScript/assets/background.jpg)  
_Example background. See the app for full animation and UI._

## Screenshots & GIFs

<div align="center">
<img src="./src/JavaScript/assets/background.jpg" width="400" alt="Autumn Auth Pages Screenshot" />
<br/>
<em>Login and Signup forms with animated autumn background</em>
</div>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Choose Your Version

This project is available in two versions:

- **JavaScript**: Located in the `JavaScript/` folder
- **TypeScript**: Located in the `TypeScript/` folder (with full type definitions)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NhanPhamThanh-IT/Autumn-Auth-Pages.git
   cd Autumn-Auth-Pages
   ```

2. **Navigate to your preferred version:**

   For JavaScript version:

   ```sh
   cd JavaScript
   ```

   For TypeScript version:

   ```sh
   cd TypeScript
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```sh
npm run build
```

**Note:**

- JavaScript version builds to `dist/` folder
- TypeScript version compiles TypeScript first, then builds to `dist/` folder

The output will be in the `dist/` folder.

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
Autumn-Auth-Pages/
├── JavaScript/                # JavaScript implementation
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images (leaves, background, etc.)
│   │   ├── components/
│   │   │   ├── Background.jsx # Animated autumn background
│   │   │   └── Forms/
│   │   │       └── AuthForm.jsx # Reusable authentication form
│   │   ├── pages/
│   │   │   ├── Login.jsx      # Login page
│   │   │   └── Signup.jsx     # Signup page
│   │   ├── routes/
│   │   │   └── index.jsx      # React Router routes
│   │   ├── styles/            # CSS files
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── index.html             # HTML template
│   ├── package.json           # JS project metadata and scripts
│   └── vite.config.js         # Vite configuration
├── TypeScript/                # TypeScript implementation
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images (leaves, background, etc.)
│   │   ├── components/
│   │   │   ├── Background.tsx # Animated autumn background
│   │   │   └── Forms/
│   │   │       └── AuthForm.tsx # Reusable authentication form
│   │   ├── pages/
│   │   │   ├── Login.tsx      # Login page
│   │   │   └── Signup.tsx     # Signup page
│   │   ├── routes/
│   │   │   └── index.tsx      # React Router routes
│   │   ├── styles/            # CSS files
│   │   ├── types/             # TypeScript type definitions
│   │   │   ├── auth.ts        # Authentication types
│   │   │   ├── common.ts      # Common types
│   │   │   ├── event.ts       # Event types
│   │   │   └── input.ts       # Input field types
│   │   ├── App.tsx            # Main app component
│   │   └── main.tsx           # Entry point
│   ├── index.html             # HTML template
│   ├── package.json           # TS project metadata and scripts
│   ├── tsconfig.json          # TypeScript configuration
│   ├── tsconfig.app.json      # App-specific TS config
│   ├── tsconfig.node.json     # Node-specific TS config
│   └── vite.config.ts         # Vite configuration
├── LICENSE                    # MIT License
└── README.md                  # Project documentation
```

## Usage

- **Login Page:** `/login`
- **Signup Page:** `/signup`
- The root path `/` and any unknown routes redirect to `/login`.

## Customization

- **Background & Theme:**  
  Edit `src/components/Background.jsx` (JS) or `src/components/Background.tsx` (TS) and images in `src/assets/` to change the look and feel.
- **Form Fields:**  
  Modify the `fields` prop in `Login.jsx/tsx` and `Signup.jsx/tsx` to add or remove form fields.
- **Styling:**  
  Update CSS in `src/styles/` for custom colors, fonts, or layout.
- **TypeScript Types:**  
  When using the TypeScript version, modify types in `src/types/` to match your data structures.

## Advanced Usage

- **Routing:** Easily add more pages by editing `src/routes/index.jsx` (JS) or `src/routes/index.tsx` (TS) and creating new components in `src/pages/`.
- **Form Validation:** Integrate libraries like [Formik](https://formik.org/) or [React Hook Form](https://react-hook-form.com/) for advanced validation.
- **API Integration:** Connect your backend by replacing the `console.log` in form submit handlers with real API calls (e.g., using [axios](https://axios-http.com/)).
- **Theming:** Swap out assets in `src/assets/` for a different seasonal or brand look.
- **TypeScript Benefits:** When using the TypeScript version, enjoy full IntelliSense, type checking, and better refactoring support.
- **Type Safety:** Extend the existing type definitions in `src/types/` to match your backend API structure.

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and passes linting (`npm run lint`).

## Credits

- **Author:** [NhanPhamThanh-IT](https://github.com/NhanPhamThanh-IT)
- **Inspiration:** Autumn themes, glassmorphism UI, and modern web design trends.
- **Assets:** All images and icons are included for demo purposes. Replace with your own for production use.

## FAQ

**Q: Can I use this for my own project?**  
A: Yes! This project is MIT licensed. See [LICENSE](./LICENSE).

**Q: How do I deploy this?**  
A: After building (`npm run build`), deploy the `dist/` folder to any static hosting (Vercel, Netlify, GitHub Pages, etc).

**Q: How do I add social login?**  
A: Add new buttons and handlers in `AuthForm.jsx` (JS) or `AuthForm.tsx` (TS) and connect to your OAuth provider.

**Q: What's the difference between the JavaScript and TypeScript versions?**  
A: Both versions have identical functionality and UI. The TypeScript version adds type safety, better IDE support, and compile-time error checking.

**Q: Can I use TypeScript?**  
A: Yes! The project includes a complete TypeScript implementation in the `TypeScript/` folder with full type definitions and type safety.

---

## Troubleshooting

- **Port already in use:**
  - Stop other dev servers or change the port in `vite.config.js`.
- **Images not loading:**
  - Check the paths in `src/assets/` and ensure the files exist.
- **CSS not applying:**
  - Make sure you are importing the correct CSS files in your components.
- **Router not working:**
  - Ensure you are using `<BrowserRouter>` in `main.jsx` (JS) or `main.tsx` (TS) and your routes are correct.
- **TypeScript errors:**
  - Check that all type imports are correct and types match the expected interfaces in `src/types/`.
- **Build issues with TypeScript:**
  - Run `npm run lint` to check for TypeScript errors before building.

If you encounter other issues, please open an issue or pull request.

## Changelog

- **v2.0.0** (2025-09-24): Added full TypeScript support with type definitions. Project now includes both JavaScript and TypeScript versions.
- **v1.0.0** (2025-08-12): Initial release with animated background, login/signup forms, and full documentation.

## Related Projects

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Glassmorphism UI Inspiration](https://hype4.academy/tools/glassmorphism-generator)

## Security

If you discover a security vulnerability, please open an issue or contact the author directly via GitHub.

## Contact

- **Author:** [NhanPhamThanh-IT](https://github.com/NhanPhamThanh-IT)
- **Email:** [ptnhanit230104@gmail.com](mailto:ptnhanit230104@gmail.com)

## Scripts

**Note:** Navigate to either `JavaScript/` or `TypeScript/` folder first, then run:

- `npm run dev` – Start development server with hot reload.
- `npm run build` – Build for production (TypeScript version includes compilation step).
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint on the codebase.

## Dependencies

### JavaScript Version

- [React](https://react.dev/) ^19.1.1
- [React DOM](https://react.dev/) ^19.1.1
- [React Router DOM](https://reactrouter.com/) ^7.8.0
- [Vite](https://vitejs.dev/) ^7.1.2
- [ESLint](https://eslint.org/) ^9.33.0

### TypeScript Version

- [React](https://react.dev/) 19.1.1
- [React DOM](https://react.dev/) 19.1.1
- [React Router DOM](https://reactrouter.com/) 7.9.1
- [TypeScript](https://www.typescriptlang.org/) ~5.8.3
- [Vite](https://vitejs.dev/) 7.1.7
- [ESLint](https://eslint.org/) 9.36.0
- [TypeScript ESLint](https://typescript-eslint.io/) 8.44.0

## License

This project is licensed under the [MIT License](./LICENSE).

---

</div>

<div align="center">

_Feel free to further personalize this README for your needs! Let me know if you want to add badges, deployment instructions, or more details._

</div>
