import jsonData from '../Mock/transactions.json';

export const DATA = jsonData;

export const TRANSACTIONS = DATA.transactions.map(transaction => {
  if (transaction.type === 'credit') {
    DATA.balance += transaction.amount;
    transaction.balance = DATA.balance;
  } else {
    DATA.balance -= transaction.amount;
    transaction.balance = DATA.balance;
  }
  return transaction;
});
