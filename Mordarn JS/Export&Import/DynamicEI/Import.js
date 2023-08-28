///Dynamic import allows you to load modules dynamically, usually as promises, which means the module is fetched and evaluated when the import statement is executed. This is particularly beneficial when you want to load certain modules only when they are needed, reducing the initial load time of your application.

const dynamicFunc = async () => {
  const { operator, random } = await Promise.all(["./Export.js", "./Math.js"]);

  const rand = random;

  const opera = operator;
};
