import { motion } from "framer-motion";

const BallCanvas = ({ icon }) => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }} className="bg-white rounded-full p-2 flex justify-center items-center" >
        <img src={icon} className="w-full h-full object-contain" />
      </motion.div>
    </>
  )
}

export default BallCanvas