//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {data} from "/source/util/data";


export const LetterChar = create(
  require("./letter-char.scss"), "LetterChar",
  function ({
    char
  }: {
    char: string
  }): ReactElement {

    const numeral = char.match(/^[0-9a-c]$/) !== null;
    const [actualChar, rotate] = getActualChar(char);

    return (
      <span styleName="root" {...data({char, numeral, rotate})}>
        {actualChar}
      </span>
    );

  }
);


function getActualChar(char: string): [string, boolean] {
  if (char === "a") {
    return ["2", true];
  } else if (char === "b") {
    return ["3", true];
  } else if (char === "c") {
    return ["4", true];
  } else {
    return [char, false];
  }
}