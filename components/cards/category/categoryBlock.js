import Link from 'next/link';

const categoryBlock = ({ backgroundColor, caption, image, id, textColor }) => (
  <div key={id} className="mt__item" style={{ backgroundColor }}>
    <Link href="/" className="cat-link" title={`View all ${caption}`}>
      <div>
        <div className="mt__item-img">
          <img src={image} alt={caption} className="fill" />
        </div>
        <div className="mt__item-title">
          <div style={{ color: textColor }} className="h3">
            {caption}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default categoryBlock;
