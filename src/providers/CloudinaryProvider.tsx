import { Cloudinary } from "@cloudinary/url-gen";
import React, { ReactNode, useContext, createContext } from "react";

type CloudinaryType = {
  cld: Cloudinary;
};

const CloudinaryContext = createContext<CloudinaryType>({
  cld: new Cloudinary(),
});

const CloudinaryProvider = ({ children }: { children: ReactNode }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  });

  const value = {
    cld,
  };

  return (
    <CloudinaryContext.Provider value={value}>
      {children}
    </CloudinaryContext.Provider>
  );
};

export const useCloudinary = () => useContext(CloudinaryContext);

export default CloudinaryProvider;
