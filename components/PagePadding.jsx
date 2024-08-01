import React from "react";

const PagePadding = ({ children }) => {
  //화면이 늘어나면 100px 만큼 padding 이 주어짐
  return <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>;
};

export default PagePadding;
