const fs = require('fs');
const S3rver = require('s3rver');

new S3rver = ({
    port:5000,
    directory: './S3',
    configureBuckets: [{
        name:"E-commerce",
        configs: [fs.readFileSync("./cors.xml")]
    },
],
}).run();