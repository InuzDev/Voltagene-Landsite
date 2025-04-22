"use client"

// TODO: we need to make a list of regions that shows the ammount of sun light.

import { Button } from "app/components/ui/button"
import { Card } from "app/components/ui/card"
import { Input } from "app/components/ui/input"
import { Label } from "app/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'app/components/ui/select'
import { Calculator, Sun, Zap } from "lucide-react"
import { useState } from "react"

// Solar panel data (power in watts)

// We need to ask for the real power, name and ID. Call the grown team.
const SOLAR_PANELS = [
   { id: "eco100", name: "EcoSolar 100W", power: 100 },
   { id: "eco200", name: "EcoSolar 200W", power: 200 },
   { id: "eco300", name: "EcoSolar 300W", power: 300 },
   { id: "eco400", name: "EcoSolar 400W", power: 400 },
   { id: "premium500", name: "Premium Solar 500W", power: 500 },
   { id: "premium600", name: "Premium Solar 600W", power: 600 },
]

// Location of each region in Dominican Republic

// We also need a dropdown menu that combines with the actual design.
const REGIONS = [
   { id: 'azua', regionName: 'Azua', sunhours: 8.2 },
   { id: 'bahoruco', regionName: 'Bahoruco', sunhours: 8.0 },
   { id: 'barahona', regionName: 'Barahona', sunhours: 8.3 },
   { id: 'dajabon', regionName: 'Dajabón', sunhours: 8.1 },
   { id: 'distritoNacional', regionName: 'Distrito Nacional', sunhours: 8.1 },
   { id: 'duarte', regionName: 'Duarte', sunhours: 8.4 },
   { id: 'elSeibo', regionName: 'El Seibo', sunhours: 8.5 },
   { id: 'eliasPina', regionName: 'Elías Piña', sunhours: 8.0 },
   { id: 'espaillat', regionName: 'Espaillat', sunhours: 8.3 },
   { id: 'hatoMayor', regionName: 'Hato Mayor', sunhours: 8.4 },
   { id: 'independencia', regionName: 'Independencia', sunhours: 8.1 },
   { id: 'laAltagracia', regionName: 'La Altagracia', sunhours: 8.7 },
   { id: 'laRomana', regionName: 'La Romana', sunhours: 8.6 },
   { id: 'laVega', regionName: 'La Vega', sunhours: 8.4 },
   { id: 'mariaTrinidadSanchez', regionName: 'María Trinidad Sánchez', sunhours: 8.3 },
   { id: 'monseñorNouel', regionName: 'Monseñor Nouel', sunhours: 8.2 },
   { id: 'monteCristi', regionName: 'Monte Cristi', sunhours: 8.5 },
   { id: 'montePlata', regionName: 'Monte Plata', sunhours: 8.2 },
   { id: 'pedernales', regionName: 'Pedernales', sunhours: 8.6 },
   { id: 'peravia', regionName: 'Peravia', sunhours: 8.3 },
   { id: 'puertoPlata', regionName: 'Puerto Plata', sunhours: 7.4 },
   { id: 'samana', regionName: 'Samaná', sunhours: 7.5 },
   { id: 'sanchezRamirez', regionName: 'Sánchez Ramírez', sunhours: 8.2 },
   { id: 'sanCristobal', regionName: 'San Cristóbal', sunhours: 8.1 },
   { id: 'sanJoseDeOcoa', regionName: 'San José de Ocoa', sunhours: 8.0 },
   { id: 'sanJuan', regionName: 'San Juan', sunhours: 8.3 },
   { id: 'sanPedroDeMacoris', regionName: 'San Pedro de Macorís', sunhours: 8.4 },
   { id: 'santiago', regionName: 'Santiago', sunhours: 8.4 },
   { id: 'santiagoRodriguez', regionName: 'Santiago Rodríguez', sunhours: 8.2 },
   { id: 'santoDomingo', regionName: 'Santo Domingo', sunhours: 8.1 },
   { id: 'valverde', regionName: 'Valverde', sunhours: 8.3 }
];


// Average sun hours per day (can be adjusted based on location)
// const AVERAGE_SUN_HOURS = 5

// Helper function to format numbers with thousand separators
const formatNumber = (num: number): string => {
   return num.toLocaleString("es-ES")
}

