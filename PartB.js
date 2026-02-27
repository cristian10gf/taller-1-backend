import { processedMonstersData } from "./PartA.js";
const data = processedMonstersData;

const cr1 = 5;
const cr2 = 6;
const hp = 80;
const type = dragon;
const hasLegendary = true;


const b1 = data.filter(m => m.cr >= cr1 && m.hp >= hp);
const b2 = data.find(m => m.type === type && m.cr >= cr2);
const b3 = data.some(m => m.hasLegendary === hasLegendary); 
const b4 = data.every(m =>
  m.hp > 0 &&
  m.str != null &&
  m.dex != null &&
  m.con != null &&
  m.int != null &&
  m.wis != null &&
  m.cha != null
);

console.log("B1 (filter):", b1);
console.log("B2 (find):", b2);
console.log("B3 (some):", b3);
console.log("B4 (every):", b4);