# 🚀 JavaScript Bundler (Mini Webpack)

## 📌 Project Overview

This project is a custom-built JavaScript bundler that mimics the core functionality of modern tools like Webpack.

It takes multiple JavaScript files, analyzes dependencies, and bundles them into a single optimized file that runs in the browser.

---

## 🎯 Features

* ✅ AST Parsing using Babel
* ✅ Dependency Graph Generation
* ✅ Code Transformation (ES6 → ES5)
* ✅ Custom `require()` implementation
* ✅ Bundle Generation (`bundle.js`)
* ✅ Development Server using Express
* ✅ Auto Reload using WebSockets
* ✅ Production Optimization (Minification & Caching)

---

## 🧠 How It Works

1. **Parse Files**

   * Convert JS code into AST
   * Extract dependencies

2. **Build Dependency Graph**

   * Map all modules and their relationships

3. **Transform Code**

   * Use Babel to convert modern JS

4. **Bundle Modules**

   * Combine all modules into one file
   * Implement custom module loader

5. **Run in Browser**

   * Load bundled file via HTML

---

## 📁 Project Structure

```
my-bundler/
│
├── src/
│   ├── index.js
│   └── utils.js
│
├── dist/
│   └── bundle.js
│
├── parser.js
├── graph.js
├── bundle.js
├── server.js
├── index.html
├── package.json
└── progress/
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/my-bundler.git
cd my-bundler
```

### 2. Install dependencies

```
npm install
```

---

## ▶️ Usage

### 🔹 Build the bundle

```
npm run build
```

### 🔹 Start the server

```
npm start
```

### 🔹 Open in browser

```
http://localhost:3000
```

---

## 🧪 Example Output

### Browser Page:

```
TEST PAGE
Result: 5
```

### Console:

```
5
```

---

## 📅 Development Progress

* **Day 1:** AST Parsing
* **Day 2:** Dependency Graph
* **Day 3:** Babel Transformation
* **Day 4:** Bundle Creation
* **Day 5:** Optimization & Error Handling
* **Day 6:** Dev Server
* **Day 7:** Auto Reload
* **Day 8:** Production Optimization

---

## 🚀 Technologies Used

* Node.js
* Babel
* Express
* WebSockets

---

## 🎯 Learning Outcomes

* Deep understanding of how bundlers work
* Working with AST and compilers
* Building custom module systems
* Understanding development vs production builds

---

## 📌 Future Improvements

* Code Splitting
* Tree Shaking
* Source Maps
* Plugin System

---

## 👩‍💻 Author

**Spandhan**

---

## ⭐ Conclusion

This project demonstrates a complete understanding of modern JavaScript tooling by building a bundler from scratch.
