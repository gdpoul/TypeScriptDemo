class Bank
{
    interest:number=0;
    
    roi():number
    {
        return this.interest;
    }
}

class BankX extends Bank
{
    roi():number  //overriding
    {
        return 10.5;
    }
}

class BankY extends Bank
{
    roi():number
    {
        return 12;
    }
}

var x=new BankX();
console.log(x.roi());

var y=new BankY();
console.log(y.roi());