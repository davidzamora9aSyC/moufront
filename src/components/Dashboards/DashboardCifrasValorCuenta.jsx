import DashboardCifras from "./DashboardCifras";

function DashboardCifrasValorCuenta() {
    return (
        <div >
        <DashboardCifras titles={["Valor neto de la cuenta en el tiempo","Valor neto por tipo de activo"]} value="5.2%" />

        </div>
    );

}
export default DashboardCifrasValorCuenta;