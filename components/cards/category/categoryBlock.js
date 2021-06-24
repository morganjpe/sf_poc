import Link from 'next/link';
import ResponsiveImage from '../../responsiveImage';

const categoryBlock = ({
  containerColor,
  desktopImage,
  tabletImage,
  mobileImage,
  displayName,
  textColor,
  categoryText,
  destinationUrl,
}) => (
  <div
    className="mt__item"
    style={{ backgroundColor: containerColor.length ? containerColor : '' }}
  >
    <Link
      href={destinationUrl}
      className="cat-link"
      title={`View all ${displayName}`}
    >
      <div>
        <div className="mt__item-img">
          <ResponsiveImage
            images={[desktopImage, tabletImage, mobileImage]}
            alt={displayName}
            className="fill"
          />
        </div>
        <div className="mt__item-title">
          <div
            style={{ color: textColor.length ? textColor : '' }}
            className="h3"
          >
            {categoryText}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

// const categoryBlock = ({ backgroundColor, caption, image, id, textColor }) => (
//   <div key={id} className="mt__item" style={{ backgroundColor }}>
//     <Link href="/" className="cat-link" title={`View all ${caption}`}>
//       <div>
//         <div className="mt__item-img">
//           <img src={image} alt={caption} className="fill" />
//         </div>
//         <div className="mt__item-title">
//           <div style={{ color: textColor }} className="h3">
//             {caption}
//           </div>
//         </div>
//       </div>
//     </Link>
//   </div>
// );

export default categoryBlock;

// CGcpfTBpvqaONxarfJuCqseyVogYLlCmSeHkMDQNYclXmfnUbTkkUEqGrNhqoIaa
