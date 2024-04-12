export interface IRegistration {
  name: string
  sur_name: string
  login: string
  password: string
  //res_password: string
}

export interface IReg {
  id?: number
  name: string
  sur_name: string
  login: string
  password?: string
  res_password?: string
  country_id?: number
  date?: string
  sex?: string
}

export interface IRegInput {
  name: string
  sur_name: string
  login: string
  password: string
  res_password: string
}
