export const SortingData = (SortingComponent: any, classes: string) => {
  // function sort(numArr: number[]): number[];
  return (props: any) => (
    <div className={classes}>
      <SortingComponent {...props} />
    </div>
  );
};
