import { ResponseStatus } from './ResponseStatus';
import { Sistema } from './Sistema';

export interface ResponseRolesDatum{
    responseStatus: ResponseStatus;
    datum: Sistema;
}