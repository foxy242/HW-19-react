import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          small={webformatURL}
          large={largeImageURL}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
}