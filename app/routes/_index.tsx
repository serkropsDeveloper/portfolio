import { client } from "~/prismic-configuration";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Borys Dobryi" },
    { name: "description", content: "Portfolio" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("home_page");
  return json({ data: response });
};

export default function Index() {
  const { data } = useLoaderData();

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <h1 className="font-bolt text-xl">Home Page</h1>
    </div>
  );
}
