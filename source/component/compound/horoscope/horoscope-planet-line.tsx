/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {data} from "/source/util/data";
import {CENTER_RADIUS, INNER_FRAME_RADIUS} from "./horoscope";


const SECTOR_ANGLE = 4 * Math.PI / 180;
const MAX_LATITUDE = 6;

export const HoroscopePlanetLine = create(
  require("./horoscope-planet-line.scss"), "HoroscopePlanetLine",
  function ({
    planet,
    coordinate
  }: {
    planet: Planet,
    coordinate: Coordinate
  }): ReactElement {

    return (
      <g
        styleName="root"
        transform={`rotate(${-coordinate.longitude}, 0, 0)`}
        {...data({planet, longitude: coordinate.longitude.toString(), latitude: coordinate.latitude.toString()})}
      >
        <path
          styleName="sector"
          d={[
            "M 0 0",
            `L ${INNER_FRAME_RADIUS * Math.cos(-SECTOR_ANGLE)} ${-INNER_FRAME_RADIUS * Math.sin(-SECTOR_ANGLE)}`,
            `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0 0 1, ${INNER_FRAME_RADIUS * Math.cos(SECTOR_ANGLE)} ${-INNER_FRAME_RADIUS * Math.sin(SECTOR_ANGLE)}`,
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
        <circle
          styleName="point"
          cx={(CENTER_RADIUS + INNER_FRAME_RADIUS) / 2 + Math.min(coordinate.latitude, MAX_LATITUDE) / MAX_LATITUDE * (CENTER_RADIUS - INNER_FRAME_RADIUS)}
          cy={0}
          r={10}
        />
      </g>
    );

  }
);