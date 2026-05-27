import EquipmentPage from "../components/sections/EquipmentPage";
import { forklifts } from "../data/equipment";

export default function MontacargasRenta() {
  return (
    <EquipmentPage
      category="MONTACARGAS"
      heroImage="/images/IMG_0419.PNG"
      rentaItems={forklifts}
      ventaItems={[]}
      activeTab="renta"
      rentaPath="/montacargas/renta"
      ventaPath="/montacargas/venta"
      breadcrumb="Montacargas"
    />
  );
}
