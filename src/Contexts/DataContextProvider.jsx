import { useState } from "react"
import DataContext from "./DataContext"
import  PropTypes  from "prop-types";

const DataContextProvider = ({children}) => {
    const [data, setData] = useState(true);
  return (
     <DataContext.Provider value={{data, setData}}>
       {children}
     </DataContext.Provider>
  )
}

DataContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default DataContextProvider