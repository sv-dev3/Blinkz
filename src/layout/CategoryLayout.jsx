import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CategoryLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to generate breadcrumbs
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = ["Home"]; // Starting with Home

    if (pathSegments.length > 0 && pathSegments[0] === "category") {
      // Add "All" to the breadcrumbs
      breadcrumbs.push("All");

      if (pathSegments[1] && pathSegments[1] !== "all") {
        // Add the specific category (e.g., Cleaners) to the breadcrumbs
        breadcrumbs.push(pathSegments[1]);
      }
    }

    return breadcrumbs;
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Redirect user based on the category
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 1) {
      const category = pathSegments[1];
      // Logic to navigate if category changes (you can customize this)
      navigate(`/category/${category}`);
    }
  }, [location, navigate]);

  return (
    <div>
      <div className="breadcrumb flex justify-center items-center space-x-2">
        {generateBreadcrumbs().map((breadcrumb, index) => (
          <div key={index}>
            <Link
              className="cursor-pointer text-black text-xl my-2"
              onClick={() => {
                // Navigate to the category if clicked
                if (breadcrumb.toLowerCase() === "home") {
                  navigate("/");
                } else {
                  const nextRoute =
                    breadcrumb.toLowerCase() === "all"
                      ? "/category/all"
                      : `/category/${breadcrumb.toLowerCase()}`;
                  navigate(nextRoute);
                }
              }}
            >
              {capitalizeFirstLetter(breadcrumb)}
            </Link>
            {index < generateBreadcrumbs().length - 1 && <span> &gt; </span>}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default CategoryLayout;
