const Products = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Product A</td>
            <td className="border p-2">$20</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Product B</td>
            <td className="border p-2">$35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Products;
