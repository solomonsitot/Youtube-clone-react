import './bootstrap.css'
import './App.css'
import SideNav from './components/Nav/SideNav/SideNav'
import TopNav from './components/Nav/TopNav/TopNav'
import Countries from './components/Videos/Countries/Countries'
import Cards from './components/Videos/Cards/Cards'


function App() {

  return (
    <>
      <TopNav />
      <SideNav/>
      <Countries />
      <Cards/>


    </>
  )
}

export default App
