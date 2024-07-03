# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Project Structure

- **src/**
  - **components/**
    - Header.jsx
    - Product.jsx
    - Cart.jsx
    - CartItem.jsx
    - Snackbar.jsx
  - **pages/**
    - Home.jsx
    - Cart.jsx
  - **redux/**
    - **Slices/**
      - cartSlice.js
    - store.js
  - **styles/**
    - tailwind.config.js
    - global.css
  - App.jsx
  - index.js


## Project Structure

### Components:

- **Header.jsx**: Navigation component displaying links for Home and Cart.
- **Product.jsx**: Component displaying individual product details with add/remove functionality to/from the cart.
- **Cart.jsx**: Page component displaying items added to the cart.
- **CartItem.jsx**: Component displaying individual items in the cart with remove functionality.
- **Snackbar.jsx**: Wrapper component using Notistack for displaying notifications.

### Pages:

- **Home.jsx**: Page component displaying a grid of products.
- **Cart.jsx**: Page component displaying the items currently in the cart.

### Redux Setup:

- **redux/Slices/cartSlice.js**: Redux Slice managing the cart state with actions for adding and removing items.
- **redux/store.js**: Redux store configuration combining reducers.

### Styles:

- **styles/tailwind.config.js**: Configuration file for Tailwind CSS.
- **styles/global.css**: Global styles or configurations for the application.

### Routing:

- **App.jsx**: Main component setting up React Router for navigation between Home and Cart pages.

### Component Details

- **Header.jsx**:
  Displays a navigation bar with links to Home and Cart pages.

#### Product.jsx:

- Displays product information (image, title, price).
- Allows users to add/remove products to/from the cart.
- Displays a notification using Notistack upon adding/removing items.

#### Cart.jsx:

- Displays all items currently in the cart.
- Provides options to modify or remove items.

#### CartItem.jsx:

- Displays individual items in the cart with options to remove them.

#### Snackbar.jsx:

Wrapper component using Notistack for displaying notifications globally.

### Redux Setup

#### cartSlice.js:

- Manages the cart state using Redux Toolkit's createSlice.
- Defines actions (add, remove) to modify the cart state.

#### store.js:

- Configures the Redux store combining the cartSlice reducer.

### App.jsx

- Sets up the main application component using React Router for navigation.
- Integrates Redux Provider to provide the Redux store throughout the application.
- Wraps the application with SnackbarWrapper to handle notifications using Notistack.

### Notes

Technologies:

- Utilizes React for building the UI components and managing state.
- Integrates Material UI for UI components and Tailwind CSS for styling.
- Uses Redux with Slice for managing global state (specifically the cart state).
- Implements React Router DOM for routing between pages.
- Includes Notistack for displaying notifications.
