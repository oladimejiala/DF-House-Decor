import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">DF HOUSE</h3>
            <p className="text-xs font-semibold text-primary">AMEUBLEMENT ET DÉCOR</p>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.location.href = 'tel:+22961471700'}
                >
                  +229 61 47 17 00
                </Button>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => window.open('https://wa.me/22961471700', '_blank')}
                >
                  {t('footer.whatsapp')}
                </Button>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.location')}</h4>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">
                Calavi, Bénin 🇧🇯
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 DF HOUSE AMEUBLEMENT ET DÉCOR. {t('footer.rights')}
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="/sitemap.xml" className="hover:text-primary transition-colors">
                Sitemap
              </a>
              <span>|</span>
              <a href="/rss.xml" className="hover:text-primary transition-colors">
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6791234567894!2d2.3469025!3d6.4497394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a901bbe73a13%3A0x550649ee69153ef6!2sDF%20HOUSE%20AMEUBLEMENT%20ET%20DECO%20B%C3%A9nin%20%F0%9F%87%A7%F0%9F%87%AF!5e0!3m2!1sfr!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DF HOUSE AMEUBLEMENT ET DÉCOR Location"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
