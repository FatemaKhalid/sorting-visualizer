import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSortingData } from "../contentContext";

export function Chart() {
  const { data, updateChartData, randomArr, generateArr, length } =
    useSortingData();
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
