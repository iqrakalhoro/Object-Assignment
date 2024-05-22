// Part # 1 Employee Data
type Employee = {
    name: string; 
    dept: string;
    role: "Manager" | "Intern" | "Engineer";
    contact?: contact ;
    skills?: string}
type contact = {
        phone?: number,
        email?: string,
    }
type skill = {
    skills?: "Business Management" | "Problem Solving" | " Finanacial Analysis "
}
const employee1: Employee = {
    name: "Ali Khan",
    dept: "finance",
    role: "Manager",
    contact: {
        phone: +923452727333,
        email: "alikhan_02@gmail.com"
    },
    skills: "Financial Analysis"
}
const employee2: Employee = {
    name: "Ali Hamza",
    dept: "Human Resource",
    role: "Intern",
    contact: {
        phone: +923272664732
    },
}
const employee3: Employee = {
    name: "Bilal",
    dept: " Reseach",
    role: "Engineer"
}
console.log("Employee 1", employee1)
console.log("Employee 2", employee2)
console.log("Employee 3", employee3)
