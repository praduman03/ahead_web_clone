import { motion } from "framer-motion";
import VacancyCard from "./VacancyCard";

const vacancies = [
  {
    jobTitle: "Senior Full Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 65-85, 1.5%-2.5% Equity",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 3.5%-7.5% Equity",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 8.5%-2.5% Equity",
  },
];

const Vacancies = () => {
  return (
    <div className="mt-10 mb-60 w-5/6 flex flex-col ml-auto mr-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <h1 className="text-5xl font-bold">Open Vacancies</h1>
      </motion.div>
      <div className="mt-12 flex justify-between gap-8">
        {vacancies.map((data, index) => {
          return <VacancyCard key={index} data={data} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Vacancies;
