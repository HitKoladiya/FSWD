


const envVariables = process.env;
for (const key in envVariables) {
  if (envVariables.hasOwnProperty(key)) {
    console.log(`${key}: ${envVariables[key]}`);
  }
}
