const fs = require('fs');
const path = require('path');

/* DIRECTORY CHECK OF CURRENT FILES */

const checkFileName = (function() {
    let arrOfFiles;
    function updateFilesArr() {
        const files = fs.readdir(path.resolve(__dirname, '../db/uploads'), (err, files) => {
            if(err) {return err};
            files.forEach(file => {arrOfFiles.push(file)}
            )
        })
        arrOfFiles = [files];
        if(arrOfFiles[0] === undefined) arrOfFiles.shift();
    }
    updateFilesArr();

    return {
        readFiles: async function(fileToCheck) {
            console.log('reading files now...', arrOfFiles)
            // let read = await fs.readdir(path.resolve(__dirname, '../db/uploads'), (err, files) => {
            //     if(err) {return err};
            //     files.forEach(file => {arrOfFiles.push(file)
            //     });
            //     })
            console.log('leaving read...', arrOfFiles)
            let check = await this.checkExists(fileToCheck, arrOfFiles);
            return check;
            // let check = await this.checkExists(fileToCheck, arrOfFiles);
            // return check;
            },
        checkExists: function(fileToCheck, arr) {
            console.log('checking file now...', fileToCheck)
            updateFilesArr(); // re-run to update array
            return arr.includes(fileToCheck) ? 
                true
                : false
        },
        returnFiles: function() {
            return arrOfFiles;
        }
        }
        })();

module.exports = checkFileName;