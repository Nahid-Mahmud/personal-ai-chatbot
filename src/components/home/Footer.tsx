import { MessageCircle } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-12 text-black bg-white dark:bg-[#080b14] dark:text-white border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-900 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AIO Chat</span>
            </div>
            <p className="">Your intelligent AI assistant for professional conversations and productivity.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className=" transition-colors">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#" className=" transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className=" transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className=" transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center ">
          <p>&copy; {new Date().getFullYear()} AIO Chat . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
