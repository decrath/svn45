import {ResponseStatus} from './ResponseStatus';
import {Usuario} from './Usuario';

export interface ResponseUsuarios {
  resposaStatus: ResponseStatus;
  usuarios: Array<Usuario>;
}
