import { Page } from '@bloomreach/spa-sdk';

export const getProductGalleryData = (ref: string, page: Page): any => {
  const content = page.getContent(ref);

  if (content) {
    const data = content.getData();

    return [...Array(3)].map((_, index) => {
      const docRef = data[`product${index + 1}`].$ref;
      return {
        ...page.getContent(docRef)?.getData(),
        docRef,
      };
    });
  }

  return null;
};

export const _ = {};
