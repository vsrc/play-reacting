// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UserNamesPage from './Pages/UserNames'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from './Pages/Welcome';

function App() {


  return (
    <>
      {/* <UserNamesPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/user-names' element={<UserNamesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
