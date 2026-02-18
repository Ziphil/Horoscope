/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {MAIN_PLANETS, Planet} from "/source/util/constant";
import {Coordinate} from "/source/util/coordinate";
import {PlanetTableItem} from "./planet-table-item";


export const PlanetTable = create(
  require("./planet-table.scss"), "PlanetTable",
  function ({
    coordinates
  }: {
    coordinates: Record<Planet, Coordinate>
  }): ReactElement {

    return (
      <ul styleName="root">
        {MAIN_PLANETS.map((planet) => (
          <PlanetTableItem key={planet} planet={planet} coordinate={coordinates[planet]}/>
        ))}
      </ul>
    );

  }
);