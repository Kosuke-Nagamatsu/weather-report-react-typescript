import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Weather } from '../types/weather';

export const useFetchWeather = () => {
  const [ isError, setIsError ] = useState<boolean>(false);
  const [ weather, setWeather ] = useState<Weather>({
    name: '',
    main: '',
    temp: undefined,
    icon: ''
  });
  
  useEffect(() => {
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then((res) => {
      const { data } = res;
      const { weather, main } = data
      setWeather({
        name: data.name,
        main: weather[0].main,
        temp: Math.floor(main.temp) / 10,
        icon: weather[0].icon
      });
    })
  .catch(() => setIsError(true))
  }, []);

  return { weather, isError };
}
