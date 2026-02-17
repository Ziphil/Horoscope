//

import dayjs from "dayjs";
import {ReactElement, useMemo} from "react";
import {Horoscope} from "/source/component/compound/horoscope";
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
          <Horoscope coordinates={coordinates}/>
        </div>
      </main>
    );

  }
);