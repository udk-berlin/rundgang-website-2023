import { getItems } from "@/utils/api/items";
import { getLocations } from "@/utils/api/locations";
import { getStructures } from "@/utils/api/structures";

export async function getLocationsLocations() {
  const locationsLocations = {}
  const locations = await getLocations()
  const items = await getItems()

  filter(Object.values(locations), items).forEach(location => locationsLocations[location.id] = location)
  return locationsLocations
}

export async function getLocationsStructures() {
  const locationStructures = {}
  const structures = await getStructures()
  const items = await getItems()

  filter(Object.values(structures), items).forEach(structure => locationStructures[structure.id] = structure)
  return locationStructures
}

function filter(array) {
  const getChildren = (result, object) => {
    if (object.type === 'item') {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return array.reduce(getChildren, []);
}
