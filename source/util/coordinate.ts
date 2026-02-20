//

import * as astronomy from "astronomy-engine";
import {Dayjs} from "dayjs";
import {Opaque} from "ts-essentials";
import {Planet} from "/source/util/constant";


export type EclipticCoordinate = Opaque<{
  latitude: number,
  longitude: number
}, "EclipticCoordinate">;
export type GeographicCoordinate = Opaque<{
  latitude: number,
  longitude: number
}, "GeographicCoordinate">;
export type House = {
  ascendant: number,
  descendant: number
};

export function calcPlanetCoordinates(date: Dayjs): Record<Planet, EclipticCoordinate> {
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
    ["neptune", astronomy["Body"]["Neptune"]],
    ["pluto", astronomy["Body"]["Pluto"]]
  ] as const;
  const result = {} as Record<Planet, EclipticCoordinate>;
  for (const [planet, body] of astronomyBodies) {
    const vector = astronomy["GeoVector"](body, time, true);
    const ecliptic = astronomy["Ecliptic"](vector);
    result[planet] = {latitude: ecliptic.elat, longitude: ecliptic.elon} as EclipticCoordinate ;
  }
  return result;
}

export function calcHouse(date: Dayjs, coordinate: GeographicCoordinate): House {
  const time = astronomy["MakeTime"](date.toDate());
  const gast = astronomy["SiderealTime"](time);
  const lst = gast + coordinate.longitude / 15;
  const ramcRad = lst * 15 * astronomy["DEG2RAD"];
  const obliquityRad = astronomy["e_tilt"](time).tobl * astronomy["DEG2RAD"];
  const latitudeRad = coordinate.latitude * astronomy["DEG2RAD"];
  const ascendantRad = Math.atan2(
    -Math.cos(ramcRad),
    Math.sin(ramcRad) * Math.cos(obliquityRad) + Math.tan(latitudeRad) * Math.sin(obliquityRad)
  );
  const ascendant = ((ascendantRad * astronomy["RAD2DEG"]) % 360 + 360) % 360;
  const descendant = (ascendant + 180) % 360;
  return {ascendant, descendant};
}

export async function getCurrentCoordinate(): Promise<GeographicCoordinate> {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0});
  });
  return {latitude: position.coords.latitude, longitude: position.coords.longitude} as GeographicCoordinate;
}