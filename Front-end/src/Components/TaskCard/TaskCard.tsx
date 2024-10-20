import React from "react";
import { TaskCardContainer } from "./TaskCard.style";

type TaskCardProps = {
  taskName: string;
  description: string;
  status: string;
  onApprove: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({
  taskName,
  description,
  status,
  onApprove,
}) => {
  return (
    <TaskCardContainer>
      <div className="header">
        <h4>{taskName}</h4>
        <span className={`status ${status}`}>{status}</span>
      </div>
      <p>{description}</p>
      {status === "Em andamento" && (
        <button onClick={onApprove}>Aprovar para teste</button>
      )}
    </TaskCardContainer>
  );
};

export default TaskCard;
