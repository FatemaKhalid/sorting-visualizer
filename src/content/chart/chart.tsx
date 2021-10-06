import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSortingData } from "../contentContext";
import { getChartConfig } from "./services";

export function Chart() {
  const { length, generateArr, randomArr, data, updateChartData } =
    useSortingData();
  // const [data, setData] = useState(getChartConfig(length, randomArr));

  useEffect(() => {
    generateArr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);
  useEffect(() => {
    updateChartData(randomArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomArr]);
  return (
    <>
      <Bar
        data={data}
        width={100}
        height={40}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
}
