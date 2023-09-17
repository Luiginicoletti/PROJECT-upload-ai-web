import { Button } from "./components/ui/button";

import { Separator } from "./components/ui/separator";

import { Github } from "lucide-react";

export function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Hello World</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            {" "}
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6 bg-red-500">
        <div className="flex flex-col flex-1 gap-4 bg-blue-500">
          <div className="grid grid-rows-2 bg-amber-400 flex-1"></div>
        </div>
        <aside className="w-88 bg-white">a</aside>
      </main>
    </div>
  );
}
