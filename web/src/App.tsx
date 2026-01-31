import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { ChannelPage } from "./components/channel/ChannelPage";

function App() {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) text-(--color-text-primary)">
      <Header />
      <Sidebar />
      <ChannelPage />
    </div>
  );
}

export default App;
