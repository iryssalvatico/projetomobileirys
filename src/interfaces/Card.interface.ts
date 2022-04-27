export interface CardSocialProps {
    children: JSX.Element
  }
  
  export interface CardProps {
    data: {
      id: number,
      nome: string,
      data: Date,
      titulodolivro: string,
      comentario: string,
      topico: {
        id: number,
        item: string
      }[]
    }
  }