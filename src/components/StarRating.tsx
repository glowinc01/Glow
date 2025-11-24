// components/StarRating.tsx
import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  count?: number;
  size?: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  count = 5,
  size = 20,
  color = "#FFD700",
}) => {
  return (
    <div className="flex justify-center mb-3">
      {Array.from({ length: count }, (_, i) => (
        <FaStar key={i} size={size} color={color} />
      ))}
    </div>
  );
};

export default StarRating;