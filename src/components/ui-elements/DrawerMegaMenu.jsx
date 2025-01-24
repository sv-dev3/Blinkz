import React from "react";
import CardLayout from "src/layout/CardLayout";
import GridLayout from "src/layout/GridLayout";

const DrawerMegaMenu = ({ menuItem }) => {
  return (
    <div>
      <div>
        {menuItem.subMenu && menuItem?.subMenuCardData && (
          <CardLayout data={menuItem?.subMenuCardData} />
        )}
      </div>
      {menuItem?.subMenu && menuItem?.subMenuGridData && (
        <GridLayout data={menuItem?.subMenuGridData} />
      )}
    </div>
  );
};

export default DrawerMegaMenu;
