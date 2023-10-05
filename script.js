document.addEventListener('DOMContentLoaded', function () {
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');
    const addExpenseBtn = document.getElementById('add-expense');
    const expenseList = document.getElementById('expense-list');

    addExpenseBtn.addEventListener('click', function () {
        const product = productInput.value;
        const price = parseFloat(priceInput.value);

        if (product && !isNaN(price)) {
            addExpenseToList(product, price);
            clearInputFields();
        } else {
            alert('Please enter a valid product and price.');
        }
    });

    function addExpenseToList(product, price) {
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const priceCell = document.createElement('td');

        productCell.textContent = product;
        priceCell.textContent = price.toFixed(2);

        row.appendChild(productCell);
        row.appendChild(priceCell);

        expenseList.appendChild(row);
    }

    function clearInputFields() {
        productInput.value = '';
        priceInput.value = '';
    }
});
