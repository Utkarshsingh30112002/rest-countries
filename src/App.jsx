import MainLayout from "./Layouts/MainLayout"
import HomePage from "./pages/HomePage"
import { BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
         {/* <Route path='/' element={<Hii/>}></Route>  */}
         <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
