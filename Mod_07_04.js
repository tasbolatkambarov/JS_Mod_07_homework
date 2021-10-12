// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Devise(name) {

  this.name = name;
  this.material = 'aluminium';
  this.color = 'grey';
  this.powerSource = 'network';

}

Devise.prototype.turnOn = function() {

  console.log(this.name + ' is ON.');

}

Devise.prototype.turnOff = function() {

  console.log(this.name + ' is OFF.');

}

// class for big devise
function BigDevice(name) {

  this.name = name;
  this.power = '700 W';

}

BigDevice.prototype = new Devise();

BigDevice.prototype.brightness = function() {

  let brightness = +prompt('Enter brightness', 10);
  console.log(`${this.name} has brightness is ${brightness}. Power: ${this.power}.`);

}

BigDevice.prototype.setText = function() {

  let text = prompt('Enter text', 'abc');
  console.log(`${this.name} text: ${text}.`);

}

const computer = new BigDevice ('computer');

computer.turnOn();
computer.brightness();
computer.setText();
computer.turnOff();


// class for small devise
function SmallDevice(name) {

  this.name = name;
  this.power = '80 W';
  this.countChangeBulb = 0;
}

SmallDevice.prototype = new Devise();

SmallDevice.prototype.changeBulb = function() {

  ++this.countChangeBulb;
  console.log(`${this.name} light bulb is changed ${this.countChangeBulb} time's.`);

}

const tableLamp = new SmallDevice ('table lamp');
tableLamp.changeBulb();
tableLamp.changeBulb();