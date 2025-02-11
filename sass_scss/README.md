# Atlas Web Front End - Sass/SCSS Tasks

This repository contains various **Sass/SCSS** tasks aimed at learning and mastering **Sass features**, including variables, nesting, mixins, loops, and imports.

## SCSS File Structure & Comments

All SCSS files must begin with a comment block:
```scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}

- To Install Sass

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Update npm
sudo npm install -g npm@10

# Install Sass
sudo npm install -g sass@^1.82.0

# Verify installation
sass --version


## Tasks Overview

### 0. Always Debugging!  
- Outputs `Hello world` in debug mode using Sass.

### 1. Color Variable  
- Assigns **text color #3D3D3D** to `body` and `p` using a Sass variable.

### 2. Colors  
- Uses **two variables** for text and background colors for `body`, `p`, and `h2`.

### 3. Nested Tag  
- Uses **nested selectors** to style `p` inside `body` with margin settings.

### 4. Nested Class  
- Styles elements inside `body` with `#3D3D3D` and applies `#FF0000` for `.red`.

### 5. Nested Child  
- Styles **first children** inside `body` differently using child selectors.

### 6. Nested Hover  
- Changes `button` text color on hover using **nested declarations**.

### 7. Nested and Nested Again  
- Uses **deep nesting** for setting different font sizes for `body`, `h1`, and `.smaller`.

### 8. Margin Mixin  
- Creates a **mixin** for margin settings applied to `body` and `div`.

### 9. Extended Styles  
- Uses **@extend** to share styles across `.info`, `.success`, and `.warning`.

### 10. Import Colors  
- Uses **@import** to bring in predefined color variables.

### 11. Loop with @each  
- Uses **@each** to generate `.photo-*` classes dynamically.

### 12. Loop Headers  
- Uses **@for** loop to set font sizes dynamically for `h1` to `h5`.

## How to Compile Sass
To compile the Sass files into CSS, use:
```bash
sass input.scss output.css
