import { getMonsterFilters, getMonstersDetails } from "./fetch.js";

export async function getMonstersData() {
  const allMonsters = await getMonsterFilters();
  const indexMonsters = allMonsters.map((m) => m.index);
  const monstersData = await getMonstersDetails(...indexMonsters);
  const mostersDataJson = await Promise.all(monstersData.map((m) => m.json()));
  return mostersDataJson
}

export function processMonstersData(monsters) {
  return monsters.map((m) => {
    const stats = {
      str: m.strength,
      dex: m.dexterity,
      con: m.constitution,
      int: m.intelligence,
      wis: m.wisdom,
      cha: m.charisma
    }

    const newMosterInfo = {
      index: m.index,
      name: m.name,
      size: m.size,
      type: m.type,
      alignment: m.alignment,
      cr: m.challenge_rating,
      ac: Array.isArray(m.armor_class) ? Math.max(...m.armor_class.map((a) => a.value)) : m.armor_class,
      hp: m.hit_points,
      speed: Math.max(...Object.values(m.speed).map((s) => parseInt(s))),
      stats: stats,
      immuneCount: m.damage_immunities.length,
      resistCount: m.damage_resistances.length,
      vulnCount: m.damage_vulnerabilities.length,
      hasLegendary: (m.legendary_actions?.length || 0) > 0
    }
    return newMosterInfo;
  })
}

const monstersData = await getMonstersData();
const processedMonstersData = processMonstersData(monstersData);

console.log(processedMonstersData);

export { monstersData, processedMonstersData }
