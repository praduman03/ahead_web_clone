import { motion } from "framer-motion";
const StartTest = () => {
  return (
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
      <div className="flex flex-col text-center text-xl items-center justify-center gap-4 mt-20 mb-20">
        <p>We take privacy seriously</p>
        <h1>Before you get started</h1>
        <p>
          &quot;We won&apos;t share your answers with anyone and won&apos;t ever
          tell you which friend said about you&quot;
        </p>
        <button className="rounded-3xl bg-black text-white w-32 h-12 p-1">
          {" "}
          Start a test{" "}
        </button>
        <p className="text-sm">takes only 5 minutes</p>
      </div>
    </motion.div>
  );
};

export default StartTest;
