import WeatherPage from '../modules/weather/WeatherPage';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-slate-900">
      <header className="p-4 text-xl font-bold">🌤 Weather App</header>
      <main className="p-4">
        <WeatherPage />
      </main>
    </div>
  );
};

export default MainLayout;
