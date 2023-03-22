import React from "react";

interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask(id: string): void;
  onPinTask(id: string): void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
};

export default Task;
