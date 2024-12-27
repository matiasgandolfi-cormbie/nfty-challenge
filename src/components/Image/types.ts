export interface ImageViewProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  onClick?: () => void;
}

export interface ImageContainerProps {
  type?: 'single' | 'grid' | 'carousel';
  images?: ImageViewProps[];
  src?: string;
  alt?: string; 
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  onClick?: () => void;
}
