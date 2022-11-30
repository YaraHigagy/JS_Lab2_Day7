class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  sleep(hour){
    if(hour == 7){
      this.sleepMood = "Happy";
    }else if(hour < 7){
      this.sleepMood =  "Tired";
    }else if(hour > 7){
      this.sleepMood =  "Lazy";
    }
    return this.sleepMood;
  }
  eat(meals){
    if(meals == 3){
      this.healthRate = 100;
    }else if(meals == 2){
      this.healthRate =  75;
    }else if(meals == 1){
      this.healthRate =  50;
    }
    return this.healthRate;
  }
  buy(item){
    return this.money -= item * 10;
  }
}

class Employee extends Person {
  constructor(id, email, fullName, money, sleepMood, healthRat, workMood, isManager) {
    super(fullName, money, sleepMood, healthRat);
    this.id = 0;
    this.email = email;
    this.workMood = workMood;
    this.isManager = false;
  }
  
  #salary = 1000;
  get salary (){
    return this.#salary;
  }
  set salary(value){
    this.#salary = value;
    if(value < 1000) this.#salary = 1000;
  }
  eat(meals){
    if(meals == 3){
      this.healthRate = 100;
    }else if(meals == 2){
      this.healthRate =  75;
    }else if(meals == 1){
      this.healthRate =  50;
    }
    if(this.healthRate < 0) this.healthRate = 0;
    if(this.healthRate > 100) this.healthRate = 100;
    return this.healthRate;
  }
  work(hour) {
    if(hour == 8){
      this.workMood = "Happy";
    }else if(hour > 8){
      this.workMood =  "Tired";
    }else if(hour < 8){
      this.workMood =  "Lazy";
    }
    return this.sleepMood;  
  }
}

class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }
  getAllEmployees() {
    console.log(dataBase);
  }
  getEmployee(empData) {
    var empName = prompt("Enter your fullName to show your data:");
  var empData = dataBase.find(item => item.fullName === empName);
  console.log(empData);
  return empData;
  }
  fire() {
    delEmp = prompt("Enter fullName of the employee:");
    for(var item in dataBase){
      if(delEmp == item.fullName){
        dataBase.splice(item, 1);
      }
    }
    console.log(dataBase);
  }
  hire() {
    addEmp();
  }
}

//========================================================

var data, empData, delEmp;
//var idRound = 1;  // worked with for...in method
var iD = 0;
const dataBase = [];
const office = new Office;

function startMenu(){
  var start = prompt("Choose an order:\n\
  1- (add) to add a new employee.\n\
  2- (mngr) if manager.\n\
  3- (nrml) if normal employee.");
  switch(start){
    case "add":
      addEmp();
      //idRound ++;  // worked with for...in method
      break;
    case "mngr":
      mngrRole();
      break;
    case "nrml":
      //normRole();
      office.getEmployee(empData);
      break;
    default:
      confirm("Please choose one.");
      break;
  }
}

function addEmp(){
  iD ++;
  const emp = {
    id: iD,
    email: prompt("Enter your email:"),
    fullName: prompt("Enter your fullName:"),
    money: prompt("Enter your total pocket money:"),
    shour: prompt("Enter your sleeping hours:"),
    meals: prompt("Enter your meals' number per day:"),
    whour: prompt("Enter your working hours:"),
    isManager: prompt("Enter true if you are a manager:"),
  }
  dataBase.push(emp);
  //console.log(emp);
  return this.id = emp.id, this.email = emp.email, this.fullName = emp.fullName,
  this.money = emp.money, this.sleepMood = emp.sleepMood, this.healthRat = emp.healthRat,
  this.workMood = emp.workMood, this.isManagerd = emp.isManager;
}

function mngrRole(){
  var mngrMenu = prompt("Choose an order:\n\
  1- (add mngr) to add a new Manager from the listed employees array.\n\
  2- (hire) if hiring new employee.\n\
  3- (fire) if firing an employee.");
  switch(mngrMenu){
    case "listed employees":
      office.getAllEmployees();
      break;
    case "add mngr":
      addMngr();
      break;
    case "hire":
      office.hire();
      break;
    case "fire":
      office.fire();
      break;
    default:
      confirm("Please choose one.");
      break;
  }
}

// function normRole(){
//   getEmployee();
// }

// function addMngr(){
//   office.getEmployee(empData);
//   empData.isManager = true;
//   console.log(empData);
// }

// function addEmp(){
//   const emp = new Employee;
//   emp.id += idRound;
//   // for(var add in Employee.parameters){
//   //   add = prompt(`${data}`);
//   //   //console.log(emp);
//   // }
//   for(var add in emp){
//     if (add == emp.id) continue;
//     add = prompt(`${emp}`);
//     //Employee.emp.push(add);
//   }
//   dataBase.push(emp);
//   console.log(emp);
// }