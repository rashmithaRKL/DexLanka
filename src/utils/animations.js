export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      z: direction === 'forward' ? 80 : direction === 'backward' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      z: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const rotate3d = (delay) => {
  return {
    hidden: {
      rotateX: 60,
      rotateY: 30,
      rotateZ: -45,
      opacity: 0,
    },
    show: {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay,
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };
};

export const flip = (delay) => {
  return {
    hidden: {
      rotateY: 180,
      opacity: 0,
    },
    show: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay,
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };
};

export const float = {
  hidden: {
    y: 0,
  },
  show: {
    y: [-10, 10],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const pulse = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: [1, 1.05],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

export const scaleIn = (delay) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        delay,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
};
