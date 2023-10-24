import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Button = ({ children, disabled, type, opcion }) => {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300';

  const style = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300',
  };
  if (opcion === 'to')
    return (
      <Link className={style['secondary']} to={'/menu'}>
        CONTINUE ORDERING
      </Link>
    );
  if (children == 'Order Pizzas')
    return (
      <Link className={style[type]} to="/order/new">
        Order pizzas
      </Link>
    );
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
};
Button.propTypes = {
  disabled: PropTypes.bool, // título debe ser una cadena (string) requerida
  children: PropTypes.string, // contenido puede ser una cadena (string) opcional
  type: PropTypes.string,
  opcion: PropTypes.string,
};
