/* eslint-disable @typescript-eslint/naming-convention */

import {Dayjs} from "dayjs";
import {ReactElement} from "react";
import {Letter} from "/source/component/atom/letter";
import {create} from "/source/component/create";
import {FENNESE_FRACTIONS, FENNESE_NUMERALS} from "/source/util/constant";


export const HoroscopeDateView = create(
  require("./horoscope-date-view.scss"), "HoroscopeDateView",
  function ({
    date
  }: {
    date: Dayjs
  }): ReactElement {

    return (
      <div styleName="root">
        <div styleName="top">
          <Letter fixed={false}>{date.hour().toString(12)}</Letter>
          <Letter>{"·"}</Letter>
          <Letter fixed={false}>{FENNESE_FRACTIONS[Math.floor(date.minute() / 5)]}</Letter>
        </div>
        <div styleName="bottom">
          <Letter fixed={false}>{date.date().toString(12)}</Letter>
          <Letter>{":"}</Letter>
          <Letter fixed={false}>{FENNESE_NUMERALS[date.month()]}</Letter>
          <Letter>{":"}</Letter>
          <Letter fixed={false}>{date.year().toString(12)}</Letter>
        </div>
      </div>
    );

  }
);