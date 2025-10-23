# E-commerce Dashboard

A modern React-based e-commerce dashboard application with features like product browsing, shopping cart management, and user authentication.

## Features

- 🛍️ Product browsing and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication system
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI
- 🔒 Protected routes for authenticated users

## Tech Stack

- **React** - Frontend library
- **React Router** - Navigation and routing
- **Context API** - State management
- **CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Udiesh/E-Commerce_Cart.git
```

2. Navigate to the project directory
```bash
cd E-Commerce_Cart
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
shop-hub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   └── ProductCard/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── Cart/
│   │   ├── Login/
│   │   ├── Product/
│   │   └── Profile/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
