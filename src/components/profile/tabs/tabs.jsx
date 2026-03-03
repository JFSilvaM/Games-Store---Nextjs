import Settings from "@/components/profile/tabs/components/settings";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const tabsInfo = [
  {
    title: "Mis pedidos",
    content: <p>Contenido de mis pedidos</p>,
  },
  {
    title: "Lista de deseos",
    content: <p>Contenido de lista de deseos</p>,
  },
  {
    title: "Direcciones",
    content: <p>Contenido de direcciones</p>,
  },
  {
    title: "Ajustes",
    content: <Settings />,
  },
];

const Tabs = () => (
  <TabGroup className="my-12">
    <TabList className="flex">
      {tabsInfo.map((tab) => (
        <div key={tab.title} className="flex w-full justify-center">
          <Tab className="w-full cursor-pointer justify-between border-b border-neutral-600 outline-none hover:text-orange-600 data-selected:border-b data-selected:border-orange-600 data-selected:text-orange-600">
            {tab.title}
          </Tab>
        </div>
      ))}
    </TabList>

    <TabPanels className="mt-4">
      {tabsInfo.map((content) => (
        <TabPanel key={content.title}>{content.content}</TabPanel>
      ))}
    </TabPanels>
  </TabGroup>
);

export default Tabs;
