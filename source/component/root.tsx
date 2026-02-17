//

import {ReactElement} from "react";
import {Page} from "/source/component/compound/page";
import {create} from "/source/component/create";


require("./root.scss");


export const Root = create(
  null, "Root",
  function ({
  }: {
  }): ReactElement {

    return (
      <div>
        <Page/>
      </div>
    );

  }
);