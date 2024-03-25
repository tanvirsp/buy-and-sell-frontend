export const setEmail =(email)=>{
    sessionStorage.setItem("email", email)
}


export const getEmail =()=>{
    return sessionStorage.getItem("email")
}




export const DateEngToBang =(date) =>{
    const englishDate = new Date(date);
// Options for formatting in Bengali (Bn is the ISO 639-1 language code for Bengali)
    const options = { year: "numeric", month: "long", day: "numeric" };
    const bengaliDate = new Intl.DateTimeFormat("bn-IN", options).format( englishDate);
    return bengaliDate
}


export const ViewEngToBang = (number) =>{
    const finalEnlishToBanglaNumber={'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
    
    String.prototype.getDigitBanglaFromEnglish = function() {
        var retStr = this;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };
    
    const english_number=number+"";
    
    const bangla_converted_number=english_number.getDigitBanglaFromEnglish();
    return bangla_converted_number;
}