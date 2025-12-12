import { CardProps } from "./Card.types";

export default function Card({ card, onClick, className }: CardProps) {
  return (
    <div
      className={`bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer transition ${className}`}
      onClick={() => onClick?.(card)}
    >
      <img
        src={card.imageUrl}
        alt={card.name}
        className="w-full aspect-[2.5/3.5] bg-gray-200 rounded-lg mb-2"
      />
    </div>
  );
}
