/* eslint-disable @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";
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
      <div styleName="root">
        <div styleName="section">
          <div styleName="row">
            <PlanetTableItem planet="sun" coordinate={coordinates.sun}/>
            <PlanetTableItem planet="moon" coordinate={coordinates.moon}/>
          </div>
          <div styleName="row">
            <PlanetTableItem planet="venus" coordinate={coordinates.venus}/>
          </div>
        </div>
        <div styleName="section">
          <div styleName="row">
            <PlanetTableItem planet="saturn" coordinate={coordinates.saturn}/>
            <PlanetTableItem planet="mars" coordinate={coordinates.mars}/>
          </div>
          <div styleName="row">
            <PlanetTableItem planet="jupiter" coordinate={coordinates.jupiter}/>
            <PlanetTableItem planet="mercury" coordinate={coordinates.mercury}/>
          </div>
        </div>
      </div>
    );

  }
);