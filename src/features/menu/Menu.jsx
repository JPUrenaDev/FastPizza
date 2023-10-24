import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData, useNavigation } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const data = useLoaderData(); //ESTO RECIBIRA LO QUE TENEMOS EN EL LOADER AFUERA EN EL ROUTE
  console.log(data);
  return (
    <ul className="  divide-y divide-black">
      {data.map((valor, key) => (
        <MenuItem pizza={valor} key={key} />
      ))}{' '}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
