const fs = require('node:fs');


fs.unlink('./copy/copy2.txt', function(err){
    if (err) console.error(err.message);
    else console.log('Done☑️')
})