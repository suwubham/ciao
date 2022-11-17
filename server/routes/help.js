let people = [
  { id: 1, name: "serdar" },
  { id: 5, name: "alex" },
  { id: 300, name: "brittany" },
];

const idToRemove = { id: 1, name: "serdar" };

people = people.filter(
  (item) => JSON.stringify(item) !== JSON.stringify(idToRemove)
);

console.log(people);
