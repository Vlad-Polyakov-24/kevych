# Kevych

**Kevych** is a product listing and management application built with **Next.js 15**, **React 19**, and structured according to the **Feature-Sliced Design (FSD)** methodology for scalability and maintainability.

### 🔗 [Live Demo](https://kevych.vercel.app/)

### 🔑 Credentials

```js
[
  {
    login: 'emilys',
    password: 'emilyspass',
  },
  {
    login: 'michaelw',
    password: 'michaelwpass',
  },
  {
    login: 'sophiab',
    password: 'sophiabpass',
  },
  {
    login: 'jamesd',
    password: 'jamesdpass',
  },
]
```

More credentials you can find [here](https://dummyjson.com/users).

## 🚀 Tech Stack

* **Framework**: Next.js 15 (App Router)
* **UI**: React 19 + TypeScript
* **Styling**: SCSS Modules
* **Forms**: React Hook Form + Yup
* **State Management**: Zustand
* **Data Fetching**: React Query v5
* **Validation**: Yup
* **UI Enhancements**: React Select, Headless UI, Toastify

## 📦 Key Packages

* `axios` – HTTP client
* `@tanstack/react-query` – for data fetching, caching, and mutations
* `zustand` – global state management
* `react-hook-form` + `@hookform/resolvers` – powerful form handling
* `react-select` – customizable select components
* `react-toastify` – toast notifications
* `cookies-next` – universal cookies
* `body-scroll-lock` – scroll locking for modals
* `yup` – schema-based validation

### Dev Dependencies

* `eslint`, `eslint-config-next` – linting and formatting
* `typescript` – type safety
* `@svgr/webpack` – SVG as React components

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### 🖼️ Remote Images

The following domains are allowed for remote image loading (configured in `next.config.js`):

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dummyjson.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'cdn.dummyjson.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'i.imgur.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'imgur.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.imgur.com',
      pathname: '/**',
    },
  ]
}
```

---

## 📁 Directory Structure (FSD)

```bash
src/
├── globals/        # App-level setup: providers, layout, styles (like `app/` in Next.js)
├── app/            # Pages and routes (like `pages/` in classic Next.js)
├── widgets/        # Complex UI blocks
├── features/       # User-level features (e.g. auth, product filters)
├── entities/       # Business entities (e.g. product, user)
└── shared/         # UI-kit, helpers, hooks, constants
```

## 🗃️ Backend

This app uses the [DummyJSON API](https://dummyjson.com/) for products. Since the API is mocked:

* **Newly created products are stored only locally in cache**.
* **Editing any product updates only the local cache**, not the server.
* **Deleted products (optimistic update) are also removed only from local cache**.

This approach allows fast UX but is limited in terms of persistence.

## 🧪 Development Notes

* Built with FSD principles: separation of concerns, scalable modularity
* Smart query invalidation and cache layering with React Query
* Local-only CRUD logic for "new" products (IDs > 1000)

## 📎 License

MIT
