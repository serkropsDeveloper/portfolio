import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import ModalWindow from "~/components/ModalWindow";
import { client } from "~/prismic-configuration";

// Modal.setAppElement("#root"); // Убедитесь, что это указано правильно

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Portfolio" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("portfolio");
  return json({ data: response });
};

const Portfolio = () => {
  const { data } = useLoaderData();
  const [selectedImage, setSelectedImage] = useState(null);

  const content = data.results[0].data;
  const mainTitle = content.title[0].text;
  const groups = content.body;

  // console.log(groups);
  // console.log(selectedImage);

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 xl:py-10 gap-4">
      {/* <h1 className="font-bolt text-xl">{mainTitle}</h1> */}
      <div className="w-full flex flex-col gap-5 ">
        {groups.map((group, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-4 justify-evenly w-full">
              {group.items.map((item, idx) => (
                <img
                  className={`cursor-pointer md:max-w-[150px] lg:max-w-[250px] xl:max-w-[350px] object-contain md:object-scale-down md:hover:scale-110 hover:${
                    selectedImage ? "z-10" : ""
                  } duration-500 ease-in-out`}
                  src={item.photo.url}
                  alt=""
                  key={idx}
                  onClick={() => setSelectedImage(item.photo.url)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <ModalWindow
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default Portfolio;
