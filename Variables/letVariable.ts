let a=100;  // global variable

function add(){

    let name:string="Ganesh";
    console.log(a);   

    if(true){
        let l=20;
        l=21;
    }
    // console.log(l);  // cannot access outside the block
    console.log(name);
    
}
add();