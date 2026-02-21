//


export const MAIN_PLANETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"] as const;
export const ADDITIONAL_PLANETS = ["uranus", "neptune", "pluto"] as const;
export const PLANETS = [...MAIN_PLANETS, ...ADDITIONAL_PLANETS] as const;

export type MainPlanet = (typeof MAIN_PLANETS)[number];
export type AdditionalPlanet = (typeof ADDITIONAL_PLANETS)[number];
export type Planet = MainPlanet | AdditionalPlanet;

export const PLANET_NAMES = {
  sun: "локушро",
  moon: "лолукас",
  mercury: "лоншуҕо",
  venus: "лоччузло",
  mars: "лобобшудад",
  jupiter: "лозохшуко",
  saturn: "лоршуссаф"
} as const;

export const FENNESE_NUMERALS = ["к", "г", "х", "ҕ", "т", "д", "с", "з", "п", "б", "ф", "в"];
export const FENNESE_FRACTIONS = ["0", "ч", "г", "к", "м", "5", "д", "7", "нм", "нк", "нг", "нч"];