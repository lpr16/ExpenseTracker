document.addEventListener('DOMContentLoaded', function () {
    const sourceInput = document.getElementById('source');
    const amountInput = document.getElementById('amount');
    const addIncomeBtn = document.getElementById('add-income');
    const incomeList = document.getElementById('income-list');

    addIncomeBtn.addEventListener('click', function () {
        const source = sourceInput.value;
        const amount = parseFloat(amountInput.value);

        if (source && !isNaN(amount)) {
            addIncomeToList(source, amount);
            clearInputFields();
        } else {
            alert('Please enter a valid source and amount.');
        }
    });

    function addIncomeToList(source, amount) {
        const row = document.createElement('tr');
        const sourceCell = document.createElement('td');
        const amountCell = document.createElement('td');

        sourceCell.textContent = source;
        amountCell.textContent = amount.toFixed(2);

        row.appendChild(sourceCell);
        row.appendChild(amountCell);

        incomeList.appendChild(row);
    }

    function clearInputFields() {
        sourceInput.value = '';
        amountInput.value = '';
    }
});
