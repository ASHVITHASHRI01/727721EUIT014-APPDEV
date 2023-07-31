import React from 'react'
import plant02 from './plant.png';
import './janlink.css';
import Garden from './garden';
import janmain from './janmain.jpg'
import car from './car.jpg';
import pancies from './pancies.jpg';
import jasmine1 from './jasmine1.jpg';
import rad from './rad.jpg';
import spinach from './spinach.jpg'
import carrot from './carrot.jpg';
import potato from './potato.jpg';
import kale from './kale.jpg';
import orange from './orange.jpg';
import lemons from './lemons.jpg'
import aru from './aru.jpg';
import fenu from './fenu.jpg';
import caul from './caul.jpg';
import bro from './bro.jpg';
import citfru from './citfru.jpg'
import turnip from './turnip.jpg';
import onion from './onion.jpg';
import coriander from './coriander.jpg'
import mint from './mint.jpg';
import mari from './mari.jpg';
import rose from './rose.jpg'
import peas1 from './peas1.jpg';
import mango from './mango.jpg';
import guava from './guava.jpg'
import papaya from './papaya.jpg';
import tomato from './tomato.jpeg';
import okra from './okra.jpg'
import aloe from './aloe.jpg';
import rosemary from './rosemary.jpg';
import basil from './basil.jpg';
import sun from './sun.jpg';
import hibiscus from './hibiscus.jpeg';
import snake from './snake.jpg';
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
    {/* <center>
    <img src={janmain} width={1100} height={550}></img>
        </center> */}
        {/* <p></p>
        <center><h1>Bountiful Plants to Grow in January</h1></center>
        <center><h1>February and March</h1></center>
    <h3>1.Carnations</h3>
        <center><img src={car} width={490} height={300}></img></center><p></p>
        <h5>carnation, (Dianthus caryophyllus), also called grenadine or clove pink, 
          herbaceous plant of the pink, or carnation, family (Caryophyllaceae), native
           to the Mediterranean area. It is widely cultivated for its fringe-petaled flowers,
            which often have a spicy fragrance, and is used extensively in the floral industry. 
            See also pink (Dianthus).
            <p></p>
          There are two general groups, the border, or garden, carnations and the perpetual 
          flowering carnations. Border carnations include a range of varieties and hybrids,
           30 to 75 cm (1 to 2.5 feet) tall; the flowers, in a wide range of colours, are
            usually less than 5 cm (2 inches) in diameter and are borne on wiry, stiffly erect stems. 
            The bluish green leaves are narrow, sheathing the stems; there are swellings at the
             junction of leaf and stem.
        </h5>
            <p></p>

            <h3>2.Pancies</h3>
        <center><img src={pancies} width={490} height={380}></img></center><p></p>
        <h5>Heart-shaped or rounded leaves sprout from the base, and oblong or oval leaves grow from the 
          stems. The plant's velvety flowers, which usually occur in combinations of blue, yellow, and white,
           are about 2.5 to 5 cm (1 to 2 inches) across and have five petals.
            <p></p>
        Pansies are planted during cool spring or fall months. Pansies prefer sites that provide full,
         direct morning sun, yet shield them from intense afternoon rays. Well-drained, fertile soil that's
          high in organic matter helps fuel abundant pansy blooms.</h5>
            <p></p>

            <h3>4.Winter-Jasmine</h3>
    <center><img src={jasmine1} width={490} height={300}></img></center>
    <p></p>
    <h5>Winter jasmine is a medium-sized, fountain-like, deciduous shrub that grows up to 4 feet tall. If it
       is grown as a vine, it will reach a height of 10 to 15 feet tall and 3 to 6 feet wide. It has long arching 
       branches and willowy stems.
      <p> </p>
      These beautiful, deciduous shrubs attract butterflies, are pet-friendly, and the care is easy. Winter 
      jasmine is fast-growing and spreads, making it a good plant to train to grow over a trellis or use as 
      ground cover.
    </h5>
    <p></p>
          
            <h3>5.Beans and Peas</h3>
    <center><img src={peas1} width={490} height={300}></img></center>
    <p></p>
    <h5>Growing beans is a rewarding and relatively easy gardening project that can yield a bountiful
       harvest. Beans belong to the legume family and come in various types, including green beans
        (snap beans), pole beans, and bush beans.
        <p></p>
        The time to harvest depends on the variety. Generally, green beans are ready to be picked 
        when the pods are firm, crisp, and about 4 to 6 inches long. Regularly harvest the beans
         to encourage continuous production. For dried beans, leave the pods on the plant until 
         they turn brown and dry out. </h5>
    <p></p>

    <h3>6.Carrot</h3>
    <center><img src={carrot} width={450} height={300}></img></center>
    <p></p>
    <h5>Carrots are full of benefits—they may promote healthy vision, balance your blood sugar, 
      help with weight management, lower your risk of cancer, regulate blood pressure, reduce heart disease, 
      improve immunity, and boost brain health. You won't regret incorporating more of this vegetable into your diet.
      <p></p>
      Sow the seeds as thinly as possible, 1cm (½in) deep, in rows 15–30cm (6–12in) apart. Seeds can be slow to 
         germinate, so be patient. Seedlings can be vulnerable to slugs and snails, so put protection in place. </h5>
    <p></p>

    <h3>7.Potatoes</h3>
        <center><img src={potato} width={490} height={300}></img></center><p></p>
        <h5>Potatoes, scientifically known as Solanum tuberosum, are starchy tubers that 
        are widely cultivated and consumed worldwide. The growing season for potatoes can
         vary depending on the climate and potato variety.
         <p></p>
         It's important to note that the 
         growing season and specific planting and harvesting times may vary depending on your 
         location and the potato variety you choose. It's recommended to consult local gardening 
         resources or agricultural extension services for specific guidance tailored to your region.
        </h5>
            <p></p>

           <h3>8.Radish</h3>
        <center><img src={rad} width={490} height={300}></img></center><p></p>
        <h5>Radishes are annual or biennial brassicaceous crops grown for their swollen tap roots which
           can be globular, tapering, or cylindrical. The root skin colour ranges from white through pink,
            red, purple, yellow, and green to black, but the flesh is usually white.
          <p></p>
          Salad radishes are best harvested young, in as little as four weeks from germination, when the 
          roots are about 2.5cm (1in) in diameter and mildly peppery. Early sowings take a little longer,
           ready in six to eight weeks. If left to get too large or old, or to grow slowly, they become 
           pithy, hot and inedible.
        </h5>
            <p></p>

            <h3>9.Spinach</h3>
        <center><img src={spinach} width={490} height={300}></img></center><p></p>
        <h5>Spinach (Spinacia oleracea) is a herbaceous plant whose leaves, green and arranged in rosette, 
          are eaten raw or cooked. The leaves have an oval shape and are wrinkled; they can be whole or sawed.
           It is a very nutritious, tasteful and easy-to-digest plant.
            <p></p>
            Spinach plants take about six to eight weeks to grow, but their roots are easily damaged, so be
             careful when harvesting. You can pick off or cut individual leaves, or harvest the entire plant 
             at once.
        </h5>
            <p></p>

            <h3>10.Kale</h3>
            <center><img src={kale} width={490} height={300}></img></center>
            <p></p>
            <h5>Kale, Brassica oleracea variant acephala, is a leafy herbaceous biennial or perennial plant 
              in the family Brassicaeae grown as a leafy green vegetable. The kale plant is a non-heading, 
              cabbage like plant with curly or straight, loose blue-green or purple leaves.
              <p></p>
              Kale grows best in full sun, but will tolerate partial shade as well. Plants that receive 
              fewer than 6 hours of sun daily will not be as stocky or leafy as those that get ample sun, 
              but they will still be plenty edible! Like collards, kale likes fertile soil to grow fast
               and produce tender leaves.
            </h5>
            <p></p>

            <h3>11.Orange</h3>
            <center><img src={orange} width={490} height={300}></img></center>
            <p></p>
            <h5>Orange plant (Citrus x sinensis) belongs to the Rutaceae family. It is a flowering tree and its
               height in maturity can range between 16 and 50 ft. (between 5 and 15 m). Orange tree is grown 
               mostly for its fruits, but also for its flowers and as an ornamental.
              <p></p>
              It can take three to five years for an orange tree to produce fruit, depending on how old the 
              tree is when purchasing. Once the tree finally begins producing fruit, they take 7 to 8 months to ripen.
            </h5>
            <p></p>

            <h3>12.Lemons</h3>
            <center><img src={lemons} width={490} height={300}></img></center>
            <p></p>
            <h5>The lemon plant forms an evergreen spreading bush or small tree, 3–6 metres (10–20 feet) high if not 
              pruned. Its young oval leaves have a decidedly reddish tint; later they turn green. In some varieties
               the young branches of the lemon are angular; some have sharp thorns at the axils of the leaves.
              <p></p>
              Lemon trees thrive in hot & humid conditions. Keep this in mind when growing plants indoors. You
               will be able to see good growth when the temperature remains at an optimum level of 75F to 85F. 
               50% humidity along with optimal temperature makes the condition ideal for growing lemon trees
            </h5>
            <p></p>
            <br></br>
{/* 
            <center><h1>Best Fruits, Flowers & Vegetables to Grow in the Month of February</h1></center>
            <br></br>

            <h3>1.Citrus Fruits</h3>
            <center><img src={citfru} width={490} height={300}></img></center>
            <p></p>
            <h5>They are widely grown in all suitable subtropical and tropical climates and are consumed worldwide.
               The most important of the citrus fruits commonly eaten include sweet oranges, mandarins, lemons,
                limes, grapefruits, and pummelos. These are eaten fresh, juiced, and in processed products.
              <p></p>
            </h5>Some types (low-acid sweet oranges, sour oranges, citrons) are not of much importance commercially,
             while others (sweet lemons, sweet limes) are important in some regions of the world but not in others.
             There are four types of sweet oranges. The navel oranges possess a small, secondary fruit in the stylar 
             end of the main fruit. 
            <p></p>

            <h3>2.Arugula</h3>
            <center><img src={aru} width={490} height={300}></img></center>
            <p></p>
            <h5>Native to the Mediterranean, arugula is a common salad vegetable in many parts of southern Europe 
              and has grown in popularity around the world for its peppery, nutty taste and its nutritional content.
               The young leaves are often eaten raw and are a good source of calcium, iron, and vitamins A, C, and K.
              <p></p>
              Sometimes called rocket or roquette, arugula should be planted in the garden in early spring or fall.
               It will grow in a rosette about a foot wide and equally tall, if you let it. Like leaf lettuce, 
               mustard greens, and collards, arugula stretches skyward in hot weather, blooming and setting seeds.
            </h5>
            <p></p>

            <h3>3.Fenugreek</h3>
            <center><img src={fenu} width={490} height={300}></img></center>
            <p></p>
            <h5>Fenugreek is an erect, smooth, herbaceous plant that can grow up to a height of 40-80 cm (Ecocrop, 2017). It is taprooted. Its stems are erect, up to 50 cm high, sometimes branched. The leaves are alternate, compound, trifoliolate, 7-12 cm long, light green in colour.
              <p></p>
              Fenugreek plant leaves will be ready to harvest within 30 to 40 days of sowing. Snip off the top third of the mature stems carefully allowing the rest to continue growing. This will encourage branching facilitating flowering and seed production later. After trimming, the leaves will regrow in 15 days.
            </h5>
            <p></p>

            <h3>4.Turnip</h3>
            <center><img src={turnip} width={490} height={300}></img></center>
            <p></p>
            <h5>Turnip, (Brassica rapa, variety rapa), also known as white turnip, hardy biennial plant in the mustard family (Brassicaceae), cultivated for its fleshy roots and tender growing tops. The turnip is thought to have originated in middle and eastern Asia and is grown throughout the temperate zone.
              <p></p>
              Turnip roots grow rapidly – early varieties can be ready to harvest in only six weeks and maincrops in about ten weeks, depending on the growing conditions. They are best harvested when small and full of flavour.
            </h5>
            <p></p>

            <h3>5.Cauliflower</h3>
            <center><img src={caul} width={490} height={300}></img></center>
            <p></p>
            <h5>Cauliflowers are annual plants that reach about 0.5 metre (1.5 feet) tall and bear large rounded leaves that resemble collards (Brassica oleracea, variety acephala). As desired for food, the terminal cluster forms a firm, succulent “curd,” or head, that is an immature inflorescence (cluster of flowers).
              <p></p>
              Cauliflowers are usually grown from seed, sown either indoors or outside, and like sun and fertile, moisture-retentive, well-firmed soil. Cauliflowers have a reputation for being tricky to grow. The key to success is to prevent any checks in their growth, keeping them consistently well-watered at all times.
            </h5>
            <p></p>

            <h3>6.Broccoli</h3>
            <center><img src={bro} width={490} height={300}></img></center>
            <p></p>
            <h5>Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.
              <p></p>
              Plants take four to ten months to start cropping, depending on sowing time and variety, then provide pickings for up to two months. Summer varieties crop much more quickly than winter varieties. Broccoli is ready to harvest when the small heads, or spears, are well formed but still tightly in bud.
            </h5>
            <p></p>

            <h3>7.Onion</h3>
            <center><img src={onion} width={490} height={300}></img></center>
            <p></p>
            <h5>An onion is a round vegetable with a light brown skin. It has many white layers on its inside which have a strong, sharp smell and taste. Finely chop the onion, and add it to the pan with the garlic.
              <p></p>
              Onions require 90-100 days to mature from seed, which is around four months. 
              From sets, onions are ready to harvest after around 80 days, or just under three months.In the first year, the onion goes through 10 different growing stages, which include: planting, germination, sprouting, true leaves formation, initiation and development of the bulbs, maturation, and vegetative senescence
            </h5>
            <p></p>

            <h3>8.Coriander</h3>
            <center><img src={coriander} width={490} height={300}></img></center>
            <p></p>
            <h5>Coriander, (Coriandrum sativum), also called cilantro or Chinese parsley, feathery annual plant of the parsley family (Apiaceae), parts of which are used as both an herb and a spice. Native to the Mediterranean and Middle East regions, the plant is widely cultivated in many places worldwide for its culinary uses.
              <p></p>
              Coriander crop thrives well in temperatures between 17° to 27°C. Coriander is best sown directly in pots rather than growing them in seed trays and then transplanting the sprouts. Step 2: You can grow coriander in full sun and well-drained soil with a pH of 6.2 to 6.8
            </h5>
            <p></p>

            <h3>9.Mint</h3>
            <center><img src={mint} width={490} height={300}></img></center>
            <p></p>
            <h5>Mints have square stems and opposite aromatic leaves. Many can spread vegetatively by stolons and can be aggressive in gardens. The small flowers are usually pale purple, pink, or white in colour and are arranged in clusters, either forming whorls or crowded together in a terminal spike.
              <p></p>
              Mints are vigorous perennials that thrive in light soil with good drainage. Ideally, they prefer a moist but well-drained site, something like their native habitat along stream banks. Most will grow in sun or partial shade; the variegated types may require some protection from direct sun
            </h5>
            <p></p>

            <h3>10.Aloe Vera</h3>
            <center><img src={aloe} width={490} height={300}></img></center>
            <p></p>
            <h5>Aloe vera is a herb with succulent leaves that are arranged in a rosette. The leaves are grey to green and sometimes have white spots on their surfaces. They have sharp, pinkish spines along their edges and are the source of the colourless gel found in many commercial and medicinal products.
              <p></p>
              Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight. South- or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.
            </h5>
            <p></p>


            <h3>11.Marigold</h3>
            <center><img src={mari} width={490} height={300}></img></center>
            <p></p>
            <h5>Marigolds germinate quickly, sprouting within a few days and blooming in about 8 weeks, making them easy to grow from seed. Sow seeds directly outside after all danger of frost has passed and the soil has begun to warm up.
              <p></p>
              Marigolds are comprised of tiny florets surrounded by many layers of delicate, ruffled petals and a thick hollow stem with fernlike leaves. The flowers have a pungent, sharp, and musky aroma that can be considered unpleasant.
            </h5>
            <p></p>

            <h3>12.Rose</h3>
            <center><img src={rose} width={490} height={300}></img></center>
            <p></p>
            <h5>To get your roses off to a great start, plant them in the proper growing conditions. All roses grow best in full sun with moist, well-drained soil rich in organic matter.
              <p></p>
              Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape. They burst with colours ranging from pastel pink, peach, and cream, to vibrant yellow, orange, and red. Many roses are fragrant, and some produce berry-like fruits called hips.
            </h5>
            <p></p>
            <br></br>

            <br></br> */} 

            <center><h1>What to plant in July and August and September</h1></center>
            <center><h1>The Best Veggies and Flowers to Plant</h1></center>
            <br></br>

            {/* <h3>1.Mango</h3>
            <center><img src={mango} width={490} height={300}></img></center>
            <p></p>
            <h5>The immature fruit has green skin that gradually turns yellow, orange, purple, red, or combinations of these colors as the fruit matures. Mature fruit has a characteristic fragrance and a smooth, thin, tough skin. The flesh of ripe mangos is pale yellow to orange. The flesh is juicy, sweet, and sometimes fibrous.
              <p></p>
              Mango trees grow to 30–40 metres (98–131 feet) tall, with a crown radius of 10–15 m (33–49 ft). The trees are long-lived, as some specimens still fruit after 300 years.
            </h5>
            <p></p> */}

            <h3>1.Guava</h3>
            <center><img src={guava} width={490} height={300}></img></center>
            <p></p>
            <h5>Guavas grow on trees, and most of the fruit will mature in the summer. The trees will begin producing fruit after two years and can continue to do so for 40 years. Guavas contain vitamin C, phosphorous, iron and calcium. They are often referred to as “super fruits” because of their high vitamin content.
              <p></p>
              The fruits are round to pear-shaped and measure up to 7.6 cm in diameter; their pulp contains many small hard seeds (more abundant in wild forms than in cultivated varieties). The fruit has a yellow skin and white, yellow, or pink flesh. The musky, at times pungent, odour of the sweet pulp is not always appreciated.
            </h5>
            <p></p>

            <h3>2.Papaya</h3>
            <center><img src={papaya} width={490} height={300}></img></center>
            <p></p>
            <h5>The papaya plant is considered a tree, though its palmlike trunk, up to 8 metres (26 feet) tall, is not as woody as the designation generally implies. The plant is crowned by deeply lobed leaves, sometimes 60 cm (2 feet) across, borne on hollow petioles (leaf stalks) 60 cm long.
              <p></p>
              They generally have a single trunk and grow 10 to 15 feet tall, but some plants have been known to grow taller. Sun Light: Grow best in full sun. Papayas love the heat and sunlight. Fertilize: Papayas are heavy feeders and require regular fertilizing.
            </h5>
            <p></p>

            <h3>3.Tomato</h3>
            <center><img src={tomato} width={490} height={300}></img></center>
            <p></p>
            <h5>The tomato fruit is globular or ovoid. Botanically, the fruit exhibits all of the common characteristics of berries; a simple fleshy fruit that encloses its seed in the pulp. The outer skin is a thin and fleshy tissue that comprises the remainder of the fruit wall as well as the placenta.

              <p></p>
              Each plant can produce up to 8 to 10 pounds of fruit. The Tomato plant can grow up to 9 feet tall with soft and hairy stems. It has 5-9 leaflets and the leaves can be 4 to 24 inches long. The flowers on the tomato plant are small, yellow and have five pointed lobes on the corolla.
            </h5>
            <p></p>

            <h3>4.Okra</h3>
    <center><img src={okra} width={490} height={300}></img></center>
    <p></p>
    <h5>Though more popular in southern recipes because most varieties like warm weather, there are versions of okra
         that grow just as well in chillier northern climates. Okra grows fast and often and the blooming 
         flowers look like pretty hibiscus! You'll love to look at and eat them all summer long.This plant not
          only grows edible vegetables and beautiful flowers, but it is also rich in vitamin A and low in calories,
           which makes it a great addition to your diet.</h5>
    <p></p>

    <h3>5.Rosemary</h3>
    <center><img src={rosemary} width={490} height={300}></img></center>
    <p></p>
    <h5>Rosemary is one of the most flavorful herbs and is great for adding to things like poultry, meats, and vegetables. 
        Around Christmastime, you’ll see tree-shaped rosemary bushes for sale. You can bring them home and keep them for planting 
        in the spring.<p></p> The fragrant plant is a delightful scent and is sometimes used in floral arrangements. Rosemary likes its soil a 
        bit on the dry side, so be careful not to overwater. Allowed to flourish, a rosemary plant will grow into a full-sized bush.</h5>
    <p></p>

    <h3>6.Hibiscus</h3>
          <center>  <img src={hibiscus} width={490} height={300}></img></center>
          <p></p><h5>There is nothing more tropical than a hibiscus plant. A permanent fixture for Hindu rituals, the hibiscus is an easy plant to grow if you can control
                the love mealy bugs have for it. Hibiscus or the shoe flowers loves full sun and a loose well-draining soil to grow in. Let the soil dry out in between
                 waterings and avoid wetting the foliage to keep the bugs away, Quarantine and clean with soap solution and spray it down with neem oil at the first sign 
                 of mealy bugs.</h5>
          <p></p>

          <h3>7.Snake Plant</h3>
        <center><img src={snake} width={490} height={300}></img></center><p></p>
        <h5> One of the easy growing common house plants at home is the snake plant. They are your best plant buddy because these are easy to grow, green & yellow tinge on leaves
           add colours to your home.You can add these types of plants as their look has a modern appeal. Being one of the easy growing plants at home, the snake plant adds an effortless
            beauty to any space!
            <p></p>
          You can place it in your bedroom or include it as one of the elements in your list of small bathroom decor ideas and it will adjust perfectly. Hence, this is one of the 
            most popular and common indoor plants in India.</h5>
            <p></p>

            <h3>8.Sunflower</h3>
            <center><img src={sun} width={490} height={300}></img></center>
            
            <p></p>
            <h5>The common sunflower has a green erect stem covered in coarse hairs, growing on average around 2m tall. The leaves are broad, with serrated edges, and are alternately arranged on the stem. The 'flower' of the common sunflower is actually a pseudanthium, or flowerhead, made up of many small flowers.
              <p></p>
To grow well, they need plenty of sunlight (approximately 6-8 hours a day) so it's important to plant them in a spot that gets plenty of sunlight throughout the day. Sunflowers also need plenty of space as they have long roots that need to stretch out so plant them in an area with well-dug, loose, well-draining soil.
            </h5>
            <p></p>

  </div>
    </main>
  </div>
)
}

export default About