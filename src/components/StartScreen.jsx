function StartScreen({ onStart }) {
    return (
        <div className="start-screen">
            <div className="start-logo">🍳</div>
            <h1 className="start-title">Gourmet Explorer</h1>
            <p className="start-subtitle">
                いくつかの質問に答えるだけで、
                <br />
                今日あなたが作るべき<strong>運命の一皿</strong>を診断します。
            </p>
            <button className="start-button" onClick={onStart} id="start-button">
                <span>🔮</span>
                <span>診断をはじめる</span>
            </button>
            <div className="start-features">
                <div className="start-feature">
                    <span className="start-feature-icon">📝</span>
                    <span>10の質問</span>
                </div>
                <div className="start-feature">
                    <span className="start-feature-icon">🤖</span>
                    <span>AI診断</span>
                </div>
                <div className="start-feature">
                    <span className="start-feature-icon">📖</span>
                    <span>レシピ付き</span>
                </div>
            </div>
        </div>
    );
}

export default StartScreen;
