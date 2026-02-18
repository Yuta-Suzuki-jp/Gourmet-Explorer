import { useState, useEffect } from 'react';

const loadingSteps = [
    { icon: '📊', text: '回答データを収集中...' },
    { icon: '🧠', text: 'AIが味覚プロファイルを分析中...' },
    { icon: '🍽️', text: '10万件のレシピをスキャン中...' },
    { icon: '⭐', text: '最適な料理をマッチング中...' },
    { icon: '🎉', text: '結果が出ました！' },
];

function LoadingScreen({ onComplete }) {
    const [activeStep, setActiveStep] = useState(-1);

    useEffect(() => {
        const timers = loadingSteps.map((_, index) =>
            setTimeout(() => {
                setActiveStep(index);
            }, 800 * (index + 1))
        );

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 800 * (loadingSteps.length + 1));

        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-icon-container">
                <div className="loading-ring" />
                <div className="loading-ring" />
                <div className="loading-ring" />
                <span className="loading-emoji">🍳</span>
            </div>

            <h2 className="loading-title">高度なAIが分析中...</h2>
            <p className="loading-subtitle">
                あなたにぴったりの料理を見つけています
            </p>

            <div className="loading-steps">
                {loadingSteps.map((step, index) => {
                    let className = 'loading-step';
                    if (index < activeStep) className += ' completed';
                    else if (index === activeStep) className += ' active';

                    return (
                        <div key={index} className={className}>
                            <span className="loading-step-icon">
                                {index < activeStep ? '✅' : step.icon}
                            </span>
                            <span>{step.text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LoadingScreen;
