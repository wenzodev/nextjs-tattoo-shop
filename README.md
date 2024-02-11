# Next.js Portfolio Galleries with Vanilla Javascript and CSS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Wireframing

- psd layout or XD or both

## 01. Structure

- App
  - components (folder)
    - Navbar.js - "use client"
    - Navbar.module.css
    - Portfolio.js
    - Portfolio.module.css
  - data (folder) (ok)
    - portfolios.js (ok)
  - layout.js 01/04
  - page.js
  - pages (folder)
    - about.js
    - portfolio-1.js
    - portfolio-2.js
    - portfolio-3.js
    - contact.js
  - styles
    - globals.css (global styles)
  - public
    - images
      - portfolio1
        - image1.jpg
        - image2.jpg
        - image3.jpg
      - portfolio2
        - image1.jpg
        - image5.jpg
        - image6.jpg

---

## 02. Create next.js project

- npx create-next-app@latest my-app

---

## 02A. Clean files from unused stuff

- from globals.css delete all of the options

---

## 03. Dev Dependencies

- make sure babel is installed properly:
  - npm uninstall @babel/core @babel/cli @babel/preset-env @babel/preset-react
  - npm install next @babel/core @babel/cli @babel/preset-env @babel/preset-react --save-dev

- 'next/babel' dependency error:
  - .eslintrc.json, In this file:
  
  {
  "extends": "next/core-web-vitals"
  }

  Replace it with

  {
  "extends": ["next/babel","next/core-web-vitals"]
  }

  from: [https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel]

  NextJS Image component now supports style prop:
  <Image
      src={source}
      alt=""
      fill
      style={{objectFit:"cover"}}
    />

    <Image
      src="/"
      alt="logo"
      fill
      style={{objectFit:"contain"}}
    />
    </div>

  from: [https://stackoverflow.com/questions/74213106/how-to-use-objectfit-for-next-js-13-image]

  [https://nextjs.org/docs/messages/next-image-upgrade-to-13]
  [https://nextjs.org/docs/api-reference/next/image]

---

## 03A. Custom Dependencies

- npm install materialize-css@next
- npm install material-icons@latest
- npm install react-transition-group
- npm install react-grid-gallery
- npm install framer-motion
- npm install react-icons --save

---

## 04. Deployment

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
