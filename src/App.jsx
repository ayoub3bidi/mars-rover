import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Navigate } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello this is mars rover</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
