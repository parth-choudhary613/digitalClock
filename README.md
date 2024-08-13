

# Digital Clock

**Digital Clock** is a simple, responsive web-based clock designed using **HTML**, **CSS**, and **JavaScript**. This project demonstrates the use of basic web technologies to create a visually appealing and functional digital clock.

## 🕒 **Project Overview**

This project features:
- **HTML** to structure the page.
- **CSS** to style the clock with a gradient background, border, and animation effects.
- **JavaScript** to dynamically update the clock every second.

## 📋 **Features**
- **Real-time Clock**: Displays the current time, updating every second.
- **12-hour Format**: The clock shows time in a 12-hour format with AM/PM indicators.
- **Responsive Design**: The clock is centered on the screen and adjusts to different screen sizes.
- **Stylish UI**: The clock has a colorful and modern user interface with gradient backgrounds and border effects.

## 🛠 **Technologies Used**
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## 📁 **Project Structure**

```plaintext
Digital Clock/
│
├── index.html        # Main HTML file
├── digital.css       # Stylesheet for the clock
└── digital.js        # JavaScript for clock functionality
```

## 🔧 **How to Use**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/digital-clock.git
    ```
   
2. **Navigate to the Project Directory**:
    ```bash
    cd digital-clock
    ```
   
3. **Open `index.html`** in your web browser to view the digital clock.

## ✨ **How It Works**

- **HTML**: The clock is enclosed within a container and is displayed using the `<div>` tag with the `id="clock"`.
  
- **CSS**: The clock's design features a gradient background, rounded borders, and shadow effects. The `@keyframes` and `backdrop-filter` properties are used to enhance the look of the clock.
  
- **JavaScript**: The `updateClock` function retrieves the current time, formats it into a 12-hour format, and updates the content of the `clock` element every second.

