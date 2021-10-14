import { ReactElement } from "react";

export type SortingTypes = {
  name: string;
  strategy: () => ReactElement;
};
export enum SortingStatus {
  NOT_PROCESSED = "rgba(153, 102, 255, 0.2)",
  PROCESSING = "rgba(54, 162, 235, 0.2)",
  PROCESSED = "rgba(255, 99, 132, 0.2)",
}
