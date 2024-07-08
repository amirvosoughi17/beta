export const linkVariants = {
  hidden: { y: -12, opacity: 0.06, rotateX: -90 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.12,
      type: "spring",
      stiffness: 1000,
      damping: 35,
    },
  }),
};

export const footerVariants = {
  hidden: { opacity: 0.5, y: -5 , rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 1.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
