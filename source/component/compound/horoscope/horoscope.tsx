/* eslint-disable @typescript-eslint/naming-convention */

import {Dayjs} from "dayjs";
import {ReactElement, useMemo} from "react";
import {create} from "/source/component/create";
import {MAIN_PLANETS, Planet} from "/source/util/constant";
import {EclipticCoordinate, GeographicCoordinate, calcHouse} from "/source/util/coordinate";
import {OUTER_FRAME_RADIUS} from "./horoscope-constant";
import {HoroscopeDateView} from "./horoscope-date-view";
import {HoroscopeFrame} from "./horoscope-frame";
import {HoroscopeHouseLine} from "./horoscope-house-line";
import {HoroscopePlanetLine} from "./horoscope-planet-line";


export const Horoscope = create(
  require("./horoscope.scss"), "Horoscope",
  function ({
    planetCoordinates,
    currentCoordinate,
    date
  }: {
    planetCoordinates: Record<Planet, EclipticCoordinate>,
    currentCoordinate: GeographicCoordinate | null,
    date: Dayjs
  }): ReactElement {

    const house = useMemo(() => (currentCoordinate !== null) ? calcHouse(date, currentCoordinate) : null, [date, currentCoordinate]);

    return (
      <div styleName="root">
        <svg
          styleName="image"
          viewBox={`${-OUTER_FRAME_RADIUS} ${-OUTER_FRAME_RADIUS} ${OUTER_FRAME_RADIUS * 2} ${OUTER_FRAME_RADIUS * 2}`}
          width={OUTER_FRAME_RADIUS * 2}
          height={OUTER_FRAME_RADIUS * 2}
        >
          <HoroscopeFrame/>
          <g clipPath="url(#inner-clip)">
            {(house !== null) && <HoroscopeHouseLine house={house}/>}
          </g>
          <g clipPath="url(#inner-clip)">
            {MAIN_PLANETS.toReversed().map((planet) => (
              <HoroscopePlanetLine key={planet} planet={planet} coordinate={planetCoordinates[planet]}/>
            ))}
          </g>
        </svg>
        <div styleName="date">
          <HoroscopeDateView date={date}/>
        </div>
      </div>
    );

  }
);