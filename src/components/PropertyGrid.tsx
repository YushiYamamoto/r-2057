
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      title: "フォレストリトリート",
      location: "軽井沢、長野県",
      price: "2億4500万円",
    },
    {
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      title: "モダンヴィラ",
      location: "表参道、東京都",
      price: "5億9000万円",
    },
    {
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      title: "アーバンペントハウス",
      location: "六本木、東京都",
      price: "3億7500万円",
    },
    {
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      title: "レイクハウス",
      location: "山中湖、山梨県",
      price: "4億2000万円",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
