import { useState, useEffect, useCallback, useMemo } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

const API_KEY = 'your_key'; // 🔑 Замінити на свій ключ
const PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = useCallback(newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }, []);

  const handleImageClick = useCallback(imageURL => {
    setSelectedImage(imageURL);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const fetchImages = useCallback(async () => {
    if (!query) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );
      const data = await response.json();
      setImages(prev => [...prev, ...data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const canLoadMore = useMemo(() => images.length >= PER_PAGE, [images]);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && canLoadMore && (
        <Button onClick={() => setPage(prev => prev + 1)} />
      )}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}