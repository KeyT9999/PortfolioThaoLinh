import { RoomItem, Project, Painting, Certificate } from './types';

// Using picsum images to simulate the furniture assets from the original site
// In a real scenario, these would be transparent PNGs of the actual objects.
export const ROOM_ITEMS: RoomItem[] = [
  {
    id: 'window',
    name: 'Window',
    type: null, // Just visual
    top: '3%',
    left: '72%',
    width: '15%',
    height: '31%',
    image: '/home/window.png',
    zIndex: 1,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'resume',
    name: 'Resume',
    type: null, // Usually opens PDF or external link
    top: '15.5%',
    left: '37%',
    width: '7.5%',
    image: '/home/Resume.png', // Frame 1
    zIndex: 5,
    tooltip: 'Resume',
    isInteractable: true
  },
  {
    id: 'clock',
    name: 'Clock',
    type: null,
    top: '15.5%',
    left: '44.75%',
    width: '6%',
    image: '/home/dongho.png',
    zIndex: 5,
    tooltip: 'Clock (Click to start/stop)',
    isInteractable: true
  },
  {
    id: 'certs',
    name: 'Certifications',
    type: 'certifications',
    top: '15.5%',
    left: '51%',
    width: '7.5%',
    image: '/home/Certificate.png', // Frame 2
    zIndex: 5,
    tooltip: 'Certifications',
    isInteractable: true
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    type: null,
    top: '35%',
    left: '8%',
    width: '14%',
    image: '/home/bookshelf.png',
    zIndex: 10,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'phone',
    name: 'Contact',
    type: 'contact',
    top: '30%',
    left: '16%',
    width: '5%',
    image: '/home/phone.png',
    zIndex: 15,
    tooltip: 'Contact Me',
    isInteractable: true
  },
  {
    id: 'portrait',
    name: 'About',
    type: 'about',
    top: '27%',
    left: '11%',
    width: '4%',
    image: '/home/aboutme.png',
    zIndex: 16,
    tooltip: 'About Me',
    isInteractable: true
  },
  {
    id: 'lamp',
    name: 'Lamp',
    type: null,
    top: '25%',
    left: '22%',
    width: '5%',
    height: '35%',
    image: '/home/CayDen.png',
    zIndex: 8,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'sofa',
    name: 'Sofa',
    type: null,
    top: '40%',
    left: '30%',
    width: '40%',
    image: '/home/sofa.png',
    zIndex: 5,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'table',
    name: 'Projects',
    type: 'projects',
    top: '60%',
    left: '32%',
    width: '34%',
    image: '/home/table-2.png',
    zIndex: 20,
    tooltip: 'My Projects',
    isInteractable: true
  },
  {
    id: 'tea',
    name: 'Tea',
    type: null,
    top: '75%',
    left: '17%',
    width: '4%',
    image: '/home/cup.png',
    zIndex: 25,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'easel',
    name: 'Paintings',
    type: 'paintings',
    top: '40%',
    left: '78%',
    width: '12%',
    image: '/home/BucTranh.png',
    zIndex: 10,
    tooltip: 'My Paintings',
    isInteractable: true
  },
  {
    id: 'newspaper',
    name: 'Articles',
    type: 'articles',
    top: '70%',
    left: '65%',
    width: '12%',
    image: '/home/BaiBao.png',
    zIndex: 30,
    tooltip: 'My Articles',
    isInteractable: true
  },
  {
    id: 'teapot-floor',
    name: 'Teapot',
    type: null,
    top: '68%',
    left: '20%',
    width: '10%',
    image: '/home/Teapot.png',
    zIndex: 21,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'curtain',
    name: 'Curtain',
    type: null,
    top: '2%',
    left: '66%',
    width: '15%',
    height: '31%',
    image: '/home/curtain.png',
    zIndex: 4,
    tooltip: '',
    isInteractable: false
  },
  {
    id: 'carpet',
    name: 'Carpet',
    type: null,
    top: '65%',
    left: '12%',
    width: '22%',
    image: '/home/carpet.png',
    zIndex: 19,
    tooltip: '',
    isInteractable: false
  }
];

