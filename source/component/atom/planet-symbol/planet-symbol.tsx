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
        d={planet === "sun" ? [
          "M 32 0",
          "A 32 32, 0, 1 0, -32 0",
          "A 32 32, 0, 1 0, 32 0",
          "M 12 0",
          "A 12 12, 0, 1 0, -12 0",
          "A 12 12, 0, 1 0, 12 0",
          "Z"
        ].join(" ") : planet === "moon" ? [
          "M 32 0",
          "A 32 32, 0, 1 0, -32 0",
          "A 32 32, 0, 1 0, 32 0",
          "M 0 -32",
          "L 0 32",
          "Z"
        ].join(" ") : planet === "venus" ? [
          "M -32 -24",
          "A 26 30, 0, 1 1, -32 24",
          "M 32 -24",
          "A 26 30, 0, 1 0, 32 24"
        ].join(" ") : planet === "mars" ? [
          "M 0 -32",
          "L 0 32",
          "M 0 -32",
          "L -32 12",
          "M 0 -32",
          "L 32 12",
          "M -16 16",
          "L 16 16"
        ].join(" ") : planet === "saturn" ? [
          "M 0 -32",
          "L 0 30",
          "M -24 -32",
          "A 32 26, 0, 1 0, 24 -32",
          "M -24, 30",
          "L 24 30"
        ].join(" ") : ""}
        {...rest}
      />
    );

  }
);