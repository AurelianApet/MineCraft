import React, { Fragment } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers, BigNumber } from "ethers";

const Home = () => {

  let unityContent = new UnityContent(
        "/UnityBuild/Build/Pro 001.json",
        "/UnityBuild/Build/UnityLoader.js"
  );
  
  const {
        activate,
        deactivate,
        library,
        account
    } = useWeb3React();

    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 97],
    });

    const onConnectClicked = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };

    const onDisconnectClicked = () => {
        try {
            deactivate();
        } catch (ex) {
            console.log(ex);
        }
    };

  return (
    <>
      <button onClick={() => {}} id="myBtn" title="Go to top"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      {/* <!--navbar start--> */}
      <nav className="navbar navbar-expand-lg sticky-top ">
          <div className="container-fluid">
              <a className="navbar-brand pl-4" href="#"><img src="assets/images/logo-outline.png" height="80" width="80" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars text-white"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#about">About</a>
                      </li>
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#nfts">NFTs</a>
                      </li>
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#game">Game</a>
                      </li>

                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#tokenomics">Tokenomics</a>
                      </li>
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#roadmap">Roadmap</a>
                      </li>
                      <li className="nav-item px-3 py-3">
                          <a className="nav-link hover:bg-neutral-300" href="#faq">FAQ</a>
                      </li>
                      <li className="nav-item px-3 py-3 ">
                        {
                          account ? <a className="nav-link bg-red-700 p-2 rounded-lg hover:bg-white hover:text-red-700" onClick={onDisconnectClicked} id="btn-logout">{account ? account.slice(0, 14) + "..." : ""}</a>
                          : <a className="nav-link bg-red-700 p-2 rounded-lg hover:bg-white hover:text-red-700" onClick={onConnectClicked} id="btn-login">Connect Wallet</a>
                        }
                          
                          {/* <a className="nav-link btn-primary p-2 hidden" onClick="logout()" id="btn-logout">Logout</a> */}


                      </li>

                  </ul>
              </div>
          </div>
      </nav>
      {/* <!--navbar end--> */}


      {/* <!--Header start--> */}
      <div className="container header">
          <div className="row justify-content-center">
              <div className="col-lg-4 text-center">
                  <img alt="" src="assets/images/logo-outline.png" className="img-fluid mt-5 pt-5" />
                  <h1 className="text-center text-white heading-custom">Ethereum Metamask Craft</h1>

              </div>
          </div>

          <div className="row justify-content-center m-3">
              <div className="col-lg-12 text-center m-3">
                  <a href="#" target="blank"><img alt="" src="assets/images/discord.png" className="social inline-block m-1" /></a>
                  <a href="#" target="blank"><img alt="" src="assets/images/tiwtter.png" className="social inline-block m-1" /></a>
                  <a href="#" target="blank"><img alt="" src="assets/images/instagram.png" className="social inline-block m-1" /></a>
              </div>

          </div>
          <div className="row mt-2 justify-content-center">

              <div className="col-lg-8">
                  <div className="box">
                      <div className="container-fluid mt-3 mb-3">
                          <div className="row flex justify-content-center justify-center">
                              <div className="col-lg-9">
                                  <p className="p-box">Rumour has it targeted online advertising was developed because the
                                      internet was upset that you could read it but it couldn't read you. Rumour has it
                                      targeted online advertising was developed because the internet was upset that you
                                      could read it but it couldn't read you

                                  </p>
                                  <div className="row mt-10">
                                      <div className="col-md-6 col-sm-6">
                                          <a className="btn1 btn-head mt-1 ripple-surface" onClick={onConnectClicked} id="btn-login2" target="blank">
                                              Connect Wallet</a>
                                      </div>
                                      <div className="col-md-6 col-sm-6">
                                          <a className="btn1 btn-head mt-1 ripple-surface" href="#game">Play Game</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 text-center flex justify-center">
                                  <img alt="" src="assets/images/icon.png" className="img-fluid coin-1" srcSet="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!--Header end--> */}

      {/* <!--Gameplay section start--> */}
      <div className="container-fluid pt-5 mt-5" id="about">
          <div className="container">
              <div className="row justify-content-center">
                  <h1 className="text-center text-white heading-custom">About us</h1>
                  <div className="col-lg-7 col-md-7 ">
                      <div className="textbox p-3">
                          <p>Rumour has it targeted online advertising was developed because the internet was upset that
                              you could read it but it couldn't read you. Rumour has it targeted online advertising was
                              developed because the internet was upset that you could read it but it couldn't read you
                              Rumour has it targeted online advertising was developed because the internet was upset that
                              you could read it but it couldn't read you. Rumour has it targeted online advertising was
                              developed because the internet was upset that you could read it but it couldn't read you
                          </p>
                      </div>
                  </div>
                  <div className="col-md-5 col-lg-5 col-xl-4">
                      <img alt="" src="https://th.bing.com/th/id/R.a2f0d025807f7840aa1dff0cea3691cb?rik=T6OIEpYXmge1Qw&pid=ImgRaw&r=0"
                          className="img-fluid pt-4" />
                  </div>
              </div>
          </div>
      </div>
      {/* <!--Gameplay section end--> */}

      <div className="container-fluid pt-5 mt-5">
          <div className="container">
              <h1 className="text-center text-white heading-custom ">Into the project</h1>

              <div className="row justify-content-center pb-5">
                  <div className="col-md-6 col-lg-6 col-xl-5">
                      <img alt="" src="https://th.bing.com/th/id/R.065e405ea43a2e38ea89e97bcd45ee7a?rik=dluHOnu4bl0weg&pid=ImgRaw&r=0"
                          className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                      <div className="textbox-2 p-3">
                          <p>UTOPIA! In the rich soil of the enchanted forest, Baby Sloths gathered to embrace the tree of
                              life. However, all good things come to an end. A cataclysmic storm dispersed all the Baby
                              Sloths away from their paradise and the enchanted tree of life was lost forever. The Elder
                              Sloths still believe the Enlightened One is still alive and residing in the enchanted
                              forest...waiting for a new generation.

                              A NEW HOPE! The 10000 newly-born Baby Sloths are destined to return the Baby Sloth community
                              to their former glory. Practicing the ways of their ancestors and determined to find the
                              enchanted tree of life, the newly-born Baby Sloth’s must find the tree of life!</p>
                      </div>
                  </div>


              </div>
          </div>
      </div>



      {/* <!--runner section--> */}
      <div className="container-fluid pt-5 mt-5" id="nfts">
          <div className="container">
              <h1 className="text-center text-white heading-custom fontnew">NFTs Collection</h1>
              <div className="row mt-2">
                  <div className="col-lg-3 mt-2">
                      <img alt="" src="assets/images/MSH_UNIQUE_COLLECTION_26.webp" className="img-fluid textbox" />
                  </div>
                  <div className="col-lg-3 mt-2">
                      <img alt="" src="assets/images/MSH_UNIQUE_COLLECTION_26.webp" className="img-fluid textbox" />
                  </div>
                  <div className="col-lg-3 mt-2">
                      <img alt="" src="assets/images/MSH_UNIQUE_COLLECTION_26.webp" className="img-fluid textbox" />
                  </div>
                  <div className="col-lg-3 mt-2">
                      <img alt="" src="assets/images/MSH_UNIQUE_COLLECTION_26.webp" className="img-fluid textbox" />
                  </div>

              </div>


          </div>
      </div>
      {/* </div> */}

      {/* <!--runner section--> */}
      <div className="container-fluid pt-5 mt-5" id="game">
          <div className="container">
              <h1 className="text-center text-white heading-custom fontnew">Game Demo</h1>
              <div className="row mt-5">
                  <div className="col-12">
                    {/* width: 960px; height: 600px */}
                      {/* <iframe src="assets/Pro 001/index.html" width="100%" height="700px" frameBorder="0"></iframe> */}
                      {/* <Fragment> */}
                        {/* {!isLoaded && (
                          <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                        )} */}
                        <div className="w-700 h-700">
                          <Unity
                          unityContent={unityContent}
                          // style={{ visibility: isLoaded ? "visible" : "hidden" }}
                          /> 
                        </div>
                                             
                        {/* <Unity src="./unity/build/minecraft.json" /> */}
                      {/* </Fragment> */}
                  </div>

              </div>


          </div>
      </div>
      {/* </div> */}


      {/* <!-----Tokenomics section start--> */}
      <div className="container-fluid pb-5 pt-5 mt-5" id="tokenomics">
          <div className="container">

              <h1 className="text-center text-white heading-custom fontnew">Tokenomics</h1>

              <div className="row justify-content-center mt-5">
                  <div className="col-lg-4 col-xl-3">
                      <img alt="" src="assets/images/chart.png" className="img-fluid" />
                  </div>
                  <div className="col-lg-3 text-center textbox pt-0">
                      <h5 className="text-white mt-5 pt-5 ">20% Tax Rate</h5>
                      <h5 className="text-white">20% Tax Rate</h5>
                      <h5 className="text-white">20% Tax Rate</h5>
                      <h5 className="text-white">20% Tax Rate</h5>
                      <h5 className="text-white">20% Tax Rate</h5>
                  </div>
              </div>


          </div>
      </div>
      {/* <!-----Tokenomics section end----> */}

      {/* <!--------------roadmap start------------------> */}

      <div className="container-fluid mt-5 bg-[url(https://wallup.net/wp-content/uploads/2016/05/27/2001-Minecraft-waterfall.jpg)] bg-cover bg-fixed"
          // style="background-image: url(https://wallup.net/wp-content/uploads/2016/05/27/2001-Minecraft-waterfall.jpg); background-size: cover; background-attachment: fixed;"
          id="roadmap">
          <h1 className="text-center text-white heading-custom pt-5">Roadmap</h1>
          <div className="row justify-content-center">
              <div className="col-lg-7">
                  <section className="gradient-custom-5">
                      <div className="container py-5">
                        <div className="main-timeline-5">
                          <div className="timeline-5 right-5">
                            <div className="card1 textbox">
                              <div className="card1-body p-4">
                                <h2 className="h5">Title of section 1</h2>
                                <span className=" text-white"><i className="fa fa-clock-o me-1"></i>21 March, 2020</span>
                                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                                  diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
                                  sagittis ligula in sodales vehicula....</p>
                              </div>
                            </div>
                          </div>
                          <div className="timeline-5 right-5">
                            <div className="card1 textbox">
                              <div className="card1-body p-4">
                                <h2 className="h5">Title of section 2</h2>
                                <span className=" text-white"><i className="fa fa-clock-o me-1"></i>21 March, 2020</span>

                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam
                                  non nisi semper.</p>
                                <p className="mb-0">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error
                                  architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="timeline-5 right-5">
                            <div className="card1 textbox">
                              <div className="card1-body p-4">
                                <h2 className="h5">Title of section 3</h2>
                                <span className=" text-white"><i className="fa fa-clock-o me-1"></i>21 March, 2020</span>

                                <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                                  diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
                                  sagittis ligula in sodales vehicula....</p>
                              </div>
                            </div>
                          </div>
                          <div className="timeline-5 right-5">
                            <div className="card1 textbox">
                              <div className="card1-body p-4">
                                <h2 className="h5">Title of section 4</h2>
                                <span className=" text-white"><i className="fa fa-clock-o me-1"></i>21 March, 2020</span>

                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam
                                  non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis
                                  ligula in sodales vehicula....</p>
                                <p className="mb-0">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum
                                  corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum
                                  molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
              </div>
          </div>

          {/* // <!--------------roadmap end------------------> */}


      </div>
      {/* <!--Section: FAQ--> */}
      <section className="container pb-5" id="faq">
          <h1 className="text-center text-white heading-custom mt-5">FAQ</h1>

          <h5 className="text-center mb-5 text-white">
              Find the answers for the most frequently asked questions below
          </h5>

          <div className="row textbox-2  text-center mt-1">

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i>Where
                      can a Sloth be purchased?</h6>
                  <p>
                      We first start off with our mint that will take place on our official website. We will put
                      our
                      website plug in 📎︱official-links when mint is arriving

                      After you purchase your sloth it ends up on Opensea. When our mint ends Opensea will be the
                      only
                      marketplace for the sloths.

                  </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i>What
                      about date, price, reveal and quantity of mint?</h6>
                  <p>
                      Right now we are in the early state of the project and can't answer these questions. Most of
                      these will be answered near the mint. We will do an updated version of the 📖︱faq when we
                      have
                      answers on these questions.


                  </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i> I
                      have
                      never minted before! How can I mint? </h6>
                  <p>


                      Near the mint we will make a #how-to-mint to show you how you can mint your sloth. This will
                      be
                      for both PC and phone.


                  </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i> How
                      do
                      I invite people to the server with my own link?
                  </h6>
                  <p>

                      Check 📲︱referral-info and see our guide. Per invite you get 100 Fantasy Tokens.


                  </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i>How
                      do I
                      get WL?

                  </h6>
                  <p>

                      Check our 🦥︱how-to-whitelist for info on how to get whitelisted.
                      A WL gives you a guaranteed chance to mint a sloth.

                  </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-random one"><i className="fa fa-question text-random  pe-2 text-white"></i>Is
                      the
                      Sloth team doxxed?</h6>
                  <p>
                      Yes it is! here is where you can ✅︱meet-the-team!
                  </p>
              </div>
          </div>
      </section>
      {/* <!--Section: FAQ--> */}

      {/* </div> */}
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-white text-muted">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* <!-- Left --> */}
              <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
              </div>
              {/* <!-- Left --> */}

              {/* <!-- Right --> */}
              <div>
                  <a href="#" target="blank"><img alt="" src="assets/images/discord.png" className="social inline-block m-1" /></a>
                  <a href="#" target="blank"><img alt="" src="assets/images/tiwtter.png" className="social inline-block m-1" /></a>
                  <a href="#" target="blank"><img alt="" src="assets/images/instagram.png" className="social inline-block m-1" /></a>
                  <a href="#" target="blank"><img alt="" src="assets/images/fb.png" className="social inline-block m-1" /></a>


              </div>
              {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
              <div className="container text-center text-md-start mt-5">
                  {/* // <!-- Grid row --> */}
                  <div className="row mt-3">
                      {/* // <!-- Grid column --> */}
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                          {/* // <!-- Content --> */}
                          <h6 className="text-uppercase fw-bold mb-4">
                              <i className="fas fa-gem me-3 text-grayish"></i>Company name
                          </h6>
                          <p>
                              Here you can use rows and columns to organize your footer content. Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                          </p>
                      </div>
                      {/* <!-- Grid column --> */}

                      {/* <!-- Grid column --> */}
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                          {/* // <!-- Links --> */}
                          <h6 className="text-uppercase fw-bold mb-4">
                              Products
                          </h6>
                          <p>
                              <a href="#" className="text-reset">Home</a>
                          </p>
                          <p>
                              <a href="#about" className="text-reset">About</a>
                          </p>
                          <p>
                              <a href="#about" className="text-reset">Project</a>
                          </p>
                          <p>
                              <a href="#game" className="text-reset">Game</a>
                          </p>
                      </div>
                      {/* // <!-- Grid column --> */}

                      {/* // <!-- Grid column --> */}
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                          {/* // <!-- Links --> */}
                          <h6 className="text-uppercase fw-bold mb-4">
                              Useful links
                          </h6>
                          <p>
                              <a href="#tokenomics" className="text-reset">Tokenomics</a>
                          </p>
                          <p>
                              <a href="#faq" className="text-reset">FAQ</a>
                          </p>
                          <p>
                              <a href="#roadmap" className="text-reset">Roadmap</a>
                          </p>
                          <p>
                              <a href="#" className="text-reset">Help</a>
                          </p>
                      </div>
                      {/* // <!-- Grid column --> */}

                      {/* // <!-- Grid column --> */}
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                          {/* // <!-- Links --> */}
                          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                          <p><i className="fas fa-home me-3 text-grayish"></i> New York, NY 10012, US</p>
                          <p>
                              <i className="fas fa-envelope me-3 text-grayish"></i>
                              info@example.com
                          </p>
                          <p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
                          <p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
                      </div>
                      {/* // <!-- Grid column --> */}
                  </div>
                  {/* // <!-- Grid row --> */}
              </div>
          </section>
          {/* // <!-- Section: Links  --> */}

          {/* // <!-- Copyright --> */}
          <div className="text-center p-4 text-white bg-black-2.5" >
            {/* style="background-color: rgba(0, 0, 0, 0.025);" */}

              <a className="text-reset fw-bold text-white" href="#">Ethereum Metamask Craft | All rights reserved.</a>
          </div>
          {/* // <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
      <button onClick={() => {}} id="myBtn" className="textbox" title="Go to top">Top</button>  
      {/* topfunction */}
    </>
  );
}

export default Home;
