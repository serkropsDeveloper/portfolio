import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { client } from "~/prismic-configuration";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About" },
    { rel: "icon", href: "/photo-camera.png", type: "image/png" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("about");
  return json({ data: response });
};

const About = () => {
  const { data } = useLoaderData();

  if (!data || !data.results || data.results.length === 0) {
    return <div>No data available</div>;
  }

  const content = data.results[0].data;
  const contacts = content.contacts;

  // console.log(content);

  return (
    <div className="flex flex-col min-h-[85vh] w-full justify-evenly items-center p-4">
      <div className="flex flex-col md:flex-row gap-4 py-4 w-full justify-evenly items-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold hidden md:block">
          {content.title[0]?.text}
        </h1>
        <img
          src={content.image?.url || ""}
          alt="photo"
          className="max-h-[600px] order-1 md:order-2"
        />
      </div>
      <p className="text-lg md:text-2xl font-semibold w-full md:max-w-[70vw]">
        {content.description}
      </p>
      <div className="flex flex-col justify-center items-center p-4 gap-6">
        <h2 className="text-xl font-semibold">Зв’язатись зі мною:</h2>
        {contacts && contacts[0] && (
          <a href={`tel:${contacts[0].link}`}>
            <h1 className="text-3xl font-semibold hover:scale-110 duration-500 ease-in-out">
              {contacts[0].link}
            </h1>
          </a>
        )}
      </div>
      <div className="w-full flex justify-evenly items-center">
        {contacts && contacts[1] && (
          <a
            href={contacts[1].link}
            className="hover:scale-125 duration-500 ease-in-out"
          >
            <FaInstagram size={50} />
          </a>
        )}
        {contacts && contacts[2] && (
          <a
            href={contacts[2].link}
            className="hover:scale-125 duration-500 ease-in-out"
          >
            <FaTelegramPlane size={50} />
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
