import { useEffect, useState } from 'react';
import axiosClient from '../../utils/http';
import { WeatherCard } from '../../components/ui';

const WeatherPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await axiosClient.get('/weather', {
        params: {
          lat: latitude,
          lon: longitude,
        },
      });

      setData(response.data);
    });
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <WeatherCard
      location={`${data.name}, ${data.sys.country}`}
      temperature={data.main.temp}
      description={data.weather[0].description}
      icon={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      humidity={data.main.humidity}
      feels_like={data.main.feels_like}
      wind_speed={data.wind.speed}
    />
  );
};

export default WeatherPage;
