export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

export const projectCategories = [
  'All',
  'Waterproofing',
  'Flooring',
  'Coatings',
  'Repair & Retrofitting',
  'Infrastructure',
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Industrial Coating Application',
    category: 'Coatings',
    image: '/images/2e079061-841c-4b9e-8d6c-846c0483b862.JPG',
    description:
      'Protective coating system applied on an industrial structure for durability and weather resistance.',
  },
  {
    id: 'p2',
    title: 'Surface Preparation & Treatment',
    category: 'Coatings',
    image: '/images/5f32152a-4b13-407c-ac47-cf69e62d61bb.JPG',
    description:
      'Surface preparation and chemical treatment for a large-scale industrial facility.',
  },
  {
    id: 'p3',
    title: 'Construction Chemical Application',
    category: 'Infrastructure',
    image: '/images/c26b9d6e-0792-49c1-b7ad-a81ed6c15f83.JPG',
    description:
      'On-site construction chemical application for an infrastructure development project.',
  },
  {
    id: 'p4',
    title: 'Industrial Floor Coating',
    category: 'Flooring',
    image: '/images/eff65df6-6718-4cb7-9619-077edf6b0a1b.JPG',
    description:
      'High-performance floor coating system for a heavy-duty industrial space.',
  },
  {
    id: 'p5',
    title: 'Structural Repair Project',
    category: 'Repair & Retrofitting',
    image: '/images/fba8d362-3f7e-40b4-a37c-c8a03bbc06d3.JPG',
    description:
      'Structural repair and strengthening work using specialized construction chemicals.',
  },
  {
    id: 'p6',
    title: 'Waterproofing System',
    category: 'Waterproofing',
    image:
      'https://images.pexels.com/photos/31762405/pexels-photo-31762405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Polyurethane and acrylic membrane system for rooftop waterproofing and heat reflection.',
  },
  {
    id: 'p7',
    title: 'Industrial Epoxy Floor',
    category: 'Flooring',
    image:
      'https://images.pexels.com/photos/36230779/pexels-photo-36230779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'High-gloss epoxy flooring installation in an industrial facility for chemical and wear resistance.',
  },
  {
    id: 'p8',
    title: 'Crack & Leakage Repair',
    category: 'Repair & Retrofitting',
    image:
      'https://images.pexels.com/photos/14887766/pexels-photo-14887766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Epoxy crack injection and structural repair to restore concrete integrity and prevent water ingress.',
  },
  {
    id: 'p9',
    title: 'Pipeline Protective Coating',
    category: 'Coatings',
    image:
      'https://images.pexels.com/photos/26953859/pexels-photo-26953859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Anti-corrosion and protective coating application for industrial pipelines.',
  },
  {
    id: 'p10',
    title: 'Basement Waterproofing',
    category: 'Waterproofing',
    image:
      'https://images.pexels.com/photos/7108783/pexels-photo-7108783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Cementitious and crystalline waterproofing system for below-grade basement structures.',
  },
  {
    id: 'p11',
    title: 'Concrete Floor Hardening',
    category: 'Flooring',
    image:
      'https://images.pexels.com/photos/36217330/pexels-photo-36217330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Floor hardening and self-leveling cement application for a heavy-duty industrial space.',
  },
  {
    id: 'p12',
    title: 'Structural Retrofitting',
    category: 'Repair & Retrofitting',
    image:
      'https://images.pexels.com/photos/11849379/pexels-photo-11849379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'CFRP retrofitting and structural strengthening for an industrial concrete structure.',
  },
];
