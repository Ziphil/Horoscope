//

import dayjs, {Dayjs} from "dayjs";
import {ReactElement, useMemo} from "react";
import {Horoscope} from "/source/component/compound/horoscope";
import {PlanetTable} from "/source/component/compound/planet-table";
import {create} from "/source/component/create";
import {useHash} from "/source/hook/hash";
import {useNow} from "/source/hook/now";
import {calcCoordinates} from "/source/util/coordinate";


export const Page = create(
  require("./page.scss"), "Page",
  function ({
  }: {
  }): ReactElement {

    const now = useNow(10000);

    const hash = useHash();
    const hashDate = useMemo(() => parseDate(hash), [hash]);

    const date = hashDate ?? now;
    const coordinates = useMemo(() => calcCoordinates(date), [date]);

    return (
      <main styleName="root" key={hash}>
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


function parseDate(string: string): Dayjs | null {
  const parsedDate = dayjs(string, "YYYY-MM-DDTHH:mm:ss");
  if (parsedDate.isValid()) {
    return parsedDate;
  } else {
    return null;
  }
}
