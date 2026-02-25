import React from "react";
import heroImg from "../../assets/img/heroImg.png";
import Button from "../button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AnalyticsUpIcon,
  GlobalIcon,
  Idea01Icon,
  NanoTechnologyIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full h-[537px] md:h-[940px] relative">
      {/* تصویر */}
      <img
        src={heroImg}
        alt=""
        className="w-full h-[537px] md:h-full object-cover"
      />

      {/* متن روی تصویر */}
      <motion.div
        className="absolute top-1/3 right-5 md:right-28 flex flex-col gap-3 md:gap-5 max-w-[95%] sm:max-w-[80%] md:max-w-none"
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-bold text-xl sm:text-3xl md:text-[64px] text-white leading-tight md:leading-snug"
          custom={1}
          variants={textVariants}
        >
          افروز پلیمر سولار
        </motion.p>

        <motion.p
          className="font-bold text-xs sm:text-base md:text-2xl text-white leading-relaxed"
          custom={2}
          variants={textVariants}
        >
          کامپاند الاستومر ترموپلاستیک TPE - ترکیب انعطاف لاستیک و فرآوری پلاستیک
        </motion.p>

        <motion.div
          className="w-fit scale-90 sm:scale-100"
          custom={3}
          variants={textVariants}
        >
          <Button text={"مشاهده محصولات"} />
        </motion.div>
      </motion.div>

      {/* باکس پایین (بدون تغییر پوزیشن) */}
      <div className="w-full flex justify-center relative bottom-12 px-4">
        <div className="flex flex-col md:flex-row bg-white w-10/12 shadow-md p-6 md:p-9 rounded-3xl gap-6 md:gap-0 md:justify-around">
          {[
            { icon: GlobalIcon, text: "خدمات درجه یک جهانی" },
            { icon: AnalyticsUpIcon, text: "تجربه بالا" },
            { icon: NanoTechnologyIcon, text: "فناوری‌های مدرن" },
            { icon: Idea01Icon, text: "نوآوری پایدار" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-[#FF2E2E] text-base sm:text-lg md:text-2xl font-bold flex items-center gap-3"
              custom={index + 1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <HugeiconsIcon icon={item.icon} size={28} strokeWidth={1.5} />
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;