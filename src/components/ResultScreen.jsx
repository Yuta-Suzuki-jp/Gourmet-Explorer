import { useMemo } from 'react';
import { recipe, catchphrases } from '../data';
import Confetti from './Confetti';
import { IconAward, IconClock, IconFlame, IconUsers, IconBook, IconRefresh, IconZap } from './Icons';

function ResultScreen({ answers, onRestart }) {
    const catchphrase = useMemo(() => {
        const q1Answer = answers[1];
        return (
            catchphrases[q1Answer] ||
            'あなたの全ての回答を総合分析した結果…これ以外ありえません。'
        );
    }, [answers]);

    const difficultyDots = Array.from({ length: 5 }, (_, i) => (
        <span
            key={i}
            className={`difficulty-dot${i < recipe.difficulty ? ' active' : ''}`}
        />
    ));

    return (
        <div className="result-screen">
            <Confetti />

            {/* Header */}
            <div className="result-header">
                <div className="result-badge">
                    <IconAward size={16} />
                    <span>診断結果</span>
                </div>

                <div className="result-dish-visual">
                    <div className="result-dish-ring" />
                    <div className="result-dish-ring result-dish-ring--2" />
                    <div className="result-dish-initial">鉄</div>
                </div>

                <h1 className="result-dish-name">{recipe.name}</h1>
                <div className="result-dish-name-en">{recipe.nameEn}</div>
                <p className="result-subtitle">{recipe.subtitle}</p>
                <div className="result-catchphrase">{catchphrase}</div>
            </div>

            {/* Recipe */}
            <div className="recipe-section">
                <div className="recipe-card">
                    <div className="recipe-header">
                        <div className="recipe-title-row">
                            <IconBook size={20} />
                            <h2 className="recipe-title">レシピ</h2>
                        </div>
                        <p className="recipe-description">{recipe.description}</p>
                        <div className="recipe-meta">
                            <div className="recipe-meta-item">
                                <IconClock size={14} />
                                <span>準備 {recipe.prepTime}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <IconFlame size={14} />
                                <span>調理 {recipe.cookTime}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <IconUsers size={14} />
                                <span>{recipe.servings}</span>
                            </div>
                            <div className="recipe-meta-item">
                                <span className="difficulty-dots">{difficultyDots}</span>
                                <span>難易度</span>
                            </div>
                        </div>
                    </div>

                    <div className="recipe-body">
                        {/* Ingredients */}
                        <h3 className="recipe-subsection-title">材料</h3>
                        <div className="ingredients-grid">
                            {recipe.ingredients.map((ing, i) => (
                                <div key={i} className="ingredient-item">
                                    <span className="ingredient-name">{ing.name}</span>
                                    <span className="ingredient-amount">{ing.amount}</span>
                                </div>
                            ))}
                        </div>

                        {/* Steps */}
                        <h3 className="recipe-subsection-title">手順</h3>
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
                                美味しく作るコツ
                            </h3>
                            <ul className="tips-list">
                                {recipe.tips.map((tip, i) => (
                                    <li key={i} className="tip-item">
                                        <span className="tip-icon">
                                            <IconZap size={14} color="var(--color-egg)" />
                                        </span>
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
                    <IconRefresh size={18} />
                    <span>もう一度診断する</span>
                </button>
            </div>
        </div>
    );
}

export default ResultScreen;
