//

import * as astronomy from "astronomy-engine";
import {Dayjs} from "dayjs";


export const MAIN_PLANETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"] as const;
export const ADDITIONAL_PLANETS = ["uranus", "neptune"] as const;

export type MainPlanet = (typeof MAIN_PLANETS)[number];
export type AdditionalPlanet = (typeof ADDITIONAL_PLANETS)[number];
export type Planet = MainPlanet | AdditionalPlanet;

export type Coordinate = {
  latitude: number,
  longitude: number
};

export function calcCoordinates(date: Dayjs): Record<Planet, Coordinate> {
  const time = astronomy["MakeTime"](date.toDate());
  const astronomyBodies = [
    ["sun", astronomy["Body"]["Sun"]],
    ["moon", astronomy["Body"]["Moon"]],
    ["mercury", astronomy["Body"]["Mercury"]],
    ["venus", astronomy["Body"]["Venus"]],
    ["mars", astronomy["Body"]["Mars"]],
    ["jupiter", astronomy["Body"]["Jupiter"]],
    ["saturn", astronomy["Body"]["Saturn"]],
    ["uranus", astronomy["Body"]["Uranus"]],
    ["neptune", astronomy["Body"]["Neptune"]]
  ] as const;
  const result = {} as Record<Planet, Coordinate>;
  for (const [planet, body] of astronomyBodies) {
    const vector = astronomy["GeoVector"](body, time, true);
    const ecliptic = astronomy["Ecliptic"](vector);
    result[planet] = {latitude: ecliptic.elat, longitude: ecliptic.elon};
  }
  return result;
}