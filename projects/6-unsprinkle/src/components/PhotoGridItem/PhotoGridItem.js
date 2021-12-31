import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <ImageWrapper>
          <ResponsiveImage src={src} alt={alt} />
        </ImageWrapper>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

function ResponsiveImage({ src, alt }) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`
          ${src}.avif 1x,
          ${src}@2x.avif 2x,
          ${src}@3x.avif 3x,
        `}
      />
      <source
        type="image/jpg"
        srcSet={`
          ${src}.jpg 1x,
          ${src}@2x.jpg 2x,
          ${src}@3x.jpg 3x,
        `}
      />
      <Image alt={alt} src={`${src}.jpg`} />
    </picture>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  display: flex;
  flex-wrap: nowrap;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default PhotoGridItem;
