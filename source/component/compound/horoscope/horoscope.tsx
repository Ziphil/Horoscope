/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {FENNESE_NUMERALS, MAIN_PLANETS, Planet} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {HoroscopePlanetLine} from "./horoscope-planet-line";


export const OUTER_RADIUS = 720;
export const INNER_RADIUS = 640;
export const CENTER_RADIUS = 180;

export const Horoscope = create(
  require("./horoscope.scss"), "Horoscope",
  function ({
    coordinates
  }: {
    coordinates: Record<Planet, Coordinate>
  }): ReactElement {

    return (
      <svg styleName="root" viewBox={`0 0 ${OUTER_RADIUS * 2} ${OUTER_RADIUS * 2}`} width={OUTER_RADIUS * 2} height={OUTER_RADIUS * 2}>
        <defs>
          <clipPath id="inner-clip">
            <path
              clipRule="evenodd"
              d={[
                `M ${OUTER_RADIUS} ${OUTER_RADIUS - INNER_RADIUS}`,
                `A ${INNER_RADIUS} ${INNER_RADIUS} 0 1 1 ${OUTER_RADIUS} ${OUTER_RADIUS + INNER_RADIUS}`,
                `A ${INNER_RADIUS} ${INNER_RADIUS} 0 1 1 ${OUTER_RADIUS} ${OUTER_RADIUS - INNER_RADIUS}`,
                "Z",
                `M ${OUTER_RADIUS} ${OUTER_RADIUS - CENTER_RADIUS}`,
                `A ${CENTER_RADIUS} ${CENTER_RADIUS} 0 1 1 ${OUTER_RADIUS} ${OUTER_RADIUS + CENTER_RADIUS}`,
                `A ${CENTER_RADIUS} ${CENTER_RADIUS} 0 1 1 ${OUTER_RADIUS} ${OUTER_RADIUS - CENTER_RADIUS}`,
                "Z"
              ].join(" ")}
            />
          </clipPath>
        </defs>
        <g clipPath="url(#inner-clip)">
          {MAIN_PLANETS.toReversed().map((planet) => (
            <HoroscopePlanetLine key={planet} planet={planet} coordinate={coordinates[planet]}/>
          ))}
        </g>
        <g styleName="guide">
          <circle
            styleName="outer-frame"
            cx={OUTER_RADIUS}
            cy={OUTER_RADIUS}
            r={OUTER_RADIUS}
            style={{"--length": OUTER_RADIUS * 2 * Math.PI} as any}
          />
          <circle
            styleName="inner-frame"
            cx={OUTER_RADIUS}
            cy={OUTER_RADIUS}
            r={INNER_RADIUS}
            style={{"--length": INNER_RADIUS * 2 * Math.PI} as any}
          />
          <circle
            styleName="center-frame"
            cx={OUTER_RADIUS}
            cy={OUTER_RADIUS}
            r={CENTER_RADIUS}
          />
          {Array.from({length: 12}, (dummy, index) => (
            <line
              key={index}
              styleName="divider"
              x1={OUTER_RADIUS + OUTER_RADIUS * Math.cos(index * Math.PI / 6)}
              y1={OUTER_RADIUS - OUTER_RADIUS * Math.sin(index * Math.PI / 6)}
              x2={OUTER_RADIUS + INNER_RADIUS * Math.cos(index * Math.PI / 6)}
              y2={OUTER_RADIUS - INNER_RADIUS * Math.sin(index * Math.PI / 6)}
              style={{"--length": OUTER_RADIUS - INNER_RADIUS, "--index": index} as any}
            />
          ))}
          {Array.from({length: 12}, (dummy, index) => (
            <text
              key={index}
              styleName="number"
              x={OUTER_RADIUS + (OUTER_RADIUS + INNER_RADIUS) / 2 * Math.cos((index + 0.5) * Math.PI / 6)}
              y={OUTER_RADIUS - (OUTER_RADIUS + INNER_RADIUS) / 2 * Math.sin((index + 0.5) * Math.PI / 6)}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {FENNESE_NUMERALS[index]}
            </text>
          ))}
        </g>
      </svg>
    );

  }
);