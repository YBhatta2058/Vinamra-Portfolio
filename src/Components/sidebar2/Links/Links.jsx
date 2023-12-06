import { motion } from "framer-motion"


const variants = {
  open:{
    transition: {
      staggerChildren:0.3
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open:{
    y:0,
    opacity: 1
  },
  closed:{
    y:100,
    opacity: 0
  }
}

const Links = ({closeSidebar}) => { 
  const handleClick = ()=>{
    closeSidebar();
  }
  const items = [
    "Home","Events Managed","About me","Contact me"
  ]
  return (
    <motion.div className = "links" variants = {variants}>
      {items.map(
        (item)=>
          (
            <motion.a href={`#${item.split(' ')[0]}`} onClick = {handleClick} key = {item} whileHover = {{scale:1.05,transition:{type:'spring',stiffness:160,damping:5}}} whileTap = {{scale:0.89}} variants = {itemVariants}>{item}</motion.a>
            )
        )}
    </motion.div>
  )
}

export default Links