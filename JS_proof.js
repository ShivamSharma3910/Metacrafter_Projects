let nft_holder = [];

function mintNFT(name, age) {
    
    const nft = {
        name: name,
        age: age
    };
    nft_holder.push(nft);
}


function listNFTs() {
    for (let i = 0; i < nft_holder.length; i++) {
        console.log("Name: " + nft_holder[i].name);
        console.log("Age: " + nft_holder[i].age);
    }
}

function Total_holders() {
    return nft_holder.length;
}

mintNFT("Max Verstappan", 32);
mintNFT("Carlos Sainz", 29);
mintNFT("Perez", 33);

listNFTs();

console.log("Total NFTs holders: " + Total_holders());