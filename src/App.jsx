import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from './store/slices/counter';

function App() {

const {counter} = useSelector(state=>state.counter);
const  dispatch=useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button type='button' onClick={()=> dispatch(increment())}> count is: {counter}</button>
      </div>
    </div>
  )
}

export default App
