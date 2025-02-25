
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-4">エリート不動産</h3>
            <p className="text-estate-300">
              最高級の不動産サービスを提供いたします。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#" className="hover:text-white transition-colors">物件一覧</a></li>
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">サービス</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-estate-300">
              <li>〒106-0032</li>
              <li>東京都港区六本木</li>
              <li>03-1234-5678</li>
              <li>info@eliterealestate.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-estate-300 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300">
          <p>&copy; {new Date().getFullYear()} エリート不動産. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
