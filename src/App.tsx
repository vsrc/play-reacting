// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserNamesPage from './Pages/UserNames'
import WelcomePage from './Pages/Welcome';
import Counter from './Pages/Counter';
import AllPostsPage from './Pages/Posts/AllPosts';
import OnePostPage from './Pages/Posts/OnePost';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      {/* <UserNamesPage /> */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<WelcomePage />} />
            <Route path='/posts'>
              <Route path='' element={<AllPostsPage />} />
              <Route path=':id' element={<OnePostPage />} />
            </Route>
            <Route path='/counter' element={<Counter />} />
            <Route path='/user' >
              <Route path='names' element={<UserNamesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
