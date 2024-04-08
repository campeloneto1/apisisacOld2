import bcrypt from 'bcrypt';

async function hashString (pass:string) {
    const saltRounds = 10;
    var passHash!: string;
    await bcrypt.hash(pass, saltRounds).then(function(hash) {
        passHash = hash;
    });
    return passHash;
}

async function compareString(text:string, hash:string) {
    var response: boolean = false;
    await bcrypt.compare(text, hash).then(function(result) {
        response = result;
    });

    return response;
}

export default {
    hashString,
    compareString
}