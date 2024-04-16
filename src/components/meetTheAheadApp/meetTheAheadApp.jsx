import { motion } from "framer-motion";

const MeetTheAheadApp = () => {
  return (
    <div className="flex bg-[#fef6f1] ml-auto mr-auto w-5/6 h-[70vh] rounded-xl justify-around items-center mt-10 mb-10 ">
      <div className="flex flex-col justify-evenly h-full">
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
          <div className="text-xl">
            <p>Built out of frustation</p>
            <br />
            <h1 className="text-5xl font-medium">Meet the ahead app</h1>
          </div>
        </motion.div>
        <div className="ml-10">
          <div className="bg-white rounded-full z-50 border-8 border-[#fef6f1] w-56 h-56 flex items-center justify-center absolute">
            <motion.div
              className="absolute top-[-4vh]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, x: 0 },
                hidden: { opacity: 0, scale: 0, x: "-50%" },
              }}
            >
              <img src="./badge.png" alt="" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: [-200, -175, -150, -100, -50, 0],
                  y: [35, 20, 10, 0, -10],
                  rotate: [-60, -45, -35, -35, -35, -35, -15, 0],
                },
                hidden: { opacity: 0, scale: 0, x: "-50%" },
              }}
            >
              <img src="./newGhost.png" alt="" />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                x: [400, 350, 250, 150, 50, 0],
                y: [100, 75, 50, 25, 10, 0],
              },
              hidden: { opacity: 0, scale: 0, x: "-50%" },
            }}
          >
            <div className="bg-[#fae8dc] rounded-full z-10 w-72 h-72 relative top-[5vh] left-[-20vh] "></div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, rotate: 270 },
          hidden: { opacity: 0 },
        }}
        transition={{
          loop: "Infinity",
          duration: 2,
          ease: "linear",
        }}
      >
        <img src="./leaf.png" alt="" />
      </motion.div>
      <div className="w-96 text-xl leading-10">
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
          className="absolute top-[240vh] left-[180vh]"
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
          <p>
            a personlized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
          </p>
          <br />
          <p>
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MeetTheAheadApp;
