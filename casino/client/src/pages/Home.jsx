import React from "react";
import GameCard from "../components/GameCard";
import EventBanner from "../components/EventBanner";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  const games = [
    { name: "百家樂", icon: "🃏", route: "/baccarat" },
    { name: "骰子遊戲", icon: "🎲", route: "/dice" },
    { name: "捕魚機", icon: "🎣", route: "/fishing" },
    { name: "拉霸機", icon: "🎰", route: "/slots" },
    { name: "VIP 專區", icon: "👑", route: "/vip" },
    { name: "排行榜", icon: "🏆", route: "/leaderboard" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <NavigationBar />
      <EventBanner />
      <main className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {games.map((game) => (
          <GameCard key={game.route} {...game} />
        ))}
      </main>
      <footer className="text-center py-4 text-xs text-gray-400">
        Powered by 重毅 Casino Engine · 模組化 · 可擴充 · 永不破壞原始邏輯
      </footer>
    </div>
  );
};

export default Home;
