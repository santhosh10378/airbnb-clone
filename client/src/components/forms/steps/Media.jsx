import { useEffect, useState } from "react";
import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import { CloseIcon, UploadIcon } from "../../../assets";
import Button from "../../elements/Button";

const Media = () => {
  const { formData, updateForm } = useNewPropertyForm();
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    const imagePreviews = Array.from(formData.images).map((file) =>
      URL.createObjectURL(file)
    );
    setLocalImages(imagePreviews);
  }, [formData.images]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const imagePreviews = imageFiles.map((file) => URL.createObjectURL(file));

    setLocalImages((prevImages) => [...prevImages, ...imagePreviews]);

    updateForm("images", [...formData.images, ...imageFiles]);
  };

  const handleRemoveImage = (index) => {
    setLocalImages((prevImages) => prevImages.filter((_, i) => i !== index));

    const updatedFiles = Array.from(formData.images).filter(
      (_, i) => i !== index
    );
    updateForm("images", updatedFiles);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">
        Showcase Your Property with Photos
      </h3>
      <p className="text-secondary-500 text-sm mb-7">
        Upload high-quality images to give potential guests a clear view of your
        property – great photos can make all the difference!
      </p>

      <label aria-label="Upload photos">
        <input type="file" multiple hidden onChange={handleFileChange} />
        <div className="flex items-center justify-center w-full h-[250px] border border-dashed rounded-xl cursor-pointer">
          <div className="flex flex-col items-center gap-3 text-secondary-600">
            <UploadIcon className="size-16" />
            <p className="text-secondary-500 text-sm">Click to upload photos</p>
          </div>
        </div>
      </label>

      {/* Image Previews */}
      {localImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {localImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Uploaded preview ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <Button
                className="absolute right-2 top-2 cursor-pointer transition-all p-1 bg-black/50 text-white hover:bg-red-600"
                onClick={() => handleRemoveImage(index)}
                variant="primary-ghost"
                aria-label={`Remove image ${index + 1}`}
              >
                <CloseIcon className="size-4 text-white" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Media;
