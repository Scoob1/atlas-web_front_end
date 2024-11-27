# Cookies and Local Storage (Max's Version)

- Understand how to create cookies using Javascript
- Learn how to set specific settings for the cookie
- Learn how to read cookies with Javascript
- How to use js-cookie for easy cookie manipulation
- How to use the browser web storage
- The differences between local storage and session storage

---

## Features

- Interactive login system with persistent data storage.
- Integration with js-cookie for simplified cookie manipulation.
- Dynamic shopping cart functionality:
  - Add, remove, and clear items.
  - Display cart state dynamically based on stored data.
- Use of both **localStorage** and **sessionStorage** for different levels of persistence.
- DOM manipulation using vanilla JavaScript only.
- No reliance on external frameworks (except js-cookie in relevant tasks).

---

## Tasks Overview

### Task 1: Basic Login System

- **Description**: Implements a login system using cookies to store user credentials (e.g., name and email).
- **Features**:
  - Login form with persistent cookies for 10 days.
  - Welcome message displays upon successful login.
  - Logout functionality clears cookies and resets the interface.

---

### Task 2: Using js-cookie

- **Description**: Enhances the login system to use the `js-cookie` library for simplified cookie manipulation.
- **Features**:
  - Replaces manual cookie handling with `js-cookie` methods for setting, getting, and removing cookies.
  - Dynamic welcome message built entirely in JavaScript.

---

### Task 3: Shopping Cart with localStorage

- **Description**: Implements a basic shopping cart system using `localStorage` to store selected items persistently.
- **Features**:
  - Displays a list of available products.
  - Adds selected items to the cart and persists them across browser sessions.
  - Shows a message indicating the number of previously added items when revisiting the page.

---

### Task 4: Shopping Cart with sessionStorage

- **Description**: Modifies the shopping cart to use `sessionStorage`, limiting persistence to the current browser session.
- **Features**:
  - Similar functionality to Task 3 but with session-specific storage.
  - Cart state is reset upon closing the browser tab.

---

### Task 5: Advanced Cart System with Quantities

- **Description**: Extends the shopping cart system with enhanced functionality and session-based storage.
- **Features**:
  - Tracks item quantities and dynamically updates the cart.
  - Allows users to:
    - Add items to the cart.
    - Remove specific items.
    - Clear the entire cart.
  - Interactive cart display, dynamically updated using JavaScript.
  - Persistent state across page refreshes but limited to the current session.

---

### Task 6: Replace localStorage with sessionStorage

- **Description**: Refactors the shopping cart system from **Task 3** to use `sessionStorage` instead of `localStorage`.
- **Features**:
  - Enables session-specific cart persistence.
  - Demonstrates how `sessionStorage` can be used to handle temporary state.
  - Cart state resets upon closing the browser tab, in contrast to the persistent behavior of `localStorage`.

---

### Task 7: Build a Fully Functional Cart System

- **Description**: Implements a complete shopping cart with advanced features.
- **Features**:
  - Tracks item quantities in the cart.
  - Displays items dynamically in the cart with the format: `ITEM_NAME x QUANTITY (remove)`.
  - Includes a "Clear My Cart" feature for resetting the entire cart.
  - Interactive functionality:
    - Add items by clicking on products in the store.
    - Remove specific items from the cart.
    - Fully update cart display in real-time based on user interactions.
  - Leverages `sessionStorage` to store cart state during a single session.

---

## Browser Compatibility

This project is compatible with modern browsers that support:
- localStorage
- sessionStorage
- JavaScript ES6 syntax
- Cookies (for js-cookie tasks)

##Author
- Tamara Walling
- Github: Scoob1
