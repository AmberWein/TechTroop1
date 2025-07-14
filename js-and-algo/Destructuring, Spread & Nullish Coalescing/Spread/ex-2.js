var firstPiece = { id: 101, name: 'Ofri' };
var seoncdPiece = { country: 'Israel' };

var fullPassport = { ...firstPiece, ...seoncdPiece };

console.log(fullPassport);
// { id: 101, name: 'Ofri', country: 'Israel' }
