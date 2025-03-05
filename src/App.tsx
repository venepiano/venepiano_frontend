import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/thema/Layout'
import HomePage from './pages/home/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* 다른 페이지 라우트는 여기에 추가 */}
          <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
