//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {LetterChar} from "./letter-char";


export const Letter = create(
  require("./letter.scss"), "Letter",
  function ({
    fixed = true,
    children,
    ...rest
  }: {
    fixed?: boolean,
    children: string,
    className?: string
  }): ReactElement {

    return (
      <span styleName="root" {...rest}>
        {children.split("").map((char, index) => (
          <LetterChar key={`${index}-${char}`} char={char} fixed={fixed}/>
        ))}
      </span>
    );

  }
);