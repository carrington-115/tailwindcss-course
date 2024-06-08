# tailwindcss-course

## Notes

- There are many ways we can install tailwind. With `node (npm, npx)`, `tailwind cli`, `CDN (Content Delivery Network)`
- We can install the following extensions (intellisense and tailwind docs)
- Tailwind works using what is called JIT (just in-time compiling)

### Installing Tailwind with Nodejs

- First install the following with `npm`

```bash
npm install -D tailwindcss
npx tailwindcss init
```

- Fix the `tailwind.config.js` file and in the `src` folder, create the `input.css` file and add the tailwind configurations

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Then run the final command to start the tailwindcss application

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### The tailwind.config.js file

- This file allows us to do some configurations to the file. For example we can add breakpoints to screen sizes like

```javascript
module.exports = {
  theme: {
    extend: {},
    screens: {
      tiny: "640px",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
};
```
