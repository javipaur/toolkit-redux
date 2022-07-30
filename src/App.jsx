import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, incrementBy2 } from './store/slices/counter';

function App() {

const {counter} = useSelector(state=>state.counter);
const  dispatch=useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>count is: {counter}</p>
        </a>
      </div>
      <div className="card">
        <button type='button' onClick={()=> dispatch(increment())}> Increment </button>
        <button type='button' onClick={()=> dispatch(decrement())}> Dencrement</button>
        <button type='button' onClick={()=> dispatch(incrementBy2())}> Increment By 2 </button>
    
      </div>
    
    </div>
  )
}

export default App
