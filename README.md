# Gutenberg Block Recipe 4 - Weather Forecast Edition 🌤️

Welcome to the Weather Forecast block recipe, where we take your WordPress site to new heights by integrating dynamic weather data!

🌦️ Want to provide up-to-date weather information directly within your WordPress content? You're in the right place!

In this repository, we will create a Gutenberg block that showcases weather forecasts, utilizing the same React component for both the frontend and backend.

This README will guide you through the setup and usage of the Weather Forecast block.

## 🧾 Ingredients
To prepare the Weather Forecast block, you'll need the following ingredients:

- **block:** The foundation of our Weather Forecast block, allowing seamless integration into the Gutenberg editor.
- **editor.scss:** Style rules specifically tailored for the editor interface, ensuring a smooth user experience.
- **useBlockProps:** A React hook providing essential props for the block wrapper element.
- **TextControl, SelectControl, ToolbarDropdownMenu:** Components from @wordpress/components used to handle user inputs and settings within the block.
- **i18n:** Internationalization utilities from @wordpress/i18n for translating text strings.
- **useState, useEffect, useCallback:** React hooks for managing state and side effects in the WeatherBlock component.

## 👨‍🍳 Cooking Instructions
Ready to integrate weather forecasts into your WordPress site? Follow these step-by-step instructions:

### Installation:

1. Begin by cloning this repository to your local machine using the `git clone` command followed by the repository URL.
2. Once cloned, navigate to the repository directory using your preferred command line interface.
3. Next, upload the `weather-forecast` folder to the `wp-content/plugins/` directory of your WordPress installation. This can be achieved via FTP or by directly copying the folder into the directory.
4. Head to your WordPress admin dashboard and navigate to the "Plugins" section. You should find the Weather Forecast plugin listed there. Click on "Activate" to integrate weather forecast functionality into your site!

### Block Registration:

1. Open the `index.php` file in your code editor. This is where the magic begins! Utilize the necessary functions to register the Weather Forecast block type, ensuring its availability within the Gutenberg editor.

### Block Functionality:

1. Dive into the `index.js` file where the core functionality of our Weather Forecast block resides. This file defines how the block behaves within the editor interface. We've implemented various components to handle user input efficiently, ensuring a seamless user experience.
2. The `WeatherBlock` component is central to this recipe, used both in the editor and the frontend to display weather data.

### Data Management:

1. Use the `useState`, `useEffect`, and `useCallback` hooks within the `WeatherBlock` component to manage weather data fetching and display. This allows for dynamic updating and retrieval of weather information, enhancing the content on your WordPress site.

### Customization and Exploration:

1. Now that you've mastered the basics, feel free to explore and customize the Weather Forecast block to suit your specific requirements. Whether it's fine-tuning styling or extending functionality, the possibilities are endless!

## Usage
With the Weather Forecast block, providing up-to-date weather information on your WordPress site has never been easier!

Effortlessly enhance your content by displaying current weather forecasts directly within your posts and pages.

Happy coding, and may your weather forecasts be as sunny as your development journey! 🌞

### Credits
- @wordpress/dependency-extraction-webpack-plugin docs.
- [WooCommerce Blocks](https://developer.woocommerce.com/2021/11/15/how-does-woocommerce-blocks-render-interactive-blocks-in-the-frontend/)
- Iconset - material design icons (https://fonts.google.com/icons)
