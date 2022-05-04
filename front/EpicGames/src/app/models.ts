export interface Game{
  id: number
  name: String
  description: String
  price: number
  author: number
  category: Category
}

export interface AuthToken {
  access: string
  refresh: string
}
export interface Category {
  id: number
  name: String
}

export interface Whishlist {
  id: number
  user: number
  product_id: Game[]
}

export interface Review {
  id: number
  text: string

}
