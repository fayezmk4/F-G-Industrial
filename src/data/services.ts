import {
  Droplets,
  Layers,
  Wrench,
  Anchor,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
  image: string;
};

export const services: ServiceCategory[] = [
  {
    id: 'waterproofing',
    title: 'Waterproofing & Damp Proofing',
    icon: Droplets,
    description:
      'Comprehensive waterproofing systems for rooftops, basements, and critical infrastructure.',
    items: [
      'Roof top waterproofing',
      'Basement waterproofing',
      'Planter box waterproofing',
      'Crystalline waterproofing',
      'Cementitious waterproofing',
      'Polyurethane waterproofing',
      'Acrylic waterproofing',
      'Bituminous / HDPE membranes',
    ],
    image:
      'https://images.pexels.com/photos/31762405/pexels-photo-31762405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'flooring',
    title: 'Industrial Flooring',
    icon: Layers,
    description:
      'High-performance flooring solutions engineered for industrial and commercial environments.',
    items: [
      'PU (Polyurethane) flooring',
      'Epoxy flooring',
      '3D decorative flooring',
      'Self-leveling cement flooring',
      'Polished concrete',
      'Floor hardening systems',
    ],
    image:
      'https://images.pexels.com/photos/36230779/pexels-photo-36230779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'repair',
    title: 'Repair & Retrofitting',
    icon: Wrench,
    description:
      'Structural repair and strengthening solutions for damaged and aging infrastructure.',
    items: [
      'Crack injection',
      'Structural repair',
      'Steel plate bonding',
      'RCC repair & retrofitting',
      'CFRP (Carbon Fiber) retrofitting',
    ],
    image:
      'https://images.pexels.com/photos/11849379/pexels-photo-11849379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'grouting',
    title: 'Grouting & Anchoring',
    icon: Anchor,
    description:
      'Precision grouting and anchoring systems for structural stability and load transfer.',
    items: [
      'Non-shrink cementitious grouting',
      'Re-bar anchoring',
      'Expansion joint sealants',
      'Epoxy grouting',
    ],
    image:
      'https://images.pexels.com/photos/36162728/pexels-photo-36162728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'coatings',
    title: 'Protective Coatings',
    icon: Shield,
    description:
      'Advanced protective coatings for surface durability against heat, water, and corrosion.',
    items: [
      'Heat-reflective coatings',
      'Anti-carbonation coatings',
      'Water repellent coatings',
      'EPDM coatings',
      'Fireproof coatings',
    ],
    image:
      'https://images.pexels.com/photos/26953859/pexels-photo-26953859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const serviceCategories = [
  'Waterproofing & Damp Proofing',
  'Industrial Flooring',
  'Repair & Retrofitting',
  'Grouting & Anchoring',
  'Protective Coatings',
  'General Inquiry',
];
