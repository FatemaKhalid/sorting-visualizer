import { ChartData } from "chart.js";
import { createContext, useContext, useState } from "react";
import { getChartConfig, INIT_LENGTH } from "./services";

type ContextProps = {
  length: number;
  randomArr: number[];
  data: ChartData;
  generateArr: () => void;
  handleLengthChange: (v: number) => void;
  updateRandomArr: (v: number[]) => void;
  updateChartData: (v: number[]) => void;
};

const CONTEXT_INIT_VAL = {
  length: INIT_LENGTH,
  randomArr: Array.from({ length: INIT_LENGTH }, () =>
    Math.floor(Math.random() * INIT_LENGTH)
  ),
  data: { datasets: [] },
  generateArr: () => {},
  handleLengthChange: (v: number) => {},
  updateRandomArr: (v: number[]) => {},
  updateChartData: (v: number[]) => {},
};

const SortingArrContext = createContext<ContextProps>(CONTEXT_INIT_VAL);

export const useSortingData = () => useContext(SortingArrContext);

export const SortingDataProvider = (props: any) => {
  const [length, setLength] = useState(INIT_LENGTH);
  const { randomArr, generateArr1, updateRandomArr } = useRandomArr(length);
  const { data, updateChartData1 } = useChartData(length, randomArr);
  function handleLengthChange(val: number) {
    setLength(val);
  }
  function generateArr() {
    generateArr1();
    updateChartData1(randomArr);
  }
  function updateChartData(arr: number[]) {
    updateRandomArr(arr);
    updateChartData1(arr);
  }
  return (
    <SortingArrContext.Provider
      value={{
        length,
        randomArr,
        data,
        generateArr,
        handleLengthChange,
        updateRandomArr,
        updateChartData,
      }}
    >
      {props.children}
    </SortingArrContext.Provider>
  );
};

function useRandomArr(length: number) {
  const init = Array.from({ length }, () => Math.floor(Math.random() * length));
  const [randomArr, setRandomArr] = useState<number[]>(init);
  function generateArr1() {
    const randomData = Array.from({ length }, () =>
      Math.floor(Math.random() * length)
    );
    setRandomArr(randomData);
  }
  function updateRandomArr(arr: number[]) {
    setRandomArr(arr);
  }
  return { randomArr, generateArr1, updateRandomArr };
}

function useChartData(length: number, randomArr: number[]) {
  const [data, setData] = useState(getChartConfig(length, randomArr));

  function updateChartData1(arr: number[]) {
    setData(getChartConfig(length, arr));
  }
  return { data, updateChartData1 };
}
