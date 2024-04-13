export interface linksJson {
  self : href;
  owner: href;
  pet: href;
}
export interface href {
  href : string;
}

export interface PetsJson {
  id: number;
  name : string;
  petKind : string;
  age : number;
  image : string;
  ownerId : number;
  _links : linksJson;
}

export interface CatalogJson {
  pets : PetsJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}
