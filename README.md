# **Shop Yangu**

Welcome to **Shop Yangu**, an online shopping platform built using **Next.js** and **Tailwind CSS**. This project features two distinct shops: **BossChiq**, dedicated to ladies' products, and **KakaLuxe**, focused on men's products. Below you will find an overview of the features, technologies used, and how to get started with the project.

---

# Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Components Overview](#components-overview)
5. [API Integration](#api-integration)

---

# Features

## Two Shops:
- **BossChiq**: Ladies' products
- **KakaLuxe**: Men's products

## Product Management:
- Added new products to each shop
- Updated existing products
- Deleted products (with warnings if products exist)

## Shop Management:
- Created new shops
- Deleted shops (only if they have no products)

## User Interface:
- Utilized **Tailwind CSS** for responsive and modern design
- Icons are implemented using **Ionicons**

## Static Site Generation:
- Utilizes `getStaticProps` for fetching data at build time

---

# Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Ionicons**: A set of premium icons for web and mobile applications.
- **db.json**: A mock database file used for storing shop and product data.

---

# Getting Started

To get a local copy of this project up and running, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone **https://github.com/munyasy21/shop-yangu.git**
   cd shop-yangu


## Install Dependencies

To install the project dependencies, run the following command:

```bash
npm install 
```
``` bash



# Run the Development Server

**To start the development server, run the following command**:

```bash
npm run dev
```
```bash




# Components Overview


Products Table:
Located under the components directory.
Manages the addition, deletion, and updating of products.


Shop Management:
Allows the creation and deletion of shops.
Provides warnings for actions that cannot be performed if products are associated with a shop.


# API Integration

**Data Fetching**:
The application fetches data from **db.json** to populate the products and shops.

Utilizes asynchronous functions with **getStaticProps** for efficient data handling.
