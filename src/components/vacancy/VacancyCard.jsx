/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const VacancyCard = ({ data, index, isAdmin, deleteVac, editVac }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const deleteData = () => {
    deleteVac(data.id);
  };

  const editData = () => {
    editVac(data.id);
  }
  return (
    <>
      <motion.div
        initial={{ height: 190 }}
        whileHover={{ height: 270 }}
        key={index}
        onHoverStart={() => setButtonVisible(true)}
        onHoverEnd={() => setButtonVisible(false)}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] hover:cursor-pointer w-[50vh]"
      >
        <div className="rounded-2xl  p-6 px-12">
          <h2 className="text-xl font-bold">{data.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li>{data.position}</li>
            <br />
            <li>{data.location}</li>
            <br />
            <li>{data.pay}</li>
          </ul>
        </div>
        {isButtonVisible && (
          <>
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
          >
            Click Me
          </motion.button>
            {isAdmin && (
              <>
                <button className="mx-10 cursor-pointer text-white bg-red-600 rounded-full px-3 py-2 mt-4" onClick={deleteData}>Delete</button>
                <button className="mx-10 cursor-pointer text-white bg-green-600 rounded-full px-3 py-2 mt-4" onClick={editData}>Edit</button>
              </>
            )}
            </>
        )}
      </motion.div>
    </>
  );
};

export default VacancyCard;
