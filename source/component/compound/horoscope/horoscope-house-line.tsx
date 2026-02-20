/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {House} from "/source/util/coordinate";
import {data} from "/source/util/data";
import {INNER_FRAME_RADIUS} from "./horoscope-constant";


export const HoroscopeHouseLine = create(
  require("./horoscope-house-line.scss"), "HoroscopeHouseLine",
  function ({
    house
  }: {
    house: House
  }): ReactElement {

    return (
      <g
        styleName="root"
        {...data({ascendant: house.ascendant.toString(), descendant: house.descendant.toString(), midheaven: house.midheaven.toString()})}
      >
        <path
          styleName="sector"
          d={[
            "M 0 0",
            `L ${INNER_FRAME_RADIUS * Math.cos(house.ascendant * Math.PI / 180)} ${-INNER_FRAME_RADIUS * Math.sin(house.ascendant * Math.PI / 180)}`,
            `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0, 0 1, ${INNER_FRAME_RADIUS * Math.cos(house.midheaven * Math.PI / 180)} ${-INNER_FRAME_RADIUS * Math.sin(house.midheaven * Math.PI / 180)}`,
            `A ${INNER_FRAME_RADIUS} ${INNER_FRAME_RADIUS}, 0, 0 1, ${INNER_FRAME_RADIUS * Math.cos(house.descendant * Math.PI / 180)} ${-INNER_FRAME_RADIUS * Math.sin(house.descendant * Math.PI / 180)}`,
            "Z"
          ].join(" ")}
        />
      </g>
    );

  }
);