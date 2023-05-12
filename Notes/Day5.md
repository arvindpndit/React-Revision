# Day 5 of revising React

Hi there, it's me, Arvind! Today is day 5 of my React revision, and I'm excited to start building a food ordering application. To begin with, I created the basic layout of my application using the following components:

- AppLayout
  - Navbar
  - Body
    - SearchBar
    - RestaurantList
      - RestaurantCard
  - Footer

To style my components, I decided to use Tailwind CSS and focus more on React than on CSS.

After creating the basic layout, I started creating functional components that we learned about yesterday. I first created the `AppLayout` component:

```javascript
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};
```

Then I created the `Navbar` component:

```javascript
const Navbar = () => {
  return (
    <div className="bg-green-50">
      <div className="flex justify-between items-center py-3 bg-green-50 w-9/12 mx-auto rounded-xl ">
        <h1 className="text-4xl font-bold text-green-600">FoodZilla</h1>
        <div className="flex gap-6 text-green-700">
          <div>Home</div>
          <div>Service</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};
```

Next, I created the `Footer` component:

```javascript
const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-600 py-3 text-white">
      <div>This is React-Revision by Arvind Pandit</div>
    </div>
  );
};
```

Then, I focused on the `Body` component, which contains a search bar and `RestaurantList` component. I first created the `RestaurantList` component:

```javascript
const RestaurantList = () => {
  return (
    <div className="mt-7 mb-10 flex flex-wrap justify-between gap-5 w-9/12 mx-auto">
      {cards.map((card) => {
        return <RestaurantCard restaurant={card} />;
      })}
    </div>
  );
};
```

Finally, I created the `RestaurantCard` component:

```javascript
const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, cloudinaryImageId, costForTwoString } =
    restaurant.data;
  return (
    <div className="w-72 h-72 border shadow-sm hover:shadow-md p-2">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="food"
      />
      <div className="font-semibold py-1">{name}</div>
      <div className="text-sm pb-2">{cuisines.join(", ")}</div>
      <div className="text-gray-500">{costForTwoString}</div>
    </div>
  );
};
```

I got the data from the `cards` array, which I fetched from the Swiggy API.

Now, let's discuss some important concepts in React:

### 1. Config Driven UI

Config-driven UI means that the UI or the frontend is driven by the backend. In other words, the UI updates according to the data sent by the backend. The configuration is defined in the backend and is sent to the frontend. The frontend renders the UI based on this configuration. This approach makes it easier to maintain and update the UI.

### 2. Virtual DOM

Virtual DOM is the representation of our actual DOM. It is required for reconciliation. Reconciliation is the process by which React updates the UI. It involves comparing the current virtual DOM with the previous one and updating the real DOM with the differences. The virtual DOM is a lightweight copy of the actual DOM, and changes made to it are not immediately reflected in the browser. Instead, React batches these changes and updates the actual DOM in an optimized way.

### 3. Props

Props are short for properties. They are passed to the children of a component. Props are used to pass data from the parent component to its children. This allows for more modular and reusable code. Props are immutable, which means they cannot be changed by the component that receives them.

### 4. Reconciliation/Diff Algorithm

Reconciliation is the process by which React updates the UI. It involves comparing the current virtual DOM with the previous one and updating the real DOM with the differences. React uses a diff algorithm to determine what has changed in the virtual DOM. The diff algorithm is a process of comparing two trees and returning the differences between them. The algorithm is optimized to minimize the number of updates to the actual DOM.

### 5. React Fiber

React Fiber is a new core algorithm in React that is responsible for scheduling and rendering updates. It is a reimplementation of the reconciliation algorithm that allows for better performance and more granular control over rendering. React Fiber introduces the concept of priorities, which allows React to prioritize certain updates over others, improving the perceived performance of the application. React Fiber also allows for interruption and resumption of the rendering process, which can help prevent the application from becoming unresponsive.

After working on the application, I realized that my `App.js` file was getting messy, and everything was inside it. So tomorrow, I plan to modularize my code by separating the components and constants files from the `App.js` file. Overall, I'm excited to continue working on my food ordering application using React.
