/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {Letter} from "/source/component/atom/letter";
import {create} from "/source/component/create";
import {MainPlanet, PLANET_NAMES} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {data} from "/source/util/data";


export const PlanetTableItem = create(
  require("./planet-table-item.scss"), "PlanetTableItem",
  function ({
    planet,
    coordinate
  }: {
    planet: MainPlanet,
    coordinate: Coordinate
  }): ReactElement {

    const angle = coordinate.longitude / 360 * 144;
    const integerAngle = Math.floor(angle);
    const decimalAngle = Math.floor((angle - integerAngle) * (12 ** 3));

    return (
      <li styleName="root" {...data({planet, longitude: coordinate.longitude.toString(), latitude: coordinate.latitude.toString()})}>
        <div styleName="symbol"></div>
        <div styleName="name">{PLANET_NAMES[planet]}</div>
        <div styleName="value">
          <span styleName="integer-angle">
            <Letter>{integerAngle.toString(12)}</Letter>
          </span>
          <Letter>{"·"}</Letter>
          <span styleName="decimal-angle">
            <Letter>{decimalAngle.toString(12).padStart(3, "0")}</Letter>
          </span>
        </div>
      </li>
    );

  }
);