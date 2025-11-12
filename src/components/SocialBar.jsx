import { FaFacebookF, FaTiktok } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3 z-50">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1TgZiA45iM/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaFacebookF size={16} />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@gruas_vargas?_t=ZM-90kYVQgDrtk&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-900 text-white p-2.5 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaTiktok size={16} />
      </a>
    </div>
  );
}
