import { Link } from "react-router";
import { cn } from "../../utils";
import {
  HomeIcon,
  ShortsIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  HistoryIcon,
  PlaylistIcon,
  WatchLaterIcon,
  LikedVideosIcon,
  YourVideosIcon,
  DownloadIcon,
  MusicIcon,
  MoviesIcon,
  LiveIcon,
  JeffTubePremiumIcon,
  JeffTubeStudioIcon,
} from "../icons";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, label, href = "#", active = false, onClick }: SidebarItemProps) {
  const className = cn(
    "flex items-center gap-6 px-3 py-2.5 rounded-lg hover:bg-(--color-bg-hover) transition-colors",
    active && "bg-(--color-bg-secondary)"
  );

  if (href === "/") {
    return (
      <Link to={href} className={className} onClick={onClick}>
        <span className="text-(--color-text-primary)">{icon}</span>
        <span className="text-sm text-(--color-text-primary) flex-1">{label}</span>
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      <span className="text-(--color-text-primary)">{icon}</span>
      <span className="text-sm text-(--color-text-primary) flex-1">{label}</span>
    </a>
  );
}

function SectionHeader({ title, hasArrow = false }: { title: string; hasArrow?: boolean }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 mt-2">
      <span className="text-base font-medium text-(--color-text-primary)">{title}</span>
      {hasArrow && <ChevronRightIcon />}
    </div>
  );
}

interface SidebarContentProps {
  onItemClick?: () => void;
}

export function SidebarContent({ onItemClick }: SidebarContentProps) {
  return (
    <nav className="py-3 px-3">
      {/* Main nav */}
      <SidebarItem icon={<HomeIcon />} label="Home" href="/" onClick={onItemClick} />
      <SidebarItem icon={<ShortsIcon />} label="Shorts" onClick={onItemClick} />

      <div className="border-t border-(--color-border-light) my-3" />

      {/* Your JeffTube */}
      <SectionHeader title="Your JeffTube" hasArrow />
      <SidebarItem icon={<HistoryIcon />} label="History" onClick={onItemClick} />
      <SidebarItem icon={<PlaylistIcon />} label="Playlists" onClick={onItemClick} />
      <SidebarItem icon={<WatchLaterIcon />} label="Watch later" onClick={onItemClick} />
      <SidebarItem icon={<LikedVideosIcon />} label="Liked videos" onClick={onItemClick} />
      <SidebarItem icon={<YourVideosIcon />} label="Your videos" onClick={onItemClick} />
      <SidebarItem icon={<DownloadIcon />} label="Downloads" onClick={onItemClick} />

      <div className="border-t border-(--color-border-light) my-3" />

      {/* Explore */}
      <SectionHeader title="Explore" />
      <SidebarItem icon={<MusicIcon />} label="Music" onClick={onItemClick} />
      <SidebarItem icon={<MoviesIcon />} label="Movies & TV" onClick={onItemClick} />
      <SidebarItem icon={<LiveIcon />} label="Live" onClick={onItemClick} />
      <button className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-(--color-bg-hover) transition-colors w-full">
        <ChevronDownIcon />
        <span className="text-sm text-(--color-text-primary)">Show more</span>
      </button>

      <div className="border-t border-(--color-border-light) my-3" />

      {/* More from JeffTube */}
      <SectionHeader title="More from JeffTube" />
      <SidebarItem icon={<JeffTubePremiumIcon />} label="JeffTube Premium" onClick={onItemClick} />
      <SidebarItem icon={<JeffTubeStudioIcon />} label="JeffTube Studio" onClick={onItemClick} />
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed top-14 left-0 w-60 h-[calc(100vh-56px)] bg-(--color-bg-primary) overflow-y-auto scrollbar-thin">
      <SidebarContent />
    </aside>
  );
}
