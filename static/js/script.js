let currentBill = [];
const GST_RATE = 0.10; // 10% GST
const DISCOUNT_RATE = 0.05; // 5% Discount

function startOrder() {
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    document.getElementById('menu-section').style.display = 'block';
}

function selectCuisine(cuisine) {
    fetch(`/menu/${cuisine}`)
        .then(response => response.json())
        .then(data => {
            displayMenu(data);
        })
        .catch(err => console.error(err));
}

function displayMenu(data) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    data.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.style.marginBottom = '10px';

        const itemLabel = document.createElement('span');
        itemLabel.textContent = `${item.name} - Rs.${item.price}`;

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.max = 20;
        quantityInput.value = 1;
        quantityInput.style.marginLeft = '10px';
        quantityInput.style.width = '50px';

        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.style.marginLeft = '10px';
        addButton.onclick = () => addToOrder(item.name, item.price, parseInt(quantityInput.value));

        menuItem.appendChild(itemLabel);
        menuItem.appendChild(quantityInput);
        menuItem.appendChild(addButton);

        menuList.appendChild(menuItem);
    });
    document.getElementById('menu-items').style.display = 'block';
}

function addToOrder(itemName, itemPrice, quantity) {
    if (quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }
    currentBill.push({ name: itemName, price: itemPrice, quantity: quantity });
    alert(`${itemName} added to your order! Quantity: ${quantity}`);
}

function finishOrder() {
    if (currentBill.length === 0) {
        alert("Your order is empty. Please add items to your order.");
        return;
    }

    const billItemsTable = document.getElementById('bill-items');
    billItemsTable.innerHTML = ''; // Clear existing rows

    let subtotal = 0;
    currentBill.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');

        const itemNameCell = document.createElement('td');
        itemNameCell.textContent = item.name;

        const itemPriceCell = document.createElement('td');
        itemPriceCell.textContent = item.price;

        const itemQuantityCell = document.createElement('td');
        itemQuantityCell.textContent = item.quantity;

        const itemTotalCell = document.createElement('td');
        itemTotalCell.textContent = itemTotal;

        row.appendChild(itemNameCell);
        row.appendChild(itemPriceCell);
        row.appendChild(itemQuantityCell);
        row.appendChild(itemTotalCell);

        billItemsTable.appendChild(row);
    });

    const gst = Math.round(subtotal * GST_RATE);
    const discount = Math.round(subtotal * DISCOUNT_RATE);
    const total = Math.round(subtotal + gst - discount);

    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('gst').textContent = gst;
    document.getElementById('discount').textContent = discount;
    document.getElementById('total').textContent = total;

    const now = new Date();
    document.getElementById('bill-time').textContent = now.toLocaleTimeString();
    document.getElementById('bill-date').textContent = now.toLocaleDateString();

    document.getElementById('menu-section').style.display = 'none';
    document.getElementById('menu-items').style.display = 'none';
    document.getElementById('bill-summary').style.display = 'block';
}

function addMoreItems() {
    document.getElementById('bill-summary').style.display = 'none';
    document.getElementById('menu-section').style.display = 'block';
    document.getElementById('menu-items').style.display = 'block';
}

function resetOrder() {
    currentBill = [];
    document.getElementById('bill-summary').style.display = 'none';
    document.getElementById('menu-section').style.display = 'none';
    document.getElementById('name-form').style.display = 'block';
}

function printReceipt() {
    const printContents = document.getElementById('bill-summary').innerHTML;
    const originalContents = document.body.innerHTML;

    // Temporarily set the body's content to the bill summary for printing
    document.body.innerHTML = printContents;

    // Trigger the print dialog
    window.print();

    // Restore the original content after printing
    document.body.innerHTML = originalContents;
}
