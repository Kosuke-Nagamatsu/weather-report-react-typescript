import type { FC } from 'react';
import type { Weather } from '../types/weather';

export const WeatherItem: FC<Weather> = props => {
  const { name, main, temp, icon } = props;

  return (
    <>
      <h1>現在の天気</h1>
      <h2>{name}</h2>
      <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='天気アイコン' />
      <p>天気：{main}</p>
      <p>気温：{temp} ℃</p>
    </>
  );
}
