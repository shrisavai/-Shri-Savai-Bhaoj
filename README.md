# Shri Savai Bhaoj Marble & Granite — MERN

Luxury natural-stone export website based on the supplied design reference.

## Stack
- Frontend: React + Vite + React Router
- Backend: Node.js + Express + MongoDB/Mongoose
- Authentication: JWT + bcrypt
- Product/certificate images: uploaded from the admin's device with Multer and stored under `server/uploads`
- Public website: Home, Products, Export Info, Certifications, Contact
- Admin: authenticated dashboard for products, categories, certificates and export information

## Run

### 1. Server
```bash
cd server
npm install
cp .env.example .env
# edit .env with your MongoDB URI and JWT secret
npm run dev
```

### 2. Client
```bash
cd client
npm install
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:5000`.

## Create first admin
After the server is running:
```bash
POST http://localhost:5000/api/auth/create-first-admin
Content-Type: application/json

{
  "name": "Administrator",
  "email": "your-admin@example.com",
  "password": "change-this-password"
}
```
This endpoint only works while no admin exists. Disable/remove it after creating the first account if deploying publicly.

## Environment
See `server/.env.example`.

## Production
Build the client with `npm run build`, serve `client/dist`, and put the API behind HTTPS. Use a managed object-storage/CDN solution for large production image libraries if needed.
