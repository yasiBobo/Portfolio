import "./header.css"


// SCROLL REVEAL
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'


const Header = () => {

  return (
    <div className='header' id="header">
      <motion.h5
        className="preTitle"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        Hi, my name is
      </motion.h5>
      <motion.h1
        className="name"
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        .YASI BOBO.
      </motion.h1>
      <motion.h1
        className="title"
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        I build things for the web.
      </motion.h1>
      <motion.p
        className="description"
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        I’m a mathematic student specializing in building (and occasionally  designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered projects on <span className="aqua">My Own</span> .
      </motion.p>
      <motion.a
        href="https://codepen.io/its_yasi"
        target="__blank"
        className="header-button"
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        Check out my resume!
      </motion.a>
    </div>
  )
}

export default Header