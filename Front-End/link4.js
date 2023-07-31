import React from 'react'
import plant02 from './plant.png';
import './link4.css';
import veggies from './veggies.jpg';
import potato from './potato.jpg';
import onion from './onion.jpg';
import okra from './okra.jpg';
import turnip from './turnip.jpg';
import radish from './radish.jpg';
import cabbage from './cabbage.jpg';
import carrot from './carrot.jpg';
import tomato from './tomato.jpeg';
import beet from './beet.jpg'
import been from './been.jpg';
function Link4() {
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
  <main>
    {/* <div class="l-intro">
    </div>
<p></p */}
    
<center><h1>Vegetables to Grow in Your Home Garden</h1>
<img src={veggies} width={1100} height={480}></img></center>
<br></br>
    <div class="vegi">
    <h3>1.Potatos</h3>
    <center><img src={potato} width={490} height={300}></img></center>
    <p></p>
    <h5>Potatoes, scientifically known as Solanum tuberosum, are starchy tubers that 
        are widely cultivated and consumed worldwide. The growing season for potatoes can
         vary depending on the climate and potato variety.It's important to note that the 
         growing season and specific planting and harvesting times may vary depending on your 
         location and the potato variety you choose. It's recommended to consult local gardening 
         resources or agricultural extension services for specific guidance tailored to your region.</h5>
    <p></p>

    <h3>2.Onions</h3>
    <center><img src={onion} width={490} height={300}></img></center>
    <p></p>
    <h5>Onions are one of the most widely cultivated and consumed vegetables around the world.
         They are known for their pungent flavor and are used in various culinary preparations.
         Onions are a versatile and widely used vegetable that adds flavor and depth to countless dishes. 
         Whether used as a supporting ingredient or the star of a recipe, onions are an essential part of 
         culinary traditions worldwide.</h5>
    <p></p>

    <h3>3.Okra</h3>
    <center><img src={okra} width={490} height={300}></img></center>
    <p></p>
    <h5>Though more popular in southern recipes because most varieties like warm weather, there are versions of okra
         that grow just as well in chillier northern climates. Okra grows fast and often and the blooming 
         flowers look like pretty hibiscus! You'll love to look at and eat them all summer long.This plant not
          only grows edible vegetables and beautiful flowers, but it is also rich in vitamin A and low in calories,
           which makes it a great addition to your diet.</h5>
    <p></p>

    <h3>4.Turnips</h3>
    <center><img src={turnip} width={490} height={300}></img></center>
    <p></p>
    <h5>An underrated cool-weather vegetable, the turnip makes a great alternative to carrots and potatoes in many recipes. 
        Plus, you can eat both the green tops and the root vegetable, making them doubly delicious!Turnips and other cruciferous 
        vegetables that are high in fiber help make people feel fuller for longer, and they are low in calories. Eating high 
        fiber meals also helps keep blood sugar levels stable. </h5>
    <p></p>

    <h3>5.Radish</h3>
    <center><img src={radish} width={490} height={300}></img></center>
    <p></p>
    <h5>Radish plants are perfect cool-weather plants that are easy to grow and can be harvested in as little as three weeks. 
        These potent root vegetables are packed with minerals, dietary fiber, and vitamins C and B6.These hardy root vegetables 
        are a great last-minute crop—they can be ready for harvest as soon as three weeks after planting! While they're known 
        for their colorful roots, the entire plant is actually edible.</h5>
    <p></p>

    <h3>6.Cabbage</h3>
    <center><img src={cabbage} width={490} height={300}></img></center>
    <p></p>
    <h5>Cabbage is not only affordable and low in calories, but it offers a variety of health benefits. It provides a good deal 
        of vitamin C, fiber, and vitamin K, which means it may support your immune system, digestive health, and bone health.This hardy, 
        leafy vegetable thrives with 6 to 8 hours of direct sunlight per day so be sure to save a sunny spot in your garden if you plan to
         grow cabbage. Start sowing your seeds indoors for a summer harvest.</h5>
    <p></p>

    <h3>7.Carrot</h3>
    <center><img src={carrot} width={450} height={300}></img></center>
    <p></p>
    <h5>Carrots are full of benefits—they may promote healthy vision, balance your blood sugar, help with weight management, lower your risk
         of cancer, regulate blood pressure, reduce heart disease, improve immunity, and boost brain health. You won't regret incorporating more 
         of this vegetable into your diet.Sow the seeds as thinly as possible, 1cm (½in) deep, in rows 15–30cm (6–12in) apart. Seeds can be slow to 
         germinate, so be patient. Seedlings can be vulnerable to slugs and snails, so put protection in place. </h5>
    <p></p>

    <h3>8.Tomato</h3>
    <center><img src={tomato} width={490} height={300}></img></center>
    <p></p>
    <h5>We commonly refer to tomatoes as a vegetable due to their use in savory dishes, but it is indeed a fruit. To understand why tomatoes are 
        a fruit, we must start with defining the botanical classifications for fruits and vegetables. Fruit-bearing is a part of the natural life 
        cycle of a flowering plant.
    The vegetable, which is also considered a fruit, is a solid source of nutrients like vitamin C, potassium, and antioxidants—namely, lycopene.</h5>
    <p></p>

    <h3>9.Beetroot</h3>
    <center><img src={beet} width={490} height={300}></img></center>
    <p></p>
    <h5>Beetroots are a good source of nutrients, fiber, and many plant compounds. Their health benefits include improved heart health and enhanced 
        exercise capacity, both of which are attributed to their inorganic nitrate content. Beets are sweet and especially delicious when mixed in 
        salads.Beetroot is one of the best ways to increase haemoglobin levels. It is not only high in iron content, but also folic acid along with
         potassium and fibre. </h5>
    <p></p>

    <h3>10.Beens</h3>
    <center><img src={been} width={490} height={300}></img></center>
    <p></p>
    <h5>A bean is the seed of several plants in the family Fabaceae, which are used as vegetables for human or animal food. They can be cooked in many
         different ways, including boiling, frying, and baking, and are used in many traditional dishes throughout the world.Fresh beans, depending on the 
         variety, grow to maturity in 45 to 72 days. Most bush bean varieties can be picked after 55 to 60 days. Do not pick beans when plants are wet
          because then they are easily bruised and diseases may spread. Beans are usually planted from seed.</h5>
    <p></p>
    <br></br>
    </div>
    </main>
  
  </div>
)
}

export default Link4