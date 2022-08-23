import type { FC } from 'react';
import { WeatherItem } from './components/WeatherItem';
import { useFetchWeather } from './hooks/useFetchWeathers';

export const App: FC = () => {
  const { weather, isError } = useFetchWeather();
  const { name, main, temp, icon } = weather;
  return (
    <>
      {isError ? (
        <p style={{ color: 'red' }}>エラーが発生しました</p>
      ) : (
        <WeatherItem name={name} main={main} temp={temp} icon={icon} />
      )}
    </>
  );
}
