'use client';

import dynamic from 'next/dynamic';

const Player = dynamic(
    () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
    { ssr: false }
);

interface LottieAnimationProps {
    src: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
}

export default function LottieAnimation({
    src,
    size = 'md',
    loop = true,
    autoplay = true,
    className = '',
}: LottieAnimationProps) {
    const sizeClasses = {
        sm: 'lottie-sm',
        md: 'lottie-md',
        lg: 'lottie-lg',
        xl: 'lottie-xl',
    };

    return (
        <div className={`lottie-container ${sizeClasses[size]} ${className}`}>
            <Player
                autoplay={autoplay}
                loop={loop}
                src={src}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
