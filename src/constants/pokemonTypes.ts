import darkIcon from "@/assets/icons/dark-icon.png";
import dragonIcon from "@/assets/icons/dragon-icon.png";
import fightingIcon from "@/assets/icons/fighting-icon.png";
import fireIcon from "@/assets/icons/fire-icon.png";
import grassIcon from "@/assets/icons/grass-icon.svg";
import lightningIcon from "@/assets/icons/lightning-icon.png";
import normalIcon from "@/assets/icons/normal-icon.png";
import psychicIcon from "@/assets/icons/phsycic-icon.png";
import steelIcon from "@/assets/icons/steel-icon.png";
import waterIcon from "@/assets/icons/water-icon.png";

import { PokemonType } from "@/types/pokemoncarddetail";

export const POKEMON_TYPE_ICONS: Record<PokemonType, string> = {
  Dark: darkIcon,
  Dragon: dragonIcon,
  Fighting: fightingIcon,
  Fire: fireIcon,
  Grass: grassIcon,
  Lightning: lightningIcon,
  Normal: normalIcon,
  Psychic: psychicIcon,
  Steel: steelIcon,
  Water: waterIcon,
};

export const POKEMON_TYPE_COLORS: Record<PokemonType, string> = {
  Dark: "#374151",
  Dragon: "#4F46E5",
  Fighting: "#DC2626",
  Fire: "#EA580C",
  Grass: "#16A34A",
  Lightning: "#CA8A04",
  Normal: "#6B7280",
  Psychic: "#DB2777",
  Steel: "#475569",
  Water: "#2563EB",
};
