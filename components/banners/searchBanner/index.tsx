import ResponsiveImage from '../../responsiveImage';

interface SearchBannerProps {
  categoryName: string;
  link1Name: string;
  link1DestinationUrl: string;
  link2Name: string;
  link2DestinationUrl: string;
  link3Name: string;
  link3DestinationUrl: string;
  link4Name: string;
  link4DestinationUrl: string;
  link5Name: string;
  link5DestinationUrl: string;
  link6Name: string;
  link6DestinationUrl: string;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  backgroundImage: string;
  altTagDescription: string;
}

const SearchBanner = ({
  categoryName,
  mobileImage,
  tabletImage,
  desktopImage,
  backgroundImage,
  altTagDescription,
  ...rest
}: SearchBannerProps): JSX.Element => {
  const values: { [name: string]: string } = { ...rest };
  const links = [...Array(6)].map((_, i) => ({
    name: values[`link${i + 1}Name`],
    destination: values[`link${i + 1}DestinationUrl`],
  }));

  return (
    <div className="banner banner--border banner--var5 banner--level3">
      <div
        className="banner__wrapper"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="banner__content-wrapper">
          <div className="banner__content">
            <p className="banner__deal">
              <span className="banner__deal-text">{categoryName}</span>
            </p>
            <div className="banner__content--inner">
              <ul className="banner__bullets--search">
                {links.map(({ name, destination }) => (
                  <li key={name}>
                    <a href={destination}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="banner__img-align">
          <ResponsiveImage
            images={[mobileImage, tabletImage, desktopImage]}
            className="banner__img"
            alt={altTagDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
