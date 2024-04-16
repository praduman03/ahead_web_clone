import { motion } from "framer-motion";

const MasterLife = () => {
  return (
    <div className="flex bg-[#EFEAFE] ml-auto mr-auto w-5/6 h-[70vh] rounded-xl justify-around items-center mt-10 mb-10 ">
      <div className="w-3/6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, rotate: 360 },
            hidden: { opacity: 0 },
          }}
          transition={{
            loop: "Infinity",
            duration: 2,
            ease: "linear",
          }}
          className="absolute top-[30vh] w-14"
        >
          <img src="./flower.png" alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <p className="text-xl font-medium">Ahead App</p>
          <br />
          <h1 className="text-6xl font-medium">
            Master your life by mastering emotions
          </h1>
        </motion.div>
      </div>
      <div>
        <div className="">
          <img
            className="w-32 absolute right-[59vh] top-[42vh]"
            src="./phone.png"
            alt=""
          />
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, rotate: 360 },
            }}
            transition={{
              type: "",
              duration: 2,
              ease: "easeInOut",
            }}
            style={{ border: "3px solid white ", borderStyle: "dashed" }}
            className=" absolute top-[35vh] left-[120vh] rounded-full h-96 w-96  border-dashed border-white"
          ></motion.div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ rotate: -360 }}
            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
            style={{ top: "340px", right: "465px" }}
            className="absolute h-16 w-12"
          >
            <img src="/red-ghost.png" alt="" />
          </motion.div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ rotate: -360 }}
            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
            style={{ top: "640px", right: "465px" }}
            className="absolute h-16 w-12"
          >
            <img src="/red-ghost.png" alt="" />
          </motion.div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ rotate: -360 }}
            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
            style={{ top: "450px", right: "765px" }}
            className="absolute h-16 w-12"
          >
            <img src="/red-ghost.png" alt="" />
          </motion.div>
        </div>
      </div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        animate={{ x: -150 }}
        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
        style={{ bottom: "100px", left: "950px" }}
        className="absolute bg-orange-300 rounded-full h-12 w-12"
      ></motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        animate={{ y: -150 }}
        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
        style={{ left: "200px", top: "80%" }}
        className="absolute bg-blue-300 rounded-full h-12 w-12"
      ></motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        animate={{ x: -150 }}
        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
        style={{ right: "150px", top: "200px" }}
        className="absolute bg-yellow-300 rounded-full h-12 w-12"
      ></motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
        style={{ right: "900px", top: "300px" }}
        className="absolute  h-12 w-12"
      >
        <img src="/leaf.png" alt="" />
      </motion.div>
    </div>
  );
};

export default MasterLife;
