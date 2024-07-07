export const linkVariants = {
  hidden: { y: 20, opacity: 0.06, rotateX: -90 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.12,
      type: "spring",
      stiffness: 300,
      damping: 135,
    },
  }),
};

export const footerVariants = {
  hidden: { opacity: 0, y: 20 , rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
