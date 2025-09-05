export const easings: Record<
  string,
  { fn: (t: number) => number; duration: number }
> = {
  // Linear
  linear: { fn: (t) => t, duration: 0 },

  // Quad
  easeInQuad: { fn: (t) => t * t, duration: 0.8 },
  easeOutQuad: { fn: (t) => t * (2 - t), duration: 0.8 },
  easeInOutQuad: { fn: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), duration: 0.8 },
  easeOutInQuad: { fn: (t) => (t < 0.5 ? t * (2 * t) : (2 * t - 1) * (2 - (2 * t - 1))), duration: 0.8 },

  // Cubic
  easeInCubic: { fn: (t) => t * t * t, duration: 0.8 },
  easeOutCubic: { fn: (t) => 1 - Math.pow(1 - t, 3), duration: 0.8 },
  easeInOutCubic: { fn: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2), duration: 0.8 },
  easeOutInCubic: { fn: (t) => (t < 0.5 ? 1 - Math.pow(1 - 2 * t, 3) / 2 : Math.pow(2 * t - 1, 3) / 2 + 0.5), duration: 0.8 },

  // Quart
  easeInQuart: { fn: (t) => t ** 4, duration: 0.9 },
  easeOutQuart: { fn: (t) => 1 - Math.pow(1 - t, 4), duration: 0.9 },
  easeInOutQuart: { fn: (t) => (t < 0.5 ? 8 * t ** 4 : 1 - Math.pow(-2 * t + 2, 4) / 2), duration: 0.9 },
  easeOutInQuart: { fn: (t) => (t < 0.5 ? 1 - Math.pow(1 - 2 * t, 4) / 2 : Math.pow(2 * t - 1, 4) / 2 + 0.5), duration: 0.9 },

  // Quint
  easeInQuint: { fn: (t) => t ** 5, duration: 1 },
  easeOutQuint: { fn: (t) => 1 - Math.pow(1 - t, 5), duration: 1 },
  easeInOutQuint: { fn: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2), duration: 1 },
  easeOutInQuint: { fn: (t) => (t < 0.5 ? 1 - Math.pow(1 - 2 * t, 5) / 2 : Math.pow(2 * t - 1, 5) / 2 + 0.5), duration: 1 },

  // Expo
  easeInExpo: { fn: (t) => (t === 0 ? 0 : 2 ** (10 * t - 10)), duration: 1 },
  easeOutExpo: { fn: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)), duration: 1 },
  easeInOutExpo: { fn: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2, duration: 1 },
  easeOutInExpo: { fn: (t) => t < 0.5 ? 1 - 2 ** (-20 * t) / 2 : 2 ** (20 * (t - 0.5) - 10) / 2 + 0.5, duration: 1 },

  // Circ
  easeInCirc: { fn: (t) => 1 - Math.sqrt(1 - t * t), duration: 0.9 },
  easeOutCirc: { fn: (t) => Math.sqrt(1 - (t - 1) ** 2), duration: 0.9 },
  easeInOutCirc: { fn: (t) => t < 0.5 ? (1 - Math.sqrt(1 - 4 * t ** 2)) / 2 : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2, duration: 0.9 },
  easeOutInCirc: { fn: (t) => t < 0.5 ? Math.sqrt(1 - (2 * t - 1) ** 2) / 2 : 1 - Math.sqrt(1 - (2 * t - 1) ** 2) / 2, duration: 0.9 },

  // Back
  easeInBack: { fn: (t) => t * t * (2.70158 * t - 1.70158), duration: 0.9 },
  easeOutBack: { fn: (t) => 1 + (--t) * t * (2.70158 * t + 1.70158), duration: 0.9 },
  easeInOutBack: { fn: (t) => t < 0.5 ? 2 * t * t * (7.189819 * t - 2.5949095) : 1 + 2 * (--t) * t * (7.189819 * t + 2.5949095), duration: 0.9 },
  easeOutInBack: { fn: (t) => t < 0.5 ? 1 + 2 * (2 * t - 1) * (2 * t) * (7.189819 * 2 * t + 2.5949095) : 2 * ((2 * t - 1) ** 2 * (7.189819 * (2 * t - 1) - 2.5949095)), duration: 0.9 },

  // Elastic
  easeInElastic: { fn: (t) => t === 0 ? 0 : t === 1 ? 1 : (-2) ** (10 * t - 10) * Math.sin((t * 10 - 10.75) * ((2 * Math.PI) / 3)), duration: 1 },
  easeOutElastic: { fn: (t) => t === 0 ? 0 : t === 1 ? 1 : 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1, duration: 1 },
  easeInOutElastic: { fn: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(2 ** (20 * t - 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2 : (2 ** (-20 * t + 10) * Math.sin((20 * t - 11.125) * ((2 * Math.PI) / 4.5))) / 2 + 1, duration: 1 },
  easeOutInElastic: { fn: (t) => t < 0.5 ? 2 ** (-20 * t) * Math.sin((20 * t - 0.75) * ((2 * Math.PI) / 3)) / 2 : (-2) ** (20 * (t - 0.5) - 10) * Math.sin((20 * (t - 0.5) - 10.75) * ((2 * Math.PI) / 3)) / 2 + 0.5, duration: 1 },

  // Bounce
  easeInBounce: { fn: (t) => 1 - easings.easeOutBounce.fn(1 - t), duration: 0.8 },
  easeOutBounce: { fn: (t) => {
    const n1 = 7.5625, d1 = 2.75
    if (t < 1 / d1) return n1 * t * t
    else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75
    else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375
    else return n1 * (t -= 2.625 / d1) * t + 0.984375
  }, duration: 0.8 },
  easeInOutBounce: { fn: (t) => t < 0.5 ? (1 - easings.easeOutBounce.fn(1 - 2 * t)) / 2 : (1 + easings.easeOutBounce.fn(2 * t - 1)) / 2, duration: 0.8 },
  easeOutInBounce: { fn: (t) => t < 0.5 ? easings.easeOutBounce.fn(2 * t) / 2 : 0.5 + (1 - easings.easeOutBounce.fn(2 - 2 * t)) / 2, duration: 0.8 },
}
