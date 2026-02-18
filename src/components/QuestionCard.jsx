function QuestionCard({
    question,
    currentIndex,
    totalQuestions,
    onAnswer,
    onSkip,
    isExiting,
    exitDirection,
}) {
    const progress = ((currentIndex + 1) / totalQuestions) * 100;
    const isLast = question.isLastQuestion;

    const cardClass = `question-card${isExiting
            ? exitDirection === 'left'
                ? ' exiting-left'
                : ' exiting-right'
            : ''
        }`;

    return (
        <div className="question-container">
            {/* Header with progress and skip */}
            <div className="question-header">
                <span className="question-progress-info">
                    {currentIndex + 1} / {totalQuestions}
                </span>
                {!isLast && (
                    <button className="skip-button" onClick={onSkip} id="skip-button">
                        <span>⏭️</span>
                        <span>スキップ</span>
                    </button>
                )}
            </div>

            {/* Progress bar */}
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Card */}
            <div className={cardClass}>
                {/* Image area with emoji */}
                <div
                    className="card-image-area"
                    style={{ background: question.bgGradient }}
                >
                    <span className="card-emoji">{question.emoji}</span>
                    <div className="card-image-overlay" />
                </div>

                {/* Body */}
                <div className="card-body">
                    <div className="card-question-number">
                        {isLast ? 'Final Question' : `Question ${currentIndex + 1}`}
                    </div>
                    <h2 className="card-question-text">{question.question}</h2>

                    <div className="card-options">
                        {question.options.map((option) => (
                            <button
                                key={option.value}
                                className="option-button"
                                onClick={() => onAnswer(question.id, option.value)}
                                id={`option-${question.id}-${option.value}`}
                            >
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
