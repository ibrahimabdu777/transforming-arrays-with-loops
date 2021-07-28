// function name: arrayToLowerCase
// perameter: domainNames: array of strings
// returns: array of strings
// function body: 
// declare array to hold transformend doamins                 
// for domain in domain names:
//                     domain to lowercase
//                     append lowercase domain to array 
// return domain 

/**
 * Return lowercase version of array
 * @param {string []} domainNames - array of strings of domains
 * @returns {string [] } - array of strings of domains to lowercase
 */
function arrayToLowerCase(domainNames){
    const arrayLowerCaseDomains = []
    for (const domain of domainNames){
        const lowerCaseDomain = domain.toLowerCase()
        arrayLowerCaseDomains.push(lowerCaseDomain)
    }
    return arrayLowerCaseDomains
}


console.log(arrayToLowerCase(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]), '=== ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]')