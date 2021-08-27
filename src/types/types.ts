export type CardTeamProps = {
  name: string;
  role: string;
  path: string;
};

export type FichaTecnicaProps = {
  name: string;
  role: string;
};



export type CampanhaProps = {
  titulo: string;
  texto: string;
  ficha: FichaTecnicaProps[];
};





export type CarrouselProps = {
  slug: string;
  title: string;
  summary: string;
  path: string;
  type: "image" | "video";
};
