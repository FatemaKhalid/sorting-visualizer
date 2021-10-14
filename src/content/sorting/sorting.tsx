import { ElementType } from "react";
import { useSortingData } from "../contentContext";
import { sleep, SortingStatus } from "../services";

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
  const { randomArr, updateChartData, sortingStatus } = useSortingData();

  function sortArr(
    data: number[],
    cb: (arr: number[], s: SortingStatus[]) => void
  ): number[] {
    let statusArr = sortingStatus;
    data.forEach((_, i) => {
      let min = Number.MAX_SAFE_INTEGER,
        minIdx = i;
      statusArr[i] = SortingStatus.PROCESSING;
      for (let idx = i; idx < data.length; idx++) {
        statusArr[idx] = SortingStatus.PROCESSING;
        cb(data, statusArr);
        if (min >= data[idx]) {
          min = Math.min(min, data[idx]);
          minIdx = idx;
          const temp = data[i];
          data[i] = data[minIdx];
          data[minIdx] = temp;
        }

        cb(data, statusArr);
      }
      statusArr[i] = SortingStatus.PROCESSED;
      cb(data, statusArr);
    });
    return data;
  }

  return (
    <button
      className="sorting__btn"
      type="button"
      onClick={() => sortArr(randomArr, updateChartData)}
    >
      SelectionSort
    </button>
  );
}
