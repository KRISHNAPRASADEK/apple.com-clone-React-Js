import React from 'react'
import './Machome.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
  
      

    },

}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Macmedium() {
     const classes = useStyles();
     const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
            <div class="uk-visible@s uk-hidden@m ">
                 <div class="headbackground-am">

            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
        <li >
            <figure class="headmacbookair-am" style={{marginLeft:'16%'}}></figure><br/>
            <p class="macbookaircap-am" style={{marginLeft:'15.4%',marginTop:'-11%',color:'black',fontSize:'10px'}}>MacBook Air</p>
        </li>
        <li>
           <figure class="headmacbookairpro13-am" style={{marginLeft:'-55%',marginTop:'-0%'}}></figure><br/>
            <p class="macbookpro13cap-am"  style={{marginLeft:'-57.6%',marginTop:'-11%',color:'black',fontSize:'10px'}}>MacBook Pro 13"</p>
        </li>
        <li>
            <figure class="headmacpro16-am" style={{marginLeft:'-126%',marginTop:'-0.2%'}}></figure><br/>
            <p class="macbookpro16cap-am" style={{marginLeft:'-127.6%',marginTop:'-11%',color:'black',fontSize:'10px'}}>MacBook Pro 16"</p>
        </li>
        <li>
            <figure class="headimac24-am"  style={{marginLeft:'-197%',marginTop:'-0.4%'}}></figure><br/>
            <p class="imac24cap-am"  style={{marginLeft:'-193.6%',marginTop:'-11%',color:'black',fontSize:'10px'}}>iMac 24"</p>  
             <p class="imac24newcap-am" style={{color: '#f56300',marginLeft:'-190.6%',marginTop:'0%',fontSize:'55%'}}>New</p>
        </li>
        <li>
            <figure class="headimac27-am" style={{marginLeft:'-268%',marginTop:'0.6%'}}></figure><br/>
            <p class="imac27cap-am" style={{marginLeft:'-264.5%',marginTop:'-12%',color:'black',fontSize:'10px'}}>iMac 27"</p>
        </li>
        <li>
           <figure class="headimacpro-am" style={{marginLeft:'-342%',marginTop:'0.6%'}}></figure><br/>
            <p class="imacprocap-am" style={{marginLeft:'-338.6%',marginTop:'-12%',color:'black',fontSize:'10px'}}>Mac Pro</p>
        </li>
        <li>
              <figure class="headmacmini-am"  style={{marginLeft:'-424.6%',marginTop:'0.4%'}}></figure><br/>
            <p class="macminicap-am" style={{marginLeft:'-421.6%',marginTop:'-11.5%',color:'black',fontSize:'10px'}}>Mac mini</p>
        </li>
        <li>
            <figure class="headcompare-am" style={{marginLeft:'-485%',marginTop:'1.6%'}}></figure><br/>
            <p class="comparecap-am" style={{marginLeft:'-482.6%',marginTop:'-12%',color:'black',fontSize:'10px'}}>Compare</p>
        </li>
        <li>
            <figure class="headprodisplay-am" style={{marginLeft:'-556%',marginTop:'0.6%'}}></figure><br/>
            <p class="prodisplaycap-am" style={{marginLeft:'-557.6%',marginTop:'-11%',color:'black',fontSize:'10px'}}>Pro Display XDR</p>
            
        </li>
        <li>
            <figure class="headaccessories-am" style={{marginLeft:'-628%',marginTop:'-0.4%'}}></figure><br/>
            <p class="accessoriescap-am"  style={{marginLeft:'-627.6%',marginTop:'-10%',color:'black',fontSize:'10px'}}>Accessories</p>
        </li>
        <li>
            <figure class="headbigsur-am" style={{marginLeft:'-703%',marginTop:'0.6%'}}></figure><br/>
            <p class="bigsurcap-am" style={{marginLeft:'-699.6%',marginTop:'-11%',color:'black',fontSize:'10px'}}>Bigsur</p>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous" style={{color:'black',width:'8px'}}></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next" style={{color:'black',width:'8px'}}></a>

      </div>
         
       </div>

        <div style={{marginTop:'7%'}}>
            <h2 class="newclass-am" >New</h2>
            <h2 class="macclass-am" style={{fontSize:'217%',marginTop:'-3%'}}>iMac</h2>
            <p class="helloclass-am"  style={{fontSize:'22px',marginTop:'-2.5%'}}>Say hello</p>
            <p class="priceclass-am" style={{marginTop:'-2%'}}>From $1299</p>
            <p class="buybutton-am" style={{textAlign:'center'}}> <button class="buttonclass-am uk-button uk-button-primary" style={{textTransform: 'capitalize'}}>Buy</button></p>
        </div>  

        <div>
            
            <figure class="figimage1-am" style={{width:'904px',backgroundSize:'936px 446px',marginLeft:'-531px'}}></figure>
        </div> 
        <div class="rightmacbackground-am" >
            <h2 class="rightmac-am">Which Mac is right for you?</h2>
            <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="none" class="tabclass-am" > 
            
                <Tab label="Notebook"  style={{textTransform: 'capitalize',fontSize:'15px',marginLeft: '229px'}} {...a11yProps(0) }/>
                <Tab label="Desktop"  style={{textTransform: 'capitalize',fontSize:'15px',marginLeft: '-51px'}} {...a11yProps(1)} />
                
            </Tabs>
            <hr class="hrclass-am" style={{width:'24%',marginLeft:'35%',marginTop:'-1%'}}/>
             <TabPanel value={value} index={0}  >
                <div >
                     <figure class="notebookimageone-am" style={{marginLeft:'2%',backgroundSize:'225px 147px'}}></figure>    
                       <p class="macbookair-am" style={{marginLeft:'-64%',marginTop:'3%',fontSize:'19px'}}>MacBook Air </p> <br/>
                       <p class="macbookprice-am" style={{marginLeft:'-65%'}}>From $999</p>  <br/>
                        <figure class="dotclass1-am" style={{marginLeft:'13%'}}></figure> 
                        <p class="macbuybutton-am" style={{textAlign:'center'}}> <button class="buttonclass1-am uk-button uk-button-primary" style={{marginLeft:'-64%'}}>Buy</button></p>
                        
               
                
                    <figure class="notebookimagetwo-am"  style={{marginLeft:'35%',backgroundSize:'225px 147px',marginTop:'-49.8%'}}></figure>    
                       <p class="macbookpro-am" style={{marginLeft:'4%',marginTop:'1.9%',fontSize:'19px'}}>MacBook Pro 13” </p> <br/>
                       <p class="macbookproprice-am" style={{marginLeft:'2%'}}>From $1299</p>  <br/>
                        <figure class="dotclass2-am"  style={{marginLeft:'48%'}}></figure> 
                        <p class="macprobuybutton-am" style={{textAlign:'center'}}> <button class="buttonclass2-am uk-button uk-button-primary" style={{marginLeft:'3%'}}>Buy</button></p>
                        

                    <figure class="notebookimagethree-am" style={{marginLeft:'68%',backgroundSize:'207px 132px',marginTop:'-47.8%',width:'254px'}}></figure>    
                       <p class="macbookpro16-am" style={{marginLeft:'66%',marginTop:'-2.1%',fontSize:'19px'}}>MacBook Pro 16” </p> <br/>
                       <p class="macbookproprice16-am" style={{marginLeft:'65%'}}>From $2399</p>  <br/>
                        <figure class="dotclass3-am" style={{marginLeft:'80%'}}></figure> 
                        <p class="macprobuybutton16-am" style={{textAlign:'center'}}> <button class="buttonclass3-am uk-button uk-button-primary" style={{marginLeft:'67%'}}>Buy</button></p>

                         <hr class="fighrclass1" style={{width:'33%',marginLeft:'3%',marginTop:'2.5%',borderBottom:'1px solid'}}></hr>
                         <hr class="fighrclass2" style={{width:'26%',marginLeft:'42%',marginTop:'-2.9%',borderBottom:'1px solid'}} ></hr>
                       <hr class="fighrclass3" style={{width:'25%',marginLeft:'73%',marginTop:'-2.9%',borderBottom:'1px solid'}}></hr>
                       
                </div>

                  <div>
                       <p class="macbookairsize-am" style={{marginLeft:'-62%',marginTop:'7.8%'}}>13.3”</p>
                       <p class="retinaclass1-am" style={{marginLeft:'-61%',marginTop:'-2%'}}>Retina display<sup>1</sup></p>

                       <p class="macbookprosize-am" style={{marginLeft:'5%',marginTop:'-9.7%'}}>13.3”</p>
                       <p class="retinaclass2-am" style={{marginLeft:'5%',marginTop:'-2%'}}>Retina display<sup>1</sup></p>

                       <p class="macbookpro16size-am" style={{marginLeft:'70%',marginTop:'-9.2%'}}>16”</p>
                       <p class="retinaclass3-am" style={{marginLeft:'70%',marginTop:'-2.4%'}}>Retina display<sup>1</sup></p>

                       <figure class="compareicon1-am" style={{marginLeft:'16%',marginTop:'5%'}}></figure>
                       <p class="comparepara1-am" style={{marginLeft:'-60%',marginTop:'-2%'}}>Apple M1 chip</p>

                       <figure class="compareicon2-am" style={{marginLeft:'49%',marginTop:'-12%'}}></figure>
                       <p class="comparepara2-am" style={{marginLeft:'5%',marginTop:'-2%'}}>Apple M1 chip</p>
                       <p class="comparepara21-am" style={{marginLeft:'6%',marginTop:'-2.4%'}}>Also available with <br/> Intel Core  i5 or i7 <br/> processor</p>

                        <figure class="compareicon3-am" style={{marginLeft:'81%',marginTop:'-21%'}}></figure>
                       <p class="comparepara3-am" style={{marginLeft:'68%',marginTop:'-2%'}}>Up to Intel Core i9 processor</p>

                        <figure class="comparememoryicon1-am" style={{marginLeft:'17%',marginTop:'15%'}}></figure>
                       <p class="comparememorypara1-am" style={{marginLeft:'-57%',marginTop:'-2%'}}>Up to 16GB unified memory</p>
                       <p class="comparememorypara12-am" style={{marginLeft:'-56%',marginTop:'-2.4%'}}>For increased performance <br/>and power efficiency</p>

                       <figure class="comparememoryicon2-am" style={{marginLeft:'50%',marginTop:'-18.5%'}}></figure>
                       <p class="comparememorypara2-am" style={{marginLeft:'10%',marginTop:'-1.5%'}}>Up to 16GB unified memory<sup>4</sup></p>
                       <p class="comparememorypara22-am" style={{marginLeft:'11%',marginTop:'-2.4%'}}>For increased performance <br/>and power efficiency</p>

                        <figure class="comparememoryicon3-am" style={{marginLeft:'82%',marginTop:'-18.5%'}}></figure>
                       <p class="comparememorypara3-am" style={{marginLeft:'73%',marginTop:'-2%'}}>Up to 64GB memory</p>

                       <p class="tb1-am" style={{marginLeft:'-58%',marginTop:'12.4%'}}>2TB</p>
                       <p class="tbpara1-am" style={{marginLeft:'-56%',marginTop:'-2.4%'}}>Maximum configurable storage<sup>2</sup></p>

                       <p class="tb2-am" style={{marginLeft:'9%',marginTop:'-9%'}}>2TB</p>
                       <p class="tbpara2-am" style={{marginLeft:'8.9%',marginTop:'-2.6%'}}>Maximum configurable storage<sup>4</sup></p>

                       <p class="tb3-am"  style={{marginLeft:'71%',marginTop:'-9%'}}>8TB</p>
                       <p class="tbpara3-am"  style={{marginLeft:'70%',marginTop:'-2.7%'}}>Maximum configurable storage<sup>2</sup></p>

                       <figure class="batteryimage1-am" style={{marginLeft:'18%',marginTop:'5%'}}></figure>
                       <p class="batterypara1-am" style={{marginLeft:'-55%',marginTop:'-3.4%'}} >Up to 18 hours battery life<sup>3</sup></p>
                       
                       <figure class="batteryimage1-am" style={{marginLeft:'52%',marginTop:'-11%'}}></figure>
                       <p class="batterypara2-am" style={{marginLeft:'12%',marginTop:'-3.4%'}}>Up to 20 hours battery life<sup>5</sup></p>
                       
                       <figure class="batteryimage1-am" style={{marginLeft:'83%',marginTop:'-10.8%'}}></figure>
                       <p class="batterypara3-am" style={{marginLeft:'73%',marginTop:'-3.9%'}}>Up to 11 hours battery life<sup>6</sup></p>

                       <figure class="cameraimage1-am" style={{marginLeft:'18.6%'}} ></figure>
                       <p class="camerapara1-am" style={{marginLeft:'-56%',marginTop:'-3%'}}>720p FaceTime HD camera</p>
                       <p class="camerapara12-am" style={{marginLeft:'-55%',marginTop:'-2.5%'}}>With the image signal<br/>processor of M1 for drastically<br/>improved performance</p>
                       
                        <figure class="cameraimage1-am" style={{marginLeft:'52.5%',marginTop:'-19.5%'}}></figure>
                       <p class="camerapara1-am" style={{marginLeft:'10%',marginTop:'-3.1%'}}>720p FaceTime HD camera</p>
                       <p class="camerapara12-am" style={{marginLeft:'10%',marginTop:'-2.6%'}}>With the image signal<br/>processor of M1 for drastically<br/>improved performance</p>

                       <figure class="cameraimage1-am" style={{marginLeft:'84%',marginTop:'-19.5%'}}></figure>
                       <p class="camerapara1-am" style={{marginLeft:'72%'}}>720p FaceTime HD camera</p>

                       <p class="lbclass1-am" style={{marginLeft:'-54%',marginTop:'16%'}}  >2.8 lb.</p>
                       <p class="lbclasspara1-am" style={{marginLeft:'-54%',marginTop:'-2.4%'}}>Weight</p>

                       <p class="lbclass1-am" style={{marginLeft:'12%',marginTop:'-10%'}}>3.0 lb.</p>
                       <p class="lbclasspara1-am" style={{marginLeft:'12%'}}>Weight</p>

                       <p class="lbclass1-am" style={{marginLeft:'76%',marginTop:'-9.1%'}}>4.3 lb.</p>
                       <p class="lbclasspara1-am" style={{marginLeft:'76%'}}>Weight</p>

                       <figure class="touchclass1-am" style={{marginLeft:'20%',marginTop:'7%'}} ></figure>
                       <p class="touchcap1-am" style={{marginLeft:'-52%',marginTop:'-2%'}}>Touch ID</p>
                       
                       <figure class="touchclass2-am" style={{marginLeft:'45%',marginTop:'-11.1%',backgroundSize:'148px 34px'}} ></figure>
                       <p class="touchcap2-am" style={{marginLeft:'11%',marginTop:'-2%'}}>Touch Bar and Touch ID</p>
                      
                       <figure class="touchclass2-am" style={{marginLeft:'77%',marginTop:'-10.9%',backgroundSize:'135px 30px'}} ></figure>
                       <p class="touchcap2-am" style={{marginLeft:'73%',marginTop:'-2.6%'}}>Touch Bar and Touch ID</p>
                        
                        <div>
                        <hr class="touchhrclass1" style={{width:'30%',marginLeft:'8%',marginTop:'4.5%',borderBottom:'0px solid'}}></hr>
                         <hr class="touchhrclass3" style={{width:'26%',marginLeft:'43%',marginTop:'-2.7%',borderBottom:'0px solid'}} ></hr>
                       <hr class="touchhrclass2" style={{width:'23%',marginLeft:'75%',marginTop:'-3%',borderBottom:'0px solid'}}></hr>
                      
                       </div>
                       
                </div>
             </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{marginTop:'5%'}}>
                   <figure class="desktopimageone-am" style={{marginTop:'5%',width:'203px',height:'167px',backgroundSize:'203px 167px',backgroundRepeat:'no-repeat',marginLeft:'12%' }}></figure>    
                        <p class="deskimac24newcap-am" style={{color: '#f56300',marginLeft:'-47.6%',marginTop:'2%',fontSize:'79%'}}>New</p>
                       <p class="deskimac24-am" style={{fontSize:'19px',marginLeft:'-46%',marginTop:'-2%'}}>iMac 24” </p> <br/>
                       <p class="deskimac24price-am"  style={{marginTop:'-5%',marginLeft:'-47%'}}>From $1299</p>  <br/>
                        <figure class="deskdotclass1-am" style={{marginTop:'-9%',marginLeft:'15%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginTop:'2%',marginLeft:'-46%'}}>Buy</button></p>
                        

                        <figure class="desktopimagetwo-am" style={{marginTop:'-54%',width:'195px',height:'181px',backgroundSize:'195px 181px',backgroundRepeat:'no-repeat',marginLeft:'54%' }}></figure>
                       <p class="deskimac27-am" style={{fontSize:'19px',marginLeft:'39%',marginTop:'6%'}} >iMac 27” </p> <br/>
                       <p class="deskimac27price-am"  style={{marginTop:'-5.5%',marginLeft:'39%'}}>From $1799</p>  <br/>
                        <figure class="deskdotclass2-am" style={{marginTop:'-3%',marginLeft:'68%'}} ></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'39.5%',marginTop:'2%'}}>Buy</button></p>

                         <hr class="descimachr1-am" style={{width:'42%',marginTop:'7%',marginLeft:'5%',borderBottom:'0px solid'}}/>
                        <hr class="descimachr2-am" style={{width:'41%',marginTop:'-3%',marginLeft:'53%',borderBottom:'0px solid'}}/>

                        <p class="deskretina1-am" style={{marginTop:'9.8%',marginLeft:'-47%'}}>4.5K</p>
                        <p class="deskretinacap1-am"style={{marginTop:'-2%',marginLeft:'-46%'}}>Retina display<sup>7</sup></p>
                        <p class="deskretinacap12-am" style={{marginTop:'-2.5%',marginLeft:'-47%'}}>218 ppi</p>

                        <p class="deskretina2-am" style={{marginTop:'-11.9%',marginLeft:'42%'}}>5K</p>
                        <p class="deskretinacap2-am" style={{marginTop:'-2.5%',marginLeft:'44%'}}>Retina display<sup>1</sup></p>
                        <p class="deskretinacap12-am" style={{marginLeft:'43%',marginTop:'-2.5%'}}>218 ppi</p>

                         <figure class="m1chipclass1-am" style={{marginTop:'7%',marginLeft:'23%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-2.5%',marginLeft:'-47%'}}>Apple M1 chip</p>

                         <figure class="m1chipclass2-am" style={{marginTop:'-11.5%',marginLeft:'68%'}}></figure>
                        <p class="m1chipcap1-am"  style={{marginTop:'-2.5%',marginLeft:'43%'}}>Up to Intel Core i9 <br/> processor</p>

                          <figure class="deskmemoryclass1-am" style={{marginTop:'7%',marginLeft:'24%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'-44%'}}>Up to 16GB unified memory</p>
                        <p class="m1chipcap21-am" style={{marginTop:'-2.4%',marginLeft:'-44%'}}>For increased performance <br/> and power efficiency</p>

                        <figure class="deskmemoryclass2-am" style={{marginTop:'-18%',marginLeft:'69%'}}></figure> 
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'46%'}}>Up to 128GB memory</p>

                        <p class="desk2tbclass-am" style={{marginTop:'14%',marginLeft:'-45%'}}>2TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-2.5%',marginLeft:'-44%'}}>Maximum configurable <br/> storage<sup>2</sup></p>

                        <p class="desk2tbclass-am" style={{marginTop:'-12%',marginLeft:'47%'}}>8TB</p>
                        <p class="desk2tbclasspara-am"style={{marginTop:'-2.4%',marginLeft:'47%'}}>Maximum configurable <br/> storage<sup>2</sup></p>

                        <figure class="deskfacetimecameraclass1-am" style={{marginLeft:'26%',marginTop:'7%'}}></figure>
                        <p class="deskfacetimecamerapara1-am" style={{marginLeft:'-43%',marginTop:'-2.5%'}}>1080p FaceTime HD camera</p>
                         <p class="deskfacetimecamerapara2-am" style={{marginLeft:'-40%',marginTop:'-2.5%'}}>With the image signal <br/>  processor of M1 for drastically<br/>improved performance</p>

                         <figure class="deskfacetimecameraclass1-am" style={{marginLeft:'71%',marginTop:'-20.9%'}}></figure>
                        <p class="deskfacetimecamerapara1-am"  style={{marginLeft:'48%',marginTop:'-2%'}}>1080p FaceTime HD camera</p>

                         <figure class="deskmagickeyboardclass1-am" style={{marginLeft:'26%',marginTop:'16%'}}></figure>
                        <p class="deskmagickeyboardpara1-am" style={{marginLeft:'-40%',marginTop:'-2.4%'}}>Configurable with<br/>Magic Keyboard with Touch ID <br/> and Numeric Keypad</p>

                        <figure class="deskmagickeyboardclass2-am" style={{marginLeft:'67%',marginTop:'-18%',backgroundSize:'120px 42px'}}></figure>
                        <p class="deskmagickeyboardpara2-am"  style={{marginLeft:'51%',marginTop:'-2%'}}>Configurable with<br/> Magic Keyboard with<br/> Numeric Keypad</p>

                         <hr class="deskendhrclass1" style={{width:'44%',marginLeft:'8%',marginTop:'7.5%',borderBottom:'0px solid'}}></hr>
                         <hr class="deskendhrclass2" style={{width:'39%',marginLeft:'57%',marginTop:'-3%',borderBottom:'0px solid'}} ></hr>

                         <div style={{marginTop:'39%'}}>
                            
                        <figure class="desktopimagethree-am" style={{marginTop:'-23%',width:'203px',height:'167px',backgroundSize:'203px 167px',backgroundRepeat:'no-repeat',marginLeft:'15%' }}></figure>
                       <p class="deskimacpro-am" style={{fontSize:'21px',marginLeft:'-41%',marginTop:'8%'}}>Mac Pro </p> <br/>
                       <p class="deskimacproprice-am" style={{marginTop:'-3%',marginLeft:'-41%'}}>From $5999</p>  <br/>
                        <figure class="deskdotclass3-am" style={{marginTop:'-4%',marginLeft:'28%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'-41.5%',marginTop:'1%'}}>Buy</button></p>

                         
                        <figure class="desktopimagefour-am" style={{marginTop:'-55%',width:'203px',height:'167px',backgroundSize:'203px 167px',backgroundRepeat:'no-repeat',marginLeft:'61%' }}></figure>
                       <p class="deskmacmini-am" style={{fontSize:'20px',marginLeft:'51%',marginTop:'7.7%'}}>Mac mini </p> <br/>
                       <p class="deskmacminiprice-am" style={{marginTop:'-2.5%',marginLeft:'51%'}}>From $699</p>  <br/>
                        <figure class="deskdotclass4-am" style={{marginTop:'-4%',marginLeft:'73.5%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'53.5%',marginTop:'1%'}}>Buy</button></p>

                          <hr class="descimachr3-am" style={{width:'40%',marginTop:'10%',marginLeft:'7%',borderBottom:'0px solid'}}/>
                        <hr class="descimachr4-am" style={{width:'42%',marginTop:'-2.9%',marginLeft:'54%',borderBottom:'0px solid'}}/>

                        <p class="deskretina3-am" style={{width:'6%',borderBottom:'1px solid',marginTop:'13.8%',marginLeft:'27%'}}></p>
                        <p class="deskretina4-am" style={{width:'5%',borderBottom:'1px solid',marginTop:'-2.5%',marginLeft:'73%'}}></p>

                         <figure class="m1chipclass2-am" style={{marginTop:'7%',marginLeft:'26%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'-42%'}}>Intel Xeon W processor</p>

                        <figure class="m1chipclass1-am" style={{marginTop:'-12.1%',marginLeft:'72%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'51%'}}>Apple M1 chip</p>
                        <p class="m1chipcap21-am" style={{marginTop:'-2.5%',marginLeft:'51%'}}>Also available with Intel<br/> Core i5 or i7 processor</p>

                         <figure class="deskmemoryclass2-am" style={{marginTop:'8%',marginLeft:'27%'}}></figure> 
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'-40%'}}>Up to 1.5TB memory</p>

                         <figure class="deskmemoryclass1-am"   style={{marginTop:'-12%',marginLeft:'73%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-2%',marginLeft:'53%'}}>Up to 16GB unified memory <sup>8</sup></p>
                        <p class="m1chipcap21-am" style={{marginLeft:'54%',marginTop:'-2.5%'}}>For increased performance <br/> and power efficiency</p>

                         <p class="desk2tbclass-am" style={{marginTop:'10%',marginLeft:'-39%'}}>8TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-2.4%',marginLeft:'-39%'}}>Maximum configurable <br/>storage<sup>2</sup></p>
                       
                       <p class="desk2tbclass-am"  style={{marginTop:'-12%',marginLeft:'54%'}}>2TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-2.4%',marginLeft:'55%'}}>Maximum configurable <br/> storage<sup>2</sup></p>

                        <p class="deskfacetimecameraclass2-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'28%',marginTop:'12%'}}></p>
                        <p class="deskfacetimecameraclass3-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'75%',marginTop:'-2.9%'}}></p>

                         <figure class="deskmagickeyboardclass2-am" style={{marginLeft:'20%',marginTop:'10.7%'}}></figure>
                        <p class="deskmagickeyboardpara2-am" style={{marginLeft:'-40%',marginTop:'-2%'}}>Magic Keyboard with<br/>Numeric Keypad</p>
                         
                         <p class="deskmagickeyboardclass3-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'75%',marginTop:'-12%'}}></p>

                           <hr class="deskendhrclass3" style={{width:'44%',marginLeft:'8%',marginTop:'19.5%',borderBottom:'0px solid'}}></hr>
                         <hr class="deskendhrclass4" style={{width:'39%',marginLeft:'58%',marginTop:'-3%',borderBottom:'0px solid'}} ></hr>
                         </div>
                </div>
          </TabPanel>
               
            </div>
            </div>
         

   </div>
        </>
    )
}
