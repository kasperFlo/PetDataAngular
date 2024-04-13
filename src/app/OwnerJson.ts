export interface linksJson {
  self : href;
  owner: href;
  pet: href;
}
export interface href {
  href : string;
}

export interface OwnerJson {
  id: number;
  firstName: string;
  lastName: string;
  petCount : number;
  _links : linksJson;
}

export interface CatalogJson {
  owners : OwnerJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}
