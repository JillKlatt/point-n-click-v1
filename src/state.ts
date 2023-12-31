import create from "zustand";

interface State {
  //show text to type
  text: string[];
  setText: (text: string[]) => void;

  sound: string;
  playSound: (sound: string) => void;

  // button for below text
  button: IButton | undefined;
  setButton: (button: IButton | undefined) => void;
  hideButton: () => void;

  desk: { power: boolean; up: boolean };
  powerOnDesk: () => void;
  moveDeskDown: () => void;
  moveDeskUp: () => void;

  //3d printer
  printer: { power: boolean; printed: string[] };
  powerOnPrinter: () => void;
  printObject: (object: string) => void;

  // 3d printer screen
  screen: {
    visible: boolean;
    handleLoaded: boolean;
    keyInserted: boolean;
    keyLoaded: boolean;
  };
  showScreen: () => void;
  hideScreen: () => void;

  computerScreen: {
    visible: boolean;
  };

  showComputerScreen: () => void;
  hideComputerScreen: () => void;

  notebook: {
    visible: boolean;
  };
  showNotebook: () => void;
  hideNotebook: () => void;

  // inventory system
  inventory: {
    items: string[];
    open: boolean;
  };
  openInventory: () => void;
  closeInventory: () => void;
  addToInventory: (item: string) => void;

  //puzzle box
  puzzle: {
    inInventory: boolean;
    visible: boolean;
  };
  collectPuzzle: () => void;

  ringOne: { collected: boolean; installed: boolean };
  collectRingOne: () => void;
  installRingOne: () => void;
  ringTwo: { collected: boolean; installed: boolean };
  collectRingTwo: () => void;
  installRingTwo: () => void;

  // 3d printable airplan
  airplane: {
    printed: boolean;
    inInventory: boolean;
  };
  printAirplane: () => void;
  collectAirplane: () => void;

  sdCard: {
    collected: boolean;
    installed: boolean;
  };
  collectSdCard: () => void;
  installSdCard: () => void;

  dragging: { inProgress: boolean; item: string };
  startDragging: (item: string) => void;
  stopDragging: () => void;

  won: boolean;
  setWon: () => void;

  winWindowVisible: boolean;
  setWinWindowVisible: (visible: boolean) => void;
}

interface IButton {
  text: string;
  click: () => void;
  afterClick: () => void;
  hideButton: () => void;
}

export const useStore = create<State>((set) => ({
  //final win state.
  won: false,
  setWon: () => set((state) => ({ won: true })),

  winWindowVisible: false,
  setWinWindowVisible: (visible: boolean) =>
    set((state) => ({ winWindowVisible: visible })),

  dragging: { inProgress: false, item: "none" },
  startDragging: (item: string) =>
    set((state) => ({ dragging: { inProgress: true, item: item } })),
  stopDragging: () =>
    set((state) => ({ dragging: { inProgress: false, item: "none" } })),

  desk: { power: false, up: false },
  powerOnDesk: () => set((state) => ({ desk: { ...state.desk, power: true } })),
  moveDeskUp: () => set((state) => ({ desk: { ...state.desk, up: true } })),
  moveDeskDown: () => set((state) => ({ desk: { ...state.desk, up: false } })),

  printer: { power: false, printed: [""] },
  powerOnPrinter: () =>
    set((state) => ({ printer: { ...state.printer, power: true } })),
  printObject: (item) =>
    set((state) => ({
      printer: { ...state.printer, printed: [...state.printer.printed, item] },
    })),

  text: ["Here I am in my office again... hey what's that box on my desk?"],
  setText: (text: string[]) => set({ text }),

  sound: "",
  playSound: (sound: string) => set({ sound }),

  button: undefined,
  setButton: (button: IButton | undefined) => set({ button }),
  hideButton: () => set({ button: undefined }),

  screen: {
    visible: false,
    keyInserted: false,
    keyLoaded: false,
    handleLoaded: false,
  },
  showScreen: () =>
    set((state) => ({ screen: { ...state.screen, visible: true } })),
  hideScreen: () =>
    set((state) => ({ screen: { ...state.screen, visible: false } })),

  computerScreen: {
    visible: false,
  },
  showComputerScreen: () =>
    set((state) => ({
      computerScreen: { ...state.computerScreen, visible: true },
    })),
  hideComputerScreen: () =>
    set((state) => ({
      computerScreen: { ...state.computerScreen, visible: false },
    })),

  notebook: {
    visible: false,
  },
  showNotebook: () => set((state) => ({ notebook: { visible: true } })),
  hideNotebook: () => set((state) => ({ notebook: { visible: false } })),

  inventory: {
    items: [],
    open: false,
  },
  openInventory: () =>
    set((state) => ({ inventory: { ...state.inventory, open: true } })),
  closeInventory: () =>
    set((state) => ({ inventory: { ...state.inventory, open: false } })),
  addToInventory: (item: string) => {
    set((state) => ({
      inventory: {
        ...state.inventory,
        items: [...state.inventory.items, item],
      },
    }));
  },

  puzzle: {
    inInventory: false,
    visible: true,
  },
  collectPuzzle: () =>
    set((state) => ({ puzzle: { inInventory: true, visible: false } })),

  ringOne: { collected: false, installed: false },
  installRingOne: () =>
    set((state) => ({ ringOne: { ...state.ringOne, installed: true } })),
  collectRingOne: () =>
    set((state) => ({ ringOne: { ...state.ringOne, collected: true } })),

  ringTwo: { collected: false, installed: false },
  installRingTwo: () =>
    set((state) => ({ ringTwo: { ...state.ringTwo, installed: true } })),
  collectRingTwo: () =>
    set((state) => ({ ringTwo: { ...state.ringTwo, collected: true } })),

  sdCard: {
    collected: false,
    installed: false,
  },
  collectSdCard: () =>
    set((state) => ({ sdCard: { ...state.sdCard, collected: true } })),
  installSdCard: () =>
    set((state) => ({ sdCard: { ...state.sdCard, installed: true } })),

  airplane: {
    printed: false,
    inInventory: false,
  },

  collectAirplane: () => {
    set((state) => ({ airplane: { ...state.airplane, inInventory: true } }));
  },
  printAirplane: () =>
    set((state) => ({ airplane: { ...state.airplane, printed: true } })),
}));