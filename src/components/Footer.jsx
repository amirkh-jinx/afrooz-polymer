import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, LinkedinIcon, TelegramIcon } from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] rounded-t-[40px] py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">

        {/* برند */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-[#FF2E2E]">افروز پلیمر سولار</h3>
          <p className="text-gray-600 text-sm">تولیدکننده TPE با کیفیت جهانی</p>
        </div>

        {/* لینک‌ها */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">لینک‌ها</h3>
          <a href="#products" className="text-gray-700 hover:text-[#FF2E2E] transition">محصولات</a>
          <a href="#services" className="text-gray-700 hover:text-[#FF2E2E] transition">خدمات</a>
        </div>

        {/* تماس */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">تماس</h3>
          <p className="text-gray-700">021-44585566</p>
          <p className="text-gray-700">info@aps-polymer.ir</p>
        </div>

        {/* آدرس */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">آدرس</h3>
          <p className="text-gray-700">شهرک صنعتی مصطفی خمینی (ره) فاز یک، بلوار صنعت</p>
        </div>

        {/* تلفکس */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">تلفکس</h3>
          <p className="text-gray-700">+98 114 443 2390</p>
        </div>

        {/* شبکه‌ها با HugeIcons */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">شبکه‌ها</h3>
          <div className="flex gap-4 text-[#FF2E2E]">
            <a href="#" className="hover:scale-110 transition">
              <HugeiconsIcon icon={InstagramIcon} size={28} color="#FF2E2E" strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <HugeiconsIcon icon={LinkedinIcon} size={28} color="#FF2E2E" strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <HugeiconsIcon icon={TelegramIcon} size={28} color="#FF2E2E" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        © ۱۴۰۴ - تمامی حقوق محفوظ است
      </p>
    </footer>
  );
};

export default Footer;