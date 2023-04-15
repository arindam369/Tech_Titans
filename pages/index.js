import Header from '@/components/Landing/Header'
import Features from '@/components/Landing/Features'
import About from '@/components/Landing/About'
import Footer from '@/components/Landing/Footer'

import Navbar from '@/components/Navbar/Navbar'

const index = () => {
    return (
        <section className="main-container">
            <Navbar />
            <Header />
            <Features />
            <About />
            <Footer />
        </section>
    )
}

export default index