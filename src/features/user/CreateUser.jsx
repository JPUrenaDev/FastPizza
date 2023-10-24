import { useState } from 'react';
import { Button } from '../../ui/Button';
import { actualizarNombre } from '../../store/UserSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const selector = useSelector((state) => state);

  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(actualizarNombre(username));
    navigate('/menu');
  }

  return (
    <form
      className="my-10 text-center text-sm sm:text-base"
      onSubmit={handleSubmit}
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 h-10 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
