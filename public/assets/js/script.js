// const serverUrl = "https://gjyexdlwsqwi.usemoralis.com:2053/server";
// const appId = "zNakMsSAjNQYtzbJnJ9vaKfZRfKtEz2tvjS9FcCZ";
// Moralis.start({ serverUrl, appId });
// async function keeper(){
//   WavesKeeper.auth({name: 'Waves Keeper', data: 'Waves Keeper', icon: 'https://docs.wavesplatform.com/_theme/brand-logo/waves-docs-logo.png'})
//   .then(function (res) {
//     console.log(res);
//     localStorage.setItem("connected", "yes");
//     $("#btn-logout").show();
//     $("#btn-login").hide();
//     // data in variable res is shown below
//     //{
//     //  "data":"Waves Keeper",
//     //  "prefix":"WavesWalletAuthentication",
//     //  "host":"localhost",
//     //  "name":"Waves Keeper",
//     //  "icon":"https://docs.wavesplatform.com/_theme/brand-logo/waves-docs-logo.png",
//     //  "timestamp":1543175910353,
//     //  "address":"3PKqkMWvjjwjqbVSu8eL48dNfzWc3ifaaWi",
//     //  "publicKey":"4WLcUznGiQXCoy2TnCohGKzDR8c14LFUGezvLNu7CVPA",
//     //  "signature":"4s2nz8RxT29UwbJoNjPWxYwjsXYeoaMWK4dDM5eQN5gRmeZWGrN1HbpsirhTzWMJFAGtzzw4U78RNRKeEtwficwR"
//     //}
//   })
//   .catch(function(err){console.log(err)});
// }
// async function metamask(){
//   Moralis.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
//     localStorage.setItem("connected", "yes");
//     $("#btn-logout").show();
//     $("#btn-login").hide();
// })
// }
// async function tronlink(){
//   var obj = setInterval(async ()=>{
//     if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
//         clearInterval(obj)
//         //sdocument.write("Yes, catch it:",window.tronWeb.defaultAddress.base58);
//         console.log(window.tronWeb.defaultAddress.base58);
//         $("#btn-logout").show();
//         $("#btn-login").hide();
//     localStorage.setItem("connected", "yes");

//     }
// }, 10)
// }
// async function walletconnects(){
//    const user = await Moralis.authenticate({
//             provider: "walletconnect", mobileLinks: [
//                 "rainbow",
//                 "metamask",
//                 "argent",
//                 "trust",
//                 "imtoken",
//                 "pillar",
//             ]
//         })

//             .then(function (user) {
//                 isUser = user;
//                 console.log("logged in user:", user);
//                 console.log(user.get("ethAddress"));
//     localStorage.setItem("connected", "yes");
//     $("#btn-logout").show();
//     $("#btn-login").hide();
//                 // isUser = true;
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
// }
// async function walletconnect()
// {

//     const Web3Modal = window.Web3Modal.default;
//     const WalletConnectProvider = window.WalletConnectProvider.default;
//     const Fortmatic = window.Fortmatic;
//     const evmChains = window.evmChains;
    
//     // Web3modal instance
//     let web3Modal
    
//     // Chosen wallet provider given by the dialog window
//     let provider;
    
    
//     // Address of the selected account
//     let selectedAccount;
    
    
//     /**
//      * Setup the orchestra
//      */

    
//       console.log("Initializing example");
//       console.log("WalletConnectProvider is", WalletConnectProvider);
//       console.log("Fortmatic is", Fortmatic);
//       console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
    
//       // Check that the web page is run in a secure context,
//       // as otherwise MetaMask won't be available
      
    
//       // Tell Web3modal what providers we have available.
//       // Built-in web browser provider (only one can exist as a time)
//       // like MetaMask, Brave or Opera is added automatically by Web3modal
//       const providerOptions = {
//         walletconnect: {
//           package: WalletConnectProvider,
//           options: {
//             // Mikko's test key - don't copy as your mileage may vary
//             infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
//           }
//         },
    
//         fortmatic: {
//           package: Fortmatic,
//           options: {
//             // Mikko's TESTNET api key
//             key: "pk_test_391E26A3B43A3350"
//           }
//         }
//       };
    
//       web3Modal = new Web3Modal({
//         cacheProvider: false, // optional
//         providerOptions, // required
//         disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
//       });
    
//       console.log("Web3Modal instance is", web3Modal);
    
// }
// async function login() {
//     await Moralis.User.logOut();


//     user = await Moralis.User.current();
//     if (!user) {
//         window.location.href="walletconnect.html";
//         // const user = await Moralis.authenticate({
//         //     provider: "walletconnect", mobileLinks: [
//         //         "rainbow",
//         //         "metamask",
//         //         "argent",
//         //         "trust",
//         //         "imtoken",
//         //         "pillar",
//         //     ]
//         // })

//         //     .then(function (user) {
//         //         isUser = user;
//         //         console.log("logged in user:", user);
//         //         console.log(user.get("ethAddress"));
//         //         $("#btn-logout").show();
//         //         $("#btn-login").hide();
//         //         // isUser = true;
//         //     })
//         //     .catch(function (error) {
//         //         console.log(error);
//         //     });
//     } else {
//         console.log("already Logged on");
//         console.log(user.get("ethAddress"));

//     }
// }
// async function logout() {
//     await Moralis.User.logOut();
//     localStorage.removeItem("connected");

//     $("#btn-logout").hide();
//     $("#btn-login").show();
// }
// async function init() {
//     console.log(localStorage.getItem("connected"),"test");
//     var conn =localStorage.getItem("connected");
// if(conn == 'yes'){

//   $("#btn-logout").show();
//   $("#btn-login").hide();
// }
// else{
//   $("#btn-logout").hide();
//   $("#btn-login").show();
// }
    
// }
// init()


