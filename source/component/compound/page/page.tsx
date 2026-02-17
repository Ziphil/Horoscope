//

import dayjs from "dayjs";
import {ReactElement, useMemo} from "react";
import {create} from "/source/component/create";
import {calcCoordinates} from "/source/util/coordinate";


export const Page = create(
  require("./page.scss"), "Page",
  function ({
  }: {
  }): ReactElement {

    const coordinates = useMemo(() => calcCoordinates(dayjs()), []);

    return (
      <main styleName="root">
        <div styleName="horoscope">
        </div>
      </main>
    );

  }
);