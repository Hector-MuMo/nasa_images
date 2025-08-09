import axios from "axios"
import { useEffect, useState } from "react"
import type { Apod } from "../types/apod";

interface APODReturn {
    apod: Apod
}

const apiKey = import.meta.env.NASA_API_KEY;

const useAPOD = (): APODReturn => {
    const [apod, setApod] = useState<Apod>({
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: "",
    });

    const getPicOfDay = async () => {
        try {
            const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            console.log(res.data);
            if (res && res.data && typeof res.data === "object") {
                setApod(res.data);
            } else {
                throw new Error;

            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        getPicOfDay();
    }, [])

    return (
        { apod }
    )
}

export default useAPOD