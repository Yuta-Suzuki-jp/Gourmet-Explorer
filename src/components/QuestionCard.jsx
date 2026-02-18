import { IconSkip, IconChevronRight } from './Icons';

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
            {/* Header */}
            <div className="question-header">
                <span className="question-progress-info">
                    {currentIndex + 1} <span className="question-progress-sep">/</span> {totalQuestions}
                </span>
                {!isLast && (
                    <button className="skip-button" onClick={onSkip} id="skip-button">
                        <span>Skip</span>
                        <IconSkip size={14} />
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
                {/* Gradient visual area */}
                <div
                    className="card-image-area"
                    style={{ background: question.bgGradient }}
                >
                    {/* Abstract decorative circles */}
                    <div className="card-deco card-deco--1" />
                    <div className="card-deco card-deco--2" />
                    <div className="card-deco card-deco--3" />
                    <div className="card-question-overlay">
                        <span className="card-question-number-large">
                            {isLast ? '?' : String(currentIndex + 1).padStart(2, '0')}
                        </span>
                    </div>
                    <div className="card-image-fade" />
                </div>

                {/* Body */}
                <div className="card-body">
                    <div className="card-question-label">
                        {isLast ? 'Final Question' : `Question ${currentIndex + 1}`}
                    </div>
                    <h2 className="card-question-text">{question.question}</h2>

                    <div className="card-options">
                        {question.options.map((option, index) => (
                            <button
                                key={option.value}
                                className="option-button"
                                onClick={() => onAnswer(question.id, option.value)}
                                id={`option-${question.id}-${option.value}`}
                            >
                                <span className="option-letter">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="option-label">{option.label}</span>
                                <IconChevronRight size={16} color="rgba(255,255,255,0.3)" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
