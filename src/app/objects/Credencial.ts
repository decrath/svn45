export class Credencial {
  public constructor(init?: Partial<Credencial>) {
    Object.assign(this, init);
  }

    nombre: string;
    token: string;
}
