import React from 'react';
import { actualizarNombre } from '../../store/UserSlicer';
import { useSelector } from 'react-redux';

export const Username = () => {
  const selector = useSelector((state) => state);
  console.log(selector);
  if (!selector) return null;
  return (
    <div className=" hidden text-sm font-semibold md:block">
      {selector.counter.Name}
    </div>
  );
};
