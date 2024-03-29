const pageVariant = {
  initial: {x: "100vw"},
  animate: {x: 0, transition: {type: "spring", stiffness: 120}},
  exit: {
    x: "-100vw",
    transition: {type: "spring", stiffness: 120, duration: 0},
  },
};

const listVariant = {
  hover: {scale: 1.3, originX: 0, transition: {type: "spring", stiffness: 300}},
};

const mainVariant = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {delay: 1, duration: 1.4}},
};

const orderVariant = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {delay: 0.2, duration: 0.5}},
};

const primaryBtnVariant = {
  hover: {
    scale: [1.1, 1, 1.1],
    boxShadow: "0 0 8px rgb(255,255,255)",
    textShadow: "0 0 8px rgb(255,255,255)",
    transition: {scale: {repeat: Infinity, duration: 0.7}, type: "spring"},
  },
  tap: {scale: 0.9},
};

const secondaryBtnVariant = {
  initial: {x: "-100vw"},
  animate: {x: 0, transition: {type: "spring", stiffness: 120}},
  hover: {
    scale: [1.1, 1, 1.1],
    boxShadow: "0 0 8px rgb(255,255,255)",
    textShadow: "0 0 8px rgb(255,255,255)",
    transition: {scale: {repeat: Infinity, duration: 0.7}, type: "spring"},
  },
  tap: {scale: 0.9},
};

const modalVariant = {
  initial: {y: "-100vw"},
  animate: {
    y: "0",
    transition: {type: "spring", stiffness: 100, duration: 0.4},
  },
  exit: {y: "100vw"},
};

const backDropVariant = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0, transition: {when: "afterChildren"}},
};

export {
  pageVariant,
  listVariant,
  mainVariant,
  orderVariant,
  primaryBtnVariant,
  secondaryBtnVariant,
  modalVariant,
  backDropVariant,
};
