import React from 'react'
import Hooks from './components/Hooks'
import { Routes, Route } from 'react-router-dom'
import Hook1 from './components/Hook1'
import Hook2 from './components/Hook2'
import Hook3 from './components/Hook3'
import Hook4 from './components/Hook4'
import Hook5 from './components/Hook5'
import Hook6 from './components/Hook6'
import Hook7 from './components/Hook7'
import Hook8 from './components/Hook8'
import Hook9 from './components/Hook9'
import Hook10 from './components/Hook10'
import Hook11 from './components/Hook11'
import Child from './components/Child'

function App() {
return (
  
    <>
      <Hooks/>
      <Routes>
        <Route path="Hook1" element={<Hook1/>}/>
        <Route path="Hook2" element={<Hook2/>}/>
        <Route path="Hook3" element={<Hook3/>}/>
        <Route path="Hook4" element={<Hook4/>}/>
        <Route path="Hook5" element={<Hook5/>}/>
        <Route path="Hook6" element={<Hook6/>}/>
        <Route path="Hook7" element={<Hook7/>}/>
        <Route path="Hook8" element={<Hook8/>}/>
        <Route path="Hook9" element={<Hook9/>}/>
        <Route path="Hook10" element={<Hook10/>}/>
        <Route path="Hook11" element={<Hook11/>}/>
        <Route path="Child" element={<Child/>}/>
      </Routes>
    </>
  )
  
}

export default App;
