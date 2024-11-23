export type Person = {
  id: string;
  names: string[];
  presents: string[];
};

const family1: Person[] = [
  { id: "Elisa", names: ["elisa"], presents: [] },
  { id: "Sofia", names: ["sofia"], presents: [] },
  { id: "Victor", names: ["victor"], presents: [] },
  { id: "Mariona", names: ["mariona"], presents: [] },
  { id: "Nuria (petita)", names: ["nuria pepita"], presents: [] },
  { id: "Alex (petit)", names: ["alex petit"], presents: [] },
  { id: "Silvia", names: ["silvia"], presents: [] },
  { id: "Alex (gran)", names: ["alex gran"], presents: [] },
  { id: "Alba", names: ["alba"], presents: [] },
  { id: "Aitana", names: ["aitana"], presents: [] },
  { id: "Darryl", names: ["darryl"], presents: ["A playstation"] },
  { id: "Marta", names: ["marta"], presents: ["A pony", "Some chocolates"] },
];
const fmaily2: Person[] = [
  { id: "Feli", names: ["feli", "felisa"], presents: [] },
  { id: "Josep", names: ["josep"], presents: [] },
  { id: "Gemma", names: ["gemma"], presents: [] },
  { id: "Íria", names: ["iria"], presents: [] },
  { id: "Nuria (gran)", names: ["nuria gran"], presents: [] },
  { id: "Xavi", names: ["xavi"], presents: [] },
  { id: "Lucia", names: ["lucia"], presents: [] },
  { id: "Leo", names: ["leo"], presents: [] },
];
const family3: Person[] = [
  { id: "Pepe", names: ["pepe", "jose"], presents: [] },
  { id: "Ana", names: ["ana", "anna"], presents: [] },
  { id: "Lilian", names: ["Lilian"], presents: [] },
  { id: "Dania", names: ["Dania"], presents: [] },
  { id: "Yanina", names: ["Yanina"], presents: [] },
];
const family4: Person[] = [
  { id: "Montse", names: ["Montse"], presents: [] },
  { id: "Artur", names: ["Artur"], presents: [] },
  { id: "David", names: ["David"], presents: [] },
  { id: "Aleix", names: ["Aleix"], presents: [] },
];

export const PEOPLE_LIST: Person[] = [
  ...family1,
  ...fmaily2,
  ...family3,
  ...family4,
];

export const getPerson = (name: string) => {
  const searchName = name.trim().toLowerCase();
  const person = PEOPLE_LIST.find((p) => {
    if (p.names.indexOf(searchName) > -1) {
      return p;
    }
    return undefined;
  });
  return person;
};
