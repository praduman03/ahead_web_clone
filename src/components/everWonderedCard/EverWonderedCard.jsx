import { motion } from "framer-motion";
const EverWonderedCard = () => {
  return (
    <div className="flex flex-col gap-24 bg-[#edf8fe] ml-auto mr-auto w-5/6 h-[90vh] rounded-xl justify-center items-center mt-10 mb-10 ">
      <div className="text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <p className="text-xl">
          Let your friends, family, and co-worker (anonymously) rate your social
          skills
        </p>
        <br />
        <h1 className="text-6xl font-medium">
          Ever wondered what others think of you?
        </h1>
        </motion.div>
      </div>
      <div
        style={{
          border: "1px dashed #e7c47e",
          width: "55%",
          position: "absolute",
          top: "464vh",
        }}
      ></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <div className="flex w-full justify-around items-center text-center gap-56">
          <div className="w-72 h-24 flex flex-col justify-center items-center z-20">
            <img src="./badge.png" alt="" />
            <p>
              Answer questions on your social skills and get feedbacl from
              others
            </p>
          </div>
          <div className="w-72 h-24 flex flex-col justify-center items-center z-20">
            <img src="./badge.png" alt="" />
            <p>Let others anonymously answer the same questions about you</p>
          </div>
          <div className="w-72 h-24 flex flex-col justify-center items-center z-20">
            <img src="./badge.png" alt="" />
            <p>
              Find out where you and others see things the same way - and where
              not!
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <div className="flex justify-center">
          <div className="mt-16 shadow bg-white rounded-xl w-[50rem] p-6 py-24 relative">
            <div className="flex justify-between ">
              <div className="h-4 w-4 rounded-full bg-violet-600 z-10 relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, scale: 0.5 },
                  }}
                >
                  <div className="absolute text-white p-2 bg-violet-600 rounded top-[-3rem] left-[-3rem]">
                    You
                  </div>
                </motion.div>
              </div>
              <div className="h-4 w-4 rounded-full bg-blue-400 z-10 relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0.5, scale: 0.5 },
                  }}
                >
                  <div className="absolute whitespace-nowrap text-white p-3 bg-blue-400 rounded top-[2rem] left-[82%]">
                    Anonymous 1
                  </div>
                </motion.div>
              </div>
              <div className="h-4 w-4 rounded-full bg-orange-400 z-10 relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0.5, scale: 0.5 },
                  }}
                >
                  <div className="absolute  whitespace-nowrap  text-white p-2 bg-orange-400 rounded top-[-3rem] left-[0.5rem]">
                    Anonymous 2
                  </div>
                </motion.div>
              </div>
              <div className="h-4 w-4 rounded-full bg-green-400 z-10 relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0.5, scale: 0.5 },
                  }}
                >
                  <div className="absolute  whitespace-nowrap   text-white p-3 bg-green-400 rounded  top-[2rem] left-[82%]">
                    Anonymous 3
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="border-t border-yellow-700 h-1 absolute top-[50%]  w-[745px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EverWonderedCard;
