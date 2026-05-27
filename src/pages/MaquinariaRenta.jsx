import EquipmentPage from "../components/sections/EquipmentPage";
import { machinery } from "../data/equipment";

export default function MaquinariaRenta() {
  return (
    <EquipmentPage
      category="MAQUINARIA"
      heroImage="/images/IMG_0421.PNG"
      rentaItems={machinery}
      ventaItems={[]}
      activeTab="renta"
      rentaPath="/maquinaria/renta"
      ventaPath="/maquinaria/venta"
      breadcrumb="Maquinaria"
    />
  );
}
