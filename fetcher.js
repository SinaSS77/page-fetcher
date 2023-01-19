const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");

const url = args[0];
const localFilePath = args[1];

request(url, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);

  fs.writeFile(localFilePath, body, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

//   path.exists(localFilePath, function (exists) {
//     if (exists) {
//       process.stdout.write(
//         "The file is exist. Do you want to overwrite it?y/n"
//       );
//       let answer = process.stdin;
//       if (answer === "y") {
        
//       }
//     }
//   });
// });



//****************************************************
// const fs = require("fs");
// const request = require("request");
// const readline = require("readline");

// function downloadFile(url, filePath) {
//   //Validate url and filepath
//   if (!url || !filePath) {
//     console.log("Please provide valid url and file path");
//     return;
//   }

//   fs.stat(filePath, function(err, stat) {
//     if (err == null) {
//       // File already exists
//       const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//       });

//       rl.question("File already exists. Do you want to proceed? (yes/no)", answer => {
//         rl.close();
//         if (answer === "yes") {
//           download();
//         } else {
//           console.log("Aborting download...");
//         }
//       });
//     } else if (err.code === "ENOENT") {
//       download();
//     } else {
//       console.log("An error occured: ", err.code);
//     }
//   });

//   function download() {
//     request(url, function(error, response, body) {
//       if (error) {
//         console.log("An error occured: ", error);
//         return;
//       }

//       fs.writeFile(filePath, body, function(err) {
//         if (err) {
//           console.log("An error occured: ", err);
//           return;
//         }
//         console.log("File downloaded and saved successfully!");
//       });
//     });
//   }
// }
