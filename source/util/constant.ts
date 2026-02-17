//


export const MAIN_PLANETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"] as const;
export const ADDITIONAL_PLANETS = ["uranus", "neptune"] as const;
export const PLANETS = [...MAIN_PLANETS, ...ADDITIONAL_PLANETS] as const;

export type MainPlanet = (typeof MAIN_PLANETS)[number];
export type AdditionalPlanet = (typeof ADDITIONAL_PLANETS)[number];
export type Planet = MainPlanet | AdditionalPlanet;

export const PLANET_NAMES = {
  sun: "Локу̂шро",
  moon: "Лолу̂кас",
  mercury: "Лоччу̂гат",
  venus: "Локу̂шро",
  mars: "Локшу̂жо",
  jupiter: "Лошшу̂ако",
  saturn: "Лоччу̂дас"
} as const;

export const FENNESE_NUMERALS = ["К", "Г", "Х", "Ҕ", "Т", "Д", "С", "З", "П", "Б", "Ф", "В"] as const;