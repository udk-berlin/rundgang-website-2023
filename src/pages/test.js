import Page from "@/components/pages/page";
import {DataProvider, useData} from "@/providers/data";
import {FilterProvider} from "@/providers/filter";

export default function TestPage() {

  return (
     <DataProvider>
       <Test></Test>
     </DataProvider>
  );
}

function Test() {
  const { locations, error } = useData();

  return (
   <></>
  );
}