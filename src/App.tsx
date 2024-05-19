// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UserNamesPage from './Pages/UserNames'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from './Pages/Welcome';
import Counter from './Pages/Counter';

function App() {


  return (
    <>
      {/* <UserNamesPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<WelcomePage />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/user' >
            <Route path='names' element={<UserNamesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
