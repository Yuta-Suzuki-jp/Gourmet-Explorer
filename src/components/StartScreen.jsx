import { IconArrowRight } from './Icons';

function StartScreen({ onStart }) {
    return (
        <div className="start-screen">
            <div className="start-logo-container">
                <div className="start-logo-ring" />
                <div className="start-logo-ring start-logo-ring--2" />
                <div className="start-logo-inner">G</div>
            </div>

            <h1 className="start-title">
                <span className="start-title-line">Gourmet</span>
                <span className="start-title-line start-title-line--accent">Explorer</span>
            </h1>

            <p className="start-subtitle">
                いくつかの質問に答えるだけで、<br />
                今日あなたが作るべき<strong>運命の一皿</strong>を診断します。
            </p>

            <button className="start-button" onClick={onStart} id="start-button">
                <span>診断をはじめる</span>
                <IconArrowRight size={20} />
            </button>

            <div className="start-features">
                <div className="start-feature">
                    <div className="start-feature-dot" style={{ background: '#667eea' }} />
                    <span>10 Questions</span>
                </div>
                <div className="start-feature">
                    <div className="start-feature-dot" style={{ background: '#f093fb' }} />
                    <span>AI Analysis</span>
                </div>
                <div className="start-feature">
                    <div className="start-feature-dot" style={{ background: '#43e97b' }} />
                    <span>Full Recipe</span>
                </div>
            </div>
        </div>
    );
}

export default StartScreen;
