import MainLayout from "./Layouts/MainLayout"
import DetailPage from "./pages/DetailPage"
import HomePage from "./pages/HomePage"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
         {/* <Route path='/' element={<Hii/>}></Route>  */}
         <Route path='/' element={<HomePage/>}/>
         <Route path='/detail/:name' element={<DetailPage/>}/>
         <Route path='*' element={<NotFoundPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
