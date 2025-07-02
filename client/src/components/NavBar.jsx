import { Link, useLocation } from "react-router-dom";

/**
 * 顶部导航栏组件
 */
export default function NavBar() {
  const location = useLocation();
  const navs = [
    { name: "首页", path: "/" },
    { name: "商品", path: "/products" },
    { name: "我的", path: "/profile" },
  ];
  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex space-x-8">
          {navs.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`px-4 py-2 rounded ${
                location.pathname === nav.path
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 