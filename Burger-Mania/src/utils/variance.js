const pageVariant = {
  initial: {x: "100vw"},
  animate: {x: 0},
  transition: {type: "spring", stiffness: 120},
};

const listVariant = {
  whileHover: {scale: 1.3, originX: 0},
  transition: {type: "spring", stiffness: 300},
};

const mainVariant = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  transition: {delay: 1, duration: 0.5},
};

const orderVariant = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  transition: {delay: 0.2, duration: 0.5},
};

export {pageVariant, listVariant, mainVariant,orderVariant};
