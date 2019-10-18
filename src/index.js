function slugger(...args){
    const result = args.reduce((a,b) => `${a}-${b}`);
    return result;
}

module.exports.slugger = slugger;