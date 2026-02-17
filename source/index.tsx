//

import {createRoot} from "react-dom/client";
import {Root} from "/source/component/root";


async function main(): Promise<void> {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<Root/>);
  }
}

main();