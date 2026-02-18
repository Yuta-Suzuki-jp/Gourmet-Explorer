import { useMemo } from 'react';
import { recipe, catchphrases } from '../data';
import Confetti from './Confetti';

function ResultScreen({ answers, onRestart }) {
    /* Pick catchphrase based on Q1 answer, fallback to generic */
    const catchphrase = useMemo(() => {
        const q1Answer = answers[1];
        return (
            catchphrases[q1Answer] ||
            'あなたの全ての回答を総合分析した結果... これ以外ありえません！'
        );
    }, [answers]);

    return (
        <div className="result-screen">
            <Confetti />

            {/* Header */}
            <div className="result-header">
                <div className="result-badge">🏆 診断結果</div>
                <span className="result-dish-emoji">🍳</span>
                <h1 className="result-dish-name">{recipe.name}</h1>
                <div className="result-dish-name-en">{recipe.nameEn}</div>
                <p className="result-subtitle">{recipe.subtitle}</p>
                <div className="result-catchphrase">{catchphrase}</div>
            </div>

            {/* Recipe */}
            <div className="recipe-section">
                <div className="recipe-card">
                    {/* Recipe Header */}
                    <div className="recipe-header">
                        <h2 className="recipe-title">📖 レシピ</h2>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                            {recipe.description}
                        </p>
                        <div className="recipe-meta">
                            <div className="recipe-meta-item">
                                <span className="recipe-meta-icon">⏱️</span>
                                <span>準備 {recipe.prepTime}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <span className="recipe-meta-icon">🔥</span>
                                <span>調理 {recipe.cookTime}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <span className="recipe-meta-icon">🍽️</span>
                                <span>{recipe.servings}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <span className="recipe-meta-icon">📊</span>
                                <span>難易度 {recipe.difficulty}</span>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Body */}
                    <div className="recipe-body">
                        {/* Ingredients */}
                        <h3 className="recipe-subsection-title">
                            <span>🥬</span> 材料
                        </h3>
                        <div className="ingredients-grid">
                            {recipe.ingredients.map((ing, i) => (
                                <div key={i} className="ingredient-item">
                                    <span className="ingredient-name">{ing.name}</span>
                                    <span className="ingredient-amount">{ing.amount}</span>
                                </div>
                            ))}
                        </div>

                        {/* Steps */}
                        <h3 className="recipe-subsection-title">
                            <span>👨‍🍳</span> 手順
                        </h3>
                        <div className="steps-list">
                            {recipe.steps.map((step) => (
                                <div key={step.number} className="step-item">
                                    <div className="step-number">{step.number}</div>
                                    <div className="step-content">
                                        <div className="step-title">{step.title}</div>
                                        <p className="step-detail">{step.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tips */}
                        <div className="tips-section">
                            <h3 className="recipe-subsection-title" style={{ marginBottom: '12px' }}>
                                <span>💡</span> 美味しく作るコツ
                            </h3>
                            <ul className="tips-list">
                                {recipe.tips.map((tip, i) => (
                                    <li key={i} className="tip-item">
                                        <span className="tip-icon">✨</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restart */}
            <div className="restart-button-container">
                <button className="restart-button" onClick={onRestart} id="restart-button">
                    <span>🔄</span>
                    <span>もう一度診断する</span>
                </button>
            </div>
        </div>
    );
}

export default ResultScreen;
