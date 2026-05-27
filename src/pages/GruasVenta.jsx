import EquipmentPage from "../components/sections/EquipmentPage";
import { cranes } from "../data/equipment";

export default function GruasVenta() {
  return (
    <EquipmentPage
      category="GRÚAS"
      heroImage="/images/grualiebherr10501.jpg"
      rentaItems={cranes}
      ventaItems={[]}
      activeTab="venta"
      rentaPath="/gruas/renta"
      ventaPath="/gruas/venta"
      breadcrumb="Grúas"
    />
  );
}
