/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";
import {EclipticCoordinate, GeographicCoordinate} from "/source/util/coordinate";
import {PlanetTableItem} from "./planet-table-item";


export const PlanetTable = create(
  require("./planet-table.scss"), "PlanetTable",
  function ({
    planetCoordinates,
    currentCoordinate
  }: {
    planetCoordinates: Record<Planet, EclipticCoordinate>,
    currentCoordinate: GeographicCoordinate | null
  }): ReactElement {

    return (
      <div styleName="root">
        <div styleName="section">
          <div styleName="row">
            <PlanetTableItem planet="sun" coordinate={planetCoordinates.sun}/>
            <PlanetTableItem planet="moon" coordinate={planetCoordinates.moon}/>
          </div>
          <div styleName="row">
            <PlanetTableItem planet="venus" coordinate={planetCoordinates.venus}/>
          </div>
        </div>
        <div styleName="section">
          <div styleName="row">
            <PlanetTableItem planet="saturn" coordinate={planetCoordinates.saturn}/>
            <PlanetTableItem planet="mars" coordinate={planetCoordinates.mars}/>
          </div>
          <div styleName="row">
            <PlanetTableItem planet="jupiter" coordinate={planetCoordinates.jupiter}/>
            <PlanetTableItem planet="mercury" coordinate={planetCoordinates.mercury}/>
          </div>
        </div>
      </div>
    );

  }
);