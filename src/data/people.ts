type Person = {
  id: string;
  name: string;
  presents: string[];
};

const family1: Person[] = [
  { id: "", name: "", presents: [""] },
  { id: "Elisa", name: "", presents: [] },
  { id: "Sofia", name: "", presents: [] },
  { id: "Victor", name: "", presents: [] },
  { id: "Mariona", name: "", presents: [] },
  { id: "Nuria (petita)", name: "", presents: [] },
  { id: "Alex (petit)", name: "", presents: [] },
  { id: "Silvia", name: "", presents: [] },
  { id: "Alex (gran)", name: "", presents: [] },
  { id: "Alba", name: "", presents: [] },
  { id: "Aitana", name: "", presents: [] },
  { id: "Darryl", name: "", presents: [] },
  { id: "Marta", name: "", presents: [] },
];
const fmaily2: Person[] = [
  { id: "Feli (o FELISA)", name: "", presents: [] },
  { id: "Josep", name: "", presents: [] },
  { id: "Gemma", name: "", presents: [] },
  { id: "Íria", name: "", presents: [] },
  { id: "Nuria (gran)", name: "", presents: [] },
  { id: "Xavi", name: "", presents: [] },
  { id: "Lucia", name: "", presents: [] },
  { id: "Leo", name: "", presents: [] },
];

const family3: Person[] = [
  { id: "", name: "Pepe (o JOSÉ)", presents: [] },
  { id: "", name: "Ana (o ANNA)", presents: [] },
  { id: "", name: "Lilian", presents: [] },
  { id: "", name: "Dania", presents: [] },
  { id: "", name: "Yanina", presents: [] },
];
const family4: Person[] = [
  { id: "", name: "Montse", presents: [] },
  { id: "", name: "Artur", presents: [] },
  { id: "", name: "David", presents: [] },
  { id: "", name: "Aleix", presents: [] },
];

export const PEOPLE_LIST: Person[] = [
  ...family1,
  ...fmaily2,
  ...family3,
  ...family4,
];

export const getPerson = (name: string) => {
  return PEOPLE_LIST.find(
    (person) => person.name.toLowerCase() === name.trim().toLowerCase()
  );
};
