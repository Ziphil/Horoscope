//

import dayjs, {Dayjs} from "dayjs";
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

    const [now, setNow] = useState(() => dayjs());
    const hashDate = useMemo(() => parseHashDate(), []);

    const date = hashDate ?? now;
    const coordinates = useMemo(() => calcCoordinates(date), [date]);

    useEffect(() => {
      const interval = setInterval(() => {
        setNow(dayjs());
      }, 60000);
      return () => clearInterval(interval);
    }, []);

    return (
      <main styleName="root">
        <div styleName="horoscope">
          <Horoscope coordinates={coordinates} date={date}/>
        </div>
        <div styleName="table">
          <PlanetTable coordinates={coordinates}/>
        </div>
      </main>
    );

  }
);


function parseHashDate(): Dayjs | null {
  const hash = window.location.hash.slice(1);
  if (hash) {
    const parsedDate = dayjs(hash, "YYYY-MM-DD", true);
    if (parsedDate.isValid()) {
      return parsedDate;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
