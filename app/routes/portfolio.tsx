import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { client } from "~/prismic-configuration";

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("portfolio");
  return json({ data: response });
};

const Portfolio = () => {
  const { data } = useLoaderData();

  const content = data.results[0].data;
  const mainTitle = content.title[0].text;
  const groups = content.body;

  console.log(groups);

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
      <h1 className="font-bolt text-xl">{mainTitle}</h1>
      <div className="w-[100%] flex flex-col gap-5 ">
        {groups.map((group, index) => (
          <div key={index}>
            <div className="flex justify-evenly max-w-[100%]">
              {group.items.map((item, idx) => (
                <img
                  className="max-h-[400px]"
                  src={item.photo.url}
                  alt=""
                  key={idx}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
