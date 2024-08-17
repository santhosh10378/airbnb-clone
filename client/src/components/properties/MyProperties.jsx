import usePropertyAPIs from "../../hooks/usePropertyAPIs";
import PropertiesGrid from "../../layouts/PropertiesGrid";
import Button from "../elements/Button";
import PropertyCard from "./PropertyCard";

const MyProperties = ({ properties, fetchData }) => {
  const { deleteProperty } = usePropertyAPIs();

  const handleUpdate = async () => {
    await fetchData();
  };

  const handleDelete = async (propertyId) => {
    await deleteProperty(propertyId);
    await fetchData();
  };

  return (
    <div>
      <PropertiesGrid>
        {properties?.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-4">
            <PropertyCard property={item} myProperty />
            <div className="w-full flex flex-col gap-2">
              <Button
                variant="secondary-gradient"
                className="p-2 w-full"
                onClick={() => handleUpdate(item.id)}
              >
                Update Property
              </Button>
              <Button
                variant="primary"
                className="p-2 w-full"
                onClick={() => handleDelete(item.id)}
              >
                Delete Property
              </Button>
            </div>
          </div>
        ))}
      </PropertiesGrid>
    </div>
  );
};

export default MyProperties;
