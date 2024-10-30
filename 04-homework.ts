(() => {


    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana' , 'cereza', 'ciruela']
       
            return redFruits.includes(fruit);
        }

        type fruitcolor = 'red';'yellow';'purple';


    function getFruitsByColor( color: string ): string[] {
const getFruitsByColor = {
    red:  ['manzana','fresa'],
    yellow: ['piña','banana'],
    purple:['moras','uvas'],
};

    if ( !Object.keys( getFruitsByColor).includes(color))throw Error( 'the color must be: red,  yellow, purple');
       
return getFruitsByColor[color];





    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    }


    
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); 
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); 



    console.log({ redFruits: getFruitsByColor('red') }); 
    console.log({ yellowFruits: getFruitsByColor('yellow') }); 
    console.log({ purpleFruits: getFruitsByColor('purple') }); 

    console.log({ workingSteps: workingSteps() }); 
}
);






