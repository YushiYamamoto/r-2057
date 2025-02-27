
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-display text-white">エリート不動産</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#properties" 
              onClick={(e) => { e.preventDefault(); scrollToSection('properties'); }} 
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              物件一覧
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              会社概要
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              お客様の声
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              お問い合わせ
            </a>
            <Button 
              variant="outline" 
              className="text-black border-white bg-white hover:bg-white/90"
              onClick={() => scrollToSection('contact')}
            >
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
                  <a 
                    href="#properties" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection('properties');
                      document.querySelector('[data-radix-collection-item]')?.click();
                    }} 
                    className="text-lg cursor-pointer"
                  >
                    物件一覧
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection('about');
                      document.querySelector('[data-radix-collection-item]')?.click();
                    }} 
                    className="text-lg cursor-pointer"
                  >
                    会社概要
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection('testimonials');
                      document.querySelector('[data-radix-collection-item]')?.click();
                    }} 
                    className="text-lg cursor-pointer"
                  >
                    お客様の声
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection('contact');
                      document.querySelector('[data-radix-collection-item]')?.click();
                    }} 
                    className="text-lg cursor-pointer"
                  >
                    お問い合わせ
                  </a>
                  <Button 
                    className="w-full text-black bg-white hover:bg-white/90"
                    onClick={() => {
                      scrollToSection('contact');
                      document.querySelector('[data-radix-collection-item]')?.click();
                    }}
                  >
                    お問い合わせ
                  </Button>
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
