import EquipmentPage from "../components/sections/EquipmentPage";
import { trucks } from "../data/equipment";

export default function CamionesConRastrasLowboysVenta() {
  return (
    <EquipmentPage
      category="CAMIONES Y LOWBOYS"
      heroImage="/images/gruacamion1.jpg"
      rentaItems={trucks}
      ventaItems={[]}
      activeTab="venta"
      rentaPath="/camiones/renta"
      ventaPath="/camiones/venta"
      breadcrumb="Camiones"
    />
  );
}
