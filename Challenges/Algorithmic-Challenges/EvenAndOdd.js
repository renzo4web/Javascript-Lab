const showNumbers = (limit)=>{

    for (let index = 0; index <= limit; index++) {
       console.log(index % 2 === 0 ? `${index} EVEN` : `${index} ODD`);    
    }


}

showNumbers(10)