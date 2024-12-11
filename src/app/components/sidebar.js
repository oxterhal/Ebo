const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 font-bold text-xl">Dashboard</div>
      <nav className="mt-5">
        <ul>
          <li className="p-3 hover:bg-gray-700">
            <a href="/users">Users</a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="/products">Products</a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="/reviews">Reviews</a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="/analytics">Analytics</a>
          </li>
          <li className="p-3 hover:bg-gray-700">
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
