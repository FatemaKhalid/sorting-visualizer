import { ElementType } from "react";
import { useSortingData } from "../contentContext";
import { SortingStatus } from "../controlBar/constants";

type SortingElementProps = {
  Component: ElementType;
  [x: string]: any;
};
export function SortingManager({ Component, ...props }: SortingElementProps) {
  return <Component {...props} />;
}

// export function InsertionSort() {
//   const { randomArr, updateRandomArr } = useSortingData();
//   function sortArr(data: number[], cb: (arr: number[]) => void): number[] {
//     console.log("InsertionSort");

//     return data;
//   }
//   // sortArr(randomArr, updateRandomArr);
//   return <></>;
// }

export function SelectionSort() {
  const { randomArr, updateRandomArr } = useSortingData();

  // const data = useMemo(() => randomArr, [randomArr]);
  function sortArr(data1: number[], cb: (arr: number[]) => void): number[] {
    console.log("SelectionSort");
    let data = randomArr;
    let statusArr = Array.from(
      { length: data.length },
      () => SortingStatus.NOT_PROCESSED
    );
    data.forEach((_, i) => {
      let min = Number.MAX_SAFE_INTEGER,
        minIdx = i;
      statusArr[i] = SortingStatus.PROCESSING;
      for (let idx = i; idx < data.length; idx++) {
        statusArr[idx] = SortingStatus.PROCESSING;
        if (min >= data[idx]) {
          min = Math.min(min, data[idx]);
          minIdx = idx;
          const temp = data[i];
          data[i] = data[minIdx];
          data[minIdx] = temp;
        }
        // console.log(statusArr.join(","));
        cb(data);
      }
      statusArr[i] = SortingStatus.PROCESSED;
    });
    // console.log("final", statusArr.join(","));
    return data;
  }

  return (
    <button
      className="sorting__btn"
      type="button"
      onClick={() => sortArr(randomArr, updateRandomArr)}
    >
      SelectionSort
    </button>
  );
}
