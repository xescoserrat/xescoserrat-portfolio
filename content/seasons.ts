import archive from './koroshi-archive.json';

export const seasons = [
  { slug: 'ss26', title: 'SS26', name: 'Spring–Summer 2026', cover: '2611mc74' },
  { slug: 'aw26-27', title: 'AW26–27', name: 'Autumn–Winter 2026–27', cover: '2621su10' },
  { slug: 'ss27', title: 'SS27', name: 'Spring–Summer 2027', cover: '2711su34' },
];
export const designs = archive;
export function collection(slug: string) { return designs.filter(p => p.season === slug); }
