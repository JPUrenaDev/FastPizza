import { Outlet } from 'react-router-dom';
import CreateUser from '../features/user/CreateUser';
import { actualizarNombre } from '../store/UserSlicer';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
function Home() {
  const selector = useSelector((valor) => valor);
  console.log(selector);

  return (
    <div>
      <div className="my-4 md:my-20">
        <h1 className=" text-center text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className=" text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {!selector.counter.Name.length < 1 ? (
          <h1 className="mt-10 flex items-center justify-center gap-4">
            USER {selector.counter.Name} <Button opcion={'to'}>prueba</Button>
          </h1>
        ) : (
          <CreateUser />
        )}
      </div>
    </div>
  );
}

export default Home;
