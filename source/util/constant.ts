//


export const MAIN_PLANETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"] as const;
export const ADDITIONAL_PLANETS = ["uranus", "neptune", "pluto"] as const;
export const PLANETS = [...MAIN_PLANETS, ...ADDITIONAL_PLANETS] as const;

export type MainPlanet = (typeof MAIN_PLANETS)[number];
export type AdditionalPlanet = (typeof ADDITIONAL_PLANETS)[number];
export type Planet = MainPlanet | AdditionalPlanet;

export const PLANET_NAMES = {
  sun: "Локушро",
  moon: "Лолукас",
  mercury: "Лоччугат",
  venus: "Локшужо",
  mars: "Лоччуӈҕо",
  jupiter: "Лошшуако",
  saturn: "Лоччудас"
} as const;

export const FENNESE_NUMERALS = ["К", "Г", "Х", "Ҕ", "Т", "Д", "С", "З", "П", "Б", "Ф", "В"] as const;