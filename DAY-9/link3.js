import React from 'react'
import plant02 from './plant.png';
import './link3.css';
import herb from './herb.jpg';
import coriander from './coriander.jpg';
import mint from './mint.jpg';
import basil from './basil.jpg';
import curry from './curry.jpg';
import methi from './methi.jpg';
import dill from './dill.avif'
import ash from './ash.avif';
import mexi from './mexi.jpg';
import rosemary from './rosemary.jpg';
import lemon from './lemon.jpeg';
function Link3() {
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
    <div class="l-intro">
      <h1>Herbs To Grow In Your Garden</h1>
    </div>
    <p></p>
    <center>
    <div className="herb-desc">
    <h3>Here are fresh herbs and plants you can grow
         that are great to have handy in your garden.</h3>
         </div></center>
    <div class="herbs">
        <h3>1.Coriander or Parsley</h3>
    <center> <img src={coriander} width={490} height={300}></img></center>
    <p></p><h5>Coriander is a mild bitter herb that can 
        enhance the flavor of your foods. Many consider coriander just to be a curly
         green garnish for food, but it actually helps things like stews achieve a 
         more balanced flavor. As an added benefit, parsley can aid in digestion. By
          reading articles such as unify health labs reviews and other digestion related 
          discussions, many supplements and herbs are uncovered as great helpers for the
           digestive system. coriander is often grown as an annual, but in milder climates, 
           it will stay evergreen all winter long. Parsley plants will grow to be large 
           and bushy. Coriander is a good source of Vitamins A and C.</h5>
        <p></p>
    
    <h3>2.Mint or Pudina</h3>
    <center><img src={mint} width={490} height={300}></img></center>
    <p></p>
    <h5>There are several varieties of mint. You can use it in drinks like mojitos or mint juleps.
         Or add some mint to your summer iced tea. Mint freshens the breath and will help to calm 
         your stomach. But if you grow mint, remember that it’s considered an invasive plant. 
         Mint will spread and take over your garden. It’s best grown in containers.Known for its
          refreshing fragrance, most Indian homes grow mint leaves or pudina indoors.
        They’re absolutely easy to grow and you must make sure that this plant has a
         good sunny spot on your windowsill</h5>
    <p></p>

    <h3>3.Basil or Tulsi</h3>
    <center><img src={basil} width={490} height={300}></img></center>
    <p></p>
    <h5>Highly revered in India, people use Tulsi or basil plants extensively for worship and for cooking purposes.
         This plant needs plenty of sunlight and water for its healthy growth.Whether you choose large leaf Italian
          basil or large purple sweet basil, this plant is popular
         in many cuisines but is a feature in Italian cooking like pizzas, salads, sauces, and pesto.
          Some people think basil is great for planting alongside your tomatoes but there’s no real 
          evidence that it makes your tomatoes taste sweeter. Basil has health benefits of antioxidants
           and is a defense against low blood sugar.</h5>
    <p></p>

    <h3>4.Curry Leaves</h3>
    <center><img src={curry} width={490} height={300}></img></center>
    <p></p>
    <h5>Curry leaves have a unique fragrance described as a blend of citrus, herbal, and slightly nutty notes. 
        The leaves have a slightly bitter taste that adds depth and complexity to dishes.Curry leaves are not 
        only valued for their culinary contributions but are also appreciated for their aromatic presence in
         Indian home gardens. They are a beloved and integral part of Indian cuisine, adding a distinct and
          appetizing flavor to various dishes.</h5>
    <p></p>

    <h3>5.Fenugreek or Methi</h3>
    <center><img src={methi} width={510} height={300}></img></center>
    <p></p>
    <h5>Fenugreek is relatively easy to grow and can be cultivated in both gardens and pots. It prefers well-drained 
        soil and thrives in full sunlight.Fenugreek seeds have a distinct and pungent aroma, and their flavor is described 
        as bitter, nutty, and slightly sweet. The leaves have a more mild and pleasant flavor, with a slight bitterness 
        that adds depth to dishes.Fenugreek, also known as Methi in Hindi, is an herb commonly used in Indian cuisine 
        and has a variety of culinary and medicinal applications. </h5>
    <p></p>

    <h3>6. Dill or Sowa Bhaji </h3>
    <center><img src={dill} width={490} height={300}></img></center>
    <p></p>
    <h5>Dill has a fresh and aromatic flavor with hints of anise and parsley. The leaves have a mild and slightly sweet taste,
         while the seeds have a stronger flavor profile. The aroma of dill is grassy and refreshing.Dill is a great flavoring 
         for fish, lamb, potatoes, and peas. It also aids in digestion, helps to fight bad breath 
        and has the added benefits of reducing swelling and cramps. Dill is easy to grow. It will also attract helpful 
        insects to your garden such as wasps and other predatory insects.</h5>
    <p></p>

    <h3>7.Ginseng or Ashwagandha</h3>
    <center><img src={ash} width={490} height={300}></img></center>
    <p></p>
    <h5>An essential herb in our medicinal garden, ashwagandha or Indian ginseng can be grown in your own kitchen. In 
        Ayurvedic medicine, the roots of this plant are believed to be used extensively. The consumption of tea made from 
        this herb can provide relief from anxiety and depression and aid mental clarity. According to studies, ashwangandha may 
        also have an overall immune system boosting effect. So you have a lot of reasons to start growing this herb at home right now.
        Place this plant in a dry area that receives abundant sunlight in your Indian herbs kitchen. Well-drained, sandy or clay soil is
         ideal. Do not overwater this herb as it is water-resistant and requires water in minimal amounts.</h5>
    <p></p>

    <h3>8.Mexican Mint</h3>
    <center><img src={mexi} width={490} height={300}></img></center>
    <p></p>
    <h5>Mexican mint, also known as Mexican oregano or Plectranthus amboinicus, is an herb commonly used in Mexican and Latin 
        American cuisines. Despite its name, it is not related to true oregano but is part of the mint family.
        Mexican mint is a perenniaMexican mint is relatively easy to grow in warm climates. It prefers well-drained soil and full sun to 
        partial shade. It can be grown from cuttings or seeds. Mexican mint is a versatile plant that can be cultivated in pots or directly
         in the ground. Regular pruning helps promote bushier growth and prevents it from becoming too leggy.</h5>
    <p></p>

    <h3>9.Rosemary</h3>
    <center><img src={rosemary} width={490} height={300}></img></center>
    <p></p>
    <h5>Rosemary is one of the most flavorful herbs and is great for adding to things like poultry, meats, and vegetables. 
        Around Christmastime, you’ll see tree-shaped rosemary bushes for sale. You can bring them home and keep them for planting 
        in the spring. The fragrant plant is a delightful scent and is sometimes used in floral arrangements. Rosemary likes its soil a 
        bit on the dry side, so be careful not to overwater. Allowed to flourish, a rosemary plant will grow into a full-sized bush.</h5>
    <p></p>

    <h3>10.LemonGrass</h3>
    <center><img src={lemon} width={490} height={300}></img></center>
    <p></p>
    <h5>Lemongrass, scientifically known as Cymbopogon citratus, is a popular herb widely used in various cuisines, particularly in
         Southeast Asian dishes. It is known for its citrusy aroma and flavor.Lemongrass is a versatile herb that adds a unique citrusy
          touch to dishes, beverages, and herbal teas. Its vibrant flavor and aromatic qualities make it a beloved ingredient in various
           cuisines and a popular choice for those seeking a zesty and refreshing taste experience.</h5>
    <p></p><br></br>
    </div>
    
    </main>
  
  </div>
)
}

export default Link3