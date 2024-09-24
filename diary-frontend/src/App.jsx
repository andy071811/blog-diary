import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import AppLayout from "./pages/AppLayout"
import MyPosts from "./pages/MyPosts"
import MyPhotos from "./pages/MyPhotos"
import Settings from "./pages/Settings"
import LogIn from "./pages/LogIn"
import { GlobalStyles } from "./styles/globalStyles"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to='/my-posts' replace />} />
            <Route path="my-posts" element={<MyPosts />} />
            <Route path="my-photos" element={<MyPhotos />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          style: {
            textAlign: 'center'
          },
          success: {
            style: {
              background: 'green',
              color: 'white'
            }
          },
          error: {
            style: {
              background: 'red'
            },
            duration: 2500
          }
        }}/>
    </>
  )
}

export default App

// npm i moment - to format date and time.
