
function searchNames( logins ){
    return logins.filter((_, index) => index % 2 === 1 && (logins[index - 1].startsWith('.') || logins[index - 1].endsWith('.')));
  }
  