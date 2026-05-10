# FoodCompanion Backend 🍱⚙️

Backend API for FoodCompanion mobile application.

This backend powers:

- Authentication
- Kitchen management
- Menu management
- Route search
- Order placement
- Favorites
- Dashboard analytics
- AI recipe generation

---

## Features

### Authentication
- Register
- Login
- JWT Authentication

### Kitchen Management
- Create kitchen
- Update kitchen
- Toggle availability

### Menu Management
- Add breakfast/lunch/dinner menu

### Route Search
Find kitchens available between user source and destination

### Orders
- Place order
- View cook orders
- Update order status

### Favorites
Save favorite kitchens

### AI Recipe Assistant
Generate recipes based on ingredients using AI API

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- OpenRouteService API
- MealDB API
- Render Deployment

---

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Kitchen
- POST /api/kitchen/create

### Menu
- POST /api/menu/create

### Orders
- POST /api/order/place
- GET /api/order/cook-orders
- PUT /api/order/update-status

### Recipe
- POST /api/recipe/generate

---

## Installation

```bash
git clone <https://github.com/prabh2002/foodcompanion-backend.git>
cd backend
npm install
npm start
```

---

## Environment Variables

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
ORS_API_KEY=your_api_key
```

---

## Deployment

Backend deployed on Render

---

## Frontend Repository

https://github.com/prabh2002/foodcompanion-frontend.git

---

## Future Improvements

- WebSocket real-time updates
- Payment integration
- Better route optimization
- AI meal personalization

---

## Author

Prabhat
B.Tech CSE Student | Full Stack + AI Enthusiast
