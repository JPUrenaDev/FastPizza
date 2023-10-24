import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPrueba = () => {
  const error = useRouteError();
  console.log(error);

  return <div>{error.data}</div>;
};
