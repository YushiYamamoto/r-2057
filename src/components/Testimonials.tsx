
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "佐藤 美咲",
      role: "マンションオーナー",
      text: "エリート不動産のサービスは私たちの期待を大きく上回るものでした。彼らの専門知識と細部へのこだわりにより、住宅購入の経験が素晴らしいものとなりました。",
    },
    {
      name: "田中 健一",
      role: "不動産投資家",
      text: "エリート不動産との取引は、私たちの投資ポートフォリオに大きな価値をもたらしました。彼らの市場洞察力と専門的なガイダンスは非常に貴重でした。",
    },
  ];

  return (
    <div className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">お客様の声</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <blockquote className="text-xl text-estate-600 mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-estate-800">{testimonial.name}</div>
                      <div className="text-estate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
