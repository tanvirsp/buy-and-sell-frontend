//View number English to Bangla       

export default function(number){
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

