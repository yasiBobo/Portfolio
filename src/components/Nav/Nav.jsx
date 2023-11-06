import { useState } from "react"
// ICONS
import { HiOutlineMenuAlt3 } from "react-icons/hi"
// SCROLL REVEAL
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import "./nav.css"

const Nav = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div className='nav'>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="logo">
          YB
        </div>
      </motion.div>


      <div className="icon-collapse" onClick={() => setToggle(!toggle)}>
        <HiOutlineMenuAlt3
          class="menu-icon" />
      </div>
      {/* 
      {toggle && (
        <ul class="collapse-menu">
          <div className="collapse-overlay">
            <li class="collapse-item">An item</li>
            <li class="collapse-item">A second item</li>
            <li class="collapse-item">A third item</li>
            <li class="collapse-item">A fourth item</li>
            <li class="collapse-item">And a fifth one</li>
          </div>
        </ul>

      )} */}

      {/* MENU */}
      <div className="menu">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >
          <a href='#about'
            className="menu-link">
            <span className="num">01.</span>
            About
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >
          <a href='#work' className="menu-link">
            <span className="num">03.</span>
            Work
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >
          <a href='#projects' className="menu-link">
            <span className="num">02.</span>
            Projects
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >
          <a href='#contact' className="menu-link">
            <span className="num">04.</span>
            Contact
          </a>
        </motion.div>

        {/* <motion.div
          variants={fadeIn('right', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="nav-button">
            Resume
          </div>
        </motion.div> */}

      </div>


    </div>
  )
}

export default Nav