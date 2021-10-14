import { ChartData } from "chart.js";
import { createContext, useContext, useState } from "react";
import {
  getChartConfig,
  INIT_LENGTH,
  INIT_SORTING_STATUS,
  SortingStatus,
} from "./services";

type ContextProps = {
  length: number;
  randomArr: number[];
  sortingStatus: SortingStatus[];
  data: ChartData;
  generateArr: () => void;
  handleLengthChange: (v: number) => void;
  updateSortingStatus: (v: SortingStatus[]) => void;
  updateRandomArr: (v: number[]) => void;
  updateChartData: (v: number[], s?: SortingStatus[]) => void;
};

const CONTEXT_INIT_VAL = {
  length: INIT_LENGTH,
  randomArr: Array.from({ length: INIT_LENGTH }, () =>
    Math.floor(Math.random() * INIT_LENGTH)
  ),
  sortingStatus: INIT_SORTING_STATUS,
  data: { datasets: [] },
  generateArr: () => {},
  handleLengthChange: (v: number) => {},
  updateRandomArr: (v: number[]) => {},
  updateSortingStatus: (v: SortingStatus[]) => {},
  updateChartData: (v: number[], s?: SortingStatus[]) => {},
};

const SortingArrContext = createContext<ContextProps>(CONTEXT_INIT_VAL);

export const useSortingData = () => useContext(SortingArrContext);

export const SortingDataProvider = (props: any) => {
  const [length, setLength] = useState(INIT_LENGTH);
  const { randomArr, generateArr1, updateRandomArr } = useRandomArr(length);
  const [data, setData] = useState(getChartConfig(length, randomArr));
  const [sortingStatus, setSortingStatus] = useState(INIT_SORTING_STATUS);

  function updateSortingStatus(arr: SortingStatus[]) {
    setSortingStatus(arr);
  }
  function updateChartData1(arr: number[], sortingStatus?: SortingStatus[]) {
    setData(getChartConfig(length, arr, sortingStatus));
  }
  function handleLengthChange(val: number) {
    setLength(val);
  }
  function generateArr() {
    generateArr1();
    setSortingStatus(INIT_SORTING_STATUS);
    updateChartData1(randomArr);
  }
  function updateChartData(arr: number[], sortingStatus?: SortingStatus[]) {
    updateRandomArr(arr);
    setSortingStatus(sortingStatus ?? []);
    updateChartData1(arr, sortingStatus);
  }
  return (
    <SortingArrContext.Provider
      value={{
        length,
        randomArr,
        sortingStatus,
        data,
        generateArr,
        handleLengthChange,
        updateSortingStatus,
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
