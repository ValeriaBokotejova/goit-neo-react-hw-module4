import css from "./ImageCard.module.css";

const ImageCard = ({ image, onSelect }) => {
  return (
    <div onClick={() => onSelect(image)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
