import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "./Card";

const bgColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
];

const data = [
  {
    id: 1,
    title: "🤨",
    heading: "You argue with a colleague",
    content:
      "You get angry and defencive, instead of staying open and working towards common ground.",
    bgColor: bgColors[0],
  },
  {
    id: 2,
    title: "🤨",
    heading: "you get promotion at work",
    content:
      "You question yourself and wonder when they'll realise you're an unqualified imposter, instead of trusting yourself & your abilities",
    bgColor: bgColors[1],
  },
  {
    id: 3,
    title: "🤨",
    heading: "You attend a class reunion",
    content:
      "You compare yourself with your peers' acheivements, instead of making you self judgement more independent of others.",
    bgColor: bgColors[2],
    rotate: true,
  },
  {
    id: 4,
    title: "🤨",
    heading: "You are at a lively dinner party",
    content:
      "You play on your phone, instead of confidently approaching strangersand striking up a chat.",
    bgColor: bgColors[3],
  },
  {
    id: 5,
    title: "🤨",
    heading: "You hit deadend in a negotiation ",
    content:
      "You get nervous, frazzled and give in, instead of staying calm and focused on your goals.",
    bgColor: bgColors[4],
  },
  {
    id: 6,
    title: "🤨",
    heading: "You hit deadend in a negotiation ",
    content:
      "You get nervous, frazzled and give in, instead of staying calm and focused on your goals.",
    bgColor: bgColors[4],
  },
];

const Cards = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
        <h1 className="font-medium text-5xl ml-32">
          Does this sound familiar...
        </h1>
      </motion.div>
      <div className="h-[60vh] items-center gap-20 flex w-[100%] overflow-x-hidden ">
        {data.map((card) => (
          <motion.div
            key={card.id}
            style={{ transform: `translateX(-${scrollY * 0.25}px)` }}
          >
            <Card data={card} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Cards;
