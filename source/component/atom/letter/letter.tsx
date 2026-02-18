//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {LetterChar} from "./letter-char";


export const Letter = create(
  require("./letter.scss"), "Letter",
  function ({
    children,
    ...rest
  }: {
    children: string,
    className?: string
  }): ReactElement {

    return (
      <span styleName="root" {...rest}>
        {children.split("").map((char, index) => (
          <LetterChar key={`${index}-${char}`} char={char}/>
        ))}
      </span>
    );

  }
);