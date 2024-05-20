import { readdirSync } from "fs";
import { resolve } from "path";

function findHTMLFiles(directory = "./") {
  const htmlFiles = readdirSync(directory).filter((file) =>
    file.endsWith(".html")
  );
  const entryPoints = {};
  htmlFiles.forEach((file) => {
    const name = file.replace(".html", "");
    entryPoints[name] = resolve(directory, file);
  });
  return entryPoints;
}

function mpaPlugin(directory = "./") {
  return {
    name: "vite-plugin-mpa-support",
    configResolved(config) {
      if (config.command === "build") {
        const entryPoints = findHTMLFiles(directory);
        config.build.rollupOptions = config.build.rollupOptions || {};
        config.build.rollupOptions.input = entryPoints;
      }
    },
  };
}

export default mpaPlugin;
