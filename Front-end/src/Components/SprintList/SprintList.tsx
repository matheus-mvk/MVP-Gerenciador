import React from "react";
import SprintCard from "../SprintCard/SprintCard";
import TaskCard from "../TaskCard/TaskCard";

const SprintList: React.FC = () => {
  const sprints = [
    {
      sprintNumber: 6,
      progress: 50,
      startDate: "01/02",
      endDate: "01/02",
      tasks: [
        {
          taskName: "Nome da Tarefa 1",
          description: "Descrição da tarefa 1",
          status: "Em andamento",
        },
        {
          taskName: "Nome da Tarefa 2",
          description: "Descrição da tarefa 2",
          status: "Finalizada",
        },
      ],
    },
  ];

  return (
    <>
      {sprints.map((sprint, index) => (
        <div key={index}>
          <SprintCard
            sprintNumber={sprint.sprintNumber}
            progress={sprint.progress}
            startDate={sprint.startDate}
            endDate={sprint.endDate}
          />
          {sprint.tasks.map((task, i) => (
            <TaskCard
              key={i}
              taskName={task.taskName}
              description={task.description}
              status={task.status}
              onApprove={() => alert(`Aprovar a tarefa ${task.taskName}`)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default SprintList;
