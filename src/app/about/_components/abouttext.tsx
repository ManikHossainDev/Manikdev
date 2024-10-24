
'use client'; // Ensure this is a client component for Next.js 13

import { motion } from "framer-motion";

const text =
  "Currently, I'm studying Bachelor of Science, 1st Year Computer Science and Engineering Department. I enjoy learning new skills and exploring new challenges in the field of web development. I'm always open to new opportunities and collaborations, driven by innovation and continuous improvement in tech.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster stagger to keep flow
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // No rotation for smoothness
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4, // Slightly longer for a smoother effect
      ease: "easeInOut", // Use smooth easing
    },
  },
};

const MyComponent = () => {
  return (
    <motion.div
      className="text-2xl text-gray-600"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="mt-2 md:text-lg font-lato">
        Hi, I’m Manik Hossain, a MERN stack developer with a passion for creating
        dynamic and user-friendly web applications, always learning.
      </p>

      {/* Split text by words */}
      <p className="mt-2 md:text-lg font-lato">
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-3" // Add space between words
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default MyComponent;

