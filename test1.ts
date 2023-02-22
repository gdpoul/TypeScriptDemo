class ParentClass{
    
    name:string;
    id:number;

     demo(){
     console.log("My demo ");
     
    }
}

class Child extends ParentClass{

    a:number;
    b:string;

    demo2(){
        console.log("my demo 2");
        
    }
}
var obj=new Child();
obj.