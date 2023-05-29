import { StatusStyleProps } from "../components/Meal/styles";
import { PercentTypeStyleProps } from "../components/Percent/styles"; 

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: {
        id: number;
      }
      getMeal: {
        id: number,
      }
      feedback: {
        type: StatusStyleProps;
      }
      statistic: {
        type: PercentTypeStyleProps;
      }
    }
  }
}