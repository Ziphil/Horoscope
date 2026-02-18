/* eslint-disable @typescript-eslint/naming-convention */

import {Dayjs} from "dayjs";
import {ReactElement} from "react";
import {Letter} from "/source/component/atom/letter";
import {create} from "/source/component/create";


export const HoroscopeDateView = create(
  require("./horoscope-date-view.scss"), "HoroscopeDateView",
  function ({
    date
  }: {
    date: Dayjs
  }): ReactElement {

    return (
      <div styleName="root">
        <div styleName="date">
          <span styleName="date-item">
            <Letter>{date.date().toString(12)}</Letter>
          </span>
          <Letter>{":"}</Letter>
          <span styleName="date-item">
            <Letter>{(date.month() + 1).toString(13)}</Letter>
          </span>
        </div>
        <div styleName="year">
          <Letter>{date.year().toString(12)}</Letter>
        </div>
      </div>
    );

  }
);