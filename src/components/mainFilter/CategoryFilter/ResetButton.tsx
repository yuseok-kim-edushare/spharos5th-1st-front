import React from "react";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button className="text-gray" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M12,0C7.973,0,4.213,2.036,2,5.365V0H1V5.5c0,.827,.673,1.5,1.5,1.5h5.5v-1H2.779C4.801,2.9,8.275,1,12,1c6.065,0,11,4.935,11,11s-4.935,11-11,11S1,18.065,1,12H0c0,6.617,5.383,12,12,12s12-5.383,12-12S18.617,0,12,0Z" />
      </svg>
    </button>
  );
};

export default ResetButton;
