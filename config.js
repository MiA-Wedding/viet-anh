/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Quốc Việt   ",
  brideName: "Vân Anh",

  weddingDate: "12/27/2025  10:00:00",
  location: "Xuân Hoà, Thái Thụy, Thái Bình  ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/2iUi9Qjq3qdwQdQe9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5290.650730578113!2d106.53418339999999!3d20.4646687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135f8076cb6b659%3A0x16f2a563cab6c3c4!2zR2nDoW8geOG7qSBYdcOibiBIw7Jh!5e1!3m2!1svi!2s!4v1765742908839!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/WFexfcpC2L4",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Quốc Việt  ",
      parents: "Bố: Đỗ Duy Khương <br>Mẹ: Lê Thị Uy",
      address: "Địa chỉ: Xóm 1 Thôn Xuân Hoà Xã Thái Thọ  Huyện Thái Thuỵ Tỉnh  Thái Bình	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Vân Anh",
      parents: "Bố: Đinh Văn Vinh<br>Mẹ: Nguyễn Thị Thắm ",
      address: "Địa chỉ: Thôn Long Châu- Miếu Phường - Chương Mỹ - Thành Phố Hà Nội "
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "Nhà Trai - PHAM QUOC VIET ", info: "MB bank - 44998866886668"},
    {src: "assets/QR02.jpg", title: "Nhà Gái - DINH THI VAN ANH", info: "Vietcombank - 1058348991"}
  ],
};
