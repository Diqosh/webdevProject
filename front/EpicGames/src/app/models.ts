export interface Game{
  id: number
  name: String
  description: String
  price: number
  author: number
}

export interface AuthToken {
  access: string
  refresh: string
}
export interface Category {
  id: number
  name: String
}
