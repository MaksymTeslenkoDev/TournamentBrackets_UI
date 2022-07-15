export enum LoadStatus {
  loading = "loading",
  rejected = "rejected",
  fullfiled = "fullfiled",
  idle = "idle",
}

export interface LoadErrorStatus {
  status: LoadStatus;
  error: null | string;
}
