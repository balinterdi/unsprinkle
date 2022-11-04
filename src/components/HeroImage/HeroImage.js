import styled from 'styled-components/macro';

const HeroImage = () => {
  return (
    <Picture>
      <source
        type="image/avif"
        srcSet="
          /images/hero-img.avif 1x,
          /images/hero-img@2x.avif 2x,
          /images/hero-img@3x.avif 3x
        "
      />
      <source
        type="image/jpeg"
        srcSet="
          /images/hero-img.jpg 1x,
          /images/hero-img@2x.jpg 2x,
          /images/hero-img@3x.jpg 3x
        "
      />
      <Image
        alt="An example of the photos distributed through this site (a blue-eyed cat)"
        src="/images/hero-img.jpg" 
      />
    </Picture>
  );
};

const Picture = styled.picture`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

export default HeroImage;