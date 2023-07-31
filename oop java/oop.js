class BankAccount {
    constructor(username, accountNumber, pincode, bankName, currentAmount) {
      this.username = username;
      this.accountNumber = accountNumber;
      this.pincode = pincode;
      this.bankName = bankName;
      this.currentAmount = currentAmount;
    }

    deposit(amount) {
      this.currentAmount += amount;
      console.log(`Deposit successful! New balance: ${this.currentAmount}`);
    }

    withdraw(amount) {
      if (amount <= this.currentAmount) {
        this.currentAmount -= amount;
        console.log(`Withdrawal successful! New balance: ${this.currentAmount}`);
      } else {
        console.log('Insufficient balance');
      }
    }
  }

 
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const username = form.username.value;
    const accountNumber = form.accountNumber.value;
    const pincode = form.pincode.value;
    const bankName = form.bankName.value;
    const currentAmount = parseFloat(form.currentAmount.value);

    const bankAccount = new BankAccount(username, accountNumber, pincode, bankName, currentAmount);

    console.log(bankAccount); 
  }