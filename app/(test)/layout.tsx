import React from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>This is a Navbar</div>
      <hr />
      {children}
    </div>
  );
};

export default TestLayout;
