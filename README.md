Body Component: This component handles displaying a list of restaurants and filtering them based on their ratings.
State Management: Uses useState to manage the list of restaurants. 
Filtering: Filters restaurants with an average rating greater than 4 when the button is clicked.
Rendering: Maps through the listOfRestaurants and renders a RestaurantCard for each.
Header Component: This component displays a header with a logo and navigation links. 
Logo: Displays an image with the source URL from a constants file. Navigation: Provides a list of navigation links.
RestaurantCard Component: This component represents individual restaurant cards displaying restaurant details.
Props: Receives resData containing restaurant details.
Rendering: Displays various details of the restaurant and uses a concatenated URL for the image source.
AppLayout Component: This is the root component that combines Header and Body Mock Data: mockData is used as the initial data source for the restaurants.
Constants: LOGO_URL and CDN_URL are imported from constants files for use in the Header and RestaurantCard components.

The project is structured with three main components: Header, which displays the logo and navigation links; 
Body, which manages and filters a list of restaurants and renders each as a RestaurantCard; 
RestaurantCard, which presents individual restaurant details including an image and other relevant information.
The AppLayout component integrates Header and Body, and is rendered to the DOM using ReactDOM.createRoot. 
Mock data provides the initial restaurant information, while constants manage URLs for images and other resources.
Parcel simplifies the build process by automatically handling dependencies, watching for file changes, and serving the application on a local development server.
Parcel, a zero-configuration web application bundler, to streamline the development of our React application


