/* eslint-disable @typescript-eslint/naming-convention */

import {Dayjs} from "dayjs";
import {ReactElement} from "react";
import {create} from "/source/component/create";
import {FENNESE_NUMERALS, MAIN_PLANETS, Planet} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {HoroscopeDateView} from "./horoscope-date-view";
import {HoroscopePlanetLine} from "./horoscope-planet-line";


export const OUTER_FRAME_RADIUS = 720;
export const INNER_FRAME_RADIUS = 640;
export const CENTER_RADIUS = 180;

export const Horoscope = create(
  require("./horoscope.scss"), "Horoscope",
  function ({
    coordinates,
    date
  }: {
    coordinates: Record<Planet, Coordinate>,
    date: Dayjs
  }): ReactElement {

    return (
      <div styleName="root">
        <svg
          styleName="image"
          viewBox={`${-OUTER_FRAME_RADIUS} ${-OUTER_FRAME_RADIUS} ${OUTER_FRAME_RADIUS * 2} ${OUTER_FRAME_RADIUS * 2}`}
          width={OUTER_FRAME_RADIUS * 2}
          height={OUTER_FRAME_RADIUS * 2}
        >
          <defs>
            <clipPath id="inner-clip">
              <path
                clipRule="evenodd"
                d={[
                  `M 0 ${-INNER_FRAME_RADIUS}`,
                  `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0 1 1, 0 ${INNER_FRAME_RADIUS}`,
                  `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0 1 1, 0 ${-INNER_FRAME_RADIUS}`,
                  "Z",
                  `M 0 ${-CENTER_RADIUS}`,
                  `A ${CENTER_RADIUS} ${CENTER_RADIUS}, 0 1 1, 0 ${CENTER_RADIUS}`,
                  `A ${CENTER_RADIUS} ${CENTER_RADIUS}, 0 1 1, 0 ${-CENTER_RADIUS}`,
                  "Z"
                ].join(" ")}
              />
            </clipPath>
          </defs>
          <g styleName="guide">
            <circle
              styleName="outer-frame"
              cx={0}
              cy={0}
              r={OUTER_FRAME_RADIUS}
              style={{"--length": OUTER_FRAME_RADIUS * 2 * Math.PI} as any}
            />
            <circle
              styleName="inner-frame"
              cx={0}
              cy={0}
              r={INNER_FRAME_RADIUS}
              style={{"--length": INNER_FRAME_RADIUS * 2 * Math.PI} as any}
            />
            <circle
              styleName="center-frame"
              cx={0}
              cy={0}
              r={CENTER_RADIUS}
            />
            <circle
              styleName="middle"
              cx={0}
              cy={0}
              r={(INNER_FRAME_RADIUS + CENTER_RADIUS) / 2}
              style={{"--length": (INNER_FRAME_RADIUS + CENTER_RADIUS) * Math.PI} as any}
            />
            {Array.from({length: 12}, (dummy, index) => (
              <line
                key={index}
                styleName="divider"
                x1={OUTER_FRAME_RADIUS * Math.cos(index * Math.PI / 6)}
                y1={-OUTER_FRAME_RADIUS * Math.sin(index * Math.PI / 6)}
                x2={INNER_FRAME_RADIUS * Math.cos(index * Math.PI / 6)}
                y2={-INNER_FRAME_RADIUS * Math.sin(index * Math.PI / 6)}
                style={{"--length": OUTER_FRAME_RADIUS - INNER_FRAME_RADIUS, "--index": index} as any}
              />
            ))}
            {Array.from({length: 12}, (dummy, index) => (
              <text
                key={index}
                styleName="number"
                x={(OUTER_FRAME_RADIUS + INNER_FRAME_RADIUS) / 2 * Math.cos((index + 0.5) * Math.PI / 6)}
                y={-(OUTER_FRAME_RADIUS + INNER_FRAME_RADIUS) / 2 * Math.sin((index + 0.5) * Math.PI / 6)}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {FENNESE_NUMERALS[index].toUpperCase()}
              </text>
            ))}
            <g clipPath="url(#inner-clip)">
              {MAIN_PLANETS.toReversed().map((planet) => (
                <HoroscopePlanetLine key={planet} planet={planet} coordinate={coordinates[planet]}/>
              ))}
            </g>
          </g>
        </svg>
        <div styleName="date">
          <HoroscopeDateView date={date}/>
        </div>
      </div>
    );

  }
);