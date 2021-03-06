const pascalCase = require("pascal-case");
const commandLineArgs = require("command-line-args");
const signale = require("signale");
const fs = require("fs-extra");
const replace = require("replace-in-file");

let componentName = "";

const optionDefinitions = [
  {
    name: "name",
    alias: "n",
    type: String,
    multiple: true,
  },
];

const args = commandLineArgs(optionDefinitions, { partial: true });

if (args.name.length === 0) {
  throw new Error("No component name!");
}

args.name.map((v) => {
  componentName += pascalCase(v);
});

(async () => {
  try {
    await fs.copy(
      "./generator/Template/TemplateContainer.js",
      `./src/components/${componentName}/${componentName}Container.js`
    );

    await fs.copy(
      "./generator/Template/TemplateComponent.js",
      `./src/components/${componentName}/${componentName}Component.js`
    );

    await fs.copy(
      "./generator/Template/TemplateType.js",
      `./src/components/${componentName}/${componentName}Type.js`
    );

    await fs.copy(
      "./generator/Template/TemplateAction.js",
      `./src/components/${componentName}/${componentName}Action.js`
    );

    await fs.copy(
      "./generator/Template/TemplateReducer.js",
      `./src/components/${componentName}/${componentName}Reducer.js`
    );

    await fs.copy(
      "./generator/Template/TemplateStyle.css",
      `./src/components/${componentName}/${componentName}Style.css`
    );

    signale.success("Generated component completed!");

    const replaceOptions = {
      files: [
        `./src/components/${componentName}/${componentName}Container.js`,
        `./src/components/${componentName}/${componentName}Component.js`,
        `./src/components/${componentName}/${componentName}Type.js`,
        `./src/components/${componentName}/${componentName}Action.js`,
        `./src/components/${componentName}/${componentName}Reducer.js`,
        `./src/components/${componentName}/${componentName}Style.css`,
      ],
      from: /Template/g,
      to: `${componentName}`,
    };

    replace(replaceOptions, (err, changes) => {
      if (err) {
        throw err;
      }
      signale.success("Modified files completed!");
    });
  } catch (err) {
    throw err;
  }
})();
