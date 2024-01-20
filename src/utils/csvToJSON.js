// csvTojson.js
import Papa from 'papaparse';
import fs from 'fs';

// Read the CSV file
const csvFilePath = '../assets/forcast_hiring.csv';
const csvFile = fs.readFileSync(csvFilePath, 'utf8');

// Parse CSV to JSON
Papa.parse(csvFile, {
  header: true,
  dynamicTyping: true,
  complete: (result) => {
    const jsonData = JSON.stringify(result.data, null, 2);

    // Save the JSON data to a new file
    fs.writeFileSync('../assets/forcast_hiring.json', jsonData, 'utf8');

    console.log('Conversion completed. JSON file saved.');
  },
});
