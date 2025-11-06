export default function ProfileCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mb-6 w-80 text-center dark:bg-gray-800">
      <img
        src="/avatar.png"
        alt="avatar"
        className="mx-auto rounded-full w-20 h-20 mb-3 border-2 border-gray-300 dark:border-gray-600"
      />
      <h2 className="text-xl font-semibold">Alex Johnson</h2>
      <p className="text-gray-500 text-sm dark:text-gray-400">Frontend Developer</p>
      <p className="text-gray-400 text-sm mt-1 dark:text-gray-500">alex.johnson@example.com</p>
    </div>
  );
}
