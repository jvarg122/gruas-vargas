import EquipmentPage from "../components/sections/EquipmentPage";
import { accessories } from "../data/equipment";

export default function Accesorios() {
  return (
    <EquipmentPage
      category="ACCESORIOS"
      heroImage="/images/service-bg.jpg"
      rentaItems={accessories}
      ventaItems={[]}
      activeTab="renta"
      rentaPath="/accesorios"
      breadcrumb="Accesorios"
    />
  );
}
