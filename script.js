'use strict';

const input = document.querySelector('.input');
const output = document.querySelector('#output');
const selectedOption = document.querySelector('#selectionBar').addEventListener('change', selectOptions);


function selectOptions() {
  //get the values from the options
  const selected = this.value;
  console.log(selected);

  //add event listener when you click the button
  const generateBtn = document.querySelector('#button').addEventListener('click', generate);
  function generate() {
    const name = input.value;

    if (selected === 'capitalize') {
      const splited = name.split(' ');
      const splitedFIrstName = splited[0];
      const sliced = name.slice(1); //or slice
      // console.log(sliced);
      const together = splitedFIrstName[0].toUpperCase() + sliced.toLowerCase();
      output.value = together;
    }
    else if (selected === 'findFirstName') {
      const firstSpace = name.indexOf(' ');
      const splited = name.slice(0, firstSpace);
      output.value = splited;
    }
    else if (selected === 'firstNameLength') {
      const firstSpace = name.indexOf(' ');
      const splited = name.slice(0, firstSpace);
      output.value = splited.length;
    }
    else if (selected === 'middleName') {
      const firstSpace = name.indexOf(' ');
      const lastSpace = name.lastIndexOf(' ');
      const splited = name.substring(firstSpace, lastSpace);
      output.value = `your middlename start position is ${firstSpace + 1} and last position is ${lastSpace - 1} the middle name is ${splited}`;
    }
    else if (selected === 'pngOrJpg') {
      if (name.includes('.png')) {
        output.value = `the file is png`;
      } else if (name.includes('.jpg')) {
        output.value = `the file is jpg`;

      } else {
        output.value = `stop writting gibberish Peter`;
      }
    }
    else if (selected === 'password') {
      const replaced = name.replaceAll(name, '*');
      output.value = replaced;

    }
    else if (selected === 'thierdCharUppercase') {
      const begginingOfName = name.substring(0, 2);
      const thierdLetter = name.substring(2, 3);
      const restOfName = name.substring(3);

      const glued = `${begginingOfName}${thierdLetter.toUpperCase()}${restOfName}`;
      output.value = glued;
    }
    else if (selected === 'hyphen') {
      if (/-/.test(name)) {
        const hyphenIndex = name.indexOf('-'); //returns the index of -
        const beggining = name.substring(0, hyphenIndex); //returns everything before the -
        const letterAfter = name.substring(hyphenIndex, hyphenIndex + 2);//returns a
        const restOf = name.substring(hyphenIndex + 2); //returns the rest of the name after a

        const glued = `${beggining}${letterAfter.toUpperCase()}${restOf}`
        console.log(glued);
      }


    } else {
      output.value = 'Please select an option'
    }

  }

}

