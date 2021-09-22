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


export default function Macsmall() {
     const classes = useStyles();
     const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        
         <div class="uk-hidden@s ">
        <div class="headbackground-am">

            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
        <li >
            <figure class="headmacbookair-am" style={{marginLeft:'28%'}}></figure><br/>
            <p class="macbookaircap-am" style={{marginLeft:'27.4%',marginTop:'-24%',color:'black',fontSize:'10px'}}>MacBook Air</p>
        </li>
        <li>
           <figure class="headmacbookairpro13-am" style={{marginLeft:'-11%',marginTop:'0.5%'}}></figure><br/>
            <p class="macbookpro13cap-am"  style={{marginLeft:'-16.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>MacBook Pro 13"</p>
        </li>
        <li>
            <figure class="headmacpro16-am" style={{marginLeft:'-51%',marginTop:'0.6%'}}></figure><br/>
            <p class="macbookpro16cap-am" style={{marginLeft:'-54.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>MacBook Pro 16"</p>
        </li>
        <li>
            <figure class="headimac24-am"  style={{marginLeft:'-62%',marginTop:'5.6%'}}></figure><br/>
            <p class="imac24cap-am"  style={{marginLeft:'-56.6%',marginTop:'-21%',color:'black',fontSize:'10px'}}>iMac 24"</p>  
             <p class="imac24newcap-am" style={{color: '#f56300',marginLeft:'-50.6%',marginTop:'0%',fontSize:'55%'}}>New</p>
        </li>
        <li>
            <figure class="headimac27-am" style={{marginLeft:'-105%',marginTop:'5.6%'}}></figure><br/>
            <p class="imac27cap-am" style={{marginLeft:'-98.6%',marginTop:'-21%',color:'black',fontSize:'10px'}}>iMac 27"</p>
        </li>
        <li>
           <figure class="headimacpro-am" style={{marginLeft:'-153%',marginTop:'4.6%'}}></figure><br/>
            <p class="imacprocap-am" style={{marginLeft:'-146.6%',marginTop:'-22%',color:'black',fontSize:'10px'}}>Mac Pro</p>
        </li>
        <li>
              <figure class="headmacmini-am"  style={{marginLeft:'-170.6%',marginTop:'3.6%'}}></figure><br/>
            <p class="macminicap-am" style={{marginLeft:'-164.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>Mac mini</p>
        </li>
        <li>
            <figure class="headcompare-am" style={{marginLeft:'-219%',marginTop:'4.6%'}}></figure><br/>
            <p class="comparecap-am" style={{marginLeft:'-210.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>Compare</p>
        </li>
        <li>
            <figure class="headprodisplay-am" style={{marginLeft:'-266%',marginTop:'4.6%'}}></figure><br/>
            <p class="prodisplaycap-am" style={{marginLeft:'-267.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>Pro Display XDR</p>
            
        </li>
        <li>
            <figure class="headaccessories-am" style={{marginLeft:'-251%',marginTop:'4.6%'}}></figure><br/>
            <p class="accessoriescap-am"  style={{marginLeft:'-249.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>Accessories</p>
        </li>
        <li>
            <figure class="headbigsur-am" style={{marginLeft:'-289%',marginTop:'4.6%'}}></figure><br/>
            <p class="bigsurcap-am" style={{marginLeft:'-279.6%',marginTop:'-24%',color:'black',fontSize:'10px'}}>Bigsur</p>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous" style={{color:'black',width:'8px'}}></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next" style={{color:'black',width:'8px'}}></a>

</div>
         
       </div>

       <div style={{marginTop:'7%'}}>
            <h2 class="newclass-am" >New</h2>
            <h2 class="macclass-am" style={{fontSize:'217%',marginTop:'-7%'}}>iMac</h2>
            <p class="helloclass-am"  style={{fontSize:'22px',marginTop:'-4%'}}>Say hello</p>
            <p class="priceclass-am" style={{marginTop:'-4%'}}>From $1299</p>
            <p class="buybutton-am" style={{textAlign:'center'}}> <button class="buttonclass-am uk-button uk-button-primary" style={{textTransform: 'capitalize'}}>Buy</button></p>
        </div>  
        <div>
            <figure class="machomesmallimageclass" ></figure>
        </div>

         <div class="rightmacbackground-am" style={{marginTop:'14%'}} >
              <h2 class="rightmac-am" style={{marginTop:'5%',fontSize:'35px',lineHeight:'1.125'}}>Which Mac is right for you?</h2>
              <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="none" class="tabclass-am" > 
            
                <Tab label="Notebook"  style={{textTransform: 'capitalize',fontSize:'15px',marginLeft: '86px'}} {...a11yProps(0) }/>
                <Tab label="Desktop"  style={{textTransform: 'capitalize',fontSize:'15px',marginLeft: '7px'}} {...a11yProps(1)} />
                
            </Tabs>
             <hr class="hrclass-am" style={{width:'46%',marginLeft:'26%',marginTop:'-3%'}}/>
             <TabPanel value={value} index={0}>
                <div >
                    <figure class="notebookimageone-am" style={{marginTop:'-3%',width:'138px',height:'113px',backgroundSize:'150px 113px',backgroundRepeat:'no-repeat',marginLeft:'2%' }}></figure>    
                       <p class="macbookair-am" style={{fontSize:'17px',marginLeft:'-47%'}}>MacBook Air </p> <br/>
                       <p class="macbookprice-am" style={{marginTop:'-11%',marginLeft:'-48%'}}>From $999</p>  <br/>
                        <figure class="dotclass1-am" style={{marginTop:'-10%',marginLeft:'15%'}}></figure> 
                        <p class="macbuybutton-am" style={{textAlign:'center'}}> <button class="buttonclass1-am uk-button uk-button-primary">Buy</button></p>
                        <hr class="macbookairhrclass-am" style={{width:'52%',marginLeft:'2%',borderBottom:'2px solid #d2d2d7'}}/>

                        <figure class="notebookimagetwo-am" style={{marginTop:'-98%',width:'138px',height:'113px',backgroundSize:'150px 113px',backgroundRepeat:'no-repeat',marginLeft:'54%' }}></figure>    
                       <p class="macbookpro-am" style={{fontSize:'17px',marginLeft:'54%'}}>MacBook Pro 13” </p> <br/>
                       <p class="macbookproprice-am" style={{marginTop:'-10.5%',marginLeft:'51%'}}>From $1299</p>  <br/>
                        <figure class="dotclass2-am" style={{marginTop:'-10%',marginLeft:'70%'}}></figure> 
                        <p class="macprobuybutton-am" style={{textAlign:'center'}}> <button class="buttonclass2-am uk-button uk-button-primary" style={{marginLeft:'53%'}}>Buy</button></p>
                        <hr class="macbookprohrclass-am" style={{width:'42%',marginLeft:'61%',borderBottom:'2px solid #d2d2d7',marginTop:'-0%'}}/>

                </div>
                <div>
                       <p class="macbookairsize-am" style={{marginTop:'14.8%'}}>13.3”</p>
                       <p class="retinaclass1-am" style={{marginTop:'-5%'}}>Retina display<sup>1</sup></p>

                       <p class="macbookprosize-am" style={{marginTop:'-21.9%',marginLeft:'54.9%'}}>13.3”</p>
                       <p class="retinaclass2-am" style={{marginTop:'-5%',marginLeft:'55%'}}>Retina display<sup>1</sup></p>

                       <figure class="compareicon1-am" style={{marginTop:'11%',marginLeft:'19%'}}></figure>
                       <p class="comparepara1-am" style={{marginTop:'-5%',marginLeft:'-44%'}}>Apple M1 chip</p>

                       <figure class="compareicon2-am" style={{marginTop:'-28.1%',marginLeft:'69%'}}></figure>
                       <p class="comparepara2-am" style={{marginTop:'-5%',marginLeft:'57%'}}>Apple M1 chip</p>
                       <p class="comparepara21-am" style={{marginTop:'-5.4%',marginLeft:'58%'}}>Also available  <br/> with Intel Core <br/> i5 or i7  <br/>processor</p>

                        <figure class="comparememoryicon1-am" style={{marginTop:'12%',marginLeft:'19%'}}></figure>
                       <p class="comparememorypara1-am" style={{marginTop:'-4%',marginLeft:'-44%'}}>Up to 16GB <br/>unified <br/>memory</p>
                       <p class="comparememorypara12-am" style={{marginTop:'-7.4%',marginLeft:'-46%'}}>For<br/> increased<br/> performance <br/>and power<br/> efficiency</p>

                       <figure class="comparememoryicon2-am"style={{marginTop:'-73%',marginLeft:'71%'}}></figure>
                       <p class="comparememorypara2-am" style={{marginTop:'-4%',marginLeft:'61%'}}>Up to 16GB<br/> unified <br/>memory<sup>4</sup></p>
                       <p class="comparememorypara22-am" style={{marginTop:'-7.4%',marginLeft:'60%'}}>For <br/>increased <br/>performance <br/>and power<br/> efficiency</p>

                        <p class="tb1-am" style={{marginTop:'11%'}}>2TB</p>
                       <p class="tbpara1-am" style={{marginTop:'-5.4%'}}>Maximum <br/> configurable <br/>storage<sup>2</sup></p>

                       <p class="tb2-am" style={{marginTop:'-34%',marginLeft:'60%'}}>2TB</p>
                       <p class="tbpara2-am" style={{marginTop:'-5.4%',marginLeft:'60%'}}>Maximum<br/> configurable <br/>storage<sup>4</sup></p>

                        <figure class="batteryimage1-am" style={{marginTop:'11%',marginLeft:'20%'}}></figure>
                       <p class="batterypara1-am" style={{marginTop:'-6.4%',marginLeft:'-44%'}}>Up to 18 hours <br/>battery life<sup>3</sup></p>
                       
                       <figure class="batteryimage1-am" style={{marginLeft:'73%',marginTop:'-32.7%'}}></figure>
                       <p class="batterypara2-am" style={{marginLeft:'60%',marginTop:'-6.7%'}}>Up to 20 hours<br/> battery life<sup>5</sup></p>

                        <figure class="cameraimage1-am" style={{marginLeft:'20%',marginTop:'12%'}}   ></figure>
                       <p class="camerapara1-am" style={{marginLeft:'-44%',marginTop:'-6%'}}>720p FaceTime <br/> HD camera</p>
                       <p class="camerapara12-am" style={{marginLeft:'-43%',marginTop:'-5.5%'}}>With the image <br/> signal processor <br/> of M1 for <br/> drastically<br/>improved<br/> performance</p>
                       
                        <figure class="cameraimage1-am" style={{marginLeft:'73%',marginTop:'-72.9%'}}></figure>
                       <p class="camerapara1-am" style={{marginLeft:'62%',marginTop:'-6%'}}>720p FaceTime<br/> HD camera</p>
                       <p class="camerapara12-am" style={{marginLeft:'62%',marginTop:'-6%'}}>With the image <br/>signal processor <br/> of M1 for <br/> drastically<br/>improved  <br/>performance</p>

                       <p class="lbclass1-am" style={{marginLeft:'-41%',marginTop:'12%'}}>2.8 lb.</p>
                       <p class="lbclasspara1-am" style={{marginLeft:'-42%',marginTop:'-6.4%'}}>Weight</p>

                       <p class="lbclass1-am" style={{marginLeft:'66%',marginTop:'-21%'}}>3.0 lb.</p>
                       <p class="lbclasspara1-am" style={{marginLeft:'66%'}}>Weight</p>

                       <figure class="touchclass1-am" style={{marginLeft:'21%',marginTop:'13%'}} ></figure>
                       <p class="touchcap1-am" style={{marginLeft:'-41%',marginTop:'-6%'}}>Touch ID</p>
                       
                       <figure class="touchclass2-am" style={{marginLeft:'57%',marginTop:'-25.9%',backgroundSize:'124px 38px'}}></figure>
                       <p class="touchcap2-am" style={{marginLeft:'60%',marginTop:'-4%'}}>Touch Bar and <br/>Touch ID</p>

                       <div>
                        <hr class="touchhrclass1" style={{width:'44%',marginLeft:'2%',marginTop:'11.5%',borderBottom:'1px solid'}}></hr>
                         <hr class="touchhrclass2" style={{width:'47%',marginLeft:'54%',marginTop:'-6.9%',borderBottom:'1px solid'}} ></hr>
                       </div>
                       <div>
                           <figure class="notebookimagethree-am" style={{marginTop:'20%',width:'138px',height:'113px',backgroundSize:'136px 113px',backgroundRepeat:'no-repeat',marginLeft:'2%' }}></figure>    
                       <p class="macbookpro16-am" style={{fontSize:'17px',marginLeft:'-47%'}}>MacBook Pro 16” </p> <br/>
                       <p class="macbookproprice16-am" style={{marginTop:'-11%',marginLeft:'-48%'}}>From $2399</p>  <br/>
                        <figure class="dotclass3-am" style={{marginTop:'-10%',marginLeft:'20%'}}></figure> 
                        <p class="macprobuybutton16-am" style={{textAlign:'center'}}> <button class="buttonclass3-am uk-button uk-button-primary" style={{marginLeft:'-45%'}}>Buy</button></p>
                        <hr class="macbookpro16hrclass-am" style={{width:'52%',marginLeft:'2%',borderBottom:'2px solid #d2d2d7',marginTop:'32px'}}/>
                       </div>

                       <div>
                            <p class="macbookpro16size-am"  style={{marginTop:'14.8%',marginLeft:'-48%'}}>16”</p>
                            <p class="retinaclass3-am" style={{marginTop:'-5%',marginLeft:'-48%'}}>Retina display<sup>1</sup></p>

                              <figure class="compareicon3-am" style={{marginTop:'11%',marginLeft:'19%'}}></figure>
                             <p class="comparepara3-am" style={{marginTop:'-5%',marginLeft:'-44%'}}>Up to <br/>Intel Core i9 processor</p>

                             <figure class="comparememoryicon3-am" style={{marginTop:'12%',marginLeft:'19%'}}></figure>
                             <p class="comparememorypara3-am" style={{marginTop:'-4%',marginLeft:'-44%'}}>Up to 64GB<br/> memory</p>

                             <p class="tb3-am" style={{marginTop:'11%',marginLeft:'-45%'}}>8TB</p>
                             <p class="tbpara3-am" style={{marginTop:'-5.4%',marginLeft:'-45%'}}>Maximum <br/>configurable <br/> storage<sup>2</sup></p>

                              
                             <figure class="batteryimage1-am" style={{marginTop:'11%',marginLeft:'20%'}}></figure>
                              <p class="batterypara3-am" style={{marginTop:'-6.4%',marginLeft:'-44%'}}>Up to 11 hours <br/> battery life<sup>6</sup></p>

                                <figure class="cameraimage1-am" style={{marginLeft:'20%',marginTop:'12%'}}></figure>
                               <p class="camerapara1-am"  style={{marginLeft:'-44%',marginTop:'-6%'}}>720p FaceTime <br/>HD camera</p>

                               <p class="lbclass1-am" style={{marginLeft:'-41%',marginTop:'12%'}}>4.3 lb.</p>
                               <p class="lbclasspara1-am" style={{marginLeft:'-42%',marginTop:'-6.4%'}}>Weight</p>

                               <figure class="touchclass2-am" style={{marginLeft:'2%',marginTop:'13%',backgroundSize: '165px 38px'}} ></figure>
                               <p class="touchcap2-am" style={{marginLeft:'-41%',marginTop:'-6%'}}>Touch Bar and<br/> Touch ID</p>

                       </div>
                       <div>
                        <hr class="touchhrclass1" style={{width:'55%',marginLeft:'2%',marginTop:'11.5%',borderBottom:'1px solid'}}></hr>
                       </div>
                </div>
            </TabPanel>
             
         <TabPanel value={value} index={1}>
                <div style={{marginTop:'5%'}}>
                   <figure class="desktopimageone-am" style={{marginTop:'10%',width:'138px',height:'113px',backgroundSize:'134px 113px',backgroundRepeat:'no-repeat',marginLeft:'2%' }}></figure>    
                        <p class="deskimac24newcap-am" style={{color: '#f56300',marginLeft:'-52.6%',marginTop:'2%',fontSize:'79%'}}>New</p>
                       <p class="deskimac24-am" style={{fontSize:'19px',marginLeft:'-50%',marginTop:'-4%'}}>iMac 24” </p> <br/>
                       <p class="deskimac24price-am"  style={{marginTop:'-11%',marginLeft:'-50%'}}>From $1299</p>  <br/>
                        <figure class="deskdotclass11-am" style={{marginTop:'-9%',marginLeft:'10%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary">Buy</button></p>
                        

                        <figure class="desktopimagetwo-am" style={{marginTop:'-110%',width:'138px',height:'113px',backgroundSize:'126px 121px',backgroundRepeat:'no-repeat',marginLeft:'54%' }}></figure>
                       <p class="deskimac27-am" style={{fontSize:'19px',marginLeft:'51%',marginTop:'16.7%'}} >iMac 27” </p> <br/>
                       <p class="deskimac27price-am"  style={{marginTop:'-10.5%',marginLeft:'50%'}}>From $1799</p>  <br/>
                        <figure class="deskdotclass2-am" style={{marginTop:'-10%',marginLeft:'72%'}} ></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'51.5%',marginTop:'9%'}}>Buy</button></p>

                         <hr class="descimachr1-am" style={{width:'47%',marginTop:'10%',marginLeft:'2%',borderBottom:'1px solid'}}/>
                        <hr class="descimachr2-am" style={{width:'43%',marginTop:'-6.7%',marginLeft:'57%',borderBottom:'1px solid'}}/>

                        <p class="deskretina1-am" style={{marginTop:'10.8%',marginLeft:'-51%'}}>4.5K</p>
                        <p class="deskretinacap1-am"style={{marginTop:'-5%',marginLeft:'-48%'}}>Retina display<sup>7</sup></p>
                        <p class="deskretinacap12-am" style={{marginTop:'-6.5%'}}>218 ppi</p>

                        <p class="deskretina2-am" style={{marginTop:'-28.5%',marginLeft:'51%'}}>5K</p>
                        <p class="deskretinacap2-am" style={{marginTop:'-5.5%',marginLeft:'54%'}}>Retina display<sup>1</sup></p>
                        <p class="deskretinacap12-am" style={{marginLeft:'53%',marginTop:'-6%'}}>218 ppi</p>

                         <figure class="m1chipclass1-am" style={{marginTop:'11%',marginLeft:'19%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-5%',marginLeft:'-44%'}}>Apple M1 chip</p>

                         <figure class="m1chipclass2-am" style={{marginTop:'-28.1%',marginLeft:'68%'}}></figure>
                        <p class="m1chipcap1-am"  style={{marginTop:'-5%',marginLeft:'53%'}}>Up to Intel Core i9 processor</p>

                          <figure class="deskmemoryclass1-am" style={{marginTop:'12%',marginLeft:'19%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-4%',marginLeft:'-44%'}}>Up to 16GB <br/>unified <br/> memory</p>
                        <p class="m1chipcap21-am" style={{marginTop:'-7.4%',marginLeft:'-46%'}}>For <br/> increased <br/> performance <br/> and power <br/> efficiency</p>

                        <figure class="deskmemoryclass2-am" style={{marginTop:'-73%',marginLeft:'68%'}}></figure> 
                        <p class="m1chipcap1-am" style={{marginTop:'-4%',marginLeft:'53%'}}>Up to 128GB<br/> memory</p>

                        <p class="desk2tbclass-am" style={{marginTop:'49%'}}>2TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-5.4%'}}>Maximum <br/> configurable <br/> storage<sup>2</sup></p>

                        <p class="desk2tbclass-am" style={{marginTop:'-34%',marginLeft:'54%'}}>8TB</p>
                        <p class="desk2tbclasspara-am"style={{marginTop:'-5.4%',marginLeft:'55%'}}>Maximum <br/> configurable <br/> storage<sup>2</sup></p>

                        <figure class="deskfacetimecameraclass1-am" style={{marginLeft:'20%',marginTop:'12%'}}></figure>
                        <p class="deskfacetimecamerapara1-am" style={{marginLeft:'-44%',marginTop:'-6%'}}>1080p FaceTime <br/>HD camera</p>
                         <p class="deskfacetimecamerapara2-am" style={{marginLeft:'-43%',marginTop:'-5.5%'}}>With the image <br/> signal processor <br/> of M1 for <br/> drastically<br/>improved <br/>performance</p>

                         <figure class="deskfacetimecameraclass1-am" style={{marginLeft:'70%',marginTop:'-72.9%'}}></figure>
                        <p class="deskfacetimecamerapara1-am"  style={{marginLeft:'54%',marginTop:'-6%'}}>1080p FaceTime <br/> HD camera</p>

                         <figure class="deskmagickeyboardclass1-am" style={{marginLeft:'18%',marginTop:'49%'}}></figure>
                        <p class="deskmagickeyboardpara1-am" style={{marginLeft:'-48%',marginTop:'-6.4%'}}>Configurable <br/>with<br/>Magic Keyboard <br/> with Touch ID <br/> and Numeric <br/> Keypad</p>

                        <figure class="deskmagickeyboardclass2-am" style={{marginLeft:'61%',marginTop:'-59%',backgroundSize:'120px 42px'}}></figure>
                        <p class="deskmagickeyboardpara2-am"  style={{marginLeft:'60%',marginTop:'-5%'}}>Configurable <br/> with Magic Keyboard <br/> with Numeric<br/> Keypad</p>

                         <hr class="deskendhrclass1" style={{width:'51%',marginLeft:'2%',marginTop:'14.5%',borderBottom:'1px solid'}}></hr>
                         <hr class="deskendhrclass2" style={{width:'39%',marginLeft:'62%',marginTop:'-7.69%',borderBottom:'1px solid'}} ></hr>

                         <div style={{marginTop:'39%'}}>
                            
                        <figure class="desktopimagethree-am" style={{marginTop:'10%',width:'138px',height:'113px',backgroundSize:'134px 113px',backgroundRepeat:'no-repeat',marginLeft:'2%' }}></figure>
                       <p class="deskimacpro-am" style={{fontSize:'21px',marginLeft:'-52%',marginTop:'12%'}}>Mac Pro </p> <br/>
                       <p class="deskimacproprice-am" style={{marginTop:'-11%',marginLeft:'-52%'}}>From $5999</p>  <br/>
                        <figure class="deskdotclass3-am" style={{marginTop:'-9%',marginLeft:'21%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'-50.5%',marginTop:'0%'}}>Buy</button></p>

                         
                        <figure class="desktopimagefour-am" style={{marginTop:'-98%',width:'138px',height:'113px',backgroundSize:'126px 121px',backgroundRepeat:'no-repeat',marginLeft:'54%' }}></figure>
                       <p class="deskmacmini-am" style={{fontSize:'20px',marginLeft:'51%',marginTop:'12.7%'}}>Mac mini </p> <br/>
                       <p class="deskmacminiprice-am" style={{marginTop:'-11.5%',marginLeft:'50%'}}>From $699</p>  <br/>
                        <figure class="deskdotclass4-am" style={{marginTop:'-9%',marginLeft:'69%'}}></figure> 
                        <p class="descimacbuybutton-am" style={{textAlign:'center'}}> <button class="deskbuttonclass1-am uk-button uk-button-primary" style={{marginLeft:'51.5%',marginTop:'1%'}}>Buy</button></p>

                          <hr class="descimachr3-am" style={{width:'47%',marginTop:'10%',marginLeft:'2%',borderBottom:'1px solid'}}/>
                        <hr class="descimachr4-am" style={{width:'43%',marginTop:'-6.9%',marginLeft:'57%',borderBottom:'1px solid'}}/>

                        <p class="deskretina3-am" style={{width:'6%',borderBottom:'1px solid',marginTop:'13.8%',marginLeft:'20%'}}></p>
                        <p class="deskretina4-am" style={{width:'5%',borderBottom:'1px solid',marginTop:'-6.5%',marginLeft:'75%'}}></p>

                         <figure class="m1chipclass2-am" style={{marginTop:'14%',marginLeft:'16%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-5%',marginLeft:'-51%'}}>Intel Xeon W  <br/> processor</p>

                        <figure class="m1chipclass1-am" style={{marginTop:'-34.1%',marginLeft:'70%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-5%',marginLeft:'56%'}}>Apple M1 chip</p>
                        <p class="m1chipcap21-am" style={{marginTop:'-5.5%',marginLeft:'58%'}}>Also available with  <br/> Intel Core i5 or i7  <br/> processor</p>

                         <figure class="deskmemoryclass2-am" style={{marginTop:'12%',marginLeft:'17%'}}></figure> 
                        <p class="m1chipcap1-am" style={{marginTop:'-4%',marginLeft:'-48%'}}>Up to 1.5TB <br/> memory</p>

                         <figure class="deskmemoryclass1-am"   style={{marginTop:'-36%',marginLeft:'71%'}}></figure>
                        <p class="m1chipcap1-am" style={{marginTop:'-4%',marginLeft:'61%'}}>Up to 16GB <br/> unified <br/> memory <sup>8</sup></p>
                        <p class="m1chipcap21-am" style={{marginLeft:'60%',marginTop:'-6.5%'}}>For <br/> increased  <br/> performance <br/> and power <br/> efficiency</p>

                         <p class="desk2tbclass-am" style={{marginTop:'10%',marginLeft:'-51%'}}>8TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-5.4%',marginLeft:'-48%'}}>Maximum <br/>configurable <br/>storage<sup>2</sup></p>
                       
                       <p class="desk2tbclass-am"  style={{marginTop:'-35%',marginLeft:'54%'}}>2TB</p>
                        <p class="desk2tbclasspara-am" style={{marginTop:'-5.4%',marginLeft:'55%'}}>Maximum <br/>configurable <br/> storage<sup>2</sup></p>

                        <p class="deskfacetimecameraclass2-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'22%',marginTop:'12%'}}></p>
                        <p class="deskfacetimecameraclass3-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'75%',marginTop:'-6.9%'}}></p>

                         <figure class="deskmagickeyboardclass2-am" style={{marginLeft:'4%',marginTop:'14.7%'}}></figure>
                        <p class="deskmagickeyboardpara2-am" style={{marginLeft:'-45%',marginTop:'-3%'}}>Magic <br/> Keyboard with<br/>Numeric <br/> Keypad</p>
                         
                         <p class="deskmagickeyboardclass3-am" style={{width:'6%',borderBottom:'1px solid',marginLeft:'76%',marginTop:'-44%'}}></p>

                           <hr class="deskendhrclass3" style={{width:'51%',marginLeft:'2%',marginTop:'48.5%',borderBottom:'1px solid'}}></hr>
                         <hr class="deskendhrclass4" style={{width:'39%',marginLeft:'62%',marginTop:'-7.69%',borderBottom:'1px solid'}} ></hr>
                         </div>
                </div>
          </TabPanel>
            </div>
         </div>

         </div>
            
        </>
    )
}
