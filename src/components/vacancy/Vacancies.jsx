/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import VacancyCard from "./VacancyCard";
import { Modal, Box, TextField, Button } from "@mui/material";

const vacancies = [
  {
    id: 1,
    jobTitle: "Senior Full Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 65-85, 1.5%-2.5% Equity",
  },
  {
    id: 2,
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 3.5%-7.5% Equity",
  },
  {
    id: 3,
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 8.5%-2.5% Equity",
  },
];

const Vacancies = ({ isAdmin }) => {
  const [data, setData] = useState(vacancies);
  const [editId, setEditId] = useState(null);

  const deleteVac = (id) => {
    setData(data.filter((vac) => vac.id !== id));
  };
  const [newData, setNewData] = useState({
    id: data.length + 1,
    jobTitle: "",
    position: "",
    location: "",
    pay: "",
  });
  const [model, setModel] = useState(false);

  const addVac = () => {
    setData([...data, newData]);
    setModel(false);
    setNewData({
      id: data.length + 1,
      jobTitle: "",
      position: "",
      location: "",
      pay: "",
    });
  };

  const editVac = (id) => {
    const dataToEdit = data.find((vac) => vac.id === id);
    setNewData(dataToEdit);
    setEditId(id);
    setModel(true);
  };

  const handleSave = () => {
    setData(data.map((vac) => (vac.id === editId ? newData : vac)));
    setModel(false);
    setEditId(null);
    setNewData({
      id: data.length + 1,
      jobTitle: "",
      position: "",
      location: "",
      pay: "",
    });
  };

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <>
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
          className="flex gap-8 items-center"
        >
          <h1 className="text-5xl font-bold">Open Vacancies</h1>
          <button
            onClick={() => {
              setModel(true);
            }}
            className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
          >
            Add
          </button>
        </motion.div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {data &&
            data.map((data, index) => {
              return (
                <VacancyCard
                  key={index}
                  data={data}
                  index={index}
                  deleteVac={deleteVac}
                  editVac={editVac}
                  isAdmin={isAdmin}
                />
              );
            })}
        </div>
      </div>
      <Modal
        open={model}
        onClose={() => setModel(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70vh",
            height: "60vh",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            bgcolor: "white",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <TextField
            label="jobTitle"
            margin="normal"
            name="jobTitle"
            value={newData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
          />
          <TextField
            label="position"
            margin="normal"
            name="position"
            value={newData.position}
            onChange={handleChange}
            placeholder="Enter Position"
          />
          <TextField
            label="location"
            margin="normal"
            name="location"
            value={newData.location}
            onChange={handleChange}
            placeholder="Enter Location"
          />
          <TextField
            label="pay"
            margin="normal"
            name="pay"
            value={newData.pay}
            onChange={handleChange}
            placeholder="Enter Pay"
          />
          <Button variant="contained" onClick={editId ? handleSave : addVac}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Vacancies;
