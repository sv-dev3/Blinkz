import React from "react";
import CardLayout from "src/layout/CardLayout";
import GridLayout from "src/layout/GridLayout";

const MegaMenu = ({ menuItems }) => {
  return (
    <div
      className="left-[1rem] right-[1rem] w-full z-50 opacity-0 transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
      style={{ top: "80%" }}
    >
      <div className="bg-white shadow-lg mt-4 h-fit">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div>
              {item.subMenu && item?.subMenuCardData && (
                <CardLayout data={item?.subMenuCardData} />
              )}
            </div>
            {item?.subMenu && item?.subMenuGridData && (
              <GridLayout data={item?.subMenuGridData} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
