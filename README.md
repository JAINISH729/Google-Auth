# 🔐 Firebase Authentication Dashboard (React + Vite)

## 📌 Project Overview
This project is a **Firebase Authentication-based web application** built using **React + Vite**. It allows users to register, log in, and access a protected dashboard using both **Email/Password authentication** and **Google Sign-In**.

---

## 🚀 Features

- 🔑 User Authentication (Email & Password)
- 🔐 Google Sign-In Integration
- 🧾 User Registration Page
- 🔓 Login Page
- 📊 Protected Dashboard Page
- 🚪 Logout Functionality
- 🔥 Firebase Authentication Backend
- ⚡ Fast build with Vite

---

## 🛠️ Tech Stack

- Frontend: React.js (Vite)
- Routing: React Router DOM
- Backend/Auth: Firebase Authentication
- Styling: CSS

---

## 📂 Project Pages

### 🔐 Login Page
- Email & Password login  
- Google Sign-In option  
- Navigate to Register page  

<img width="931" height="384" alt="Screenshot 2026-04-21 173627" src="https://github.com/user-attachments/assets/82959f99-a04f-40ac-aa8d-ca2b57123564" />


---

### 📝 Register Page
- Create account using Email & Password  
- Google Sign-Up option  
- Navigate to Login page  

<img width="859" height="399" alt="Screenshot 2026-04-21 173631" src="https://github.com/user-attachments/assets/6ba07732-8ccc-4ebc-bc95-ed10706a2a00" />


---

### 📊 Dashboard Page
- Welcome message after login  
- Logout button  
- Protected route  

<img width="1369" height="526" alt="Screenshot 2026-04-21 173615" src="https://github.com/user-attachments/assets/08d658ec-0bcc-4310-b947-f0c14cb4d6a0" />


---

### 🔑 Firebase Console
- Shows registered users  
- Displays provider (Google)  
- Tracks login activity  

<img width="1310" height="249" alt="Screenshot 2026-04-21 172123" src="https://github.com/user-attachments/assets/973fe874-8684-4d5b-a76b-51f37ff6203e" />

---
### LOGIN WITH GOOGLE STEP :
<img width="1918" height="956" alt="Screenshot 2026-04-21 173407" src="https://github.com/user-attachments/assets/cef24ebe-ef06-4003-a4e5-e5ade9111697" />


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Firebase

Create a file: `firebase.js`

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export default app;
```

Enable in Firebase:
- Email/Password Authentication
- Google Authentication

---

### 4. Run the project
```bash
npm run dev
```

---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Firebase verifies credentials  
3. Redirect to Dashboard  
4. Logout clears session  

---

## 📌 Future Improvements

- Add user profile page  
- Store data in Firestore  
- Password reset feature  
- Better UI (React Bootstrap)  
- Role-based authentication  


## 📄 License

MIT License
