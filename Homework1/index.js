// Remove all null and undefined values !!!
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
// function getMissingNumber(num: number): void {
//   let telNum = [9, 4, 6, 3, 7, 6, 0, 4];
//   const telNumber: number[] = []
//   while (num !== 0) {
//     const lastDigit = num % 10
//     telNumber[telNumber.length] = lastDigit;
//     num = (num - lastDigit) / 10
//   }
//   for (let i = 0; i <= telNum.length; i++) {
//     let haveNum = false;
//     for (let j = 0; j <= telNumber.length; j++) {
//       if (num[i] === telNumber[j]) {
//         haveNum = true;
//         break;
//       }
//     }
//     if (!haveNum) {
//       console.log(num[i])
//     }
//   }
// }
// getMissingNumber()
function getMissingDigits(phoneNumber) {
    var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var phoneNumberDigits = [];
    while (phoneNumber !== 0) {
        var lastDigit = phoneNumber % 10;
        phoneNumberDigits[phoneNumberDigits.length] = lastDigit;
        phoneNumber = (phoneNumber - lastDigit) / 10;
    }
    for (var i = 0; i <= digits.length; i++) {
        var haveDigit = false;
        for (var j = 0; j <= phoneNumberDigits.length; j++) {
            if (digits[i] === phoneNumberDigits[j]) {
                haveDigit = true;
                break;
            }
        }
        if (!haveDigit) {
            console.log(digits[i]);
        }
    }
}
