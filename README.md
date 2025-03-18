# BanTrack Mobile Application

BanTrack is a mobile banking application built using **React Native** and **Expo Router**. The app allows users to manage their bank accounts, view transactions, transfer money, and much more.

---

## 🚀 Features
- 🔒 **Secure Authentication** (Sign In, Register, FaceID)
- 📊 **Manage Multiple Accounts** (Checking, Savings, Payroll, Independent)
- 💰 **Transaction History & Filtering**
- 📅 **Date-Based Reports & Statements**
- 🎨 **Dark Mode UI**
- 🌎 **Multi-language Support (English, Spanish)**
- ⚡ **Redux Toolkit for State Management**
- 🔄 **Offline Data Handling with Redux Persist**
- 🛠 **Mock API using MirageJS**
- 🔍 **Unit & Integration Testing with Jest & React Testing Library**

---

## 🏗️ Project Structure
```
BanTrack/
│── _test_/                   # Unit & Integration tests
│── assets/                   # App assets (icons, images, etc.)
│── components/               # Reusable UI components
│   ├── atoms/                # Basic UI elements (Button, Input, Card)
│   ├── molecules/            # Small combined components
│   ├── organisms/            # Larger sections of UI
│── constants/                # Static values (routes, colors, etc.)
│── hooks/                    # Custom React hooks
│── mocks/                    # MirageJS mock data
│── navigation/               # Expo Router navigation setup
│── screens/                  # Application Screens
│── services/                 # API Services (Axios instance, API calls)
│── store/                    # Redux store configuration
│── utils/                    # Utility functions
│── App.tsx                   # Entry point for the app
│── babel.config.js            # Babel Configuration
│── package.json              # Dependencies & Scripts
```

---

## 📦 Installation
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/HarysVizcaino/banktrack.git
cd BanTrack
```

### **2️⃣ Install dependencies**
```sh
yarn install
```

### **3️⃣ Start the Expo development server**
```sh
yarn start
```

---

## 🧪 Testing
Run unit and integration tests:
```sh
yarn test
```

Run tests with coverage:
```sh
yarn test --coverage
```

---

## 🛠️ Tech Stack
- **React Native** (Expo)
- **TypeScript**
- **Expo Router**
- **Redux Toolkit** (State Management)
- **AsyncStorage** (Local Storage)
- **Axios** (API Requests)
- **MirageJS** (Mock API)
- **Jest & React Testing Library** (Testing)

---

## 🔐 Authentication Flow
1. User logs in or registers
2. JWT token is stored in **AsyncStorage**
3. API requests include the JWT token in headers
4. Secure screens require authentication
5. Session expires after inactivity (handled via Redux Persist & App State Listener)

---

## 📜 Environment Variables
Create a `.env` file at the root of the project and define the following variables:
```sh
API_URL=http://localhost:5000/api
INACTIVITY_TIMEOUT=300000
```
Load environment variables inside your project:
```ts
import { API_URL } from '@env';
```

---

## 🌍 Multi-Language Support
- English (en)
- Spanish (es)

To change the language dynamically, use:
```ts
i18n.changeLanguage('es');
```

---

## 🚀 Deployment
### **Android & iOS Build**
```sh
eas build --profile production --platform all
```

### **Publish to Expo**
```sh
yarn expo publish
```

---

## 📌 Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📝 License
This project is licensed under the **MIT License**.

