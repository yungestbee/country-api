import Head from './Head'
import Search from './search'
import './app.css'
import Real from './Real'


function App() {
  return (
  <>
    <div className="App">
        <Head />
        {/* <Search/> */}
        <Real className='real' />

    </div>
  </>
  );
}

export default App;
