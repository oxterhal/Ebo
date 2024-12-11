const Reviews = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">John</td>
            <td className="border p-2">Great product!</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Jane</td>
            <td className="border p-2">Very useful.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Reviews;
