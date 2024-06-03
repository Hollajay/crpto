

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import {Crypto} from "./Crypto/Crypto"
import {Body_container} from "./Crypto/CyptoBody/Body_container"
import {CoinRoute} from "./Crypto/Route/CoinRoute"


function App() {


  return (
<BrowserRouter>
<Crypto/>   {/* this my nav bar */}

<Routes>
<Route path='/' element={<Body_container />}/>   {/*this the path my  render my 100 coins page */}
<Route path='/coin/:id' element={<CoinRoute/>}/>      {/*this is the details page  */}
</Routes>
</BrowserRouter>

  )
}

export default App
