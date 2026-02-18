import { useMemo } from 'react';

const COLORS = [
    '#ff6b6b',
    '#ffd93d',
    '#2ecc71',
    '#6c5ce7',
    '#fd79a8',
    '#00cec9',
    '#f8b500',
    '#a29bfe',
    '#fdcb6e',
    '#e17055',
];

function Confetti() {
    const pieces = useMemo(() => {
        return Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            delay: `${Math.random() * 2}s`,
            size: `${6 + Math.random() * 8}px`,
            rotation: `${Math.random() * 360}deg`,
        }));
    }, []);

    return (
        <div className="result-confetti">
            {pieces.map((piece) => (
                <div
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: piece.left,
                        width: piece.size,
                        height: piece.size,
                        backgroundColor: piece.color,
                        animationDelay: piece.delay,
                        transform: `rotate(${piece.rotation})`,
                    }}
                />
            ))}
        </div>
    );
}

export default Confetti;
