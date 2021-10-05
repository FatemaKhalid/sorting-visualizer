export class SortingManager {
  private sorter: Sorter;
  constructor(sorter: Sorter) {
    this.sorter = sorter;
  }
  public setsorter(sorter: Sorter) {
    this.sorter = sorter;
  }
  public sortArr(arr: number[]): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.sorter.sortArr(arr);
    console.log(result.join(","));

    // return result;
  }
}

export interface Sorter {
  sortArr(data: number[]): number[];
}

export class InsertionSort implements Sorter {
  public sortArr(data: number[]): number[] {
    console.log("InsertionSort");

    return data;
  }
}
