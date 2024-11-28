export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      create: { id: string | undefined };
      meal: { id: string };
      feedback: { onDiet: boolean };
      statistics: undefined;
    }
  }
}