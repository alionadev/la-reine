import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";

export type Dress = {
  id: string;
  name: string;
  number: string;
  style: "Modern" | "Clasic" | "Boho" | "Minimal";
  silhouette: "Sirenă" | "Linie A" | "Coloană" | "Princess";
  image: string;
  description: string;
  span?: "tall" | "wide" | "normal";
};

export const dresses: Dress[] = [
  {
    id: "epure",
    name: "Épure",
    number: "N°01",
    style: "Minimal",
    silhouette: "Coloană",
    image: dress1,
    description:
      "O siluetă sculpturală, definită prin linii precise și echilibru perfect. Creată pentru o apariție sigură, fără exces.",
    span: "tall",
  },
  {
    id: "silhouette",
    name: "Silhouette",
    number: "N°02",
    style: "Modern",
    silhouette: "Sirenă",
    image: dress2,
    description:
      "O conturare fluidă a corpului, completată de un decolteu deschis pe spate. Senzualitate purtată cu rezervă.",
    span: "tall",
  },
  {
    id: "noblesse",
    name: "Noblesse",
    number: "N°03",
    style: "Clasic",
    silhouette: "Linie A",
    image: dress3,
    description:
      "O reinterpretare contemporană a clasicului. Mătase grea, croială impecabilă, prezență fără efort.",
    span: "tall",
  },
  {
    id: "voile",
    name: "Voile",
    number: "N°04",
    style: "Modern",
    silhouette: "Princess",
    image: dress4,
    description:
      "Detalii care șoptesc. Tul fin și accente discrete pentru o miresă care alege să fie remarcată prin nuanțe.",
    span: "wide",
  },
  {
    id: "noir-blanc",
    name: "Noir Blanc",
    number: "N°05",
    style: "Modern",
    silhouette: "Coloană",
    image: dress5,
    description:
      "Editorial. Direct. Pentru femeia care înțelege puterea unei prezențe construite din contrast și încredere.",
    span: "tall",
  },
  {
    id: "jardin",
    name: "Jardin",
    number: "N°06",
    style: "Boho",
    silhouette: "Linie A",
    image: dress6,
    description:
      "Romantism contemporan. Dantelă fină, umeri lăsați, lumină de seară. Un poem purtat.",
    span: "tall",
  },
];

export const styles = ["Toate", "Modern", "Clasic", "Boho", "Minimal"] as const;
export const silhouettes = [
  "Toate",
  "Sirenă",
  "Linie A",
  "Coloană",
  "Princess",
] as const;
