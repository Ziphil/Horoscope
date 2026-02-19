//

import dayjs, {Dayjs} from "dayjs";
import {useEffect, useState} from "react";


export function useNow(duration: number): Dayjs {
  const [now, setNow] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);
  return now;
}