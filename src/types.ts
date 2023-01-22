export interface User {
  name: Name
  location: Location
  email: string
  login: Login
  phone: string
  cell: string
  picture: Picture
}

export interface Picture {
  thumbnail: string
}

export interface Login {
  username: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: string
}

export interface Street {
  name: string
}

export interface Name {
  first: string
  last: string
}
