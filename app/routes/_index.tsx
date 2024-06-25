import { client } from "~/prismic-configuration";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ImageSlider from "~/components/ImageSlider";

export const meta: MetaFunction = () => {
  return [
    { title: "Borys Dobryi" },
    { name: "description", content: "Portfolio" },
    { rel: "icon", href: "/photo-camera.png", type: "image/png" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("home_page");
  return json({ data: response });
};

export default function Index() {
  const { data } = useLoaderData();

  const content = data.results[0].data;
  const carousel = content.carousel;

  return (
    <div className="w-full flex flex-col justify-center items-center md:px-4 md:py-10 gap-6">
      <div className="flex w-full">
        <ImageSlider carousel={carousel} />
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4 gap-4">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold md:p-3 text-center">
          {content.main_title[0].text}
        </h1>
        <ol className="flex flex-col gap-4 w-full">
          {content.stages_of_work.map((item, index) => (
            <li
              className="text-sm md:text-lg lg:text-xl font-semibold w-full text-left"
              key={index}
            >
              {item.stage_of_work}
            </li>
          ))}
        </ol>
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold md:p-3 text-center">
          Відгуки
        </h1>
      </div>
    </div>
  );
}
