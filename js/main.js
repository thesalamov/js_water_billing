/* All customer Code*/
const residentialCustomer = 1001;
const commercialCustomer = 1002;
const industrialCustomer = 1003;
const fullValue = 999999999;

/* Residential Customer */

const residentialMoney = 5;
const residentialPerGallon = 0.0005;

/* Commercial Customer */

const commercialMoney = 1000;
const commercialPerGallon = 0.00025;
const commercialGallons=4000000;

/* Industrial Customer */

const industrialMoneyNotFourMillion = 1000;
const industrialMoneyFourMillion = 2000;
const industrialMoneyPerGallon = 0.00025;
const industrialGallons1=4000000;
const industrialGallons2=10000000;


var customerCode = Math.abs(prompt("Please,enter your customer code!!!"));

/* Residential Customer Debt */

if (customerCode == residentialCustomer) {
    var beforeResidentialValue = Math.abs(prompt("Residential Customer !!! Please,enter previous consumption"));
    var currentResidentialValue = Math.abs(prompt("Please, enter current consumption"));
    if (beforeResidentialValue > currentResidentialValue) {
        var residentialConsumption1 = ((fullValue - beforeResidentialValue) + currentResidentialValue) / 10;
        var residentialDebt =Math.floor(5 + residentialConsumption1 * residentialPerGallon) ;
        alert(`       Residential Customer!!!
       The customer's code:  ${customerCode}
       The customer's beginning meter reading:  ${beforeResidentialValue}
       The customer's ending meter reading: ${currentResidentialValue}
       The gallons of water used by the customer: ${residentialConsumption1}
       The amount of money billed to the customer: ${residentialDebt} $`);

    }

    else if (beforeResidentialValue < currentResidentialValue) {
        var residentialConsumption2 = (currentResidentialValue - beforeResidentialValue) / 10;
        var residentialDebt =Math.floor( 5 + residentialConsumption2 * residentialPerGallon);
        alert(`       Residential Customer!!! 
       The customer's code:  ${customerCode}
       The customer's beginning meter reading:  ${beforeResidentialValue}
       The customer's ending meter reading: ${currentResidentialValue}
       The gallons of water used by the customer: ${residentialConsumption2}
       The amount of money billed to the customer: ${residentialDebt}`);
    }

}

/* Commercial Customer Debt */


else if(customerCode==commercialCustomer) {
    var beforeCommercialValue = Math.abs(prompt("Commercial Customer !!! Please,enter previous consumption"));
    var currentCommercialValue = Math.abs(prompt("Please, enter current consumption"));
    if (beforeCommercialValue > currentCommercialValue) {
        var commercialConsumption1 = ((fullValue - beforeCommercialValue) + currentCommercialValue) / 10;
        if(commercialConsumption1<=commercialGallons){
            var commercialDebt1 =commercialMoney ;
        }
        else if(commercialConsumption1>commercialGallons){
            commercialDebt1=commercialMoney + (commercialConsumption1-commercialGallons)*commercialPerGallon;
        }
        
        alert(`       Commercial Customer!!!
       The customer's code:  ${customerCode}
       The customer's beginning meter reading:  ${beforeCommercialValue}
       The customer's ending meter reading: ${currentCommercialValue}
       The gallons of water used by the customer: ${commercialConsumption1}
       The amount of money billed to the customer: ${commercialDebt1} $`);
}

else if (beforeCommercialValue < currentCommercialValue) {
    var commercialConsumption2 = (currentCommercialValue - beforeCommercialValue) / 10;
    if(commercialConsumption2<=commercialGallons){
        var commercialDebt2 =commercialMoney ;
    }
    else if(commercialConsumption2>commercialGallons){
        commercialDebt2=commercialMoney + (commercialConsumption2-commercialGallons)*commercialPerGallon;
    }
    
    alert(`       Commercial Customer!!!
   The customer's code:  ${customerCode}
   The customer's beginning meter reading:  ${beforeCommercialValue}
   The customer's ending meter reading: ${currentCommercialValue}
   The gallons of water used by the customer: ${commercialConsumption2}
   The amount of money billed to the customer: ${commercialDebt2} $`);
}
}

/* Industrial Customer Debt */


else if (customerCode==industrialCustomer){
    var beforeIndustrialValue = Math.abs(prompt("Industrial Customer !!! Please,enter previous consumption"));
    var currentIndustrialValue = Math.abs(prompt("Please, enter current consumption"));
    if (beforeIndustrialValue > currentIndustrialValue) {
        var industrialConsumption1 = ((fullValue - beforeIndustrialValue) + currentIndustrialValue) / 10;
     if (industrialGallons1>=industrialConsumption1) {
            var industrialDebt1=industrialMoneyNotFourMillion;
        }
     else if(industrialConsumption1>industrialGallons1 && industrialConsumption1<=industrialGallons2){
        industrialDebt1=industrialMoneyFourMillion;
     }
     else if (industrialConsumption1>industrialGallons2){
        industrialDebt1=industrialMoneyFourMillion + industrialConsumption1*industrialMoneyPerGallon;
     }
     
     alert(`       Industrial Customer!!!
The customer's code:  ${customerCode}
The customer's beginning meter reading:  ${beforeIndustrialValue}
The customer's ending meter reading: ${currentIndustrialValue}
The gallons of water used by the customer: ${industrialConsumption1}
The amount of money billed to the customer: ${industrialDebt1} $`);
}
else if(beforeIndustrialValue<currentIndustrialValue){
    var industrialConsumption2=(currentIndustrialValue-beforeIndustrialValue)/10;
    if (industrialGallons1>=industrialConsumption2) {
        var industrialDebt2=industrialMoneyNotFourMillion;
    }
 else if(industrialConsumption2>industrialGallons1 && industrialConsumption2<=industrialGallons2){
    industrialDebt2=industrialMoneyFourMillion;
 }
 else if (industrialConsumption2>industrialGallons2){
    industrialDebt2=industrialMoneyFourMillion + industrialConsumption2*industrialMoneyPerGallon;
 }
 
 alert(`       Industrial Customer!!!
The customer's code:  ${customerCode}
The customer's beginning meter reading:  ${beforeIndustrialValue}
The customer's ending meter reading: ${currentIndustrialValue}
The gallons of water used by the customer: ${industrialConsumption2}
The amount of money billed to the customer: ${industrialDebt2} $`);
    
}
}

else {
    alert("Re-enter your customer code!!!");
}