import type { Region } from "app/lib/types";
import SolarCalculatorClient from "./CalculatorClient";

export default function SolarCalculatorPage() {
   const regions: Region[] = JSON.parse(process.env.REGIONS_DATA || "[]");

   return <SolarCalculatorClient regions={regions} />;
}
