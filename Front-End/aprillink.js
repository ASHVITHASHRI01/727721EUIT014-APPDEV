// import React from 'react'
// import plant02 from './plant.png';
// import './about.css';

// function About() {
//   return (
//     <div>
//   <header class="header">
//   <img src={plant02} width={70}></img>
//     <a href="home" class="logo">Plant-Me</a>
//     <nav class="nav-items">
//     <a href="home">Home</a>
//     <a href="garden">Garden Calender</a>
//       <a href="journal">Garden Journal</a>  
//     <a href="remainder">Remainder</a>
//     <a href="about">About</a>
//     <a href="contact">Contact</a> 
//     <a href="login">Login</a>
//     <a href="createac">Register</a>
//     </nav>
//   </header>
//   <main></main>

import React from 'react'
import plant02 from './plant.png';
import './janlink.css';
import Garden from './garden';
import banana from './banana.jpg';
import pine from './pine.jpg';
import water from './water.jpg';
import cap from './cap.jpg';
import egg from './egg.jpg';
import beet from './beet.jpg';
import thyme from './thyme.jpg';
import rosemary from './rosemary.jpg';
import mint from './mint.jpg';
import daisy from './daisy.jpeg';
import rose from './rose.jpg';


function About() {
  return (
    <div>
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
      <a href="journal">Garden Journal</a>  
    <a href="remainder">Remainder</a>
    <a href="about">About</a>
    <a href="contact">Contact</a> 
    <a href="login">Login</a>
    <a href="createac">Register</a>
    </nav>
  </header>
  <main>
  <div className="jan-image">
            <center><h1>Best Fruits, Flowers & Vegetables to Grow in the Month of April</h1></center>
            {/* <center><h1>May and June</h1></center> */}
            <br></br>
            <h3>1.Banana</h3>
            <center><img src={banana} width={490} height={300}></img></center>
            <p></p>
            <h5>The banana plant is the largest herbaceous flowering plant. All the above-ground parts of a banana plant grow from a structure usually called a "corm". Plants are normally tall and fairly sturdy with a treelike appearance, but what appears to be a trunk is actually a "false stem" or pseudostem.
              <p></p>
              The banana growth cycle has 3 stages: Vegetative development (6 months), Flowering (3 months) and Fruit stage (3 months). This means the time between planting a banana plant and the harvest of the banana bunch is from 9 to 12 months, depending on the variety grown and growing conditions.
            </h5>
            <p></p>

            <h3>2.Pineapple</h3>
            <center><img src={pine} width={490} height={300}></img></center>
            <p></p>
            <h5>It is considered an herbaceous, tropical, and monocot perennial plant. The size of the plant ranges from approximately 1–2 m tall and wide. Its leaves are spiral in arrangement and on the terminal ends has flowers which then produce edible fruit. The stem at its center is about 25–50 cm long.
              <p></p>
              Unlike most bromeliads, pineapples are terrestrial, meaning they prefer to grow in soil at ground level. Fully grown pineapples are a rosette of long, sword-like leaves, arranged around a short stem. Mature plants grow to between 3 and 6 feet high and wide.
            </h5>
            <p></p>

            <h3>3.Watermelon</h3>
            <center><img src={water} width={490} height={300}></img></center>
            <p></p>
            <h5>Watermelon vines are thin, grooved and covered in tiny hairs. Vines are branching and possess deeply lobed pinnate leaves. The plant produces solitary yellow flowers and and a large spherical to oblong fruit. The fruit is a 'pepo' - a fleshy fruit protected by a thick leathery rind.
              <p></p>
              Watermelons require 80-90 days from seed sowing to grow a full-size watermelon. Some smaller-sized watermelons (like Sugar Baby) can reach maturity in closer to 70 days.
            </h5>
            <p></p>

            <h3>4.Capsicum</h3>
            <center><img src={cap} width={490} height={300}></img></center>
            <p></p>
            <h5>Known as bell peppers in the USA, peppers in the UK and pimientos in Spanish-speaking countries, capsicums are technically a fruit and are closely related to chillies. Paprika and cayenne pepper are different types of capsicums that are dried and ground into powders to make those spices we all love.
              <p></p>
              Choose a warm, sunny spot. ...
Prepare your soil with organic matter like compost and sheep pellets.
Add a layer of vegetable mix to plant into.
Feed your capsicums regularly and keep the soil moist throughout the growing season.
Stake taller plants and those grown in wind-prone areas.
            </h5>
            <p></p>

            <h3>5.Egg Plant</h3>
            <center><img src={egg} width={490} height={300}></img></center>
            <p></p>
            <h5>Eggplant, Solanum melongena, is a tropical, herbaceous, perennial plant, closely related to tomato, in the family Solanaceae which is grown for its edible fruit. The plants has a branching stem and simple, long, flat. coarsely lobed leaves which are green in color and are arranged alternately on the branches.
              <p></p>
              Eggplants are long-period crops. They need 60 to 100 days from transplanting to maturity point. However if you are planning to grow eggplant from seed, there are some facts you need to know. First, eggplant seeds require at least 21 °C (70 °F) soil temperature in order to germinate.
            </h5>
            <p></p>

            <h3>6.Beetroot</h3>
            <center><img src={beet} width={490} height={300}></img></center>
            <p></p>
            <h5>Beetroots are a good source of nutrients, fiber, and many plant compounds. Their health benefits include improved heart health and enhanced 
        exercise capacity, both of which are attributed to their inorganic nitrate content. <p></p>Beets are sweet and especially delicious when mixed in 
        salads.Beetroot is one of the best ways to increase haemoglobin levels. It is not only high in iron content, but also folic acid along with
         potassium and fibre.
            </h5>
            <p></p>

            <h3>7.Thyme</h3>
            <center><img src={thyme } width={490} height={300}></img></center>
            <p></p>
            <h5>Thyme is a small low-growing shrub and is commonly cultivated as an annual, though it can persist as an evergreen perennial in warm climates. The stems are somewhat woody and bear simple leaves that are oval to linear and arranged oppositely.
              <p></p>
              Grow thyme in well-drained soil in full sun. Some varieties of thyme work well planted in gravel gardens, cracks in paving or as an alternative to a lawn. Others do best in pots, which you can bring indoors in autumn. Cut back thyme after flowering and protect tender species in winter.
            </h5>
            <p></p>

            <h3>8.Mint</h3>
            <center><img src={mint} width={490} height={300}></img></center>
            <p></p>Mints have square stems and opposite aromatic leaves. Many can spread vegetatively by stolons and can be aggressive in gardens. The small flowers are usually pale purple, pink, or white in colour and are arranged in clusters, either forming whorls or crowded together in a terminal spike.
            <p></p>
            Mint is invasive and quickly spreads within raised beds and open garden areas. Once planted, underground stems root and form buds that will pop up throughout the bed and overtake other plants.
            <h5>
              <p></p>
              
            </h5>
            <p></p>
            <h3>9.Rosemary</h3>
    <center><img src={rosemary} width={490} height={300}></img></center>
    <p></p>
    <h5>Rosemary is one of the most flavorful herbs and is great for adding to things like poultry, meats, and vegetables. 
        Around Christmastime, you’ll see tree-shaped rosemary bushes for sale. You can bring them home and keep them for planting 
        in the spring. <p></p>The fragrant plant is a delightful scent and is sometimes used in floral arrangements. Rosemary likes its soil a 
        bit on the dry side, so be careful not to overwater. Allowed to flourish, a rosemary plant will grow into a full-sized bush.</h5>
    <p></p>
            <br></br>

            <h3>10.Daisies</h3>
            <center><img src={daisy} width={490} height={300}></img></center>
            <p></p>
            <h5>
Each flower has a rosette of small, thin white petals surrounding a bright yellow centre. These are supported by a single stem which grows from a group of dark green rounded leaves. The petals can sometimes be tinged with pink. It is a common wild flower found growing in our garden lawns.
              <p></p>
              Daisy seeds need light to germinate, and the flowers do best in full sun. Freely sow the daisy seeds. Cover the sowed seeds with an eighth of an inch of soil so that the sunlight can still reach the seeds. Plant the seeds in nutrient-rich, well-draining soil
            </h5>
            <p></p>

            <h3>11.Roses</h3>
          <center>  <img src={rose} width={490} height={300}></img></center>
          <p></p><h5> Whether you like the whimsical Indian roses, the sturdy Dutch roses, the button roses, or the 
               creeping roses, there is one rose for every home. The rose plant loves partial to full sunlight and rich but well-draining soil.
               <p></p> Make sure
                to not wet the foliage while watering and pruning well for a bushy plant with plenty of blooms. Fertilize regularly every 2 weeks with a
                 good balanced fertilisers. Ground-up onion peels also make for good fertilizer for rose plants.</h5>
          <p></p>

          <h3>12.Sunflowers</h3>
            <center><img src={sun} width={490} height={300}></img></center>
            <p></p>
            <h5>The outer florets are sterile and produce the outer petals of the flower head, while the inner florets will mature into the seeds in the central disc. Sunflowers are annual plants, harvested after one growing season and can reach 1–3.5 m (3.3–11.5 ft) in height.
              <p></p>
              The common sunflower has a green erect stem covered in coarse hairs, growing on average around 2m tall. The leaves are broad, with serrated edges, and are alternately arranged on the stem. The 'flower' of the common sunflower is actually a pseudanthium, or flowerhead, made up of many small flowers.
            </h5>
            <p></p>

            
  </div>
    </main>
  </div>
)
}

export default About