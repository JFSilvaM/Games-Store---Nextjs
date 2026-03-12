import {
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export const barTrustData = [
  {
    id: 0,
    icon: <TruckIcon className="size-11 text-orange-600" />,
    title: "Súper rápido",
    description: "Entrega en 24/48 horas",
  },
  {
    id: 1,
    icon: <ShieldCheckIcon className="size-11 text-orange-600" />,
    title: "Fiable y seguro",
    description: "Más de 10,000 juegos",
  },
  {
    id: 2,
    icon: <ChatBubbleLeftRightIcon className="size-11 text-orange-600" />,
    title: "Atención al cliente",
    description: "Agente disponible 24/7",
  },
];
