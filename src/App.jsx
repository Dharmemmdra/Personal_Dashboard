import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import tasksData from "./data/tasks.json";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState(tasksData);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className={\`\${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-8 transition-colors\`}>
      <h1 className="text-3xl font-bold mb-6">Personal Dashboard</h1>
      <ProfileCard />
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
