import {Rol} from './Rol';

export interface Sistema {

  id: number;
  codigo: string;
  descripcion: string;
  borrable: boolean;
  roles?: Array<Rol>;
}
