
// Remove all null and undefined values !!!

import { any, number } from "prop-types";

// type Person = {
//     firstName: string;
//     lastName: string;
//     age?: number | null;
//     profession?: {
//         name: string;
//         level: string;
//         stack: Array<{ name: string | null | undefined }>;
//     } | null | undefined;
// };

// const data: Person[] = [
//     {
//         firstName: "Karen",
//         lastName: "Karenyan",
//         age: null
//     },
//     {
//         firstName: "Karen",
//         lastName: "Karenyan",
//         age: 10,
//         profession: undefined
//     },
//     {
//         firstName: "Karen",
//         lastName: "Karenyan",
//         age: 18,
//         profession: {
//             name: "programmer",
//             level: "middle",
//             stack: [{ name: " Node Js" }, { name: "React Js" }, { name: undefined }]
//         }

//     }
// ];

// const removeNullUndefined = (data: Person[]) => {
//     return data.map((person) => {
//         const cleanPerson: Partial<Person> = {
//             firstName: person.firstName,
//             lastName: person.lastName,
//         };

//         if (person.age !== null && person.age !== undefined) {
//             cleanPerson.age = person.age;
//         }

//         if (person.profession !== undefined) {
//             cleanPerson.profession = person.profession;
//         }

//         if (cleanPerson.profession) {
//             const cleanProfession: Person['profession'] = {
//                 name: cleanPerson.profession.name,
//                 level: cleanPerson.profession.level,
//                 stack: cleanPerson.profession.stack.filter((item) => item.name !== undefined),
//             };

//             if (Object.keys(cleanProfession).length > 0) {
//                 cleanPerson.profession = cleanProfession;
//             } else {
//                 cleanPerson.profession = undefined;
//             }
//         }

//         return cleanPerson as Person;
//     });
// };

// const filteredData = removeNullUndefined(data);
// console.log(filteredData, 'filteredData');




// Check the numbers are Palindrome or not !!!

// let num: number = 1738371;
// function isPalindrome(num: number){
//     let digits = Math.floor(Math.log10(num) + 1);
//     while (digits > 1) {
//         const num1 = Math.pow(10, digits - 1);
//         const firstNum = Math.floor(num / num1);
//         const lastNum = Math.floor(num % 10);

//         if (firstNum !== lastNum) {
//             return "This  number is not Palindrome";
//         } else {
//             return "This  number is Palindrome";
//         }
//     }
// }

// console.log(isPalindrome(num));




// Find missing number


// function ShowMissingNumber(num: number[]): void {
//   const max = Math.max(10);
//   const min = Math.min(1);
//   const missing: number[] = []

//   for (let i = min; i <= max; i++) {
//     if (!num.includes(i)) {
//       missing.push(i);
//     }
//   }
//   console.log(missing);

// }

// ShowMissingNumber([1, 8, 9]);







