import type { FC } from 'react';
import { WeatherItem } from './components/WeatherItem';
import { useFetchWeather } from './hooks/useFetchWeather';

export const App: FC = () => {
  const { weather, isError, isLoading } = useFetchWeather();
  const { name, main, temp, icon } = weather;

  return (
    <>
      {isError && <p style={{ color: 'red' }}>エラーが発生しました</p>}

      {isLoading ? (
        <p style={{ color: 'blue' }}>天気予報を取得中</p>
      ) : (
        <WeatherItem name={name} main={main} temp={temp} icon={icon} />
      )}
    </>
  );
}
