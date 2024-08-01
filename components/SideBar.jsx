import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const SideBar = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
      <nav className=" hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        {/* flex-1 : 나머지 부분을 모두 사용할 수 있도록 함 */}
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideBar;
