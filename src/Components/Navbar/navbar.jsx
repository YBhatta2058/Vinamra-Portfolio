import Sidebar from '../sidebar2/sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className = "navbar">
      <Sidebar />
        <div className="wrapper">
            <motion.div
                className = "logo"
                initial = {{opacity: 0,scale: .5}}
                animate = {{opacity: 1,scale:1.3}}
                transition = {{duration: .5}}            
            >
              Vinamra
            </motion.div>
            <div className="social">
                <a href="https://www.instagram.com/vin._.tmg/" target='_blank'><img src="/instagram.png" alt="" /></a>
                <a href="https://www.youtube.com/@TheCarMeet" target = '_blank'><img src="/youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/vinamra-lama-163440230/" target = "_blank"><img src="/linkedin.png" alt="" /></a>

            </div>
        </div>
    </div>
  )
}

export default Navbar