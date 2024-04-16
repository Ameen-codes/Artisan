import './App.css';
import Header from './header';
import Intro from './intro';
import Submenu from './submenu';
import Sidemenu from './sidemenu';
import Banner from './banner';
import HotCard from './hotcard';
import Balance from './balance';
import TopCard from './topCollections';
import Footer from './footer';
import HotMenu from './hotmenu';

function App() {
  return (
<>

    
    <body>

      <Header></Header>
      <Intro></Intro>

      <main>

        <Submenu></Submenu>
        <Sidemenu></Sidemenu>

        <div className='business'>
         <Banner></Banner> 
         <HotMenu></HotMenu>

         <div className='HotBids'>
          <HotCard 
          name={"Ameen"}
          username={"ameen_d_great"} 
          pp={require("./media/dp.jpg")} 
          nft={require("./media/ai_nft.jpeg")}
          description={"Humanoid"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          bid_price={"5.67"}
          network_type={"ETH"}
          />

          <HotCard 
          name={"Tolu"} 
          username={"web3daddy"} 
          pp={require("./media/dp_3.jpg")} 
          nft={require("./media/sedusa_1.jpeg")}
          description={"Sedusa"}
          tag={"#27"}
          network={require("./media/btc_2.png")}
          bid_price={"1.00"}
          network_type={"BTC"}
          />

          <HotCard 
          name={"Francis"} 
          username={"pabloman"} 
          pp={require("./media/dp_4.jpg")} 
          nft={require("./media/lazy_grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          bid_price={"3.49"}
          network_type={"ETH"}
          />
          
          <HotCard 
          name={"Dauda"} 
          username={"richest_aboki"} 
          pp={require("./media/dp_5.jpg")} 
          nft={require("./media/faceless.jpeg")}
          description={"Faceless"}
          tag={"#27"}
          network={require("./media/sol.png")}
          bid_price={"4.67"}
          network_type={" "+"SOL"}
          />

          <HotCard 
          name={"Jonathan"} 
          username={"nathanator"} 
          pp={require("./media/dp_9.jpeg")} 
          nft={require("./media/grizzy.jpeg")}
          description={"Bored grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          bid_price={"2.01"}
          network_type={"ETH"}
          />

          <HotCard 
          name={"PraiseGod"} 
          username={"Godisgreat247"} 
          pp={require("./media/dp_6.jpeg")} 
          nft={require("./media/eva.jpeg")}
          description={"Eva"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          bid_price={"1.36"}
          network_type={"ETH"}
          />
          
         </div>

        </div>

        <div className='RightBar'>
          <Balance></Balance>
          <TopCard></TopCard>
        </div>

      {/* <Footer></Footer> */}
      </main>
      
    </body>

</>

  );
}

export default App;
