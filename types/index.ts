export type ProductsTypes = {
  id: number;
  name: string;
  price: number;
  qtd?: number;
  image: string;
  compatibility: string;
};

export type ProductsCartTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
  qtd: number;
};

export type WishesTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CardObjTypes = {
  description: string;
  icon: string;
  alt: string;
  id: number;
};

export type CategoriesItemsTypes = {
  text: string;
  id: number;
};

export type TeamCardsTypes = {
  id: number;
  name: string;
  office: string;
  image: string;
};
