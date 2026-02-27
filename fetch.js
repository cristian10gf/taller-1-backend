const N = 40;

const URL = 'https://www.dnd5eapi.co/api/monsters';

async function getMonsters() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

async function getMonstersDetails(...names) {
  const fetchNames = names.map(name => URL + '/' + name).map((u) => fetch(u))
  return await Promise.all(fetchNames);
}

async function getMonsterFilters() {
  const monsters = await getMonsters();
  return monsters.slice(0, N);
}

console.log(await getMonstersDetails('basilisk'));
export { N, URL, getMonsters, getMonstersDetails, getMonsterFilters }