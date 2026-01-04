import { Routes, Route } from 'react-router-dom'
import { Header } from './cmp/Header'
import { Home } from './Pages/Home'
import { Footer } from './cmp/Footer'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

