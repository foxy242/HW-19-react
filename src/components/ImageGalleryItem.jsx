export default function ImageGalleryItem({ small, large, onClick }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(large)}>
      <img src={small} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}