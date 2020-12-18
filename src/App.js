import React from 'react'
import './App.css';
// import ClassCounter from './components/ClassCounter'
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo'
// import Datafetching from './components/Datafetching'
import ComponentC from './components/ComponentC'

export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <Datafetching/> */}
      <userContext.Provider value={'vishwas'}>
        <channelContext.Provider value={'codevolution'}>
            <ComponentC/>
        </channelContext.Provider>
        </userContext.Provider>
    </div>
  );
}

export default App;
