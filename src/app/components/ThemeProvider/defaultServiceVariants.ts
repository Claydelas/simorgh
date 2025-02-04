// This is to support local 404 and 500 pages for services with variants.
// For example, http://localhost:7080/serbian/500 does not include the variant in the path so we must define a default variant.
// NB These routes do not exist on live. They are for dev and testing purposes.
const defaultServiceVariants: { [index: string]: any } = {
  serbian: 'cyr',
  ukchina: 'simp',
  zhongwen: 'simp',
};

export default defaultServiceVariants;
