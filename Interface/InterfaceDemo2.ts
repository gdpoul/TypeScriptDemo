interface I1
{
    a: number;
    b: number;
    sum():number;
}

interface I2 extends I1
{
    x:number;
    y:number;
    sub():number;
}

class C1 implements I2
{
    a: number;
    b: number;
    x:number;
    y:number;

    sum():number
    {
        return (this.a+this.b);
    }
    sub():number
    {
        return (this.x-this.y);
    }
}

var obj=new C1();
obj.a=100;
obj.b=300;
obj.x=2000;
obj.y=1000;

console.log(obj.sum());
console.log(obj.sub());

