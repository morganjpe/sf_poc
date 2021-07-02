import { Page } from '@bloomreach/spa-sdk';

export const getProductGalleryData = (ref: string, page: Page): any => {
  const content = page.getContent(ref);

  if (content) {
    const data = content.getData();

    return [...Array(3)].map((_, index) => {
      const doc = data[`product${index + 1}`];
      if (doc) {
        return {
          ...page.getContent(doc.$ref)?.getData(),
          docRef: doc.$ref,
        };
      }

      return [];
    });
  }

  return null;
};

export const _ = {};
