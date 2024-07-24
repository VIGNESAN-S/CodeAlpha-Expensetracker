let balance = 0;

document.getElementById('addTransaction').addEventListener('click', () => {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount');
        return;
    }

    const transaction = {
        description,
        amount,
        type
    };

    addTransaction(transaction);
    updateBalance(transaction);
    updateTransactionList(transaction);

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});

function addTransaction(transaction) {
    balance += transaction.type === 'income' ? transaction.amount : -transaction.amount;
}

function updateBalance(transaction) {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function updateTransactionList(transaction) {
    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.classList.add(transaction.type);
    listItem.innerHTML = `${transaction.description} <span>${transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}</span>`;
    transactionList.appendChild(listItem);
}
