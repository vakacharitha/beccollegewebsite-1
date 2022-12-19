import caretright from "/src/assets/caretright.svg";
import instagram from "/src/assets/instagram.svg";
import facebook from "/src/assets/facebook.svg";
import youtube from "/src/assets/youtube.svg";
import twitter from "/src/assets/twitter.svg";

let Footer=() =>{
    return(
      <div className="footer flex pd-5">
        <div className="QuickLinks">
            <div>Quick Links</div>
                <div className="flex">
                    <a href=""><img className="w-3" src={caretright}></img>A word by Principal</a>
                </div>
        </div>
        <div className="StatutoryDataandCommittees">
            <div>Statutory Data and Committees</div>
                <div className="flex">
                    <a href=""><img className="w-3" src={caretright}></img>IQAC</a>
                </div>
        </div>
        <div className="GetInTouch">
            <div>Get In Touch</div>
                <div className="flex">
                    <img className="w-3" src={caretright}></img>
                    <a href="">Bapatla Engineering College,Bapatla-522102,Guntur(Dt).</a>
                </div>
            <div className="FollowUs">
                <div>Follow Us</div>
                    <div className="FollowUsIcons flex" style={{color:"white"}}>
                        <a href=""><img className="w-3" src={instagram}></img></a>
                        <a href=""><img className="w-3" src={facebook}></img></a>
                        <a href=""><img className="w-3" src={youtube}></img></a>
                        <a href=""><img className="w-3" src={twitter}></img></a>
                    </div>
            </div>
        </div>
    </div>
    )
  }
  export default Footer;