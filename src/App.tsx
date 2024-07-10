
import './App.css'
import Calender from './components/Calender'
import Clients from './components/Clients'
import Community from './components/Community'
import CommunityUpdates from './components/CommunityUpdates'
import Customers from './components/Customers'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Unlock from './components/Unlock'
import UpperFooter from './components/UpperFooter'
 import Achievements from './components/Achievements'

function App() {
  return (
    <div  className=' overflow-hidden' >
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <CommunityUpdates />
      <UpperFooter />
      <Footer />
    </div>
  )
}

export default App
