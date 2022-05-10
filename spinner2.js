process.stdout.write('hello from spinner2.js... \rheyyy\n');
let timer = 100;
let spinChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r']
for(let char of spinChars) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 200;
};