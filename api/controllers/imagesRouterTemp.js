// // form.parse(req, (err, files, fields, name) => {
        
//     // file storage on successful upload
//     form.parse(req);
//     form.uploadDir = path.resolve(__dirname, '../db/uploads');
//     form.on('file', (name, fields, file) => {
//         fs.rename(file.path, form.uploadDir + '/' + fields.name)
//         console.log(file)
//         let fullFileName = `${fields.name.replace(regexSpaces, '_')}`;
//         function checkFileName(fileToCheck) {
//             fs.readdir(path.resolve(__dirname, '../db/uploads/'), (err, files) => {
//                 arrOfFiles = [];
//                 if(err) return err;
//                     files.forEach(item => arrOfFiles.push(item));
//                     // for(item of files) {
//                         // }
//                         // mkArrofFiles(arrOfFiles);
//                     return arrOfFiles.filter(word => word === fileToCheck) ? 
//                     console.log(`File: ${fileToCheck} already exists`)
//                     : console.log('false: entered else statement of if check')
//                 })
//         }
//         let nameResult = checkFileName(fullFileName);
//         console.log(fullFileName, 'nameresult =>', nameResult)
//         // console.log(nameResult, 'nameresult')
        
//         // , file.name.replace(/ /g, '_'))
//         // console.log(file.path, file.name, name, 'file path')
//         // fields.file_name = fullFileName;
//         // console.log(name.file_name, 'name name name name')

//         // console.log('name => ', typeof path, '<= name');
//         // console.log(req.rawHeaders, 'lastmodified........')
        
//         // console.log('fullFileName==>',fullFileName)
        
//         // console.log(fields, 'nameResult', 'nameResult')
            
//         // console.log(name, '<=fields', 'filename=>', fields, 'form.openedFiles[0].name===>',
//         // form.openedFiles[0].name, `form.openedFiles[0].type.replace(regex, '' ==>)`,
//         // form.openedFiles[0].type.replace(regex, ''));
            
//         // console.log( '/****form ===> ', 
//         // form.openedFiles[0].name,)
        
//     })
//     form.on('error', (err) => {
//         console.error('Error: ', err)
//         res.send('error occurred')
//         throw err
//     })
//     form.on('aborted', () => {
//         res.send('user aborted upload')
//         return 'user aborted'
//     })
//     form.on('end', () => {
//         res.send('image uploaded successfully')
//         return 'image upload successful'
//     })
//     })
// //     (err, fields, files) => {
// //         if(err) {
// //             console.error('Error: ', err);
// //             throw err
// //         }
// //         console.log('Fields: ', fields);
// //         console.log('Files: ', files)
// //         for(const file of Object.entries(files)) {
// //             console.log(file)
// //         }
// //     }
// // )})
    
// //     const image = req.file;
// //     if(!image) { // not checking until tied to image
// //         console.log('no image attached', req.body);
// //         console.log(multer.MulterError)
// //         res.status(400).send('please attach an image')
// //         next()
// //     } else {
// //         console.log(req.headers, req.rawHeaders, req.rawTrailers, 'req.headers and trailers')
// //         console.log(dirCheckCurrentFiles(), req.file, req.files, 'arrOfFiles and req.file body')
// //         console.log(Object.values(req.body)) 
            
// //         // let tmp_path = path.resolve(__dirname, '../db/tmp');
// //         // let target_path = path.resolve(__dirname, '../db/uploads/' + image.originalname + image.mimetype);
// //         // if(target_path) { // temp block to see req. body
// //         //     console.log(target_path)
// //         //     res.statusMessage = 'already exists';
// //         //     return res.end('it appears that image may already exist'); // sends 200 and 204 > fix
// //         // }
// //         // let src = fs.createReadStream(tmp_path);
// //         // let dest = fs.createWriteStream(target_path);
// //         // src.pipe(dest);
// //         // src.on('end', () => console.log('complete'));
// //         // src.on('error', (err) => {throw err})
// //         // let tempName = image.name;
// //         // let tempRef = image.name;