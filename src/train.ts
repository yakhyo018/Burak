// MIT TASK T

function mergeSortedArrays(array1: number[], array2: number[]): number[] {
  const result: number[] = [];
  let j = 0;
  let i = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// MIT TASK S

// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   let expectedSum = 0;
//   let actualSum = 0;

//   for (let i = 0; i <= n; i++) {
//     expectedSum += i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     actualSum += nums[i];
//   }

//   return expectedSum - actualSum;
// }
// console.log(missingNumber([5, 2, 3, 0, 1]));
// // MIT TASK R

// function calculate(str: string): number {
//   const numbers = str.split("+");

//   return Number(numbers[0]) + Number(numbers[1]);
// }
// console.log(calculate("1+3"));

// MIT TASK Q

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// MIT TASK P

// function objectToArray(obj: Record<string, any>) {
//   const result = [];

//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log("Result:", objectToArray({ a: 10, b: 20 }));

//MIT TASK O

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (let item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(
//   calculateSumOfNumbers([30, "10", { son: 10 }, true, false, 35, 100]),
// );

// MIT TASK N

// function palindromCheck(txt: string) {
//   let reversed = txt.split("").reverse().join("");

//   return reversed === txt;
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("brother"));

// MIT TASK M

// function getSquareNumbers(arr: number[]) {
//   return arr.map((ele: number) => {
//     return {
//       number: ele,
//       square: (ele *= 2),
//     };
//   });
// }
// console.log(getSquareNumbers([1, 2, 6, 3, 5, 7, 8]));

// MIT TASK L

// function reverseSentence(txt: string): string {
//   return txt
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
// const result = reverseSentence("i like typescript");
// console.log("result:", result);

// MIT TASK K

// function countVowels(txt) {
//   let vowel = 0;
//   for (let character of txt) {
//     if ("aeiou".includes(character)) {
//       vowel++;
//     }
//   }
//   return vowel;
// }
// const result = countVowels("Lorem Ipsum is simply dummy text of the printing ");
// console.log("result:", result);

// MIT TASK J

// function findLongestWord(txt) {
//     let words = txt.split(" ");
//     let longest = words[0]

//     for(let word of words) {
//         if(word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }

// const result = findLongestWord("Lorem Ipsum is simply dummy text of the printing and typesetting industry")
// console.log("result:", result);

// MIT TASK I

// function majorityElement(arr) {
//     const map = new Map();

//     for(let num of arr) {
//         if(map.has(num)) {
//             map.set(num, map.get(num)+1)
//         } else {
//             map.set(num, 1)
//         }

//     }

//     let maxCount = 0;
//     let result = null;

//     for(let [key, value] of map) {
//         if(value > maxCount) {
//             maxCount = value;
//             result = key;
//         }
//     }
//     return result;
// }
// const new_result = majorityElement([1,2,3,4,5,4,3,4]);
// console.log("new_result:", new_result);

// MIT TASK H

// function getPositive(arr){
//     let result = "";
//     for(const item of arr) {
//         if(item > 0) {
//             result += item;
//         }
//     }
//     return result
// }

// console.log("Result:", getPositive([-3, 3, -1, 5, -2, 1]));

//MIT TASK G

// function getHighestIndex(array) {
//     let biggest = array[0]
//     let highestIndex = 0

//     for (let i = 0; i < array.length; i++){
//         if (array[i] > biggest) {
//         biggest = array[i];
//         highestIndex = i
//         }
//     }
//     return highestIndex;
// }
// result = getHighestIndex([3,100,10,60,20,30, 200,])
// console.log(`Result: ${result}`)

//MIT TASK F

// function findDoublers(text) {
//     for (let char of text) {
//         let count = 0;

//         for (let i of text) {
//             if (i === char) {
//                 count++;
//             }
//         }

//         if (count > 1) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(findDoublers("hello"));
// console.log(findDoublers("gul"));

// MIT TASK E

// function getReverse(a) {
//   let result = ""
//   for (let i = a.length -1; i >= 0; i--) {
//     result += a[i]
//   }
//   return result
// }
// console.log(getReverse("hello"));

// function getReverse(a) {
//   return a.split("").reverse().join("");
// }
// console.log(getReverse("hello"))

//MIT TASK D

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   getTime() {
//     return new Date().toLocaleTimeString("en-GB", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   }

//   getStock() {
//     const time = this.getTime();
//     return `hozir ${time} da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola qoldi!`;
//   }

//   sell(product, amount) {
//     if (this[product] >= amount) {
//       this[product] -= amount;
//       console.log(`${this.getTime()} da ${amount} ${product} sotildi`);
//     } else {
//       console.log(`Yetarli ${product} yoq!`);
//     }
//   }

//   addProduct(product, amount) {
//     this[product] += amount;
//     console.log(`${this.getTime()} da ${amount} ta ${product} qoshildi!`);
//   }
// }

// const myShop = new Shop(10, 7, 5);
// console.log(myShop.getStock());
// myShop.sell("non", 2);
// myShop.sell("cola", 2);
// myShop.sell("lagmon", 2);
// myShop.addProduct("cola", 5);
// console.log(myShop.getStock());

// MIT TASK C
// function checkContent(a, b) {
//   if (a.length !== b.length) return false;

//   return a.split("").sort().join("") === b.split("").sort().join("");
// }

// console.log(checkContent("mitgroup", "gmtiprou"));

//MIT TASK B
// function countDigits(str) {
//     let count = 0;

//     for (let char of str) {
//         if (!isNaN(char) && char !== " ") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

/* CallBack function o'rganish */

// const { rejects } = require("node:assert");
// const { error } = require("node:console");
// const { resolve } = require("node:dns");
// const { workerData } = require("node:worker_threads");

//   console.log("jack ma maslahatlari");
//   const list = [
//     "yahshi talaba boling", //0-20
//     "tog'ri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narslarni qiling", // 40-50
//     "yoshlarga iinvistitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
//   ]

//   function maslahatBering(a, callback) {
//     if ( typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 40) callback(null, list[2]);
//     else if (a > 20 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//            callback(null, list[5]);
//         }, 5000);
//     }
//   }

//   console.log("passed here 0");
//   maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
//   })
//   console.log("passed here 1");

// ==============//

// Async functionlar haqida
// async function maslahatBering(a) {
//     if ( typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 20 && a <= 40) return list[2];
//     else if (a > 20 && a <= 50) return list[3];
//     else if (a > 20 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve,reject) => {
//            setTimeout(function() {
//              resolve(list[5]);
//         }, 5000);
//         })

//     }

// }

/* Cll via Then/Catch bilan chaqirish
// console.log("passed here");
// maslahatBering(30).then(data => {
//     console.log("Javob", data);
// }).catch(err => {
//     console.log("ERROR", err);
// });
// console.log("passed here");

/* Call via Await bilan chaqirish*/
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(40);
//      console.log(javob);
//      javob = await maslahatBering(40);
//      console.log(javob);
// }
// run();

//CallBack function
// function maslahatBering(a, callback) {
//     if ( typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 40) callback(null, list[2]);
//     else if (a > 20 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//            callback(null, list[5]);
//         }, 1000);
//     }
//   }

//   console.log("passed here 0");
//   maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
//   })
//   console.log("passed here 1");

/* MIT TASK */
// function countLatter(e,engineer) {
//     let i = 0;
//     for(let letter of engineer) {
//       if(letter === e) {
//           i++
//         }
//     }
//         return i
// }
// console.log("javob:", countLatter("e", "engineer"))
