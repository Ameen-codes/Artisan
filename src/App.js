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
          pp={require("./media/dp.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/lazy_grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          />

          <HotCard 
          name={"Ameen"} 
          pp={require("./media/dp_3.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/lazy_grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          />
          
          <HotCard 
          name={"Ameen"} 
          pp={require("./media/dp.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/lazy_grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          />

          <HotCard 
          name={"Ameen"} 
          pp={require("./media/dp_3.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/lazy_grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          />

          <HotCard 
          name={"Ameen"} 
          pp={require("./media/dp_3.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/grizzy.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
          />

          <HotCard 
          name={"Ameen"} 
          pp={require("./media/dp_3.jpg")} 
          username={"ameen_d_great"} 
          nft={require("./media/ai_nft.jpeg")}
          description={"Lazy grizzy"}
          tag={"#27"}
          network={require("./media/icons8-ethereum-48.png")}
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
