import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchOrder } from '../features/order/SearchOrder';
import { Username } from '../features/user/Username';
import { LoaderSpinning } from './LoaderSpinning';

export const Header = () => {
  const [state, stestate] = useState(false);
  return (
    <header className="font-PIZZA flex items-center justify-between  border-b  border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      {state && <LoaderSpinning />}
      <Link className=" tracking-[5px]" to="/">
        Fast React Pizza Company
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
};
