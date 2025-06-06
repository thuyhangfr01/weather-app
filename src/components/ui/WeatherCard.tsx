import type { WeatherData } from '../../types';

const WeatherCard = ({
  location,
  temperature,
  description,
  icon,
  humidity,
  feels_like,
  wind_speed,
}: WeatherData) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 text-neutral-content bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{location}</h2>
          <p className="capitalize text-sm">{description}</p>
        </div>
        <img src={icon} alt="weather icon" className="w-20 h-20" />
      </div>

      <div className="mt-4 flex justify-between items-center text-lg">
        <div>
          <p className="text-4xl font-bold">{temperature}°C</p>
          <p className="text-sm text-white/80">Feels like: {feels_like}°C</p>
        </div>
        <div className="text-sm space-y-1">
          <p>💧 Humidity: {humidity}%</p>
          <p>💨 Wind: {wind_speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
