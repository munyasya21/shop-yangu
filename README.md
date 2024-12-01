Shop Yangu
Welcome to Shop Yangu, an online shopping platform built using Next.js and Tailwind CSS. This project features two distinct shops: BossChiq, dedicated to ladies' products, and KakaLuxe, focused on men's products. Below you will find an overview of the features, technologies used, and how to get started with the project.

Table of Contents
Features
Technologies Used
Getting Started
Components Overview
API Integration
Contributing
License
Features
Two Shops:
BossChiq: Ladies' products
KakaLuxe: Men's products
Product Management:
Add new products to each shop
Update existing products
Delete products (with warnings if products exist)
Shop Management:
Create new shops
Delete shops (only if they have no products)
User Interface:
Utilizes Tailwind CSS for responsive and modern design
Icons are implemented using Ionicons
Static Site Generation:
Utilizes getStaticProps for fetching data at build time
Technologies Used
Next.js: A React framework for building server-rendered applications.
Tailwind CSS: A utility-first CSS framework for creating custom designs.
Ionicons: A set of premium icons for web and mobile applications.
db.json: A mock database file used for storing shop and product data.
Getting Started
To get a local copy of this project up and running, follow these steps:

Clone the Repository:git clone https://github.com/munyasy21/shop-yangu.git
cd shop-yangu
Install Dependencies:npm install
Run the Development Server:npm run dev
My application will be running at http://localhost:3000.
Components Overview
Products Table:
Located under the components directory.
Manages the addition, deletion, and updating of products.
Shop Management:
Allows the creation and deletion of shops.
Provides warnings for actions that cannot be performed if products are associated with a shop.
API Integration
Data Fetching:
The application fetches data from db.json to populate the products and shops.
Utilizes asynchronous functions with getStaticProps for efficient data handling.
