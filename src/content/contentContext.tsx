import { createContext, useContext, useState } from "react";

type ContextProps = {
  length: number;
  randomArr: number[];
  generateArr: () => void;
  handleLengthChange: (v: number) => void;
};

const CONTEXT_INIT_VAL = {
  length: 30,
  randomArr: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30)),
  generateArr: () => {},
  handleLengthChange: (v: number) => {},
};

const SortingArrContext = createContext<ContextProps>(CONTEXT_INIT_VAL);

export const useSortingData = () => useContext(SortingArrContext);

export const SortingDataProvider = (props: any) => {
  const [length, setLength] = useState(60);
  const { randomArr, generateArr } = useRandomArr(length);
  function handleLengthChange(val: number) {
    setLength(val);
  }
  return (
    <SortingArrContext.Provider
      value={{
        length,
        randomArr,
        generateArr,
        handleLengthChange,
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
  return { randomArr, generateArr };
}
