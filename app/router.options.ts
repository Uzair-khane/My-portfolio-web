export default {
  scrollBehavior(to: any) {
    if (to?.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }

    return { top: 0, behavior: 'smooth' }
  },
}

