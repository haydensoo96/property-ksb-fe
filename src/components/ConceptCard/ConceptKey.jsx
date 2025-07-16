import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div
      style={{
        backgroundColor: "#576850",
      }}
    >
      <div className="custom-image-container">
        <motion.h1
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <div
            className="custom-image-container"
            style={{ width: "80%", justifySelf: "center" }}
          >
            <img src="./ksb_assets/ksb_concept.png" alt="" />
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export default ConceptKey;
