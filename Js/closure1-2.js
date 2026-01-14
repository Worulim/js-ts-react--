function createBankAccount(initialBalance = 0) {
  const _initBal = initialBalance;
  let balance = _initBal;

  const history = [];

  return {
    deposit: (amount) => {
      if (amount <= 0) return false;
      balance += amount;
      history.push({ type: "deposit", amount });
      return true;
    },

    withdraw: (amount) => {
      if (amount <= 0 || amount > balance) return false;
      balance -= amount;
      history.push({ type: "withdraw", amount });
      return true;
    },

    getBalance: () => balance,           // ✅ 여기 쉼표(,) 필수!
    getHistory: () => [...history],      // ✅ 객체 안에서 정상 문법
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.getHistory());
