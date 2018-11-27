
export class Usuario{

  constructor(
      public email: string,
      public password: string,
      public rol?: string,
      public google?: boolean,
      public _id?: string
  ){}

}
