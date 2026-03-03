import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardDetails from "./CardDetails";
import { PokemonCardDetail } from "../../types/pokemoncarddetail";

const mockCard: PokemonCardDetail = {
  id: "test-01",
  name: "Charizard EX",
  imageUrl: "https://example.com/charizard.png",
  type: "Fire",
  rarity: "Ultra Rare (UR)",
  illustrator: "Mitsuhiro Arita",
  set: "Base Set",
  cardNo: "4/102",
  lowestPrice: 50,
  marketPrice: 120,
  gradedPrice: 250,
};

describe("CardDetails", () => {
  it("renders the card name", () => {
    render(<CardDetails cardDetail={mockCard} />);
    expect(screen.getByText("Charizard EX")).toBeInTheDocument();
  });

  it("renders the card image with correct src and alt", () => {
    render(<CardDetails cardDetail={mockCard} />);
    const cardImage = screen.getByAltText("Charizard EX");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src", "https://example.com/charizard.png");
  });

  it("renders the type badge with the type label", () => {
    render(<CardDetails cardDetail={mockCard} />);
    expect(screen.getByText("Fire")).toBeInTheDocument();
  });

  it("renders the type icon with correct alt text", () => {
    render(<CardDetails cardDetail={mockCard} />);
    const typeIcon = screen.getByAltText("Fire");
    expect(typeIcon).toBeInTheDocument();
  });

  it("renders all card detail fields with correct values", () => {
    render(<CardDetails cardDetail={mockCard} />);
    expect(screen.getByText("Mitsuhiro Arita")).toBeInTheDocument();
    expect(screen.getByText("Base Set")).toBeInTheDocument();
    expect(screen.getByText("Ultra Rare (UR)")).toBeInTheDocument();
    expect(screen.getByText("4/102")).toBeInTheDocument();
  });

  it("renders all price fields with formatted currency values", () => {
    render(<CardDetails cardDetail={mockCard} />);
    expect(screen.getByText("$50.00")).toBeInTheDocument();
    expect(screen.getByText("$120.00")).toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
  });

  it("renders correct data when given a different card", () => {
    const anotherCard: PokemonCardDetail = {
      ...mockCard,
      name: "Pikachu V",
      imageUrl: "https://example.com/pikachu.png",
      type: "Lightning",
      illustrator: "Ken Sugimori",
      cardNo: "25/25",
    };
    render(<CardDetails cardDetail={anotherCard} />);
    expect(screen.getByText("Pikachu V")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu V")).toHaveAttribute("src", "https://example.com/pikachu.png");
    expect(screen.getByText("Lightning")).toBeInTheDocument();
    expect(screen.getByAltText("Lightning")).toBeInTheDocument();
    expect(screen.getByText("Ken Sugimori")).toBeInTheDocument();
    expect(screen.getByText("25/25")).toBeInTheDocument();
  });
});
