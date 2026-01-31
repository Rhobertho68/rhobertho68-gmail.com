export interface Property {
  id: number;
  title: string;
  category: 'Apartamento' | 'Lote' | 'Local Comercial';
  price: string;
  location: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}