export default function CalculadoraSolarPage() {

   const [region, setRegion] = useState<string>("")

   // this is for the solar panels information
   const [monthlyConsumption, setMonthlyConsumption] = useState<string>("")
   const [panelModel, setPanelModel] = useState<string>("")
   const [result, setResult] = useState<{
      panelCount: number
      totalPowerW: number
      totalPowerKW: number
      selectedRegion: string
      RegionSunHours: number
      selectedModel: string
      monthlyConsumptionKWh: number
   } | null>(null)

   // Change the calculation logic to work with monthly consumption
   const calculatePanels = () => {
      if (!monthlyConsumption || !panelModel) return

      // Convert monthly kWh to daily Wh
      const monthlyConsumptionKWh = parseFloat(monthlyConsumption) // Fix this, as the monthlyConsumption should be a integer only
      const dailyConsumptionWh = (monthlyConsumptionKWh * 1000) / 30

      const selectedPanel = SOLAR_PANELS.find((panel) => panel.id === panelModel)
      const selectedRegion = REGIONS.find((_region) => _region.id === region)

      if (!selectedPanel || !selectedRegion) return

      // Basic calculation: Daily consumption (Wh) / (Panel power (W) * Sun hours)
      const panelCount = Math.ceil(dailyConsumptionWh / (selectedPanel.power * selectedRegion.sunhours))
      const totalPowerW = panelCount * selectedPanel.power
      const totalPowerKW = totalPowerW / 1000

      setResult({
         panelCount,
         totalPowerW,
         totalPowerKW,
         selectedRegion: selectedRegion.regionName,
         RegionSunHours: selectedRegion.sunhours,
         selectedModel: selectedPanel.name,
         monthlyConsumptionKWh: monthlyConsumptionKWh,
      })
   }

   return (
      // We add pt-16 (top padding 16) to avoid the header cliping and overpositioning itself on the content of the page.
      <div className="min-h-screen bg-gray-50 pt-16">
         {/* Main content - Eliminamos el header personalizado ya que usaremos el SiteHeader global */}
         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-10">
               <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Calculadora Solar</h1>
               <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Determine cuántos paneles solares necesita según su consumo energético mensual
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Datos de consumo</h2>

                  <div className="space-y-6">
                     <div className="space-y-2">
                        <Label htmlFor="consumption">Consumo mensual (kWh)</Label>
                        <div className="relative">
                           <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                           <Input
                              id="consumption"
                              type="number"
                              placeholder="Introduce tu consumo mensual en kWh"
                              className="pl-10"
                              value={monthlyConsumption}
                              onChange={(e) => setMonthlyConsumption(e.target.value)}
                           />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Puedes encontrar este valor en tu factura de electricidad</p>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="region">Region del Republica Dominicana</Label>
                        <Select value={region} onValueChange={setRegion}>
                           <SelectTrigger id="region" className="w-full">
                              <SelectValue placeholder="Seleccionar una región del país" />
                           </SelectTrigger>
                           <SelectContent>
                              {REGIONS.map((region) => (
                                 <SelectItem key={region.id} value={region.id}>
                                    {region.regionName}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="model">Modelo de panel solar</Label>
                        <Select value={panelModel} onValueChange={setPanelModel}>
                           <SelectTrigger id="model" className="w-full">
                              <SelectValue placeholder="Selecciona un modelo de panel" />
                           </SelectTrigger>
                           <SelectContent>
                              {SOLAR_PANELS.map((panel) => (
                                 <SelectItem key={panel.id} value={panel.id}>
                                    {panel.name} ({panel.power}W)
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>

                     <Button className="w-full bg-green-600 hover:bg-green-700" onClick={calculatePanels}>
                        <Calculator className="mr-2 h-4 w-4" />
                        Calcular paneles necesarios
                     </Button>
                  </div>
               </Card>

               <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Resultados</h2>

                  {result ? (
                     <div className="space-y-6">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                           <h3 className="font-medium text-green-800 flex items-center">
                              <Sun className="mr-2 h-5 w-5" />
                              Resultado del cálculo
                           </h3>
                           <div className="mt-4 space-y-3">
                              <p className="text-gray-700">
                                 <span className="font-medium">Modelo seleccionado:</span> {result.selectedModel}
                              </p>
                              <p className="text-gray-700">
                                 <span className="font-medium">Consumo mensual:</span> {formatNumber(result.monthlyConsumptionKWh)}{" "}
                                 kWh
                              </p>
                              <p className="text-gray-700">
                                 <span className="font-medium">Region seleccionada:</span> {result.selectedRegion}
                                 <br />
                                 <span className="font-medium">Horas promedio de la region seleccionada:</span> {result.RegionSunHours}
                              </p>
                              <div className="pt-3 border-t border-green-200">
                                 <p className="text-xl font-bold text-green-800">
                                    Necesitas {formatNumber(result.panelCount)} paneles solares
                                 </p>
                                 <p className="text-gray-700">
                                    Potencia total instalada: {formatNumber(result.totalPowerW)} W ({result.totalPowerKW.toFixed(2)}{" "}
                                    kW)
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <h3 className="font-medium">¿Necesitas ayuda con tu instalación solar?</h3>
                           <p className="text-gray-600 text-sm">
                              Nuestro equipo de expertos está listo para ayudarte a diseñar e instalar tu sistema solar
                              personalizado.
                           </p>
                           <Button onClick={() => { location.replace("/Contact") }} variant="outline" className="w-full">
                              Contactar con un especialista
                           </Button>
                        </div>
                     </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
                        <Sun className="h-12 w-12 mb-4 text-gray-300" />
                        <p>Introduce tu consumo y selecciona un modelo de panel para ver los resultados del cálculo</p>
                     </div>
                  )}
               </Card>
            </div>

            {/* <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
               <h3 className="font-medium text-lg mb-2">Información adicional</h3>
               <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Este cálculo es una estimación basada en {AVERAGE_SUN_HOURS} horas de sol promedio
                  diarias y convierte su consumo mensual a necesidades diarias. Los resultados pueden variar según la
                  ubicación geográfica, orientación de los paneles, sombras y otros factores. Para un cálculo más preciso,
                  contacte con nuestros especialistas.
               </p>
            </div> */}
         </main>
      </div>
   )
}
