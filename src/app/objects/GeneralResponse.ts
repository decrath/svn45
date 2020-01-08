import { ResponseStatus } from './ResponseStatus';

export interface GeneralResponse<Tdata> {
  responseStatus: ResponseStatus;
  data: Array<Tdata>;
}
