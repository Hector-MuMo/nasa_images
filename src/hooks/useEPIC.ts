import { useEffect, useState } from "react";
import type { Epic } from "../types/epic";
import axios from "axios";

interface EpicReturn {
  earthImg: Epic[];
}

const apiKey = import.meta.env.VITE_NASA_API_KEY as string;

const useEPIC = (): EpicReturn => {
  const [earthImg, setEarthImg] = useState<Epic[]>([]);

  const getEpics = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/EPIC/api/natural?api_key=${apiKey}`,
      );
      if (res && res.data && typeof res.data === "object") {
        const epicRes = res.data as Epic[];
        setEarthImg(epicRes);
      } else {
        throw new Error("Can't get earths images. Try again");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Error in the server. Try Again.");
      }
    }
  };

  useEffect(() => {
    void getEpics();
  }, []);

  return { earthImg };
};

export default useEPIC;
