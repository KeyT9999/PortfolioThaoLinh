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
    title: "Bộ ảnh phong cách xe đua Vinfast",
    category: "Styling",
    description: "Thiết kế và styling cho bộ ảnh phong cách xe đua Vinfast cùng KOLS Thuận Nguyễn và Phương Anh Đào. Tạo nên concept độc đáo, thể hiện phong cách năng động và hiện đại.",
    image: "https://picsum.photos/600/400?random=101",
    tags: ["Styling", "Fashion"]
  },
  {
    title: "TVC Toyota - Khoảnh khắc yêu thương",
    category: "Styling",
    description: "Thiết kế styling cho TVC Toyota tại nền nhạc khoảnh khắc yêu thương. Tạo nên không gian ấm áp, gần gũi và đầy cảm xúc.",
    image: "https://picsum.photos/600/400?random=102",
    tags: ["Styling", "Commercial"]
  },
  {
    title: "Bộ ảnh xe Vinfast Drgnfly",
    category: "Styling",
    description: "Styling cho bộ ảnh xe Vinfast Drgnfly cùng KOL Katleen. Concept hiện đại, sang trọng và đầy cá tính.",
    image: "https://picsum.photos/600/400?random=103",
    tags: ["Styling", "Fashion"]
  },
  {
    title: "Báo cáo Beautyfamily - Bé Thiên Kim",
    category: "Styling",
    description: "Thiết kế styling cho báo cáo Beautyfamily của Bé Thiên Kim. Tạo nên phong cách trẻ trung, ngọt ngào và đáng yêu.",
    image: "https://picsum.photos/600/400?random=104",
    tags: ["Styling", "Beauty"]
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
