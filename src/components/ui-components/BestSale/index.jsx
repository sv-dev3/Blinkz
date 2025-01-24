import React from "react";
import Card from "src/components/ui-elements/Card";
import { dummyData } from "src/helpers/dummyData";

const BestSale = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-row flex-wrap sm:gap-x-[15px] lg:gap-x-[30px] gap-y-8 mt-6">
      {dummyData && dummyData.map((item, index) => <Card data={item} />)}
    </div>
  );
};

export default BestSale;
