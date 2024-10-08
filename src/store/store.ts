import { create } from "zustand";

interface ImageStore {
  image: string | null;
  setImage: (url: string | null) => void;
  thankyouImage: string | null;
  setThankyouImage: (url: string | null) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  image: null,
  thankyouImage: `/images/kiss.gif`,
  setImage: (url) => set({ image: url }),
  setThankyouImage: (url) => {
    set({ thankyouImage: url });
  },
}));

export default useImageStore;
