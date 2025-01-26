# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deployment Instructions for Render

To deploy this application on Render, follow these steps:

1. **Create a new Web Service** on Render.
2. **Connect your GitHub repository** containing this project.
3. **Set the Build Command** to:
   ```
   npm run build
   ```
4. **Set the Start Command** to:
   ```
   npm run preview
   ```
5. **Add any necessary environment variables** in the Render dashboard.
6. **Deploy the service** and monitor the logs for any issues.

Make sure to test the application locally before deploying to ensure everything works as expected.