export const PROJECTS: Project[] = [
  {
    title: "✨ Non Nước | Textile Project x NiNi ✨",
    category: "Textile Project",
    description: "Một hành trình tuyệt vời từ những ngọn núi và dòng hồ, nơi ánh sáng bình minh xuyên qua khe núi \"mắt thần\" – không gian huyền bí này là nguồn cảm hứng cho bộ sưu tập Non Nước. 🌄💖\n\nCảm ơn mọi người đã luôn đồng hành và hỗ trợ tôi, từ gia đình, thầy cô đến bạn bè.\n\nDự án này không chỉ là thời trang, mà là sự tôn vinh thiên nhiên, là ánh sáng đầu tiên của một hành trình mới. 🌿✨",
    image: "/nonnuoc/nonnuoc1.jpg",
    tags: ["Textile", "Fashion", "Nature"]
  },
  {
    title: "SILBER | Styling Project x NiNi",
    category: "Styling Project",
    description: "“SILBER” – Styling project x NiNi\n\nInstructor : Khiêm Nguyễn\nPhotographer : me\nModel : Nguyen Nhu Van Anh\nM.U.A & Hair : Trần Quang Tân\nAccessories : Val , Tun\nSupport : Phạm Khoa\n\n…………Special thanks…………….",
    image: "/SILBER/1.jpg",
    tags: ["Styling", "Fashion", "Photography"]
  },
  {
    title: "LAPIN MIGNON | NINI X KID PROJECT",
    category: "Kid Fashion Project",
    description: "BST Lấy cảm hứng từ nhân vật Thỏ Ngọc - một nhân vật hư cấu trong truyền thuyết gắn liền với văn hoá, với tết Trung Thu ( hay tết thiếu nhi ) của Việt Nam. Khoác lên mình bộ tranh phục LAPIN MIGNON, như khoác lên mình cả một câu chuyện, một tiểu thuyết đã gắn liền với biết bao nhiêu thế hệ trẻ em Việt Nam. Bên cạnh đó, Thỏ Ngọc còn là biểu tượng của sự ngây thơ, tinh nghịch và thuần khiết.\n\n————————————\nInstructor : Th.S Trần Nguyễn Tú Uyên\nLighting : Enter Studio\nPhotographer : Phạm Khoa\nModel : Nguyen Ngoc Tu Anh\nM.U.A & Hair : Bảo Phúc\nTailor : Trần Văn Cường\n\nQua đây, em cũng xin gửi lời cảm ơn chân thành nhất, biết ơn các anh các chị đã luôn nhiệt tình giúp đỡ đồng hành cùng em qua những bst, luôn biết ơn ba, mẹ, gia đình đã luôn bên cạnh ủng hộ con hết mình. Love all ❤️❤️❤️ .",
    image: "/LAPINMIGNON/1.jpg",
    tags: ["Kid Fashion", "Costume Design", "Culture"]
  },
  {
    title: "Sweet As Candy | Triển lãm BF29",
    category: "Styling & Exhibition",
    description: "Bước vào xứ sở kẹo ngọt là đặt chân vào khoảng trời lung linh sắc màu.\nThế giới ấy không chỉ ngập tràn vị ngọt mà còn lấp lánh những giấc mơ rực rỡ nhất của tuổi thơ…\n\nƯớc mơ được bước vào thế giới kẹo ngọt ngập tràn sắc hồng luôn hiện diện trong tâm trí mỗi nàng công chúa nhỏ, nuôi dưỡng tâm hồn trong trẻo và trí tưởng tượng bay bổng của các bé. Qua bàn tay tài hoa và lăng kính nghệ thuật của ekip Zim Lục, một thế giới nhỏ ngập tràn mộng mơ và trong trẻo đã được tạo ra, dành riêng cho cô bé “kẹo ngọt” Nguyễn Huỳnh Thiên Kim.\n\nMẫu nhí 4 tuổi hóa thân thành cô nàng tiểu thư lém lỉnh, tinh nghịch trong bữa tiệc sinh nhật đầy sắc màu. Bên Thỏ trắng – người bạn đồng hành đặc biệt, cô bé tiểu thư kẹo ngọt thỏa sức vui đùa, tận hưởng thế giới riêng đầy mộng mơ của mình.\n\nĐối lập với nét đẹp đáng yêu, tinh nghịch ấy là một Thiên Kim đầy bí ẩn, kiêu kỳ trong sắc đỏ lộng lẫy. Đúng như cái tên của mình, Thiên Kim mang đến hình tượng một nàng tiểu thư sắc nước hương trời, nhẹ nhàng như hoa nhưng cũng thật kiêu sa, đài các…\n\nPhotographer: MINH SƠN (ZIM LỤC)\nDesign & Stylist by: ĐINH THẢO LINH\nStylist Assistant: NGUYỄN THÙY LINH, HỒNG HẠNH\nM.U.A: PHÙNG NGỌC SƠN\nHair: BẢO PHÚC\nSupp: VŨ VĂN HUY",
    image: "/SweetAsCandy/1.jpg",
    tags: ["Exhibition", "Styling", "Kid Fashion"]
  },
  {
    title: "CERAMIC - GỐM | Fashion Project",
    category: "Fashion Design & Culture",
    description: "Gốm Cây Mai - Một dòng gốm có từ lâu đời ở Việt Nam nhưng đã bị thất truyền. Đã có nhiều nghệ nhân tìm cách phục dựng lại dòng gốm này nhưng tất cả nỗ lực đều không thể. Gốm Cây Mai hầu hết được phủ men độc đáo, thoạt nhìn thô mộc, nhưng ẩn chứa nét công phu trong chế tác, chuẩn trong tạo hình và hài hòa trong bô cục.\n\nGốm Cây Mai bước vào giai đoạn phát triển đỉnh cao từ cuối thế kỷ XIX và đầu thế kỷ XX với dòng gồm men màu. Trong đó hai màu chủ yếu là xanh lam, xanh cổ vịt; các màu bổ trợ là vàng, đen, nâu, nâu đỏ và trắng. Dòng gốm này có sự đa dạng về kiểu loại, phục vụ cho sinh hoạt như tô, chén, dĩa, muỗng...và đã góp phần hưng thịnh cho gốm sứ mỹ nghệ nước ta.\n\nBởi những nét đẹp xưa cổ, nét đặc trưng độc đáo, độc nhất vô nhị của loại gốm này đã tạo nên nguồn cảm hứng bất tận để bản thân mình thực hiện bộ sưu tập lần này.\n\n———————————————\nInstructor : TH.S Hoàng Xuân Sơn\nPhotographer : Phạm Khoa\nModel : Đỗ Đoan\nM.U.A & hair : Bảo Phúc\nTailor : Cường Nguyễn\nCeramic: Gom Concept\nSupport : Trinh Phuong Anh, Leighton Vo\nStudio : M.studio\n\n______Special Thanks______\nEm chân thành cảm ơn sự giúp đỡ to lớn đến từ gia đình , thầy cô , bạn bè - những người đã hỗ trợ và đồng hành cùng em trong project này ạ🥰🥰🥰\nĐặc biệt biết ơn đến Gom Concept - đơn vị đồng hành, hỗ trợ về gốm trong dự án lần này.",
    image: "/CERAMIC/1.jpg",
    tags: ["Fashion", "Ceramic", "Culture"]
  },
  {
    title: "UNIFORM PROJECT X VIETGANGZ GLAMPING CLUB",
    category: "Uniform Design & Branding",
    description: "Design by me\n\nBộ đồng phục dành cho nhân viên chăm sóc thú tại Vietgangz Glamping Club được thiết kế với phong cách trẻ trung, năng động, tối ưu cho công việc chăm sóc động vật trong khuôn viên Camping. Chất liệu co giãn mang lại sự thoải mái tối đa, giúp nhân viên dễ dàng vận động và tương tác với động vật.\n\nMàu sắc xanh rêu và nâu đất không chỉ hòa hợp với cảnh quan thiên nhiên mà còn giúp che vết bẩn, tạo nên vẻ ngoài chuyên nghiệp nhưng gần gũi. Logo Vietgangz đặt trên áo tinh tế hoàn thiện hình ảnh đồng phục, phản ánh đúng bản sắc thương hiệu.\n\n________________________________________\nInstructor: Th.S Khiêm Nguyễn\nModel: Nguyễn Nhung\nMake up & Hair: Bảo Phúc\nPhoto & Lighting: Xuân Khoa\nTailor: Cường Nguyễn\n\nEm xin chân thành cảm ơn thương hiệu Vietgangz Glamping Club SaiGon đã cho phép và hỗ trợ nhóm em trong quá trình thực hiện đồ án lần này.",
    image: "/VietgangzGlampingClub/1.jpg",
    tags: ["Uniform", "Branding", "Design"]
  }
];

export const PAINTINGS: Painting[] = [
  { id: 1, title: "River Flow", image: "https://picsum.photos/300/300?random=201" },
  { id: 2, title: "Horse in Field", image: "https://picsum.photos/300/400?random=202" },
  { id: 3, title: "Blue Bird", image: "https://picsum.photos/300/300?random=203" },
  { id: 4, title: "Sunset Tree", image: "https://picsum.photos/300/300?random=204" },
  { id: 5, title: "Cherry Blossoms", image: "https://picsum.photos/300/300?random=205" }
];

export const CERTIFICATES: Certificate[] = [
  { id: 1, title: "Advanced User Experience Design", issuer: "Udacity", image: "https://picsum.photos/400/300?random=301" },
  { id: 2, title: "Product Psychology", issuer: "Masterclass", image: "https://picsum.photos/400/300?random=302" },
  { id: 3, title: "Gamification", issuer: "Udemy", image: "https://picsum.photos/400/300?random=303" },
  { id: 4, title: "Churn Busting", issuer: "IxDF", image: "https://picsum.photos/400/300?random=304" }
];
