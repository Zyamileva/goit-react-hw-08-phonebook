import { useDispatch } from 'react-redux';
import { current } from './redux/auth/auth-operations';

import AppRoutes from './AppRoutes';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  });

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
