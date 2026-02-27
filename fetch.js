const N = 40;

const URL = 'https://www.dnd5eapi.co/api/monsters';

async function getMonsters() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

async function getMonstersDetails(...url) {
  return await Promise.all(url.map((u) => fetch(u)));
}

async function getMosterFilters() {
  const monsters = await getMonsters();
  return monsters.slice(0, N);
}