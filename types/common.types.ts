export interface Image {
  src: string;
  alt: string;
}

export interface ObjectImage {
  src: string;
  alt: string;
  type: string;
}

export interface DetailItem {
  title: string;
  text: string;
}

export type ProjectType = 'github' | 'gitlab' | 'bitbucket';

export interface ProjectItem {
  type: ProjectType;
  info: {
    name: string;
    description: string;
    url: string;
  };
  stack?: string[];
}
