/* Questions data — with Unsplash photo backgrounds */

export const questions = [
    {
        id: 1,
        question: '今日の気分は？',
        bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&fit=crop',
        options: [
            { label: 'ガッツリ食べたい', value: 'heavy' },
            { label: 'ヘルシーにいきたい', value: 'healthy' },
            { label: 'おしゃれに楽しみたい', value: 'fancy' },
            { label: 'とにかくお酒が飲みたい', value: 'drink' },
        ],
    },
    {
        id: 2,
        question: '誰と食べる？',
        bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop',
        options: [
            { label: 'ひとりで気ままに', value: 'alone' },
            { label: '恋人とロマンチックに', value: 'partner' },
            { label: '友達とワイワイ', value: 'friends' },
            { label: '家族団らん', value: 'family' },
        ],
    },
    {
        id: 3,
        question: '予算はどれくらい？',
        bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fit=crop',
        options: [
            { label: 'ワンコイン以内', value: 'cheap' },
            { label: '1000円くらい', value: 'moderate' },
            { label: '奮発しちゃう', value: 'expensive' },
            { label: 'お金なんて関係ない', value: 'unlimited' },
        ],
    },
    {
        id: 4,
        question: 'カロリー、気にする？',
        bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop',
        options: [
            { label: 'めっちゃ気にする', value: 'strict' },
            { label: 'ちょっとは気にする', value: 'moderate' },
            { label: '今日くらいいいじゃん', value: 'relax' },
            { label: 'カロリーは正義', value: 'no_care' },
        ],
    },
    {
        id: 5,
        question: '辛いもの好き？',
        bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=800&q=80&fit=crop',
        options: [
            { label: '辛ければ辛いほど良い', value: 'love' },
            { label: 'ピリ辛くらいがちょうどいい', value: 'mild' },
            { label: '甘口でお願いします', value: 'sweet' },
            { label: '辛いは痛い', value: 'no' },
        ],
    },
    {
        id: 6,
        question: '理想の焼き加減は？',
        bgGradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&fit=crop',
        options: [
            { label: 'カリッカリ派', value: 'crispy' },
            { label: 'ふわっふわ派', value: 'fluffy' },
            { label: 'トロトロ派', value: 'melty' },
            { label: '焦げ目が命', value: 'charred' },
        ],
    },
    {
        id: 7,
        question: 'マヨネーズは必須？',
        bgGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        image: 'https://images.unsplash.com/photo-1528750997573-59b0d0cee4d5?w=800&q=80&fit=crop',
        options: [
            { label: '絶対必須！', value: 'must' },
            { label: 'あれば嬉しい', value: 'nice' },
            { label: 'なくても平気', value: 'ok' },
            { label: 'マヨラーです', value: 'mayoler' },
        ],
    },
    {
        id: 8,
        question: '料理中に聴く音楽は？',
        bgGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80&fit=crop',
        options: [
            { label: 'J-POP', value: 'jpop' },
            { label: 'ジャズでムーディーに', value: 'jazz' },
            { label: 'EDMでテンションMAX', value: 'edm' },
            { label: '無音で集中', value: 'silent' },
        ],
    },
    {
        id: 9,
        question: '今日のラッキーカラーは？',
        bgGradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80&fit=crop',
        options: [
            { label: '情熱のレッド', value: 'red' },
            { label: '爽やかブルー', value: 'blue' },
            { label: 'ハッピーイエロー', value: 'yellow' },
            { label: 'ミステリアスパープル', value: 'purple' },
        ],
    },
    {
        id: 10,
        question: 'お好み焼きが食べたい？',
        bgGradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #2ecc71 100%)',
        image: 'https://images.unsplash.com/photo-1632203171982-cc0df6a9ceb4?w=800&q=80&fit=crop',
        isLastQuestion: true,
        options: [
            { label: 'はい', value: 'yes' },
            { label: 'いいえ', value: 'no' },
        ],
    },
];

/* Result catchphrases based on first question answer */
export const catchphrases = {
    heavy: 'ガッツリ食べたいあなたにぴったり！ キャベツどっさり、ボリューム満点の一品。',
    healthy: 'ヘルシー志向のあなたに朗報！ キャベツたっぷり、野菜が主役の完全栄養食。',
    fancy: 'おしゃれに楽しみたいあなたへ。ジャパニーズ・セイボリー・パンケーキをどうぞ。',
    drink: 'お酒のお供に最高の一品、見つけました。ビールとの相性は宇宙レベル。',
};

/* Full Okonomiyaki recipe */
export const recipe = {
    name: 'お好み焼き',
    nameEn: 'Okonomiyaki',
    subtitle: '究極のジャパニーズ・ソウルフード',
    description:
        'ふわふわの生地にたっぷりのキャベツ、お好みの具材を混ぜて焼き上げる、日本が誇る最強のソウルフード。ソースとマヨネーズの香ばしい香りが食欲をそそります。',
    prepTime: '15分',
    cookTime: '10分',
    servings: '2人前',
    difficulty: 2,
    ingredients: [
        { name: '薄力粉', amount: '150g' },
        { name: '卵', amount: '2個' },
        { name: 'だし汁（または水）', amount: '150ml' },
        { name: 'キャベツ', amount: '1/4個（約250g）' },
        { name: '豚バラ薄切り肉', amount: '100g' },
        { name: '天かす', amount: '大さじ2' },
        { name: '紅しょうが', amount: '大さじ1' },
        { name: 'サラダ油', amount: '適量' },
        { name: 'お好み焼きソース', amount: 'たっぷり' },
        { name: 'マヨネーズ', amount: 'たっぷり' },
        { name: 'かつお節', amount: '適量' },
        { name: '青のり', amount: '適量' },
    ],
    steps: [
        {
            number: 1,
            title: '生地を作る',
            detail: 'ボウルに薄力粉、卵、だし汁を入れてよく混ぜます。ダマがなくなるまで滑らかに。',
        },
        {
            number: 2,
            title: 'キャベツを切る',
            detail: 'キャベツを粗めの千切りにします。ザクザク食感を残すのがポイント。',
        },
        {
            number: 3,
            title: '具材を混ぜる',
            detail: '生地にキャベツ、天かす、紅しょうがを加えて、ざっくりと混ぜ合わせます。混ぜすぎないのがふわふわのコツ。',
        },
        {
            number: 4,
            title: '焼く（表面）',
            detail: 'フライパンに油をひき中火で温め、生地を丸く流し入れ豚バラ肉を広げます。蓋をして5分。',
        },
        {
            number: 5,
            title: 'ひっくり返す',
            detail: '底面がこんがり焼けたら、思い切ってひっくり返します。ここが一番の見せ場。',
        },
        {
            number: 6,
            title: '仕上げ焼き',
            detail: '裏面も5分ほど焼いて中まで火を通します。蓋をして蒸し焼きにするとふっくら。',
        },
        {
            number: 7,
            title: 'トッピング',
            detail: 'お皿に盛り付け、ソースを塗り、マヨネーズをかけ、かつお節と青のりを散らせば完成。',
        },
    ],
    tips: [
        '生地は混ぜすぎない。ザクザク感が残るくらいがベスト。',
        'キャベツは粗めに切ると食感がアップ。',
        '焼くときは触りすぎない。じっくり待つのが美味しさの秘訣。',
        'ひっくり返すときはお皿を使うと安全かつ確実。',
        'ソースは仕上げに塗ると香ばしい香りが引き立つ。',
    ],
};
