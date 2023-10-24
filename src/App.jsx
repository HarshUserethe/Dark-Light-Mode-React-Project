import './App.css';
import Cards from './Components/Card';
import DataContextProvider from './Contexts/DataContextProvider';
 

const App = () => {
  return (
    <div className="main">
     <DataContextProvider>
      <Cards />
      </DataContextProvider>
    
    </div>
  )
}

export default App