import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from './pages/PostsList';

function App() {
  return (
    <div className="App">
      <div className='app-title'> 
        <h1>Prueba Técnica</h1>
      </div>

      <PostsList/>
    </div>
  );
}

export default App;
