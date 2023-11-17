const axios = require('axios');
const fetch = axios.create({
    baseURL:'http://127.0.0.1:8080/'
});

async function getToken() {
    try {
        const response = await fetch.post('api/login', {
            username: 'admin',
            password: 'admin'
        });
        return response.data
    } catch (error) {
        console.error('Error while requesting access token:', error);
    }
}

async function createFolder(token){
    // const fileContents = fs.readFileSync('SomeDocumentToUpload.txt', 'utf8');
    const file = await fetch.post('api/resources/abcd/?override=false', '',{
        headers: {
            'X-Auth': `${token}`
        }
    })
}

async function deleteFolder(token){
    const deleteFile = await fetch.delete('api/resources/abcd',{
        headers:{
            'Content-Type': 'text/plain',
            'X-Auth': `${token}`
        }
    })
}
// IIFE

(async function(){
    const token = await getToken();
    // await createFolder(token);
    await deleteFolder(token);
})()