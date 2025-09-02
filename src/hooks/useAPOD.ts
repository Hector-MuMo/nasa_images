import axios from "axios";
import { useEffect, useState } from "react";
import type { Apod } from "../types/apod";
import imgNotFound from "../assets/image-not-found.png";

interface APODReturn {
  apod: Apod;
}

const apiKey = import.meta.env.VITE_NASA_API_KEY as string;

const useAPOD = (): APODReturn => {
  const [apod, setApod] = useState<Apod>({
    copyright: "",
    date: "",
    explanation: "The NASA API has some troble. Please try again later.",
    hdurl: imgNotFound,
    media_type: "",
    service_version: "",
    title: "Can't Reach Info",
    url: imgNotFound,
  });

  const getPicOfDay = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      );
      if (res && res.data && typeof res.data === "object") {
        const apodRes = res.data as Apod;
        setApod(apodRes);
      } else {
        throw new Error("Error getting pic of the day. Try Again.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Error in the server. Try Again.");
      }
    }
  };

  useEffect(() => {
    void getPicOfDay();
  }, []);

  return { apod };
};

export default useAPOD;
