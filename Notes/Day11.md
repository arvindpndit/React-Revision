# Day 11 of revising react

Welcome to the third part of revising React! Today, we will be exploring different ways of writing CSS in our React applications. Understanding these techniques will empower you to style your React components effectively. Let's dive in:

## 1. External CSS File

The first way is to use an external CSS file. Suppose we have a `div` element:

```jsx
<div className="name">Arvind Pandit</div>
```

We can create a CSS file, let's say `index.css`, and style the element there:

```css
.name {
  font-weight: bold;
  background-color: aqua;
}
```

This will make the text "Arvind Pandit" bold and give it an aqua background color.

**Pros:**

- Separation of concerns: CSS styles are kept separate from the component code.
- Reusability: Styles defined in an external CSS file can be shared across multiple components.
- Familiarity: Developers with experience in traditional web development may find it more comfortable and familiar.

**Cons:**

- Tight coupling: Changes in the component structure might require corresponding changes in the CSS file.
- Global scope: CSS styles defined externally have a global scope, which can lead to naming collisions or unintended style overrides.
- Increased network requests: An additional HTTP request is needed to fetch the CSS file.

## 2. Inline CSS

The second way is to use inline CSS. We can apply styles directly within the component using the `style` attribute:

```jsx
<div style={{ backgroundColor: "aqua", fontWeight: "bold" }}>Arvind Pandit</div>
```

Alternatively, we can define the styles as an object and use it within the `style` attribute:

```jsx
const nameStyle = {
  backgroundColor: "aqua",
  fontWeight: "bold",
};

<div style={nameStyle}>Arvind Pandit</div>;
```

Both approaches achieve the same result but offer different ways of writing CSS.

**Pros:**

- Component-centric styles: Styles are directly associated with the component they are applied to, making it easier to understand and manage.
- Dynamic styles: Inline styles can be easily modified based on component props or state.
- Scoped styles: Inline styles are encapsulated within the component and do not affect other elements.

**Cons:**

- Readability and maintainability: Inline styles can become lengthy and clutter the component code, making it harder to read and maintain.
- Limited CSS features: Inline styles have limitations compared to external CSS, such as lack of media queries and pseudo-selectors.
- Style duplication: When multiple components require the same styles, duplication of inline styles can occur.

## 3. SCSS/SASS

SCSS (Sassy CSS) and SASS (Syntactically Awesome StyleSheets) are extensions of CSS that provide additional features and make CSS more powerful and maintainable. SCSS/SASS allow nesting, variables, mixins, and more. They need to be compiled to regular CSS before using them in React applications.

**Pros:**

- Modularity and reusability: SCSS/SASS supports nested selectors, variables, mixins, and functions, enabling modular and reusable styles.
- Improved readability: SCSS/SASS syntax is more concise and expressive than traditional CSS, making it easier to read and understand.
- Preprocessing capabilities: SCSS/SASS can leverage logic and calculations to generate styles dynamically.

**Cons:**

- Compilation step: SCSS/SASS files need to be compiled into regular CSS before they can be used, requiring additional build tools or configuration.
- Learning curve: Developers unfamiliar with SCSS/SASS might require some time to learn and adapt to the syntax and features.
- Tooling dependencies: Setting up a build process and integrating SCSS/SASS into a project requires additional tooling and dependencies.

## 4. Libraries (e.g., Material UI, Chakra UI, Ant UI)

Using UI libraries like Material UI, Chakra UI, or Ant UI can significantly speed up development and provide pre-built components and styles. Advantages of using libraries include:

- Ready-to-use components with consistent styling
- Increased productivity and faster development
- Established design systems and best practices
- Community support and regular updates

However, there are some disadvantages to consider:

- Increased bundle size due to additional dependencies
- Customization limitations that may require overriding library styles
- Learning curve associated with library-specific concepts and APIs

## 5. Styled Components

Styled Components is a popular library that allows you to write CSS-in-JS, encapsulating styles within React components. It enables you to create reusable styled components with dynamic styling based on props or state. Styled Components offer a seamless integration of CSS and React components.

**Pros:**

- Component-based styling: Styles are defined directly within the component, resulting in a more intuitive and self-contained approach.
- Dynamic styling: Styled Components allow dynamic styling based on component props or state, enabling flexible and interactive UIs.
- Easy integration: Styled Components seamlessly integrate with React components, enhancing code readability and maintainability.

**Cons:**

- Increased complexity: While Styled Components simplify styling within components, they might introduce additional complexity, especially for larger projects.
- Performance impact: Styling logic within the component can potentially impact performance, as styles are re-evaluated whenever the component renders.
- Learning curve: Developers new to Styled Components might require some time to understand the library's APIs and best practices.

## 6. Framework - Tailwind CSS

Today, we will focus on Tailwind CSS, a utility-first CSS framework. Some advantages of using Tailwind CSS include:

- Rapid development with pre-defined utility classes
- Highly customizable design system
- Consistent styling across the application
- Excellent documentation and active community support

However, there are a few disadvantages to consider:

- Large class names can clutter HTML markup
- Steeper learning curve compared to traditional CSS frameworks
- Limited control over individual styles and specific component variations

To use Tailwind CSS in your React app, you can either include its CDN link or install it as a package. Here's how to get started:

1. Install Tailwind CSS and its peer dependencies via npm:

```bash
npm install -D tailwindcss postcss
```

2. Run the init command to generate `tailwind.config.js`:

```bash
npx tailwindcss init
```

3. Configure PostCSS by creating a `.postcssrc` file in your project root and enabling the Tailwind

CSS plugin:

```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

4. Add the paths to your template files in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. Add the Tailwind directives to your CSS file (e.g., `./src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You are now ready to use Tailwind CSS in your application! Refer to the official Tailwind CSS website for comprehensive documentation and guides.

## Conclusion

Understanding the different ways of writing CSS in React applications allows you to choose the approach that best suits your project's requirements. Whether it's using external CSS files, inline styles, SCSS/SASS, UI libraries, styled components, or CSS frameworks like Tailwind CSS, each method has its advantages and trade-offs. Select the approach that aligns with your project's goals, maintainability, and developer preferences. Happy styling!
