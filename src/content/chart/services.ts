export const getChartConfig = (length: number, randomArr: number[]) => ({
  labels: Array.from({ length }, () => ""),
  datasets: [
    {
      label: "",
      data: randomArr,
      backgroundColor: Array.from({ length }, () => "rgba(255, 99, 132, 0.2)"),
      borderColor: Array.from({ length }, () => "rgba(255, 99, 132, 1)"),
      borderWidth: 1,
    },
  ],
});
