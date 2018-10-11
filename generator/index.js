const pascalCase = require('pascal-case');
const commandLineArgs = require('command-line-args');
const signale = require('signale');
const fs = require('fs-extra');

let componentName = '';

const optionDefinitions = [
  {
    name: 'name',
    alias: 'n',
    type: String,
    multiple: true
  }
];

const args = commandLineArgs(optionDefinitions, { partial: true });

if (args.name.length === 0) {
  signale.error('No component name!');
}

args.name.map(v => {
  componentName += pascalCase(v);
});

console.log(componentName);

async function copyTemplate() {
  try {
    let a = await fs.copy(
      './generator/Template/index.js',
      `./src/components/${componentName}/index.js`
    );

    await fs.copy(
      './generator/Template/TemplateComponent.js',
      `./src/components/${componentName}/${componentName}Component.js`
    );

    await fs.copy(
      './generator/Template/TemplateType.js',
      `./src/components/${componentName}/${componentName}Type.js`
    );

    await fs.copy(
      './generator/Template/TemplateAction.js',
      `./src/components/${componentName}/${componentName}Action.js`
    );

    await fs.copy(
      './generator/Template/TemplateReducer.js',
      `./src/components/${componentName}/${componentName}Reducer.js`
    );

    signale.success('generate component success!');
  } catch (err) {
    signale.error(err);
  }
}

copyTemplate();
