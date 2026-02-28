"use client";

import { Label } from "./ui/label";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";

interface DropdownSelectProps {
   id: string;
   name?: string;
   label?: string;
   placeholder: string;
   value: string;
   onChange: (value: string) => void;
   options: {
      id: string;
      label: string;
   }[];
}

export function DropdownSelect({
   id,
   label,
   placeholder,
   value,
   onChange,
   options,
}: DropdownSelectProps) {
   return (
      <>
         {label && <Label htmlFor={id}>{label}</Label>}
         <Select value={value} onValueChange={onChange}>
            <SelectTrigger id={id} className="w-full">
               <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
               {options.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                     {option.label}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </>
   );
}
