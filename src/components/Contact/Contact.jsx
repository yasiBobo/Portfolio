import "./contact.css"

// SCROLL REVEAL
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'



const Contact = () => {
  return (
    <motion.div 
    className='contact' 
    id="contact"
    variants={fadeIn('up', 0.3)}
    initial="hidden"
    whileInView={'show'}
    viewport={{ once: true, amount: 0.4 }}
    >
      <h5 className="contact-preTitle">
        <span className="num">04.</span> <span>What’s Next?</span> <span className='line'></span>
      </h5>
      <h1 className="contact-title">
        Get In Touch
      </h1>
      <p className="contact-text">
      Although I’m not currently looking for Full-Time job opportunities, but my inbox 
       is always open for any project you need. Whether you have a question or just want to say hi, I’ll try
       my best to get back to you ASAP!
      </p>
      <a href="https://t.me/WhOoIsYasi" className="contactBtn">Say Hello {"><"}</a>
    </motion.div>
  )
}

export default Contact
