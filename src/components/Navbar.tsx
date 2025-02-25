
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-display text-white">エリート不動産</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-white hover:text-white/80 transition-colors">物件一覧</a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors">会社概要</a>
            <a href="#testimonials" className="text-white hover:text-white/80 transition-colors">お客様の声</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">お問い合わせ</a>
            <Button variant="outline" className="text-black border-white bg-white hover:bg-white/90">
              お問い合わせ
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#properties" className="text-lg">物件一覧</a>
                  <a href="#about" className="text-lg">会社概要</a>
                  <a href="#testimonials" className="text-lg">お客様の声</a>
                  <a href="#contact" className="text-lg">お問い合わせ</a>
                  <Button className="w-full text-black bg-white hover:bg-white/90">お問い合わせ</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
