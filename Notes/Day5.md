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

After working on the application, I realized that my `App.js` file was getting messy, and everything was inside it. So tomorrow, I plan to modularize my code by separating the components and constants files from the `App.js` file. Overall, I'm excited to continue working on my food ordering application using React.
