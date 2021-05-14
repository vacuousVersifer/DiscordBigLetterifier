module.exports = input => {
  if(typeof input !== "string") return new Error("You must provide a string!");
  
  let output = "";

  for(let i in input) {
    let char = input[i];

    if((/[a-zA-Z]/).test(char)) {
      char = char.toLowerCase();
      output += `:regional_indicator_${char}: `;
    }
  }

  return output;
};