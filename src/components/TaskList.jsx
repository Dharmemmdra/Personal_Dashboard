export default function TaskList({ tasks, onToggle }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-80 mb-6 dark:bg-gray-800">
      <h3 className="font-semibold mb-3 text-lg">Today’s Tasks</h3>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between items-center mb-2">
          <span className={\`\${task.done ? "line-through text-gray-400" : ""}\`}>{task.title}</span>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
