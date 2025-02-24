import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.card} key={image.id}>
          <ImageCard image={image} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
