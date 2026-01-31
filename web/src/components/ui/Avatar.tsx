import { cn } from '../../utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-32 h-32',
  full: 'w-full h-full',
};

export function Avatar({ src, alt = '', size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-(--color-bg-tertiary) overflow-hidden flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
