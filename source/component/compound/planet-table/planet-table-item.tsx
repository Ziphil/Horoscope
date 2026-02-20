/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {Letter} from "/source/component/atom/letter";
import {PlanetSymbol} from "/source/component/atom/planet-symbol";
import {create} from "/source/component/create";
import {MainPlanet, PLANET_NAMES} from "/source/util/constant";
import {EclipticCoordinate} from "/source/util/coordinate";
import {data} from "/source/util/data";


export const PlanetTableItem = create(
  require("./planet-table-item.scss"), "PlanetTableItem",
  function ({
    planet,
    coordinate
  }: {
    planet: MainPlanet,
    coordinate: EclipticCoordinate
  }): ReactElement {

    const angle = coordinate.longitude / 360 * 144;
    const integerAngle = Math.floor(angle);
    const decimalAngle = Math.floor((angle - integerAngle) * (12 ** 3));

    return (
      <div styleName="root" {...data({planet, longitude: coordinate.longitude.toString(), latitude: coordinate.latitude.toString()})}>
        <svg styleName="symbol" width="64" height="64" viewBox="-32 -32 64 64">
          <PlanetSymbol planet={planet}/>
        </svg>
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
      </div>
    );

  }
);