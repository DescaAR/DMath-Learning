import { deepMaterialsEnA } from "@/data/deep-materials-en-a";
import { deepMaterialsEnB } from "@/data/deep-materials-en-b";
import { deepMaterialsEnC } from "@/data/deep-materials-en-c";
import type { DeepMaterial } from "@/data/deep-materials";

export const deepMaterialsEn: DeepMaterial[] = [
  ...deepMaterialsEnA,
  ...deepMaterialsEnB,
  ...deepMaterialsEnC,
];

export const deepMaterialEnMap = Object.fromEntries(
  deepMaterialsEn.map((material) => [material.slug, material])
) as Record<string, DeepMaterial>;
