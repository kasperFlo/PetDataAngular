export interface linksJson {
  self : href;
  owner: href;
  pet: href;
}
export interface href {
  href : string;
}

export interface ownerJson {
  id: string;
  firstName: string;
  lastName: string;
  petCount : number;
  links : linksJson;
}

export interface CatalogJson {
  owners : ownerJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}
