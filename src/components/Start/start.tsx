import React from "react";

export type StartProps = {
  begin: () => void;
};

const Start = ({ begin }: StartProps) => {
  return <div>Start Page</div>;
};

export default Start;
