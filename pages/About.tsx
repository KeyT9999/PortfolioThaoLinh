import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const skills = [
    "Chụp hình / Edit",
    "Vẽ",
    "Thiết kế thời trang",
    "Tin học văn phòng"
  ];

  return (
    <div className="min-h-screen bg-[#FFFBE6] dark:bg-[#1a202c] transition-colors duration-1000 overflow-y-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-[#8B4513] dark:border-gray-400 text-[#8B4513] dark:text-white hover:bg-[#8B4513] dark:hover:bg-gray-600 hover:text-white transition-colors text-lg md:text-xl"
      >
        &times;
      </button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="pt-8 md:pt-8 pb-4 text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-hand text-[#5D4037] dark:text-white flex items-center justify-center gap-2">
            <span>👤</span> About
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl mx-auto items-start mt-6 md:mt-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4 md:space-y-6 text-[#4A4A4A] dark:text-gray-300">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] dark:text-white">
                ĐINH THỊ THẢO LINH
              </h1>
              <p className="text-lg md:text-xl text-[#D35400] dark:text-orange-400 font-semibold">
                Stylist
              </p>
            </div>
            
            <p className="leading-relaxed text-sm md:text-base">
              Mình là một người năng động, nhiệt tình và cực kỳ yêu cái đẹp. Với mình, uy tín và dáng giữ không chỉ là nguyên tắc làm việc, mà còn là cách để thể hiện sự tôn trọng với người khác. Mình rất mong muốn được làm việc ở vị trí Stylist – một công việc mà mình tin mình có thể phát huy tố chất và đam mê sáng tạo của bản thân. Mình tự tin có thể mang đến những phong cách ấn tượng, mới mẻ và luôn sẵn sàng góp phần tạo nên những concept nghệ thuật độc đáo, cuốn hút.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="font-bold text-base md:text-lg text-[#2D2D2D] dark:text-white">LIÊN HỆ</h3>
              <p className="text-sm md:text-base">📞 0867792106</p>
              <p className="text-sm md:text-base break-all">📧 dinhthithaolinh2106@gmail.com</p>
              <p className="text-sm md:text-base">📍 Quận 8, Thành Phố Hồ Chí Minh</p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h3 className="font-bold text-base md:text-lg text-[#2D2D2D] dark:text-white">HỌC VẤN</h3>
              <p className="font-semibold text-sm md:text-base">Thiết kế thời trang</p>
              <p className="text-sm md:text-base">Trường Đại học Tôn Đức Thắng</p>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">2022–2027</p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="font-bold text-base md:text-lg text-[#2D2D2D] dark:text-white">KỸ NĂNG</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.map(skill => (
                  <span key={skill} className="px-2 md:px-3 py-1 bg-[#FDEBD0] dark:bg-gray-700 text-[#7E5109] dark:text-gray-200 rounded-full text-xs md:text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image (Polaroid Style) */}
          <div className="relative rotate-2 transform hover:rotate-0 transition-transform duration-300 w-full md:w-auto flex justify-center md:justify-start">
            {/* Paperclip */}
            <div className="absolute -top-4 md:-top-6 right-8 md:right-10 w-6 h-12 md:w-8 md:h-16 z-10 opacity-70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-200">
                <path d="M16 6l-9 11a4 4 0 1 0 6 6l9-12a6 6 0 1 0 -9 -9l-8 10" />
              </svg>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 md:p-3 pb-8 md:pb-12 shadow-lg w-56 md:w-72">
              <img 
                src="/home/aboutme.png" 
                alt="Profile" 
                className="w-full h-auto object-cover filter sepia-[0.3]"
              />
            </div>
          </div>
        </div>
        
        {/* Activities */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] dark:text-white mb-4 md:mb-6">HOẠT ĐỘNG</h3>
          <div className="space-y-4">
            <p className="font-semibold">Dự án tình nguyện</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dự án Mùa Thu Cho Em tỉnh Bạc Liêu – Câu lạc bộ Sức Sống Trẻ.</li>
              <li>Dự án Vui Đêm Trăng – Ấm Nụ Cười tại Trường Tiểu học Mỹ Quý Đông – Tỉnh Long An.</li>
              <li>Dự án Ngày Của Bé tại Bệnh viện Nhi đồng 1 – Team Chiếc Bông.</li>
              <li>Lớp Học Tình Thương Cô Mươn ở tỉnh Sóc Trăng.</li>
              <li>Mái Ấm Thiện Duyên ở Củ Chi.</li>
              <li>Dự án Mang Nắng Về Bản tại làng Ya Ma – Tỉnh Gia Lai.</li>
            </ul>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 space-y-6 md:space-y-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] dark:text-white mb-4 md:mb-6">KINH NGHIỆM LÀM VIỆC</h3>
          
          {[
            { 
              role: "Stylist", 
              company: "Freelance", 
              date: "2024 - Present",
              description: "Thiết kế cho một số dự án nổi bật:",
              details: [
                "Bộ ảnh phong cách xe đua Vinfast cùng KOLS Thuận Nguyễn và Phương Anh Đào.",
                "TVC Toyota tại nền nhạc khoảnh khắc yêu thương.",
                "Bộ ảnh xe Vinfast Drgnfly cùng KOL Katleen.",
                "Báo cáo Beautyfamily của Bé Thiên Kim."
              ]
            },
            { 
              role: "Đội ngũ livestream", 
              company: "Van Anh Scarlet Design", 
              date: "2024–2025",
              details: [
                "Hậu trường livestream",
                "Makeup livestream",
                "Điều phối live"
              ]
            },
            { 
              role: "Sale Online / Quản lý kho", 
              company: "VAD Fashion", 
              date: "2024–2025",
              details: [
                "Quản lý kho",
                "Sản phẩm, bán sản phẩm, điều phối qua cho Kho Khách hàng",
                "Hỗ trợ livestream trên các nền tảng Tiktok, Fanpage và Shopee",
                "Stylist"
              ]
            },
            { 
              role: "Nhân viên hướng dẫn sự kiện làm Gốm", 
              company: "Gốm Concept", 
              date: "2024–2025",
              details: [
                "Giới thiệu và hỗ trợ khách hàng trong quá trình thực hiện",
                "Sắp xếp và vệ sinh khu vực bày trí"
              ]
            },
            { 
              role: "Giáo viên mỹ thuật", 
              company: "Up-talent", 
              date: "2023–2024",
              details: [
                "Dạy vẽ và hướng dẫn dạy theo chương trình giảng dạy của Trung tâm",
                "Vẽ và sinh hoạt lớp học",
                "Xem lại bài tập về nhà"
              ]
            },
            { 
              role: "Nhân viên hướng dẫn workshop", 
              company: "Hiền Concept", 
              date: "2022–2023",
              details: [
                "Giới thiệu và hỗ trợ khách hàng trong suốt quá trình",
                "Hướng dẫn khách hàng trong quá trình làm gốm",
                "Sắp xếp và vệ sinh khu vực workshop"
              ]
            },
            { 
              role: "Nhân viên bán hàng", 
              company: "Aristino", 
              date: "2021–2022",
              details: [
                "Tư vấn, hỗ trợ và bán sản phẩm",
                "Sắp xếp và trưng bày sản phẩm"
              ]
            },
          ].map((job, idx) => (
            <div key={idx} className="border-b border-[#E5E7EB] dark:border-gray-700 pb-4 md:pb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-lg md:text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-800 dark:text-white">{job.role}</h4>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-mono text-gray-400 dark:text-gray-500 mt-2 md:mt-0">{job.date}</span>
              </div>
              {job.description && (
                <p className="ml-0 md:ml-14 mb-2 text-sm md:text-base text-gray-600 dark:text-gray-400">{job.description}</p>
              )}
              {job.details && (
                <ul className="ml-0 md:ml-14 list-disc list-inside space-y-1 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

