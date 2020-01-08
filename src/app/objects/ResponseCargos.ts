import { ResponseStatus} from './ResponseStatus';
import {Cargos} from './Cargos';

export interface ResponseCargos {
  responseStatus: ResponseStatus;
  cargos: Array<Cargos>;
}
