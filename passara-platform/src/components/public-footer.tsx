import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Departments", href: "/departments" },
    { label: "Public Notices", href: "/notices" },
    { label: "News & Events", href: "/news" },
    { label: "Downloads", href: "/downloads" },
  ],
  services: [
    { label: "Submit Complaint", href: "/complaints" },
    { label: "Track Complaint", href: "/citizen/complaints" },
    { label: "Hall Reservation", href: "/hall-reservation" },
    { label: "Development Projects", href: "/projects" },
    { label: "Tourism Info", href: "/tourism" },
    { label: "Contact Us", href: "/contact" },
  ],
  usefulLinks: [
    { label: "Government of Sri Lanka", href: "https://www.gov.lk" },
    { label: "Uva Provincial Council", href: "#" },
    { label: "Badulla District Secretariat", href: "#" },
    { label: "Local Government Ministry", href: "#" },
    { label: "National Water Supply Board", href: "#" },
    { label: "Ceylon Electricity Board", href: "#" },
  ],
};

export default function PublicFooter() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5276] to-[#1e8449] flex items-center justify-center text-white font-bold shadow-lg">
                PS
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">Passara Pradeshiya Sabha</div>
                <div className="text-xs text-gray-400 leading-tight">Smart Digital Governance Platform</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Serving the people of Passara Division with dedication, transparency, and modern digital governance. 
              Building a smarter, greener, and more connected community.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1e8449] mt-0.5 shrink-0" />
                <span className="text-gray-400">Main Street, Passara, Badulla District, Sri Lanka.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1e8449] shrink-0" />
                <span className="text-gray-400">055 222 2222</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1e8449] shrink-0" />
                <a href="mailto:info@passara.ps.gov.lk" className="text-gray-400 hover:text-white transition-colors">
                  info@passara.ps.gov.lk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#1e8449] shrink-0" />
                <span className="text-gray-400">Mon – Fri: 8:00 AM – 4:00 PM</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.517 3.5 12 3.5 12 3.5s-7.517 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.483 20.5 12 20.5 12 20.5s7.517 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#1e8449] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e8449] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#1e8449] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e8449] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-[#1e8449] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e8449] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2024 Passara Pradeshiya Sabha. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
