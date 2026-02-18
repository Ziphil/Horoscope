//

import dayjs from "dayjs";
import {ReactElement, useEffect, useMemo, useState} from "react";
import {Horoscope} from "/source/component/compound/horoscope";
import {PlanetTable} from "/source/component/compound/planet-table";
import {create} from "/source/component/create";
import {calcCoordinates} from "/source/util/coordinate";


export const Page = create(
  require("./page.scss"), "Page",
  function ({
  }: {
  }): ReactElement {

    const [now, setNow] = useState(dayjs());
    const coordinates = useMemo(() => calcCoordinates(now), [now]);

    useEffect(() => {
      const interval = setInterval(() => {
        setNow(dayjs());
      }, 60000);
      return () => clearInterval(interval);
    }, []);

    return (
      <main styleName="root">
        <div styleName="horoscope">
          <Horoscope coordinates={coordinates}/>
        </div>
        <div styleName="table">
          <PlanetTable coordinates={coordinates}/>
        </div>
      </main>
    );

  }
);