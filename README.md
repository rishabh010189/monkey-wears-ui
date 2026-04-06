# 🐒 Monkey Wears – Ecommerce UI

A modern, responsive ecommerce homepage built using **React** and **Tailwind CSS**.
This project serves as a frontend foundation for a fashion apparel store.

---

## 🚀 Features

- 🛍️ Responsive ecommerce homepage
- 📱 Mobile-first design
- 🎨 Styled with Tailwind CSS
- 🧩 Component-based React architecture
- 🛒 Product listing UI
- 📦 Category sections
- 📢 Promotional banner
- 🔻 Footer with navigation links

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite / Create React App** (depending on setup)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│
│── pages/
│   ├── Home.jsx
│
│── assets/
│   ├── images/
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/monkey-wears.git
cd monkey-wears
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the development server

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🎨 Tailwind Setup (if needed)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add this to `tailwind.config.js`:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

Add to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🖼️ Images Handling

- Static images → `public/images`
- Dynamic images → from API (e.g., S3 URLs)

Example:

```jsx
<img src={product.image} alt={product.name} />
```

---

## 🔥 Future Improvements

- 🛒 Add cart functionality (Context API / Zustand)
- 🔐 Authentication (Login/Signup)
- 🌐 Backend integration (API Gateway + Lambda)
- ☁️ Image hosting via AWS S3
- ⚡ Lazy loading & performance optimization
- ❤️ Wishlist feature

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Rishabh Srivastava**

---

## ⭐ Acknowledgements

- Tailwind CSS Docs
- React Docs
- Font Awesome (for icons)

---

> Built with ❤️ for learning and scaling into a full ecommerce platform.
