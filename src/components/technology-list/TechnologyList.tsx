import * as React from 'react';
import './techList.css';

const technologies = [
  { src: 'typescript-logo.svg', alt: 'TypeScript', label: 'TypeScript' },
  { src: 'react-logo.svg', alt: 'React', label: 'React' },
  { src: 'nextjs-logo.svg', alt: 'Next.js', label: 'Next.js' },
  { src: 'python-logo.svg', alt: 'Python', label: 'Python' },
  { src: 'pytorch-icon.svg', alt: 'PyTorch', label: 'PyTorch' },
  { src: 'docker-logo.svg', alt: 'Docker', label: 'Docker' },
  { src: 'kubernetes-logo.svg', alt: 'Kubernetes', label: 'Kubernetes' },
  { src: 'postgresql-logo.svg', alt: 'PostgreSQL', label: 'PostgreSQL' },
];

const TechnologyList = () => (
  <div className={'gridContainer'}>
    {technologies.map(({ src, alt, label }) => (
      <div key={label} className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src={src} alt={alt} />
          <h6 className={'title'}>{label}</h6>
        </div>
      </div>
    ))}
  </div>
);

export default TechnologyList;
