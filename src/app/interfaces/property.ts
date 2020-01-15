export interface Property {
  title: string;
  category: string;
  surface: string;
  rooms: string;
  description?: string;     // LE (?) : CHAMP N'EST PAS OBLIGATOIR
  price: string;
  sold: boolean;
  photo?: string;            // LE (?) : CHAMP N'EST PAS OBLIGATOIR
}
