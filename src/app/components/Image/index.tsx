import React from 'react';
import Helmet from 'react-helmet';
import { createSrcsets } from '../../lib/utilities/srcSet';

interface Props {
  alt: string;
  src: string;
  originCode: string;
  originalImageWidth: number;
  imageResolutions: number[];
  sizes: string;
  lazyLoad?: boolean;
  preload?: boolean;
}

const Image = ({
  src,
  alt,
  originCode,
  originalImageWidth,
  imageResolutions,
  sizes = '100vw',
  lazyLoad = false,
  preload = false,
}: Props) => {
  const { primarySrcset, primaryMimeType, fallbackSrcset, fallbackMimeType } =
    createSrcsets({
      originCode,
      locator: src,
      originalImageWidth,
      imageResolutions,
    });

  return (
    <>
      {preload && (
        <Helmet>
          <link
            rel="preload"
            as="image"
            href={src}
            imagesrcset={primarySrcset}
            imagesizes={sizes}
          />
        </Helmet>
      )}
      <picture>
        {primarySrcset && (
          <source
            srcSet={primarySrcset}
            type={primaryMimeType || 'image/webp'}
            sizes={sizes}
          />
        )}
        {fallbackSrcset && (
          <source
            srcSet={fallbackSrcset}
            type={fallbackMimeType || 'image/jpeg'}
            sizes={sizes}
          />
        )}
        <img src={src} alt={alt} loading={lazyLoad ? 'lazy' : undefined} />
      </picture>
    </>
  );
};

export default Image;
