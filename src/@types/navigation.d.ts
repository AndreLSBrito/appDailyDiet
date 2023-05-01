import { PercentTypeStyleProps } from "../components/Percent/styles"; 

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      statistic: {
        type: PercentTypeStyleProps;
      }
    }
  }
}