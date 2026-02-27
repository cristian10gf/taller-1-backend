import { processedMonstersData } from "./PartA.js";
const data = processedMonstersData;



























const less_than = 1;
const between1 = [2, 4];
const between2 = [5, 9];
const more_than = 10;
function B5(monsters) {
  const result = monsters.reduce((acc, monster) => {
    const { type, cr, hp } = monster;

    if (!acc[type]) {
      acc[type] = {
        count: 0,
        totalCR: 0,
        maxHP: 0,
      };
    }

    acc[type].count += 1;
    acc[type].totalCR += cr;
    if (hp > acc[type].maxHP) {
      acc[type].maxHP = hp;
    }
    return acc;
  }, {});

  for (const type in result) {
    result[type].avgCR = result[type].totalCR / result[type].count;
    delete result[type].totalCR;
  }
  return result;
}

function B6(monsters) {
  const result = monsters.reduce((acc, monster) => {
    const { cr } = monster;
    switch (true) {
      case cr <= less_than:
        acc["0-1"] = (acc["0-1"] || 0) + 1;
        break;
      case cr >= between1[0] && cr <= between1[1]:
        acc["2-4"] = (acc["2-4"] || 0) + 1;
        break;
      case cr >= between2[0] && cr <= between2[1]:
        acc["5-9"] = (acc["5-9"] || 0) + 1;
        break;
      case cr >= more_than:
        acc["10+"] = (acc["10+"] || 0) + 1;
        break;
    }
    return acc;
  }, {});
  return result;
}

const b5 = B5("b5", data);
const b6 = B6("b6", data);
console.log(b5);
console.log(b6);
