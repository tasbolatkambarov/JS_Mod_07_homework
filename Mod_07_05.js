// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

class Device {
  
    constructor(name) {
      this.name = name;
      this.material = 'aluminium';
      this.color = 'grey';
      this.powerSource = 'network';
      this.status = 'OFF';
    }
   
    turnOn() {
      this.status = 'ON';
      console.log(this.name + ' is ON.');
    }
    
    turnOff() {
      this.status = 'OFF';
      console.log(this.name + ' is OFF.');
    }
  }
  
  // child Big Devise class
  class BigDevice extends Device {
    
    constructor(name) {
      super();
      this.name = name;
      this.power = '700 W';
    }
    
    setBrightness() {
      if (this.status == 'ON') {
        let brightness = +prompt('Enter brightness', 10);
        console.log(`${this.name} has brightness is ${brightness}. Power: ${this.power}.`);
      } 
      else {
        console.log(`${this.name} is still ${this.status}. To set brightness the computer must be turn on`); 
      }
    }
    
    setText() {
      if (this.status == 'ON') {
        let text = prompt('Enter text', 'abc');
        console.log(`${this.name} text: ${text}.`);
      }
      else {
        console.log(`${this.name} is still ${this.status}. To enter text the computer must be turn on.`); 
      }
    }
    
  }
  
  const computer = new BigDevice('computer');
  computer.setBrightness();
  computer.setText();
  
  computer.turnOn();
  computer.setBrightness();
  computer.setText();
  computer.turnOff();
  
  
  // child small devise
  class SmallDevice extends Device {
    
    constructor(name) {
      super();
      this.name = name;
      this.power = '80 W';
      this.countChangeBulb = 0;
    }
  
    changeBulb() {
      ++this.countChangeBulb;
      console.log(`${this.name} light bulb is changed ${this.countChangeBulb} time's.`);
    }
  }
  
  const tableLamp = new SmallDevice('table lamp');
  tableLamp.changeBulb();
  tableLamp.changeBulb();