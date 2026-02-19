//

import {useEffect, useState} from "react";


function getHash(): string {
  return window.location.hash.slice(1);
}

export function useHash(): string {
  const [hash, setHash] = useState(getHash);
  useEffect(() => {
    const handleHashChange = function (): void {
      setHash(getHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return hash;
}