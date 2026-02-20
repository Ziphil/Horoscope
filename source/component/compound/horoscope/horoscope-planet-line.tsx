/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {PlanetSymbol} from "/source/component/atom/planet-symbol";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";
import {EclipticCoordinate} from "/source/util/coordinate";
import {data} from "/source/util/data";
import {CENTER_RADIUS, INNER_FRAME_RADIUS} from "./horoscope-constant";


const SECTOR_ANGLE = 4 * Math.PI / 180;
const MAX_LATITUDE = 5;

export const HoroscopePlanetLine = create(
  require("./horoscope-planet-line.scss"), "HoroscopePlanetLine",
  function ({
    planet,
    coordinate
  }: {
    planet: Planet,
    coordinate: EclipticCoordinate
  }): ReactElement {

    const latitudeRatio = Math.max(Math.min(coordinate.latitude, MAX_LATITUDE * 0.9), -MAX_LATITUDE * 0.9) / MAX_LATITUDE;

    return (
      <g
        styleName="root"
        transform={`rotate(${-coordinate.longitude}, 0 0)`}
        {...data({planet, longitude: coordinate.longitude.toString(), latitude: coordinate.latitude.toString()})}
      >
        <path
          styleName="sector"
          d={[
            "M 0 0",
            `L ${INNER_FRAME_RADIUS * Math.cos(-SECTOR_ANGLE)} ${-INNER_FRAME_RADIUS * Math.sin(-SECTOR_ANGLE)}`,
            `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0, 0 1, ${INNER_FRAME_RADIUS * Math.cos(SECTOR_ANGLE)} ${-INNER_FRAME_RADIUS * Math.sin(SECTOR_ANGLE)}`,
            "Z"
          ].join(" ")}
        />
        <line
          styleName="line"
          x1={INNER_FRAME_RADIUS}
          y1={0}
          x2={CENTER_RADIUS}
          y2={0}
          style={{"--length": INNER_FRAME_RADIUS - CENTER_RADIUS} as any}
        />
        <g
          styleName="symbol-group"
          transform={[
            `translate(${(CENTER_RADIUS + INNER_FRAME_RADIUS) / 2 + (CENTER_RADIUS - INNER_FRAME_RADIUS) / 2 * latitudeRatio} 0)`,
            `rotate(${coordinate.longitude} 0 0)`
          ].join(" ")}
        >
          <PlanetSymbol
            styleName="symbol-shadow"
            planet={planet}
          />
          <PlanetSymbol
            styleName="symbol"
            planet={planet}
          />
        </g>
      </g>
    );

  }
);