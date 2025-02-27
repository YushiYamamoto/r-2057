
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
                      const sheet = document.querySelector('[data-state="open"]');
                      if (sheet) {
                        const closeButton = sheet.querySelector('button[aria-label="Close"]');
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }
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
                      const sheet = document.querySelector('[data-state="open"]');
                      if (sheet) {
                        const closeButton = sheet.querySelector('button[aria-label="Close"]');
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }
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
                      const sheet = document.querySelector('[data-state="open"]');
                      if (sheet) {
                        const closeButton = sheet.querySelector('button[aria-label="Close"]');
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }
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
                      const sheet = document.querySelector('[data-state="open"]');
                      if (sheet) {
                        const closeButton = sheet.querySelector('button[aria-label="Close"]');
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click();
                        }
                      }
                    }} 
                    className="text-lg cursor-pointer"
                  >
                    お問い合わせ
                  </a>
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
