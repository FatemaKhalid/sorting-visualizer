import { useEffect, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { useSortingData } from "../contentContext";
import { getChartConfig } from "./services";

export function Chart() {
  const { length, randomArr, generateArr } = useSortingData();
  useEffect(() => {
    generateArr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);
  const data = useMemo(
    () => getChartConfig(length, randomArr),
    [randomArr, length]
  );
  return (
    <>
      <Bar
        data={data}
        width={100}
        height={45}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
}
