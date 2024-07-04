import { cloudinaryStoragePath } from "@constants/images";
import { ImageURLs } from "@interfaces/image";
import { useCloudinary } from "@providers/CloudinaryProvider";

const useImageURL = (images: string[]): ImageURLs<typeof images> => {
  const { cld } = useCloudinary();

  let result: ImageURLs<typeof images> = {};

  images.forEach((image) => {
    result[image] = cld.image(`${cloudinaryStoragePath}/${image}`).toURL();
  });

  return result;
};

export default useImageURL;
