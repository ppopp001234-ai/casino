const NavigationBar = () => (
  <header className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50">
    <h1 className="text-2xl font-bold tracking-wide">🎰 重毅娛樂城</h1>
    <nav className="space-x-4 text-sm">
      <button className="hover:text-yellow-400">錢包</button>
      <button className="hover:text-yellow-400">設定</button>
      <button className="hover:text-yellow-400">登出</button>
    </nav>
  </header>
);

export default NavigationBar;
