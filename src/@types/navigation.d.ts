export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      create: undefined | { 
        id?: string;
      };
      meal: { 
        id: string; 
      };
      feedback: boolean;
      statistics: undefined;
    }
  }
}