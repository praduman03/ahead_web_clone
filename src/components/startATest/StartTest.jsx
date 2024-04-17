import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartTest = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const questions = [
    "What is the capital of France?",
    "What is 8 - 4 ?",
    "What is the chemical symbol for water?",
  ];

  const options = [
    ["Paris", "London", "Berlin"],
    ["2", "13", "4"],
    ["H2O", "CO2", "O2"],
  ];

  const correctAnswers = ["Paris", "4", "H2O"];

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
      console.log(score);
      console.log(answers);
      localStorage.setItem("score", score);
      setScore(0);
      setOpen(false);
      navigate("/result");
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [current]: answer });
    setScore(
      (prevScore) => prevScore + (answer === correctAnswers[current] ? 1 : 0)
    );
  };

  return (
    <>
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
            &quot;We won&apos;t share your answers with anyone and won&apos;t
            ever tell you which friend said about you&quot;
          </p>
          <button
            className="rounded-3xl bg-black text-white w-32 h-12 p-1"
            onClick={() => setOpen(true)}
          >
            {" "}
            Start a test{" "}
          </button>
          <p className="text-sm">takes only 5 minutes</p>
        </div>
      </motion.div>
      <Modal
        open={open}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "70vh",
            height: "50vh",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5vh",
            bgcolor: "white",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <Typography textAlign={"center"} variant="h4">
            {questions[current]}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              padding: "5px",
            }}
          >
            {options[current].map((option, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!answers[current]}
          >
            Next
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default StartTest;
