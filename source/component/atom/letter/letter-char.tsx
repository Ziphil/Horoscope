//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {FENNESE_NUMERALS} from "/source/util/constant";
import {data} from "/source/util/data";


export const LetterChar = create(
  require("./letter-char.scss"), "LetterChar",
  function ({
    char
  }: {
    char: string
  }): ReactElement {

    const numeral = char.match(/^[0-9a-c]$/) !== null;
    const alphabetic = FENNESE_NUMERALS.includes(char);

    const [actualChar, rotate] = getActualChar(char);

    return (
      <span styleName="root" {...data({char, numeral, alphabetic, rotate})}>
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