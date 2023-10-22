// OOP Company structure !!!

// class Company {
//   name: string;
//   ceo: object[];
//   projectManagers: object[];
//   programmers: object[];

//   constructor(name: string) {
//     this.name = name
//     this.ceo = []
//     this.projectManagers = []
//     this.programmers = []
//   }
//   addProgrammer(Programmer: object) {
//     return this.programmers.push(Programmer)

//   }

//   addprojectManagers(Projectmanager: object) {
//     return this.projectManagers.push(Projectmanager)
//   }

//   addCeo(Ceo: object) {
//     return this.ceo.push(Ceo)
//   }
// }

// class Human {
//   name: string
//   age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }

// }

// class Ceo extends Human {
//   tasks: string
//   programmer: object[]
//   pmanager: object[]
//   constructor(name: string, age: number, tasks: string) {
//     super(name, age)
//     this.tasks = tasks
//     this.programmer = []
//     this.pmanager = []

//   }

//   addProgrammer(Programmer: object) {
//     return this.programmer.push(Programmer)
//   }

//   addPm(Projectmanager: object) {
//     return this.pmanager.push(Projectmanager)
//   }
// }

// class Projectmanager extends Human {
//   projects: string
//   programmer: object[]
//   constructor(name: string, age: number, projects: string) {
//     super(name, age)
//     this.projects = projects
//     this.programmer = []
//   }
//   addProgrammer(programmer1: object) {
//     return this.programmer.push(programmer1)
//   }
// }

// class Programmer extends Human {
//   profession: string
//   constructor(name: string, age: number, profession: string) {
//     super(name, age)
//     this.profession = profession
//   }
// }
// const Ceo1 = new Ceo("Kate", 77, "Redux")
// const Company1 = new Company("Programmer Company")
// const programmer1 = new Programmer("Karen", 88, "Developer")
// const pm1 = new Projectmanager("Davit", 33, "ToDo")
// Ceo1.addProgrammer(programmer1)
// console.log(Ceo1.programmer);
// Ceo1.addPm(pm1)
// console.log(Ceo1.pmanager);
// Company1.addProgrammer(programmer1)
// console.log(Company1.programmers);
// Company1.addCeo(Ceo1)
// console.log(Company1.ceo);
// Company1.addprojectManagers(pm1)
// console.log(Company1.projectManagers);



