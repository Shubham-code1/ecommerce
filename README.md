### Project title

E-commerce 

### version 
v-0.1.0

### Github repository link
- https://github.com/Shubham-code1/ecommerce

### Deploy
- https://statuesque-frangollo-264c49.netlify.app/#category 


### Project description

This webpage is an interactive and visually appealing creation, built using HTML, CSS, JavaScript, Bootstrap, and jQuery. frontend ecommerce project includes three HTML pages: a home page, a product description details page, and a cart page that displays items and performs pricing calculations. Each page is fully responsive, catering to all devices. The project utilizes JavaScript, jQuery, HTML, CSS, and Bootstrap to enhance user experience, focusing on an intuitive interface. Users can navigate through product categories in the NavBar, view product details, and add items to their cart for future purchases. Additionally, a wishlist feature has been incorporated for user convenience, albeit it operates only on the UI and doesn't affect the backend. Users can also remove items from their cart. It's important to note that this project is entirely frontend-focused, with no backend implementation. LocalStorage has been used for data storage purposes.

## Technologies Used:-

- HTML5 and CSS3: Markup and styling of the application.
    - Media Query

- JavaScript: Programming language used for client-side functionality.

- - JS Terminologies used in this project
    - async & await 
    - Debouncing
    - DOM Manipulation
    - Promise & FetchAPI
    - Array Methods
    - Object destructuring
    - loops
    - Higher Order and helper functions
    - Switch case 
    - Scopes & Closure

- Bootstrap: Front-end framework for responsive, mobile-first web development.
    - Utility classes 
    - Card component
    - Responsiveness
    - NavBar component

- Jquery: JavaScript library for simplified DOM manipulation and animation.
    - DOM Manipulation

### Folder structure

- **`index.html`**:             This is the main HTML file that serves as the entry point of the application.

- **`css/style.css`**:          Contains the styles for the entire project.
- **`css/responsive.css`**:     Contains the responsive styles for the entire project.

- **`assets/`**:                This folder houses all the images used in the project.

- **`js/index.js`**:            Contains the JavaScript code for the project.
- **`js/jquery.js`**:           Contains the Jquery code for the project.

- **`static/`**:                This folder contains static HTML files for each section of the webpage.
    - cartItemsDisplay.html:    Contains the Items added to the cart    
    - productDisplay.html:      Contains the Individual description of the selected products.  
   

### Project Features

## Home Page 

# Navbar Effect - 
- HomePage Navbar initially appears transparent but gains a gradient effect upon scrolling for a better user experience. It comprises five sections, each linked to a specific section on the homepage for easy navigation. Users can input any alphabet in the search bar to scroll directly to the products section. Additionally, the navbar includes a cart logo that opens a new window displaying all items in the cart. It also features a user logo, although its functionality is not yet implemented.

# Navbar categories -

- The navbar features a category section with three dropdowns containing categorized product names. Upon the initial page load, the category section displays a default list of products. Users can click on different categories in the navbar dropdown to view products specific to each category. Clicking a category refreshes the homepage's category section, displaying products belonging to the selected category, replacing the previously loaded products.

# HomePage Products category - 

- Each product in the homepage's category section includes a name, description, rating, price, discount information, and an image. Users can wishlist items by clicking a heart-shaped icon in the top-right corner; this feature is purely visual with no backend functionality. Clicking the "Buy Now" button opens a new window displaying the complete description of the selected product.

# HomePage chat -
- The homepage features a chat section fixed at the bottom right corner, equipped with close button. On initial render of page no chat section will be appear on the page just to have the good user experience. Upon scrolling, it appears in the specified location within the viewport. Users can close the chat using the close button, after which it remains hidden until the page is reloaded.

# Homepage others -
The homepage includes additional static sections:

- - Featured Products: Showcasing highlighted products.
- - Blogs: Featuring various blog entries.
- - Testimonials: Displaying feedback from different users.
- - Footer: Providing supplementary service-related details.

## ProductDisplayPage --

The product's detailed description opens in a new window after clicking the "Buy Now" button on the homepage. This page contains two buttons: "Add to Cart" and "Buy Now".

- Add to Cart Button: Clicking adds the item to the cart. A confirmation prompt appears, and upon user approval, the item is successfully added. It also updates the total items in cart. which can be seen on navbar cart icon.

- Buy Now Button: Opens a new window listing items added to the cart. Note that items must be added to the cart before they appear in this window. If   the "Buy Now" button is clicked directly without adding items to the cart, the new window displays previously added cart items. The navbar on this page is for user experience and lacks functionality.

## cartItemsDisplay -- 

- The cart page displays all items in the cart with limited details like name, price, offer, old price, and images. Each item features a "Remove" button allowing users to delete individual items from the cart. Clicking the "Remove" button opens a new window reflecting the updated cart without the deleted item. Additionally, the page includes a pricing calculation section that is currently non-functional. This page is accessible by clicking the "Buy Now" button in the product display page and the cart icon in the homepage's navbar.

### Storage
Local storage has been used for storing the products which has been added to the cart. This technology allows data to persist in the user's browser, enabling seamless retrieval and display of added items whenever the cart page is accessed.

### Rsponsiveness

 In terms of responsiveness, the project excels. The design adapts gracefully to various screen sizes and devices, providing an optimal viewing experience. This ensures that users can engage with the content effortlessly, regardless of the platform they are using.

 ### Error handling 

Error handling in this project encompasses various scenarios. I have ensured that when retrieving products from local storage, I verify the existence of data to prevent issues with empty or unavailable carts. Additionally, I have implemented checks to guarantee the proper functioning of cart actions like adding or removing items, displaying user-friendly notifications.I have employed try-catch blocks and error handling functions to manage unexpected errors, ensuring a smooth user experience even during network failures or unexpected behavior.

