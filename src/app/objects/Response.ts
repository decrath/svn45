import {Sistema} from './Sistema';
import {ResponseStatus} from './ResponseStatus';

export interface Response {
  responseStatus: ResponseStatus;
  sistemas: Array<Sistema>;
}
