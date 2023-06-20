const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

const tax = 0.2 * (basicSalary + benefits);
const nhifDeductions = 0.05 * (basicSalary + benefits);
const nssfDeductions = 0.1 * basicSalary;
const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);
const grossSalary = basicSalary + benefits;

console.log("NHIF Deductions:", nhifDeduction);
console.log("NSSF Deductions:", nssfDeduction);
console.log("Net Salary", netsalary);
console.log("Gross Salary", grosssalary);