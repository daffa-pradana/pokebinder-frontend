export type PokemonType =
  | "Dark"
  | "Dragon"
  | "Fighting"
  | "Fire"
  | "Grass"
  | "Lightning"
  | "Normal"
  | "Psychic"
  | "Steel"
  | "Water";

export interface PokemonCardDetail {
  id: string;
  name: string;
  imageUrl: string;
  type: PokemonType;
  rarity: string;
  illustrator: string;
  set: string;
  cardNo: string;
  lowestPrice: number;
  marketPrice: number;
  gradedPrice: number;
}
