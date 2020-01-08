import {Injectable} from '@angular/core';
import {Response} from '../objects/Response';
import {HomeComponent} from '../pages/home/home.component';
import {UsuarioComponent} from '../usuarios/usuario.component';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private response: Response;
    enConsulta: boolean;
    home: HomeComponent;
    usuario: UsuarioComponent;

    constructor() {
    }

    get Response(): Response {
        return this.response;
    }

    set Response(value: Response) {
        this.response = value;
    }

}
