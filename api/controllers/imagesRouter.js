const express = require('express');
const router = express.Router();
const dbconnect = require('../db/dbconnect');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const formidable = require('formidable');
const checkFileName = require('../helpers/filesystemCheck');
// const upload = multer({
//     dest: path.resolve(__dirname, '../db/uploads/')
// })
router.use((req, res, next) => {
    console.log('=>IMAGES<= ROUTER <==>IMAGES<= ROUTER');
    next();
})
router.use(express.json())

/* CREATE IMAGE */
router.post('/upload_image', (req, res, next) => {
    const regexFileType = /\.\w*$/gi; // matches extension
    // const regexFileType = /[\w|\s]*\./gi; works if only 1 dot entered in react field
    const regexRemoveChar = /[\*\.\%\#\^\&\?\/\|\{\}\+\`\|\=\@\~\$\'\"\:\;\<\>\,\(\)\!]/gi;
    const regexSpaces = / /gi;
    let updatedName, currExtension;
    
    var form = new formidable.IncomingForm();
    // need to refactor to prevent overwriting existing files here > alternatively write function to check db first

    // parse req to start
    form.parse(req, (err, fields, file) => {
        if(err) next(err);
        // console.log(updatedName, '^^^^^*****updatedName form.parse ')
        // console.log('===== fs rename fired =====', form._parser)
        // currExtension = file.img_sending.name.match(regexFileType);
        console.log('file.img_sending', 'curr file')
        // updatedName = `${fields.image_name.replace(regexSpaces, '_').replace(regexRemoveChar, '')}${currExtension}` // change name to input.extension
        // console.log(/* file.img_sending.name,  */updatedName, 'p a r s e stage')
    });
        console.log(form.uploadDir, 'upload current')
    form.uploadDir = path.resolve(__dirname, '../db/uploads');
    form.on('field', (name, field) => {
        // updatedName for file.on use

        updatedName = `${field.replace(regexSpaces, '_').replace(regexRemoveChar, '')}` // changes name to input.extension
        console.log(updatedName, '^^^^^*****updatedName form.on field')
    })
    form.on('fileBegin', (name, file) => {
        // set filename, rename, replace spaces, check if exists
        currExtension = file.name.match(regexFileType);
        updatedName += currExtension;
        preCheckName(); // check name and return if in use
        function preCheckName() {
            let fullFileName = file.name;
            let resultOfExistCheck = checkFileName.readFiles(updatedName)
            .then(val  => val ? console.log('true val', val) : 
            res.send('filename taken')
            // does not prevent form handling of name change
            )
        }
        // changes filename updName in fs vs uploaded-...
        let nameChangeCheck = file.path = path.resolve(__dirname, '../db/uploads' + '/' + updatedName);
        fs.rename(file.path, form.uploadDir + '/' + updatedName, () => {
            //
            
            let fullFileName = file.name;
            let resultOfExistCheck = checkFileName.readFiles(updatedName)
            .then(val => {
                val ? console.log(val) : console.log(false);
                // console.log('true')
                }
        )
        /* ADD DATABASE TO THE UPLOADS AFTER REACT CURRENT PULL */

        const query_new_image = {
            text: 'INSERT INTO images (name, img_fs_ref) VALUES($1,$2) RETURNING name, img_id, img_fs_ref',
            values: [`${updatedName}`, `${updatedName}`]
        }
        dbconnect.query(query_new_image, (err, results) => {
            if(err) return next(err);
            // res.header('Content-Security-Policy', 'img-src "self"')
            console.log(results.rows) // change back to send
        })
    }
        );
            })
    form.on('error', (err) => {
        if(err) {res.send('error on upload'); throw err}
    });
    form.on('aborted', (err) => {
        res.send('user aborted upload') 
        return err;
    });
    
    form.on('end', () => {
        console.log(updatedName, '^^^^^*****updatedName form . on (end) ')
        res.end('upload successful');
        return;
    })
}) 
/* ADD DATABASE TO THE UPLOADS AFTER REACT CURRENT PULL */
/* ADD DATABASE TO THE UPLOADS AFTER REACT CURRENT PULL */


/* GET 1 Images */

// use 2nd db req from react to get more metadata

router.get('/:img_id', (req, res, next) => {
    const query_insert_image = {
        text: 'SELECT * FROM images WHERE img_id = $1',
        values: [req.params.img_id]
    }
    dbconnect.query(query_insert_image, (err, results) => {
        if(err) return next(err);
        console.log(results.rows)
        res.sendFile(path.resolve(__dirname, '../db', results.rows[0].img_fs_ref))
    })
})

/* GET all Images */

router.get('/', (req, res, next) => {
    // add fs check to prevent ENOENT file not found
    const allImages = fs.readdir(path.resolve(__dirname, '../db/uploads'), (err, files) => {
        if(err) {
            next(err);
            res.status(400).send('something went wrong')
        } else {
            const query_image_pull = {
                text: 'SELECT img_id, name, img_fs_ref FROM images',
                // values: '' 
            }
            dbconnect.query(query_image_pull, (err, results) => {
                if(err) return next(err);
                for(let i of results.rows) {
                    let tmpData = fs.statSync(path.resolve('db/uploads', i.img_fs_ref))
                    i.image = fs.readFileSync(path.resolve('db/uploads', i.img_fs_ref), {encoding: 'base64'}, (err, data) => {
                        if(err) throw err
                    }) 
                    // console.log(results.rows, i.image, tmpData, 'i. image')
                }
                res.send(results.rows)
                // res.sendFile(path.resolve(__dirname, '../db/images/wood.png'))
            }
        )
            // console.log(files);
            // res.status(200).send('nothing being sent')
        }
        
    })
    // res.sendFile('/home/jsjames/WebProjects/solvejs_blog/api/db/uploads/poapospospospo.jpg')

    /* ADD DATABASE TO THE UPLOADS AFTER REACT CURRENT PULL */
    /* ADD DATABASE TO THE UPLOADS AFTER REACT CURRENT PULL */
    
})


router.get('/api/images', (req, res) => {
    // fs.opendir('../public/image' )

    fs.readdir('./db/images', 'utf-8', (err, files) => {
        if(err) console.log(err);
        else {
            let currImages = []
            console.log('\nCurrent directory contains:');
            files.forEach(item => {
                currImages.push(item)
            })
            res.json(currImages)
        }
    })
})

/* Remove Image */

router.delete('/:img_id', (req, res) => {
    dbconnect.query(`SELECT img_fs_ref FROM images WHERE img_id = ${req.params.img_id}`, (err, results) => {
        if(err) return err;
        console.log('SELECT img_fs_ref FROM images WHERE img_', results.rows[0])
    })
        const query_delete_image = {
            text: `DELETE FROM images WHERE img_id = $1 RETURNING img_fs_ref`,
            values: [req.params.img_id]
        }
        dbconnect.query(query_delete_image, (err, results) => {
            if(err) throw err;
            console.log(results.rows, req.body)
        })
            fs.unlink(path.resolve(__dirname, '../db/uploads', `${req.body.img_fs_ref}`), err => {
                if(err) throw err;
                console.log('deleted file:', req.body.img_fs_ref)
            })
        res.send(`file deleted: ${req.body.img_fs_ref}`)
    })
// add db check
// add fs check
// return err if needed

module.exports = router;