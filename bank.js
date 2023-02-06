
class Account{
    constructor(name){
        this.name = name
        this.balance = 0
    }
    credit(amount){
        this.balance += amount
    }
    describe(){
        console.log(`Owner : ${this.name}, Balance : ${this.balance} `);
    }
}

const account1 = new Account('Sean')
const account2 = new Account('Brad')
const account3 = new Account('Georges')

let accounts = [account1,account2,account3]
accounts.forEach((account)=>{
    account.credit(1000)
    account.describe()
})