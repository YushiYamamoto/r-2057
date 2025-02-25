
import { Check } from "lucide-react";

const OurVision = () => {
  const values = [
    {
      title: "最高級の居住空間",
      description: "贅沢さと機能性を兼ね備えた、卓越した居住環境を創造します。",
    },
    {
      title: "持続可能なコミュニティ",
      description: "環境に配慮し、周辺環境と調和した開発を推進します。",
    },
    {
      title: "専門家によるサポート",
      description: "すべての段階で、専門的な知識と個別対応のサービスを提供します。",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">私たちのビジョン</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          革新的で持続可能なコミュニティを創造し、新たな基準を確立することを目指しています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-estate-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-estate-800 mb-2">{value.title}</h3>
                <p className="text-estate-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
