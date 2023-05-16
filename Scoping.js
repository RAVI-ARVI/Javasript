//scope const let and var
// var globel = "scope";
// {
//   const a = 10;
//   let b = "12";
//   console.log(a);
//   console.log(b);
// }
//var is global scope let and const are block scope you can only access in side of the scope only

//2.variyable  shadowing
// function shadowing() {
//   const a = "not show";
//   if (true) {
//     const a = "i show";
//     console.log(a); //i show
//   }
//   console.log(a) //not show
// }
// shadowing();
//shadowing means you can meanse you can over write the the variable
//desclamer we can only overwite var to let or const we can not do the rever things const to var this is know as illigal shadowing

//Declaration
// we con't re declare the const and let at same scope but with var we can do this thing
// let a;
// let a;
//reinitialisation
// with let and var we can re initialize a variable with const we can't
//let a=1;
// a=20
// const b=1;
// b=2 don't

//Hosting
// var anedhi global scole you can asses the value before the insilizing the value
//console.log(TEST) undified vasthudhi edhukantey callstack valla
// var TEST="t"
//let and const tho use chesthey error vasthu endhukaney there hosted Temporal Dead zone
