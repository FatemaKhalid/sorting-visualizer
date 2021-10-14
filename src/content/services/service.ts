import { SortingStatus } from ".";

export const getChartConfig = (
  length: number,
  randomArr: number[],
  statuses?: SortingStatus[]
) => {
  // const backgroundColor =
  //   statuses ?? Array.from({ length }, () => "rgba(255, 99, 132, 0.2)");

  const { backgroundColor, borderColor } = mapSortStatusToColor(statuses);
  return {
    labels: Array.from({ length }, (_, i) => i + 1),
    datasets: [
      {
        label: "",
        data: randomArr,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };
};

function mapSortStatusToColor(numStatus?: SortingStatus[]) {
  let backgroundColor: string[] = [],
    borderColor: string[] = [];
  numStatus?.forEach((status) => {
    backgroundColor.push(
      status === SortingStatus.NOT_PROCESSED
        ? "rgba(153, 102, 255, 0.2)"
        : status === SortingStatus.PROCESSING
        ? "rgba(75, 192, 192, 0.2)"
        : "rgba(255, 99, 132, 0.2)"
    );
    borderColor.push(
      status === SortingStatus.NOT_PROCESSED
        ? "rgb(153, 102, 255)"
        : status === SortingStatus.PROCESSING
        ? "rgb(75, 192, 192)"
        : "rgb(255, 99, 132)"
    );
  });
  return { backgroundColor, borderColor };
}

export function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
