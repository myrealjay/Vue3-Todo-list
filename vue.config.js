module.exports={
    css:{
        loaderOptions:{
            sass:{
                additionalData: `@import "@/styles/main.scss";`
            },
            less:{
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                  primary: '#fff'
                }
              }
        }
    },
    
}