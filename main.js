
const currencyConvert = {
    //API_KEY : 'ddab7737ed788dc37149',
    API_KEY : '8e637920d7c1f4ce0b1e',
    convertFrom : '',
    convertTo : '',
    
    async currencyConverts(){
        try{
            const res = await fetch(`https://free.currconv.com/api/v7/convert?q=${this.convertFrom}_${this.convertTo},${this.convertTo}_${this.convertFrom}&compact=ultra&apiKey=${this.API_KEY}`);
            const datas = await res.json();
           return datas ;
          
        }
        catch(err){
            console.log(err)
        }
       
       // console.log(data.USD_BDT);
    }
}

const UI = {
    loadSelectors()
    {
        const userInputElm = document.querySelector('#userValue');
        const userConvertFromElm = document.querySelector('#convertFrom');
        const resultOutPutElm = document.querySelector('#resultValue');
        //const userConvertToElm = document.querySelector('#convertTo');
        const userConvertToElm = document.getElementById("convertTo");
        const formElm = document.querySelector('#form');

    return {
        userInputElm,
        userConvertFromElm,
        resultOutPutElm,
        userConvertToElm,
        formElm
    }
    

    },
   
    async handleRemoteData(convertTo, userConvertFrom) {
        //currencyConvert.convertFrom = userConvertFrom.value;
        currencyConvert.convertTo = convertTo;
        currencyConvert.convertFrom = userConvertFrom
        // console.log(convertTo);
        const data = await currencyConvert.currencyConverts()
        
        return data;
      },
    getResultConvertTo(){
        const { userConvertFromElm, resultOutPutElm, userInputElm, userConvertToElm } = this.loadSelectors();
        
        
        userConvertToElm.addEventListener('change', (evt) => {
            evt.preventDefault();
            
            const convertTo = userConvertToElm.value;
            const userData = userInputElm.value;
            const userConvertFrom = userConvertFromElm.value;
            //resultOutPutElm.value = userData * 5;
        //   console.log(convertTo);
          //const result = await currencyConvert.currencyConverts()
          const result =  this.handleRemoteData(convertTo, userConvertFrom);
          const p = Promise.resolve(result);
            const xx = userConvertFrom + "_" + convertTo;
            
          p.then(value => {
            userInputElm.value = userData;
              const final_data = userData * value[xx];
            resultOutPutElm.value = final_data.toFixed(2);
           
          }).catch(err => {
            console.log(err);
          });
          //console.log(result);
          
        });
        userConvertFromElm.addEventListener('change', (evt) => {
            evt.preventDefault();
            
            const convertTo = userConvertToElm.value;
            const userData = userInputElm.value;
            const userConvertFrom = userConvertFromElm.value;
            //resultOutPutElm.value = userData * 5;
        //   console.log(convertTo);
          //const result = await currencyConvert.currencyConverts()
          const result =  this.handleRemoteData(convertTo, userConvertFrom);
          const p = Promise.resolve(result);
            const xx = userConvertFrom + "_" + convertTo;
            
          p.then(value => {
            userInputElm.value = userData;
            resultOutPutElm.value = userData * value[xx]
            
          }).catch(err => {
            console.log(err);
          });
          //console.log(result);
          
        });
        userInputElm.addEventListener('keyup', (evt) => {
            evt.preventDefault();
            
            const convertTo = userConvertToElm.value;
            const userData = userInputElm.value;
            const userConvertFrom = userConvertFromElm.value;
            //resultOutPutElm.value = userData * 5;
        //   console.log(convertTo);
          //const result = await currencyConvert.currencyConverts()
          const result =  this.handleRemoteData(convertTo, userConvertFrom);
          const p = Promise.resolve(result);
            const xx = userConvertFrom + "_" + convertTo;
            
          p.then(value => {
            userInputElm.value = userData;
            resultOutPutElm.value = userData * value[xx]
            
          }).catch(err => {
            console.log(err);
          });
          //console.log(result);
          
        });
        resultOutPutElm.addEventListener('keyup', (evt) => {
            evt.preventDefault();
            
            const convertTo = userConvertToElm.value;
            ///const userData = userInputElm.value;
            const userConvertFrom = userConvertFromElm.value;
            const outPut = resultOutPutElm.value;
            //resultOutPutElm.value = userData * 5;
        //   console.log(convertTo);
          //const result = await currencyConvert.currencyConverts()
          const result =  this.handleRemoteData(convertTo, userConvertFrom);
          const p = Promise.resolve(result);
            const xx = userConvertFrom + "_" + convertTo;
            
          p.then(value => {
            userInputElm.value = outPut / value[xx];
            resultOutPutElm.value = outPut;
            
          }).catch(err => {
            console.log(err);
          });
          //console.log(result);
          
        })
    },
   
}

UI.getResultConvertTo()

const currencyList = {
    
    //API_KEY : 'ddab7737ed788dc37149',
    API_KEY : '8e637920d7c1f4ce0b1e',
    async getCurrency()
    {
        const { userConvertFromElm, userConvertToElm } = UI.loadSelectors();
        const res = await fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${this.API_KEY}`);
        const resData  = await res.json();
        //console.log(resData.results);
        for (const property in resData.results) {
            const data = resData.results[property];
            // console.log(data.id);
            // console.log(data.currencyName);
            userConvertFromElm.options[userConvertFromElm.options.length] = new Option(data.currencyName, data.id);
            userConvertToElm.options[userConvertToElm.options.length] = new Option(data.currencyName, data.id);
            //console.log(`${property}: ${resData.results[property]}`);
          }
        //return  resData ;
    },
    async loadWindow(){ window.addEventListener('DOMContentLoaded', async () => {
        const { userConvertFromElm, resultOutPutElm, userInputElm, userConvertToElm } = UI.loadSelectors();
        userConvertFromElm.options[userConvertFromElm.options.length] = new Option('United State Dollar', 'USD');
        userConvertToElm.options[userConvertToElm.options.length] = new Option('Bangladeshi Taka', 'BDT');
        const convertTo = 'BDT';
            const userData = 1;
            const userConvertFrom = 'USD';
            //resultOutPutElm.value = userData * 5;
        //   console.log(convertTo);
          //const result = await currencyConvert.currencyConverts()
          const result =  UI.handleRemoteData(convertTo, userConvertFrom);
          const p = Promise.resolve(result);
            const xx = userConvertFrom + "_" + convertTo;
            
          p.then(value => {
            userInputElm.value = userData;
            resultOutPutElm.value = userData * value[xx]
           
          }).catch(err => {
            console.log(err);
          });
        
      })
    }
    
}
currencyList.loadWindow();
currencyList.getCurrency();


