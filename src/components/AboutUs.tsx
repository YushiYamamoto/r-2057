
const AboutUs = () => {
  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">会社概要</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          エリート不動産は、お客様一人一人のニーズに合わせた最高級の不動産サービスと専門的なアドバイスを提供いたします。
        </p>
        <div className="aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="モダンな高級住宅"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
