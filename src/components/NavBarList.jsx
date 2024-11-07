// components/NavList.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProducts } from "../services/collectionRegisters";

export default function NavList() {
  const [categoriesNavbar, setCategoriesNavbar] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const products = await getAllProducts();
        const uniqueCategories = [
          ...new Set(products.map((product) => product.category)),
        ];
        setCategoriesNavbar(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="d-flex w-md-100 content-space-center content-align-items-center">
      {categoriesNavbar.map((category) => (
        <NavLink
          className={"nav-txt"}
          key={category}
          to={`/category/${category}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}
