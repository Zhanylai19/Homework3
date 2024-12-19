let mas = [1, 2, 3];

mas=mas.map((el) =>{
    return  el * 2;
});
console.log(mas);  



let mas1 = [1, 2, 3, -4];
mas1.map((el, index) => {
  return el * (-1);
  
})
console.log(mas1);



let mas2 = [2, 3, 'pop', 4];
let newMas = mas2.map(el => {
    if  (typeof el === 'string'){
       return null;   
    } 
    return el;  
})
console.log(newMas);


let mas3 = ['Sasha', 'Kiril', 'Mashaa', 'Aigerim'];
let mass = mas3.filter((el) => {
    return el.length < 6;
})
console.log(mass);



let mas4 = [3, 4, 6];
let mas5 = mas4.map((el,index) => {
    return el ** 3;
})
console.log(mas5);


let lengh = mas3.map((el) => {
    return el.length
})
console.log(lengh);


let num = mas4.map((el) => {
    document.write(`<p> Цифры: ${el} </p>`)
})








