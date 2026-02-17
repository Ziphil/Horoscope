//

import {ReactElement} from "react";
import {create} from "/source/component/create";


require("./root.scss");


export const Root = create(
  null, "Root",
  function ({
  }: {
  }): ReactElement {

    return (
      <div>
        Hello World
      </div>
    );

  }
);