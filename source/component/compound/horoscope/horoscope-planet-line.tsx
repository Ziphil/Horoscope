/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {data} from "/source/util/data";
import {CENTER_RADIUS, INNER_RADIUS, OUTER_RADIUS} from "./horoscope";


const SECTOR_ANGLE = 4 * Math.PI / 180;

export const HoroscopePlanetLine = create(
  require("./horoscope-planet-line.scss"), "HoroscopePlanetLine",
  function ({
    planet,
    coordinate
  }: {
    planet: Planet,
    coordinate: Coordinate
  }): ReactElement {

    const angle = coordinate.longitude * Math.PI / 180;
    const startAngle = angle - SECTOR_ANGLE;
    const endAngle = angle + SECTOR_ANGLE;

    return (
      <g styleName="root" {...data({planet, longitude: coordinate.longitude.toString(), latitude: coordinate.latitude.toString()})}>
        <path
          styleName="sector"
          d={[
            `M ${OUTER_RADIUS} ${OUTER_RADIUS}`,
            `L ${OUTER_RADIUS + INNER_RADIUS * Math.cos(startAngle)} ${OUTER_RADIUS - INNER_RADIUS * Math.sin(startAngle)}`,
            `A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${OUTER_RADIUS + INNER_RADIUS * Math.cos(endAngle)} ${OUTER_RADIUS - INNER_RADIUS * Math.sin(endAngle)}`,
            "Z"
          ].join(" ")}
        />
        <line
          styleName="line"
          x1={OUTER_RADIUS + INNER_RADIUS * Math.cos(angle)}
          y1={OUTER_RADIUS - INNER_RADIUS * Math.sin(angle)}
          x2={OUTER_RADIUS + CENTER_RADIUS * Math.cos(angle)}
          y2={OUTER_RADIUS - CENTER_RADIUS * Math.sin(angle)}
          style={{"--length": INNER_RADIUS - CENTER_RADIUS} as any}
        />
      </g>
    );

  }
);