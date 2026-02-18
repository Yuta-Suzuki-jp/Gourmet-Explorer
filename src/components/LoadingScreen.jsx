import { useState, useEffect } from 'react';
import { IconCheck } from './Icons';

const loadingSteps = [
    { text: '回答データを収集中' },
    { text: 'AIが味覚プロファイルを分析中' },
    { text: '10万件のレシピをスキャン中' },
    { text: '最適な料理をマッチング中' },
    { text: '結果が出ました！' },
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
            <div className="loading-spinner-container">
                <div className="loading-ring" />
                <div className="loading-ring loading-ring--2" />
                <div className="loading-ring loading-ring--3" />
                <div className="loading-center-dot" />
            </div>

            <h2 className="loading-title">Analyzing...</h2>
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
                            <span className="loading-step-indicator">
                                {index < activeStep ? (
                                    <IconCheck size={14} color="var(--color-nori)" />
                                ) : (
                                    <span className="loading-step-dot" />
                                )}
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
