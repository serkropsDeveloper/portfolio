import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { client } from "~/prismic-configuration";
import stylesheet from "~/tailwind.css?url";
import Header from "./components/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = async () => {
  const response = await client.getByType("menu");
  return json({ data: response });
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full flex flex-col" id="root">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { data } = useLoaderData();
  const links = data?.results[0]?.data?.navigation || [];

  return (
    <Document>
      <Header links={links} />
      <main className="flex-1 w-full flex flex-col items-center md:p-8 lg:p-0">
        <Outlet />
      </main>
    </Document>
  );
}
