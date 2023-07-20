import React from 'react'
import plant02 from './plant.png';
import './link2.css';
import flowerbg3 from './flowerbg3.jpg';
import glow from './glow.jpg';
import africa from './africa.jpg';
import orchid from './orchid.jpg';
import hoye from './hoye.jpg';
import impatient from './impatient.jpg';
import kala2 from './kala2.jpg';
import hydrangeas from './hydrangeas.jpg';
import hibiscus from './hibiscus.jpeg';
import adenium from './adenium.jpg';
import geraniums from './geraniums.jpg'
import gardenia from './gardenia.jpg'
import jasmine from './jasmine.jpg';
import rose from './rose.jpg';
import bogan from './bogan.jpg';
import periwinkle from './periwinkle.jpeg';

function Link2() {
  return (
    <div>
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
    <a href="remainder">Remainder</a> 
      {/* <a href="#">Garden Journal</a>   */}
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  <main><p></p>
   <center><h3>The best flowering plants for Indian homes</h3></center>
   <div className="flower-image">
    <center>
    <img src={flowerbg3} width={1150} height={580}></img>
        </center>
    <p></p>
    <p></p>
    <br></br>

    <h3>1.Gloxinia</h3>
    <center>  <img src={glow} width={490} height={300}></img></center>
    <p></p><h5>A true indoor flowering plant that loves bright indirect light to flower but can’t stand the direct sun. 
        Keep them in your well-lit rooms with south or west-facing windows. Keep the soil moist and strictly avoid 
        wetting the foliage, wet leaves cause brown spots. If allowed to dry out after their blooming season the
         plants go dormant in cold temperatures only to pop up again when the weather gets warmer.</h5>
        <p></p>

    <h3>2.African Violet:</h3>
    <center>  <img src={africa} width={430} height={300}></img></center>
    <p></p><h5>Another true indoor plant that thrives in indirect light is found indoors. These velvety plants are a treat
         for sore eyes. Keep them indoors in well-lit rooms out of the direct sun to avoid burn on north or east-facing 
         windowsills. Let the soil dry out completely in between waterings and fertilise every three weeks and also spray 
         it with neem oil once a month. Avoid wetting the velvety foliage.</h5>
    <p></p>

    <h3>3.Orchid</h3>
    <center>  <img src={orchid} width={490} height={300}></img></center>
    <p></p>
    <h5>The oriental queens are dreaded and loved by home gardeners in equal measures. They love bright indirect light and
         a potting mix that is kept evenly moist. The trick to keep your orchids happy is to give them a fixed spot that is well-lit
          and well-ventilated. Always use an orchid potting mix and fertilise when the plant is not in bloom to help with 
          leaf and root development.</h5>
    <p></p>

    <h3>4.Hoya Carnosa</h3>
    <center>  <img src={hoye} width={490} height={300}></img></center>
    <p></p>
    <p></p><h5>One of the ‘IT’ plants of this year; they are steadily climbing the popularity chart globally. With its curious-looking 
        foliage that resembles a ribbon that has twisted on itself, it is also known as the Hindu Rope Hoya or the waxflower plant. 
        It gives beautiful blooms that grow in clusters and have a mild fragrance. Keep it in a brightly lit room and water when the top inches of the soil are dry to touch.
         Fertilize the plant once every 2 weeks for good growth.</h5>
        <p></p>

        <h3>5.Impatiens</h3>
        <center>  <img src={impatient} width={490} height={300}></img></center>
        <p></p><h5>The true plant of the shade, they love partial to deep shade to flower. The flowers are richly pigmented and grow low on equally
             stunning leaves. Plant them in a well-draining potting mix that is kept moist at all times, drooping leaves are a sign of dehydration. 
             Fertilise every two weeks and avoid wetting the foliage when watering.</h5>
        <p></p>
        <div class="outdoor">
        <center><h2>Outdoor Flowering Plant</h2></center>
        <h4>There are so many flowering plants that bloom in sunlight that all the time in the world is less to talk about them. Even famously foliage
             plants like the monstera or the snake plant spout flowers in their natural environment. While there are a number of flowering plants 
             that you can keep in your sunny window boxes and balconies, here are a few of the most loved ones.</h4>
        <p></p>
        </div>
        <h3>1.Kalanchoe</h3>
        <center>  <img src={kala2} width={490} height={300}></img></center>
        <p></p><h5>For all intents and purposes, kalanchoes are flowering succulents. They love the full sun, hate being overwatered, and thrive in well-draining
             potting mixes. With proper light in west or a south-facing sunny corner. Kalanchoes will bloom for the most part of the year. Prune away dead 
             and spent flower heads to promote bushier growth and water only when the soil is completely dry. Fertilise the plants every 3 weeks through 
             the year with a generic houseplant fertiliser.</h5>
          <p></p>

        <h3>2.Black Eyed Susan</h3>
        <center>  <img src={impatient} width={490} height={300}></img></center>
        <p></p><h5>With their cheery yellow blooms, highlighted further with almost black centres, the Black Eyed Susan grows profusely in the warm Indian climate.
             This vining plant needs full sun to grow to its full glory. Water regularly till the plant is established and then water only when the topsoil 
             is dry to touch. Always deadhead the flowers to keep the plant shapely and encourage more flowers. Feed regularly post-winter through the warmer months.</h5>
          <p></p>

          <h3>3.Hydrangeas</h3>
          <center><img src={hydrangeas} width={490} height={300}></img></center>
          <p></p><h5>These exotic big, clustered flowers are still not that common but everyone who knows them loves them. They are not that dependent on full sun and can 
               do well in morning sun or dappled sun through the day. Plant them in loose soil with a  good amount of compost but keep them well ventilated. These 
               cool-season plants might reward you with blooms even in summers if you keep them out of the scorching sun and feed them every 3 weeks with a 
               generic house plant fertiliser and augment the soil with compost.</h5>
          <p></p>

          <h3>4.Hibiscus</h3>
          <center>  <img src={hibiscus} width={490} height={300}></img></center>
          <p></p><h5>There is nothing more tropical than a hibiscus plant. A permanent fixture for Hindu rituals, the hibiscus is an easy plant to grow if you can control
                the love mealy bugs have for it. Hibiscus or the shoe flowers loves full sun and a loose well-draining soil to grow in. Let the soil dry out in between
                 waterings and avoid wetting the foliage to keep the bugs away, Quarantine and clean with soap solution and spray it down with neem oil at the first sign 
                 of mealy bugs.</h5>
          <p></p>
          <h3>5.Adenium</h3>
          <center>  <img src={adenium} width={490} height={300}></img></center>
          <p></p><h5>Adeniums or desert roses are just as famous for their delicate blooms as they are for their bulbous stems. This miniature tree-looking plant loves the
                full sun and in true desert plant, fashion needs water only when the soil is completely dry. Plant it in a loose well-draining potting mix resembling 
                its native growing condition and fertilise it every 3 weeks in the warmer growing months.</h5>
               <p></p>

          <h3>6.Geraniums</h3>
          <center>  <img src={geraniums} width={430} height={300}></img></center>
          <p></p><h5>The sun lovers, the mere presence of sunlight makes them thrive like nobody is watching. With their citrus-smelling leaves and bright colorful flowers
               that grow on tall arching stems, they are your best choice for the scorching afternoon sun. They flower throughout the year in sun and can be grown in
                almost all kinds of soil, provided it is kept moist and not soggy. Make sure to deadhead spent blooms to promote bushy growth and more flowers.</h5>
          <p></p>

          <h3>7.Gardenia</h3>
          <center>  <img src={gardenia} width={490} height={300}></img></center>
          <p></p><h5>If someone could bottle the fragrance of gardenia, they could make a fortune. But nothing smells like a  gardenia in full bloom. Considered finicky
                for their bud-dropping habit, having a happy gardenia is simply a balance of light and moisture. Give the plant a good 4-5 hours of sun and keep the
                 soil moist at all times. A little bit of misting early morning also helps. Make sure to fertilize gardenias every few weeks and prune well 
                 or a bushy plants with plenty of flowers.</h5>
          <p></p>

          <h3>8.Jasmine</h3>
          <center>  <img src={jasmine} width={490} height={300}></img></center>
          <p></p><h5>The mogra plant family has so many variants that you can take your pick. The care remains fairly simple for all of them. Jasmines love the full 
               sun and like staying moist. Deadhead the flowers once they have withered away and prune happily to promote more rapid growth and more flowers.
                Fertilize every couple of weeks and water when the topsoil is dry, but don’t let it dry out entirely.</h5>
          <p></p>

          <h3>9.Roses</h3>
          <center>  <img src={rose} width={490} height={300}></img></center>
          <p></p><h5>What is a flower garden without a rose plant? Whether you like the whimsical Indian roses, the sturdy Dutch roses, the button roses, or the 
               creeping roses, there is one rose for every home. The rose plant loves partial to full sunlight and rich but well-draining soil. Make sure
                to not wet the foliage while watering and pruning well for a bushy plant with plenty of blooms. Fertilize regularly every 2 weeks with a
                 good balanced fertilisers. Ground-up onion peels also make for good fertilizer for rose plants.</h5>
          <p></p>

          <h3>10.Bougainvillea</h3>
          <center>  <img src={bogan} width={490} height={300}></img></center>
          <p></p><h5>The true summer flowers, that can lend Tuscan countryside feels to any home. Extremely easy to grow for, just give them all the sun and very 
               little water. Fertilise it every month with a basic fertiliser and the plant is in general pest free, the only major plant issue is overwatering.</h5>
          <p></p>

          <h3>11.Periwinkle</h3>
          <center>  <img src={periwinkle} width={490} height={300}></img></center>
          <p></p><h5>The sadaabahar or the nityakalyani as it is famously known in India is a quintessential Indian plant. Its famous for its ease of growing and 
               how profusely it flowers through the year. The periwinkle can grow in partial to full sun with ease and also does well in north facing balconies.
                Water the plant when the topsoil is dry to touch and prune regularly for a bushy plant with a lot of flowers. Fertilize every few weeks 
                and keep the foliage dry.</h5>
          <p></p>

          <br></br>
        </div>
    </main>
  
  </div>
)
}

export default Link2