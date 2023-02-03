import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
// import { loadFull } from "tsparticles-Full"
import { useCallback, useMemo } from "react"

export const ParticlesBackground = () => {
    const options = useMemo(()=>{
        return {
            interactivity: {
                detectsOn: "window",
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax: {
                      enable: false,
                      force: 1,
                      smooth: 2
                    }
                  },
                  resize: {
                    delay: 2,
                    enable: true
                  }
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1
                  },
                  bounce: {
                    distance: 200
                  },
                  bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      mix: false,
                      selectors: []
                    }
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5
                    },
                    radius: 60
                  },
                  grab: {
                    distance: 100,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1
                    }
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4
                  },
                  remove: {
                    quantity: 2
                  },
                  repulse: {
                    distance: 150,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 100,
                    easing: "ease-out-quad",
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 50,
                      easing: "ease-out-quad",
                      selectors: []
                    }
                  },
                  slow: {
                    factor: 3,
                    radius: 200
                  },
                  trail: {
                    delay: 1,
                    pauseOnStop: false,
                    quantity: 1
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: "#ffffff"
                        },
                        stop: {
                          value: "#000000"
                        }
                      },
                      radius: 1000
                    },
                    shadow: {
                      color: {
                        value: "#000000"
                      },
                      length: 2000
                    }
                  }
                }
              }
            ,
            background: {
                color: {
                  value: "#000"
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 1
              }
            ,
            fullScreen:{
                enable: true,
                zIndex: -1,
            }
            ,
            particles: {
                color: {
                    value: "#ffffff",
                }
                ,
                number: {
                    limit: 300,
                    value: 110
                  }
                ,
                links: {
                    blink: false,
                    color: {
                      value: "#ffffff"
                    },
                    consent: true,
                    distance: 300,
                    enable: true,
                    frequency: 0.73,
                    opacity: 1,
                    shadow: {
                      blur: 5,
                      color: {
                        value: "#000"
                      },
                      enable: false
                    },
                    triangles: {
                      enable: false,
                      frequency: 3
                    },
                    width: 2,
                    warp: false
                  },
                move: {
                    enable: true,
                },
                detectRetina: true,
            }
        }
    }, []);

    const particlesInit = useCallback((engine)=> {
        loadSlim(engine);
    }, [])

    return(
            <Particles canvasClassName="particles" init={particlesInit} options={options} />
    )
}

