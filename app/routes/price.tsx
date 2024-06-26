import { LoaderFunction } from "@remix-run/node";
import { MetaFunction, json, useLoaderData } from "@remix-run/react";
import { client } from "~/prismic-configuration";

export const meta: MetaFunction = () => {
  return [
    { title: "Price" },
    { name: "description", content: "Price" },
    { rel: "icon", href: "/photo-camera.png", type: "image/png" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("price");
  return json({ data: response });
};

const Price = () => {
  const { data } = useLoaderData();

  const content = data.results[0].data;
  const priceSlices = content.body;
  const additionalParts = content.additional_parts;

  // console.log(additionalParts);

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[80vh]">
      {priceSlices.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full justify-center items-center p-4 md:p-10 gap-4 md:max-w-[50vw] lg:max-w-[40vw] border-b-2 border-black"
        >
          <h2 className="text-xl md:text-3xl font-bold">
            {item.primary.title[0].text}
          </h2>
          <div className="flex w-full justify-center">
            <ul className="flex flex-col items-left gap-4">
              {item.items.map((text, index) => (
                <li key={index} className="text-md md:text-xl font-semibold">
                  {"- " + text.includes}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="flex flex-col jsutify-center items-center p-4 md:p-10 gap-4 md:max-w-[60vw] lg:max-w-[50vw]">
        <h1 className="text-xl md:text-3xl font-bold">
          {content.title[0].text}
        </h1>
        <div className="flex w-full justify-center">
          <ul className="flex flex-col gap-4">
            {additionalParts.map((item, index) => (
              <li key={index} className="text-md md:text-xl font-semibold">
                {"- " + item.part}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Price;
