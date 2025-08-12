<div align="center">

# Autumn Auth Pages

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) ![Vite](https://img.shields.io/badge/Vite-7.1.2-blueviolet?logo=vite) ![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Node](https://img.shields.io/badge/node-%3E=18.0.0-green?logo=node.js)

A beautiful, modern authentication page set built with **React** and **Vite**. This project features animated autumn-themed backgrounds, responsive design, and clean, reusable authentication forms for login and signup.

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
- ⚡ **Vite**: Fast development and build tooling.
- 🎨 **Modern CSS**: Glassmorphism, responsive layouts, and smooth animations.
- 🧩 **Component-Based**: Clean separation of UI and logic for easy extension.

## Demo

![Screenshot](./src/assets/background.jpg)  
_Example background. See the app for full animation and UI._

## Screenshots & GIFs

<div align="center">
<img src="./src/assets/background.jpg" width="400" alt="Autumn Auth Pages Screenshot" />
<br/>
<em>Login and Signup forms with animated autumn background</em>
</div>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NhanPhamThanh-IT/Autumn-Auth-Pages.git
   cd Autumn-Auth-Pages
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```sh
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
Autumn-Auth-Pages/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images (leaves, background, etc.)
│   ├── components/
│   │   ├── Background.jsx # Animated autumn background
│   │   └── Forms/
│   │       └── AuthForm.jsx # Reusable authentication form
│   ├── pages/
│   │   ├── Login.jsx      # Login page
│   │   └── Signup.jsx     # Signup page
│   ├── routes/
│   │   └── index.jsx      # React Router routes
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Usage

- **Login Page:** `/login`
- **Signup Page:** `/signup`
- The root path `/` and any unknown routes redirect to `/login`.

## Customization

- **Background & Theme:**  
  Edit `src/components/Background.jsx` and images in `src/assets/` to change the look and feel.
- **Form Fields:**  
  Modify the `fields` prop in `Login.jsx` and `Signup.jsx` to add or remove form fields.
- **Styling:**  
  Update CSS in `src/styles/` for custom colors, fonts, or layout.

## Advanced Usage

- **Routing:** Easily add more pages by editing `src/routes/index.jsx` and creating new components in `src/pages/`.
- **Form Validation:** Integrate libraries like [Formik](https://formik.org/) or [React Hook Form](https://react-hook-form.com/) for advanced validation.
- **API Integration:** Connect your backend by replacing the `console.log` in form submit handlers with real API calls (e.g., using [axios](https://axios-http.com/)).
- **Theming:** Swap out assets in `src/assets/` for a different seasonal or brand look.

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
A: Add new buttons and handlers in `AuthForm.jsx` and connect to your OAuth provider.

**Q: Can I use TypeScript?**  
A: Yes! Start from the [Vite React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) or refactor this codebase.

---

## Troubleshooting

- **Port already in use:**
  - Stop other dev servers or change the port in `vite.config.js`.
- **Images not loading:**
  - Check the paths in `src/assets/` and ensure the files exist.
- **CSS not applying:**
  - Make sure you are importing the correct CSS files in your components.
- **Router not working:**
  - Ensure you are using `<BrowserRouter>` in `main.jsx` and your routes are correct.

If you encounter other issues, please open an issue or pull request.

## Changelog

- **v1.0.0** (2025-08-12): Initial release with animated background, login/signup forms, and full documentation.

## Related Projects

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Glassmorphism UI Inspiration](https://hype4.academy/tools/glassmorphism-generator)

## Security

If you discover a security vulnerability, please open an issue or contact the author directly via GitHub.

## Contact

- **Author:** [NhanPhamThanh-IT](https://github.com/NhanPhamThanh-IT)
- **Email:** [YourEmail@example.com](mailto:YourEmail@example.com)

## Scripts

- `npm run dev` – Start development server with hot reload.
- `npm run build` – Build for production.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint on the codebase.

## Dependencies

- [React](https://react.dev/)
- [React DOM](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

## License

This project is licensed under the [MIT License](./LICENSE).

---

</div>

<div align="center">

_Feel free to further personalize this README for your needs! Let me know if you want to add badges, deployment instructions, or more details._

</div>
