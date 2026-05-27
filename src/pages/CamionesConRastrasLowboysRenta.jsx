import EquipmentPage from "../components/sections/EquipmentPage";
import { trucks } from "../data/equipment";

export default function CamionesConRastrasLowboysRenta() {
  return (
    <EquipmentPage
      category="CAMIONES Y LOWBOYS"
      heroImage="/images/gruacamion1.jpg"
      rentaItems={trucks}
      ventaItems={[]}
      activeTab="renta"
      rentaPath="/camiones/renta"
      ventaPath="/camiones/venta"
      breadcrumb="Camiones"
    />
  );
}
