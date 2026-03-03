import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WaitlistForm from './components/WaitlistForm'
import Community from './components/Community'
import Footer from './components/Footer'
import FloatingBubbles from './components/FloatingBubbles'

export default function App() {
    return (
        <>
            <FloatingBubbles />
            <Navbar />
            <Hero />
            <Features />
            <Community />
            <WaitlistForm />
            <Footer />
        </>
    )
}
