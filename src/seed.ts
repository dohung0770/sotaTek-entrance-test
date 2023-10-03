import { SceneType } from "./types";

export function getScenes(): Record<number, SceneType> {
  return {
    1: {
      id: 1,
      backgroundImage: "/assets/location1.jpg",
      hitzones: [
        {
          id: 2,
          x: 1 / 4.6,
          y: 1 / 3
        }
      ]
    },
    2: {
      id: 2,
      backgroundImage: "/assets/location2.jpg",
      hitzones: [
        {
          id: 3,
          x: 1 / 4,
          y: 1 / 3
        },
        {
          id: 1,
          x: 2 / 3,
          y: 2 / 3
        }
      ]
    },
    3: {
      id: 3,
      backgroundImage: "/assets/location3.jpg",
      hitzones: [
        {
          id: 4,
          x: 1 / 8,
          y: 1 / 3
        },
        {
          id: 2,
          x: 2.9 / 4,
          y: 2 / 3
        }
      ]
    },
    4: {
      id: 4,
      backgroundImage: "/assets/location4.jpg",
      hitzones: [
        {
          id: 5,
          x: 1 / 4.1,
          y: 1 / 3
        },
        {
          id: 3,
          x: 3.5 / 5,
          y: 2 / 3
        }
      ]
    },
    5: {
      id: 5,
      backgroundImage: "/assets/location5.jpg",
      hitzones: [
        {
          id: 6,
          x: 1 / 6,
          y: 1 / 3
        },
        {
          id: 4,
          x: 2.1 /3,
          y: 2 / 3
        }
      ]
    },
    6: {
      id: 6,
      backgroundImage: "/assets/location6.jpg",
      hitzones: [
        {
          id: 5,
          x: 1 / 7.2,
          y: 2 / 3
        },
        {
          id: 7,
          x: 1 / 2.3,
          y: 1 / 2
        },
        {
          id: 8,
          x: (4.5) / 6,
          y: 1 / 3
        }
      ]
    },
    7: {
      id: 7,
      backgroundImage: "/assets/location7.jpg",
      hitzones: [
        {
          id: 8,
          x: 1 / 5.5,
          y: 1 / 3
        },
        {
          id: 6,
          x: 4 / 5,
          y: 2 / 3
        }
      ]
    },
    8: {
      id: 8,
      backgroundImage: "/assets/location8.jpg",
      hitzones: [
        {
          id: 7,
          x: 1 / 4,
          y: 2 / 3
        },
        {
          id: 9,
          x: 4.3 / 7,
          y: 1 / 2
        },
        {
          id: 10,
          x: 3.2 / 4,
          y: 1 / 3
        }
      ]
    },
    9: {
      id: 9,
      backgroundImage: "/assets/location9.jpg",
      hitzones: [
        {
          id: 10,
          x: 1 / 10,
          y: 1 / 3
        },
        {
          id: 8,
          x: 1 / 2.5,
          y: 1 / 3
        }
      ]
    },
    10: {
      id: 10,
      backgroundImage: "/assets/location10.jpg",
      hitzones: [
        {
          id: 8,
          x: 1 / 3.2,
          y: 1 / 3
        },
        {
          id: 9,
          x: 1 / 2.1,
          y: 1 / 3
        }
      ]
    }
  };
}
