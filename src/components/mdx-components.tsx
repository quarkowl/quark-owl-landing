import * as React from 'react';
import ProjectCard from './project-card';
import TechnologyList from './technology-list/TechnologyList';
import ContactForm from "./contact-form/ContactForm";

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  TechnologyList: ({ props }: any) => <TechnologyList {...props} />,
  ContactForm: ({ props }: any) => <ContactForm {...props} />,
};

export default MdxComponents;
