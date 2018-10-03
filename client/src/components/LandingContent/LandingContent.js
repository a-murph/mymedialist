import React from "react";
import "./LandingContent.css";

const LandingContent = () => (
    <div className="landingcontent"><table>
        <tbody>
            <tr>
                <td className="table-format-left animated bounceInDown delay-2s"><h5 className="table-heading">Share with your friends.</h5><br></br><span>With a thriving community, chat with others and compare lists with friends!</span></td>
                <td><div className="row">
                    <div className="col s12 m7">
                        <div className="card animated fadeInUp delay-2s">
                            <div className="card-image">
                                <img src="poster2.png"></img>
                            </div>
                            <div className="card-content">
                                <p className="black-text">Keep track of your own personal movie list. Share with others. Compare movie lists. All in one place.</p>
                            </div>
                        </div>
                    </div>
                </div></td>
            </tr>
            <tr>
                <td className="table-format-left fadeInDownBig animated delay"><img src="poster.jpg" className="img-poster"></img></td>
                <td className="table-right bounceInRight animated delay"><h5 className="table-heading">Score Your Movies</h5><br></br>Score from 0-10. Did you like the movie? Score a 10. Hate the movie? Score a 0.</td>
            </tr>
            <tr>
                <td className="table-format-left bounceInLeft animated delay-2"><h5 className="table-heading">Never Forget</h5><br></br>Never forget the movies you watched or what scores you gave. Keep track of it all in one place.</td>
                <td><div class="row">
                    <div class="col s12 m5">
                        <div class="card-panel deep-purple flipInY animated delay-2">
                            <span class="white-text">What are you waiting for? Sign up today.
                            </span>
                        </div>
                    </div>
                </div></td>
            </tr>
        </tbody>
    </table>
    </div>
);

export default LandingContent;