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

- In the `input.css` we can modify the styles using the `@layer` and `@apply` classes
- The `theme section` is where we can list out all the colours, font-family, border sizes, and other UI configurations that are important.
- The `content` is where all the configurations of the js and html files are made. It is inappropriate to include css files
- The `color scheme` allows the configuration of color palettes, borders, border radius styles, spacing, in fact, anything that is relevant to the visual development that tailwindcss needs to be involved. For each color, we can add their different mode

```javascript
module.exports = {
  content: [],
  theme: {
    screens: {},
    theme: {
      colors: {
        black: {
          100: `#0010`,
          200: `#0011`,
        },
      },
    },
    extends: {},
  },
};
```

### Styling in Tailwindcss

- We can create our classes in a tailwind project. We have to use the layer and apply approach.
