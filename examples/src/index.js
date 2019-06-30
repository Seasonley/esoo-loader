
const {Num,Math} = require("../../src/Num.js")
function main(){
    'oo enable';
    var a,b,c;
    a=new Num(0.1)
    b=new Num(0.2)
    c=a+b;
    console.log(c===0.3)
    a=new Num(1/3)
    b=new Num(4/3)
    console.log(a*3,b)
    console.log(a*4===b)
}
main()