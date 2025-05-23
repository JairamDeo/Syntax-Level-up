# 🚀 Syntax Level Up Backend (Node.js + Express)

This is the backend server of the Syntax Level Up built using **Node.js**, **Express.js**, and **MySQL**.

---

## 💻 Prerequisites

- **Node.js** (Version 22.x recommended)  
- **npm** (comes with Node.js)

### 📦 Install Node.js

#### For Windows:
1. Download the latest **Node.js v22** from [nodejs.org](https://nodejs.org/).  
2. Run the installer and follow the setup instructions.  
3. Verify installation:
   ```
   node -v
   npm -v
   ```

#### For Linux (Debian/Ubuntu):
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

---

## 🚀 Project Setup

1. Clone the repository:

```bash
git clone https://github.com/JairamDeo/Syntax-Level-up.git
cd Syntax-Level-up/backend
```

2. Install dependencies:

```bash
npm install
```

🔐 Google OAuth Setup
To enable Google Login in your application, follow these steps:

✅ Get Google OAuth Credentials
Go to the Google Cloud Console

Create a new project or select an existing one.

Navigate to: APIs & Services > Credentials

Click "Create Credentials" > OAuth client ID

Set Application type to Web application

Under Authorized JavaScript origins, add your frontend url :-

```bash
http://localhost:5173
```
Under Authorized redirect URIs, add your backend url with /api/google-login :-

```bash
http://localhost:5000
http://localhost:5000/google-auth
```
Click Create, and copy the Client ID and Client Secret

⚙️ Add to Environment Files
Backend .env
```bash
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```
> 🔑 To generate a secure JWT secret key, run this command in your terminal:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Replace `your_64_byte_hex_string_here` with the generated key.
genrate this key 2 times for both JWT_Secret and ADMIN_JWT_SECRET

---

```bash
vim .env
```

## 🔧 Environment Configuration
vim .env

Create a `.env` file in the root backend directory with the following variables:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=jairamdb
DB_NAME=syntax
DB_PORT
JWT_SECRET="your_64_byte_hex_string_here"
ADMIN_JWT_SECRET="your_64_byte_hex_string_here"
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

## 🚀 Running the Server

To start the backend server in development mode with auto-reload (requires nodemon):

```bash
npx nodemon index.js
```

Or simply:

```bash
node index.js
```

The server will run on the port specified in your `.env` file (default 5000).

---

## 📡 CORS Setup

The backend is configured to allow requests only from the frontend URL defined in the environment variable `FRONTEND_URL` for security.

---

## 🛠️ Notes on Production

- Backend servers typically do **not** require a build step like frontend apps.
- Deploy the backend to your hosting environment (AWS EC2, Heroku, DigitalOcean, etc.) by pushing your code.
- Make sure environment variables are set correctly on your production server.
- Use process managers like **PM2** for production deployments to keep the app running smoothly.

---

## 📬 Feedback

Feel free to open issues or contribute. Happy coding! 🎉
