export interface ImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
    onClick?: () => void;
  }
  
  export interface ImageContainerProps {
    images: ImageProps[];
    layout?: 'grid' | 'carousel';
  }
  