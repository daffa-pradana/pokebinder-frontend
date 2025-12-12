// src/components/Card/Card.types.ts
import { PokemonCard } from "../../types/pokemoncard";

export interface CardProps {
  card: PokemonCard;  // the data
  onClick?: (card: PokemonCard) => void;  // optional action
  className?: string;  // allow custom styling if needed
}
