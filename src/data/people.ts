export type Person = {
  id: string;
  names: string[];
  presents: string[];
};

const family1: Person[] = [
  {
    id: "Elisa",
    names: ["elisa"],
    presents: [
      "Un penjoll informal",
      "Una agenda petita mida bolso",
      "Si l'amic invisible té cotxe, una passejada matinal a un destí on només es pugui anar amb cotxe!",
    ],
  },
  {
    id: "Sofia",
    names: ["sofia"],
    presents: [
      "Uns mitjons antilliscants.T.39",
      "Uns guants talla mitjana",
      "Una O dues tovalloles petites per eixugar-se les mans. Tovalloles de cortesia pel bany",
    ],
  },
  { id: "Victor", names: ["victor"], presents: [""] },
  { id: "Mariona", names: ["mariona"], presents: [""] },
  {
    id: "Nuria (petita)",
    names: ["nuria petita", "nuria valls"],
    presents: [""],
  },
  { id: "Alex (petit)", names: ["alex petit", "alex valls"], presents: [""] },
  {
    id: "Silvia",
    names: ["silvia"],
    presents: [
      "tassa reutilitzable per portar el cafè amb llet",
      "Uns auriculars de diadema",
      "un llibre",
    ],
  },
  {
    id: "Alex (gran)",
    names: ["alex gran", "alex barragan"],
    presents: ["Mitjons divertits T.44", "Un llibre d'història"],
  },
  {
    id: "Alba",
    names: ["alba"],
    presents: [
      'llibre "Ni ho somiïs, Goa" de Miriam Tirado',
      "Raspall de cabell de color rosa",
      "Gomes i/o pinça del cabell de colors foscos",
    ],
  },
  {
    id: "Aitana",
    names: ["aitana"],
    presents: [
      "Puzzle relacionat amb el personatge Stitch o amb gats, o amb gossos",
      "Conte o llibre relationat amb el personatge Stitch o amb gats, o amb gossos",
    ],
  },
  {
    id: "Darryl",
    names: ["darryl", "daryl", "daril", "davil"],
    presents: [
      "un exprimidor de llimona de metall",
      "Crema de mans",
      'Cafè especialidad "specialty" molt (no en gra) (bàsicament, un cafè pijo per preparar a casa)',
    ],
  },
  {
    id: "Marta",
    names: ["marta"],
    presents: [
      "Espelmes de casa. Lo més important és que no facin olor dolça!",
      "Una tassa gran amb la base del cul recta",
      "Un turbant o diadema divertit per aguantar-me el cabell quan em rento la cara",
    ],
  },
];
const fmaily2: Person[] = [
  {
    id: "Feli",
    names: ["feli", "felisa"],
    presents: [
      "Punts de llibre. Qualsevol, en faig col·lecció!",
      "Arracades de clip→ NO tinc forats",
    ],
  },
  { id: "Josep", names: ["josep"], presents: ["Un llibre àntic, petit i bo!"] },
  {
    id: "Gemma",
    names: ["gemma"],
    presents: ["Necesser petit", "Una tassa per te"],
  },
  {
    id: "Oriol",
    names: ["oriol"],
    presents: ["Guants de color o colors", "Gorro de llana"],
  },
  {
    id: "Íria",
    names: ["iria"],
    presents: [
      "Alguna cosa per fer papiroflexia",
      "Estoig del Snoopy o de color groc",
    ],
  },
  {
    id: "Nuria (gran)",
    names: ["nuria gran", "nuria ubasart"],
    presents: ["Un diabolo", "Un moneder", "Necesser"],
  },
  {
    id: "Xavi",
    names: ["xavi"],
    presents: [
      "Ampolla de vi",
      "Xanclas per la piscina, T.47",
      "Sabons per anar al gym",
    ],
  },
  {
    id: "Lucia",
    names: ["lucia"],
    presents: [
      '"Diamondz" crystal painting craze',
      ' "Rainbocorns" o "Bunnycorns"',
      "Zhu Zhu fish",
    ],
  },
  {
    id: "Leo",
    names: ["leo"],
    presents: ["Una espasa làser", 'Un "Robo fish"', '"Superthings"'],
  },
];
const family3: Person[] = [
  {
    id: "Pepe",
    names: ["pepe", "jose"],
    presents: [
      "Calcetines de algodón, T.42. lisos y serios me gustan más",
      "Unos guantes",
    ],
  },
  { id: "Ana", names: ["ana", "anna"], presents: ["Velas de cera de abeja"] },
  {
    id: "Lilian",
    names: ["lilian"],
    presents: [
      "Estuche para bolis",
      "Maceta blanca tamaño mediano",
      "Lampara de escritorio",
    ],
  },
  {
    id: "Dania",
    names: ["dania"],
    presents: [
      "Chucherias, cualquier tipo!",
      "Un manga, no tinc preferencia",
      "Una pulsera",
    ],
  },
  {
    id: "Yanina",
    names: ["yanina", "janina"],
    presents: [
      'Botas de Fútbol multitacos Agility 100 TF Adulto Negro Blanco <a href="https://www.decathlon.es/es/p/botas-de-futbol-multitacos-agility-100-tf-adulto-negro-blanco/_/R-p-184875" target="_blank">Link aquí</a>',
      "Batería portátil para movil (aunque me hace menos ilu)",
    ],
  },
];
const family4: Person[] = [
  {
    id: "Montse",
    names: ["montse"],
    presents: [
      "Una tassa de Nadal",
      "Caixa de metall per la costura",
      "Mitjons T.39. Mentre no siguin negres m'agraden tots!",
    ],
  },
  {
    id: "Artur",
    names: ["artur"],
    presents: [
      "Un boligraf roller",
      "Mitjons T.41",
      "Cartea petita per targetes",
    ],
  },
  {
    id: "David",
    names: ["david"],
    presents: ["Un llibre", "Uns mitjons T.45", "Un buff", "Un mini bonsai"],
  },
  {
    id: "Aleix",
    names: ["aleix"],
    presents: [
      "Bossa sencilla d'esport o motxilla",
      "Mitjons T.40",
      "Una samarreta",
    ],
  },
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
