abstract class BankAccount {
    nr_konta: number;
    saldo: number;
    wlasciciel: string;

    constructor(nr_konta: number, saldo: number, wlasciciel: string) {
        this.nr_konta = nr_konta;
        this.saldo = saldo;
        this.wlasciciel = wlasciciel;
    }
}

class SavingAccounts extends BankAccount {
    interestRate: number;
    minimumBalance: number;
    isLocked: boolean;

    constructor(nr_konta: number, saldo: number, wlasciciel: string, interestRate: number, minimumBalance: number, isLocked: boolean) {
        super(nr_konta, saldo, wlasciciel);
        this.interestRate = interestRate;
        this.minimumBalance = minimumBalance;
        this.isLocked = isLocked;
    }

    calculateInterest(): number {
        return (this.saldo * this.interestRate) / 100; //oblicza odsetki  na rok
    }
}

class CheckingAccount extends BankAccount {
    overdraftLimit: number;

    constructor(nr_konta: number, saldo: number, wlasciciel: string, overdraftLimit: number) {
        super(nr_konta, saldo, wlasciciel);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.saldo + this.overdraftLimit) {
            this.saldo -= amount;
            return true;
        } else {
            return false;
        }
    }
}

class LoanAccount extends BankAccount {
    interestRate: number;
    loanAmount: number;
    loanTerm: number;

    constructor(nr_konta: number, saldo: number, wlasciciel: string, interestRate: number, loanAmount: number, loanTerm: number) {
        super(nr_konta, saldo, wlasciciel);
        this.interestRate = interestRate;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
    }
}

class Bank {
    private accounts: BankAccount[] = [];

    addAccount(account: BankAccount): void {
        this.accounts.push(account);
    }

    getTotalBalance(): number {
        let totalBalance = 0;
        this.accounts.forEach(account => {
            totalBalance += account.saldo;
        });
        return totalBalance;
    }
   constructor(){
         this.accounts = [];
   }   
}

const bank1 = new Bank();

const konto1 = new SavingAccounts(123, 1000, "Jan Kowalski", 5, 100, false);
const konto2 = new CheckingAccount(124, 2000, "Adam Nowak", 100);

bank1.addAccount(konto1);
bank1.addAccount(konto2);

console.log(bank1.getTotalBalance());

