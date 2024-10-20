import React from "react";
import { SprintCardContainer, ProgressBar } from "./SprintCard.style";

type SprintCardProps = {
  sprintNumber: number;
  progress: number;
  startDate: string;
  endDate: string;
};

const SprintCard: React.FC<SprintCardProps> = ({
  sprintNumber,
  progress,
  startDate,
  endDate,
}) => {
  return (
    <SprintCardContainer>
      <h3>Sprint {sprintNumber}</h3>
      <ProgressBar>
        <div className="filled" style={{ width: `${progress}%` }}></div>
      </ProgressBar>
      <div className="dates">
        <span>Início: {startDate}</span>
        <span>Fim: {endDate}</span>
      </div>
    </SprintCardContainer>
  );
};

export default SprintCard;
