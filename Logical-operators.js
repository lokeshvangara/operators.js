// Logical operators

var x=45
var y=25
var z=65

if (x>y && x>z){
    console.log("x is greater then y and z")
}
else if (x>y && x>z) {
    console.log("z is greater then y and x")
}else{
    console.log(" y is greater number")
};


if (x>y || x<z){
    console.log("x is greater then y and z")
}
else if (x>y || x==z) {
    console.log("z is greater then y and x")
}else{
    console.log(" y is greater number")
};
