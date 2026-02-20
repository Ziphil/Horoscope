/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {FENNESE_NUMERALS} from "/source/util/constant";
import {CENTER_RADIUS, INNER_FRAME_RADIUS, OUTER_FRAME_RADIUS} from "./horoscope-constant";


export const HoroscopeFrame = create(
  require("./horoscope-frame.scss"), "HoroscopeFrame",
  function ({
  }: {
  }): ReactElement {

    return (
      <>
        <defs>
          <clipPath id="inner-clip">
            <path
              clipRule="evenodd"
              d={[
                `M 0 ${-INNER_FRAME_RADIUS}`,
                `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0, 1 1, 0 ${INNER_FRAME_RADIUS}`,
                `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0, 1 1, 0 ${-INNER_FRAME_RADIUS}`,
                "Z",
                `M 0 ${-CENTER_RADIUS}`,
                `A ${CENTER_RADIUS} ${CENTER_RADIUS}, 0, 1 1, 0 ${CENTER_RADIUS}`,
                `A ${CENTER_RADIUS} ${CENTER_RADIUS}, 0, 1 1, 0 ${-CENTER_RADIUS}`,
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
        </g>
      </>
    );

  }
);