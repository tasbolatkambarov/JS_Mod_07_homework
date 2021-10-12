// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

const getObjEmpty = () => {
    return Object.create(null)
  }
  console.log( getObjEmpty() );