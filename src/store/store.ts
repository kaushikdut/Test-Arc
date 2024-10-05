import { create } from "zustand";

interface ImageStore {
  image: string | null;
  setImage: (url: string | null) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  image: null,
  setImage: (url) => set({ image: url }),
}));

export default useImageStore;
