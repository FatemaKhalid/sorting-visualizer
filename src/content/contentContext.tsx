import { createContext, useContext, useState } from "react";
import { getChartConfig } from "./chart/services";
import { INIT_LENGTH } from "./controlBar/constants";

type ContextProps = {
  length: number;
  randomArr: number[];
  // data: any;
  generateArr: () => void;
  handleLengthChange: (v: number) => void;
  updateRandomArr: (v: number[]) => void;
  // updateChartData: (v: number[]) => void;
};

const CONTEXT_INIT_VAL = {
  length: INIT_LENGTH,
  randomArr: Array.from({ length: INIT_LENGTH }, () =>
    Math.floor(Math.random() * INIT_LENGTH)
  ),
  // data: {},
  generateArr: () => {},
  handleLengthChange: (v: number) => {},
  updateRandomArr: (v: number[]) => {},
  // updateChartData: (v: number[]) => {},
};

const SortingArrContext = createContext<ContextProps>(CONTEXT_INIT_VAL);

export const useSortingData = () => useContext(SortingArrContext);

export const SortingDataProvider = (props: any) => {
  const [length, setLength] = useState(INIT_LENGTH);
  const { randomArr, generateArr, updateRandomArr } = useRandomArr(length);
  // const { data, updateChartData } = useChartData(length, randomArr);
  function handleLengthChange(val: number) {
    setLength(val);
  }

  return (
    <SortingArrContext.Provider
      value={{
        length,
        randomArr,
        // data,
        generateArr,
        handleLengthChange,
        updateRandomArr,
        // updateChartData,
      }}
    >
      {props.children}
    </SortingArrContext.Provider>
  );
};

function useRandomArr(length: number) {
  const [randomArr, setRandomArr] = useState<number[]>([]);
  function generateArr() {
    const randomData = Array.from({ length }, () =>
      Math.floor(Math.random() * length)
    );
    setRandomArr(randomData);
  }
  function updateRandomArr(arr: number[]) {
    setRandomArr(arr);
    console.log(randomArr.join(","));
  }
  return { randomArr, generateArr, updateRandomArr };
}

// function useChartData(length: number, randomArr: number[]) {
//   const [data, setData] = useState(getChartConfig(length, randomArr));
//   function updateChartData(arr: number[]) {
//     setData(getChartConfig(length, arr));
//   }
//   return { data, updateChartData };
// }
