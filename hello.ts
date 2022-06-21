class Customer{

    customerName=""  //property
    balance=0
    accountNumber=""

    txns:string[]=[]   //Syntax for string arrays


    //method
    constructor(customerName:string, balance:number,accountNumber:string){

        this.customerName=customerName
        this.balance = balance
        this.accountNumber= accountNumber

    }

    pay(amount:number,payeeAccountNumber:string){
        
        this.balance -= amount

        let payee:this = customers[payeeAccountNumber]

        payee.balance +=amount

        console.log(payee.balance)

        //We need to put the money into the payees account
        // Challenge for you guys ... 
        // Put the money in the payees account !!
        // ....
    
    }


}


let customers:any={}  //Key value pair of string->Customer 

customers["1234"] = new Customer("Bilal",1000,"1234")
customers["3455"] = new Customer("Toby",800,"3455")
customers["8888"] = new Customer("Zubair",400,"8888")


function pay(){

    alert("paying")

    //get the two account numbers
    let from = (<HTMLInputElement>document.getElementById("from")!).value    
    let to = (<HTMLInputElement>document.getElementById("to")!).value
    let amount = parseInt((<HTMLInputElement>document.getElementById("amount")!).value)

    let payer:Customer = customers[from]
    payer.pay(amount,to)

    let statementItem=document.createElement("div")
    document.body.appendChild(statementItem)
    statementItem.innerHTML = ` ${payer.customerName} ${payer.balance}`
 
}