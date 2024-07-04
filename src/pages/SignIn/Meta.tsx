import React from "react";
import { useTranslation } from "react-i18next";
import { metaLinks } from "./constants";

const Meta = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage:
    | React.ChangeEventHandler<HTMLSelectElement>
    | undefined = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="order-5">
      <footer className="box-border m-0 p-0">
        <div className="mb-[52px] flex flex-col justify-start items-stretch flex-grow-0">
          <div className="mt-6 flex justify-center flex-wrap">
            {metaLinks.map(([name, link]) => (
              <div key={name} className="mx-2 text-primary-small text-secondary">
                <a href={link} target="_blank">
                  {t(name)}
                </a>
              </div>
            ))}
          </div>

          <div className="my-3 flex flex-row justify-center text-primary-small text-secondary">
            <span className="cursor-pointer inline-block relative align-top">
              <div>
                <select
                  onChange={onChangeLanguage}
                  className="cursor-pointer"
                  name="language"
                  id="language"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </span>
            <div>
              <span>© 2024 Instagram from Meta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Meta;
