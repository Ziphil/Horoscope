//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {Planet} from "/source/util/constant";


export const PlanetSymbol = create(
  require("./planet-symbol.scss"), "PlanetSymbol",
  function ({
    planet,
    ...rest
  }: {
    planet: Planet
  }): ReactElement | null {

    return (
      <path
        styleName="root"
        d={(planet === "sun") ? [
          "M 32 0",
          "A 32 32, 0, 1 0, -32 0",
          "A 32 32, 0, 1 0, 32 0",
          "M 12 0",
          "A 12 12, 0, 1 0, -12 0",
          "A 12 12, 0, 1 0, 12 0",
          "Z"
        ].join(" ") : (planet === "moon") ? [
          "M 32 0",
          "A 32 32, 0, 1 0, -32 0",
          "A 32 32, 0, 1 0, 32 0",
          "M 0 -32",
          "L 0 32",
          "Z"
        ].join(" ") : (planet === "mercury") ? [
          "M -28 -24",
          "A 22 30, 0, 1 0, 0 -28",
          "A 22 30, 0, 1 0, 28 -24"
        ].join(" ") : (planet === "venus") ? [
          "M -36 -20",
          "A 28 27, 0, 1 1, -36 20",
          "M 36 -20",
          "A 28 27, 0, 1 0, 36 20"
        ].join(" ") : (planet === "mars") ? [
          "M 0 -32",
          "L 0 32",
          "M -32 12",
          "L 0 -32",
          "L 32 12",
          "M -16 16",
          "L 16 16"
        ].join(" ") : (planet === "jupiter") ? [
          "M -18 -28",
          "A 24 18, 0, 1 1, -2 4",
          "L -2 32",
          "M -30 7",
          "A 40 32, 0, 0 0, 30 7"
        ].join(" ") : (planet === "saturn") ? [
          "M 0 -30",
          "L 0 30",
          "M -24 -30",
          "A 30 26, 0, 1 0, 24 -30",
          "M -24, 30",
          "L 24 30"
        ].join(" ") : ""}
        {...rest}
      />
    );

  }
);