// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

let programming = {
    webDev: "JS",
    server: "Java",
    datsScience: "Phyton",
  };
  
function output() {
   for (let key in programming) {
     if (programming.hasOwnProperty(key)) {
       console.log(key, programming[key]);
     }
   }
 }
output(programming);