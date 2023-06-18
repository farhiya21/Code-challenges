const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

const tax = 0.2 * (basicSalary + benefits);
const nhifDeductions = 0.05 * (basicSalary + benefits);
const nssfDeductions = 0.1 * basicSalary;
const grossSalary = basicSalary + benefits;
const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);

console.log("Payee (Tax):", tax);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Gross Salary:", grossSalary);
console.log("Net Salary:", netSalary);