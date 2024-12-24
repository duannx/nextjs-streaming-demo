import React from "react";

const Sidebar = () => {
  // Sample navigation data
  const navigation = {
    sections: [
      {
        title: "Fetch and Resolve on the server",
        items: [
            { name: "fetch", href: "/server/fetch" },
            { name: "fetch dynamic rendering", href: "/server/fetch-dynamic" },
        ],
      },
      {
        title: "Fetch on the server and Resolve on the client",
        items: [
            { name: "use", href: "/hybrid/use" },
            { name: "use dynamic rendering", href: "/hybrid/use-dynamic" },
          ],
      },
      {
        title: "Fetch and Resolve on the client",
        items: [
            { name: "useEffect", href: "/client/use-effect" },
            { name: "useQuery", href: "/client/use-query" },
          ],
      },
      {
        title: "Duplicating. Fetch and Resolve on the server and then Fetch and Resolve on the client",
        items: [
            { name: "useSuspenseQuery", href: "/duplicate/use-suspense-query" },
            { name: "useSuspenseQuery with param", href: "/duplicate/use-suspense-query-with-param" },
            { name: "useSyncExternalStore", href: "/duplicate/use-external-store" },
            { name: "useSyncExternalStore with param", href: "/duplicate/use-external-store-with-param" },
          ],
      },
      
    ],
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-100 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Nextjs Streaming Demo</h1>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {navigation.sections.map((section) => (
            <li key={section.title} className="px-2">
              <div className="flex items-center justify-between w-full p-2 text-left bg-gray-700/30 rounded-md cursor-default">
                <span className="font-medium text-gray-300">
                  {section.title}
                </span>
              </div>

              <ul className="ml-4 mt-1 space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block p-2 text-gray-400 hover:text-gray-100 hover:bg-gray-700 rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
