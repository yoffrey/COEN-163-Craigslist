import React, {useState} from 'react';
import bikeImage from '../images/bike.jpeg';
import frontImage from '../images/front.jpeg';
import backImage from '../images/back.jpeg';
import fImage from '../images/f.jpeg';
import fgImage from '../images/fg.jpeg';
import mmImage from '../images/mm.jpeg';
import pc1 from '../images/pc1.jpeg';
import pc2 from '../images/pc2.jpeg';
import pc3 from '../images/pc3.jpeg';
import pc4 from '../images/pc4.jpeg';
import pc5 from '../images/pc5.jpeg';
import './product.css';


function Product () {
    const [imageChoice, setImageChoice] = useState(bikeImage);

    const handleNextButton = () => {
        if (imageChoice === bikeImage) {
            setImageChoice(mmImage);
        } else if (imageChoice === frontImage) {
            setImageChoice(bikeImage);
        } else if (imageChoice === backImage) {
            setImageChoice(frontImage);
        }
        else if (imageChoice === fImage) {
            setImageChoice(backImage);
        }
        else if (imageChoice === fgImage) {
            setImageChoice(fImage);
        }
        else if (imageChoice === mmImage) {
            setImageChoice(fgImage);
        }
    }

    const handlePrevButton = () => {
        if (imageChoice === bikeImage) {
            setImageChoice(frontImage);
        } else if (imageChoice === frontImage) {
            setImageChoice(backImage);
        } else if (imageChoice === backImage) {
            setImageChoice(fImage);
        }
        else if (imageChoice === fImage) {
            setImageChoice(fgImage);
        }
        else if (imageChoice === fgImage) {
            setImageChoice(mmImage);
        }
        else if (imageChoice === mmImage) {
            setImageChoice(bikeImage);
        }
    }

    return (
        <table>
            <tbody><tr>
                <th />
                <th>
                    <div style={{paddingBottom: '6px', paddingTop: '6px', backgroundColor: '#784C92', color: 'white'}} className="alert alert-default d-inline-block" role="alert">
                        <center>2020 Kawasawki Z650 ABS - $1200</center>
                    </div>
                </th>
                <th />
                <th style={{paddingBottom: '20px'}}><center><button style={{backgroundColor: '#784C92', color: 'white'}} type="button" className="btn btn-default">Contact Now</button></center></th>
            </tr>
            <tr>
                <td>
                    <div className="nav-buttons-container">
                        <button style={{border: 'none', backgroundColor: 'white', paddingBottom: '160px'}} id="prev-button" className="nav-button" onCLick={handlePrevButton}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                    </div>
                </td>
                <td style={{verticalAlign: 'top'}}>
                    <div style={{display: 'block'}} className="product-container">
                        <div className="middle-section">
                            <div className="image-container">
                <span style={{verticalAlign: 'top'}}>
                  <img style={{height: '470px'}} src={imageChoice} alt="Product Image" />
                </span>
                            </div>
                            <div className="description-container">
                            </div>
                        </div>
                        <br />
                        <center>
                            <div style={{display: 'inline-block'}} className="product-container">
                                <div className="middle-section">
                                    <div className="image-container">
                    <span style={{verticalAlign: 'top'}}>
                      <img style={{height: '70px'}} src={bikeImage} alt="Product Image" />
                    </span>
                                    </div>
                                    <div className="description-container">
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'inline-block', paddingLeft: '5px'}} className="product-container">
                                <div className="middle-section">
                                    <div className="image-container">
                    <span style={{verticalAlign: 'top'}}>
                      <img style={{height: '70px'}} src={frontImage} alt="Product Image" />
                    </span>
                                    </div>
                                    <div className="description-container">
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'inline-block', paddingLeft: '5px'}} className="product-container">
                                <div className="middle-section">
                                    <div className="image-container">
                    <span style={{verticalAlign: 'top'}}>
                      <img style={{height: '70px'}} src={backImage} alt="Product Image" />
                    </span>
                                    </div>
                                    <div className="description-container">
                                    </div>
                                    <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                        <div className="middle-section">
                                            <div className="image-container">
                        <span style={{verticalAlign: 'top'}}>
                          <img style={{height: '70px'}} src={fImage} alt="Product Image" />
                        </span>
                                            </div>
                                            <div className="description-container">
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                        <div className="middle-section">
                                            <div className="image-container">
                        <span style={{verticalAlign: 'top'}}>
                          <img style={{height: '70px'}} src={fgImage} alt="Product Image" />
                        </span>
                                            </div>
                                            <div className="description-container">
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                        <div className="middle-section">
                                            <div className="image-container">
                        <span style={{verticalAlign: 'top'}}>
                          <img style={{height: '70px'}} src={mmImage} alt="Product Image" />
                        </span>
                                            </div>
                                            <div className="description-container">
                                            </div>
                                        </div>
                                    </div>
                                </div></div></center>
                    </div>
                </td>
                <td>
                    <div className="nav-buttons-container">
                        <button style={{paddingRight: '25px', paddingBottom: '160px', border: 'none', backgroundColor: 'white'}} id="next-button" className="nav-button" onClick={handleNextButton}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                    </div>
                </td>
                <td style={{height: 'auto', overflow: 'auto', verticalAlign: 'top'}}>
                    <div className="panel panel-default" style={{height: '470px', backgroundColor: '#F0EDED'}}>
                        <div className="panel-body">
                            <div className="panel panel-default" style={{height: '390px', backgroundColor: '#D9D9D9'}}>
                                <div className="panel-body">
                                    <div className="product-containerr">
                                        <div className="middle-section">
                                            <div className="image-containerr">
                        <span style={{verticalAlign: 'top'}}>
                          The 1190 Adventure R has the heart and soul of the original
                          KTM Adventure - puristic, raw, sportily challenging for rider
                          and machine. This is the "non plus ultra" for sporty offroad
                          traveling. Alpine gravel passes, desert pistes mixed with dunes,
                          bad roads at the end of the world - This is the perfect bike.
                          In 2014 it was the first bike, serially equipped with
                          Bosch's MSC: Motorcycle Stability Control.
                          MSC enhances the existing package consisting of lean-sensitive
                          traction control and ABS featuring a combined braking function
                          with a world first: the first ever lean-sensitive cornering ABS.
                          Together with its sister model, the 1190 Adventure R has been
                          turned into what is currently the world's safest motorcycle -
                          yet still with undiluted riding pleasure. Hence, the Adventure R
                          is aimed at all those who take the term "adventure" even more
                          literally. The 1190 Adventure R is without doubt the twin-cylinder
                          enduro with the greatest offroad ability.
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button style={{backgroundColor: '#D5B5E8'}} type="button" className="btn btn-default">Add to Cart</button>
                            <button style={{backgroundColor: '#D5B5E8', float: 'right'}} type="button" className="btn btn-default">Back to items</button>
                        </div>
                    </div>
                    <div style={{display: 'inline-block'}} className="product-container">
                        <div className="panel panel-default" style={{height: 'auto', backgroundColor: '#D9D9D9'}}>
                            <div className="panel-body">
                                <table>
                                    <tbody><tr>
                                        <td>
                                            <div className="nav-buttons-container">
                                                <button style={{border: 'none', backgroundColor: '#D9D9D9'}} id="previous-button" className="nav-button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{display: 'inline-block'}} className="product-container">
                                                <div className="middle-section">
                                                    <div className="image-container">
                              <span style={{verticalAlign: 'top'}}>
                                <img style={{height: '60px'}} src={pc1} alt="Product Image" />
                              </span>
                                                    </div>
                                                    <div className="description-container">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                                <div className="middle-section">
                                                    <div className="image-container">
                              <span style={{verticalAlign: 'top'}}>
                                <img style={{height: '60px'}} src={pc2} alt="Product Image" />
                              </span>
                                                    </div>
                                                    <div className="description-container">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                                <div className="middle-section">
                                                    <div className="image-container">
                              <span style={{verticalAlign: 'top'}}>
                                <img style={{height: '60px'}} src={pc3} alt="Product Image" />
                              </span>
                                                    </div>
                                                    <div className="description-container">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                                <div className="middle-section">
                                                    <div className="image-container">
                              <span style={{verticalAlign: 'top'}}>
                                <img style={{height: '60px'}} src={pc4} alt="Product Image" />
                              </span>
                                                    </div>
                                                    <div className="description-container">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{display: 'inline-block', paddingLeft: '10px'}} className="product-container">
                                                <div className="middle-section">
                                                    <div className="image-container">
                              <span style={{verticalAlign: 'top'}}>
                                <img style={{height: '60px'}} src={pc5} alt="Product Image" />
                              </span>
                                                    </div>
                                                    <div className="description-container">
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="nav-buttons-container">
                                                <button style={{border: 'none', backgroundColor: '#D9D9D9'}} id="nextt-button" className="nav-button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr style={{paddingBottom: '50px'}}>
                <td />
                <td>
                </td>
            </tr>
            </tbody></table>
    );
}

export default Product;