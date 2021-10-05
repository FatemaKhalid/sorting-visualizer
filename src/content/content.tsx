import { Chart } from "./chart";
import { SortingDataProvider } from "./contentContext";
import { ControlBar } from "./controlBar";

export function Content() {
  return (
    <SortingDataProvider>
      <ControlBar />
      <Chart />
    </SortingDataProvider>
  );
}
