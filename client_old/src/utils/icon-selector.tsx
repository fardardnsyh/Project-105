import {
  Briefcase,
  Inbox,
  StickyNote,
  ThumbsDown,
  Trophy,
  Wand,
} from "lucide-react";
import { Icons } from "./icon";

type Props = {
  icon: Icons;
  size?: number;
  className?: string;
};

export const useIconSelector = ({ icon, size, className = "" }: Props) => {
  if (icon === Icons.WAND) {
    return <Wand size={size} className={className} />;
  }

  if (icon === Icons.TROPHY) {
    return <Trophy size={size} className={className} />;
  }

  if (icon === Icons.BRIEFCASE) {
    return <Briefcase size={size} className={className} />;
  }

  if (icon === Icons.STICKY_NOTE) {
    return <StickyNote size={size} className={className} />;
  }

  if (icon === Icons.THUMBS_DOWN) {
    return <ThumbsDown size={size} className={className} />;
  }

  return <Inbox size={size} className={className} />;
};
