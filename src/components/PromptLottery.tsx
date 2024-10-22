import React, { useState } from 'react';
import { Sparkles, RefreshCw, Share2 } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
}

const prompts = [
  "優雅な貴族のティーパーティーを描写してください",
  "18世紀のヴェルサイユ宮殿での舞踏会を想像してください",
  "ロココ調の庭園で行われる秘密の出会いを物語ってください",
  "華麗な宮廷衣装のデザインを考案してください",
  "ロココ様式の建築物の内装を詳細に説明してください",
  "優美な貴婦人の一日の過ごし方を描写してください",
  "ロココ時代の音楽会の様子を生き生きと表現してください",
  "豪華絢爛な宮殿の食事会のメニューを考えてください",
  "ロココ調の装飾品や調度品を細かく描写してください",
  "18世紀のフランス宮廷での恋愛模様を物語ってください"
];

const videoLink = "https://youtube.com/clip/UgkxlrM84WviF-jIr6W3U_8IqA3vxVGkNajQ?si=tskEgRbYGujbq87M";

const PromptLottery: React.FC<Props> = ({ isDarkMode }) => {
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const drawPrompt = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomPromptIndex = Math.floor(Math.random() * prompts.length);
      setCurrentPrompt(prompts[randomPromptIndex]);
      setIsAnimating(false);
    }, 2000);
  };

  const shareOnX = () => {
    if (currentPrompt) {
      const shareText = encodeURIComponent(`私の運命のプロンプト: "${currentPrompt}" #SSRミレヰア #PromptLotteryRoyale\n動画: ${videoLink}`);
      const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className={`max-w-4xl w-full p-8 rounded-lg shadow-lg rococo-border prompt-container ${isDarkMode ? 'bg-blue-800' : 'bg-blue-50'}`}>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 italic">Prompt Lottery Royale</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className={`flex-1 h-48 flex items-center justify-center mb-6 rounded-lg ${isDarkMode ? 'bg-blue-700' : 'bg-blue-100'}`}>
          {isAnimating ? (
            <div className="text-center">
              <Sparkles className={`w-16 h-16 animate-spin mb-4 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />
              <p className="text-lg">運命の筆を選んでいます...</p>
            </div>
          ) : (
            <p className="text-center p-4 text-lg">{currentPrompt || "くじを引いて、創造の旅を始めましょう！"}</p>
          )}
        </div>
        <div className="flex-1 aspect-w-16 aspect-h-9">
          <iframe
            src={videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={drawPrompt}
          className={`flex-1 py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center btn-shine ${
            isDarkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <RefreshCw className="w-6 h-6 mr-2" />
          運命のプロンプトを引く
        </button>
        <button
          onClick={shareOnX}
          disabled={!currentPrompt}
          className={`py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center ${
            currentPrompt
              ? (isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white')
              : 'bg-gray-400 cursor-not-allowed text-gray-600'
          }`}
        >
          <Share2 className="w-6 h-6 mr-2" />
          Xでシェア
        </button>
      </div>
    </div>
  );
};

export default PromptLottery;