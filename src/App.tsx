import './App.less';
import routes from '@/routes';
import {useRoutes} from 'react-router-dom';
function App() {
  const elements=useRoutes(routes);
  return (
    <div className="app">
      {elements}
    </div>
  );
}

export default App;
