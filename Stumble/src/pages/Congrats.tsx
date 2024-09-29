import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

interface CongratsProps {
  score: number;
}

const Congrats: React.FC<CongratsProps> = ({ score }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Update window dimensions for confetti sizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Confetti component */}
      <Confetti
        width={windowWidth - 10}
        height={windowHeight - 10}
        numberOfPieces={500}
      />

      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ rotate: [0, 180, 360], scale: [0, 1.2, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 1,
        }}
        style={styles.animatedBox}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
          transition={{ delay: 0.5, duration: 1 }}
          style={styles.congratsText}
        >
          Congratulations!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={styles.scoreText}
        >
          Your Score: {score}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={styles.animatedText}
      >
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 rounded-lg bg-green-500 px-6 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-green-700"
        >
          Return Home
        </button>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0d0d0d", // Dark background
    overflow: "hidden",
  },
  animatedBox: {
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Dark semi-transparent background
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 0px 2px #42f551", // Soft neon cyan glow
    textAlign: "center" as "center",
    transformOrigin: "center",
    zIndex: 2,
    border: "1px solid #42f551", // Neon cyan border
  },
  congratsText: {
    fontSize: "48px",
    fontWeight: "bold" as "bold",
    color: "#42f551", // Neon cyan color
    margin: 0,
    // Neon text glow
  },
  scoreText: {
    fontSize: "24px",
    fontWeight: "500" as "500",
    color: "#e6e6e6", // Light gray for contrast
    // Subtle glow effect for readability
  },
  animatedText: {
    marginTop: "40px",
    fontSize: "20px",
    color: "#a6a6a6", // Slightly muted gray for a tech feel
    zIndex: 1,
    textShadow: "0 0 5px #00ffcc", // Cyan glow for the animated text
  },
};

export default Congrats;
