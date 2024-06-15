export const staggerContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const fadeIn = {
  initial: {
    opacity: 0,
    transform: 'translateX(100px)',
    filter: 'blur(30px)',
  },
  animate: {
    opacity: 1,
    transform: 'translateX(0px)',
    filter: 'blur(0px)',
  },
}

export const mappedVariants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100px)',
    filter: 'blur(30px)',
  },
  animate: (custom: number) => ({
    opacity: 1,
    transform: 'translateX(0px)',
    filter: 'blur(0px)',
    transition: {
      delay: 0.05 * custom,
    },
  }),
}
