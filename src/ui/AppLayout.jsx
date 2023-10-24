import React from 'react';
import { Header } from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../../src/features//cart/CartOverview';
import { LoaderSpinning } from './LoaderSpinning';

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen  grid-rows-[auto_1fr_auto]">
      {isLoading && <LoaderSpinning />}
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};
