var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(nr_konta, saldo, wlasciciel) {
        this.nr_konta = nr_konta;
        this.saldo = saldo;
        this.wlasciciel = wlasciciel;
    }
    return BankAccount;
}());
var SavingAccounts = /** @class */ (function (_super) {
    __extends(SavingAccounts, _super);
    function SavingAccounts(nr_konta, saldo, wlasciciel, interestRate, minimumBalance, isLocked) {
        var _this = _super.call(this, nr_konta, saldo, wlasciciel) || this;
        _this.interestRate = interestRate;
        _this.minimumBalance = minimumBalance;
        _this.isLocked = isLocked;
        return _this;
    }
    SavingAccounts.prototype.calculateInterest = function () {
        return (this.saldo * this.interestRate) / 100; //oblicza odsetki  na rok
    };
    return SavingAccounts;
}(BankAccount));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(nr_konta, saldo, wlasciciel, overdraftLimit) {
        var _this = _super.call(this, nr_konta, saldo, wlasciciel) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount <= this.saldo + this.overdraftLimit) {
            this.saldo -= amount;
            return true;
        }
        else {
            return false;
        }
    };
    return CheckingAccount;
}(BankAccount));
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(nr_konta, saldo, wlasciciel, interestRate, loanAmount, loanTerm) {
        var _this = _super.call(this, nr_konta, saldo, wlasciciel) || this;
        _this.interestRate = interestRate;
        _this.loanAmount = loanAmount;
        _this.loanTerm = loanTerm;
        return _this;
    }
    return LoanAccount;
}(BankAccount));
var Bank = /** @class */ (function () {
    function Bank() {
        this.accounts = [];
        this.accounts = [];
    }
    Bank.prototype.addAccount = function (account) {
        this.accounts.push(account);
    };
    Bank.prototype.getTotalBalance = function () {
        var totalBalance = 0;
        this.accounts.forEach(function (account) {
            totalBalance += account.saldo;
        });
        return totalBalance;
    };
    return Bank;
}());
var bank1 = new Bank();
var konto1 = new SavingAccounts(123, 1000, "Jan Kowalski", 5, 100, false);
var konto2 = new CheckingAccount(124, 2000, "Adam Nowak", 100);
bank1.addAccount(konto1);
bank1.addAccount(konto2);
console.log(bank1.getTotalBalance());
