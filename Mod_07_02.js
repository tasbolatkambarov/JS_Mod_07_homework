// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let str = "color";
let autoObj = {
  mark: "Honda",
  model: "Prelude",
  power: 220,
  moment: 221,
  color: "red",
};

function checkProperty(str, obj) {
  for (let key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}
console.log(checkProperty(str, autoObj));