
# Restaurant Order and Billing System

This is a simple restaurant order and billing system built using **HTML**, **CSS**, **JavaScript**, and **JavaScript ES6**. It allows users to select menu items, view their bill summary, and print a receipt. The system includes functionality for adding items to the order, applying GST and discounts, and displaying the order summary with a print option.

---

## Features

- **Order Management**: Users can select from different cuisines and add items to their order with specified quantities.
- **Bill Summary**: Displays the list of ordered items, subtotal, GST (10%), discount (5%), and total amount.
- **Date and Time**: Includes the current date and time when the bill is generated.
- **Print Receipt**: The receipt can be printed without including buttons.
- **Dynamic Interaction**: Users can add more items or reset the order entirely.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: This is a client-side project, but it can be easily adapted to fetch menus from a server using AJAX.
- **Print Features**: Uses JavaScript’s `window.print()` functionality to print the receipt.

---

## Installation

### Prerequisites

To run this project, all you need is a web browser. There is no server-side setup required for this version of the project.

### Steps to Run:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/restaurant-order-system.git
   ```

2. Navigate into the project directory:
   ```bash
   cd restaurant-order-system
   ```

3. Open the `index.html` file in your preferred browser.

---

## Usage

1. **Start a new order**: Enter your name and click "Start Order."
2. **Select cuisine and items**: Choose from various cuisines like Indian, Chinese, or Fast Food. Add items to the order with quantity.
3. **View Bill Summary**: Once the order is complete, click "Finish Order" to see the bill summary with GST, discount, and total amount.
4. **Add More Items**: Click "Add More Items" to go back and add more to the order.
5. **Print Receipt**: Click the "Print Receipt" button to generate a printable receipt.

---

## File Structure

```
restaurant-order-system/
│
├── index.html           # Main HTML file containing the structure of the page
├── style.css            # The CSS file for styling the application
├── script.js            # The JavaScript file for adding interactivity and logic
└── README.md            # Project documentation
```

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Let me know if you need any adjustments or additions to this README!