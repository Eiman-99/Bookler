export default function EmptyState({ message = "No results found." }) {
  return (
    <div className="text-center py-20 text-gray-500">
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
