// The page's sections, in order. The top navigation and the footer read this list,
// so renaming or reordering a section happens here and nowhere else.
export const sections = [
  { id: 'problem', name: 'Problem' },
  { id: 'product', name: 'Product' },
  { id: 'why', name: 'Why ArcWatch' },
  { id: 'progress', name: 'Progress' },
  { id: 'team', name: 'Team' },
  { id: 'contact', name: 'Contact' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
