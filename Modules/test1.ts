// varaiable
export var x: string="welcome";

// simple function
export function myfun():void{
    console.log("this is my function..");
}

// create class
export class Myclass
{
    a:number;
    b:number;
    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;
    }

    add=()=>
    {
        return(this.a+this.b);
    }
}