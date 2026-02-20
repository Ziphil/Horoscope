//

import dayjs, {Dayjs} from "dayjs";
import {ReactElement, useEffect, useMemo, useState} from "react";
import {Horoscope} from "/source/component/compound/horoscope";
import {PlanetTable} from "/source/component/compound/planet-table";
import {create} from "/source/component/create";
import {useHash} from "/source/hook/hash";
import {useNow} from "/source/hook/now";
import {GeographicCoordinate, calcPlanetCoordinates, getCurrentCoordinate} from "/source/util/coordinate";


export const Page = create(
  require("./page.scss"), "Page",
  function ({
  }: {
  }): ReactElement {

    const now = useNow(10000);

    const hash = useHash();
    const hashDate = useMemo(() => parseDate(hash), [hash]);
    const date = hashDate ?? now;

    const planetCoordinates = useMemo(() => calcPlanetCoordinates(date), [date]);

    const [currentCoordinate, setCurrentCoordinate] = useState<GeographicCoordinate | null>(null);
    useEffect(() => {
      getCurrentCoordinate().then(setCurrentCoordinate).catch(() => null);
    }, []);

    console.log(currentCoordinate);

    return (
      <main styleName="root" key={hash}>
        <div styleName="horoscope">
          <Horoscope date={date} planetCoordinates={planetCoordinates} currentCoordinate={currentCoordinate}/>
        </div>
        <div styleName="table">
          <PlanetTable planetCoordinates={planetCoordinates} currentCoordinate={currentCoordinate}/>
        </div>
      </main>
    );

  }
);


function parseDate(string: string): Dayjs | null {
  const parsedDate = dayjs(string, "YYYY-MM-DDTHH:mm:ss");
  if (parsedDate.isValid()) {
    return parsedDate;
  } else {
    return null;
  }
}
