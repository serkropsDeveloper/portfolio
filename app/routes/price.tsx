import { LoaderFunction } from "@remix-run/node";
import { MetaFunction, json, useLoaderData } from "@remix-run/react";
import { client } from "~/prismic-configuration";

export const meta: MetaFunction = () => {
  return [{ title: "Price" }, { name: "description", content: "Price" }];
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
    <div className="flex flex-col justify-evenly items-center min-h-[80vh] gap-6">
      {priceSlices.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full justify-center items-center p-10 gap-6 max-w-[50vw] border-b-2 border-black"
        >
          <h2 className="text-3xl font-semibold">
            {item.primary.title[0].text}
          </h2>
          <ul className="flex flex-col gap-4 w-full">
            {item.items.map((text) => (
              <li className="text-xl font-semibold">{"- " + text.includes}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col jsutify-center items-center p-10 gap-6 max-w-[50vw]">
        <h1 className="text-3xl font-semibold">{content.title[0].text}</h1>
        <ul className="flex flex-col gap-4 w-full">
          {additionalParts.map((item, index) => (
            <li key={index} className="text-xl font-semibold">
              {"- " + item.part}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
