import React from "react";
import img1 from "../../assets/img/about-01.png";
import img2 from "../../assets/img/about-02.png";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full flex justify-center px-4 md:px-6 lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-7 items-center w-full max-w-[1400px]">

        {/* تصاویر فقط دسکتاپ و لپ‌تاپ/تبلت */}
        <div className="hidden md:flex lg:gap-8 gap-6 flex-shrink-0">
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.img src={img1} alt="" className="w-[180px] sm:w-[236px]" variants={itemVariants} />
            <motion.div
              className="p-2.5 rounded-2xl flex justify-center items-center w-[180px] sm:w-[236px] h-[100px] sm:h-[131px] bg-white shadow-2xl font-bold text-[14px] sm:text-[18px] text-center"
              variants={itemVariants}
            >
              بیش از ۲۰ هزار مشتری در سراسر جهان
            </motion.div>
          </div>

          <motion.img src={img2} alt="" className="h-[400px] sm:h-[680px]" variants={itemVariants} />
        </div>

        {/* بخش متن */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.button
            className="flex justify-center bg-[#DDDDDD] gap-3 pt-3 pb-3 pr-6 pl-6 rounded-full text-[14px] sm:text-[16px] font-medium text-[#FF2E2E] w-[140px] sm:w-[165px]"
            variants={itemVariants}
          >
            خوش آمدید
          </motion.button>

          <motion.h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl" variants={itemVariants}>
            درباره ما و TPE بیشتر بدانید
          </motion.h2>

          <motion.p className="font-bold text-[14px] sm:text-[18px] text-[#A6A6A6] w-full lg:w-[651px]" variants={itemVariants}>
            کامپاند الاستومر ترموپلاستیک TPE یک نوع پلیمر است که خواص کشسانی
            لاستیک و قابلیت فرآوری پلاستیک را ترکیب می‌کند. این مواد در دمای
            محیط مانند لاستیک انعطاف‌پذیر هستند، اما با گرما نرم شده و به راحتی
            شکل‌دهی می‌شوند. ویژگی‌ها: انعطاف‌پذیری بالا، مقاومت در برابر شرایط
            جوی و مواد شیمیایی، فرآوری آسان با روش‌های تزریق و اکستروژن، قابلیت
            بازیافت، مقاومت خمشی عالی، رنگ‌پذیری بالا، استحکام مناسب، مقاومت در
            برابر خوردگی.
          </motion.p>

          <motion.div className="flex flex-col md:flex-row justify-around items-center gap-6" variants={containerVariants}>
            <motion.div className="w-[140px] sm:w-[163px]" variants={itemVariants}>
              <div className="text-[72px] sm:text-[96px] text-[#FF2E2E] font-bold">+25</div>
              <div className="text-center text-[14px] sm:text-base">سال های تجربه</div>
            </motion.div>

            <motion.div className="w-[140px] sm:w-[163px] flex flex-col gap-5" variants={itemVariants}>
              <div className="text-[14px] sm:text-[16px] text-[#A6A6A6] font-bold w-full sm:w-[248px]">
                ما همیشه می کوشیم تا بهترین محصولات را به شما ارائه دهیم
              </div>
              <button className="flex justify-center bg-[#FF2E2E] gap-3 pt-3 pb-3 pr-6 pl-6 rounded-full text-[14px] sm:text-[16px] font-medium text-white">
                بیشتر بدانید
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsSection;