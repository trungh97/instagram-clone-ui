import React from "react";
import { getAppImages } from "@constants/images";
import useImageURL from "@hooks/useImageURL";

const GetAppLink = () => {
  const imageUrls = useImageURL(getAppImages);
  return (
    <div className="flex flex-col">
      <div className="text-primary-text text-primary-size leading-5 mx-5 my-[10px] text-center p-0 align-baseline">
        <span>Get the app.</span>
      </div>
      <div className="flex flex-row justify-center my-[10px] box-border">
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D27F8E3E0-AF21-4D0F-8AC0-D9779FFFFB1B%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.instagram.com%252F"
          className="no-underline mr-2"
        >
          <img
            className="h-[40px]"
            src={imageUrls["google-play"]}
            srcSet={imageUrls["google-play"]}
            alt="google-play"
          />
        </a>
        <a
          href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1919%2C9%2C1918%2C1030"
          className="no-underline"
        >
          <img className="h-[40px]" src={imageUrls.microsoft} alt="microsoft" />
        </a>
      </div>
    </div>
  );
};

export default React.memo(GetAppLink);
