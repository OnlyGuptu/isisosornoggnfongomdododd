// Complete Error-Free NCERT Database with Integrated Copy Actions
const ncertDatabase = {
    science: {
        title: "Science Chapters",
        isBranching: false,
        chapters: [
            {
                name: "Chapter 1: Exploration: Entering the World of Secondary Science",
                solutions: [
                    { q: "Notice", a: `Sorry, there are no questions in this chapter.` }
                ]
            },
            {
                name: "Chapter 2: Cell: The Building Block of Life",
                solutions: [
                    { 
                        q: " Differentiate between the following pairs of terms based on the clues given in parentheses:", 
                        a: `"i) Cell membrane and cell wall: Cell membrane is selectively permeable while cell wall is completely permeable.

(ii) RER and SER: Rough endoplasmic reticulum is rough in texture because of the presence of ribosomes on it while smooth endoplasmic reticulum is comparatively smooth because of absence of ribosomes on it.

(iii) Chloroplast and chromoplast: Chloroplast contains chlorophyll, the green pigment present in plants while chromoplast contains other pigments apart from green which help in providing colourful appearance to flowers and fruit"` 
                    },
                    {
                        q: " Two similar animal cells are placed in two different solutions: <br> <br> Cell X is placed in pure water. <br> Cell Y is placed in a concentrated salt solution. <br> <br> Cells are observed after some time. Cell X swells, and Cell Y shrinks. Which statement provides the correct explanation for the above observations? <br> <br> (i) Salt molecules moved into Cell Y, causing it to shrink. <br> <br> (ii) Water moved into Cell X and more water moved out of Cell Y than the salt solution entered in it. <br> <br> (iii) Water moved into Cell X and moved out of Cell Y through the cell membrane. <br> <br> (iv) Solute movement caused osmosis in both cells.", 
                        a: ` (iii) Water moves into Cell X and moves out of Cell Y through the cell membrane.

                             Reason: Pure water is hypotonic, so water enters Cell X by osmosis and makes it swell. The salt solution is hypertonic, so water comes out of Cell Y, causing it to shrink.` 
                    },
                    {
                        q: ". Look at the diagram of a cell in Fig. 2.20. Identify the parts labelled from (a) to (g) and correctly match them with their functions given below: <br> <br> (i) Controlling all the activities of a cell. <br> (ii) Site of cellular respiration. <br> (iii) Storage organelle that also provides rigidity to the cell. <br> (iv) Separates the cell contents from surroundings.",
                        a: `The labelled parts are <br><br>(a) Mitochondria → (ii) Site of cellular respiration.<br>(b) Nucleus → (i) Controls all the activities of a cell.<br>(c) Golgi apparatus → (vi) Packs and stores materials received from ER.<br>(d) Chloroplast → (vii) Helps in manufacturing food.<br>(e) Cell membrane → (iv) Separates the cell contents from the surroundings.<br>(f) Cell wall → (v) Provides structural rigidity to the cell.<br>(g) Vacuole → (iii) Acts as a storage organelle and also provides rigidity to the cell. <br><br> Answer: (a)–(ii), (b)–(i), (c)–(vi), (d)–(vii), (e)–(iv), (f)–(v), (g)–(iii)`,
                        image: "images/cell-fig-2-20.png" 
                    },
                    {
                        q: `Which of the following option(s) of the pairs of cell organelles are correctly placed under the given categories?

<table class="ncert-table">
    <thead>
        <tr>
            <th>Option</th>
            <th>Present in the plant cells</th>
            <th>Absent in the animal cells</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>(i)</td>
            <td>Leucoplast</td>
            <td>Cell wall</td>
        </tr>
        <tr>
            <td>(ii)</td>
            <td>Mitochondria</td>
            <td>Ribosome</td>
        </tr>
        <tr>
            <td>(iii)</td>
            <td>Cell wall</td>
            <td>Golgi apparatus</td>
        </tr>
        <tr>
            <td>(iv)</td>
            <td>Lysosome</td>
            <td>Endoplasmic reticulum</td>
        </tr>
    </tbody>
</table>`,
                        a: `The correct answer is **(i)**.
                        
Leucoplasts are present in plant cells, while the cell wall is absent in animal cells. The other options are incorrect because the organelles listed as absent in animal cells are actually present in them.`
                    },
                    {
                        q: "Two students, Renu and Rohit, were having a discussion on the plastids. Renu emphasised that all parts of the plants, even roots, contain plastids. However, Rohit did not agree with the statement and told her that plastids are absent in plant roots since the roots are underground and do not need to perform photosynthesis. Who is correct? Justify your answer",
                        a: "Renu is correct. <br> <br> Justification: Plastids are present in almost all plant cells, including roots. While chloroplasts (for photosynthesis) are absent in roots because they receive no sunlight, underground roots contain leucoplasts (a type of non-green plastid) that function to store food materials like starch, oils, or proteins (e.g., in potato and taro roots)." 
                    },
                    { q: "Mitochondria and chloroplasts are two important organelles in a plant cell. Discuss how these two organelles are structurally and functionally similar to each other, and different from each other.", a: `Similarities

- Double membranes: Both are wrapped in two layers of membrane instead of just one.

- Their own genetic kit: Both contain their own DNA and ribosomes, allowing them to make some of their own proteins independently.

- Energy focus: Both function as energy converters inside the cell.

Differences

- Role: Chloroplasts make food using sunlight (photosynthesis), while mitochondria break down food to release usable energy for the cell (respiration).

- Location: Chloroplasts are only found in plant cells and algae, whereas mitochondria are present in both plant and animal cells.

Internal structures: Chloroplasts contain green chlorophyll and stack-like structures called thylakoids, while mitochondria have a deeply folded inner membrane called cristae to maximize surface area.` },
                    { q: "Which of the following pairs of cell organelles contains DNA? <br><br> (i) Chloroplasts, Ribosomes <br> (ii) Mitochondria, Nucleus <br> (iii) Golgi bodies, Ribosomes <br> (iv) Nucleus, Lysosomes", a: "Correct Option: (ii) Mitochondria, Nucleus" },
                    { q: "A researcher carried out an experiment in which she took two carrots of similar size. She placed one carrot in plain water and the other carrot of similar size. She placed one carrot in plain water and the other carrot observations. <br> <br> (i) What hypothesis does she want to test through this experiment? <br>(ii) What would you suggest for the improvement of this experiment? <br> (iii) Why does the carrot in plain water stay stiff and crunchy, but the carrot in concentrated salt solution become rubbery and limp?", a: " (i) She wants to test how water moves into or out of living plant cells by osmosis based on the concentration of the liquid outside.<br><br> (ii) She wants to test how water moves into or out of living plant cells by osmosis based on the concentration of the liquid outside. <br><br> (iii) In plain water: The liquid outside has more water than inside the carrot cells. Water enters the carrot cells by osmosis. This fills up the vacuoles and pushes against the cell wall (turgor pressure), keeping the carrot firm and crisp. <br> In salt solution: The liquid outside is more concentrated, so it has less water than inside the carrot cells. Water flows out of the carrot cells into the salt water. The cells lose pressure and shrink away from their walls, making the carrot soft and rubbery." },
                    { q: "Indicate the presence or absence of following structures in bacterial and animal cells: ", a: "The answer is given in the table ", image: "images/talbe.png"},
                    { q: `Carry out the following experiment: <br>
Take four peeled potato halves and scoop each one out to make potato 
cups. One of these potato cups should be made from a boiled potato. 
Place each of the potato cups in a beaker containing water (Fig. 2.22).
<br> Now, set up the experiment as follows:
<br><br> (a) Keep Cup A empty.
<br>(b) Add one teaspoon sugar in Cup B.
<br>(c) Add one teaspoon salt in Cup C.
<br>(d) Add one teaspoon sugar in the boiled potato in Cup D.
<br><br> Observe the four potato cups at least two hours and answer the following
questions:
<br><br> (i) Explain why water gathers in the hollowed portion of Cup B and
Cup C.
<br>(ii) Why is Cup A necessary for this experiment?
<br> (iii) Explain why water does not gather in the hollowed portions of
Cups A and D. `, a: `(i) Why does water accumulate in the hollowed part of B and C?

The water accumulates by means of osmosis. When sugar or salt is added in the cup, the concentration of this region becomes greater than the concentration of the normal water in the trough. The water accumulates naturally through the living potato cell membranes in order to reduce the concentration of sugar and salt.

(ii) Why is potato A used in this investigation?

Potato A is needed for control purposes. This is because it shows that water does not accumulate in the hollowed potato itself but a solute like sugar or salt is required.

(iii) Why doesn’t water accumulate in the hollowed part of A and D?

For potato A: No sugar or salt is added inside the hollowed part of this potato. Hence, there is no concentration gradient to accumulate water.

For potato D: The boiling process destroys the cells and thus the membranes are destroyed. Thus, osmosis cannot take place due to lack of living selectively permeable membranes.`, image: "images/aloo.png" },
                    { 
                        q: "Identify the pair that incorrectly matches the cell organelle with its function.<br><br>(i) Ribosome — Protein synthesis<br>(ii) SER — Lipid and cellulose synthesis<br>(iii) Lysosome — Digestion of foreign agents", 
                        a: "Answer: (ii) SER — Lipid and cellulose synthesis<br><br>Reason: The Smooth Endoplasmic Reticulum (SER) plays a role in the synthesis of lipids (fats) and hormones, while cellulose is produced by plant cells to construct the cell wall." 
                    },
                    { 
                        q: "What outcome do you expect, if all the mitochondria are removed from a eukaryotic cell?", 
                        a: "Mitochondria are known as the \"cell's powerhouses,\" tasked with producing ATP via cellular respiration. Without any mitochondria, the cell cannot generate enough energy (ATP) necessary for vital biological activities and metabolic functions, resulting in cell impairment and eventually cell death." 
                    },
                    { 
                        q: "Which phenomenon inhibits the formation of tumors in the human body? Can plants also develop tumors? Explain.", 
                        a: "Phenomenon: Contact inhibition halts tumor development in humans by ceasing cell division upon contact with adjacent cells.<br><br>In plants: Plant cells do not exhibit contact inhibition because of their stiff cell walls. Nonetheless, plants can still form tumors or galls, frequently induced by pathogens such as viruses, bacteria (e.g., Agrobacterium), or fungi that provoke unchecked cell proliferation." 
                    },
                    { 
                        q: "The cell membrane of a cell is made up of proteins and lipids. Which cell organelles help in the synthesis of cell membrane? Write the path of these compounds from their site of synthesis to the cell membrane and show this through a labelled diagram.", 
                        a: "The Endoplasmic Reticulum is crucial for lipid and protein synthesis. Smooth endoplasmic reticulum (SER) and rough endoplasmic reticulum (RER) produce the lipids and proteins of the cell membrane, respectively. The Golgi apparatus processes, organizes, and encases them in vesicles for transport.<br><br><b>Route:</b><br>Nucleus → SER/RER (Lipid/protein synthesis) → Transport Vesicle → Golgi Apparatus (Modification and packaging) → Secretory Vesicles → Plasma Membrane", 
                        image: "images/g.jpg" 
                    },
                    { 
                        q: "What would happen if gametes are formed by mitotic divisions?", 
                        a: "If gametes were created through mitotic divisions instead of meiosis, they would be diploid (2n) instead of haploid (n). When two gametes of this kind combine during fertilization, the zygote will become tetraploid (4n).<br><br>In the subsequent generation, this doubling would persist, resulting in 8n, 16n, 32n, and so on. The cells would grow genetically unstable, becoming excessively large to operate correctly, and species survival would be challenging due to fatal chromosome imbalances. Genetic diversity would also diminish because mitosis creates identical replicas without any recombination." 
                    },
                    { 
                        q: "A farmer, Deepa, was very happy with the harvest of amla (Indian Gooseberry) and lemons on her farm. However, she could sell only one-fourth of the produce in the local market. Recognising that a significant amount of produce may be lost post-harvest, she employed a traditional yet scientifically sound method to extend the shelf life of amla and lemons. She turned perishable produce into profitable products, such as pickles and sharbat. She used the excess produce to prepare pickles, murabbas, and sharbat by adding appropriate amounts of salt, sugar, or jaggery to small pieces of fruit and their juices. These were then stored in small glass bottles for sale, helping her prevent the wastage of post-harvest produce. This shift from farming to agro-processing would strengthen food security and boost the local economy, creating a sustainable model that cuts waste while increasing her income. Based on the above passage answer the following questions:<br><br>(i) Which scientific concept has the farmer applied in the preservation of the farm produce?<br>(ii) How does the addition of high concentrations of salt and sugar create an environment that prevents the growth of spoilage-causing bacteria and fungi?<br>(iii) Suggest a healthy recipe of this kind for food preservation.<br>(iv) What are the scientific values addressed in this case?", 
                        a: "(i) The farmer utilized the concept of <b>osmosis</b> for preserving food.<br><br>(ii) Elevated levels of salt and sugar generate a hypertonic setting surrounding microorganisms. Water exits bacterial and fungal cells through osmosis, leading to dehydration that hampers their growth and stops spoilage.<br><br>(iii) <b>Nutritious amla pickle recipe:</b><br>• Use 500 g of chopped amla.<br>• Incorporate 2 tbsp mustard oil, 1 tbsp turmeric, 1 tbsp red chili powder, 2 tbsp salt, and 1 tbsp jaggery (as a substitute for extra sugar).<br>• Warm the oil and incorporate spices, then combine it with amla. Place in a clean, dry glass jar and expose to sunlight for several days. This preserves vitamin C and inhibits microbial growth, while also improving its taste.<br><br>(iv) The scientific values discussed include resource conservation (zero waste), utilization of scientific principles (osmosis for preservation), sustainability (agro-processing for food security), innovation (traditional knowledge combined with science), as well as economic awareness and entrepreneurship." 
                    }
                ]
            },
{ 
    name: "Chapter 3: Tissues in Action", 
    solutions: [
        {
            q: "Meristematic tissues divide repeatedly. What property of their cells allows them to do this?<br><br>(i) They have thick walls for protection.<br>(ii) They contain large vacuoles that store nutrients.<br>(iii) They have thin walls, dense cytoplasm and large prominent nucleus.<br>(iv) They are functionally differentiated cells.",
            a: "(iii) They have thin walls, dense cytoplasm, and large, prominent nucleus."
        },
        {
            q: "If a plant is unable to transport food from leaves to roots which tissue is malfunctioning?<br><br>(i) Xylem<br>(ii) Phloem<br>(iii) Epidermis<br>(iv) Sclerenchyma",
            a: "(ii) Phloem"
        },
        {
            q: "You can perform these two jumps (Fig. 3.21):<br>Straight-leg jump — keep knees and ankles stiff.<br>Normal jump — bend knees and ankles naturally.<br>How did your ankle, knee and hip positions differ between the two jumps?",
            a: "In a straight-leg jump, the ankle, knee, and hip joints stay rigid and aligned, resulting in minimal to no bending. During a typical jump, the knees, hips, and ankles flex organically. This aids in shock absorption, supports balance, and enhances movement and elevation while jumping.",
            image: "images/yoga.png"
        },
        {
            q: "Which type of joint is involved when you bend your knees and ankles?<br><br>(i) Ball and socket<br>(ii) Hinge<br>(iii) Pivot",
            a: "(ii) Hinge"
        },
        {
            q: "In each of the following cases (A, B, C and D), choose the correct option as given below:<br>(i) Both (A) and (R) are true, and (R) is the correct explanation of (A).<br>(ii) Both (A) and (R) are true, but (R) is not the correct explanation of (A).<br>(iii) (A) is true, but (R) is false.<br>(iv) (A) is false, but (R) is true.<br><br><b>A. Assertion:</b> Epithelium is well-suited for gas exchange in the lungs.<br><b>Reason:</b> It consists of multiple layers of tall cells that slow down diffusion.<br><br><b>B. Assertion:</b> Cardiac muscle can contract continuously without fatigue.<br><b>Reason:</b> Cardiac muscle cells have a high number of mitochondria and an abundant blood supply.<br><br><b>C. Assertion:</b> Tendons connect bone to bone and allow joint movement.<br><b>Reason:</b> Tendons are made of tough connective tissue that transmits force from muscle to bone.<br><br><b>D. Assertion:</b> In a hinge joint, movement occurs primarily in one plane.<br><b>Reason:</b> The bone ends are shaped to allow sliding in all directions.",
            a: "<b>A:</b> (iii) (A) is true, but (R) is false.<br><br><b>B:</b> (i) Both (A) and (R) are true, and (R) is the correct explanation of (A).<br><br><b>C:</b> (iv) (A) is false, but (R) is true.<br><br><b>D:</b> (iii) (A) is true, but (R) is false."
        },
        {
            q: `Plot a graph between the age of a tree (in years) on the x-axis and the diameter of the tree (in cm) along with the number of annual rings formed over time on the y-axis, using the data given in Table 3.7.<br><br>
<b>Table 3.7: Data related to the age of a teak tree, and corresponding increase in the diameter of stem and number of annual rings</b>
<table class="ncert-table">
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Age of the teak tree (Years)</th>
            <th>DBH (Diameter at Breast Height) of tree (cm)</th>
            <th>Number of annual rings formed</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>1.</td><td>5</td><td>4</td><td>5</td></tr>
        <tr><td>2.</td><td>10</td><td>8</td><td>10</td></tr>
        <tr><td>3.</td><td>30</td><td>24</td><td>20</td></tr>
        <tr><td>4.</td><td>25</td><td>28</td><td>25</td></tr>
        <tr><td>5.</td><td>30</td><td>32</td><td>30</td></tr>
        <tr><td>6.</td><td>40</td><td>40</td><td>40</td></tr>
    </tbody>
</table><br>
(i) Analyse the graph in terms of the diameter of the stem over time and share the interpretation.<br>
(ii) What is the relation between the diameter of the teak tree to the annual rings formed?<br>
(iii) Which specialised tissue is responsible for the girth of the stem and where is it located?`,
            a: `<b>(i) Analysis of graph:</b><br>
As the age of the tree increases, the diameter of the stem also increases. The increase is continuous over time, showing a steady growth in girth as the tree ages.<br><br>
<b>(ii) Relationship between diameter and annual rings:</b><br>
There is a positive correlation between the diameter of the tree and the number of annual rings. As more annual rings are formed each year, the diameter of the teak tree expands continuously.<br><br>
<b>(iii) Specialised tissue and location:</b><br>
<b>Lateral Meristem (Vascular Cambium and Cork Cambium)</b> is responsible for increasing the girth (secondary growth) of the stem. It is located in the lateral sides of the stem, specifically between the primary xylem and primary phloem.`
        },
    {
    q: "Look at the given figure showing the debarked portion of a tree trunk. Answer the following questions based on the image:<br><br>(i) What is the immediate impact of removing the bark on the tree's defense?<br>(ii) Which tissue lies just below the bark, and how does its damage affect the plant?<br>(iii) What will happen to the overall growth and survival of the tree over time?<br>(iv) What assumptions are made regarding the extent of the damage?",
    image: "images/fig 3.2.png",
    a: "<b>(i) Immediate Impact:</b><br>The bark of a tree consists of cork cells (which are dead cells) that create the outermost protective layer. Once the bark is stripped away, the tree forfeits its primary layer of defense. The tree is subject to mechanical harm, assaults from pathogens and parasites, excessive moisture loss from the trunk, and harm from severe temperatures. The protective role of the dermal tissue system is entirely diminished.<br><br><b>(ii) Tissues Involved & Affected:</b><br>The lateral meristem (cork cambium) and phloem are positioned just below the bark. If the trunk sustains more damage, the phloem tissue will be impacted. Phloem transports nutrients from the leaves to the roots and various other sections of the plant. Injury to the phloem would halt the food supply, causing the roots and lower sections of the plant to starve and ultimately perish.<br><br><b>(iii) Long-term Effect on Growth:</b><br>If the tissues under the bark (primarily phloem and the lateral meristem) are harmed, the movement of nutrients from the leaves to the other parts of the plant would cease. The lateral meristem would be harmed, indicating the tree could no longer increase in diameter. Eventually, the tree would become weaker, cease growth, and might die as the roots would be deprived of their nutrients.<br><br><b>(iv) Key Assumptions:</b><br>We are presuming that the debarking is finished completely around the trunk (referred to as ring barking) and that it penetrates sufficiently to harm the phloem. We are also presuming that the xylem remains undamaged. If only a section of the bark was removed (not entirely around the trunk), some phloem would still be present, allowing the tree to potentially survive. If the xylem sustains damage as well, water transport would cease, leading to a quicker death of the tree. The extent and seriousness of the damage would greatly alter the result."
    },
    {
    q: "Aamrapali observed that a young mango sapling’s stem bends flexibly during monsoon winds and does not break. Which tissue is responsible for this flexibility? Predict and provide your explanation of the impact if the existing tissue was replaced by sclerenchyma.",
    a: "<b>Tissue Responsible:</b><br>The tissue that provides flexibility to the young mango sapling is <b>collenchyma</b>. Collenchyma cells are living and possess irregularly thickened cell walls at the corners. This provides mechanical support along with flexibility, allowing stems and leaves to bend without breaking in strong winds.<br><br><b>Impact of Replacement with Sclerenchyma:</b><br>Sclerenchyma cells are dead, thick-walled, and heavily lignified, providing rigid and unyielding mechanical support. If collenchyma were replaced by sclerenchyma, the young stem would become extremely hard, stiff, and brittle, losing its flexibility. As a result, the stem would likely snap or break under strong monsoon winds instead of bending safely."
    },
    {
    q: "Sohan designed an experiment for the regeneration of sugarcane, where he used cuttings to grow sugarcane. He used two types of cuttings, type ‘A’ and type ‘B’ (Fig. 3.23). After a few weeks, type ‘B’ cuttings sprouted and developed into sugarcane plants, whereas the type ‘A’ cuttings did not sprout.<br><br>(i) Why were the type ‘B’ cuttings able to grow as sugarcane but type ‘A’ could not?<br>(ii) What difference was present in type ‘B’ compared to type ‘A’?<br>(iii) What observation or measurement was made to determine whether this change had an effect?<br>(iv) What parameters should be kept the same for both types of cuttings to ensure a fair comparison?",
    image: "images/fig 3.23.png",
    a: "<b>(i) Reason for growth in Type ‘B’:</b><br>Type ‘B’ cuttings were able to grow because they possessed nodes containing buds with active meristematic tissue, which can divide and differentiate into new roots and shoots. Type ‘A’ cuttings lacked nodes, so no new growth could occur.<br><br><b>(ii) Difference between Type ‘A’ and Type ‘B’:</b><br>Type ‘B’ cuttings included a node containing a bud, whereas Type ‘A’ cuttings consisted purely of internodal stem material without any nodes or buds.<br><br><b>(iii) Key Observation:</b><br>The observation made was whether the stem cuttings sprouted and developed into new sugarcane plants after a few weeks (Type ‘B’ sprouted, whereas Type ‘A’ did not).<br><br><b>(iv) Parameters to keep identical (Controlled Variables):</b><br>• Same soil type and soil moisture level<br>• Same amount and frequency of watering<br>• Same exposure to sunlight and ambient temperature<br>• Same length and thickness of the stem cuttings"
},

    {
        q: "During the discussion in class, Rohan gives a statement that, “A tissue is a group of similar cells performing similar functions”. But Rajiv counter argues that, “this is true in case of simple tissues but little different in case of complex tissues”. Provide your explanation in view of the discussion in class.",
        a: "<b>Explanation:</b><br>Both Rohan and Rajiv are correct in their contexts:<br>• <b>Simple Tissues:</b> As Rohan described, simple tissues (such as parenchyma, collenchyma, and sclerenchyma) are composed of a single type of cell that are structurally and functionally similar.<br>• <b>Complex Tissues:</b> As Rajiv pointed out, complex tissues (such as xylem and phloem) consist of more than one type of cell working together to perform a common function. For instance, xylem contains tracheids, vessels, xylem parenchyma, and xylem fibers.<br><br><b>Conclusion:</b> A tissue is defined as a group of similar or dissimilar cells that work together to perform a specific function."
    },
    {
        q: "Coconut husk fibres are used for mats which are tough and fibrous. Which tissue has structural features suitable for providing this strength? Explain why living parenchyma couldn’t serve the same purpose.",
        a: "<b>Tissue Responsible:</b><br>The <b>sclerenchyma tissue</b> gives coconut husk fibers their toughness. Sclerenchyma cells are non-living (dead) at maturity, closely packed with no intercellular spaces, and have extremely thick walls due to uniform lignin deposition, making them highly resilient and fibrous.<br><br><b>Why Parenchyma is Unsuitable:</b><br>Living parenchyma cells have thin primary cell walls, loose packing with intercellular spaces, and active living cellular contents. They are soft, flexible, and adapted for storage or photosynthesis rather than mechanical support. If parenchyma were used, the fibers would lack tensile strength, be soft, and disintegrate rapidly under stress."
    },
    {
        q: "Vibha claims to her friend Neha that, “Meristematic cells are located only at the root and shoot apices”. What do you think about this statement? What question can Neha ask Vibha to help her understand further if the statement is incorrect?",
        a: "<b>Evaluation of Statement:</b><br>Vibha's statement is <b>incorrect</b>. While apical meristems are found at the tips (apices) of roots and shoots, meristematic tissues are also present in other regions of the plant, such as intercalary meristems (at nodes or base of leaves) and lateral meristems/cambium (responsible for increasing girth).<br><br><b>Question Neha Can Ask:</b><br><i>“If meristematic cells are present only at the tips of roots and shoots, how does a stem increase in thickness (girth) or regenerate leaves and branches from nodes?”</i>"
    },
    {
        q: "A plant cell and an animal cell are of the same size.<br>(i) Which cell will have a larger vacuole? Give reasons.<br>(ii) What assumptions are you making to answer the question above?",
        a: "<b>(i) Cell with Larger Vacuole:</b><br>The <b>plant cell</b> will have a significantly larger vacuole (often occupying 50%–90% of the total cell volume).<br><b>Reason:</b> Plant cells require a large central vacuole to maintain turgidity, structural rigidity, and to store water, nutrients, and waste products. Animal cells typically have small, temporary vacuoles or none at all.<br><br><b>(ii) Assumptions Made:</b><br>• The plant cell is a fully mature/adult cell (as young plant cells have smaller vacuoles).<br>• Both cells are healthy and operating under normal physiological conditions.<br>• The comparison is made between typical plant and animal cell types."
    },
    {
        q: "A textbook states, “Each plant tissue performs only one specific function”. What questions would you ask to critically examine the correctness of this statement? What examples of tissues would you take to find out the answers to these questions?",
        a: "<b>Critical Questions to Ask:</b><br>1. <i>Do all plant tissues perform strictly a single role, or can individual tissues perform multiple distinct functions?</i><br>2. <i>Can a simple tissue simultaneously provide structural support, store nutrients, or perform photosynthesis?</i><br>3. <i>Do complex tissues contain different cell types that carry out distinct individual sub-tasks to achieve a common function?</i><br><br><b>Examples to Test the Statement:</b><br>• <b>Parenchyma:</b> Acts as storage tissue, carries out photosynthesis (chlorenchyma), and provides buoyancy in aquatic plants (aerenchyma).<br>• <b>Collenchyma:</b> Provides mechanical support and flexibility while retaining the ability to photosynthesize if chloroplasts are present.<br>• <b>Xylem:</b> Transports water/minerals and simultaneously provides structural and mechanical support to the plant body."
    },
    {
        q: "A textbook states, “Each plant tissue performs only one specific function”. What questions would you ask to critically examine the correctness of this statement? What examples of tissues would you take to find out the answers to these questions?",
        a: "<b>Critical Questions to Ask:</b><br>1. <i>Do all plant tissues perform strictly a single role, or can individual tissues perform multiple distinct functions?</i><br>2. <i>Can a simple tissue simultaneously provide structural support, store nutrients, or perform photosynthesis?</i><br>3. <i>Do complex tissues contain different cell types that carry out distinct individual sub-tasks to achieve a common function?</i><br><br><b>Examples to Test the Statement:</b><br>• <b>Parenchyma:</b> Acts as storage tissue, carries out photosynthesis (chlorenchyma), and provides buoyancy in aquatic plants (aerenchyma).<br>• <b>Collenchyma:</b> Provides mechanical support and flexibility while retaining the ability to photosynthesize if chloroplasts are present.<br>• <b>Xylem:</b> Transports water/minerals and simultaneously provides structural and mechanical support to the plant body."
    }
] 
},
{
    name: "Chapter 4: Describing Motion Around Us",
    solutions: [
        {
            q: " My father went to a shop from home which is located at a distance of 250 m on a straight road. On reaching there, he discovered that he forgot to carry a cloth bag. He came home to take it, went to the shop again, bought provisions and came back home. How much was the total distance travelled by him? What was his displacement from home?",
            a: `<b> Let us follow the path one step at a time.</b> <br>
Trip 1: Residence to Store = 250 m <br>
Travel 2: Store to Residence = 250 m <br>
Trip 3: House to Store = 250 m <br>
Trip 4: Store to Residence = 250 m <br>
Overall distance covered = 250 + 250 + 250 + 250 = 1000 m <br>
Displacement = ending position – starting position <br>
His father began at home and finished at home. <br>
Thus, his starting point and ending point are identical. <br>
Displacement is 0 m. <br>
`
        },
        {
            q: `A student runs from the ground floor to the fourth floor of a school
building to collect a book and then comes down to their classroom on
the second floor. If the height of each floor is 3 m, find: <br>
(i) the total vertical distance travelled, and <br>
(ii) their displacement from the starting point.`,
            a: `Height per floor: 3 m. <br>
First floor from the Ground Floor up to the fourth level.<br>
The student climbs 4 floors.<br>
The equation Distance Up = 4 3 is equivalent to 12 m.<br>

The second phase involves moving from the 4th to the 2nd floor.<br>
Students move down two floors, from 4 to 2.<br>

The equation "Distance Up 2 3 = 6 m" is accurate.<br>
The total vertical distance is 12 + 6 = 18 m.<br>
(ii) Displacement:<br>
The student's ultimate accommodation is on the 2nd floor, which is situated above the ground floor.<br>
The displacement (upwards) is 2 floors, and when less than 3 meters is equal to 6 meters.<br>`
        },
        {
            q: `A girl is riding her scooter and finds that its speedometer reading is
constant. Is it possible for her scooter to be accelerating and if so, how? `,
            a: `Yes, it is possible for the scooter to accelerate even if the speedometer reading is constant.This happens because velocity is a vector quantity, meaning it has both magnitude (speed) and direction. Acceleration is defined as the rate of change of velocity. If either the speed or the direction changes, acceleration occurs.If the girl rides her scooter at a constant speed along a curved path or a circular track, her direction of motion changes continuously at every point. Since her direction is changing, her velocity is changing, which means the scooter is accelerating (known as centripetal acceleration).

`
        },
        {
            q: `A car starts from rest and its velocity reaches 24 m s–1 in 6 s. Find the
average acceleration and the distance travelled in these 6 s.`,
            a: `<b>1. Given Information:</b><br>
• Initial Velocity (u) = 0 m/s (starts from rest)<br>
• Final Velocity (v) = 24 m/s<br>
• Time (t) = 6 s<br><br>

<b>2. Calculating Average Acceleration (a):</b><br>
• Formula: a = (v - u) / t<br>
• a = (24 - 0) / 6<br>
• a = 24 / 6 = 4 m/s²<br>
∴ Average acceleration = 4 m/s²<br><br>

<b>3. Calculating Distance Travelled (s):</b><br>
• Formula: s = ut + (1/2)at²<br>
• s = (0 × 6) + (1/2 × 4 × 6²)<br>
• s = 0 + (2 × 36) = 72 m<br>
∴ Distance travelled = 72 m
`
        },
        {
            q: `A motorbike moving with initial velocity 28 m s–1 and constant
acceleration stops after travelling 98 m. Find the acceleration of the
motorbike and the time taken to come to a stop.`,
            a: `<b>1. Given Information:</b><br>
• Initial Velocity (u) = 28 m/s<br>
• Final Velocity (v) = 0 m/s <span style="color: #64748b;">(Motorbike stops)</span><br>
• Distance (s) = 98 m<br><br>

<b>2. Finding the Acceleration (a):</b><br>
• Formula: v² = u² + 2as<br>
• 0² = (28)² + 2 × a × 98<br>
• 0 = 784 + 196a<br>
• -196a = 784<br>
• a = 784 / -196 = <b>-4 m/s²</b><br>
<span style="color: #475569; font-size: 0.95rem;"><i>*Note: The negative sign indicates deceleration (retardation) because the bike is slowing down.</i></span><br><br>

<b>3. Finding the Time Taken (t):</b><br>
• Formula: v = u + at<br>
• 0 = 28 + (-4) × t<br>
• 4t = 28<br>
• t = 28 / 4 = <b>7 seconds</b><br><br>

<span style="color: #16a34a; font-weight: 600;">∴ The retardation of the motorbike is 4 m/s² and it takes 7 seconds to stop.</span>
`
        },
        {
            q: ` Fig. 4.27 shows a position-time graph of two objects A and B that are
moving along the parallel tracks in the same direction. Do objects
A and B ever have equal velocity? Justify your answer.`,
            a: "<b>Answer:</b> No, objects A and B never have equal velocity.<br><br><b>Explanation:</b><br>• On a position-time graph, the slope (gradient) represents the velocity of the object.<br>• <b>Object A:</b> The graph is a straight line with a steeper slope, showing it moves at a higher constant velocity.<br>• <b>Object B:</b> The graph is a straight line with a gentler slope, showing it moves at a lower constant velocity.<br><br>Since both lines are straight with different slopes, both objects maintain different, constant velocities at all times. <br><br><b>Note on Intersection:</b> Although the two lines intersect , this intersection indicates they share the same <i>position</i> at that instant, not the same velocity. Velocity depends strictly on the slope of the line.",
            image: "images/fig 4.27.png"
        },
        {
            q: `A graph in Fig. 4.28 shows the change in position with time for two
objects A and B moving in a straight line from 0 to 10 seconds. Choose
the correct option(s).
(i) The average velocity of both over the 10 s time interval is equal
since they have the same initial and final positions.
(ii) The average speeds of both over the 10 s time interval are equal
since both cover equal distance in equal time.
(iii) The average speed of A over the 10 s time interval is lower than
that of B since it covers a shorter distance than B in 10 seconds.
(iv) The average speed of A over the 10 s time interval is greater than
that of B since B’s speed is lower than A’s in some segments.`,
            a: `<b>Correct Options: (i) and (ii) </b>

<br><b> Why? </b>

<br>(i) Statement (i) is correct: Both objects start and end at the exact same positions over the given time interval. Since average velocity depends solely on total displacement divided by total time, their average velocities are equal.

<br>(ii) Statement (ii) is correct: Because both objects cover the same displacement in the same amount of time, their overall average speeds are identical.

<br>(iii) Statement (iii) is incorrect: Object A does not cover less distance than Object B; both objects cover the exact same net distance to arrive at the same final position.

<br>(iv) Statement (iv) is incorrect: Average speed is determined by total path length divided by total time, not by individual instantaneous motion segments.`,
            image: "images/fig 4.28.png"
        },
        {
            q: `A truck driver driving at the speed of 54 km/h notices a road sign
with a speed limit of 40 km/h (Fig. 4.29) for trucks. He slows down
to 36 km/h in 36 s. What was the distance travelled by him during this
time? Assume the acceleration to be constant while slowing down`,
            a: `<b>1. Formula:</b><br>Since acceleration is uniform, distance (s) is given by the average velocity formula:<br>s = ((u + v) / 2) &times; t<br><br><b>2. Unit Conversion:</b><br>&bull; u = 54 km/h = 54 &times; (5/18) = 15 m/s<br>&bull; v = 36 km/h = 36 &times; (5/18) = 10 m/s<br>&bull; t = 36 s<br><br><b>3. Calculation:</b><br>s = ((15 + 10) / 2) &times; 36<br>s = (25 / 2) &times; 36<br>s = 12.5 &times; 36 = 450 m<br><br><b>Answer:</b> The distance covered is 450 m.`,
            image: "images/fig 4.29.png"
        },
        {
            q: ` A car starts from rest and accelerates uniformly to 20 m/s in
5 seconds. It then travels at 20 m/s for 10 seconds and finally
applies the brake (with uniform acceleration) to stop in 6 seconds.
Find the total distance travelled.`,
            a: `<b>Phase 1: Acceleration (0 to 20 m/s in 5 s)</b><br>Given: u = 0 m/s, v = 20 m/s<br>S<sub>1</sub> = ((0 + 20) / 2) &times; 5 = 10 &times; 5 = 50 m<br><br><b>Phase 2: Constant Speed (20 m/s for 10 s)</b><br>S<sub>2</sub> = 20 &times; 10 = 200 m<br><br><b>Phase 3: Deceleration (20 m/s to 0 in 6 s)</b><br>S<sub>3</sub> = ((20 + 0) / 2) &times; 6 = 10 &times; 6 = 60 m<br><br><b>Total Distance:</b><br>S = 50 + 200 + 60 = 310 m`,
        },
        {
            q: `A bus is travelling at 36 km/h when the driver sees an obstacle
30 m ahead. The driver takes 0.5 seconds to react before pressing the
brake. Once the brake is applied, the velocity of the bus reduces with
constant acceleration of 2.5 m/s². Will the bus be able to stop before
reaching the obstacle?`,
            a: "<b>Unit Conversion:</b><br>36 km/h = 36 &times; (5/18) = 10 m/s<br><br><b>Step 1: Distance covered during reaction time</b><br>Reaction Distance (s<sub>1</sub>) = u &times; t = 10 m/s &times; 0.5 s = 5 m<br><br><b>Step 2: Braking Distance</b><br>Given: u = 10 m/s, v = 0 m/s, a = -2.5 m/s<sup>2</sup><br>Using v<sup>2</sup> = u<sup>2</sup> + 2as<sub>2</sub>:<br>0<sup>2</sup> = 10<sup>2</sup> + 2(-2.5)s<sub>2</sub><br>0 = 100 - 5s<sub>2</sub><br>5s<sub>2</sub> = 100 &rArr; s<sub>2</sub> = 20 m<br><br><b>Total Stopping Distance:</b><br>s = s<sub>1</sub> + s<sub>2</sub> = 5 m + 20 m = 25 m<br><br><b>Conclusion:</b><br>Since 25 m &lt; 30 m, yes, the bus stops safely."
        },
        {
            q: `A student said, “The Earth moves around the Sun”. In this context,
discuss whether an object kept on the Earth can be considered to be
at rest.`,
            a: "<b>Concept:</b><br>Rest and motion are relative terms that depend entirely on the observer's frame of reference.<br><br><b>Explanation:</b><br>&bull; <b>Earth's Frame of Reference:</b> An object placed in a room or on the ground appears to be at rest with respect to the Earth's surface.<br>&bull; <b>Sun's/Space Frame of Reference:</b> The same object is in continuous motion when viewed from space or relative to the Sun, as it moves along with the Earth during its rotation and orbital revolution."
        },
        {
            q: `The velocity-time graph from 0 s to 120 s for a cyclist is shown in Fig. 4.30.
Shade the areas (in different colours) representing the displacement of
the cyclist
(i) while cyclist is moving with constant velocity.
(ii) when the velocity of cyclist is decreasing.
Also, calculate the displacement and average acceleration in the 120 s
time interval.`,
            a: "<b>1. Graph Shading Instructions:</b><br>&bull; <b>Constant Velocity Region:</b> Shade the rectangular area under the graph between t = 20 s and t = 100 s.<br>&bull; <b>Decreasing Velocity Region:</b> Shade the trapezoidal area under the graph between t = 100 s and t = 120 s.<br><br><b>2. Displacement Calculation (Total Area Under Graph):</b><br>&bull; <b>Area 1 (Triangle, 0 &ndash; 20 s):</b> (1/2) &times; 20 &times; 3 = 30 m<br>&bull; <b>Area 2 (Rectangle, 20 &ndash; 100 s):</b> 80 &times; 3 = 240 m<br>&bull; <b>Area 3 (Trapezium, 100 &ndash; 120 s):</b> (1/2) &times; (3 + 2) &times; 20 = 50 m<br><br><b>Total Displacement:</b><br>s = 30 + 240 + 50 = 320 m<br><br><b>3. Average Acceleration:</b><br>Average Acceleration = [ (Final Velocity &minus; Initial Velocity) / Total Time ]<br>a = (2 &minus; 0) / 120 = 1/60 m/s<sup>2</sup>",
        image: "images/fig 4.30.png"
        },
        {
            q: `A girl is preparing for her first marathon by running on a straight
road. She uses a smartwatch to calculate her running speed at
different intervals. The graph (Fig. 4.31) depicts her velocity versus
time. Estimate the distance she ran based on the graph.`,
            a: "<b>Estimation Strategy:</b><br>To estimate the total distance, we calculate the area under the velocity-time curve (Fig. 4.31) across four distinct phases:<br><br><b>1. Phase 1 (0 &ndash; 1.5 h):</b><br>&bull; Approximate average velocity = 7.1 km/h<br>&bull; Distance<sub>1</sub> &approx; 7.1 &times; 1.5 = 10.65 km<br><br><b>2. Phase 2 (1.5 &ndash; 3 h):</b><br>&bull; Constant velocity = 7.5 km/h<br>&bull; Distance<sub>2</sub> = 7.5 &times; 1.5 = 11.25 km<br><br><b>3. Phase 3 (3 &ndash; 5.5 h):</b><br>&bull; Velocity drops linearly from 7.5 to 6.5 km/h (Average &approx; 7.0 km/h)<br>&bull; Distance<sub>3</sub> = 7.0 &times; 2.5 = 17.5 km<br><br><b>4. Phase 4 (5.5 &ndash; 7 h):</b><br>&bull; Constant velocity = 6.5 km/h<br>&bull; Distance<sub>4</sub> &approx; 6.5 &times; 1.5 = 9.75 km<br><br><b>Total Estimated Distance:</b><br>Total Distance &approx; 10.65 + 11.25 + 17.5 + 9.75 = 49.15 km",
            image: "images/fig 4.31.png"
        },
      {
    q: ": A body moves with a uniform velocity of 6 m/s for 2 minutes. It then accelerates uniformly at 1 m/s² for 14 seconds. Calculate the displacement in both phases and total displacement.",
    a: "Phase 1: s1 = 6 × 120 = 720 m<br>Phase 2: s2 = 6(14) + 0.5(1)(14)² = 182 m<br>Total Displacement: 902 m"
  },
  {
    q: ": A body moves with a uniform velocity of 6 m/s for 2 minutes. It then accelerates uniformly at 1 m/s² for 15 seconds. Calculate the displacement in both phases and total displacement.",
    a: "Phase 1: s1 = 6 × 120 = 720 m<br>Phase 2: s2 = 6(15) + 0.5(1)(15)² = 202.5 m<br>Total Displacement: 922.5 m"
  },
  {
    q: " A body moves with a uniform velocity of 6 m/s for 2 minutes. It then accelerates uniformly at 1 m/s² for 16 seconds. Calculate the displacement in both phases and total displacement.",
    a: "Phase 1: s1 = 6 × 120 = 720 m<br>Phase 2: s2 = 6(16) + 0.5(1)(16)² = 224 m<br>Total Displacement: 944 m"
  }
]
},
            { name: "Chapter 5: Exploring Mixtures and Their Separation", solutions: [
                { q: `Which of the following mixtures are correctly classified as
homogeneous (Hm) and heterogeneous (Ht)? Choose the correct
option.
<br>(i) Air — Hm, Milk — Ht, Sugar solution — Hm, Smoke — Hm
<br>(ii) Brass — Ht, Fog — Ht, Vinegar — Ht, Muddy water — Hm
<br>(iii) Copper sulfate solution — Hm, Salt solution — Hm, Milk — Hm, Bronze — Hm
<br>(iv) Muddy water — Ht, Milk — Ht, Blood — Ht, Brass — Hm`, a: `(iv) Muddy water — Ht, Milk — Ht, Blood — Ht, Brass — Hm is the answer to the MCQ` },
                { q: `Choose the correct options, and explain the reason for the correct and
incorrect options.
<br>Which among the following mixtures show the Tyndall Effect?
A mixture of:
<br> (a) air and dust particles
<br> (b) copper sulfate and water
<br> (c) starch and water
<br> (d) acetone and water
<br> <b> Options -:</b>
<br> (i) a and b | (ii) b and d | (iii) a and c | (iv) c and d `, a: `The correct option is (iii) a and c.` },
                { q: `A mixture can be categorised as a solution, a suspension, or a colloid,
each possessing distinct properties. Utilise the words or phrases
provided in the box to fill in the Table 5.2. Words and phrases may be
used more than once.
<br><br><b>Words and Phrases </b><br>
Large-sized particles; Particles remain evenly distributed; Small-sized particles
(less than 1 nm diameter); Moderate-sized particles (1 – 1000 nm); Settles down
when left undisturbed (more than 1000 nm in diameter); Does not settle down;
Scatters light; Separates by filtration; Transparent; Salt solution; Milk; Sand in
water; Smoke; Heterogeneous mixture; Cannot be separated by filtration; Mud;
Butter; Brass. 
<br> <br> <b>The table is provided in the image aswell as the answer.</b>`, a: `Answer gave in the image, thanks.`, image: "images/q fig.jpg" },
                { q: `<b> Solve the following problems: </b><br>
                    (i) A cake recipe uses dry ingredients, namely 75 g of sugar for
420 g of all-purpose flour and 5 g of sodium hydrogencarbonate.
Express the concentration of each component in the mixture using
an appropriate method.
<br> <br>(ii) A brass alloy contains 70% copper by mass. Calculate the quantities
of copper and zinc present in 120 g of brass. `, a:  `<b>(i):</b> First,  Total weight of dried mix: 75g (Sugar), + 420g (All in one purpose flour) + 5g Sodium Hydrogencarbonate <b>(Simply you can write baking soda!)</b>
<br> Percentage share of each item,
<br>- <b> Sugar:</b> (75/100) x 100 = 15%
<br>- <b> Flour:</b> (420/500) x 100 = 84%
<br>- <b> Baking Soda (Sodium hydrogencarbonate): </b> (5/500) x 100 = 1%
<br> <br> (ii) We know Brass is 70% Copper and The rest Is Zinc (30%)
<br> For a 120g block of brass:
<br> - <b>Copper:</b> 70% of 120g = (70/120) x 100 = 84g
 <br>- <b> Zinc:</b> Simply, it is the remaining weight left so it would be 120g - 84g = 36g  
` },
{q: `The label on a cooking oil pack says one litre (910 g). If this oil is mixed
with water, will it form a separate layer? If so, which substance will be
on top? How will you separate the two layers? Also, draw the diagram
of the apparatus used.`, a: `The oil will form a seperate layer, which forms above the water because it has lesser density that the water. The two layers can be seperated with the seperating funnel method. The diagram is given above  `, image: "images/fig funnel.png"},
                { q: ` Assertion (A): Solutions do not exhibit the Tyndall effect.
                    <br> <br> Reason (R): The particles in solutions are larger than 100 nm, so they
cannot scatter light.
<br> Choose the correct option:
<br> (i) Both A and R are true, and R is the correct explanation of A
<br> (ii) Both A and R are true, but R is not the correct explanation of A
<br> (iii) A is true, but R is false. `, a: `Type solutions here.
<br> (iv) A is false, but R is true.` },       
                { q: `How would you separate the mixtures given in Table 5.3? Mention the
reason for choosing your method. If a mixture cannot be separated,
explain why.`, a: `<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <thead>
        <tr style="background-color: #fcf6eb;">
            <th style="border: 1px solid #cfa670; padding: 12px; text-align: left; color: #5c3a21; font-weight: bold;">Mixture</th>
            <th style="border: 1px solid #cfa670; padding: 12px; text-align: left; color: #5c3a21; font-weight: bold;">Method of separation</th>
            <th style="border: 1px solid #cfa670; padding: 12px; text-align: left; color: #5c3a21; font-weight: bold;">Reason for selection</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Mud from muddy water</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Coagulation + Filtration</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Adding alum makes tiny dirt particles clump together so they get heavy, sink, and easily get trapped by filter paper.</td>
        </tr>
        <tr style="background-color: #fafaf8;">
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Plasma from other components in the blood sample</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Centrifugation</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Spinning blood ultra-fast forces heavy blood cells to slide to the bottom, leaving the clear, liquid plasma layer on top.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Naphthalene and sand</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Sublimation</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Naphthalene skips the melting phase and turns straight into a gas when heated, leaving the normal sand behind in the dish.</td>
        </tr>
        <tr style="background-color: #fafaf8;">
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Chalk powder and common salt</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Dissolution &rarr; Filtration &rarr; Evaporation</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Salt dissolves in water but chalk won't. You can filter out the chalk pieces, then boil the water away to get dry salt back.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Common salt and water</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Evaporation (or Distillation)</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Boiling evaporates the water away to leave solid salt. If you actually want to collect and keep the pure water too, use distillation.</td>
        </tr>
        <tr style="background-color: #fafaf8;">
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Oil from water</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Separating Funnel</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">They don't mix at all and split into two separate layers based on weight, letting you easily drain the water out from the bottom.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left; font-weight: 500; color: #333;">Pigments of the flower</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Paper Chromatography</td>
            <td style="border: 1px solid #cfa670; padding: 12px; text-align: left;">Different color dyes travel up filter paper at different speeds depending on how well they dissolve, making them split into distinct spots.</td>
        </tr>
    </tbody>
</table>
` },
                { q: `Two miscible liquids, A and B, are present in a mixture. The boiling
point of A is 60 °C and the boiling point of B is 90 °C. Suggest a method
to separate them. Also, draw a labelled diagram of the method
suggested`, a: `The method to seperate these 2 liquids is <b> Simple distillation, </b>
<br> They mix perfect as they are miscible, but difference in their boiling points are >25 °C, A standard distillation setup give below will easily boil off Liquid A first without messing with Liquid B.
 `, image: "images/fig distillation.png" },
{q: `Compare evaporation, crystallization and distillation. In which
situation, would you prefer each of these over the others?`, a: `<b>Evaporation </b> is great when you only care about saving the solid solute and don't mid the solvent vapourise in the air.
<br><br> <b> Crystallisation</b> is the best choice when you want a highly pure solid. It's way better than evaporation for sensitive things because you don't risk overheating, burning or ruining the the solid. <b>However, it is time taking.</b>
<br><br> <b>Distillation</b> is used when we need to save the liquid or seperate two liquids that are mixed together, since it catches the steam and condenses it back to the liquid form.`,},
{q: `Blood is an example of a colloidal mixture
    <br> <br>(i) What would happen if
blood behaved like a true suspension inside the body?
<br> (ii) In a blood
sample, identify the dispersed phase and the dispersion medium.  `, a: `(i) If blood acted like a true suspension, the heavy blood cells would settle out and pool at the bottom of your veins every time you sat still or went to sleep. This would immediately block your blood flow and stop oxygen from reaching your organs. 
<br><br> (ii) The dispersed phase consists of the blood cells (red cells, white cells, and platelets), while the dispersion medium is the liquid plasma they float in.`,},
{q: `You are given a mixture of sand, common salt and naphthalene
(Fig. 5.25a). The Fig. 5.25b depicts various steps used to separate the
components of this mixture. Identify and write down the correct
sequence of separation techniques.`, a: `<b> The correct order would be 3 --> 1 --> 2 </b>
<br> Start with Setup 3 (Sublimation) to heat the mix so the naphthalene vaporises and separates out. Next, take whatever is left (sand and salt), mix it with water so the salt dissolves, and use Setup 1 (Filtration) to catch the sand. Finally, take that clear salty liquid and use Setup 2 (Evaporation) to boil away the water, leaving you with dry salt.
 `, image: "images/fig 5.25.png"},
{q: `Why is distillation an effective method for separating a mixture of
water and acetone?`, a: `It works perfectly because water and acetone boil at completely different temperatures. Acetone has a really low boiling point of 56°C, while water needs to hit 100°C to boil. This massive temperature gap means all the acetone turns to vapor and moves over to the cooling flask long before the water even gets hot enough to start evaporating.`,},
{q: `Answer the following questions with the help of the data given in
Table 5.4
<br> (i)What mass of potassium nitrate would be needed to prepare its
saturated solution in 50 g of water at 40 °C?
<br> (ii) A student makes a saturated solution of potassium chloride in
water at 80 °C and leaves the solution to cool at room temperature
(25 °C). What would she observe as the solution cools? Explain.
<br> (iii) What is the effect of a change in temperature on the solubility of
salts? Also, compare the changes in the solubility of the four given
salts with increasing temperature from 10 °C to 80 °C. `, a: `(i) The chart says 100 g of water needs 62 g of potassium nitrate to max out at 40°C. Since we are using exactly half the water (50 g), we only need half the salt: 31 g. <br><br>(ii) She will see solid crystals of potassium chloride starting to appear and settle at the bottom. This happens because hot water can hold a lot of salt (54g at 80°C), but as it cools down to room temperature, its capacity drops significantly, forcing the extra dissolved salt to precipitate out. <br><br> (iii)For most salts, getting the water hotter means you can dissolve way more salt. Looking at the data: Potassium nitrate goes through a massive jump (surging from 21g to 167g). Ammonium chloride and Potassium chloride rise steadily. Sodium chloride barely cares about the heat—its solubility stays almost completely flat around 36g–37g.  `, image: "images/table 5.4.png"},
{q: `Three students, A, B and C, are preparing sugar solutions for an
experiment:
<br><br> - Student A dissolves 20 g of sugar in 80 g of water.
<br> - Student B dissolves 20 g of sugar in 100 g of water.
<br> -  Student C dissolves 30 g of sugar in 80 g of water. 
<br> <br> (i)  Calculate the mass percentage (% m/m) concentration of sugar in
each student’s solution.
<br> (ii) Whose solution is the most concentrated? Explain why. `, a: `Student A: 20 g sugar / 100 g total weight × 100 = 20% <br> Student B: 20 g sugar / 120 g total weight × 100 = 16.67% <br> Student C: 30 g sugar / 110 g total weight × 100 = 27.27% <br> <br> (ii) Student C made the strongest (most concentrated) solution. Their mix has the highest percentage of sugar relative to the total weight of the liquid.  `,},
{q: `Examine Fig. 5.26.
    <br> <br> (i) Identify the separation technique marked as ‘S’
    <br> (ii) Label the apparatus A, B and C.
    <br> (iii) Which of the following mixtures can be separated
by the technique identified above? Use the data
given in Table 5.5. Mixtures: 
<br> (a) water — acetone        (b) water — salt
<br>(c) acetone — alcohol       (d) sand — salt
<br>(e) alcohol — chloroform    (f) alcohol — benzene  `, a: `<style>
    .boiling-point-container {
        font-family: Arial, sans-serif;
        margin: 20px 0;
        max-width: 800px;
    }
    .bp-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin-bottom: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #cfa670;
        border-radius: 12px;
        overflow: hidden;
    }
    .bp-table th, .bp-table td {
        border: 1px solid #eadecc;
        padding: 12px;
        text-align: center;
    }
    .bp-table tr:first-child th, .bp-table tr:first-child td {
        border-top: none;
    }
    .bp-table tr:last-child th, .bp-table tr:last-child td {
        border-bottom: none;
    }
    .bp-table th:first-child, .bp-table td:first-child {
        border-left: none;
        text-align: left;
        background-color: #fcf6eb;
        color: #5c3a21;
        font-weight: bold;
        width: 20%;
    }
    .bp-table th:last-child, .bp-table td:last-child {
        border-right: none;
    }
    .bp-table thead tr th {
        background-color: #fcf6eb;
        color: #5c3a21;
        font-weight: bold;
    }
    .answer-box {
        background-color: #fafaf8;
        border-left: 4px solid #cfa670;
        padding: 15px;
        margin-top: 20px;
        border-radius: 0 8px 8px 0;
    }
    .answer-box h4 {
        margin: 0 0 10px 0;
        color: #5c3a21;
    }
    .answer-box ul {
        margin: 0;
        padding-left: 20px;
    }
    .answer-box li {
        margin-bottom: 8px;
    }
</style>

<div class="boiling-point-container">
    <!-- Exact Table Formatted from the Image -->
    <table class="bp-table">
        <tbody>
            <tr>
                <td>Solvent</td>
                <td>Water</td>
                <td>Acetone</td>
                <td>Alcohol</td>
                <td>Chloroform</td>
                <td>Benzene</td>
            </tr>
            <tr>
                <td>Temperature (&deg;C)</td>
                <td>100 &deg;C</td>
                <td>56 &deg;C</td>
                <td>78 &deg;C</td>
                <td>61 &deg;C</td>
                <td>80 &deg;C</td>
            </tr>
        </tbody>
    </table>

    <!-- Attached Answer Section -->
    <div class="answer-box">
        <h4>Which of the mixtures can be separated by Simple Distillation?</h4>
        <p>Out of the options provided in the question, the mixtures that can be separated using this setup are:</p>
        <ul>
            <li><strong>(a) water &ndash; acetone:</strong> This works perfectly because water boils at 100&deg;C and acetone at 56&deg;C. Their boiling point difference is 44&deg;C, which easily clears the minimum 25&deg;C gap needed for simple distillation.</li>
            <li><strong>(b) water &ndash; salt:</strong> This is a standard liquid-solid solution where only the water vaporises, leaving the non-volatile solid salt completely behind in the flask.</li>
        </ul>
        <p><em>Note:</em> Mixtures like (c) acetone-alcohol, (e) alcohol-chloroform, and (f) alcohol-benzene have boiling points that are too close together (less than a 25&deg;C difference), so they would require fractional distillation instead.</p>
    </div>
</div>
`,},         
            
            ] },
            { name: "Chapter 6: How Forces Affect Motion", solutions: [
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> Using a horizontal force F, a table is moved across the floor at a constant velocity. How much is the frictional force exerted by the floor on the table?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        The frictional force exerted by the floor is exactly equal to <strong>F</strong>, acting in the opposite direction. Since the table is moving at a completely constant velocity, its acceleration is zero. This means the net force must be zero, so your forward push and the floor's backward friction completely balance each other out.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> For a ball moving on a smooth frictionless surface, choose the appropriate option that will make the following statements physically correct.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem;">
        <li>(i) If no net force is applied on the ball, the velocity of the ball will remain the same/increase/decrease.</li>
        <li>(ii) If a net force is applied on the ball in the direction of its motion, the magnitude of the velocity of the ball will remain the same/increase/decrease.</li>
        <li>(iii) If a net force is applied on the ball in a direction opposite to the direction of its motion, the magnitude of the velocity of the ball will remain the same/increase/decrease.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i)</strong> The velocity of the ball will <strong>remain the same</strong>. (Since there is no friction to slow it down, it keeps rolling forever!)</li>
        <li style="margin-bottom: 8px;"><strong>(ii)</strong> The magnitude of the velocity will <strong>increase</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(iii)</strong> The magnitude of the velocity will <strong>decrease</strong>.</li>
    </ul>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 15px 0; color: #333; font-weight: bold;">3. Two blocks P and Q on a smooth horizontal surface are shown in Fig. 6.36a and Fig. 6.36b. Two forces of magnitudes 4 N and 5 N are acting in opposite directions on block P, while block Q is moving with a constant velocity.</p>
    
    <div style="display: flex; gap: 40px; justify-content: center; align-items: center; margin: 20px 0; padding: 10px; background: #fff; border-radius: 4px;">
        <div style="text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; position: relative;">
                <span style="font-size: 14px; font-weight: bold; color: #d9534f; margin-right: 5px;">5 N &rarr;</span>
                <div style="width: 60px; height: 40px; border: 2px solid #333; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-weight: bold; z-index: 2;">P</div>
                <span style="font-size: 14px; font-weight: bold; color: #d9534f; margin-left: 5px;">&larr; 4 N</span>
            </div>
            <div style="width: 160px; height: 2px; background: #333; margin: 0 auto; margin-top: -2px;"></div>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666; font-weight: bold;">Fig. 6.36a</p>
        </div>
        
        <div style="text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center;">
                <div style="width: 60px; height: 40px; border: 2px solid #333; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-weight: bold;">Q</div>
            </div>
            <div style="width: 100px; height: 2px; background: #333; margin: 0 auto;"></div>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666; font-weight: bold;">Fig. 6.36b</p>
        </div>
    </div>

    <p style="margin: 0 0 10px 0; font-weight: bold; color: #444; font-size: 0.95rem;">Which of the following statement is correct?</p>
    <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 5px;">(i) P experiences a net force and Q does not experience a net force.</li>
        <li style="margin-bottom: 5px;">(ii) P does not experience a net force and Q experiences a net force.</li>
        <li style="margin-bottom: 5px;">(iii) Both P and Q experience a net force.</li>
        <li style="margin-bottom: 0;">(iv) Neither P nor Q experiences a net force.</li>
    </ul>
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The correct choice is: <strong>(i) P experiences a net force and Q does not experience a net force.</strong>
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Block P has unequal forces pulling it in opposite directions (5 N vs 4 N), leaving it with a net force of 1 N. Block Q is moving at a perfect, constant velocity, which always means its acceleration is zero and its net force is absolutely zero.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> While practising for the snake boat race, 100 oarsmen are rowing a boat together. Out of these, 95 row backwards to propel the boat forward. But by mistake, 5 oarsmen row in the opposite direction. If each oarsman applies a horizontal force of 200 N, what is the net force on the snake boat?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The net force on the snake boat is <strong>18,000 N in the forward direction</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Think of it like a giant tug-of-war on the boat: 95 rowers are pulling the right way, generating 19,000 N of forward force (95 &times; 200 N). Meanwhile, the 5 mistaken rowers are fighting them with 1,000 N of backward force (5 &times; 200 N). Subtracting the mistake gives a net forward push of 18,000 N.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> When a net force acts on an object, we observe that the object accelerates:</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li>(i) opposite to the direction of force, with acceleration proportional to the force acting on the object.</li>
        <li>(ii) opposite to the direction of force, with acceleration proportional to the mass of the object.</li>
        <li>(iii) in the direction of force, with acceleration inversely proportional to the force acting on the object.</li>
        <li>(iv) in the direction of force, with acceleration proportional to the force acting on the object.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        The correct choice is <strong>(iv) in the direction of force, with acceleration proportional to the force acting on the object.</strong> According to Newton's 2nd law, objects always speed up or change direction in the exact path of the net push, and pushing harder directly creates a bigger acceleration.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 15px 0; color: #333; font-weight: bold;">6. The position-time graph for four objects A, B, C and D moving along a straight line are given in Fig. 6.37. A net force acts on:</p>
    
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0; padding: 10px; background: #fff; border-radius: 4px;">
        <div style="text-align: center;">
            <div style="width: 80px; height: 80px; border-left: 2px solid #333; border-bottom: 2px solid #333; margin: 0 auto; position: relative; overflow: hidden;">
                <svg width="80" height="80" style="position: absolute; left: 0; bottom: 0;">
                    <path d="M 0 80 Q 40 70 80 10" stroke="#d9534f" stroke-width="2.5" fill="transparent"/>
                </svg>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #555; font-weight: bold;">Object A</p>
        </div>
        <div style="text-align: center;">
            <div style="width: 80px; height: 80px; border-left: 2px solid #333; border-bottom: 2px solid #333; margin: 0 auto; position: relative;">
                <div style="position: absolute; left: 0; bottom: 40px; width: 80px; height: 2px; background: #5bc0de;"></div>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #555; font-weight: bold;">Object B</p>
        </div>
        <div style="text-align: center;">
            <div style="width: 80px; height: 80px; border-left: 2px solid #333; border-bottom: 2px solid #333; margin: 0 auto; position: relative;">
                <svg width="80" height="80" style="position: absolute; left: 0; bottom: 0;">
                    <line x1="0" y1="80" x2="80" y2="10" stroke="#5bc0de" stroke-width="2" />
                </svg>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #555; font-weight: bold;">Object C</p>
        </div>
        <div style="text-align: center;">
            <div style="width: 80px; height: 80px; border-left: 2px solid #333; border-bottom: 2px solid #333; margin: 0 auto; position: relative;">
                <svg width="80" height="80" style="position: absolute; left: 0; bottom: 0;">
                    <line x1="0" y1="20" x2="80" y2="80" stroke="#5bc0de" stroke-width="2" />
                </svg>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #555; font-weight: bold;">Object D</p>
        </div>
    </div>

    <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 5px;">(i) Object A</li>
        <li style="margin-bottom: 5px;">(ii) Object B</li>
        <li style="margin-bottom: 5px;">(iii) Object C</li>
        <li style="margin-bottom: 0;">(iv) Object D</li>
    </ul>
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        A net force acts on: <strong>(i) Object A</strong>
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Object A's position-time graph is a curved line, which means its speed is changing over time—it is accelerating! In contrast, objects B, C, and D all show completely straight lines, meaning they are either moving at a single constant speed or standing perfectly still with zero net force.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">7. A sailor jumps out from a small boat to the shore (Fig. 6.38). As the sailor jumps forward, will the boat move? If yes, in which direction and why.</p>
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        <strong>Yes, the boat will move backward (away from the shore).</strong> This is a classic example of Newton's 3rd law (Action and Reaction). To launch forward onto the shore, the sailor's feet must push backward against the boat. As the boat pushes the sailor forward, it receives an equal and opposite force that kicks it back into the water.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">8. During a high jump event, a landing mat or sand bed is placed for the athlete to fall upon (Fig. 6.39). Explain the reason behind it.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        The landing mat is there to <strong>increase the time</strong> it takes for the athlete to come to a complete stop. Sinking into a soft cushion slows down the deceleration process. According to Newton's 2nd law, stretching out that stopping time significantly lowers the impact force hitting the athlete's body, preventing serious injuries.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> A hand cart loaded with vegetables collides with an identical but empty hand cart. During the collision, which cart exerts a larger force?</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li>(i) the loaded cart exerts a force of larger magnitude on the empty cart.</li>
        <li>(ii) the empty cart exerts a force of larger magnitude on the loaded cart.</li>
        <li>(iii) neither cart exerts a force on the other.</li>
        <li>(iv) the loaded cart and the empty cart, both exert an equal magnitude of force on each other.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        The correct option is <strong>(iv) the loaded cart and the empty cart, both exert an equal magnitude of force on each other.</strong> Newton's 3rd law states that forces always occur in perfectly equal and opposite pairs. No matter which cart is heavier or moving faster, the actual collision force they trade is exactly identical on both sides.
    </p>
</div>
`,},
{q:`<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">10. The acceleration-mass graph for the acceleration produced by a force on objects of different masses is plotted in Fig. 6.40. Plot the force-mass graph for this case.</p>
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The force-mass graph will simply be a <strong>flat, horizontal straight line at F = 10 N</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        If you take any mass coordinate from the curve and multiply it by its acceleration value (F = m &times; a), you get the exact same constant force. For instance, at 1 kg mass, acceleration is 10 m/s&sup2;, which equals 10 N. Since the force remains a constant 10 N for every single mass, its graph is a perfectly flat line at the 10 N mark.
    </p>
</div>
`,},
{q: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 15px 0; color: #333; font-weight: bold;">11. The velocity-time graph of an object of mass 10 kg moving along a straight line is shown in Fig. 6.41. Calculate the force acting on the object by using the graph.</p>
    
    <div style="width: 220px; height: 160px; margin: 20px auto; border-left: 2px solid #333; border-bottom: 2px solid #333; position: relative; background: linear-gradient(0deg, transparent 24%, #eee 25%, #eee 26%, transparent 27%), linear-gradient(90deg, transparent 24%, #eee 25%, #eee 26%, transparent 27%); background-size: 20px 20px;">
        <svg width="220" height="160" style="position: absolute; left: 0; top: 0; overflow: visible;">
            <line x1="0" y1="110" x2="160" y2="30" stroke="#d9534f" stroke-width="3" />
            <circle cx="0" cy="110" r="4" fill="#333"/>
            <text x="5" y="114" font-size="10" font-family:sans-serif; font-weight:bold;">10 m/s (t=0)</text>
            <circle cx="160" cy="30" r="4" fill="#333"/>
            <text x="125" y="24" font-size="10" font-family:sans-serif; font-weight:bold;">30 m/s (t=8s)</text>
        </svg>
        <div style="position: absolute; right: -50px; bottom: -5px; font-size: 11px; font-weight: bold;">Time (s)</div>
        <div style="position: absolute; left: -35px; top: -20px; font-size: 11px; font-weight: bold;">Velocity (m s&sup1;)</div>
    </div>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The net force acting on the object is <strong>25 N</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        First, find the acceleration by calculating the slope of the line: (30 m/s &minus; 10 m/s) / 8 s = 20 / 8 = 2.5 m/s&sup2;. Then, plug it into Newton's second law (F = m &times; a): 10 kg &times; 2.5 m/s&sup2; gives you a total net force of 25 N.
    </p>
</div>
`},
{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> A bullet of mass 50 g moving with a speed of 100 m s–1 enters a heavy stationary wooden block and stops after penetrating a distance of 50 cm. Estimate the stopping force acting on the bullet.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The estimated stopping force acting on the bullet is <strong>500 N</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Convert things to standard units first: mass = 0.05 kg (50g) and distance = 0.5 m (50cm). Using the motion equation v&sup2; = u&sup2; + 2as, we calculate: 0 = 100&sup2; + 2 &times; a &times; 0.5, giving an acceleration of -10,000 m/s&sup2;. Finally, using F = ma, the force is 0.05 kg &times; -10,000 m/s&sup2; = -500 N (the negative sign simply shows it opposes the motion).
    </p>
</div>
`,},
{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> An ace footballer converted a penalty shot by kicking the football with a speed of 108 km h–1. The estimated force they imparted was 800 N. The mass of the football was 0.4 kg. Calculate the time of contact between their foot and the ball.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The contact time between the foot and the ball is <strong>0.015 seconds</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        First, convert the speed from km/h to m/s: 108 &times; (5/18) = 30 m/s. Since Force = mass &times; (change in velocity / time), we can set up the calculation: 800 N = 0.4 kg &times; (30 m/s / t). This simplifies down to 800 = 12 / t, which leaves us with a brief contact window of t = 0.015 seconds.
    </p>
</div>
`,},
{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> An object of mass 2 kg moving with a constant velocity of 10 m s–1 encounters a rough patch where the force of friction on the object is 7 N. At the same time, an additional constant force of 3 N opposing the motion is applied. How much distance does it travel before stopping?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The object travels a distance of <strong>10 meters</strong> before coming to a complete stop.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        The total combined force fighting the motion is 10 N (7 N rough patch friction + 3 N additional opposition force). With a mass of 2 kg, the deceleration rate is -5 m/s&sup2; (Force/mass). Using the formula v&sup2; - u&sup2; = 2as, we write out 0 - 10&sup2; = 2 &times; (-5) &times; s, which simplifies cleanly to -100 = -10s, giving a total distance of 10 meters.
    </p>
</div>
`,},
{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;"> A tractor pulls a harrow of mass m1 with a net force F resulting in an acceleration of a1. The same tractor pulls a trolley of mass m2 with a force F producing an acceleration of a2. If the tractor now pulls the trolley with the harrow placed on it (with the same force F), obtain an expression for the resulting acceleration.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The final mathematical expression for the combined acceleration is: <strong>a = (a&ensp;&times;&ensp;a&ensp;) / (a&ensp;+&ensp;a&ensp;)</strong>
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        From Newton's second law, mass equals Force divided by acceleration (m = F/a). So, the individual sizes are m&ensp;= F/a&ensp; and m&ensp;= F/a&ensp;. Combined together, the system mass is (F/a&ensp; + F/a&ensp;). The final combined acceleration is Force divided by this total mass. The 'F' cancels out cleanly from the numerator and denominator, leaving you with the standard product-over-sum formula.
    </p>
</div>
`,},
{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">16. When the pole of a bar magnet is brought close to a magnetic compass, the bar magnet and the compass needle (which is also a magnet) exert a magnetic force on each other. As per Newton’s third law of motion, both the forces are equal in magnitude and opposite in direction. However, the compass needle moves, whereas the bar magnet does not move (Fig. 6.42). Explain why.</p>
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        Even though the magnetic forces acting on both objects are perfectly identical in strength, <strong>the bar magnet has vastly more mass</strong> than the lightweight compass needle. According to Newton's 2nd law, acceleration is inversely tied to mass. Because the bar magnet is heavy and has static table friction anchoring it down, its movement is completely microscopic, while the tiny needle spins freely.
    </p>
</div>
`,},
] },
            { name: "Chapter 7: Work, Energy, and Simple Machines", solutions: [{q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">State whether True or False.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 5px;">Work is said to be done when a force is applied, even if the object does not move.</li>
        <li style="margin-bottom: 5px;">Lifting a bucket vertically upward results in positive work done on the bucket.</li>
        <li style="margin-bottom: 5px;">The SI unit for both work and energy is joule (J).</li>
        <li style="margin-bottom: 5px;">A motionless stretched rubber band has kinetic energy.</li>
        <li style="margin-bottom: 0;">Energy can change from one form to another.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>False:</strong> No movement means zero displacement, so scientifically, no work is done on the object.</li>
        <li style="margin-bottom: 8px;"><strong>True:</strong> The upward lifting force and the upward movement are in the exact same direction.</li>
        <li style="margin-bottom: 8px;"><strong>True:</strong> Energy is just the capacity to do work, so they share the exact same unit.</li>
        <li style="margin-bottom: 8px;"><strong>False:</strong> It's stationary, so its kinetic energy is zero; instead, it stores potential energy.</li>
        <li style="margin-bottom: 0;"><strong>True:</strong> Energy transfers shapes constantly, like electrical energy turning into light in a bulb.</li>
    </ul>
</div>
`,},    
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Fill in the blanks.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 5px;">Work done = ______ &times; ______ (in the direction of force).</li>
        <li style="margin-bottom: 5px;">1 joule of work is done when a force of ______ newton displaces an object by 1 metre in the direction of the force.</li>
        <li style="margin-bottom: 5px;">The expression for kinetic energy of a body of mass m and velocity v is ______.</li>
        <li style="margin-bottom: 5px;">The potential energy of an object of mass m at a small height h from the Earth’s surface is ______.</li>
        <li style="margin-bottom: 0;">Power is defined as the ______ at which work is done.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;">Force &times; Displacement</li>
        <li style="margin-bottom: 8px;">1</li>
        <li style="margin-bottom: 8px;">&frac12; mv&sup2;</li>
        <li style="margin-bottom: 8px;">mgh</li>
        <li style="margin-bottom: 0;">rate</li>
    </ul>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">When a ball thrown upwards reaches its highest point, tick which of the following statement(s) are correct?</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 5px;">The force acting on the ball is zero.</li>
        <li style="margin-bottom: 5px;">The acceleration of the ball is zero.</li>
        <li style="margin-bottom: 5px;">Its kinetic energy is zero.</li>
        <li style="margin-bottom: 0;">Its potential energy is maximum.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The correct statements are: <strong>Its kinetic energy is zero.</strong> and <strong>Its potential energy is maximum.</strong>
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Even though the ball stalls for an instant at the top (making speed and kinetic energy zero), gravity never turns off! It is still accelerating downwards at 10 m/s&sup2; because of its weight. Since it's at the highest peak of its flight, all its energy has converted into maximum potential energy.
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">For each of the following situations, identify the energy transformation that takes place: a truck moving uphill, unwinding of a watch spring, photosynthesis in green leaves, water flowing from a dam, burning of a matchstick, explosion of a fire cracker, speaking into a microphone, a glowing electric bulb, and a solar panel.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; font-size: 0.95rem;">
        <li style="margin-bottom: 6px;"><strong>Truck moving uphill:</strong> Chemical energy (fuel) &rarr; Kinetic energy &rarr; Potential energy.</li>
        <li style="margin-bottom: 6px;"><strong>Unwinding watch spring:</strong> Elastic Potential energy &rarr; Kinetic energy.</li>
        <li style="margin-bottom: 6px;"><strong>Photosynthesis:</strong> Light energy (Sun) &rarr; Chemical energy.</li>
        <li style="margin-bottom: 6px;"><strong>Water flowing from a dam:</strong> Gravitational Potential energy &rarr; Kinetic energy.</li>
        <li style="margin-bottom: 6px;"><strong>Burning a matchstick:</strong> Chemical energy &rarr; Thermal (heat) and Light energy.</li>
        <li style="margin-bottom: 6px;"><strong>Firecracker explosion:</strong> Chemical energy &rarr; Sound, Light, and Thermal energy.</li>
        <li style="margin-bottom: 6px;"><strong>Speaking into a mic:</strong> Sound energy &rarr; Electrical energy.</li>
        <li style="margin-bottom: 6px;"><strong>Glowing electric bulb:</strong> Electrical energy &rarr; Light and Thermal energy.</li>
        <li style="margin-bottom: 0;"><strong>Solar panel:</strong> Light energy &rarr; Electrical energy.</li>
    </ul>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A student is slowly lifted straight up in an elevator from the ground level to the top floor of a building. Later, the same student climbs the staircase, all the way to the top. Given that the height of the building is h&thinsp;=&thinsp;72.5 m, acceleration due to gravity is g&thinsp;=&thinsp;10&thinsp;m&thinsp;s&ndash;2, and student’s mass is m&thinsp;=&thinsp;50 kg.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li>Find the gain in the potential energy if the student is lifted straight up to the top.</li>
        <li>Find the gain in the potential energy when the student climbs the stairs to the same top.</li>
        <li>What do you conclude about the dependence of the potential energy on the path taken?</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;">Gain = mgh = 50 &times; 10 &times; 72.5 = <strong>36,250 J</strong>.</li>
        <li style="margin-bottom: 8px;">Gain = <strong>36,250 J</strong> (The vertical height reached is exactly the same).</li>
        <li style="margin-bottom: 0;"><strong>Conclusion:</strong> Potential energy is entirely independent of the path taken. It only depends on the starting configuration and final vertical height.</li>
    </ul>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A crane lifts a mass m to the 10th floor of a building in a certain time. It then raises the same mass to the 20th floor of the same building in double the time. How much more energy and power are required? Assume that the height of all floors is equal.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        It requires <strong>twice the energy</strong>, but the <strong>power required remains exactly the same</strong>.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Lifting the mass to the 20th floor means going double the vertical distance, which directly doubles the potential energy required (2 &times; E). However, because the crane takes double the time to do this double work, the rate of work (Power = Work / Time) stays perfectly identical to the first trip.
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Which factors determine the energy required to raise a flag from the ground to the top of a tall flagpole using a pulley? Does raising the flag slowly or quickly change the amount of work done? If the speed at which the flag is raised is doubled, how does the power requirement change? Explain your answers.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        The energy is determined by the <strong>mass of the flag and the vertical height</strong> of the flagpole. Raising it quickly or slowly does not alter the work done—the mechanical output to combat gravity is always equal to mgh. However, if you double the speed, you finish the task in half the time, which means the <strong>power required instantly doubles</strong>.
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A man of mass 60 kg rides a scooter of mass 100 kg. He accelerates the scooter to a velocity v. The next day, his son with a mass of 40 kg joins him as a passenger. If the scooter reaches the same speed on both days in the same time interval, what is the ratio of the fuel of the tank used on the two days? Assume that the energy transfer to the scooter happens entirely due to fuel, and no other losses occur due to air resistance and friction.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The ratio of fuel used is <strong>4:5</strong> (or 0.8).
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Fuel directly correlates with the kinetic energy (&frac12; mv&sup2;) needed to reach speed v. On Day 1, the total mass is 60 + 100 = 160 kg. On Day 2, adding the son brings the mass to 160 + 40 = 200 kg. Since speed is identical, the ratio of fuel is simply the ratio of their masses: 160 / 200 = 4 / 5.
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 10px 0; color: #333; font-weight: bold;">On a seesaw with sliding seats, a child is sitting on one side and an adult on the other side. The adult weighs twice that of the child. The seesaw however is balanced. Draw a figure which depicts this situation showing the distances from the fulcrum where the child and the adult are seated.</p>
    </div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;">
        According to the principle of levers (Load &times; Load Arm = Effort &times; Effort Arm), since the adult weighs twice as much as the child (2m &times; d = m &times; 2d), the <strong>adult must slide to exactly half the distance from the fulcrum</strong> compared to the child to keep the system perfectly balanced.
    </p>
</div>
`, image: `images/seesaw.jpg` },  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The gravitational attraction on the surface of the Moon (lunar surface) is about 1/6 th of that on the surface of the Earth. An astronaut can throw a ball up to a height of 8 m from the surface of the Earth. How far up will the ball thrown with the same upward velocity travel from the surface of the Moon?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The ball will travel a height of <strong>48 meters</strong> on the Moon.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Using the conservation of mechanical energy, the initial kinetic launch energy transforms completely into potential energy at the peak (&frac12; mv&sup2; = mgh &rarr; h = v&sup2; / 2g). This proves height is inversely linked to gravity. Since the Moon's gravity pull is 6 times weaker, the ball floats up 6 times higher (8 &times; 6 = 48 m).
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A 10.0 kg block is moving on horizontal floor with negligible friction. As shown in the Fig. 7.37, a variable force is applied on the block in its direction of motion from its position at 0 m till 4 m. If the block had a kinetic energy of 180 J when it was at 0 m, find the block’s speed (i) at 0 m, and (ii) at 4 m. Does the block have negative acceleration in any portion of its motion?</p>
    
</div>

`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Speed at 0 m:</strong> Since Kinetic Energy = 180 J, we set up 180 = &frac12; &times; 10 &times; v&sup2; &rarr; v&sup2; = 36 &rarr; <strong>6 m/s</strong>.</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Speed at 4 m:</strong> The total work done is the area of the trapezoid under the graph: Area = &frac12; &times; (2 + 4) &times; 50 = 150 J. The total Kinetic Energy at 4 m becomes 180 + 150 = 330 J. Solving for speed: 330 = &frac12; &times; 10 &times; v&sup2; &rarr; v&sup2; = 66 &rarr; <strong>8.12 m/s</strong>.</li>
        <li style="margin-bottom: 0;"><strong>Negative Acceleration? No.</strong> Even though the pushing force gets smaller between 3 m and 4 m, it is still a positive force pushing the block forward. The block continues to speed up the whole time, so acceleration never becomes negative.</li>
    </ul>
</div>

`, image: `images/fig 7.37.png`},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The gravitational attraction on the surface of the Moon (lunar surface) is about 1/6 th of that on the surface of the Earth. An astronaut can throw a ball up to a height of 8 m from the surface of the Earth. How far up will the ball thrown with the same upward velocity travel from the surface of the Moon?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        The ball will travel a height of <strong>48 meters</strong> on the Moon.
    </p>
    <p style="margin: 0; line-height: 1.6; color: #666; font-size: 0.95rem;">
        Using the conservation of mechanical energy, the initial kinetic launch energy transforms completely into potential energy at the peak (&frac12; mv&sup2; = mgh &rarr; h = v&sup2; / 2g). This proves height is inversely linked to gravity. Since the Moon's gravity pull is 6 times weaker, the ball floats up 6 times higher (8 &times; 6 = 48 m).
    </p>
</div>
`,},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A 1000 kg car is moving along a road at a constant speed. Suddenly, the driver notices some obstruction ahead and applies the brakes to come to a complete stop. The graphical representation of motion of the car starting from the instant the driver spots the traffic ahead is shown in Fig. 7.38.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) Describe how the car moves between positions A and B.</li>
        <li style="margin-bottom: 4px;">(ii) Calculate the kinetic energy of the car at A.</li>
        <li style="margin-bottom: 4px;">(iii) State the work done by the brakes in bringing the car to a halt between B and C.</li>
        <li style="margin-bottom: 0;">(iv) What does the kinetic energy of the car transform into?</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Motion A-B:</strong> The flat line means the car moves at a perfectly constant speed of 35 m/s. This represents the brief reaction time split-second before the driver physically hits the brake pedal.</li>
        <li style="margin-bottom: 8px;"><strong>(ii) KE at A:</strong> KE = &frac12; mv&sup2; = &frac12; &times; 1000 &times; 35&sup2; = <strong>612,500 J</strong>.</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Work Done by Brakes:</strong> The brakes completely neutralize all forward motion down to zero, meaning the work done by braking friction is equal to <strong>&minus;612,500 J</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(iv) Transformation:</strong> The car's kinetic energy transforms completely into heat (thermal energy) and scraping sound energy inside the brake assemblies and tires.</li>
    </ul>
</div>
`, image: `images/fig 7.38.png`},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The potential energy-displacement graph of a 0.5 kg ball moving along a frictionless track is shown in Fig. 7.39. At O, the velocity of the ball is 0 m s&sup1; and potential energy is 30 J. Calculate the velocity of the ball at P, Q and R.</p>
    
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: #444;">
        Since the ball is stationary at O, its total mechanical energy budget is locked at <strong>30 J</strong> (Kinetic Energy + Potential Energy = 0 + 30 = 30 J).
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; font-size: 0.95rem;">
        <li style="margin-bottom: 6px;"><strong>At P (PE = 10 J):</strong> KE = 30 &minus; 10 = 20 J. Solving for speed: 20 = &frac12; &times; 0.5 &times; v&sup2; &rarr; v&sup2; = 80 &rarr; <strong>8.94 m/s</strong>.</li>
        <li style="margin-bottom: 6px;"><strong>At Q (PE = 20 J):</strong> KE = 30 &minus; 20 = 10 J. Solving for speed: 10 = &frac12; &times; 0.5 &times; v&sup2; &rarr; v&sup2; = 40 &rarr; <strong>6.32 m/s</strong>.</li>
        <li style="margin-bottom: 0;"><strong>At R (PE = 40 J):</strong> The track graph at point R requires a potential energy of 40 J. Because our ball only has a total energy budget of 30 J, it physically cannot climb up to point R. It will stop and roll backward before ever reaching it. Velocity at R is <strong>impossible</strong> (mechanically unreachable).</li>
    </ul>
</div>
`, image: `images/fig 7.39.png`},  
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A coconut of mass 1.5 kg falls from the top of a coconut tree onto the wet sand on a beach. The height of the tree is 10 m. On impact, the coconut comes to rest by making a depression in the sand.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) Calculate the velocity of the coconut just before it hits the sand.</li>
        <li style="margin-bottom: 0;">(ii) Assume that the average resistive force of sand is 3000 N and all of the coconut’s energy is used to create the depression in the sand. Calculate the depth of the depression the coconut makes in the sand. Assume g = 10 m s&ndash;2.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Velocity before hitting:</strong> Using conservation of energy (&frac12; mv&sup2; = mgh &rarr; v = &radic;(2gh)), we compute v = &radic;(2 &times; 10 &times; 10) = &radic;(200) = <strong>14.14 m/s</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(ii) Sand Depression Depth:</strong> The initial potential energy at the top of the tree is 1.5 &times; 10 &times; 10 = 150 J. The work done by the sand stopping force must balance this energy (Force &times; distance = Energy): 3000 &times; d = 150 &rarr; d = 150 / 3000 = <strong>0.05 meters (5 cm)</strong>.</li>
    </ul>
</div>
`,},  
                           
            ] },
            { name: "Chapter 8: Journey Inside the Atom", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">1. Choose the correct options and explain the reason for the correct and incorrect options in the context of Ernest Rutherford’s gold foil experiment:</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) The experiment clearly showed the existence of neutrons in the nucleus.</li>
        <li style="margin-bottom: 4px;">(ii) The results disproved the plum pudding model and led to the idea of a nucleus at the centre of the atom.</li>
        <li style="margin-bottom: 4px;">(iii) The large deflection of a few alpha particles indicated that most of the mass of the atom and positive charge are packed into a tiny centre.</li>
        <li style="margin-bottom: 0;">(iv) The way alpha particles were deflected showed that electrons move around the nucleus.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Incorrect:</strong> The experiment only detected a dense positive core (nucleus); neutrons were discovered much later by James Chadwick in 1932.</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Correct:</strong> Bouncing back of alpha particles showed positive charge isn't evenly spread, completely disproving Thomson’s model and establishing the central nucleus.</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Correct:</strong> Large-angle deflections and direct rebounds proved that almost all mass and positive charge are concentrated in a miniscule space.</li>
        <li style="margin-bottom: 0;"><strong>(iv) Incorrect:</strong> The deflection of positive alpha particles was caused by the positive nucleus repelling them; it did not map or show electronic motion directly.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">2. Which of the following statements are correct or incorrect according to the Bohr’s atomic model? Give a reason for each statement.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) Electrons lose energy while moving in fixed orbits and slowly fall into the nucleus.</li>
        <li style="margin-bottom: 4px;">(ii) Electrons can exist anywhere around the nucleus with no fixed energy.</li>
        <li style="margin-bottom: 4px;">(iii) Electrons revolve around the nucleus in orbits of fixed energy without losing energy.</li>
        <li style="margin-bottom: 0;">(iv) Electrons can be found between energy levels as they move around the nucleus.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Incorrect:</strong> Bohr's model states that while moving in a fixed allowed shell, an electron is in a stationary state and does not radiate or lose energy.</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Incorrect:</strong> Electrons cannot exist anywhere; they are strictly restricted to follow fixed specific circular paths called orbits or shells.</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Correct:</strong> This is a core postulate of Bohr’s model; stationary orbits keep the electron energy constant, ensuring atomic stability.</li>
        <li style="margin-bottom: 0;"><strong>(iv) Incorrect:</strong> Electrons can only revolve within the defined allowed shells and are strictly forbidden from existing in the spaces between them.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">3. The composition of the nuclei of three atomic species X, Y, and Z are given as follows:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.95rem; color: #444;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;"></th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">X</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Y</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Z</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Number of protons</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">18</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">17</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">17</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Number of neutrons</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">19</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">18</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">20</td>
            </tr>
        </tbody>
    </table>
    <p style="margin: 8px 0 0 0; color: #555; font-size: 0.95rem;">Explain the relation between the following: (i) Y and Z, (ii) Z and X.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Relation between Y and Z (Isotopes):</strong> Both Y and Z have the same number of protons (17) but a different number of neutrons (Y has 18, Z has 20). Therefore, they are isotopes of the same element.</li>
        <li style="margin-bottom: 0;"><strong>(ii) Relation between Z and X (Isobars):</strong> Z and X have different atomic numbers (protons) but share the same mass number of 37 (Z: 17 + 20 = 37; X: 18 + 19 = 37). Therefore, they are isobars.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">4. What conclusion did Rutherford draw about the position and characteristics of the atom’s positively charged part based on the few alpha particles that bounced back or were deflected at large angles in the gold foil experiment?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Nucleus Characteristics:</strong> Rutherford concluded that the positive charge and nearly all the mass of an atom are not spread out uniformly, but instead concentrated in an extremely dense, compact central core called the <strong>nucleus</strong>. The rest of the atom is almost completely empty space.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">5. Explain and arrange the following statements in the correct chronological order to show how atomic models have evolved over time.</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) Bohr’s model proposed that electrons move in fixed orbits around the nucleus, each with a definite energy.</li>
        <li style="margin-bottom: 4px;">(ii) Thomson’s model depicted the atom as a ‘plum pudding’ with electrons embedded in a sphere of positive charge.</li>
        <li style="margin-bottom: 4px;">(iii) Rutherford’s model proposed that atoms have a dense central nucleus.</li>
        <li style="margin-bottom: 0;">(iv) Dalton’s model described atoms as indivisible particles.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Chronological Order:</strong> The correct scientific evolution timeline is <strong>(iv) &rarr; (ii) &rarr; (iii) &rarr; (i)</strong>. Dalton started with indivisible particles (1808), Thomson added subatomic embedded charges (1897), Rutherford discovered the dense inner nucleus (1911), and Bohr established stable energy levels (1913).</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">6. Electrons move around the nucleus in orbits. Why do they not fly away from the atom? Explain what keeps them attracted to the nucleus.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Electrostatic Attraction:</strong> Electrons carry a negative electrical charge, while the central nucleus contains protons carrying a positive electrical charge. The strong <strong>electrostatic force of attraction</strong> between these opposite charges keeps the electrons bound to the atom and prevents them from flying away.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">7. Assertion (A): The discovery of subatomic particles helped in understanding the atomic structure.<br>Reason (R): The number of electrons is equal to the number of protons in an atom.</p>
    <p style="margin: 5px 0 0 0; color: #555; font-size: 0.95rem;">Choose the correct option: (i) Both A and R are true, and R is the correct explanation of A. (ii) Both A and R are true, but R is not the correct explanation of A. (iii) A is true, but R is false. (iv) A is false, but R is true.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option: (ii)</strong> Both A and R are true, but R is not the correct explanation of A. The discovery of subatomic components (protons, electrons, neutrons) mapped out the structural framework of an atom, but the equality of electrons and protons simply explains why an atom maintains an overall neutral electric charge.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">8. Magnesium is essential for many biological processes, including muscle contraction. For an atom of magnesium with a mass number of 24 and atomic number 12, determine the number of (i) protons, (ii) neutrons, (iii) electrons, and also illustrate the arrangement of electrons in a magnesium atom.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Protons:</strong> Equal to the atomic number, which gives <strong>12 protons</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Neutrons:</strong> Mass number minus atomic number (24 &minus; 12), which gives <strong>12 neutrons</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Electrons:</strong> Equal to the proton count in a neutral atom, giving <strong>12 electrons</strong>.</li>
        <li style="margin-bottom: 0;"><strong>Electronic Arrangement:</strong> Following Bohr-Bury rules, the 12 electrons fill the energy levels shell-by-shell to give a configuration of <strong>K=2, L=8, M=2</strong>.</li>
    </ul>
</div>
`, image: "images/mg.png" },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">9. Find the following information for the elements shown in Fig. 8.17: (i) Name of the element, (ii) Symbol, (iii) Total number of electrons, (iv) Number of valence electrons, (v) Valency of the element, (vi) Number of protons, (vii) Atomic number.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Atom (a) [Lithium]:</strong> (i) Lithium, (ii) Li, (iii) 3, (iv) 1, (v) 1, (vi) 3, (vii) Z = 3.</li>
        <li style="margin-bottom: 4px;"><strong>Atom (b) [Carbon]:</strong> (i) Carbon, (ii) C, (iii) 6, (iv) 4, (v) 4, (vi) 6, (vii) Z = 6.</li>
        <li style="margin-bottom: 4px;"><strong>Atom (c) [Oxygen]:</strong> (i) Oxygen, (ii) O, (iii) 8, (iv) 6, (v) 8 &minus; 6 = 2, (vi) 8, (vii) Z = 8.</li>
        <li style="margin-bottom: 0;"><strong>Atom (d) [Neon]:</strong> (i) Neon, (ii) Ne, (iii) 10, (iv) 8, (v) 0 (stable octet), (vi) 10, (vii) Z = 10.</li>
    </ul>
</div>
`, image: "images/img.png" },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">10. Both Rutherford’s and Bohr’s models have electrons orbiting the nucleus. Why did Rutherford’s model fail to explain atomic stability, while Bohr’s model succeeded?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Atomic Stability:</strong> In Rutherford's planetary model, accelerating circular electrons must continuously radiate electromagnetic energy, causing them to spiral inward and collapse into the nucleus. Bohr bypassed this limitation by postulating discrete <strong>stationary states (orbits)</strong> where mechanical rules keep electron energy fixed and radiationless during orbital motion.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">11. An atom <sup>70</sup>X has 31 electrons. How many neutrons are there in its nucleus?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Neutron Count:</strong> In a neutral atom, electrons equal protons, so protons = 31. Using Mass Number = Protons + Neutrons (70 = 31 + n), the total number of neutrons is 70 &minus; 31 = <strong>39 neutrons</strong>.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">12. An atom has 79 protons and a mass number of 197. Calculate (i) the number of neutrons, and (ii) the number of electrons.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 8px;"><strong>(i) Number of Neutrons:</strong> Mass number minus protons (197 &minus; 79) gives <strong>118 neutrons</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(ii) Number of Electrons:</strong> Equal to the number of protons in a neutral atomic state, giving <strong>79 electrons</strong>.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">13. Complete the Table 8.5:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.95rem; color: #444;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 6px;">Atomic No.</th>
                <th style="border: 1px solid #ddd; padding: 6px;">Mass No.</th>
                <th style="border: 1px solid #ddd; padding: 6px;">Neutrons</th>
                <th style="border: 1px solid #ddd; padding: 6px;">Protons</th>
                <th style="border: 1px solid #ddd; padding: 6px;">Electrons</th>
                <th style="border: 1px solid #ddd; padding: 6px;">Element Name</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">5</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">6</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">14</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">7</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">Nitrogen</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">24</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">12</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">15</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">16</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">1</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">0</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td><td style="border: 1px solid #ddd; padding: 6px; text-align: center;">–</td></tr>
        </tbody>
    </table>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Row 1 [Boron]:</strong> Mass No. = 5 + 6 = <strong>11</strong>; Protons = <strong>5</strong>; Electrons = <strong>5</strong>; Name = <strong>Boron</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>Row 2 [Nitrogen]:</strong> Atomic No. = <strong>7</strong>; Neutrons = 14 &minus; 7 = <strong>7</strong>; Protons = <strong>7</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>Row 3 [Magnesium]:</strong> Atomic No. = <strong>12</strong>; Neutrons = 24 &minus; 12 = <strong>12</strong>; Electrons = <strong>12</strong>; Name = <strong>Magnesium</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>Row 4 [Phosphorus]:</strong> Mass No. = 15 + 16 = <strong>31</strong>; Protons = <strong>15</strong>; Electrons = <strong>15</strong>; Name = <strong>Phosphorus</strong>.</li>
        <li style="margin-bottom: 0;"><strong>Row 5 [Hydrogen]:</strong> Atomic No. = 1 &minus; 0 = <strong>1</strong>; Protons = <strong>1</strong>; Electrons = <strong>1</strong>; Name = <strong>Hydrogen</strong>.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">14. Element X has a mass number of 35 and contains 18 neutrons. Answer the following:</p>
    <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #555; font-size: 0.95rem; list-style-type: none;">
        <li style="margin-bottom: 4px;">(i) How many electrons and protons does element X have?</li>
        <li style="margin-bottom: 4px;">(ii) What is its atomic number?</li>
        <li style="margin-bottom: 4px;">(iii) Identify the element X.</li>
        <li style="margin-bottom: 4px;">(iv) Write its electronic configuration.</li>
        <li style="margin-bottom: 4px;">(v) How many valence electrons does it have?</li>
        <li style="margin-bottom: 4px;">(vi) What will be the mass number if two neutrons are added to its nucleus?</li>
        <li style="margin-bottom: 0;">(vii) What will be the relation of X with the new atom?</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Electrons & Protons:</strong> Protons = 35 &minus; 18 = 17 protons; Electrons = <strong>17 electrons</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Atomic Number:</strong> Equal to the proton count, giving <strong>Z = 17</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Identify Element X:</strong> Atomic number 17 corresponds to <strong>Chlorine (Cl)</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(iv) Electronic Configuration:</strong> Distributing 17 electrons yields <strong>2, 8, 7</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(v) Valence Electrons:</strong> Outer shell contains <strong>7 valence electrons</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(vi) New Mass Number:</strong> Initial mass 35 + 2 added neutrons = <strong>37</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(vii) Relation:</strong> They share the same atomic number (17) but have different mass numbers (35 and 37), making them <strong>isotopes</strong>.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">15. In an atom, there are 12 protons and 12 neutrons in the nucleus. Now, imagine that all the electrons are replaced with some hypothetical particles that have the same charge as electrons but are 500 times heavier. What effect will this replacement have on the atom’s: (i) Atomic number, (ii) Atomic mass, (iii) Mass number, (iv) Overall charge?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Atomic Number:</strong> <strong>No change</strong>; it is strictly defined by the 12 protons inside the nucleus.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Atomic Mass:</strong> <strong>Increases significantly</strong>; the mass of 12 electrons becomes 500 times heavier, making a measurable subatomic mass contribution.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Mass Number:</strong> <strong>No change</strong>; mass number counts only the total integer tally of nuclear nucleons (12p + 12n = 24).</li>
        <li style="margin-bottom: 0;"><strong>(iv) Overall Charge:</strong> <strong>No change</strong>; the electrical charge of the replacement particle remains identical to a standard electron (&minus;1).</li>
    </ul>
</div>
`, },

            ] },
            { name: "Chapter 9: Atomic Foundations of Matter", solutions: [ 
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A particular element (A) has one electron in its third shell. There is another element (B) with six electrons in its second shell.
    <br>(i) How many electrons does A tend to give or take to become stable?
    <br>(ii) What kind of ion would it form?
    <br>(iii) How many electrons does B tend to give or take to become stable?
    <br>(iv) What kind of ion would it form?
    <br>(v) If A and B were to combine, what kind of bond would be formed?
    <br>(vi) What would be the formula for the compound thus formed?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Atomic Number / Electrons:</strong> Element A has configuration 2, 8, 1, so it tends to <strong>give 1 electron</strong> to become stable.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Type of Ion:</strong> By losing 1 negative electron, it forms a positive ion, which is a <strong>cation</strong> (A<sup>+</sup>).</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Electrons for B:</strong> Element B has configuration 2, 6, so it tends to <strong>take 2 electrons</strong> to complete its outer shell octet.</li>
        <li style="margin-bottom: 4px;"><strong>(iv) Type of Ion for B:</strong> By gaining 2 negative electrons, it forms a negative ion, which is an <strong>anion</strong> (B<sup>2&minus;</sup>).</li>
        <li style="margin-bottom: 4px;"><strong>(v) Type of Bond:</strong> A complete transfer of electrons from a metal-like element (A) to a non-metal element (B) results in an <strong>ionic bond</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(vi) Chemical Formula:</strong> Exchanging and criss-crossing their valencies (A<sup>1+</sup> and B<sup>2&minus;</sup>) yields the formula <strong>A<sub>2</sub>B</strong>.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">An element X has six electrons in its outer shell and forms a diatomic molecule.
    <br>(i) Why would that be so?
    <br>(ii) What kind of bond would it form?
    <br>(iii) Draw the structure of the molecule it would form.
    <br>(iv) A certain other element Y has two electrons in its second shell. Draw the structure of the molecule that X would form with Y.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Reason for Diatomic Molecule:</strong> Element X requires 2 more valence electrons to achieve a stable octet structure. By sharing 2 electrons with another identical X atom, both achieve stability.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Type of Bond:</strong> Because two pairs of valence electrons are shared between the interacting atoms, it forms a <strong>double covalent bond</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Structure of X<sub>2</sub> Molecule:</strong> It is structurally represented by sharing two electron pairs, written as <strong>X = X</strong> or <strong>:X::X:</strong>.</li>
        <li style="margin-bottom: 0;"><strong>(iv) Structure of YX Molecule:</strong> Element Y (configuration 2, 2) transfers its 2 valence electrons entirely to X (configuration 2, 6), creating an ionic layout written as <strong>[Y]<sup>2+</sup>[:X:]<sup>2&minus;</sup></strong> or formula unit <strong>YX</strong>.</li>
    </ul>
</div>
`, image:`images/omgg.jpg`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">You want to design a new ionic compound, where the total positive charge is 6+ and the total negative charge is 6&minus;. Which of the following combinations gives the correct number of ions?
    <br>(i) 2 Al<sup>3+</sup> and 3 Cl<sup>&minus;</sup>
    <br>(ii) 3 Mg<sup>2+</sup> and 1 PO<sub>4</sub><sup>3&minus;</sup>
    <br>(iii) 2 Fe<sup>3+</sup> and 3 O<sup>2&minus;</sup>
    <br>(iv) 3 Ca<sup>2+</sup> and 2 SO<sub>4</sub><sup>2&minus;</sup></p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> <strong>(iii) 2 Fe<sup>3+</sup> and 3 O<sup>2&minus;</sup></strong>. The total positive charge is 2 &times; (+3) = +6, and the total negative charge is 3 &times; (&minus;2) = &minus;6, which matches perfectly.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Choose the correct statement(s) and correct the false statement(s).
    <br>(i) Elements are made up of molecules and compounds are made up of atoms.
    <br>(ii) The molecule of a compound is always made up of two or more atoms of the same kind.
    <br>(iii) One molecule of nitrogen gas contains three nitrogen atoms.
    <br>(iv) Water is made of two hydrogen atoms, covalently bonded with one oxygen atom.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) False:</strong> Elements are made up of atoms (or molecules of the same atom), while compounds are made up of different atoms combined.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) False:</strong> The molecule of a compound is always composed of two or more atoms of <strong>different</strong> kinds chemically bonded together.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) False:</strong> One molecule of stable nitrogen gas (N<sub>2</sub>) contains exactly <strong>two</strong> nitrogen atoms held by a triple bond.</li>
        <li style="margin-bottom: 0;"><strong>(iv) True:</strong> Water (H<sub>2</sub>O) consists exactly of two individual hydrogen atoms sharing their single valence electron pairs covalently with one oxygen atom.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Write the chemical formulae for the following compounds.
    <br>(i) Aluminium nitrate
    <br>(ii) Calcium oxide
    <br>(iii) Ferric oxide</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Aluminium nitrate:</strong> <strong>Al(NO<sub>3</sub>)<sub>3</sub></strong></li>
        <li style="margin-bottom: 4px;"><strong>(ii) Calcium oxide:</strong> <strong>CaO</strong></li>
        <li style="margin-bottom: 0;"><strong>(iii) Ferric oxide:</strong> <strong>Fe<sub>2</sub>O<sub>3</sub></strong></li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Write the formulae of the compounds formed from the following pairs of ions.
    <br>(i) Ca<sup>2+</sup> and Br<sup>&minus;</sup>
    <br>(ii) Al<sup>3+</sup> and CO<sub>3</sub><sup>2&minus;</sup>
    <br>(iii) K<sup>+</sup> and SO<sub>4</sub><sup>2&minus;</sup>
    <br>(iv) NH<sub>4</sub><sup>+</sup> and Cl<sup>&minus;</sup></p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Ca<sup>2+</sup> and Br<sup>&minus;</sup>:</strong> <strong>CaBr<sub>2</sub></strong></li>
        <li style="margin-bottom: 4px;"><strong>(ii) Al<sup>3+</sup> and CO<sub>3</sub><sup>2&minus;</sup>:</strong> <strong>Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub></strong></li>
        <li style="margin-bottom: 4px;"><strong>(iii) K<sup>+</sup> and SO<sub>4</sub><sup>2&minus;</sup>:</strong> <strong>K<sub>2</sub>SO<sub>4</sub></strong></li>
        <li style="margin-bottom: 0;"><strong>(iv) NH<sub>4</sub><sup>+</sup> and Cl<sup>&minus;</sup>:</strong> <strong>NH<sub>4</sub>Cl</strong></li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Which of the following, in Fig. 9.18, correctly represents Cl<sup>&minus;</sup> ion (Atomic number of chlorine = 17).</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Representation:</strong> The option showing an electron shell arrangement of <strong>2, 8, 8</strong>. A neutral chlorine atom has 17 electrons (2, 8, 7), so gaining 1 electron to become a Cl<sup>&minus;</sup> ion fills the valence shell to 8 electrons.</li>
    </ul>
</div>
`, image: `images/fig 9.18.png`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Determine the formula unit mass of the following substances.
    <br>(i) Ammonium nitrate (NH<sub>4</sub>NO<sub>3</sub>)
    <br>(ii) Phosphoric acid (H<sub>3</sub>PO<sub>4</sub>)
    <br>(iii) Sodium hydrogencarbonate (NaHCO<sub>3</sub>)</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Ammonium nitrate (NH<sub>4</sub>NO<sub>3</sub>):</strong> <strong>80 u</strong> &nbsp;&xrarr;&nbsp; (14 &times; 2) + (1 &times; 4) + (16 &times; 3) = 28 + 4 + 48.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Phosphoric acid (H<sub>3</sub>PO<sub>4</sub>):</strong> <strong>98 u</strong> &nbsp;&xrarr;&nbsp; (1 &times; 3) + 31 + (16 &times; 4) = 3 + 31 + 64.</li>
        <li style="margin-bottom: 0;"><strong>(iii) Sodium hydrogencarbonate (NaHCO<sub>3</sub>):</strong> <strong>84 u</strong> &nbsp;&xrarr;&nbsp; 23 + 1 + 12 + (16 &times; 3) = 23 + 1 + 12 + 48.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Write the formulae for the compounds formed by the reaction of:
    <br>(i) Magnesium and nitrogen
    <br>(ii) Lithium and nitrogen
    <br>(iii) Sodium and sulfur
    <br>(iv) Aluminium and oxygen</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Magnesium and nitrogen:</strong> <strong>Mg<sub>3</sub>N<sub>2</sub></strong></li>
        <li style="margin-bottom: 4px;"><strong>(ii) Lithium and nitrogen:</strong> <strong>Li<sub>3</sub>N</strong></li>
        <li style="margin-bottom: 4px;"><strong>(iii) Sodium and sulfur:</strong> <strong>Na<sub>2</sub>S</strong></li>
        <li style="margin-bottom: 0;"><strong>(iv) Aluminium and oxygen:</strong> <strong>Al<sub>2</sub>O<sub>3</sub></strong></li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Complete the Table 9.3 by writing the formulae of the compounds formed by the cations on the left and the anions at the top.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <table style="width: 100%; border-collapse: collapse; text-align: center; color: #444; font-size: 14px; font-family: Arial, sans-serif;">
        <thead>
            <tr style="background-color: #cfa670; color: white;">
                <th style="padding: 8px; border: 1px solid #cfa670;">Cations / Anions</th>
                <th style="padding: 8px; border: 1px solid #cfa670;">NO<sub>3</sub><sup>&minus;</sup></th>
                <th style="padding: 8px; border: 1px solid #cfa670;">SO<sub>4</sub><sup>2&minus;</sup></th>
                <th style="padding: 8px; border: 1px solid #cfa670;">PO<sub>4</sub><sup>3&minus;</sup></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #fff;">NH<sub>4</sub><sup>+</sup></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">NH<sub>4</sub>NO<sub>3</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub></td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #fff;">Li<sup>+</sup></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">LiNO<sub>3</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Li<sub>2</sub>SO<sub>4</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Li<sub>3</sub>PO<sub>4</sub></td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #fff;">Al<sup>3+</sup></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Al(NO<sub>3</sub>)<sub>3</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">AlPO<sub>4</sub></td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #fff;">Cu<sup>2+</sup></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Cu(NO<sub>3</sub>)<sub>2</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">CuSO<sub>4</sub></td>
                <td style="padding: 8px; border: 1px solid #e0e0e0; background-color: #fff;">Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></td>
            </tr>
        </tbody>
    </table>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">5.3 g of sodium carbonate and 6.0 g of acetic acid react to produce 2.2 g of carbon dioxide, 0.9 g of water, and 8.2 g of sodium acetate. Verify whether the law of conservation of mass is valid.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Mass of Reactants:</strong> 5.3 g (Sodium carbonate) + 6.0 g (Acetic acid) = <strong>11.3 g</strong></li>
        <li style="margin-bottom: 4px;"><strong>Mass of Products:</strong> 2.2 g (Carbon dioxide) + 0.9 g (Water) + 8.2 g (Sodium acetate) = <strong>11.3 g</strong></li>
        <li style="margin-bottom: 0;"><strong>Verification Conclusion:</strong> Because the total initial mass of the combined reactants equals the final mass of the accumulated products, the <strong>Law of Conservation of Mass is valid</strong>.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If a species has 11 protons, 12 neutrons and 10 electrons then:
    <br>(i) what is its atomic number and mass number?
    <br>(ii) is it neutral, a cation or an anion? Explain.
    <br>(iii) write its electronic configuration.
    <br>(iv) name the species.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Atomic Number & Mass Number:</strong> Atomic Number = <strong>11</strong> (defined by protons). Mass Number = 11 protons + 12 neutrons = <strong>23</strong>.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Electrical State:</strong> It is a <strong>cation</strong>. It has 11 positive protons and only 10 negative electrons, leaving a net positive charge of +1.</li>
        <li style="margin-bottom: 4px;"><strong>(iii) Electronic Configuration:</strong> <strong>2, 8</strong> (distributed across the K and L shells for 10 total electrons).</li>
        <li style="margin-bottom: 0;"><strong>(iv) Name of the Species:</strong> <strong>Sodium ion (Na<sup>+</sup>)</strong>.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Two elements, A and B, have the following configurations —
    <br>A: 2, 8, 5 
    <br>B: 2, 8, 7
    <br>(i) Which element is more reactive?
    <br>(ii) Will A and B form ionic or covalent bonds when they combine? Explain using electron transfer or sharing.
    <br>(iii) Predict the formula of the compound they would form.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Most Reactive Element:</strong> Element <strong>B</strong> is more reactive because it only needs to gain 1 single electron to complete its stable outer octet shell, whereas element A requires 3 electrons.</li>
        <li style="margin-bottom: 4px;"><strong>(ii) Type of Bonding:</strong> They will form <strong>covalent bonds</strong>. Both A and B are non-metals requiring electrons to complete their octets; they will achieve stability by mutually sharing electron pairs instead of transferring them.</li>
        <li style="margin-bottom: 0;"><strong>(iii) Chemical Formula:</strong> Element A has a valency of 3, and element B has a valency of 1. Criss-crossing their respective valencies yields the formula <strong>AB<sub>3</sub></strong>.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Assertion (A): Copper sulfate conducts electricity in the molten state but not in the solid state.
    <br>Reason (R): Copper and sulfate ions are fixed in the lattice in molten state, while in solid state they can move freely.
    <br>Choose the correct option:
    <br>(i) Both A and R are true, and R is the correct explanation of A.
    <br>(ii) Both A and R are true, but R is not the correct explanation of A.
    <br>(iii) A is true, but R is false.
    <br>(iv) A is false, but R is true.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> <strong>(iii) A is true, but R is false</strong>. The assertion is completely correct because ionic compounds conduct electricity only when ions are free to move. However, the reason statement is false because ions can move freely in the molten state, whereas they are rigidly locked inside the crystal lattice in the solid state.</li>
    </ul>
</div>
`},
                {q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The species <sup>27</sup>Al, <sup>80</sup>Br<sup>&minus;</sup> and <sup>201</sup>Hg<sup>2+</sup> have 13, 35 and 80 protons, respectively. How many electrons and neutrons do they have?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>For <sup>27</sup>Al:</strong> Neutrons = 27 &minus; 13 = <strong>14 neutrons</strong>. Electrons = <strong>13 electrons</strong> (neutral atom).</li>
        <li style="margin-bottom: 4px;"><strong>For <sup>80</sup>Br<sup>&minus;</sup>:</strong> Neutrons = 80 &minus; 35 = <strong>45 neutrons</strong>. Electrons = 35 + 1 = <strong>36 electrons</strong> (gained 1 negative electron charge).</li>
        <li style="margin-bottom: 0;"><strong>For <sup>201</sup>Hg<sup>2+</sup>:</strong> Neutrons = 201 &minus; 80 = <strong>121 neutrons</strong>. Electrons = 80 &minus; 2 = <strong>78 electrons</strong> (lost 2 valence electrons).</li>
    </ul>
</div>
`},

            ] },
            { name: "Chapter 10: Sound Waves: Characteristics and Applications", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Which observation best supports the idea that sound is a mechanical wave?
    <br>(i) Sound shows reflection
    <br>(ii) Sound needs a medium to propagate
    <br>(iii) Sound has frequency
    <br>(iv) Sound carries energy</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (ii) Sound needs a medium to propagate</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">For a sound wave propagating in a medium, increasing its frequency will increase its
    <br>(i) wavelength
    <br>(ii) speed
    <br>(iii) number of compressions per second
    <br>(iv) time period</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (iii) number of compressions per second</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If 20 compressions pass a point in 4 seconds, the frequency is
    <br>(i) 80 Hz
    <br>(ii) 5 Hz
    <br>(iii) 10 Hz
    <br>(iv) 0.2 Hz</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (ii) 5 Hz</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">In a room, the reflected sound reaches the ear 0.05 s after its production. Will it produce an echo or reverberation? Justify your answer.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Result:</strong> Reverberation. The time gap of 0.05 s is less than the 0.1 s required by the human ear to distinguish a distinct echo.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Graphs representing two sound waves are given in Fig. 10.30. If the scales on the X and Y axes of the two graphs are the same, which of the two sound waves has (i) greater wavelength, and (ii) smaller amplitude?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>(i) Greater wavelength:</strong> Wave (a)</li>
        <li style="margin-bottom: 0;"><strong>(ii) Smaller amplitude:</strong> Wave (a)</li>
    </ul>
</div>
`, image: `images/fig graph XD.png ` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The sound waves emitted by three sources A, B and C are represented in Fig. 10.31. If the frequency of A is maximum and C is minimum, identify the corresponding curves, and mark A, B and C on them.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Curve A (Maximum Frequency):</strong> Red curve</li>
        <li style="margin-bottom: 4px;"><strong>Curve B:</strong> Green curve</li>
        <li style="margin-bottom: 0;"><strong>Curve C (Minimum Frequency):</strong> Blue curve</li>
    </ul>
</div>
`, image: `images/bruh.jpg` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Draw a graph to represent a sound wave for which the density amplitude is 3 units and wavelength is 4 cm.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Graph details:</strong> Plot a standard wave curve where the peak height equals 3 units on the vertical density axis, and one full wave cycle spans 4 cm horizontally.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">In a movie, while showing the explosion of a spacecraft in space, a flash of light is shown along with sound at the same time. What are the errors in this depiction?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Error 1:</strong> Space is a vacuum, so sound cannot travel and no explosion audio should be heard.</li>
        <li style="margin-bottom: 0;"><strong>Error 2:</strong> Light travels much faster than sound, so the visual flash would arrive way before any sound.</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A source produces a sound wave of wavelength 3.44 m. If the wave travels with a speed of 344 m s<sup>–1</sup> find its time period.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Frequency:</strong> 344 m s<sup>&minus;1</sup> / 3.44 m = 100 Hz</li>
        <li style="margin-bottom: 0;"><strong>Time Period:</strong> 1 / 100 Hz = 0.01 s</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A ship searching for a sunken ship sent a sonar signal and detected an echo after 5 s. If ultrasonic wave travels at 1525 m s<sup>–1</sup> in seawater, approximately how far down in the ocean is the wreckage of the sunken ship located?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>One-way time:</strong> 5 s / 2 = 2.5 s</li>
        <li style="margin-bottom: 0;"><strong>Distance (Depth):</strong> 1525 m s<sup>&minus;1</sup> &times; 2.5 s = 3812.5 m</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A vehicle is fitted with an ultrasonic distance sensor as part of parking assistance system which provides echolocation, while the driver is reversing the vehicle. It emits ultrasonic wave (about 40 kHz) which is reflected by the obstacle. When the warning beep starts sounding at a distance of 1.2 m from the obstacle, how much time is taken by ultrasonic wave to travel to the obstacle and come back? Assume the speed of ultrasonic wave in air to be 345 m s<sup>–1</sup>.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Total roundtrip distance:</strong> 2 &times; 1.2 m = 2.4 m</li>
        <li style="margin-bottom: 0;"><strong>Total roundtrip time:</strong> 2.4 m / 345 m s<sup>&minus;1</sup> = 0.00696 s</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The speed of sound in air is about 331 m s<sup>–1</sup> at 0 ºC and nearly 344 m s<sup>–1</sup> at 22 ºC. Roughly how much extra time will the sound of thunder take to travel a distance of 1720 m, if the air temperature changes from 22 ºC to 0 ºC? Assume that all other conditions remain unchanged.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Time at 22 ºC:</strong> 1720 m / 344 m s<sup>&minus;1</sup> = 5 s</li>
        <li style="margin-bottom: 4px;"><strong>Time at 0 ºC:</strong> 1720 m / 331 m s<sup>&minus;1</sup> = 5.196 s</li>
        <li style="margin-bottom: 0;"><strong>Extra time:</strong> 5.196 s &minus; 5 s = 0.196 s</li>
    </ul>
</div>
`, },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The variation of density of medium for a sound wave propagating with a speed of 340 m s<sup>–1</sup> is shown in Fig. 10.32. Calculate the wavelength and frequency of the sound wave.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Wavelength:</strong> 8 cm / 2 = 4 cm = 0.04 m</li>
        <li style="margin-bottom: 0;"><strong>Frequency:</strong> 340 m s<sup>&minus;1</sup> / 0.04 m = 8500 Hz</li>
    </ul>
</div>
`, image: `images/tf.png` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">The graphical representation of two sound waves A and B propagating at the same speed of 345 m s<sup>–1</sup> is shown in Fig. 10.33. What is the wavelength of each of them? Also, calculate their frequencies.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 4px;"><strong>Wave A:</strong> Wavelength = 2.5 cm = 0.025 m; Frequency = 345 m s<sup>&minus;1</sup> / 0.025 m = 13800 Hz</li>
        <li style="margin-bottom: 0;"><strong>Wave B:</strong> Wavelength = 5.0 cm = 0.05 m; Frequency = 345 m s<sup>&minus;1</sup> / 0.05 m = 6900 Hz</li>
    </ul>
</div>
`, image: `images/xd.jpg` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Two identical sound sources are placed at A and B — one in air and one submerged in water (Fig. 10.34). Both produce sounds at the same time, which travel horizontally to the vertical side of the cliff and come back. If the time taken by the sound to return to A is 4.5 times than that of B, what is the ratio between the speeds of sound in air and water?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Ratio of speed (Air : Water):</strong> 1 : 4.5 (or 2 : 9)</li>
    </ul>
</div>
`, },
            ] },

            { name: "Chapter 11: Reproduction: How Life Continues", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A flower's anthers are removed before it matures. Later, pollen from another plant of the same species is dusted onto its stigma and seeds are produced. Which process has been ensured here?<br>
    (i) Self-pollination<br>
    (ii) Cross-pollination<br>
    (iii) Fertilisation<br>
    (iv) Tissue culture</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (ii) Cross-pollination</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Removing the anthers prevents the flower from self-pollinating. Introducing pollen from a separate plant of the same species ensures cross-pollination.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Arrange the following stages of sexual reproduction in plants in the correct order:<br>
    (i) Pollen germination on stigma<br>
    (ii) Fertilisation<br>
    (iii) Pollination<br>
    (iv) Formation of zygote</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Order:</strong> (iii) &rarr; (i) &rarr; (ii) &rarr; (iv)</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> First, pollen is transferred to the stigma (Pollination). The pollen then grows a tube down the style (Pollen germination on stigma). This tube delivers the male gamete to fuse with the egg cell (Fertilisation), which results in the initial single cell of the new generation (Formation of zygote).</li>
    </ul>
</div>
`, image: `images/w.png` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Assertion (A): The zygote formed after fertilisation immediately attaches to the uterus wall.<br>
    Reason (R): The uterus wall is always prepared to receive the zygote.<br>
    (i) Both A and R are true, and R is the correct explanation of A.<br>
    (ii) Both A and R are true, but R is not the correct explanation of A.<br>
    (iii) A is true, but R is false.<br>
    (iv) A is false, but R is true.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (iv) A is false, but R is true.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Assertion (A) is false because the zygote divides into an embryo while traveling down the oviduct for a few days before it implants in the uterus wall. Reason (R) is true because the inner lining of the uterus thickens and enriches itself with blood vessels during every menstrual cycle to prepare for a potential zygote.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Why does asexual reproduction produce offsprings that are genetically identical to the parent?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Core Reason:</strong> It involves only a single parent and uses mitosis, ensuring no mixing of genetic traits or gamete fusion.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Since there is only one parent, there is no second source of DNA to combine or mix traits. The cell division process responsible for this growth is mitosis, which replicates the parent's genetic material exactly, resulting in clones.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Explain why the menstrual cycle stops during pregnancy.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Biological Mechanism:</strong> Persistent high levels of pregnancy hormones keep the uterine lining intact to support the developing embryo.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Once a zygote implants, the body releases specific pregnancy hormones. These hormones maintain the thick, nutrient-rich inner lining of the uterus to feed the growing baby. Because this lining is actively being preserved, it does not break down and shed, which pauses the regular monthly period.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Why are flowers that bloom at night white or light in colour as compared to flowers that bloom during the day?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Evolutionary Adaptation:</strong> White or pale colors reflect moonlight and starlight efficiently, making them visible to night-active pollinators.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Bright pigments like red or yellow are difficult to see in complete darkness. White or light-colored petals reflect ambient night light, making them pop out against dark green foliage. These flowers also rely heavily on strong, aromatic fragrances to help nocturnal insects find them by smell.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Why do vegetatively propagated plants tend to be more vulnerable to diseases than sexually reproduced plants?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Genetic Reason:</strong> Vegetatively propagated plants are exact genetic clones of the single parent plant and lack variation.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Sexual reproduction mixes traits from two parents, creating unique gene combinations that might resist a disease. Because vegetative propagation uses pieces of the same plant, every offspring inherits the exact same vulnerabilities. If a pest or virus breaks through the defenses of one plant, it can effortlessly wipe out the entire crop of clones.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If all flowers in a type of plant were only capable of self-pollination, how would it affect the genetic diversity over several generations? Explain.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Long-term Trend:</strong> Genetic diversity would decrease significantly because the same genetic material is recycled repeatedly within the same plant line.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Self-pollination means the plant keeps fertilizing itself. Without incoming pollen from an outside source, there is no way to introduce fresh genetic traits. Over time, this locks in specific genes, eliminates variation, and makes it hard for the species to adapt to new environments.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A farmer wants to produce a large number of genetically identical plants quickly. Suggest suitable reproduction methods and explain why they are effective.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Recommended Methods:</strong> Stem cutting, grafting, layering, or using laboratory tissue culture techniques.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> These vegetative propagation methods allow the farmer to bypass the slower process of growing from seeds. They utilize mitosis to regenerate a full plant from an existing shoot or stem. This guarantees the new plants mature quickly while retaining the high-yield or desirable qualities of the parent.</li>
    </ul>
</div>

` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Suresh prepares slides with pollen grains in different sugar concentrations (0%, 2.5%, 5%, 7.5%, 10%) to study the germination of pollen.<br>
    (i) What are the different hypotheses which can be tested using this set-up?<br>
    (ii) What parameters should be kept the same in this set-up?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px; list-style-type: disc;"><strong>(i) Hypotheses to Test:</strong> "Pollen grains require an optimal sugar concentration to sprout pollen tubes successfully" or "An extreme sugar concentration can slow down or completely prevent germination."</li>
        <li style="margin-bottom: 10px; list-style-type: disc;"><strong>(ii) Constant Parameters:</strong> The plant species providing the pollen, the incubation temperature, the volume of liquid in each drop, and the total observation period.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Sugar provides nutrients and creates an osmotic pressure that signals the pollen grain to grow its tube. By testing different percentages, Suresh can find the exact value where germination peaks. Keeping variables like temperature constant ensures that sugar concentration is the only factor affecting the growth.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Look at the picture given below and think in line with the given prompts and find out which type(s) of pollination might have been followed in these flowers<br>
    Tomato: Stamens cover the stigma.<br>
    Wheat: Flowers open after pollination.<br>
    Papaya: Male and female flowers are often borne on different papaya trees.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 12px; list-style-type: none; margin-left: -20px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.9em; text-align: left; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <thead>
                    <tr style="background-color: #f5f0e6; border-bottom: 2px solid #cfa670;">
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Plant Variety</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Structural Features / Prompts</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Pollination Method Determined</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Tomato</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Stamens physically cover the stigma.</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #27ae60; font-weight: bold;">Self-pollination</td>
                    </tr>
                    <tr style="background-color: #faf8f5;">
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Wheat</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Flowers only open up after pollination concludes.</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #27ae60; font-weight: bold;">Self-pollination</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Papaya</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Male and female flowers grow on completely separate trees.</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #d35400; font-weight: bold;">Cross-pollination</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li style="margin-bottom: 5px;"><strong>Tomato:</strong> Exhibits <strong>Self-pollination</strong>. Because the stamens build an enclosed shell directly surrounding the stigma, the pollen lands right on its own female organs.</li>
        <li style="margin-bottom: 5px;"><strong>Wheat:</strong> Exhibits <strong>Self-pollination</strong>. Since the flowers remain physically closed until pollination concludes, outside pollen is blocked, forcing self-pollination.</li>
        <li style="margin-bottom: 0;"><strong>Papaya:</strong> Must undergo <strong>Cross-pollination</strong>. Because the male and female organs are located on completely separate trees, wind or insects are required to carry the pollen over.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">12. In the lower Himalayan region of northern India, apples are an important cash crop that contribute significantly to farmer's livelihoods. The fruit yield in apple cultivation is declining continuously, associated with climate change and a significant decline in the population of natural pollinators. A researcher-farmer group set up two experimental apple orchards at two distinct locations: Places A and B. In apple orchards at Place A, they allowed natural pollinators to pollinate the flowers of the apple. In apple orchards at Place B, they applied mixed farming techniques of beekeeping. Along with honey, the farmer yielded apples. The yield of apples is depicted in Fig. 11.24, in terms of fruit setting (number of fruits/the total number of corresponding fruit-bearing branches) and fruit drop (premature falling of developing fruits) in the two types of experimental places of apple orchards.<br>
    (i) What are the hypotheses the researcher-farmers group has thought of for this investigation?<br>
    (ii) What are the different parameters in the experiment?<br>
    (iii) Compare and analyse the data of two experimental orchards Places A and B, in terms of high yields of apple fruits.<br>
    (iv) Based on your analysis, what do you infer from the data?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 12px; list-style-type: none; margin-left: -20px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.9em; text-align: left; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <thead>
                    <tr style="background-color: #f5f0e6; border-bottom: 2px solid #cfa670;">
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Experimental Location</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Pollination Method</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Fruit Setting Rate</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Premature Fruit Drop</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Place A</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Natural Pollinators Only</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #c0392b; font-weight: bold;">26%</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #c0392b;">35%</td>
                    </tr>
                    <tr style="background-color: #faf8f5;">
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Place B</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Managed Beekeeping (Mixed Farming)</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #27ae60; font-weight: bold;">40%</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; color: #27ae60;">8%</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(i) Tested Hypotheses:</strong> Setting up managed beehives within an orchard can overcome the decline in wild pollinators, boosting successful fruit setting and reducing premature fruit dropping.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(ii) Tracked Parameters:</strong>
            <br>&bull; <em>Independent Parameter:</em> The choice of pollination management (wild local pollinators vs. introduced bee colonies).
            <br>&bull; <em>Dependent Parameters:</em> The percentage of successful fruit setting and the percentage of premature fruit drop.
        </li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(iii) Data Comparison:</strong> As shown in the structured table above, Place B hit a fruit set of 40% compared to Place A's 26%. Furthermore, Place B reduced premature fruit dropping down to just 8%, whereas Place A lost 35% of its developing fruit early.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><strong>(iv) Final Inference:</strong> Integrating beekeeping into orchards significantly improves fruit yield. It provides an effective way to protect crops from pollinator loss while giving farmers an extra source of income from honey.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">13. A student claims, "In humans, ovulation always happens on day 14 of the menstrual cycle". Critically examine this claim and state whether the claim is correct or not. Give at least two reasons for your answer.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Scientific Critique:</strong> The student's claim is <strong>incorrect</strong> because day 14 is just a biological average, not a rigid rule for every individual.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Reason 1: Variable Cycle Lengths:</em> The 14th-day milestone assumes a perfect 28-day model. Healthy cycles frequently vary between 21 to 35 days, which naturally shifts the actual day of egg release forward or backward.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Reason 2: Hormonal Sensitivity:</em> The delicate hormonal balance that triggers ovulation is sensitive to external disruptions. Common everyday variables like emotional stress, sudden illness, or changes in diet can delay or accelerate the cycle.</li>
    </ul>
</div>
` },

            ] },
            { name: "Chapter 12: Patterns in Life: Diversity and Classification", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Meena and Hari observed an animal in their garden. Hari called it an insect while Meena said it was an earthworm. Choose the correct option which confirms that it is an insect.<br>
    (i) Bilateral symmetrical body<br>
    (ii) Body with jointed legs<br>
    (iii) Cylindrical body<br>
    (iv) Body with little segmentation</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (ii) Body with jointed legs</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> The presence of jointed appendages is the defining characteristic feature of phylum Arthropoda (insects), whereas earthworms belong to phylum Annelida and have cylindrical, segmented bodies without jointed legs.</li>
    </ul>
</div>
` },

                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Sponges represent one of the simplest animal body plans. Their bodies lack true tissues and organs. Which feature of sponge cells supports its classification under the animal kingdom?<br>
    (i) Absence of mitochondria<br>
    (ii) Ability to photosynthesise<br>
    (iii) Presence of a cell membrane<br>
    (iv) Presence of a cell wall</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (iii) Presence of a cell membrane</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Sponges are multicellular heterotrophs made of eukaryotic cells that lack a cell wall, bound instead by a cell membrane. Options (ii) and (iv) describe plants, while option (i) is incorrect as animal cells require mitochondria for energy.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Observe two different animals in your immediate environment. What features help you distinguish between them? How do these features help place them into different groups?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Distinguishing Features:</strong> Presence or absence of a backbone, body covering, and locomotion mechanism.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> For example, if we compare a butterfly and a bird, the butterfly has jointed legs and an exoskeleton, putting it under invertebrates (Arthropoda). The bird possesses feathers, hollow bones, and an internal backbone, which classifies it as a vertebrate (Aves).</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">How would a scientist justify choosing cellular organisation as a more fundamental characteristic for the basis of classification rather than the presence of xylem and phloem?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Justification:</strong> Cellular organisation applies universally to all living life forms, whereas xylem and phloem are specialized tissue structures found only in a specific subsection of multi-cellular plants.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> A classification system looks at the broadest, most foundational layers first. Determining whether a cell has a true nucleus (eukaryote) or is single-celled splits all life perfectly. Vascular tissues like xylem and phloem appear much further down the line as an evolutionary step within the plant kingdom alone.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">You find an unlabelled slide of a single-celled organism that has a well-defined nucleus and multiple cilia. Which group would it most likely belong to? Give reasons.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Assigned Group:</strong> Kingdom Protista</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Reasons:</em> By definition, Whittaker's system places all single-celled eukaryotic organisms under Protista. The presence of a "well-defined nucleus" confirms it is a eukaryote rather than a prokaryote (Monera), and structures like cilia are typical locomotion tools used by aquatic protists like Paramecium.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">How does the diversity of organisms contribute to the balance and stability of an ecosystem?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Ecological Mechanism:</strong> A diverse species pool builds complex food webs, ensures efficient nutrient recycling, and establishes multi-layered environmental defenses.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Every functional group handles a unique task: algae release oxygen, fungi cycle raw soil nutrients, and animal vectors pollinate flora. If an ecosystem is rich in biodiversity, it features alternative pathways for energy flow, meaning it can easily handle the loss or decline of a single species without collapsing.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If all unicellular organisms were grouped into a single kingdom, what problems would arise?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Resulting Problems:</strong> It would mix radically different cell architectures (prokaryotes and eukaryotes) and contradictory survival strategies into an unorganized cluster.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Forcing primitive bacteria (which lack a true membrane-bound nucleus) into the same taxonomic bucket as highly complex single-celled protozoans or yeasts obscures their deep evolutionary divergence and defeats the purpose of logical grouping.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Viruses were studied in earlier classes. Why are they not placed in any of the five kingdoms? Give reasons.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Core Taxonomic Reason:</strong> Viruses lack cellular organization and remain entirely inert outside of a living biological host.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Reasons:</em> Whittaker's five-kingdom classification criteria require classified organisms to possess functional cellular units. Because viruses are acellular particles made simply of genetic strings inside a protein wrap, and lack an independent metabolic engine, they sit on the borderline between the living and non-living worlds.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If you were asked to revise the five kingdom classification, would you create a separate category for viruses or keep them outside the system? Justify your answer and explain what this indicates about the evolving nature of scientific classification.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Proposed Revision & Justification:</strong> They should remain outside or be explicitly categorized under a non-cellular domain. Since classification systems track cellular lineages and metabolic networks, adding acellular packets into cellular kingdoms skews the criteria.</li>
        <li style="margin-bottom: 0;"><strong>Evolving Nature of Science:</strong> This dilemma demonstrates that classification is an ongoing process of reasoning. As new genetic tech exposes hidden variations, systems must adjust to fit real biological truths rather than sticking to static buckets.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Viruses contain genetic material like living organisms but lack cellular organisation. Which features prevent them from fitting into the five kingdom system? What does this tell us about the limitations of classification systems?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Excluding Features:</strong> Acellular nature, lack of independent cellular organelles, absent metabolic machinery, and inability to replicate outside a host.</li>
        <li style="margin-bottom: 0;"><strong>System Limitations:</strong> This shows that human-made classification models use rigid structural assumptions that can fail when dealing with borderline, non-standard biological entities.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Both pteridophytes and bryophytes lack flowers and seeds, yet they are placed in different groups. Explain this classification using their key features.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Bryophytes:</strong> Lack vascular tissues (xylem/phloem) and possess an undifferentiated or weakly differentiated body using root-like rhizoids instead of true vegetative organs.</li>
        <li style="margin-bottom: 0;"><strong>Pteridophytes:</strong> Possess fully developed vascular transport pipelines alongside differentiated true roots, stems, and leaves, placing them an evolutionary tier above bryophytes.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">In the classification hierarchy, which group — class or genus — has fewer members but more features in common? Explain your answer.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Group:</strong> Genus</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> The taxonomic hierarchy narrows down from broad categories at the top to specific units at the base. A class is a high-level bucket gathering multiple varied orders together, whereas a genus sits near the base, grouping only closely related species that share a tight web of genetic similarities.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A scientist discovers a new organism with the characteristic features of locomotion and autotrophic nutrition. Which character(s) would help the scientist identify the organism belonging to Protista according to the five kingdom classification?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Key Identification Traits:</strong> Checking if the organism is unicellular and eukaryotic (possessing a true, membrane-bound nucleus).</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Locomotion and autotrophic capability can appear in plants or bacteria. Confirming the cell structure is a single-celled eukaryote rules out multicellular plants (Plantae) and prokaryotic blue-green algae (Monera), pointing to Protista (like Euglena).</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">A researcher identified a unicellular eukaryotic organism as fungi. What identification key would you suggest according to the five kingdom classification to keep a unicellular organism in the Kingdom Fungi?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Suggested Identification Key:</strong> Verify the presence of a cell wall composed of chitin alongside an absorptive heterotrophic mode of nutrition.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> While most single-celled eukaryotes land in Protista, if an organism like yeast features a structural chitin cell wall and absorbs organic nutrients from its surroundings instead of ingesting them, it belongs in Kingdom Fungi.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">During a long-term ecological study, students examined organisms collected from three different environments — a freshwater pond, damp soil near decaying logs and the digestive tract of animals. Instead of naming organisms directly, scientists recorded only structural, cellular and nutritional features as given in the table below.<br><br>
    Based on the case study, answer the following questions —<br>
    (i) Identify one organism that clearly belongs to the Kingdom Fungi. State one observation that supports your answer.<br>
    (ii) Which organism would be placed in the Kingdom Monera? Mention one characteristic that justifies this placement.<br>
    (iii) Organisms R and Q are both eukaryotic, yet they are placed in different kingdoms. Analyse the criteria that separate them.<br>
    (iv) Explain why organism S cannot be classified using the mode of nutrition alone.<br>
    (v) Organism T does not fit into any of the five kingdoms. Which fundamental characteristic used in classification does it lack and what does this reveal about the limitations of classification systems?<br>
    (vi) If classification were based only on habitat, which organisms might be incorrectly grouped together? Explain the scientific consequences of such a classification.<br>
    (vii) Imagine scientists discover a new organism that is multicellular, eukaryotic, lacks chlorophyll and absorbs nutrients from a host externally. Should it be placed under fungi or animalia? Justify your reasoning using classification criteria.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 12px; list-style-type: none; margin-left: -20px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.9em; text-align: left; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <thead>
                    <tr style="background-color: #f5f0e6; border-bottom: 2px solid #cfa670;">
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Organisms</th>
                        <th style="padding: 8px; border: 1px solid #e0e0e0; color: #333;">Key Observations / Criteria Recorded</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">P</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Microscopic; no true nucleus; rigid cell covering; survives high salinity and temperature</td>
                    </tr>
                    <tr style="background-color: #faf8f5;">
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">Q</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Multicellular; filamentous body; cell wall present; no chlorophyll; grows on dead organic matter</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">R</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Unicellular; true nucleus; contractile vacuole present; moves using flagella; shows photosynthesis in light but heterotrophic in the absence of light</td>
                    </tr>
                    <tr style="background-color: #faf8f5;">
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">S</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Multicellular; well-differentiated tissues; backbone present; aquatic respiration during early life stage</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #e0e0e0; font-weight: bold;">T</td>
                        <td style="padding: 8px; border: 1px solid #e0e0e0;">Acellular; contains genetic material; remains inactive outside a host cell</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(i) Fungi Identification:</strong> Organism <strong>Q</strong> belongs to Fungi. Key supporting observations include its multicellular filamentous body, presence of a cell wall, lack of chlorophyll, and saprophytic growth on dead matter.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(ii) Monera Identification:</strong> Organism <strong>P</strong> belongs to Monera. The absolute lack of a true nucleus confirms its prokaryotic nature.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(iii) Separation Criteria (R vs Q):</strong> Organism R is unicellular and an autotroph/heterotroph mix, placing it in Protista. Organism Q is multicellular and purely saprophytic, separating it into Fungi.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(iv) S Classification Challenge:</strong> Organism S is a heterotroph, a trait shared by fungi, animals, and some bacteria. Mode of nutrition alone cannot distinguish its complex tissue systems and backbone.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(v) T Exclusion:</strong> Organism T lacks cellular organization. This highlights that standard classification rules fail when mapping acellular structures.</li>
        <li style="margin-bottom: 8px; list-style-type: none; margin-left: -20px;"><strong>(vi) Habitat Errors:</strong> Organisms P, R, and the larval stage of S could be grouped together as "aquatic". This creates unscientific groups that ignore structural differences and evolutionary history.</li>
        <li style="margin-bottom: 0; list-style-type: none; margin-left: -20px;"><strong>(vii) New Organism Placement:</strong> It belongs under <strong>Fungi</strong>. Its multicellular, eukaryotic nature, lack of chlorophyll, and absorptive lifestyle match fungal features rather than the ingestive nature of Animalia.</li>
    </ul>
</div>
` },
                
                
            ]
         },
            { name: "Chapter 13: Earth as a System: Energy, Matter, and Life", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Choose the most appropriate option to describe the role of biogeochemical cycles in an ecosystem.<br>
    (i) To provide food directly to all organisms.<br>
    (ii) To recycle essential nutrients between biotic and abiotic components.<br>
    (iii) To create new elements for use by living things.<br>
    (iv) To remove pollutants and toxins from the organism.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (ii) To recycle essential nutrients between biotic and abiotic components.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Biogeochemical cycles circulate finite natural resources like carbon, nitrogen, oxygen, and water through the living (biotic) and non-living (abiotic) elements of the planetary system, ensuring they remain constantly accessible to sustain life.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Which of the following is primarily responsible for warming of the Earth?<br>
    (i) Solar radiation is immediately absorbed by carbon dioxide, which then releases it as heat.<br>
    (ii) The atmosphere's tiny particles absorb incoming solar radiation.<br>
    (iii) The Earth's surface absorbs solar radiation, which is then re-radiated and trapped by greenhouse gases.<br>
    (iv) The Earth's environment is heated only by the solar radiation reflected by the clouds.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Correct Option:</strong> (iii) The Earth's surface absorbs solar radiation, which is then re-radiated and trapped by greenhouse gases.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Explanation:</em> Incoming shortwave solar radiation passes through the clear atmosphere and is absorbed by the surface. The warmed ground then re-radiates this thermal energy as longwave infrared radiation, which is intercepted and retained by greenhouse gases like carbon dioxide, methane, and water vapour.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Explain how climate change affects the water cycle. Illustrate with examples.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Core Impact:</strong> Rising global atmospheric temperatures accelerate evaporation and expand the capacity of the air to store moisture, leading to severe disruptions in precipitation and runoff trends.</li>
        <li style="margin-bottom: 5px;"><strong>Example 1 (Intensified Monsoons & Droughts):</strong> Higher thermal energy increases water vapour storage, fueling cloud bursts and flooding rains in specific regions (such as an unpredictable, intense southwest monsoon in India), while leaving other inland zones trapped in severe droughts.</li>
        <li style="margin-bottom: 0;"><strong>Example 2 (Glacial Melt & Groundwater Loss):</strong> Rising temperatures accelerate the melting of critical mountain glaciers, temporarily bloating rivers but lowering dry-season flows in the long run. Additionally, sudden heavy downpours generate rapid surface runoff that leads to soil erosion instead of trickling down to recharge vital underground aquifers.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Describe how albedo affects the Earth's surface temperature and its climate.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Albedo Function:</strong> Albedo measures the fraction of incoming solar radiation that a surface reflects back out into space. It directly dictates how much thermal energy the planet retains.</li>
        <li style="margin-bottom: 5px;"><strong>High Albedo Impact:</strong> Light-colored surfaces like snow (0.80–0.90) and ice bounce most sunlight back, keeping polar areas cold. However, when global warming melts this ice, it reveals dark ocean water below.</li>
        <li style="margin-bottom: 0;"><strong>Low Albedo Impact:</strong> Dark surfaces like open oceans or black soils have low albedo values. They absorb the vast majority of incoming solar rays and convert them to heat. This creates a warming loop: less ice leads to more absorption, raising local temperatures and accelerating further climate shifts.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">How are mountain and valley breezes formed? Suppose there are two mountains, one covered with grass and another covered with barren rocks; would the temperature of the two mountain breezes be different? If so, how?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Formation Process:</strong> During the day, mountain slopes heat up quickly under sunlight, causing the air over them to rise and drawing cooler air up from the valley floor as a **valley breeze**. At night, the slopes radiate heat away rapidly, making the air cold and dense so it sinks down into the valley as a **mountain breeze**.</li>
        <li style="margin-bottom: 5px;"><strong>Breeze Variation:</strong> Yes, the mountain breeze coming off the barren rock mountain will be noticeably different than the one from the grass-covered mountain.</li>
        <li style="margin-bottom: 0;"><strong>Thermal Contrast:</strong> Barren rock has a low albedo and high thermal mass, meaning it absorbs a massive amount of solar energy during the day and re-radiates it intensely at night. Grass surfaces stay significantly cooler due to vegetation shade and moisture loss from plant transpiration. As a result, the nighttime breeze moving down the barren rock mountain will start warmer and transfer more re-radiated heat down into the valley floor.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">You have witnessed weather phenomena, such as winds, storms, rainfall, etc. Which atmospheric layer is mainly responsible for such phenomena and what is the primary reason for its occurrence?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Responsible Layer:</strong> The Troposphere (extending from ground level up to roughly 12 km).</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Primary Reason:</em> The troposphere is heated from the ground up by the Earth's surface, causing temperature to drop steadily with altitude (~6.5°C/km). This vertical temperature difference forces warm, moist air to rise and cold air to sink, driving convection currents, storm formations, and active cloud precipitation.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Explain the processes involved in the nitrogen cycle. How would life on Earth be affected if nitrogen were not cycled?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Cycle Processes:</strong> 
            <br>&bull; <em>Fixation:</em> Bacteria like Rhizobium convert unreactive atmospheric N<sub>2</sub> into ammonia.
            <br>&bull; <em>Nitrification:</em> Soil microbes turn ammonia into nitrites and usable nitrates.
            <br>&bull; <em>Assimilation:</em> Plants absorb these nitrates to build vital biological proteins.
            <br>&bull; <em>Ammonification:</em> Decomposers break down dead matter, returning ammonia to the soil.
            <br>&bull; <em>Denitrification:</em> Specific bacteria convert excess nitrates back into N<sub>2</sub> gas.
        </li>
        <li style="margin-bottom: 0;"><strong>Impact of Cycle Failure:</strong> If this loop stopped, structural nitrogen would remain locked in dead organic waste or stay trapped as unreactive gas in the atmosphere. Plants would be unable to absorb nutrients, halting the production of essential amino acids, proteins, and DNA across all trophic layers and triggering a total crash of global food webs.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">What are the impacts of deforestation on the Earth's oxygen and carbon cycles? What are the other consequences of deforestation?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Impact on Cycles:</strong> Stripping away large forest systems reduces photosynthesis, which cuts down on global oxygen generation and slows the removal of CO<sub>2</sub> from the air. Burning or leaving cut trees to decay releases large amounts of stored carbon back into the atmosphere, directly altering the greenhouse balance.</li>
        <li style="margin-bottom: 0;"><strong>Other Consequences:</strong> Deforestation reduces local plant transpiration, which can cause regional rainfall to decline and disrupt the water cycle. It alters the land's surface albedo, and removes the root networks that hold topsoil together, leading to severe soil erosion and widespread habitat loss across the biosphere.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Explain with suitable diagram the path that carbon takes to go back to the atmosphere. You may start from plants using CO₂ from the atmosphere.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Carbon Pathways:</strong> Plants first absorb CO<sub>2</sub> from the atmosphere to manufacture sugars through photosynthesis. This carbon then takes three main paths back into the air:</li>
        <li style="margin-bottom: 5px; list-style-type: circle;"><strong>Respiration:</strong> Both the plants and the consumers that eat them break down these sugars for energy, directly breathing CO<sub>2</sub> back into the air.</li>
        <li style="margin-bottom: 5px; list-style-type: circle;"><strong>Decomposition:</strong> When these organisms die, micro-decomposers break down their remains, releasing carbon back into the atmosphere.</li>
        <li style="margin-bottom: 0; list-style-type: circle;"><strong>Combustion:</strong> Organic matter buried over millions of years turns into fossil fuels (coal, oil, gas). When humans extract and burn these fuels for industrial energy, that stored carbon is released back into the atmosphere on a very short time scale.</li>
    </ul>
</div>
`, image:`images/yay.png` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Why is an excess of CO₂ in the atmosphere considered undesirable even though it is required by plants?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Core Problem:</strong> While plants use CO<sub>2</sub> for basic photosynthesis, human emissions have completely overwhelmed the capacity of natural carbon sinks to absorb it.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Systemic Side Effects:</em> This excess gas traps too much re-radiated infrared heat, intensifying the greenhouse effect. This drives global warming, melts critical glaciers, and leads to rising sea levels that threaten coastal cities. It also makes oceans more acidic as they absorb the extra gas, which harms coral reefs and disrupts global farming systems through unpredictable weather.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">How is heat lost from the surface of the Earth? What is its significance?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Loss Mechanism:</strong> The Earth's surface cools down by re-radiating absorbed solar energy back out toward space as longwave infrared radiation. Heat is also transferred vertically through the air via convection currents and latent heat exchange during water evaporation.</li>
        <li style="margin-bottom: 0;"><strong>Climatic Significance:</strong> This cooling balancing act prevents solar energy from building up indefinitely. By interacting with greenhouse gases that temporarily trap a portion of this outgoing infrared energy, it maintains a stable, mild global temperature that allows life to thrive.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">If the Earth were a flat disc instead of a sphere, how would the patterns of solar radiation and temperature be different?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Hypothetical Changes:</strong> If the Earth were a flat disc facing the Sun directly, solar rays would strike the entire surface at the exact same perpendicular angle.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Scientific Consequences:</em> This uniform angle would distribute solar energy evenly across the planet, erasing the natural temperature drop we see from the warm equator to the freezing poles. Without these heating differences, the planet would lose the pressure systems that drive global winds, planetary planetary wind belts, and ocean currents, flattening out global weather systems entirely.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Suppose there is a rise in atmospheric temperature on Earth. How would this affect the cryosphere, hydrosphere and biosphere?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Cryosphere Link:</strong> Warmer air temperatures accelerate the melting of mountain glaciers, ice sheets, and polar sea cover, rapidly shrinking the planet's ice reserves.</li>
        <li style="margin-bottom: 5px;"><strong>Hydrosphere Link:</strong> This melting ice dumps vast amounts of freshwater into the oceans, which changes water salinity and drives up global sea levels. Warmer ocean waters also evaporate faster, overloading the atmosphere with moisture and intensifying storms.</li>
        <li style="margin-bottom: 0;"><strong>Biosphere Link:</strong> Rapidly changing habitats force land and marine species to adapt or face decline, disrupting fragile food webs. Shifting rainfall patterns directly threaten crop yields, while warming oceans can trigger widespread coral bleaching.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Explain how the Earth's atmosphere helps in maintaining a suitable temperature for life to survive on the Earth.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 0;"><strong>Atmospheric Regulation:</strong> The atmosphere acts as a two-way thermal shield. During the day, it absorbs and scatters a portion of incoming solar rays, while the ozone layer blocks dangerous UV radiation, keeping the surface from overheating.</li>
        <li style="margin-top: 5px; list-style-type: none; margin-left: -20px;"><em>Greenhouse Insulation:</em> At night, the warmed surface re-radiates this energy out as infrared light. Greenhouse gases like carbon dioxide and water vapour trap a portion of this heat instead of letting it escape into space. This insulation keeps the planet from plunging into freezing temperatures, maintaining a stable climate where life can survive.</li>
    </ul>
</div>
` },
                { q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">Describe the interrelationship between different spheres of the Earth. Illustrate with example how these spheres function in a delicate balance.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>Interconnected System:</strong> The Earth functions as a single unified system where the geosphere, hydrosphere, cryosphere, atmosphere, and biosphere are constantly linked through moving matter and energy loops.</li>
        <li style="margin-bottom: 0;"><strong>Illustrative Example:</strong> Consider how winter snowfall in the mountains connects these spheres. A drop in winter snow (**cryosphere**) reduces the volume of freshwater feeding mountain lakes and streams during the summer (**hydrosphere**). This water shortage leaves less moisture in the surrounding soil (**geosphere**), which stunts grass growth and reduces food food available for grazing herds (**biosphere**). This shows how a shift in one sphere triggers a domino effect across the entire system.</li>
    </ul>
</div>
` },
               
            ] }
        ]
    },
    english: {
        title: "English Sections",
        isBranching: true,
        branches: [
            { 
                name: "Prose (Chapters)", 
                chapters: [
                    { name: "Chapter 1: How I Taught My Grandmother to Read", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 2: The Pot Maker", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 3: Winds of Change", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 4: Vitamin-M", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 5: The World of Limitless Possibilities", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 6: Twin Melodies", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 7: Carrier of Words", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Chapter 8: Follow That Dream", solutions: [{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Check Your Understanding</h2>
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">I State whether the following sentences are true or false. Share your answers with your classmates and teacher.</p>
    <ol style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333;">
        <li style="margin-bottom: 5px;">Reaching the peak of skill in a field typically demands a focused and intense dedication for about a decade.</li>
        <li style="margin-bottom: 5px;">The mother believes that significant effort and personal sacrifices are essential for turning aspirations into reality.</li>
        <li style="margin-bottom: 5px;">The path to achieving the deepest desires has very little difficulty or a few obstacles.</li>
        <li style="margin-bottom: 5px;">The mother is of the opinion that a person's life goals and hopes can evolve over time.</li>
        <li style="margin-bottom: 5px;">Having a strong network of individuals can be a hurdle in pursuing one's ambition.</li>
        <li style="margin-bottom: 5px;">The mother feels that pursuing a major life goal will not involve any financial expense or sacrifice.</li>
        <li style="margin-bottom: 0;">For many individuals, their aspirations remain just wishes because they don't move beyond mere daydreaming.</li>
    </ol>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ol style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>True</strong> (The text explicitly mentions that reaching a world-class standard requires at least ten years of single-minded pursuit).</li>
        <li style="margin-bottom: 5px;"><strong>True</strong> (The mother states that effort and sacrifice are what differentiate greatness from the ordinary).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The text describes the path as an uphill journey that requires negotiating a maze of hurdles).</li>
        <li style="margin-bottom: 5px;"><strong>True</strong> (The mother shares from experience that life itself can change a person's dreams).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The text points out that a support network is vital, explicitly referencing how Oscar winners thank their groups).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The mother advises her daughter to carefully count the costs, including financial investments).</li>
        <li style="margin-bottom: 0;"><strong>True</strong> (The text notes that for many people, dreams remain dreams because they never progress past wishful thinking).</li>
    </ol>
</div>
` }, 
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Critical Reflection</h2>
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">I Read the extracts given below and answer the questions that follow.</p>
    <p style="margin: 0 0 12px 0; color: #555; font-style: italic; line-height: 1.5; background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; border-left: 3px solid #666;">
        1. It starts with a passion for a particular interest, then comes the conviction that it is imperative to realise it. Count the cost in years of effort, financial investments and sacrifice. Then if it is still burning in your blood and you are ready to commit yourself to the task, plunge. It could be in any field—sports, science, arts, business, or design. The road may be uphill most of the way and often you are buoyed up only by the knowledge that you are doing what you love best and are doing the right thing. When stamina is running out, the prospect of success will keep you on track.
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333; list-style-type: none;">
        <li style="margin-bottom: 10px;"><strong>(i)</strong> Complete the analogy with a suitable word from the extract.<br>enthusiasm: passion:: belief: ________________</li>
        <li style="margin-bottom: 10px;"><strong>(ii)</strong> Choose the correct option to complete the following sentence appropriately.<br>The author says that a realistic assessment of effort, investment and sacrifice is crucial for preventing ________________.<br>
            <div style="padding-left: 15px; margin-top: 4px; font-weight: normal; color: #555;">
                A. the need for external support network<br>
                B. an early abandonment of the dream<br>
                C. initial excitement from fading over time<br>
                D. others from questioning one's commitment
            </div>
        </li>
        <li style="margin-bottom: 10px;"><strong>(iii)</strong> Complete the following with the correct option from those given in the brackets.<br>The word 'plunge' as used in the extract indicates a ________________ (complete/gradual) involvement in a task.</li>
        <li style="margin-bottom: 10px;"><strong>(iv)</strong> Complete the sentence with an appropriate reason.<br>The author's emphasis on 'when you are doing what you love best and are doing the right thing' works as a form of intrinsic motivation because ________________.</li>
        <li style="margin-bottom: 0;"><strong>(v)</strong> Mention one motivating factor besides 'prospect of success', that might keep a person on track, despite running out of stamina.</li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 8px;"><strong> (i) Answer:</strong> conviction</li>
        <li style="margin-bottom: 8px;"><strong> (ii) Answer:</strong> B. an early abandonment of the dream</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Answer:</strong> complete</li>
        <li style="margin-bottom: 8px;"><strong>  (iv) Answer:</strong> doing something out of pure passion brings internal satisfaction and deep joy, which creates a natural pool of endurance that does not depend on external validation, rewards, or praise.</li>
        <li style="margin-bottom: 0;"><strong> (v) Answer:</strong> The deep knowledge and inner reassurance that you are doing what you love best and are doing the right thing.</li>
    </ul>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Critical Reflection</h2>
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">Read the extract given below and answer the questions that follow.</p>
    <p style="margin: 0 0 12px 0; color: #555; font-style: italic; line-height: 1.5; background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; border-left: 3px solid #666;">
        2. From my own experience, life itself may change a person's dreams. These hopes and aspirations are no less than the original dream of younger days. To fulfil them you will need to negotiate a path through a maze of hurdles. The dream will take a much longer time to realise, and the people who are participants in your dreamscape would be many more.
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333; list-style-type: none;">
        <li style="margin-bottom: 10px;"><strong>(i)</strong> Complete the sentence appropriately.<br>The phrase 'life itself may change a person's dreams' suggests that dreams are not static but rather ________________ (evolving/dynamic).</li>
        <li style="margin-bottom: 10px;"><strong>(ii)</strong> What does the author mean by, 'hopes and aspirations are no less than the original dream of younger days'?</li>
        <li style="margin-bottom: 10px;"><strong>(iii)</strong> Identify the phrase from the extract that indicates a complex and challenging journey.</li>
        <li style="margin-bottom: 10px;"><strong>(iv)</strong> Complete the sentence with an appropriate reason.<br>The author says, 'people who are participants in your dreamscape would be many more' because ________________.</li>
        <li style="margin-bottom: 0;"><strong>(v)</strong> What is the tone of the author in this extract?<br>
            <div style="padding-left: 15px; margin-top: 4px; font-weight: normal; color: #555;">
                A. appreciative and celebratory<br>
                B. excited and cheerful<br>
                C. optimistic and encouraging<br>
                D. eager and inquisitive
            </div>
        </li>
    </ul>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 8px;"><strong>(i) Answer:</strong> evolving</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Answer:</strong> The author means that the modified goals and hopes we choose to follow later in life hold the exact same deep value, importance, and validity as the initial dreams of our childhood or youth.</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Answer:</strong> 'a maze of hurdles'</li>
        <li style="margin-bottom: 8px;"><strong>(iv) Answer:</strong> as goals evolve with maturity, they naturally branch out into professional collaborations, adult responsibilities, or community projects that involve a much wider circle of people to accomplish.</li>
        <li style="margin-bottom: 0;"><strong>(v) Answer:</strong> C. optimistic and encouraging</li>
    </ul>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Answer the Following Questions</h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(i) The letter begins thus, 'By all means follow that dream'. What do you think Ming must have written to her mother about?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(i) Answer:</strong> Ming must have written to her mother expressing a deep, newfound passion or a big ambition for her future career that she wanted to pursue fiercely, looking for her mother's approval, support, and advice.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(ii) How can one attain an international level of skill in any field? Mention any two ways.</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(ii) Answer:</strong> One can attain an international level of skill by (a) pursuing the subject singularly and intensively for at least ten years, and (b) investing significant effort, financial resources, and personal sacrifice along an uphill journey.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(iii) What differentiates the mere dreamers from actual achievers?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(iii) Answer:</strong> Mere dreamers settle for wishful thinking, never progress past simple daydreaming, and often trade their dreams for safety or comfort zones. Actual achievers accept a burning conviction, count the true costs in advance, and courageously plunge into action to face a maze of hurdles.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(iv) How does Ming's mother use critical questions and personal anecdotes to persuade Ming and convey her message effectively?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(iv) Answer:</strong> The mother asks critical questions to make Ming evaluate if her goal is worth years of effort and sacrifice. She shares her personal anecdote about taking ten years to publish this collection of letters to serve as an authentic, achievable model of perseverance.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(v) How does Ming's mother balance encouragement with caution in her advice?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(v) Answer:</strong> The mother balances encouragement by telling Ming to go ahead if a burning conviction courses through her veins, but inserts strong caution by warning her about long timelines, heavy financial costs, changing dreams, and unexpected global disruptions like war or family survival duties.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(vi) In the letter, Ming's mother specifically addresses the challenges people face in pursuing their dreams. Do you think this advice is still relevant in contemporary society? If yes, why? If no, why not?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(vi) Answer:</strong> Yes, this advice remains highly relevant today because even though digital platforms allow people to showcase talents much faster, mastering any complex field still requires a major time commitment. Contemporary youth face intense competition, high financial stress, and sudden career market changes where grit and focus are absolutely necessary.</p>
</div>
` },
{ q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;"></h2>
    <p style="margin: 0; color: #333; font-weight: bold;">(vii) What 'costs' in terms of effort, sacrifice, and time are you willing or unwilling to invest to pursue your goals?</p>
</div>
`, a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 5px;"><strong>Willing to invest:</strong> I am completely willing to invest long hours of hard work, daily practice, and the sacrifice of short-term comfort to build true skill.</li>
        <li style="margin-bottom: 0;"><strong>Unwilling to invest:</strong> I am completely unwilling to sacrifice my physical or mental health metrics, break my core ethical principles, or neglect my family relationships.</li>
    </ul>
</div>
` },

] }
                ] 
            },
            { 
                name: "Poetry (Poems)", 
                chapters: [
                    { name: "Poem: Bharat Our Land", solutions: [{ q: ``, a: `` },

                    ] },
                     
                    { name: "Poem: Gifts of Grace", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: Canvas of Soil", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: I Cannot Remember My Mother", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: Nine Gold Medals", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: A Friend Found in Music", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: Words", solutions: [{ q: "Q?", a: `Text.` }] }, 
                    { name: "Poem: Believe in Yourself", solutions: [
  // 1. Check Your Understanding
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <h2 style="margin: 0 0 8px 0; color: #cfa670; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Check Your Understanding (Pg. 234)</h2>
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">I State whether the following sentences are true or false. Share your answers with your classmates and teacher.</p>
    <ol style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333;">
        <li style="margin-bottom: 5px;">Reaching the peak of skill in a field typically demands a focused and intense dedication for about a decade.</li>
        <li style="margin-bottom: 5px;">The mother believes that significant effort and personal sacrifices are essential for turning aspirations into reality.</li>
        <li style="margin-bottom: 5px;">The path to achieving the deepest desires has very little difficulty or a few obstacles.</li>
        <li style="margin-bottom: 5px;">The mother is of the opinion that a person's life goals and hopes can evolve over time.</li>
        <li style="margin-bottom: 5px;">Having a strong network of individuals can be a hurdle in pursuing one's ambition.</li>
        <li style="margin-bottom: 5px;">The mother feels that pursuing a major life goal will not involve any financial expense or sacrifice.</li>
        <li style="margin-bottom: 0;">For many individuals, their aspirations remain just wishes because they don't move beyond mere daydreaming.</li>
    </ol>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ol style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444;">
        <li style="margin-bottom: 5px;"><strong>True</strong> (The letter explicitly states that reaching a world-class standard requires singularly and intensively pursuing a subject for at least ten years).</li>
        <li style="margin-bottom: 5px;"><strong>True</strong> (The mother notes that what differentiates greatness from the ordinary is how much effort and sacrifice people invest).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The text points out that the road is uphill most of the way and requires negotiating a maze of hurdles).</li>
        <li style="margin-bottom: 5px;"><strong>True</strong> (The mother reflects that from her own experience, life itself may change a person's dreams).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The text highlights that an extensive support network stands behind every achiever).</li>
        <li style="margin-bottom: 5px;"><strong>False</strong> (The mother advises counting the cost in years of effort, financial investments, and sacrifice).</li>
        <li style="margin-bottom: 0;"><strong>True</strong> (The text states that for many people, dreams remain dreams because they never get beyond wishful thinking).</li>
    </ol>
</div>`
  },

  // 2. Critical Reflection - Extract 1
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">I Read the extracts given below and answer the questions that follow.</p>
    <p style="margin: 0 0 12px 0; color: #555; font-style: italic; line-height: 1.5; background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; border-left: 3px solid #666;">
        1. It starts with a passion for a particular interest, then comes the conviction that it is imperative to realise it. Count the cost in years of effort, financial investments and sacrifice. Then if it is still burning in your blood and you are ready to commit yourself to the task, plunge. It could be in any field—sports, science, arts, business, or design. The road may be uphill most of the way and often you are buoyed up only by the knowledge that you are doing what you love best and are doing the right thing. When stamina is running out, the prospect of success will keep you on track.
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333; list-style-type: none;">
        <li style="margin-bottom: 10px;"><strong>(i)</strong> Complete the analogy with a suitable word from the extract.<br>enthusiasm: passion:: belief: ________________</li>
        <li style="margin-bottom: 10px;"><strong>(ii)</strong> Choose the correct option to complete the following sentence appropriately.<br>The author says that a realistic assessment of effort, investment and sacrifice is crucial for preventing ________________.<br>
            <div style="padding-left: 15px; margin-top: 4px; font-weight: normal; color: #555;">
                A. the need for external support network<br>
                B. an early abandonment of the dream<br>
                C. initial excitement from fading over time<br>
                D. others from questioning one's commitment
            </div>
        </li>
        <li style="margin-bottom: 10px;"><strong>(iii)</strong> Complete the following with the correct option from those given in the brackets.<br>The word 'plunge' as used in the extract indicates a ________________ (complete/gradual) involvement in a task.</li>
        <li style="margin-bottom: 10px;"><strong>(iv)</strong> Complete the sentence with an appropriate reason.<br>The author's emphasis on 'when you are doing what you love best and are doing the right thing' works as a form of intrinsic motivation because ________________.</li>
        <li style="margin-bottom: 0;"><strong>(v)</strong> Mention one motivating factor besides 'prospect of success', that might keep a person on track, despite running out of stamina.</li>
    </ul>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 8px;"><strong>(i) Answer:</strong> conviction</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Answer:</strong> B. an early abandonment of the dream</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Answer:</strong> complete</li>
        <li style="margin-bottom: 8px;"><strong>(iv) Answer:</strong> pursuing something out of genuine love generates internal satisfaction and purpose, providing an enduring emotional anchor that does not rely on external validation or immediate rewards.</li>
        <li style="margin-bottom: 0;"><strong>(v) Answer:</strong> The inner knowledge and reassurance that you are doing what you love best and are doing the right thing.</li>
    </ul>
</div>`
  },

  // 3. Critical Reflection - Extract 2
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0 0 12px 0; color: #333; font-weight: bold;">2. Read the extract given below and answer the questions that follow.</p>
    <p style="margin: 0 0 12px 0; color: #555; font-style: italic; line-height: 1.5; background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; border-left: 3px solid #666;">
        From my own experience, life itself may change a person's dreams. These hopes and aspirations are no less than the original dream of younger days. To fulfil them you will need to negotiate a path through a maze of hurdles. The dream will take a much longer time to realise, and the people who are participants in your dreamscape would be many more.
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333; list-style-type: none;">
        <li style="margin-bottom: 10px;"><strong>(i)</strong> Complete the sentence appropriately.<br>The phrase 'life itself may change a person's dreams' suggests that dreams are not static but rather ________________ (evolving/dynamic).</li>
        <li style="margin-bottom: 10px;"><strong>(ii)</strong> What does the author mean by, 'hopes and aspirations are no less than the original dream of younger days'?</li>
        <li style="margin-bottom: 10px;"><strong>(iii)</strong> Identify the phrase from the extract that indicates a complex and challenging journey.</li>
        <li style="margin-bottom: 10px;"><strong>(iv)</strong> Complete the sentence with an appropriate reason.<br>The author says, 'people who are participants in your dreamscape would be many more' because ________________.</li>
        <li style="margin-bottom: 0;"><strong>(v)</strong> What is the tone of the author in this extract?<br>
            <div style="padding-left: 15px; margin-top: 4px; font-weight: normal; color: #555;">
                A. appreciative and celebratory<br>
                B. excited and cheerful<br>
                C. optimistic and encouraging<br>
                D. eager and inquisitive
            </div>
        </li>
    </ul>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 8px;"><strong>(i) Answer:</strong> evolving</li>
        <li style="margin-bottom: 8px;"><strong>(ii) Answer:</strong> The author means that the modified aspirations people adopt later in life carry the exact same dignity, worth, and emotional depth as the ambitions of their youth.</li>
        <li style="margin-bottom: 8px;"><strong>(iii) Answer:</strong> 'a maze of hurdles'</li>
        <li style="margin-bottom: 8px;"><strong>(iv) Answer:</strong> as goals mature and life progresses, realizing an ambition requires broader collaboration, social connections, and community support.</li>
        <li style="margin-bottom: 0;"><strong>(v) Answer:</strong> C. optimistic and encouraging</li>
    </ul>
</div>`
  },

  // 4. Answer the Following Questions - (i)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(i) The letter begins thus, 'By all means follow that dream'. What do you think Ming must have written to her mother about?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(i) Answer:</strong> Ming must have written to her mother about an ambitious aspiration or an uncommon career path she was passionate about pursuing, seeking her mother's blessing, advice, and emotional support.</p>
</div>`
  },

  // 5. Answer the Following Questions - (ii)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(ii) How can one attain an international level of skill in any field? Mention any two ways.</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(ii) Answer:</strong> One can attain an international level of skill by (a) pursuing the subject exclusively and intensively for at least ten years, and (b) demonstrating readiness to make personal sacrifices, invest effort, and shoulder financial costs.</p>
</div>`
  },

  // 6. Answer the Following Questions - (iii)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(iii) What differentiates the mere dreamers from actual achievers?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(iii) Answer:</strong> Mere dreamers remain confined to wishful thinking and choose to trade their aspirations for security or ease. Actual achievers back their passion with deep conviction, count the costs honestly, and commit to the hard work needed to overcome hurdles.</p>
</div>`
  },

  // 7. Answer the Following Questions - (iv)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(iv) How does Ming's mother use critical questions and personal anecdotes to persuade Ming and convey her message effectively?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(iv) Answer:</strong> Ming's mother prompts her daughter to reflect on whether her conviction is strong enough to endure years of effort and sacrifice. She grounds this advice by sharing her personal experience of chasing the dream of publishing her book over a span of ten years, showing that long timelines and changing goals are natural parts of the journey.</p>
</div>`
  },

  // 8. Answer the Following Questions - (v)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(v) How does Ming's mother balance encouragement with caution in her advice?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(v) Answer:</strong> The mother encourages Ming by urging her to pursue her ambition if a burning conviction courses through her veins. At the same time, she cautions her by outlining practical costs—such as the required ten-year timeline, potential financial burdens, unexpected changes in circumstance, and the reality of obstacles along the way.</p>
</div>`
  },

  // 9. Answer the Following Questions - (vi)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(vi) In the letter, Ming's mother specifically addresses the challenges people face in pursuing their dreams. Do you think this advice is still relevant in contemporary society? If yes, why? If no, why not?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <p style="margin: 0; line-height: 1.6; color: #444;"><strong>(vi) Answer:</strong> Yes, this advice remains very relevant today. While modern digital tools provide quicker visibility, mastering any trade still takes sustained effort over many years. Moreover, young people frequently navigate career uncertainties, financial pressures, and shifting responsibilities, making perseverance and resilience essential.</p>
</div>`
  },

  // 10. Answer the Following Questions - (vii)
  {
    q: `<div style="font-family: Arial, sans-serif; padding: 12px 15px; background-color: #fbfbfb; border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 8px;">
    <p style="margin: 0; color: #333; font-weight: bold;">(vii) What 'costs' in terms of effort, sacrifice, and time are you willing or unwilling to invest to pursue your goals?</p>
</div>`,
    a: `<div style="font-family: Arial, sans-serif; padding: 15px; background-color: #fdfaf2; border-left: 4px solid #cfa670; border-radius: 4px; margin-bottom: 24px;">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #444; list-style-type: none;">
        <li style="margin-bottom: 5px;"><strong>Willing to invest:</strong> I am prepared to dedicate long hours to disciplined study, practice consistently, and give up leisure or momentary comfort to master my chosen field.</li>
        <li style="margin-bottom: 0;"><strong>Unwilling to invest:</strong> I am unwilling to compromise my personal integrity, neglect my physical and mental well-being, or ignore meaningful connections with family and friends.</li>
    </ul>
</div>`
  }
] }
                ] 
            }
        ]
    },
    maths: {
        title: "Mathematics Section",
        isBranching: true,
        branches: [
            {
                name: "Ganita Prakash (Part 1)",
                chapters: [
                    { name: "Chapter 1", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 2", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 3", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 4", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 5 : I'm Up And Round and Round", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 6", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 7", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 8", solutions:[{ q: "The Solutions are under development", a: `Sorry :<` }] },
                ]
            },
            {
                name: `Ganita Prakash Part 2`,
                chapters: [
                    { name: "Chapter 1", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 2", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 3", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 4", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 5", solutions: [{ q: "", a: `` }] },
                    { name: "Chapter 6", solutions: [{ q: "", a: `` }] },
                    { name: "Chapter 7", solutions: [{ q: "The Solutions are under development", a: `Sorry :<` }] },
                    { name: "Chapter 8", solutions:[{ q: "The Solutions are under development", a: `Sorry :<` }] },
                ]
            },    
        ]
    },
        sst: {
        title: "Social Science Section" ,
        isBranching: true,
        branches: [ 
            {
                name: "Geography",
                chapters: [
                    { name: "Chapter 1: Understanding Social Science", solutions: [{ q: "No QNAs", a: `No exercises in this chapter!` }] },
                    { name: "Chapter 2: Shaping of the Earth’s Surface", solutions: [
                        { 
                            q: "What are the sources of energy that are required to cause movements associated with the internal forces of the Earth?", 
                            a: `<ul>
    <li><strong>Core Heat Source:</strong> The movements driven by the Earth's internal forces are powered by intense heat originating from the planet's core.</li>
    <li><strong>Convection Mechanism:</strong> This extreme heat warms the molten material within the mantle, creating massive, continuous convection currents where hot material rises and cooler material sinks. These strong thermal currents act as a subterranean engine that pushes and pulls the tectonic plates, causing the outer crust to shift.</li>
</ul>` 
                        },
                        { 
                            q: "Relate various physiographic divisions you have studied in the earlier grades with various endogenic forces responsible for their origin.", 
                            a: `<ul>
    <li><strong>Mountain Building:</strong> Internal or endogenic forces operating within the Earth—specifically plate movements like folding and faulting—are directly responsible for creating major macro-landforms such as mountains, plains, and valleys.</li>
    <li><strong>Tectonic Collisions:</strong> For instance, when two massive continental landmasses move toward each other at a convergent boundary, the immense pressure buckles the crust. This specific endogenic force drives the formation of majestic fold mountain ranges, a prime example being the Himalaya.</li>
</ul>` 
                        },
                        { 
                            q: "Why and where do earthquakes occur frequently? Is it possible to predict earthquakes?", 
                            a: `<ul>
    <li><strong>Geographic Distribution:</strong> Earthquakes occur frequently along plate boundaries—the edges where tectonic plates meet and slide past, pull apart, or crash into one another. A vast majority of these seismic events take place around the Pacific Ocean in a highly active region famously known as the Ring of Fire.</li>
    <li><strong>Predictability Limitations:</strong> While modern geologists study plate maps to pinpoint high-risk zones and help cities manage potential disasters, exactly predicting their timing remains incredibly difficult. Historically, scholars like Varāhamihira attempted to track environmental clues like animal behaviour, clouds, and wind changes to signal them, reflecting an early attempt to blend observation with cosmological reasoning.</li>
</ul>` 
                        },
                        { 
                            q: `"Plate movements are responsible for the distribution of earthquakes and volcanoes." Explain.`, 
                            a: `<ul>
    <li><strong>Boundary Dynamics:</strong> Tectonic plates are in a state of slow, constant motion driven by mantle convection. The intense friction, pressure, and structural cracking that happen where these massive slabs of solid rock interact create the perfect conditions for geological instability.</li>
    <li><strong>Seismic Realities:</strong> When plates pull apart at divergent boundaries, magma forces its way up to create new crust, and when plates collide at convergent boundaries, tectonic activity triggers severe volcanic eruptions and earthquakes. Because these violent releases of sub-crustal energy are concentrated right along the margins where plates grind together, most of the world's volcanoes and earthquakes align perfectly with plate borders.</li>
</ul>` 
                        },
                        { 
                            q: "Draw and label a diagram of a meander and a delta.", 
                            a: `<ul>
    <li><strong>Meander and Delta Features:</strong> A meander is a winding curve or loop formed in the middle or lower course of a river due to lateral erosion on outer banks and sediment deposition on inner banks. A delta is a fan-shaped or triangular landform created at a river's mouth where it slows down, enters a sea or lake, and deposits its remaining load.</li>
    <li><strong>Visual Presentation:</strong> The structural configurations, layout, and labeling criteria for both of these water-formed landscape modifications are illustrated below.</li>
</ul>
<div style="margin-top: 15px; text-align: center; background-color: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
    <img src="images/aa.png" alt="Meander and Delta Diagram" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;">
</div>` 
                        },
                        { 
                            q: "How are deforestation and erosion associated with each other? Explain.", 
                            a: `<ul>
    <li><strong>Loss of Soil Anchor:</strong> Deforestation severely accelerates surface erosion by removing the vital root networks that naturally anchor the soil together. Without this protective root system and vegetation cover, the raw land is left completely exposed and vulnerable.</li>
    <li><strong>Environmental Domino Effect:</strong> Once the vegetation is stripped away, natural forces like heavy rainfall and strong winds can easily wear down and sweep the fertile topsoil away. This lack of root stability on hillsides and slopes noticeably increases the risk of sudden natural disasters like landslides.</li>
</ul>` 
                        },
                        { 
                            q: "Develop a plan to protect the land in your local area from erosion.", 
                            a: `<ul>
    <li><strong>Afforestation and Vegetative Cover:</strong> Plant native trees, shrubs, and grasses along exposed soil surfaces, roadsides, and riverbanks to establish root networks that bind soil particles and curb water runoff.</li>
    <li><strong>Terracing and Bunding on Slopes:</strong> Implement step-terracing and earthen embankments along natural contour lines on elevated ground to slow down surface runoff velocity and enhance groundwater absorption.</li>
    <li><strong>Proper Drainage Systems and Check Dams:</strong> Build structured runoff channels and check dams across gullies to minimize the gouging power of rainwater and trap dislodged topsoil.</li>
</ul>` 
                        },
                        { 
                            q: "Which disasters do you think you might experience in your region? Discuss a mitigation plan in your classroom.", 
                            a: `<ul>
    <li><strong>Regional Disaster Identification:</strong> Regions along river basins and coastal belts frequently experience flash floods and storm surges, hilly terrains are prone to landslides, and arid regions regularly encounter dust storms.</li>
    <li><strong>Classroom Mitigation Strategy:</strong> Establish community early warning systems, organize regular evacuation drills, avoid unplanned construction along unstable slopes or flood lines, and construct robust protective structures such as embankments and check dams.</li>
</ul>` 
                        },
                        { 
                            q: "Prepare a model of landforms created by underground water.", 
                            a: `<ul>
    <li><strong>Core Landforms to Model:</strong> Illustrate a Karst limestone landscape displaying sinkholes/dolines on the surface crust, hollow cavern chambers underneath, stalactites hanging from the ceiling, stalagmites rising from the floor, joined limestone pillars, and subterranean rivers.</li>
    <li><strong>Suggested Materials:</strong> Use clay, papier-mâché, or plaster of Paris mounted inside an open cardboard box to reveal both the surface collapse holes and the internal cavern formations.</li>
</ul>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px; align-items: center;">
    <img src="images/braindead.jpg" alt="Cave Landforms" style="max-width: 100%; height: auto; border-radius: 4px;">
    <img src="images/headache.jpg" alt="Underground River" style="max-width: 100%; height: auto; border-radius: 4px;">
</div>` 
                        },
                        { 
                            q: "What precautionary measures will you take if you are staying in an earthquake-prone region?", 
                            a: `<ul>
    <li><strong>Structural & Home Preparedness:</strong> Construct buildings following earthquake-resistant architectural codes, firmly bolt heavy furniture and appliances to walls, and maintain an emergency kit stocked with first-aid essentials, water, and flashlights.</li>
    <li><strong>During and Immediate Response:</strong> Practice the "Drop, Cover, and Hold On" procedure under sturdy tables away from glass windows and power lines; if outdoors, move directly into open spaces away from tall buildings, bridges, and electric poles.</li>
</ul>` 
                        },
                        { 
                            q: "Prepare a map showing landform-associated disasters that happened in the current calendar year.", 
                            a: `<ul>
    <li><strong>Mapping Procedure:</strong> Acquire an outline map of India or the world and categorize recent disaster incidents using distinct color-coded markers or symbols (e.g., brown triangles for landslides, blue symbols for GLOFs/floods, red dots for earthquakes, and yellow bands for dust storms).</li>
    <li><strong>Required Information:</strong> Collect verified disaster reports from current news sources detailing the location, date, affected landform type, and recorded impact.</li>
</ul>
<div style="margin-top: 15px; text-align: center; background-color: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
    <img src="images/earthquakes-volcanoes.png" alt="Map showing the distribution of earthquakes and volcanoes" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <p style="margin: 8px 0 0 0; font-size: 0.85rem; color: #64748b; font-style: italic;">Fig. 2.4: Reference map showing distribution of earthquake origins and volcanic activity along tectonic boundaries.</p>
</div>` 
                        },
                        { 
                            q: "Create a poster showing landforms that are considered to be sacred or important in your region, and add the folk stories associated with them.", 
                            a: `<ul>
    <li><strong>1. Sacred Mountain Summits (Himalayan Fold Mountains - Mt. Kailash & Nanda Devi):</strong> Revered across Himalayan folklore as the celestial axis and the cosmic abode of Lord Shiva and Goddess Parvati. Local folklore tells that the snow-clad peaks stand as divine guardians safeguarding the northern plains from freezing winds. Indigenous communities perform circumambulations (Parikrama) and consider scaling these summits forbidden, a tradition that historically protected fragile high-altitude alpine ecology from human encroachment.</li>
    <li><strong>2. Holy River Confluence (Sangam at Prayagraj - Fluvial River Plains):</strong> In folklore and epic tradition, this is the sacred meeting point where the Ganga, Yamuna, and mythical subterranean Saraswati converge. According to the <em>Samudra Manthan</em> folk legend, celestial drops of the nectar of immortality (<em>Amrita</em>) spilled into the river here. The visibly contrasting shades—the deep emerald of the Yamuna and the silt-laden ochre of the Ganga—symbolize the harmony of natural elements, inspiring annual gatherings like the Magh and Kumbh Mela centered on river purification.</li>
    <li><strong>3. Sacred Limestone Caverns (Karst Cave Formations - Amarnath & Gupteshwar Caves):</strong> Formed deep within carbonate rock by the persistent action of underground water dissolving and redepositing calcium carbonate into stalactites and stalagmites. In regional folklore, Lord Shiva chose this secluded cave to narrate the secret of creation and immortality (<em>Amar Katha</em>) to Goddess Parvati, where ice stalagmites form natural sacred icons each year. These legends fostered deep respect for subterranean aquifers and sacred springs among local communities.</li>
    <li><strong>4. Community Conservation Value:</strong> Connecting sacred folklore with distinctive geological landforms is one of the world's oldest forms of community-led environmental stewardship, safeguarding mountains, riverbanks, and forests through cultural reverence.</li>
</ul>
<div style="margin-top: 16px; text-align: center; background-color: #fafafa; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <img src="images/sacred-landforms-poster.jpg" alt="Poster: Sacred Landforms of India" style="max-width: 520px; width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px; box-shadow: 0 4px 14px rgba(0,0,0,0.12);">
    <p style="margin: 10px 0 0 0; font-size: 0.88rem; color: #334155; font-weight: 700;">
        🎨 Student Exhibition Poster: Sacred Landforms of India & Associated Folk Traditions
    </p>
    <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #64748b; font-style: italic;">
        Depicting sacred Himalayan snow peaks with prayer flags, the holy river confluence (Sangam) with prayer ghats and floating lamps, and illuminated karst cave formations.
    </p>
</div>` 
                        },
                        { 
                            q: "Document a case of a disaster that hit your region in the past, highlighting its effects on various human activities.", 
                            a: `<ul>
    <li><strong>Disaster Case Profile (Chamoli Flash Flood, Uttarakhand):</strong>
        <br>&bull; <em>Event & Date:</em> The Chamoli Disaster occurred on 7 February 2021 in the Garhwal Himalayas of Uttarakhand.
        <br>&bull; <em>Location & Affected River Valleys:</em> Chamoli district, surging violently down the catchment basins of the Rishiganga, Dhauliganga, and Alaknanda rivers.
        <br>&bull; <em>Physical Trigger:</em> A massive rock and ice mass detached from the steep slope of Ronti peak (near Nanda Devi), crashing down into the valley floor. The frictional heating rapidly melted glacial ice, transforming into a high-velocity, hyper-concentrated debris flow of ice, water, mud, and gigantic boulders.
    </li>
    <li><strong>Impact on Human Activities:</strong>
        <br>&bull; <em>1. Damage to Transport & Infrastructure:</em> The flash flood washed away five crucial bridges, including the vital border road bridge near Raini village connecting Joshimath to Malari along the Indo-Tibetan border. Severed roads cut off around 13 border villages, paralyzing vehicular movement and supply deliveries.
        <br>&bull; <em>2. Paralyzed Energy & Power Grids:</em> The debris torrent obliterated the 13.2 MW Rishiganga Hydroelectric Project and inflicted catastrophic structural destruction on NTPC's 520 MW Tapovan Vishnugad Hydropower Project, burying headrace tunnels in sludge and knocking out regional electricity supply.
        <br>&bull; <em>3. Destruction of Agriculture & Soil Erosion:</em> Violent flood surges stripped and eroded fertile river terrace soils, washing away standing winter crops and dumping tons of silt and rubble onto farm lands. Critical irrigation canals and riverside pastures were entirely destroyed.
        <br>&bull; <em>4. Disruption of Human Settlements & Economy:</em> More than 200 laborers, villagers, and personnel lost their lives or were declared missing. Riverbank dwellings and local market stalls were swept away, while pilgrimage tourism and trekking livelihoods suffered severe long-term setbacks.
        <br>&bull; <em>5. Public Health & Drinking Water:</em> Churning sediment heavily contaminated downstream drinking water supplies, forcing authorities to arrange emergency water shipments and portable filtration units for affected settlements.
    </li>
</ul>` 
                        },
                        { 
                            q: "Translate the given poster on landslide into your native language and display it in your home.", 
                            a: `<ul>
    <li><strong>Landslide Safety Poster Guide (Ready Now to Stay Secure):</strong>
        <br>Below is the structured safety poster adapted for home display and regional reference, organized across the three critical disaster preparedness phases:
    </li>
</ul>

<div style="background: #fdfaf2; border: 2px solid #cfa670; border-radius: 8px; padding: 16px; margin: 14px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 0 3px 10px rgba(0,0,0,0.06);">
    <div style="text-align: center; border-bottom: 2px solid #cfa670; padding-bottom: 10px; margin-bottom: 14px;">
        <h3 style="margin: 0; color: #a83232; font-size: 1.25rem; font-weight: 800; letter-spacing: 0.5px;">LANDSLIDE SAFETY ACTION PLAN</h3>
        <p style="margin: 4px 0 0 0; color: #555; font-size: 0.92rem; font-weight: 600;">Be Smart, Be Prepared | Ready Now to Stay Secure</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-bottom: 14px;">
        <!-- Before -->
        <div style="background: #ffffff; border: 1px solid #e2d9cc; border-radius: 6px; padding: 12px;">
            <h4 style="margin: 0 0 8px 0; color: #b45309; font-size: 0.95rem; border-bottom: 1px solid #f0e6d6; padding-bottom: 4px;">1. Before (Preparedness)</h4>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; line-height: 1.5; color: #333;">
                <li><strong>Plant Deep-Rooted Trees:</strong> Grow vegetation and native trees that hold topsoil together firmly on slopes.</li>
                <li><strong>Monitor Weather Alerts:</strong> Listen to local radio, television, and official weather advisories for flash alerts.</li>
                <li><strong>Maintain Clear Drainage:</strong> Keep surface drains and weep holes clean to prevent water buildup behind retaining walls.</li>
                <li><strong>Watch for Warning Signs:</strong> Look out for ground subsidence, building tilting, cracks on rocks, or sudden muddying of streams.</li>
                <li><strong>Avoid Slope Construction:</strong> Never build homes or structures near steep, unstable hillsides or natural drainage paths.</li>
            </ul>
        </div>

        <!-- During -->
        <div style="background: #ffffff; border: 1px solid #e2d9cc; border-radius: 6px; padding: 12px;">
            <h4 style="margin: 0 0 8px 0; color: #dc2626; font-size: 0.95rem; border-bottom: 1px solid #f0e6d6; padding-bottom: 4px;">2. During (Immediate Action)</h4>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; line-height: 1.5; color: #333;">
                <li><strong>Stay Calm & Avoid Panic:</strong> Remain composed and disregard unverified rumors or panic messages.</li>
                <li><strong>Stay Together:</strong> Keep your family and companions together in a secure, pre-identified safe zone.</li>
                <li><strong>Heed Warning Sounds:</strong> If you hear unusual noises like trees cracking or boulders tumbling, evacuate the slip path immediately.</li>
                <li><strong>Move to High Ground:</strong> Evacuate rapidly away from downstream valleys and gullies to stable, elevated ground.</li>
                <li><strong>Alert Authorities:</strong> Immediately inform the nearest Tehsil, police post, or District Disaster HQ.</li>
            </ul>
        </div>

        <!-- After -->
        <div style="background: #ffffff; border: 1px solid #e2d9cc; border-radius: 6px; padding: 12px;">
            <h4 style="margin: 0 0 8px 0; color: #15803d; font-size: 0.95rem; border-bottom: 1px solid #f0e6d6; padding-bottom: 4px;">3. After (Recovery & Safety)</h4>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; line-height: 1.5; color: #333;">
                <li><strong>Avoid Loose Debris & Wires:</strong> Never touch or walk over unstable slope debris, fallen electrical poles, or dangling power wires.</li>
                <li><strong>Maintain Safe Distance:</strong> Stay away from the landslide path and river channel, as secondary slips often follow.</li>
                <li><strong>Rescue & First Aid:</strong> Check for injured or trapped persons; administer first aid and do not move severely injured victims unless in danger.</li>
                <li><strong>Avoid Untreated Water:</strong> Do not drink contaminated water directly from silted rivers, springs, or wells; boil or filter first.</li>
            </ul>
        </div>
    </div>

    <!-- Helpline Footer -->
    <div style="background: #f4ede1; border-radius: 6px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; font-size: 0.88rem;">
        <span style="color: #78350f; font-weight: 700;">📞 National Disaster Helpline (NDMA): <span style="color: #b91c1c; font-size: 1rem;">011-1078</span></span>
        <span style="color: #4b5563;">Official Portal: <strong>www.ndma.gov.in</strong></span>
    </div>
</div>
<ul>
    <li><strong>Home Display Instructions:</strong> Mount this safety card prominently on your household notice board, refrigerator, or near the main doorway alongside local emergency contacts for quick reference during heavy rains.</li>
</ul>`, image: `images/deez.png`
                        },
                        { 
                            q: "Divide the class into three groups. Each group will work on one project (water, wind, and glacier). The project should highlight the causes, impact on human life and the environment, and mitigation measures.", 
                            a: `<ul>
    <li><strong>Group 1 (Running Water & Waves):</strong> Examines river flooding, gully erosion, and coastal retreat; impacts include damaged arable land and lost property; mitigations include building embankments, check dams, and mangrove restoration.</li>
    <li><strong>Group 2 (Wind Action):</strong> Focuses on deflation, expanding sand dunes, and dust storms in arid tracts; impacts include topsoil desertification and respiratory hazards; mitigations include shelterbelt planting, sand fence stabilization, and sustainable grazing.</li>
    <li><strong>Group 3 (Glaciers & Ice):</strong> Covers avalanches and GLOFs driven by warming trends and moraine dam collapse; impacts include downstream flooding and infrastructure loss; mitigations include satellite lake monitoring, early warning sensors, and controlled siphon draining.</li>
</ul>` 
                        },
                    ]
                 },
                    { name: "Chapter 3: Atmosphere and Climate", solutions: [// Q1 & A1 (Includes high-visibility, large SVG breakdown of atmospheric gases)
  {
    q: `<div class="q-block">\n  <p>1. What is atmosphere? Explain its composition with the help of a pie diagram.</p>\n</div>`,
    a: `<div class="a-block">\n  <p>The atmosphere is a protective blanket of air surrounding the Earth, held down by gravitational pull. It shields life from harmful ultraviolet radiation and regulates surface temperatures.</p>\n  <div style="text-align: center; margin: 20px 0;">\n    <svg viewBox="0 0 760 380" width="100%" height="auto" style="max-width: 720px; background: #ffffff; border: 1px solid #d4c2a8; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">\n      <!-- Main Pie: Center (200, 190), Radius = 145 -->\n      <!-- Nitrogen: 78% -->\n      <path d="M 200,190 L 200,45 A 145,145 0 1,1 60.1,215.1 Z" fill="#2e7d32"/>\n      <!-- Oxygen: 21% -->\n      <path d="M 200,190 L 60.1,215.1 A 145,145 0 0,1 190.9,45.3 Z" fill="#0288d1"/>\n      <!-- Combined Remaining Wedge: 1% -->\n      <path d="M 200,190 L 190.9,45.3 A 145,145 0 0,1 200,45 Z" fill="#d84315"/>\n\n      <!-- In-slice Primary Labels -->\n      <text x="245" y="225" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Nitrogen (78%)</text>\n      <text x="55" y="130" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#01579b">Oxygen (21%)</text>\n\n      <!-- Zoom Connector Lines to Expanded 1% Breakdown -->\n      <polygon points="191,45 200,45 420,50 420,330" fill="#fbe9e7" opacity="0.45"/>\n      <line x1="195" y1="45" x2="420" y2="50" stroke="#d84315" stroke-width="1.5" stroke-dasharray="4,4"/>\n      <line x1="200" y1="190" x2="420" y2="330" stroke="#d84315" stroke-width="1.5" stroke-dasharray="4,4"/>\n\n      <!-- Magnified Detail Panel for the 1% (Argon, CO2, Others) -->\n      <g transform="translate(420, 50)">\n        <!-- Header Bar -->\n        <rect width="310" height="34" rx="4" fill="#d84315"/>\n        <text x="155" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">DETAILED BREAKDOWN OF REMAINING 1%</text>\n        \n        <!-- Card Container -->\n        <rect y="34" width="310" height="246" fill="#fdfbf7" stroke="#d4c2a8" stroke-width="1.2" rx="0 0 4 4"/>\n        \n        <!-- Argon Slice Bar & Label -->\n        <rect x="20" y="55" width="18" height="18" fill="#f57c00" rx="3"/>\n        <text x="48" y="70" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#222">Argon (Ar): <tspan fill="#f57c00">0.93%</tspan></text>\n        <rect x="20" y="80" width="270" height="8" rx="4" fill="#ffe0b2"/>\n        <rect x="20" y="80" width="251" height="8" rx="4" fill="#f57c00"/>\n\n        <!-- Carbon Dioxide Slice Bar & Label -->\n        <rect x="20" y="115" width="18" height="18" fill="#c62828" rx="3"/>\n        <text x="48" y="130" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#222">Carbon Dioxide (CO₂): <tspan fill="#c62828">0.04%</tspan></text>\n        <rect x="20" y="140" width="270" height="8" rx="4" fill="#ffcdd2"/>\n        <rect x="20" y="140" width="11" height="8" rx="4" fill="#c62828"/>\n\n        <!-- Other Gases Combined Slice Bar & Label -->\n        <rect x="20" y="175" width="18" height="18" fill="#6a1b9a" rx="3"/>\n        <text x="48" y="190" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#222">Others Combined: <tspan fill="#6a1b9a">0.03%</tspan></text>\n        <text x="48" y="206" font-family="Arial, sans-serif" font-size="10.5" fill="#666">Neon, Helium, Methane, Krypton, Ozone, H₂</text>\n        <rect x="20" y="216" width="270" height="8" rx="4" fill="#e1bee7"/>\n        <rect x="20" y="216" width="8" height="8" rx="4" fill="#6a1b9a"/>\n\n        <!-- Water Vapour Footnote -->\n        <line x1="20" y1="238" x2="290" y2="238" stroke="#e0d4c1" stroke-width="1"/>\n        <text x="20" y="258" font-family="Arial, sans-serif" font-size="10.5" fill="#444">Water Vapour &amp; Dust: Variable (0.1% to 0.4%)</text>\n      </g>\n    </svg>\n  </div>\n  <ul>\n    <li><strong>Nitrogen (78%):</strong> The most abundant gas; essential for plant growth and living protein formation.</li>\n    <li><strong>Oxygen (21%):</strong> Critical for respiration in animals and humans, and supports combustion.</li>\n    <li><strong>Argon (0.93%):</strong> The most common noble and inert gas in atmospheric air.</li>\n    <li><strong>Carbon Dioxide (0.04%):</strong> Absorbed by plants during photosynthesis and retains warmth via the greenhouse effect.</li>\n    <li><strong>Other Elements Combined (0.03%):</strong> Minute quantities of neon, helium, methane, krypton, hydrogen, and ozone.</li>\n    <li><strong>Water Vapour &amp; Dust Particles:</strong> Range between 0.1% and 0.4%, responsible for condensation, cloud formation, and precipitation.</li>\n  </ul>\n</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">\n  <p>2. Draw a labelled diagram of the structure of atmosphere.</p>\n</div>`,
    a: `<div class="a-block">\n  <ul>\n    <li><strong>Troposphere (0 to 12 km):</strong> The lowest and densest layer where nearly all weather phenomena—clouds, rain, fog, and storms—occur. Temperature decreases with altitude.</li>\n    <li><strong>Stratosphere (12 to 50 km):</strong> Free of weather disturbances, making it ideal for flying jet aeroplanes. Houses the ozone layer which filters out harmful solar ultraviolet radiation.</li>\n    <li><strong>Mesosphere (50 to 80 km):</strong> The coldest atmospheric layer. Incoming meteorites burn up here due to friction with atmospheric gases.</li>\n    <li><strong>Thermosphere (80 to 700 km):</strong> Temperature rises rapidly with altitude as it absorbs solar X-rays. Contains the ionosphere which reflects radio transmissions back to Earth, and produces auroras.</li>\n    <li><strong>Exosphere (&gt; 700 km):</strong> The uppermost boundary where light gases like hydrogen and helium escape into space.</li>\n  </ul>\n</div>`,
    image: `images/st.jpg`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">\n  <p>3. Which are the four main seasons of India?</p>\n</div>`,
    a: `<div class="a-block">\n  <ul>\n    <li><strong>Winter Season (Cold Weather):</strong> December to February; marked by low temperatures, clear skies, and calm weather across northern India.</li>\n    <li><strong>Summer Season (Pre-monsoon / Hot Weather):</strong> March to May; characterized by high temperatures, dry heat, and local dust storms.</li>\n    <li><strong>Advancing Monsoon Season (South-West Monsoon):</strong> June to September; brings the majority of India's annual rainfall from moisture-laden oceanic winds.</li>\n    <li><strong>Retreating Monsoon Season (Post-monsoon):</strong> October to November; skies clear across north India while moisture brings rainfall along the south-eastern coast.</li>\n  </ul>\n</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">\n  <p>4. Why do you not feel the pressure of the atmosphere?</p>\n</div>`,
    a: `<div class="a-block">\n  <ul>\n    <li><strong>Internal Counter-Pressure:</strong> The blood and internal fluids inside our bodies exert an outward pressure equal to the external air pressure.</li>\n    <li><strong>Omnidirectional Balance:</strong> Atmospheric pressure presses uniformly from all directions, canceling out the net force on our bodies.</li>\n  </ul>\n</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">\n  <p>5. In which layer of the atmosphere do aeroplanes fly and why?</p>\n</div>`,
    a: `<div class="a-block">\n  <ul>\n    <li><strong>Layer:</strong> Aeroplanes fly in the lower portion of the <strong>stratosphere</strong> (just above the tropopause).</li>\n    <li><strong>Reasons:</strong>\n      <br/>• <strong>Absence of Weather Turbulence:</strong> The stratosphere is free of clouds, convective storms, fog, and rain.\n      <br/>• <strong>Smooth Flight Conditions:</strong> Steady horizontal airflow ensures safety and fuel efficiency.\n    </li>\n  </ul>\n</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">\n  <p>6. Distinguish between the following: a. The troposphere and stratosphere, b. The south-west monsoon and north-east monsoon.</p>\n</div>`,
    a: `<div class="a-block">\n  <p><strong>a. Troposphere vs. Stratosphere:</strong></p>\n  <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 13px;">\n    <thead>\n      <tr style="background: #eedcb6; text-align: left;">\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">Feature</th>\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">Troposphere</th>\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">Stratosphere</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Altitude</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Extends up to an average height of 12 km.</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Extends from 12 km up to 50 km.</td>\n      </tr>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Temperature</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Decreases steadily as altitude increases.</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Increases with altitude due to ozone absorption of UV rays.</td>\n      </tr>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Weather</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Site of almost all active weather phenomena (rain, clouds, storms).</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Dry, cloudless, and calm; ideal for aircraft.</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <p><strong>b. South-West Monsoon vs. North-East Monsoon:</strong></p>\n  <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 13px;">\n    <thead>\n      <tr style="background: #eedcb6; text-align: left;">\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">Feature</th>\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">South-West Monsoon</th>\n        <th style="padding: 6px; border: 1px solid #d4c2a8;">North-East Monsoon</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Active Season</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">June to September (summer season).</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">October to February (winter season).</td>\n      </tr>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Direction of Wind</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Blows from oceanic waters toward landmass (sea to land).</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Blows from land outward toward the oceans (land to sea).</td>\n      </tr>\n      <tr>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Rainfall Impact</strong></td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Provides over 75% of total annual rainfall across India.</td>\n        <td style="padding: 6px; border: 1px solid #d4c2a8;">Largely dry; brings vital winter rains to Tamil Nadu and parts of Andhra Pradesh via Bay of Bengal moisture.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>`
  },

  // Q7 & A7
  {
  q: `<div class="q-block">
  <p>7. Do it yourself: Table 3.3 shows average monthly temperatures and rainfall for 10 representative stations. Study these figures on your own and convert them into 'temperature and rainfall' graphs. (One such graph for Delhi, Fig. 3.14, is prepared below). Answer questions 7.1 to 7.5 based on the data.</p>
</div>`,
  a: `<div class="a-block">
  <div style="text-align: center; margin: 16px 0;">
    <svg viewBox="0 0 600 360" width="100%" height="auto" style="max-width: 540px; background: #ffffff; border: 1px solid #d4c2a8; border-radius: 8px;">
      <!-- Title -->
      <text x="300" y="26" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">Fig. 3.14: Temperature and Rainfall of Delhi</text>
      
      <!-- Axis Lines & Grids -->
      <!-- Left Y Axis (Temperature 0 to 35 C), Right Y Axis (Rainfall 0 to 20 cm) -->
      <!-- Origin: (70, 290), Width: 460, Height: 240. 35 C = 240px -> 6.85px per C. 20 cm = 240px -> 12px per cm -->
      <line x1="70" y1="290" x2="530" y2="290" stroke="#888" stroke-width="1.5"/>
      <line x1="70" y1="50" x2="70" y2="290" stroke="#888" stroke-width="1.5"/>
      <line x1="530" y1="50" x2="530" y2="290" stroke="#888" stroke-width="1.5"/>

      <!-- Grid lines horizontal -->
      <line x1="70" y1="230" x2="530" y2="230" stroke="#eee" stroke-width="1"/>
      <line x1="70" y1="170" x2="530" y2="170" stroke="#eee" stroke-width="1"/>
      <line x1="70" y1="110" x2="530" y2="110" stroke="#eee" stroke-width="1"/>
      <line x1="70" y1="50" x2="530" y2="50" stroke="#eee" stroke-width="1"/>

      <!-- Left Y Axis Labels (Temp °C) -->
      <text x="60" y="294" font-family="Arial" font-size="10" fill="#c62828" text-anchor="end">0°</text>
      <text x="60" y="224" font-family="Arial" font-size="10" fill="#c62828" text-anchor="end">10°</text>
      <text x="60" y="154" font-family="Arial" font-size="10" fill="#c62828" text-anchor="end">20°</text>
      <text x="60" y="84" font-family="Arial" font-size="10" fill="#c62828" text-anchor="end">30°</text>
      <text x="60" y="54" font-family="Arial" font-size="10" fill="#c62828" text-anchor="end">35°C</text>

      <!-- Right Y Axis Labels (Rainfall cm) -->
      <text x="540" y="294" font-family="Arial" font-size="10" fill="#0288d1">0</text>
      <text x="540" y="234" font-family="Arial" font-size="10" fill="#0288d1">5</text>
      <text x="540" y="174" font-family="Arial" font-size="10" fill="#0288d1">10</text>
      <text x="540" y="114" font-family="Arial" font-size="10" fill="#0288d1">15</text>
      <text x="540" y="54" font-family="Arial" font-size="10" fill="#0288d1">20 cm</text>

      <!-- Monthly Bars (Rainfall) Center positions spaced across 460px: dx = 38px -->
      <!-- Jan (2.5): h=30 -->  <rect x="79" y="260" width="20" height="30" fill="#0288d1"/>
      <!-- Feb (1.5): h=18 -->  <rect x="117" y="272" width="20" height="18" fill="#0288d1"/>
      <!-- Mar (1.3): h=15 -->  <rect x="155" y="275" width="20" height="15" fill="#0288d1"/>
      <!-- Apr (1.0): h=12 -->  <rect x="193" y="278" width="20" height="12" fill="#0288d1"/>
      <!-- May (1.8): h=21 -->  <rect x="231" y="269" width="20" height="21" fill="#0288d1"/>
      <!-- Jun (7.4): h=88 -->  <rect x="269" y="202" width="20" height="88" fill="#0288d1"/>
      <!-- Jul (19.3): h=231 --><rect x="307" y="59" width="20" height="231" fill="#0288d1"/>
      <!-- Aug (17.8): h=213 --><rect x="345" y="77" width="20" height="213" fill="#0288d1"/>
      <!-- Sep (11.9): h=142 --><rect x="383" y="148" width="20" height="142" fill="#0288d1"/>
      <!-- Oct (1.3): h=15 -->  <rect x="421" y="275" width="20" height="15" fill="#0288d1"/>
      <!-- Nov (0.2): h=3 -->   <rect x="459" y="287" width="20" height="3" fill="#0288d1"/>
      <!-- Dec (1.0): h=12 -->  <rect x="497" y="278" width="20" height="12" fill="#0288d1"/>

      <!-- Monthly Temperature Points & Polyline (Red line) -->
      <!-- Points: (x, 290 - temp * 6.85) -->
      <!-- Jan:14.4 (89, 191), Feb:16.7 (127, 175), Mar:23.3 (165, 130), Apr:30.0 (203, 84), May:33.3 (241, 62), Jun:33.3 (279, 62) -->
      <!-- Jul:30.0 (317, 84), Aug:29.4 (355, 88), Sep:28.9 (393, 92), Oct:25.6 (431, 114), Nov:19.4 (469, 157), Dec:15.6 (507, 183) -->
      <polyline points="89,191 127,175 165,130 203,84 241,62 279,62 317,84 355,88 393,92 431,114 469,157 507,183" fill="none" stroke="#d32f2f" stroke-width="2.5"/>
      
      <circle cx="89" cy="191" r="3.5" fill="#d32f2f"/>
      <circle cx="127" cy="175" r="3.5" fill="#d32f2f"/>
      <circle cx="165" cy="130" r="3.5" fill="#d32f2f"/>
      <circle cx="203" cy="84" r="3.5" fill="#d32f2f"/>
      <circle cx="241" cy="62" r="3.5" fill="#d32f2f"/>
      <circle cx="279" cy="62" r="3.5" fill="#d32f2f"/>
      <circle cx="317" cy="84" r="3.5" fill="#d32f2f"/>
      <circle cx="355" cy="88" r="3.5" fill="#d32f2f"/>
      <circle cx="393" cy="92" r="3.5" fill="#d32f2f"/>
      <circle cx="431" cy="114" r="3.5" fill="#d32f2f"/>
      <circle cx="469" cy="157" r="3.5" fill="#d32f2f"/>
      <circle cx="507" cy="183" r="3.5" fill="#d32f2f"/>

      <!-- Month Labels X Axis -->
      <g font-family="Arial" font-size="10" fill="#444" text-anchor="middle">
        <text x="89" y="306">Jan</text>
        <text x="127" y="306">Feb</text>
        <text x="165" y="306">Mar</text>
        <text x="203" y="306">Apr</text>
        <text x="241" y="306">May</text>
        <text x="279" y="306">Jun</text>
        <text x="317" y="306">Jul</text>
        <text x="355" y="306">Aug</text>
        <text x="393" y="306">Sep</text>
        <text x="431" y="306">Oct</text>
        <text x="469" y="306">Nov</text>
        <text x="507" y="306">Dec</text>
      </g>

      <!-- Legend -->
      <g transform="translate(180, 332)" font-family="Arial" font-size="11">
        <line x1="0" y1="6" x2="24" y2="6" stroke="#d32f2f" stroke-width="2.5"/>
        <circle cx="12" cy="6" r="3" fill="#d32f2f"/>
        <text x="30" y="10" fill="#333">Temperature (°C)</text>
        <rect x="140" y="0" width="14" height="12" fill="#0288d1"/>
        <text x="160" y="10" fill="#333">Rainfall (cm)</text>
      </g>
    </svg>
  </div>

  <p><strong>7.1 Stations Re-arranged According to Distance from Equator (Lowest to Highest Latitude):</strong></p>
  <ol>
    <li>Thiruvananthapuram (8°29′N)</li>
    <li>Bengaluru (12°58′N)</li>
    <li>Chennai (13°4′N)</li>
    <li>Mumbai (19°N)</li>
    <li>Nagpur (21°9′N)</li>
    <li>Kolkata (22°34′N)</li>
    <li>Shillong (24°34′N)</li>
    <li>Jodhpur (26°18′N)</li>
    <li>Delhi (29°N)</li>
    <li>Leh (34°N)</li>
  </ol>

  <p><strong>7.2 Climatic Extremes and Influences:</strong></p>
  <ul>
    <li><strong>a. Two stations with the most extreme climate:</strong> Leh (sub-zero winter temperatures, high altitude) and Delhi / Jodhpur (high annual temperature range between hot summers and chilly winters).</li>
    <li><strong>b. Two stations influenced by retreating / winter monsoons:</strong> Chennai and Thiruvananthapuram.</li>
    <li><strong>c. The two hottest stations:</strong>
      <br/>• <em>In February:</em> Thiruvananthapuram (28.7°C) and Chennai (25.7°C).
      <br/>• <em>In June:</em> Jodhpur (33.9°C) and Delhi (33.3°C).
    </li>
  </ul>

  <p><strong>7.3 Geographic Reasons for Rainfall Variations:</strong></p>
  <ul>
    <li><strong>a. Shillong vs. Kolkata:</strong> Shillong sits in the Khasi Hills where moisture-laden Bay of Bengal monsoon winds are funneled and forced upward, causing heavy orographic precipitation compared to low-lying Kolkata.</li>
    <li><strong>b. Delhi vs. Jodhpur:</strong> Delhi lies further east along the path of the monsoon trough, while Jodhpur lies in western Rajasthan where monsoon winds have shed most moisture and the Aravalli range aligns parallel to winds without obstructing them.</li>
  </ul>

  <p><strong>7.4 Climate Explanations:</strong></p>
  <ul>
    <li><strong>a. Thiruvananthapuram's equable climate:</strong> Its coastal location close to the equator grants strong moderating maritime influences with negligible seasonal temperature variation.</li>
    <li><strong>b. Chennai's late rainfall:</strong> Chennai lies on the Coromandel coast, positioned in the rain-shadow of the Western Ghats during the south-west monsoon; it receives the majority of its rain between October and December from north-east retreating winds picking up Bay of Bengal moisture.</li>
    <li><strong>c. Leh's moderate precipitation:</strong> Leh is located on an elevated plateau enclosed by the Great Himalayas, which block monsoon winds, leaving it in a cold arid rain-shadow zone.</li>
  </ul>

  <p><strong>7.5 Monsoon as a Unifying Framework:</strong></p>
  <ul>
    <li>Despite thermal and regional variations, the rhythmic seasonal cycle of the monsoons regulates agricultural rhythms, cultural celebrations, water replenishment, and river systems throughout the entire country.</li>
  </ul>
</div>`
},

  // Q8 & A8
  {
  q: `<div class="q-block">
  <p>8. Collect pictures of houses and clothing of people from different regions of India. Examine whether they reflect any relationship with the climatic conditions or the relief of those regions.</p>
</div>`,
  a: `<div class="a-block">
  <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin: 16px 0;">
    <div style="flex: 1; min-width: 240px; max-width: 300px; text-align: center; border: 1px solid #d4c2a8; border-radius: 8px; padding: 10px; background: #fff;">
      <img src="images/ladakh_house.jpg" alt="Traditional stone house in Ladakh with flat roof" style="width: 100%; height: auto; border-radius: 6px;" />
      <p style="margin: 8px 0 0 0; font-size: 13px; font-weight: bold; color: #5d4037;">Ladakh: Stone &amp; Mud-Brick House</p>
    </div>
    <div style="flex: 1; min-width: 240px; max-width: 300px; text-align: center; border: 1px solid #d4c2a8; border-radius: 8px; padding: 10px; background: #fff;">
      <img src="images/ladakh_clothing.png" alt="People in Ladakh wearing thick woollen goncha" style="width: 100%; height: auto; border-radius: 6px;" />
      <p style="margin: 8px 0 0 0; font-size: 13px; font-weight: bold; color: #5d4037;">Ladakh: Traditional Woollen Goncha</p>
    </div>
  </div>
  <ul>
    <li><strong>Chosen Region:</strong> Ladakh (Cold High-Altitude Desert).</li>
    <li><strong>Housing vs. Climate and Relief:</strong>
      <br/>• Houses are built with thick two-storey stone and sun-dried mud-brick walls to trap heat and insulate living areas from sub-zero winter temperatures.
      <br/>• Roofs are completely flat because Ladakh lies in a rain-shadow zone with minimal rainfall or snowfall; the flat roofs serve as drying platforms for winter food supplies.
    </li>
    <li><strong>Clothing vs. Climate:</strong>
      <br/>• People wear the <em>goncha</em> (a thick, warm woollen robe tied at the waist) made from local sheep and yak wool.
      <br/>• Heavy woollen caps and boots insulate against extreme freezing winds and prevent frostbite.
    </li>
  </ul>
</div>`
},
] },
                     ]
            },
            {   
                name: `History`,     
                chapters: [
                { name: `Chapter 4: Early Humans and Beginning
of Civilisation
` , solutions: [// Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. Do you think life became easier or more challenging after humans started farming? Give two reasons for your answer.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Life Became More Secure and Predictable:</strong> Farming ensured a reliable, localized supply of food through cultivated cereals and domesticated livestock, ending the constant hazard and physical exhaustion of roaming to hunt wild game.</li>
    <li><strong>Life Brought New Demands and Vulnerabilities:</strong> Agriculture demanded rigorous year-round manual labor—clearing forests, tilling soil, weeding, and managing irrigation—while making communities vulnerable to famine if seasonal rainfall failed or pestilence wiped out stored crops.</li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. The environment offers human societies both opportunities as well as challenges. Explain with reference to early farming communities and river-valley civilisations.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Environmental Opportunities:</strong> River valleys like the Indus, Nile, Tigris-Euphrates, and Huang He provided perpetual supplies of freshwater, naturally fertile alluvial silt renewed by seasonal floods, and navigable waterways for transport and trade.</li>
    <li><strong>Environmental Challenges:</strong> Unpredictable, violent flooding could submerge entire settlements, prolonged droughts dried out field crops, and soil exhaustion or marshy diseases threatened community survival, prompting the construction of check dams, canals, and embankments.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. Why do historians divide early human history into different ages such as Stone Age, Bronze Age, and Iron Age? What does this classification tell us about human progress?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Reason for Periodisation:</strong> The classification is based on the primary raw material used by humans to manufacture their essential tools, implements, and weapons during that historical era.</li>
    <li><strong>Significance for Human Progress:</strong> It illustrates humanity's increasing technological mastery over nature—moving from chipping raw stones to smelting metal alloys like bronze, and eventually extracting durable iron, which allowed deeper ploughing, dense forest clearance, and the growth of complex urban civilizations.</li>
  </ul>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. Imagine you are a Neolithic farmer. Describe one day of your life. What challenges would you face that a hunter-gatherer would not?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>A Day in the Life:</strong> Waking up in a sun-dried mud-brick hut, tending to domesticated goats and cattle, weeding the barley plots using polished stone hoes, processing grain with querns, and firing clay pots for storing evening meals.</li>
    <li><strong>Unique Agricultural Challenges:</strong> Unlike mobile hunter-gatherers who could follow wildlife when conditions changed, a farmer was bound to one plot of land (sedentism), risking total starvation if pests, drought, or floods ruined the crop.</li>
  </ul>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. Imagine that the Harappan script gets deciphered tomorrow. What new types of information do you think historians might learn?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Political and Administrative Structures:</strong> Decipherment would reveal whether the Indus cities were ruled by monarchies, priest-kings, or merchant councils, and explain the administrative rules behind their uniform town planning.</li>
    <li><strong>Religious Beliefs and Literature:</strong> It would provide direct knowledge of the names of their gods, the purpose of rituals on seals, their mythologies, and specific diplomatic or trade records with West Asian kingdoms like Sumer and Akkad.</li>
  </ul>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. Prepare a table with three columns—Palaeolithic, Mesolithic, and Neolithic and fill in their distinctive features: tools, settlements, art, and subsistence.</p>
</div>`,
    a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 13px;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Feature</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Palaeolithic</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Mesolithic</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Neolithic</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Tools</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Large stone handaxes, cleavers, choppers, scrapers</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Microliths (tiny composite stone points, arrowheads)</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Polished stone axes, celts, grinding querns</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Settlements</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Nomadic shelters, natural caves, open river camps</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Temporary seasonal camps, rock shelters</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Permanent village homes of mud and sun-dried brick</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Art</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Basic body pigments, shell and bone beads</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Dynamic rock paintings (e.g., Bhimbetka caves)</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Painted pottery, terracotta figures, decorative beads</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Subsistence</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Hunting large wild animals, gathering roots and berries</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Hunting small game, fishing, wild grain gathering</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Cultivating crops, herding domesticated livestock</td>
      </tr>
    </tbody>
  </table>
</div>`
  },

  // Q7 & A7
  {
    q: `<div class="q-block">
  <p>7. "Bronze Age civilisations developed independently but shared common features." Examine this statement with reference to the civilisations given in the chapter.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Independent River Valley Origins:</strong> Civilisations arose in distinct geographical river basins—Sindhu-Sarasvatī along the Indus and Sarasvatī, Mesopotamia along the Euphrates and Tigris, Egypt along the Nile, and China along the Huang He and Yangtze.</li>
    <li><strong>Shared Urban and Economic Features:</strong> Each relied on fertile river alluvium for high-yield agriculture, mastered bronze and copper metallurgy, established organized city planning, used standardized weights or measures, and developed early writing systems (like cuneiform, hieroglyphs, or oracle bone script) to regulate administration and trade.</li>
  </ul>
</div>`
  },

  // Q8 & A8
  {
    q: `<div class="q-block">
  <p>8. Although rivers provided many benefits, they also created challenges for early societies. Discuss both the advantages and disadvantages of settling near rivers.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Advantages of River Settlements:</strong> Rivers provided reliable year-round freshwater, deposited fertile silt (such as kemet in Egypt) during seasonal floods, supported fishing, and served as vital highways for long-distance boat navigation and trade.</li>
    <li><strong>Disadvantages and Hazards:</strong> Unpredictable, violent flooding could wash away homes and fields, seasonal drought caused water shortages, shifting river courses left cities stranded, and stagnant waters bred diseases.</li>
  </ul>
</div>`
  },

  // Q9 & A9
  {
    q: `<div class="q-block">
  <p>9. With the help of your teacher, find out more about the Code of Hammurabi. Why was it important? Do you think it was fair to all sections of society? Give reasons for your answer.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Importance of the Code:</strong> Compiled by King Hammurabi around 1792 BCE in Babylon, it provided a written set of uniform civil and criminal laws inscribed on stone stelae, establishing accountability and serving as a model for future legal systems.</li>
    <li><strong>Fairness Evaluation:</strong> It was not equally fair to all social classes. While it offered protections against fraud and malpractice, punishments strictly depended on social hierarchy, imposing harsher physical penalties when crimes were committed against upper-class elites compared to lower-class commoners or enslaved people.</li>
  </ul>
</div>`
  },

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. If you had to choose one major innovation from early civilisations that changed the world permanently, what would it be and why?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Major Innovation:</strong> The Invention of Writing Systems (such as Sumerian cuneiform, Egyptian hieroglyphs, and Harappan script).</li>
    <li><strong>Global Impact:</strong> Writing allowed humans to permanently record knowledge, trade transactions, laws, scientific calculations, and history across generations, moving humanity from prehistory into recorded civilization.</li>
  </ul>
</div>`
  },

  // Q11 & A11
  {
    q: `<div class="q-block">
  <p>11. Compare the social hierarchy and daily life of people in the Egyptian civilisation with those in Mesopotamia or China. What similarities and differences do you notice?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Similarities:</strong> All three civilisations were deeply stratified with a divine or sacred monarch at the peak (Pharaoh, Mesopotamian Priest-King, or Zhou King with the Mandate of Heaven), supported by nobles/priests, while peasants, artisans, and laborers formed the broad base.</li>
    <li><strong>Differences:</strong> Egyptian society placed massive focus on funerary rituals and the afterlife (mummification, building mastabas and pyramids), while Mesopotamia centered public life around city-state temple complexes (ziggurats), and early Chinese society emphasized divination using oracle bones and ancestral bronze rituals. Furthermore, Egyptian women held legal rights to own property and run businesses.</li>
  </ul>
</div>`
  },

  // Q12 & A12 (STRICTLY REQUIRES IMAGE / MAP OF TRADE LINKS)
  {
  q: `<div class="q-block">
  <p>12. Activity: Using maps, locate the major rivers and civilisations of Mesopotamia, Egypt, China, and the Sindhu-Sarasvatī Valley. Mark the trade links between them.</p>
</div>`,
  a: `<div class="a-block">
  <ul>
    <li><strong>Major Rivers and Civilisations:</strong> Nile River in Egypt, Tigris and Euphrates in Mesopotamia, Indus and Sarasvatī in northwestern India, and the Huang He and Yangtze in China.</li>
    <li><strong>Documented Trade Links:</strong> Archaeological and cuneiform records verify regular sea and coastal trade between the Harappan Civilisation (known as Meluhha) and Mesopotamia via intermediary gulf ports of Dilmun (Bahrain) and Magan (Oman), exchanging copper, carnelian beads, ivory, timber, and lapis lazuli   .</li>
  </ul>
</div>`, image: `images/hii.jpg`
},

  // Q13 & A13 (STRICTLY REQUIRES IMAGE / PRESENTATION SCRAPBOOK VISUAL)
  {
    q: `<div class="q-block">
  <p>13. Activity: Choose one early civilisation (Mesopotamia, Egypt, or China) and prepare a mini-scrapbook or a presentation showing their innovations in tools, writing, art, and architecture. Include pictures, brief descriptions, and explain their significance.</p>
</div>`,
    a: `<div class="a-block">
  <div style="text-align: center; margin-bottom: 16px;">
    <svg viewBox="0 0 600 320" width="100%" height="auto" style="max-width: 540px; border-radius: 8px; background: linear-gradient(to bottom, #fdfaf2, #f5ebd7); border: 1px solid #d4c2a8;">
      <!-- Title Banner -->
      <rect x="0" y="0" width="600" height="46" fill="#8d5b28" rx="8" ry="8"/>
      <rect x="0" y="38" width="600" height="8" fill="#8d5b28"/>
      <text x="300" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">SCRAPBOOK: INNOVATIONS OF MESOPOTAMIA</text>
      
      <!-- Panel 1: Writing -->
      <g transform="translate(18, 62)">
        <rect width="130" height="240" rx="5" fill="#ffffff" stroke="#cfa670" stroke-width="1.2"/>
        <rect width="130" height="26" rx="5" fill="#faede1"/>
        <text x="65" y="17" font-family="Arial" font-size="11" font-weight="bold" fill="#7a3e14" text-anchor="middle">1. WRITING</text>
        <rect x="35" y="42" width="60" height="45" rx="3" fill="#e8d3b9" stroke="#8d5b28" stroke-width="1"/>
        <text x="65" y="68" font-family="Arial" font-size="12" fill="#5d4037" text-anchor="middle">▼ ◀ ▶</text>
        <text x="65" y="105" font-family="Arial" font-size="10" font-weight="bold" fill="#333" text-anchor="middle">Cuneiform Script</text>
        <text x="65" y="125" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">Wedge marks pressed</text>
        <text x="65" y="138" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">into damp clay tablets</text>
        <text x="65" y="158" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">Recorded trade, laws,</text>
        <text x="65" y="171" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">and early literature</text>
      </g>
      
      <!-- Panel 2: Tools & Science -->
      <g transform="translate(160, 62)">
        <rect width="130" height="240" rx="5" fill="#ffffff" stroke="#cfa670" stroke-width="1.2"/>
        <rect width="130" height="26" rx="5" fill="#faede1"/>
        <text x="65" y="17" font-family="Arial" font-size="11" font-weight="bold" fill="#7a3e14" text-anchor="middle">2. TOOLS / TECH</text>
        <circle cx="65" cy="65" r="22" fill="#e8d3b9" stroke="#8d5b28" stroke-width="1.5"/>
        <line x1="43" y1="65" x2="87" y2="65" stroke="#8d5b28" stroke-width="1.5"/>
        <line x1="65" y1="43" x2="65" y2="87" stroke="#8d5b28" stroke-width="1.5"/>
        <text x="65" y="105" font-family="Arial" font-size="10" font-weight="bold" fill="#333" text-anchor="middle">Wheel & Sailboat</text>
        <text x="65" y="125" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">Pioneered the wheeled</text>
        <text x="65" y="138" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">cart and sailboats</text>
        <text x="65" y="158" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">Base-60 system: 60 min</text>
        <text x="65" y="171" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">hour and 360° circle</text>
      </g>
      
      <!-- Panel 3: Architecture -->
      <g transform="translate(302, 62)">
        <rect width="130" height="240" rx="5" fill="#ffffff" stroke="#cfa670" stroke-width="1.2"/>
        <rect width="130" height="26" rx="5" fill="#faede1"/>
        <text x="65" y="17" font-family="Arial" font-size="11" font-weight="bold" fill="#7a3e14" text-anchor="middle">3. ARCHITECTURE</text>
        <polygon points="40,82 90,82 82,60 48,60" fill="#bcaaa4"/>
        <polygon points="48,60 82,60 76,46 54,46" fill="#8d6e63"/>
        <rect x="58" y="38" width="14" height="8" fill="#5d4037"/>
        <text x="65" y="105" font-family="Arial" font-size="10" font-weight="bold" fill="#333" text-anchor="middle">Ziggurat Temples</text>
        <text x="65" y="125" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">Stepped mud-brick</text>
        <text x="65" y="138" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">pyramidal towers</text>
        <text x="65" y="158" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">Served as temples,</text>
        <text x="65" y="171" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">granaries, and treasuries</text>
      </g>
      
      <!-- Panel 4: Art & Law -->
      <g transform="translate(444, 62)">
        <rect width="135" height="240" rx="5" fill="#ffffff" stroke="#cfa670" stroke-width="1.2"/>
        <rect width="135" height="26" rx="5" fill="#faede1"/>
        <text x="67" y="17" font-family="Arial" font-size="11" font-weight="bold" fill="#7a3e14" text-anchor="middle">4. LAW & ART</text>
        <rect x="52" y="42" width="30" height="48" rx="6" fill="#424242"/>
        <line x1="56" y1="62" x2="78" y2="62" stroke="#bbb" stroke-width="1"/>
        <line x1="56" y1="68" x2="78" y2="68" stroke="#bbb" stroke-width="1"/>
        <line x1="56" y1="74" x2="78" y2="74" stroke="#bbb" stroke-width="1"/>
        <text x="67" y="105" font-family="Arial" font-size="10" font-weight="bold" fill="#333" text-anchor="middle">Hammurabi's Code</text>
        <text x="67" y="125" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">Inscribed stone steles</text>
        <text x="67" y="138" font-family="Arial" font-size="8.5" fill="#555" text-anchor="middle">with royal reliefs</text>
        <text x="67" y="158" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">Provided codified rules</text>
        <text x="67" y="171" font-family="Arial" font-size="8.5" fill="#777" text-anchor="middle">for justice and trade</text>
      </g>
    </svg>
  </div>
  <ul>
    <li><strong>Chosen Civilisation:</strong> Mesopotamia (Sumer, Akkad, Babylon).</li>
    <li><strong>Writing (Cuneiform):</strong> The world's earliest wedge-shaped script on damp clay tablets, enabling the recording of the Epic of Gilgamesh, administration, and trade accounts.</li>
    <li><strong>Technology & Mathematics:</strong> Invented wheeled transport carts, sailboats, canal irrigation systems, the base-60 numbering system, the 60-minute hour, and the 360-degree circle.</li>
    <li><strong>Architecture (Ziggurats):</strong> Grand stepped mud-brick tower temples that functioned as holy sanctums, public treasuries, and administrative nerve centers.</li>
    <li><strong>Law & Art (Code of Hammurabi):</strong> Carved basalt stone stelae depicting King Hammurabi receiving laws from the justice god Shamash, establishing codified civil standards.</li>
  </ul>
</div>`
  }] },
                { name: "Chapter 5: State and Society upto 1000 CE", solutions: [
  // Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. How did political organisation change from the Vedic period to the age of large empires such as the Mauryas and the Guptas? Explain the administrative system of the early Indian states.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Shift in Political Formations:</strong> Governance initially revolved around tribal, lineage-centered units (<em>janas</em>) led by chiefs. With sedentary agriculture taking hold, territorial identities (<em>janapadas</em>) emerged and eventually consolidated into sixteen larger realms (<em>mahājanapadas</em>), which culminated in vast imperial polities like the Mauryan and Gupta realms.</li>
    <li><strong>Administrative Setup:</strong> The monarch presided over the apparatus with help from a ministerial council (<em>mantri-parishad</em>). Governance operated across layered tiers, dividing territories into provinces (termed <em>bhuktis</em> or <em>mandalams</em>), divisions and districts (<em>vishayas</em> or <em>nādus</em>), down to local villages directed by headmen (<em>grāmikas</em>) and councils.</li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. Describe the role of the king, important officers, and the methods used to govern large territories.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Responsibilities of the Ruler:</strong> The monarch was tasked with securing borders against outside incursions, keeping internal stability, running judicial systems, and commissioning vital public initiatives such as reservoir networks.</li>
    <li><strong>Key Functionaries:</strong> Administration depended on trusted advisers and functionaries (<em>amātyas</em>), military commanders, finance overseers, tax executives, and diplomats like the Gupta-era foreign affairs officer (<em>sāndhivigrahika</em>).</li>
    <li><strong>Methods for Broad Control:</strong> Monarchs distributed territorial supervision across provinces and districts, posted regional governors (<em>pradeśhikas</em>), collaborated with town guild dignitaries, and maintained transit corridors.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. After studying this chapter, what do you think were the most important features of the state and society in India before 1000 CE?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Ethical Frameworks:</strong> Sovereignty and daily living were shaped by philosophical notions of righteousness (<em>dharma</em>), cosmic order (<em>rita</em>), and spiritual equality (<em>samatva</em>).</li>
    <li><strong>Self-Sustaining Local Councils:</strong> Grassroots administration functioned through autonomous village committees and professional merchant associations (<em>shreṇīs</em>) that settled disputes, managed public property, and funded civic needs.</li>
    <li><strong>Vibrant Cultural Intercourse:</strong> The civilization supported wide-ranging overland and oceanic commerce (<em>Uttarāpatha</em>, <em>Dakshiṇāpatha</em>), residential centers of higher learning, and evolving social customs.</li>
  </ul>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. What do early texts such as the Rigveda, Arthashastra, and the Mahābhārata reveal about political and social life?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Rigveda:</strong> Documents an early kinship-driven community featuring collective assemblies (<em>sabhā</em>, <em>samiti</em>, <em>vidhata</em>) and flexible trade pursuits within single households.</li>
    <li><strong>Arthashastra:</strong> Sets forth a structured doctrine of pragmatic administration focused on the seven pillars of polity (<em>Saptāṃga</em>), state revenue monitoring, and economic enterprise.</li>
    <li><strong>Mahābhārata:</strong> In the <em>Shanti Parva</em>, it explores the ruler’s ethical burden to guard society, dispense impartial justice, and sustain collective social wellbeing.</li>
  </ul>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. What can we learn from early Indian society about varna and the role of women?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Varna Arrangement:</strong> Initial classifications were functional divisions of duties rather than inherited identities at birth, permitting mobility across occupational roles.</li>
    <li><strong>Standing of Women:</strong> In early periods, women accessed education, composed sacred hymns (such as Lopamudra and Ghoshā), and took part in public congregations. Even with later cultural constraints, royal women like Prabhāvatī Gupta exercised political regency, and southern records celebrate female bards, traders, and cultural donors.</li>
  </ul>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. Explain how assemblies like sabhā and samiti limited the power of the rājā. Which modern institutions perform similar functions today?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Checks on Chieftain Authority:</strong> The <em>sabhā</em> served as an elder council handling legal verdicts, while the <em>samiti</em> served as a popular gathering for collective political decision-making, restraining unilateral ruler actions.</li>
    <li><strong>Contemporary Parallels:</strong> Modern parliamentary chambers and constitutional supreme courts operate with comparable oversight to keep executive heads of state accountable.</li>
  </ul>
</div>`
  },

  // Q7 & A7
  {
    q: `<div class="q-block">
  <p>7. What do the terms varṇa and jāti refer to in early Indian society? How were they different, and what factors may have contributed to the formation of various jātis?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Distinction:</strong> <em>Varṇa</em> designated the overarching four-part functional template (Brāhmaṇa, Kshatriya, Vaishya, Shūdra), whereas <em>jāti</em> represented numerous regional, endogamous communities centered on trades.</li>
    <li><strong>Factors of Formation:</strong> Proliferation occurred due to cross-community family unions, the conversion of trade guilds into localized social networks, migratory influxes, and the incorporation of forest societies into agricultural regions.</li>
  </ul>
</div>`
  },
  {
    q: `<div class="q-block">
  <p>8. Why do you think education in early India emphasised both knowledge and moral values? How might this have benefited society?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Purpose of Integrated Learning:</strong> Classical instruction nurtured technical expertise alongside ethical virtues—self-restraint, respect, and duty—to prepare students for responsible community life.</li>
    <li><strong>Societal Benefit:</strong> Grounding students in civic duty ensured administrators, scholars, and merchants performed their trades with honesty, reinforcing social harmony and institutional stability.</li>
  </ul>
</div>`
  },

  // Q9 & A9 (Directly examines textbook map Fig. 5.12)
 {
  q: `<div class="q-block">
  <p>9. Look at the major trade routes of early India (Fig 5.12). How do you think these routes helped people in the exchange of goods, skills, beliefs, and cultural practices?</p>
</div>`,
  a: `<div class="a-block">
  <ul>
    <li><strong>Commercial Integration:</strong> The northern <em>Uttarāpatha</em> and southern <em>Dakshiṇāpatha</em> channels connected inland trading towns with coastal ports, facilitating traffic in textiles, spices, metals, and gemstones.</li>
    <li><strong>Cultural and Intellectual Exchange:</strong> These highways enabled traveling monks, craftspeople, and academics to share architectural methods, philosophical ideas, and literary traditions across different regions.</li>
  </ul>
</div>`, image: `images/figg.png`
},

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. What might have been the advantages and challenges of ruling a large empire in the absence of modern communication systems?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Advantages:</strong> Access to rich, varied regional revenues, diverse agricultural produce, long-distance tolls, and high strategic power against external invaders.</li>
    <li><strong>Challenges:</strong> Travel delays in relaying imperial commands across distances, risks of local rebellion or corruption among regional officials, and the continuous expense of garrisoning frontier zones.</li>
  </ul>
</div>`
  },

  // Q11 & A11
  {
    q: `<div class="q-block">
  <p>11. Many ideas about governance come from texts composed by scholars and advisors of the king. What might be some limitations of relying only on such sources?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Elite Theoretical Lens:</strong> Works like the <em>Arthashastra</em> or royal edicts depict prescribed ideals rather than day-to-day realities experienced by ordinary subjects.</li>
    <li><strong>Absence of Subaltern Voices:</strong> Court texts minimize perspectives from marginal groups, agricultural laborers, and lower artisanal strata, making corroboration with archaeology, copper-plate records, and folk accounts necessary.</li>
  </ul>
</div>`
  },

  // Q12 & A12
  {
    q: `<div class="q-block">
  <p>12. Read the source and answer the questions (Nashik cave inscription of Ushavadāta):<br/>
  a. What does this source tell us about the economic role of guilds?<br/>
  b. Why were guilds trusted with money deposits?<br/>
  c. Identify the donor and the donees from the given source.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Economic Function:</strong> Demonstrates that guilds (<em>shreṇīs</em>) ran financial operations, took cash deposits, and paid recurring interest to fund designated endowments.</li>
    <li><strong>b. Public Trust:</strong> Guilds were trusted due to their internal peer courts, durable trade output, and long-standing solvency, which ensured reliable returns on endowments.</li>
    <li><strong>c. Parties Involved:</strong> The donor was Ushavadāta (son-in-law of King Nahapāna); the beneficiaries were the monastics residing in the cave complex.</li>
  </ul>
</div>`
  },

  // Q13 & A13 (Requires Map of India)
  {
    q: `<div class="q-block">
  <p>13. Mark and locate on the map of India the following important centres: Pāțaliputra, Nāśhik, Ujjayinī, Vikramśhila, Kānchipuram, Mathurā, Rājgriha.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Location Guide for Outline Map of India:</strong>
      <br/>• <em>Pāțaliputra:</em> Modern Patna, along the south bank of the Ganga in Bihar.
      <br/>• <em>Nāśhik:</em> Western Maharashtra, along the upper Godavari River basin.
      <br/>• <em>Ujjayinī:</em> Malwa plateau in modern Madhya Pradesh.
      <br/>• <em>Vikramśhila:</em> Near modern Bhagalpur in eastern Bihar.
      <br/>• <em>Kānchipuram:</em> Northern Tamil Nadu, southwest of Chennai.
      <br/>• <em>Mathurā:</em> Western Uttar Pradesh, along the Yamuna River.
      <br/>• <em>Rājgriha:</em> Modern Rajgir, Nalanda district in Bihar.
    </li>
  </ul>
</div>`, image: `images/rot.png` 
  },

  // Q14 & A14 (Requires Presentation/Poster visual)
 {
  q: `<div class="q-block">
  <p>14. Prepare a short presentation or poster on one of the following: a. Life in the Vedic society, b. Early education system (gurukula), c. Trade and guilds in early India, d. Role of women in early Indian society.</p>
</div>`,
  a: `<div class="a-block">
  <div style="text-align: center; margin-bottom: 16px;">
    <svg viewBox="0 0 600 320" width="100%" height="auto" style="max-width: 540px; border-radius: 8px; background: linear-gradient(to bottom, #fdfaf2, #f5ebd7); border: 1px solid #d4c2a8;">
      <!-- Header Banner -->
      <rect x="0" y="0" width="600" height="48" fill="#8d5b28" rx="8" ry="8"/>
      <rect x="0" y="40" width="600" height="8" fill="#8d5b28"/>
      <text x="300" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">GURUKULA: HOLISTIC LEARNING IN EARLY INDIA</text>

      <!-- Panel 1: Guru-Shishya Parampara -->
      <g transform="translate(20, 65)">
        <rect width="170" height="235" rx="6" fill="#ffffff" stroke="#cfa670" stroke-width="1.5"/>
        <rect width="170" height="28" rx="6" fill="#faede1"/>
        <text x="85" y="19" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#7a3e14" text-anchor="middle">GURU-SHISHYA</text>
        <!-- Icon: Teacher & Disciple -->
        <circle cx="85" cy="65" r="16" fill="#cfa670"/>
        <path d="M 65,115 C 65,92 105,92 105,115 Z" fill="#8d5b28"/>
        <circle cx="120" cy="80" r="11" fill="#dfc09f"/>
        <path d="M 106,115 C 106,99 134,99 134,115 Z" fill="#b07d48"/>
        <!-- Text description -->
        <text x="85" y="140" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#333" text-anchor="middle">Sacred Relationship</text>
        <text x="85" y="160" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">Residential learning as part</text>
        <text x="85" y="174" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">of the teacher's household</text>
        <text x="85" y="196" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">Disciplined life focused on</text>
        <text x="85" y="210" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">humility and self-control</text>
      </g>

      <!-- Panel 2: Comprehensive Curriculum -->
      <g transform="translate(215, 65)">
        <rect width="170" height="235" rx="6" fill="#ffffff" stroke="#cfa670" stroke-width="1.5"/>
        <rect width="170" height="28" rx="6" fill="#faede1"/>
        <text x="85" y="19" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#7a3e14" text-anchor="middle">CURRICULUM</text>
        <!-- Icon: Manuscript / Book -->
        <rect x="58" y="55" width="54" height="42" rx="3" fill="#e8d3b9" stroke="#8d5b28" stroke-width="1.5"/>
        <line x1="66" y1="67" x2="104" y2="67" stroke="#8d5b28" stroke-width="1.5"/>
        <line x1="66" y1="76" x2="104" y2="76" stroke="#8d5b28" stroke-width="1.5"/>
        <line x1="66" y1="85" x2="94" y2="85" stroke="#8d5b28" stroke-width="1.5"/>
        <!-- Text description -->
        <text x="85" y="140" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#333" text-anchor="middle">Broad Discipline</text>
        <text x="85" y="160" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">• Vedas, Philosophy & Logic</text>
        <text x="85" y="176" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">• Mathematics & Astronomy</text>
        <text x="85" y="192" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">• Medicine & Natural Sciences</text>
        <text x="85" y="208" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">• Martial Arts & Archery</text>
      </g>

      <!-- Panel 3: Moral & Ethical Ideals -->
      <g transform="translate(410, 65)">
        <rect width="170" height="235" rx="6" fill="#ffffff" stroke="#cfa670" stroke-width="1.5"/>
        <rect width="170" height="28" rx="6" fill="#faede1"/>
        <text x="85" y="19" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#7a3e14" text-anchor="middle">VALUES & DHARMA</text>
        <!-- Icon: Lotus of Wisdom -->
        <circle cx="85" cy="76" r="18" fill="#f5d6bb"/>
        <path d="M 85,62 C 72,74 74,90 85,94 C 96,90 98,74 85,62 Z" fill="#cfa670"/>
        <!-- Text description -->
        <text x="85" y="140" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#333" text-anchor="middle">Inner Development</text>
        <text x="85" y="160" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">Cultivation of truth, purity</text>
        <text x="85" y="174" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">and respect for all living beings</text>
        <text x="85" y="196" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">Preparation for complete life</text>
        <text x="85" y="210" font-family="Arial, sans-serif" font-size="9" fill="#555" text-anchor="middle">and civic duty in society</text>
      </g>
    </svg>
  </div>
  <ul>
    <li><strong>Guru-Shishya Paramparā:</strong> The preceptor (guru) guided pupils from ignorance to understanding within a close family setting that demanded discipline, simplicity, and mutual respect.</li>
    <li><strong>Comprehensive Knowledge Base:</strong> Education integrated intellectual studies (Vedas, logic, astronomy, mathematics, medicine) with physical training, arts, and crafts.</li>
    <li><strong>Guiding Ethical Mission:</strong> The system emphasized dharma, character development, inner purity, and duty toward family and community over mere career advancement.</li>
  </ul>
</div>`
},
  // Q15 & A15
  {
    q: `<div class="q-block">
  <p>15. Divide the class into three groups. Each group will work on one project (water, wind, and glacier). The project should highlight the causes, impact on human life and the environment, and mitigation measures.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Group 1 – Running Water:</strong> Triggered by excessive rains and shifting stream beds; causes loss of arable land and damaged settlements; mitigated by bund construction, check dams, and hillside afforestation.</li>
    <li><strong>Group 2 – Wind:</strong> Occurs in dry terrains through soil exposure and storms; leads to desertification and health concerns; addressed through windbreaks, shelterbelts, and sand-fixation planting.</li>
    <li><strong>Group 3 – Glaciers:</strong> Driven by warming and weakening moraine lake barriers (GLOFs); threatens downstream river valleys; managed through satellite tracking, flow sensors, and controlled lake drainage.</li>
  </ul>
</div>`
  }
] },
                ]
                        
            },
            { 
                name: `Political Science`,
                chapters: [        
                    { name: "Chapter 6: Democracy", solutions: [
  // Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. Read the passage and answer the questions that follow: A school cabinet was responsible for planning a Republic Day celebration, and members had different opinions on which activities to include. After a discussion, they decided to vote, and the activities supported by the majority were selected.</p>
  <p>a. Which democratic values are reflected in this situation?</p>
  <p>b. How does voting help resolve differences of opinion?</p>
  <p>c. Why is the majority decision important in a democracy?</p>
  <p>d. Mention responsibilities of elected representatives after a decision is made.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Democratic values reflected:</strong> Deliberation, equality, mutual respect for differing viewpoints, collective decision-making, and peaceful consensus through majority consent.</li>
    <li><strong>b. Role of voting:</strong> Voting provides an orderly, unbiased, and transparent mechanism to resolve conflicting viewpoints peacefully without conflict or arbitrary decisions.</li>
    <li><strong>c. Importance of majority decision:</strong> It ensures legitimacy and fairness by reflecting the collective preference of the greatest number of participants while maintaining equal voting power.</li>
    <li><strong>d. Responsibilities of elected representatives:</strong>
      <br/>• Respect and implement the finalized decision faithfully, even if they initially voted against it.
      <br/>• Protect the interests and dignity of minority dissenters.
      <br/>• Execute the assigned celebration duties transparently and remain accountable to the student body.
    </li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. How would democracy be affected if citizens stopped following laws and civic responsibilities? Explain with an example.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Breakdown of Public Order and the Rule of Law:</strong> Democracy relies on mutual trust and civic responsibility. If citizens disobey laws, the rule of law collapses into chaos and arbitrary power, compromising individual rights and protections.</li>
    <li><strong>Disruption of Public Systems:</strong> Civic apathy and rule violations paralyze municipal and social services.</li>
    <li><strong>Illustrative Example:</strong> If citizens stop obeying traffic regulations or vandalize public transit buses, public mobility halts, lives are endangered, and state funds must be diverted from healthcare or education to repair public infrastructure.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. Which situation best reflects the idea of popular sovereignty and why?</p>
  <p>a. A law is passed without public discussion</p>
  <p>b. Citizens vote to choose their representatives</p>
  <p>c. A court gives a final judgment</p>
  <p>d. A minister takes an independent decision</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Correct Option:</strong> <strong>b. Citizens vote to choose their representatives</strong></p>
  <p><strong>Reason:</strong> Popular sovereignty establishes that the ultimate source of state authority resides in the people. Exercising universal adult franchise through free and periodic elections directly translates citizens' will into governing authority.</p>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. The Rule of Law is violated when:</p>
  <p>a. Laws are applied equally to all</p>
  <p>b. Courts review government actions</p>
  <p>c. Powerful individuals are treated above the law</p>
  <p>d. Citizens challenge laws through legal means</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Correct Option:</strong> <strong>c. Powerful individuals are treated above the law</strong></p>
  <p><strong>Reason:</strong> The fundamental premise of the Rule of Law is equality before the law and equal protection of the laws, ensuring no authority, elite, or powerful individual stands above the legal framework.</p>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. Why is the Rule of Law essential for protecting democracy?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Curtails Arbitrary Authority:</strong> Prevents political leaders and state institutions from misusing power, ensuring all state actions comply with established legal procedures.</li>
    <li><strong>Guarantees Fundamental Equality:</strong> Assures that all individuals—regardless of social rank, wealth, caste, or religion—are held equally accountable and receive equal protection before the courts.</li>
    <li><strong>Protects Minority and Fundamental Rights:</strong> Guarantees legal remedies (Articles 32 and 226) against executive overreach, maintaining public faith in the constitutional order.</li>
  </ul>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. Is voting alone enough to make a country democratic? Support your answer with examples from the chapter.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>No, periodic voting alone does not make a country genuinely democratic.</strong></p>
  <ul>
    <li><strong>Substantive Features Required:</strong> A true democracy requires independent judicial oversight, separation of powers, free media, protection of fundamental rights, and active civic participation between election cycles.</li>
    <li><strong>Flawed Electoral Systems:</strong> As shown in comparative models, a system where elections are held but only handpicked candidates can run or opposition voices are silenced (Team D) lacks genuine democratic choice.</li>
    <li><strong>Grassroots Decision-Making:</strong> Case studies like Jethipura and South Manubankul Panchayats demonstrate that real democracy involves everyday governance, regular Gram Sabhas, women's inclusion, and social accountability, not just casting a ballot once every five years.</li>
  </ul>
</div>`
  },

  // Q7 & A7
  {
    q: `<div class="q-block">
  <p>7. Social media allows people to express opinions freely.</p>
  <p>a. How can this strengthen democracy?</p>
  <p>b. How can it weaken democracy if used irresponsibly?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. How it strengthens democracy:</strong>
      <br/>• <em>Democratizes Public Discourse:</em> Gives ordinary citizens a direct platform to question public officials, raise community concerns, and organize civic movements.
      <br/>• <em>Promotes Transparency:</em> Sheds light on corruption, policy flaws, and bureaucratic delays rapidly in real time.
    </li>
    <li><strong>b. How it weakens democracy if used irresponsibly:</strong>
      <br/>• <em>Proliferation of Misinformation:</em> The spread of unverified fake news distorts public debate and misleads voters.
      <br/>• <em>Polarization and Social Unrest:</em> Hate speech and targeted digital propaganda inflame communal friction and erode trust in democratic institutions.
    </li>
  </ul>
</div>`
  },

  // Q8 & A8
  {
    q: `<div class="q-block">
  <p>8. Write a paragraph on what democracy means to you as a young citizen.</p>
</div>`,
    a: `<div class="a-block">
  <p>To me as a young citizen, democracy is not merely a system of government or an election every five years; it is a way of life grounded in equality, empathy, and active participation. It means having the constitutional freedom to ask questions, voice dissenting views without fear, and treat fellow citizens of all backgrounds with dignity. It also means fulfilling my civic responsibilities—staying media-literate, obeying public laws, safeguarding public property, and participating in school councils and community initiatives that advance the common good.</p>
</div>`
  },

  // Q9 & A9
  {
    q: `<div class="q-block">
  <p>9. Conduct a model parliament session or Gram Sabha in class on local issues—cleanliness, responsibilities towards public property, or school safety.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Action Framework for Class Model Gram Sabha / Parliament:</strong></p>
  <ul>
    <li><strong>Role Distribution:</strong> Assign students as Sarpanch/Speaker, Ward Members/Ministers, Panchayat Secretary, and participating villagers/opposition MPs.</li>
    <li><strong>Agenda — Solid Waste &amp; Public Safety:</strong> Table a resolution addressing broken playground equipment and single-use plastic waste on school premises.</li>
    <li><strong>Deliberation &amp; Question Hour:</strong> Villagers pose questions regarding budget allocation, maintenance rosters, and student-led clean-up schedules.</li>
    <li><strong>Voting &amp; Adoption:</strong> After open debate, put the proposal to a voice vote or show of hands, record the minutes via the Secretary, and form a joint student monitoring team.</li>
  </ul>
</div>`
  },

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. Choose any one democratic institution in India (such as Parliament, Election Commission, Judiciary, or Panchayat). Prepare a short note explaining: a. Its role in democracy, b. How it ensures accountability and participation.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Chosen Institution: Election Commission of India (ECI)</strong></p>
  <ul>
    <li><strong>a. Role in Democracy:</strong> An autonomous constitutional body established under Article 324, tasked with conducting free, fair, and periodic elections to Parliament, State Legislatures, and the offices of President and Vice President.</li>
    <li><strong>b. Ensuring Accountability &amp; Participation:</strong>
      <br/>• <em>Enforces the Model Code of Conduct:</em> Prevents ruling parties from misusing official machinery and caps campaign expenditures.
      <br/>• <em>Maximizes Inclusivity:</em> Maintains updated electoral rolls, uses multi-lingual ballots and election symbols, and sets up over a million polling booths—even in remote areas for single voters—guaranteeing universal adult franchise.
    </li>
  </ul>
</div>`
  },

  // Q11 & A11
  {
    q: `<div class="q-block">
  <p>11. What role does the Constitution play in strengthening democracy in India?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Establishes Institutional Checks and Balances:</strong> Outlines the clear separation of powers across the Legislature, Executive, and Judiciary to prevent any concentration of authority.</li>
    <li><strong>Guarantees Fundamental Rights:</strong> Secures essential civil liberties, equality before the law, and legal remedies (Articles 32 and 226) against arbitrary executive actions.</li>
    <li><strong>Dynamic and Living Character:</strong> Provides an amendment mechanism under Article 368, enabling the constitutional framework to adapt to changing social needs while protecting basic democratic values.</li>
    <li><strong>Protects Vulnerable Communities:</strong> Mandates special provisions and reservations for Scheduled Castes, Scheduled Tribes, and women in local governance bodies.</li>
  </ul>
</div>`
  },

  // Q12 & A12
  {
    q: `<div class="q-block">
  <p>12. What challenges do you think democracy in India faces today?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Misinformation &amp; Digital Polarization:</strong> The uncontrolled spread of fake news on social media channels distorts political discourse and stokes communal tension.</li>
    <li><strong>Socio-Economic Inequalities:</strong> Persistent income disparities, poverty, and illiteracy hamper the ability of marginalized groups to participate effectively in governance.</li>
    <li><strong>Under-Representation of Women:</strong> Despite high reservations in local Panchayati Raj institutions, women's representation in State Assemblies and Parliament remains limited.</li>
    <li><strong>Civic Indifference &amp; Implementation Gaps:</strong> Apathy toward civic responsibilities and delays in public service delivery weaken citizen trust in institutional processes.</li>
  </ul>
</div>`
  }
] },
                    { name: "Chapter 7: Elections", solutions: [
  // Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. What reforms have been introduced by the ECI to make voting more inclusive for the following groups?</p>
  <p>a. People with Disabilities</p>
  <p>b. Service Voters</p>
  <p>c. Senior Citizens- above 85 years of age</p>
  <p>d. Prisoners</p>
  <p>e. Persons in preventive detention</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Persons with Disabilities (PwDs):</strong> EVMs equipped with Braille signage, ramp facilities, and wheelchair assistance at polling booths, dedicated support through the Saksham App, and optional home voting for individuals with at least 40% benchmark disability.</li>
    <li><strong>b. Service Voters:</strong> Introduction of the Electronically Transmitted Postal Ballot System (ETPBS), allowing armed forces and deployed personnel to receive and cast postal ballots electronically from any duty station outside their constituency.</li>
    <li><strong>c. Senior Citizens (above 85 years of age):</strong> Nationwide provision of the "Vote-from-Home" facility with postal ballots, overseen directly by polling teams and videographed to ensure secrecy and accessibility.</li>
    <li><strong>d. Prisoners:</strong> Under Section 62(5) of the Representation of the People Act, 1951, persons confined in prison under a sentence of imprisonment or lawful police custody do not have the right to vote.</li>
    <li><strong>e. Persons in Preventive Detention:</strong> Explicitly permitted under statutory rules to exercise their franchise through postal ballots dispatched to their place of detention.</li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. What are the various functions of the Election Commission of India? Which of these functions is most important for the conduct of free and fair elections? Explain.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Preparation and Revision of Electoral Rolls:</strong> Periodically updates voter registries through Special Intensive Revision (SIR) to include eligible citizens and eliminate duplicates or deceased entries.</li>
    <li><strong>Notification of Election Schedules:</strong> Decides polling dates, phasing, and counting schedules while taking into account weather, crop seasons, exams, and festivals.</li>
    <li><strong>Registration and Symbol Allotment:</strong> Registers political parties, accords National/State party status, allocates reserved symbols, and resolves symbol disputes as a quasi-judicial body.</li>
    <li><strong>Enforcement of the Model Code of Conduct (MCC):</strong> Regulates speeches, campaign finance, and prevents ruling parties from misusing official machinery.</li>
    <li><strong>Most Important Function:</strong> Enforcement of the Model Code of Conduct and independent superintendence under Article 324. This levels the playing field between incumbent governments and opposition candidates, ensuring impartiality and preserving public trust in election outcomes.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. Elections are the soul of a democracy. Do you agree? Why or why not?</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Yes, elections are the soul of a democracy for the following reasons:</strong></p>
  <ul>
    <li><strong>Popular Sovereignty &amp; Legitimacy:</strong> State authority is derived directly from the consent of the governed; regular elections confer constitutional legitimacy on the ruling government.</li>
    <li><strong>Accountability and Public Scrutiny:</strong> Periodic elections empower citizens to evaluate rulers, vote non-performing leaders out of office, and hold representatives accountable.</li>
    <li><strong>Political Equality:</strong> Universal adult franchise grants every citizen one vote of equal weight, regardless of socioeconomic background.</li>
    <li><strong>Peaceful Transfer of Authority:</strong> Provides a stable, rule-bound mechanism for political change without resorting to violence or instability.</li>
  </ul>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. Explain at least three differences between the national and state/regional political parties.</p>
</div>`,
    a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Parameter</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">National Party</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">State / Regional Party</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Area of Influence</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Has an all-India presence and influences policy across multiple states.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Influence is largely restricted to a specific state or region.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Recognition Criteria</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Must secure at least 6% votes in 4 states plus 4 Lok Sabha seats, or 2% Lok Sabha seats across 3 states, or be recognized in 4 states.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Must secure at least 6% votes plus 2 Assembly seats, or 3% of total Assembly seats, or 8% total state votes.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Symbol Exclusivity</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Its reserved symbol is protected exclusively across the entire country.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Its reserved symbol is protected only within the state where it is recognized.</td>
      </tr>
    </tbody>
  </table>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. Why should you vote? Arrange the following in the descending order of your choice. Discuss the reasons for your choice.</p>
  <p>a. Opportunity to choose my representative</p>
  <p>b. Makes me a responsible person</p>
  <p>c. Opportunity to change the non-performing representative</p>
  <p>d. Strengthens democracy</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Arranged in Descending Order of Priority:</strong></p>
  <ol>
    <li><strong>d. Strengthens democracy:</strong> A democracy thrives on high citizen participation; voting protects collective constitutional rights and popular sovereignty.</li>
    <li><strong>a. Opportunity to choose my representative:</strong> Ensures personal values and community needs are voiced directly in the legislature.</li>
    <li><strong>c. Opportunity to change the non-performing representative:</strong> Serves as a vital accountability check, ensuring elected officials cannot take their mandate for granted.</li>
    <li><strong>b. Makes me a responsible person:</strong> Cultivates individual civic duty and active awareness of national affairs.</li>
  </ol>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. What is the Special Intensive Revision (SIR) initiative of the ECI? Explain the objectives and the necessity of conducting SIR.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Definition:</strong> Special Intensive Revision (SIR) is a house-to-house enumeration and verification exercise conducted by the ECI to update, verify, and authenticate electoral rolls.</li>
    <li><strong>Primary Objectives:</strong>
      <br/>• Enroll eligible first-time voters turning 18 years of age.
      <br/>• Eliminate invalid names due to death, permanent relocation, or duplicate enrollments.
      <br/>• Correct demographic errors and verify residential addresses.
    </li>
    <li><strong>Necessity:</strong> Accurate electoral rolls prevent voter impersonation and bogus voting, ensuring no legitimate citizen is disenfranchised while preserving the integrity of the ballot.</li>
  </ul>
</div>`
  },

  // Q7 & A7
 // Q7 & A7 (With Image Tags)
{
  q: `<div class="q-block">
  <p>7. Match the political party name with its symbol.</p>
</div>`,
  a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 8px; border: 1px solid #d4c2a8;">Political Party Name</th>
        <th style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">Official Symbol</th>
        <th style="padding: 8px; border: 1px solid #d4c2a8;">Symbol Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">Aam Aadmi Party (AAP)</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_aap.png" alt="AAP Broom Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Broom</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">Bharatiya Janata Party (BJP)</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_bjp.png" alt="BJP Lotus Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Lotus</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">Bahujan Samaj Party (BSP)</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_bsp.png" alt="BSP Elephant Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Elephant</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">Communist Party of India (Marxist) [CPI (M)]</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_cpim.png" alt="CPI(M) Hammer, Sickle and Star Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Hammer, Sickle and Star</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">Indian National Congress (INC)</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_inc.png" alt="INC Hand Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Hand</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #d4c2a8; font-weight: bold;">National People's Party (NPP)</td>
        <td style="padding: 8px; border: 1px solid #d4c2a8; text-align: center;">
          <img src="images/symbol_npp.png" alt="NPP Book Symbol" style="width: 32px; height: auto;" />
        </td>
        <td style="padding: 8px; border: 1px solid #d4c2a8;">Book</td>
      </tr>
    </tbody>
  </table>
</div>`
},

  // Q8 & A8
  {
    q: `<div class="q-block">
  <p>8. Read the case study below and answer the following questions:</p>
  <p>a. What initiatives were taken by the ECI to enable the voters to cast their vote?</p>
  <p>b. If Ishani was allowed to vote even without carrying her Voter ID card or Aadhaar card, which other document might she be carrying that is valid for voting?</p>
  <p>c. Cite the examples of violations of the Model Code of Conduct.</p>
  <p>d. Give a suitable title to the passage.</p>
  <p>e. Find out how the police and army personnel cast their votes.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. ECI Initiatives:</strong> Online voter registration portal, ramps with wheelchair assistance and volunteers for disabled voters, security arrangements, VVPAT verification slips, and vote-from-home facilities for senior citizens.</li>
    <li><strong>b. Alternative Valid Identity Documents:</strong> Passport, Driving Licence, PAN Card, MNREGA Job Card, Bank/Post Office Passbook with photograph, or Pension payment order.</li>
    <li><strong>c. Violations of Model Code of Conduct (MCC):</strong> Defacing public and private property with unauthorized wall writing/posters, and conducting active political campaigning within the 48-hour silence period preceding polling.</li>
    <li><strong>d. Suitable Title:</strong> <em>"Inclusive Democracy: A First-Time Voter's Journey"</em> or <em>"No Voter Left Behind: The Festival of Democracy in Action"</em>.</li>
    <li><strong>e. Voting Method for Duty Personnel:</strong>
      <br/>• <em>Army / Defence Personnel (Service Voters):</em> Vote via the Electronically Transmitted Postal Ballot System (ETPBS).
      <br/>• <em>Police Personnel on Election Duty:</em> Cast their votes via Postal Ballots or Election Duty Certificates (EDC) at voter facilitation centers before election day.
    </li>
  </ul>
</div>`
  },

  // Q9 & A9
  {
    q: `<div class="q-block">
  <p>9. A comparative chart of three countries is given below. Based on the information given in the chart, answer the questions:</p>
  <p>a. What is the difference between having a voting right in a country with a multi-party system and another with a single-party system?</p>
  <p>b. In which of the above countries would you like to stay and why?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Multi-Party vs. Single-Party Voting Rights:</strong>
      <br/>• In a <em>multi-party system (Country A)</em>, voting provides genuine democratic choice among competing ideologies, holding representatives accountable.
      <br/>• In a <em>single-party system (Country B)</em>, voting is merely formal approval without alternatives, leaving citizens unable to change government policies.
    </li>
    <li><strong>b. Country of Choice:</strong> <strong>Country A</strong>. While Country B or C may display higher economic indicators, Country A guarantees fundamental freedoms, political choice, rule of law, and institutional accountability, which are essential for long-term human dignity and rights.</li>
  </ul>
</div>`
  },

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. What are the challenges to conducting free and fair elections?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Money Power:</strong> Excessive campaign spending and distribution of cash or liquor to induce voters.</li>
    <li><strong>Muscle Power &amp; Intimidation:</strong> Threats, booth disruption, and violence aimed at suppressing voter turnout.</li>
    <li><strong>Misinformation &amp; Fake News:</strong> Coordinated digital disinformation campaigns and deepfakes designed to polarize communities.</li>
    <li><strong>Appeals to Caste and Religion:</strong> Polarization of electorates along communal or sectarian lines, in violation of electoral laws.</li>
    <li><strong>Unequal Campaign Resources:</strong> Disproportionate financial resources between established parties and independent candidates.</li>
  </ul>
</div>`
  },

  // Q11 & A11
  {
    q: `<div class="q-block">
  <p>11. On the Stage: School election role-play for posts of Head Girl, Head Boy, and Sports Captain.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Classroom Simulation Role Breakdown:</strong></p>
  <ul>
    <li><strong>Election Commissioner:</strong> Issues the election schedule, oversees the Model Code of Conduct, and announces results.</li>
    <li><strong>Returning Officer:</strong> Scrutinizes nomination forms and conducts the official tally.</li>
    <li><strong>Candidates &amp; Campaigners:</strong> Draft student manifestos on school safety, sports equipment, and library resources while adhering to campaign rules.</li>
    <li><strong>Polling &amp; Presiding Officers:</strong> Check student identity cards against the roll, mark fingers with indelible ink, and oversee voting booths.</li>
    <li><strong>Polling Agents:</strong> Nominated by candidates to observe polling and ensure counting fairness.</li>
    <li><strong>Police Personnel:</strong> Maintain quiet order around the polling booth and guard ballot boxes.</li>
    <li><strong>Journalist:</strong> Interviews students on key issues, reporting live exit reactions.</li>
  </ul>
</div>`
  },

  // Q12 & A12
  {
    q: `<div class="q-block">
  <p>12. Try and make videos or audios on topics like: My Vote My Nation; No Voter to be Left Behind; How to Eliminate the Ill of Money Power, etc.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Script Concept — "No Voter to be Left Behind":</strong></p>
  <ul>
    <li><strong>Scene 1 (Visual):</strong> A student narrator speaking near an EVM model with Braille signage, highlighting ramp facilities and the Saksham App.</li>
    <li><strong>Scene 2 (Audio Narration):</strong> <em>"Democracy is strongest when every single citizen has a voice—from remote mountain peaks to city centers, from first-time 18-year-olds to 85+ seniors voting from home."</em></li>
    <li><strong>Scene 3 (Call to Action):</strong> Display the National Voters' Day pledge: <em>"Pledge to vote fearlessly, free from bias or inducement. Your vote is your power!"</em></li>
  </ul>
</div>`
  },

  // Q13 & A13
  {
    q: `<div class="q-block">
  <p>13. Select one national or state political party. Prepare a comparative chart of the last two State Legislative Assembly elections including manifesto promises, vote percentage, seats won, and women representation.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Comparative Case Model (State Legislative Assembly Elections):</strong></p>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Parameter</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Previous Assembly Election</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Recent Assembly Election</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Key Manifesto Pledges</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Rural loan waivers, subsidized domestic power, expansion of public transport.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">Youth skill apprenticeships, direct DBT transfers to women heads of household, digital classrooms.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Vote Share Polled (%)</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">38.5% of total valid votes.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">41.2% of total valid votes.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Seats Won</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">95 seats out of 200.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">112 seats out of 200.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Women Candidates Contested</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">24 women fielded.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">31 women fielded.</td>
      </tr>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Women Candidates Elected</strong></td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">11 women elected.</td>
        <td style="padding: 6px; border: 1px solid #d4c2a8;">16 women elected.</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size: 11.5px; color: #666;">Source: Official Statistical Reports, Election Commission of India (ECI).</p>
</div>`
  },

  // Q14 & A14
  {
    q: `<div class="q-block">
  <p>14. Do you think 'One Nation, One Election' can improve the efficiency of the electoral process? Divide the class and discuss into two groups—one to examine its potential advantages and the other to analyse its limitations.</p>
</div>`,
    a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 6px; border: 1px solid #d4c2a8; width: 50%;">Potential Advantages (Group A)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8; width: 50%;">Potential Limitations (Group B)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px; border: 1px solid #d4c2a8; vertical-align: top;">
          • <strong>Substantial Cost Savings:</strong> Curtails redundant public expenditures on administrative logistics, security deployments, and voting infrastructure.<br/>
          • <strong>Continuous Governance:</strong> Avoids frequent implementation of the Model Code of Conduct, which often halts new development schemes.<br/>
          • <strong>Reduced Voter Fatigue:</strong> Encourages consolidated participation in a single electoral exercise.
        </td>
        <td style="padding: 6px; border: 1px solid #d4c2a8; vertical-align: top;">
          • <strong>Federalism &amp; Regional Issues:</strong> Regional concerns may get overshadowed by dominant national narratives.<br/>
          • <strong>Constitutional Hurdles:</strong> Requires complex amendments to synchronize legislative terms and handle premature government dissolutions.<br/>
          • <strong>Reduced Mid-term Accountability:</strong> Infrequent voting reduces opportunities for citizens to check representatives between cycles.
        </td>
      </tr>
    </tbody>
  </table>
</div>`
  }
] },
                ]
            },
            { 
                name: `Economics`,
                chapters: [        
                    { name: "Chapter 8: Building Blocks of Economics", solutions: [
  // Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. Why do you think people's wants keep changing over time? How does this affect production in an economy? Why cannot all our wants be satisfied?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Why Wants Change Over Time:</strong> Human desires evolve due to technological advancements, rising income levels, peer influences, urbanization, changing lifestyles, and exposure to new products and marketing.</li>
    <li><strong>Impact on Production:</strong> Shifting consumer preferences compel producers to reallocate factors of production, upgrade machinery, phase out obsolete goods, and innovate to supply in-demand commodities.</li>
    <li><strong>Why All Wants Cannot Be Satisfied:</strong> Because resources (land, labour, capital, technology) are fundamentally scarce and limited in supply, whereas human wants are unlimited and constantly expanding.</li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. 'Human wants are unlimited and keep changing'. How do you think this constant desire for more creates pressure on the environment? Can the fulfilment of wants and the extraction of resources be balanced?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Pressure on the Environment:</strong> Endless demand drives over-extraction of minerals, fossil fuels, and timber, causing rapid deforestation, groundwater depletion, habitat destruction, and greenhouse gas emissions.</li>
    <li><strong>Balancing Extraction and Fulfilment:</strong>
      <br/>• Yes, through sustainable development practices, adopting renewable energy sources, and transitioning towards circular economy models (reduce, reuse, recycle).
      <br/>• Enforcing environmental regulations and distinguishing between basic physiological needs and non-essential consumerist wants.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. Can you think of a resource in your region that is scarce but used wastefully? How could it be managed better?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Scarce Resource:</strong> Groundwater / Fresh Water.</li>
    <li><strong>Wasteful Practices:</strong> Flood irrigation in water-intensive crops, unmetered extraction through borewells, and leaking municipal pipelines.</li>
    <li><strong>Better Management Strategies:</strong>
      <br/>• Promoting micro-irrigation techniques like drip and sprinkler irrigation.
      <br/>• Implementing mandatory rooftop rainwater harvesting in urban housing.
      <br/>• Shifting to drought-resistant crops like millets and pulses in water-stressed belts.
      <br/>• Rational water tariffs and community-level groundwater auditing.</li>
  </ul>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. Which economic system—market, planned, or mixed—do you think gives people the most freedom? Which economic system is best suited for promoting innovation? Why?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>System Giving Most Freedom:</strong> The <strong>Market Economy</strong> grants consumers sovereignty of choice and offers producers complete liberty to start enterprises, set prices, and own private property without bureaucratic licensing.</li>
    <li><strong>System Best Suited for Promoting Innovation:</strong> The <strong>Market Economy</strong>.</li>
    <li><strong>Why:</strong> Strong competitive pressures and the profit motive push private firms to develop superior technologies, cut operational costs, and roll out improved consumer goods to stay ahead of rivals.</li>
  </ul>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. Critically examine why pure economic systems rarely exist in reality. Assess the limitations of such systems and justify why a mixed economy is often considered a more practical and effective approach in real-world contexts.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Limitations of Pure Market Economies:</strong> Left entirely to market forces, private businesses ignore public goods (street lighting, defence, policing), widen wealth inequality, create private monopolies, and neglect social welfare.</li>
    <li><strong>Limitations of Pure Planned Economies:</strong> Centralized state ownership leads to bureaucratic inefficiency, shortages, lack of consumer choice, and stifled innovation due to absence of competition.</li>
    <li><strong>Why a Mixed Economy is Most Practical:</strong>
      <br/>• Combines private enterprise, efficiency, and market innovation with government oversight, fair competition rules, and consumer protection.
      <br/>• The state steps in to provide public goods, health, basic education, and targeted welfare programs for underprivileged groups while allowing private businesses to thrive.</li>
  </ul>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. A student has ₹100 and must choose between buying a notebook or saving the money for buying a tennis racket later. Which economic concept best explains this situation?</p>
  <p>a. Demand</p>
  <p>b. Opportunity cost</p>
  <p>c. Production</p>
  <p>d. Inflation</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Correct Option:</strong> <strong>b. Opportunity cost</strong></p>
  <p><strong>Reason:</strong> Choosing to spend the limited ₹100 on the notebook means giving up saving towards the tennis racket; the value of the forgone alternative represents the opportunity cost.</p>
</div>`
  },

  // Q7 & A7
  {
    q: `<div class="q-block">
  <p>7. How does understanding opportunity cost improve the quality of economic decision-making?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Highlights True Trade-Offs:</strong> Forces individuals, enterprises, and governments to evaluate the true sacrifice involved before committing limited resources to a single choice.</li>
    <li><strong>Prevents Wasteful Resource Allocation:</strong> Guides firms and governments to select alternatives that maximize social utility and financial return over short-sighted or low-yield projects.</li>
    <li><strong>Fosters Long-Term Planning:</strong> Encourages assessing future consequences—such as balancing highway infrastructure versus public healthcare spending.</li>
  </ul>
</div>`
  },

  // Q8 & A8
  {
    q: `<div class="q-block">
  <p>8. Can effective economic decisions be made without reliable data? Support your answer with an example.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>No, effective economic decisions cannot be made on guesswork without reliable data.</strong></p>
  <ul>
    <li><strong>Importance of Data:</strong> Accurate statistics from economic surveys, censuses, and market trends are necessary to assess demand, evaluate risks, and formulate sound fiscal policies.</li>
    <li><strong>Example:</strong> If a government launches a public food distribution or agricultural procurement program without demographic and rainfall data, it risks severe grain shortages in drought-hit districts while oversupplying areas with surplus harvests.</li>
  </ul>
</div>`
  },

  // Q9 & A9
  {
    q: `<div class="q-block">
  <p>9. Analyse how a country's present economic choices can shape its long-term future. Why is it important to consider future consequences while making economic decisions today?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Long-Term Compounding Effects:</strong> Prioritizing investments today in quality public education, skill building, healthcare, and green energy generates a productive workforce and sustainable growth decades later.</li>
    <li><strong>Risk of Depletion &amp; Debt:</strong> Allocating capital toward short-term consumption subsidies while neglecting infrastructure and environmental safeguards leads to fiscal debt, resource depletion, and industrial stagnation.</li>
    <li><strong>Intergenerational Equity:</strong> Sustainable decisions today ensure future generations inherit resilient ecosystems, stable financial institutions, and viable natural resources.</li>
  </ul>
</div>`
  },

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. Identify a news article from any newspaper of your choice about a product or commodity (such as vegetables, fruits, fuel, or electronics) where producers or companies are deciding how much to produce or supply. Write 2-3 sentences explaining the example you found and why the production decision was made.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Example: Automotive Companies Scaling Up Electric Vehicle (EV) Production</strong></p>
  <p>Recent news reports highlight automobile manufacturers ramping up the production of electric two-wheelers while cutting down on conventional petrol models. This decision was driven by rising urban fuel prices, government subsidies for green mobility, and growing consumer preference for cost-efficient transportation. Producers adjusted their supply to tap into rising market demand and lower battery component costs.</p>
</div>`
  }
] },
                    { name: "Chapter 9: The Price Puzzle: What Drives the market", solutions: [
  // Q1 & A1
  {
    q: `<div class="q-block">
  <p>1. An increase in income always leads to a rise in demand for goods. Defend or refute, giving reasons for the same.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Refute.</strong> An increase in income does not always lead to a rise in demand for all goods.</p>
  <ul>
    <li><strong>Normal Goods:</strong> For standard and superior goods (such as branded clothing, fruits, and electronics), demand rises as consumers gain higher purchasing power.</li>
    <li><strong>Inferior Goods:</strong> For low-quality commodities (such as coarse grains or cheap footwear), an increase in income causes demand to <em>fall</em> because consumers can now afford better alternatives and switch away from them.</li>
    <li><strong>Basic Necessities:</strong> For life essentials (such as salt or life-saving medicines), demand remains practically unchanged regardless of income growth.</li>
  </ul>
</div>`
  },

  // Q2 & A2
  {
    q: `<div class="q-block">
  <p>2. If petrol prices double, what happens to:</p>
  <p>a. Demand for diesel cars</p>
  <p>b. Demand for electric cars</p>
  <p>c. Demand for car accessories</p>
  <p>d. Demand for public transport</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Demand for diesel cars: Increases.</strong> Diesel cars act as a substitute to petrol cars; buyers switch toward cheaper fuel options.</li>
    <li><strong>b. Demand for electric cars: Increases.</strong> Electric vehicles are cleaner, more cost-effective substitutes that become much more attractive as fuel prices rise.</li>
    <li><strong>c. Demand for car accessories: Decreases.</strong> Accessories are complementary goods to cars; when soaring petrol prices dampen car purchases and driving, the demand for accessories drops.</li>
    <li><strong>d. Demand for public transport: Increases.</strong> Commuters seek affordable substitute travel, leading to higher passenger traffic on buses and metro trains.</li>
  </ul>
</div>`
  },

  // Q3 & A3
  {
    q: `<div class="q-block">
  <p>3. A farmer traditionally irrigates fields manually (labour-intensive). He installs drip irrigation (a technology upgrade) that reduces water use by 40 per cent and increases yield by 30 per cent. How does this affect:</p>
  <p>a. His cost of production</p>
  <p>b. His willingness to supply at different prices</p>
  <p>c. The overall market supply if many farmers adopt this technology</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Cost of production: Decreases per unit of crop.</strong> Higher crop yield paired with lower water and labor expenses lowers the average cost of production per quintal.</li>
    <li><strong>b. Willingness to supply: Increases at every price point.</strong> Lower production costs expand profit margins, incentivizing the farmer to bring larger quantities to the market.</li>
    <li><strong>c. Overall market supply: Expands significantly.</strong> Widespread adoption causes an outward (rightward) shift of the total market supply curve, raising crop availability across the market.</li>
  </ul>
</div>`
  },

  // Q4 & A4
  {
    q: `<div class="q-block">
  <p>4. During online festival sales, the prices of many products are very low. Use the concept of demand and supply to explain why the sellers sell at such a low price. What happens to the equilibrium when the price is lowered? Does this benefit only consumers or sellers as well? Explain.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Why Sellers Lower Prices:</strong> According to the Law of Demand, a drop in price causes an increase in quantity demanded. Retailers take advantage of high festival shopping interest to clear high sales volumes.</li>
    <li><strong>Effect on Equilibrium:</strong> Discounting below standard equilibrium causes quantity demanded to exceed immediate stock, generating short-term excess demand (flash-sale stockouts) until supply scales up.</li>
    <li><strong>Mutual Benefit for Both Parties:</strong>
      <br/>• <em>Consumers benefit</em> by buying items at attractive discounts, saving money.
      <br/>• <em>Sellers benefit</em> through rapid inventory turnover, bulk sales revenue, and economies of scale, earning higher overall profit despite lower margins per unit.</li>
  </ul>
</div>`
  },

  // Q5 & A5
  {
    q: `<div class="q-block">
  <p>5. Suppose the government sets a maximum sale price for an essential vaccine below the market-driven price. What is likely to happen? Choose from the options below and elucidate your point.</p>
  <p>a. Surplus | b. Shortage | c. No effect | d. Fall in demand</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Correct Option: b. Shortage</strong></p>
  <p><strong>Elucidation:</strong></p>
  <ul>
    <li>Setting an official maximum price below the equilibrium price is called a <strong>price ceiling</strong>.</li>
    <li>At this reduced mandatory price, consumer demand expands rapidly because the vaccine is affordable to everyone.</li>
    <li>At the same time, vaccine producers reduce output or cannot cover manufacturing costs, leading to quantity demanded being greater than quantity supplied (QD &gt; QS), which causes an acute shortage in the market.</li>
  </ul>
</div>`
  },

  // Q6 & A6
  {
    q: `<div class="q-block">
  <p>6. The government levies higher taxes on products such as tobacco and alcohol to promote healthier choices among citizens. Can you find out other goods where price controls have been set in place? What are the reasons for the same?</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>Examples of Price Controls:</strong>
      <br/>• <em>Life-Saving Medicines:</em> Capped under the National List of Essential Medicines (NLEM) through Drug Price Control Orders (DPCO) to keep treatments affordable.
      <br/>• <em>Essential Food Grains (Ration shops / PDS):</em> Subsidized via maximum price ceilings so low-income households can afford rice and wheat.
      <br/>• <em>Agricultural Crops (MSP - Minimum Support Price):</em> Serves as an official price floor to guarantee farmers a minimum income and protect them from sudden price crashes.
      <br/>• <em>Public Utilities (Bus fares, Metro tickets, Electricity):</em> Regulated by state bodies to keep public transport and energy affordable for all.</li>
    <li><strong>Reasons:</strong> To protect public health, prevent monopoly exploitation, ensure universal access to life essentials, and safeguard low-income families from sudden price spikes.</li>
  </ul>
</div>`
  },

  // Q7 & A7
  {
    q: `<div class="q-block">
  <p>7. Can excessive government regulation hurt markets? Explain with suitable examples.</p>
</div>`,
    a: `<div class="a-block">
  <p><strong>Yes, excessive government regulation can disrupt and hurt markets:</strong></p>
  <ul>
    <li><strong>Price Distortions &amp; Supply Shortages:</strong> Setting prices artificially below costs removes producer incentives, triggering shortages, hoarding, and black-market trading.</li>
    <li><strong>Compliance Burden:</strong> Excessive permits, licenses, and inspections raise overhead costs, hurting small businesses and hindering the ease of doing business.</li>
    <li><strong>Lower Innovation:</strong> Heavy price caps leave little profit margin for companies to invest in research, modernization, or higher quality standards.</li>
    <li><strong>Example:</strong> Strict rent control laws in several cities discouraged property owners from maintaining buildings and froze new housing investments, resulting in urban rental housing shortages.</li>
  </ul>
</div>`
  },

  // Q8 & A8
  {
    q: `<div class="q-block">
  <p>8. In the table below, different prices of guava are given. Fill in your demand and your friends' demand, and illustrate individual vs. market demand.</p>
</div>`,
    a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: center;">
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Price (₹/kg)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">You (kg)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Friend 1 (kg)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Friend 2 (kg)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Friend 3 (kg)</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8; font-weight: bold;">Total Market Demand (kg)</th>
      </tr>
    </thead>
    <tbody style="text-align: center;">
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">₹100/kg</td><td>1</td><td>0.5</td><td>1</td><td>0.5</td><td><strong>3.0 kg</strong></td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">₹80/kg</td><td>2</td><td>1.0</td><td>1.5</td><td>1.0</td><td><strong>5.5 kg</strong></td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">₹50/kg</td><td>3</td><td>2.0</td><td>2.5</td><td>2.0</td><td><strong>9.5 kg</strong></td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">₹20/kg</td><td>5</td><td>3.5</td><td>4.0</td><td>3.5</td><td><strong>16.0 kg</strong></td></tr>
    </tbody>
  </table>
  <p><strong>Economic Insight:</strong> As price drops from ₹100 to ₹20, every consumer increases their purchase, demonstrating the Law of Demand. Total market demand is obtained by horizontally adding individual demand figures (You + Friend 1 + Friend 2 + Friend 3), creating a flatter and more responsive market demand curve.</p>
</div>`
  },

  // Q9 & A9
  {
    q: `<div class="q-block">
  <p>9. Visit the nearby vegetable market and try to find answers to the following questions:</p>
  <p>a. Who decides the prices of different vegetables in the vegetable market?</p>
  <p>b. Sometimes the prices of a few vegetables is too high, and sometimes too low. Why is this?</p>
  <p>c. The price of tomatoes is high in the morning and eventually gets lower by the evening. Have you ever noticed this? Comment.</p>
</div>`,
    a: `<div class="a-block">
  <ul>
    <li><strong>a. Price Determination:</strong> No single seller fixes prices; prices emerge continuously through bargaining and the interaction of total market supply arriving from wholesale mandis and buyer demand.</li>
    <li><strong>b. Price Swings:</strong>
      <br/>• <em>High prices:</em> Crop damage from unseasonal rains or transport delays restrict supplies, causing shortages.
      <br/>• <em>Low prices:</em> Bumper seasonal harvests cause massive arrivals in the market, creating excess supply that pushes prices down.</li>
    <li><strong>c. Morning vs. Evening Tomato Prices:</strong> Tomatoes are perishable. In the morning, freshness is high and shopper footfall is heavy, enabling vendors to charge premium rates. By late evening, vendors cut prices to clear unsold stock before it spoils overnight.</li>
  </ul>
</div>`
  },

  // Q10 & A10
  {
    q: `<div class="q-block">
  <p>10. Categorise the following combination of goods into substitute goods and complementary goods:</p>
  <p>a. Movie ticket in the cinema hall and popcorn | b. Eraser and pencil | c. Laptop and computer | d. Air Conditioner and cooler | e. Notebook and pen | f. Apple and banana | g. Mobile and earphones</p>
</div>`,
    a: `<div class="a-block">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 10px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: left;">
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Pair of Goods</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Category</th>
        <th style="padding: 6px; border: 1px solid #d4c2a8;">Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">a. Movie ticket and popcorn</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Complementary Goods</strong></td><td>Consumed together during leisure entertainment.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">b. Eraser and pencil</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Complementary Goods</strong></td><td>Used together for writing and drawing.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">c. Laptop and computer</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Substitute Goods</strong></td><td>Alternative personal computing machines that can replace each other.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">d. Air Conditioner and cooler</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Substitute Goods</strong></td><td>Alternative cooling appliances for summer.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">e. Notebook and pen</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Complementary Goods</strong></td><td>Both are required together to take notes.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">f. Apple and banana</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Substitute Goods</strong></td><td>Alternative fruit choices that can replace each other.</td></tr>
      <tr><td style="padding: 6px; border: 1px solid #d4c2a8;">g. Mobile and earphones</td><td style="padding: 6px; border: 1px solid #d4c2a8;"><strong>Complementary Goods</strong></td><td>Used jointly for personal audio and calling.</td></tr>
    </tbody>
  </table>
</div>`
  },

  // Q11 & A11
  {
    q: `<div class="q-block">
  <p>11. Fig. 9.8 shows the demand curve DD' and supply curve SS'. Based on the figure, answer the following questions:</p>
  <p>a. What does point E represent in this market?</p>
  <p>b. What is the equilibrium price and equilibrium quantity at point E?</p>
  <p>c. Point A lies on DD'. Point B lies on SS'. What do the points A and B indicate about demand and supply? What does the gap between A and B represent?</p>
  <p>d. Point F lies on DD'. Point C lies on SS'. What do the points F and C indicate about demand and supply? What does the gap between C and F represent?</p>
  <p>e. If the price stays at the lower dashed line, what could happen next in a free market?</p>
</div>`,
    a: `<div class="a-block">
  <div style="text-align: center; margin: 16px 0;">
    <svg viewBox="0 0 540 340" width="100%" height="auto" style="max-width: 500px; background: #ffffff; border: 1px solid #d4c2a8; border-radius: 8px;">
      <text x="270" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="middle">Fig. 9.8: Market Equilibrium, Excess Supply &amp; Excess Demand</text>
      
      <line x1="70" y1="280" x2="490" y2="280" stroke="#333" stroke-width="1.8"/>
      <line x1="70" y1="40" x2="70" y2="280" stroke="#333" stroke-width="1.8"/>
      
      <text x="60" y="45" font-family="Arial" font-size="11" font-weight="bold" fill="#222" text-anchor="end">Price (₹)</text>
      <text x="490" y="300" font-family="Arial" font-size="11" font-weight="bold" fill="#222" text-anchor="end">Quantity (kg)</text>
      
      <text x="62" y="234" font-family="Arial" font-size="10" fill="#666" text-anchor="end">100</text>
      <text x="62" y="179" font-family="Arial" font-size="10" fill="#666" text-anchor="end">200</text>
      <text x="62" y="152" font-family="Arial" font-size="10" font-weight="bold" fill="#e65100" text-anchor="end">250</text>
      <text x="62" y="124" font-family="Arial" font-size="10" fill="#666" text-anchor="end">300</text>
      <text x="62" y="69" font-family="Arial" font-size="10" fill="#666" text-anchor="end">400</text>
      
      <text x="140" y="295" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">10</text>
      <text x="210" y="295" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">20</text>
      <text x="280" y="295" font-family="Arial" font-size="10" font-weight="bold" fill="#e65100" text-anchor="middle">30</text>
      <text x="350" y="295" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">40</text>
      <text x="420" y="295" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">50</text>
      
      <line x1="70" y1="120" x2="470" y2="120" stroke="#999" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="70" y1="197" x2="470" y2="197" stroke="#999" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="70" y1="148" x2="280" y2="148" stroke="#f57c00" stroke-width="1.2" stroke-dasharray="3,3"/>
      <line x1="280" y1="148" x2="280" y2="280" stroke="#f57c00" stroke-width="1.2" stroke-dasharray="3,3"/>
      
      <!-- Supply SS' -->
      <line x1="110" y1="240" x2="445" y2="60" stroke="#2e7d32" stroke-width="2.5"/>
      <text x="100" y="255" font-family="Arial" font-size="12" font-weight="bold" fill="#2e7d32">S</text>
      <text x="450" y="60" font-family="Arial" font-size="12" font-weight="bold" fill="#2e7d32">S'</text>
      
      <!-- Demand DD' -->
      <line x1="110" y1="60" x2="445" y2="240" stroke="#0288d1" stroke-width="2.5"/>
      <text x="100" y="65" font-family="Arial" font-size="12" font-weight="bold" fill="#0288d1">D</text>
      <text x="450" y="255" font-family="Arial" font-size="12" font-weight="bold" fill="#0288d1">D'</text>
      
      <circle cx="235" cy="120" r="4" fill="#0288d1"/>
      <text x="235" y="110" font-family="Arial" font-size="11" font-weight="bold" fill="#0288d1" text-anchor="middle">A</text>
      <circle cx="330" cy="120" r="4" fill="#2e7d32"/>
      <text x="330" y="110" font-family="Arial" font-size="11" font-weight="bold" fill="#2e7d32" text-anchor="middle">B</text>
      <text x="282" y="112" font-family="Arial" font-size="9" fill="#c62828" font-weight="bold" text-anchor="middle">Excess Supply (Surplus)</text>
      
      <circle cx="280" cy="148" r="5" fill="#f57c00"/>
      <text x="296" y="146" font-family="Arial" font-size="12" font-weight="bold" fill="#e65100">E</text>
      
      <circle cx="190" cy="197" r="4" fill="#2e7d32"/>
      <text x="190" y="215" font-family="Arial" font-size="11" font-weight="bold" fill="#2e7d32" text-anchor="middle">C</text>
      <circle cx="365" cy="197" r="4" fill="#0288d1"/>
      <text x="365" y="215" font-family="Arial" font-size="11" font-weight="bold" fill="#0288d1" text-anchor="middle">F</text>
      <text x="280" y="215" font-family="Arial" font-size="9" fill="#0277bd" font-weight="bold" text-anchor="middle">Excess Demand (Shortage)</text>
    </svg>
  </div>
  <ul>
    <li><strong>a. Point E:</strong> Represents <strong>Market Equilibrium</strong>, the point where the demand curve intersects the supply curve (Quantity Demanded = Quantity Supplied).</li>
    <li><strong>b. Equilibrium Values:</strong> Equilibrium Price = <strong>₹250</strong>; Equilibrium Quantity = <strong>30 kg</strong>.</li>
    <li><strong>c. Points A, B and Gap AB:</strong> At ₹300, Point A shows quantity demanded (~24 kg) while Point B shows quantity supplied (~37 kg). Since supply exceeds demand, the gap AB represents <strong>Excess Supply (Surplus)</strong>.</li>
    <li><strong>d. Points C, F and Gap CF:</strong> At the lower price line (~₹160), Point C shows quantity supplied (~17 kg) while Point F shows quantity demanded (~43 kg). Since demand exceeds supply, the gap CF represents <strong>Excess Demand (Shortage)</strong>.</li>
    <li><strong>e. Free Market Adjustment:</strong> Unsatisfied buyers competing for scarce goods bid prices upward. As price rises from the lower line toward ₹250, sellers expand output while buyers scale back demand until market equilibrium is restored at Point E.</li>
  </ul>
</div>`
  },

  // Q12 & A12
  {
    q: `<div class="q-block">
  <p>12. Draw a market equilibrium graph using the following demand schedule.</p>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 8px 0;">
    <thead>
      <tr style="background: #eedcb6; text-align: center;">
        <th style="padding: 4px; border: 1px solid #d4c2a8;">Price (₹)</th>
        <th style="padding: 4px; border: 1px solid #d4c2a8;">10</th>
        <th style="padding: 4px; border: 1px solid #d4c2a8;">20</th>
        <th style="padding: 4px; border: 1px solid #d4c2a8;">30</th>
        <th style="padding: 4px; border: 1px solid #d4c2a8;">40</th>
        <th style="padding: 4px; border: 1px solid #d4c2a8;">50</th>
      </tr>
    </thead>
    <tbody style="text-align: center;">
      <tr><td style="padding: 4px; border: 1px solid #d4c2a8; font-weight: bold;">Q.D. (kg)</td><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>
      <tr><td style="padding: 4px; border: 1px solid #d4c2a8; font-weight: bold;">Q.S. (kg)</td><td>25</td><td>20</td><td>15</td><td>10</td><td>5</td></tr>
    </tbody>
  </table>
  <p>a. Plot the demand and supply curve using the above data.</p>
  <p>b. Identify the equilibrium price and quantity.</p>
  <p>c. Observe the above data and analyse what happens if the price is set at ₹20 or ₹40.</p>
</div>`,
    a: `<div class="a-block">
  <div style="text-align: center; margin: 16px 0;">
    <svg viewBox="0 0 540 330" width="100%" height="auto" style="max-width: 500px; background: #ffffff; border: 1px solid #d4c2a8; border-radius: 8px;">
      <!-- Title -->
      <text x="270" y="24" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="middle">Market Equilibrium Graph</text>
      
      <!-- Coordinate Axes -->
      <line x1="70" y1="260" x2="470" y2="260" stroke="#333" stroke-width="1.8"/>
      <line x1="70" y1="45" x2="70" y2="260" stroke="#333" stroke-width="1.8"/>
      
      <text x="60" y="50" font-family="Arial" font-size="11" font-weight="bold" fill="#222" text-anchor="end">Price (₹)</text>
      <text x="470" y="280" font-family="Arial" font-size="11" font-weight="bold" fill="#222" text-anchor="end">Quantity (kg)</text>
      
      <!-- Y-Axis Ticks -->
      <text x="62" y="229" font-family="Arial" font-size="10" fill="#666" text-anchor="end">10</text>
      <text x="62" y="194" font-family="Arial" font-size="10" fill="#666" text-anchor="end">20</text>
      <text x="62" y="159" font-family="Arial" font-size="10" font-weight="bold" fill="#e65100" text-anchor="end">30</text>
      <text x="62" y="124" font-family="Arial" font-size="10" fill="#666" text-anchor="end">40</text>
      <text x="62" y="89" font-family="Arial" font-size="10" fill="#666" text-anchor="end">50</text>
      
      <!-- X-Axis Ticks -->
      <text x="130" y="278" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">5</text>
      <text x="190" y="278" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">10</text>
      <text x="250" y="278" font-family="Arial" font-size="10" font-weight="bold" fill="#e65100" text-anchor="middle">15</text>
      <text x="310" y="278" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">20</text>
      <text x="370" y="278" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">25</text>
      
      <!-- Equilibrium Dashed Guidelines -->
      <line x1="70" y1="155" x2="250" y2="155" stroke="#f57c00" stroke-width="1.2" stroke-dasharray="3,3"/>
      <line x1="250" y1="155" x2="250" y2="260" stroke="#f57c00" stroke-width="1.2" stroke-dasharray="3,3"/>
      
      <!-- Upward Sloping Curved Arc: Starts at (130, 225), passes through (250, 155), ends at (370, 85) -->
      <path d="M 130,225 Q 220,180 250,155 T 370,85" fill="none" stroke="#0288d1" stroke-width="2.6"/>
      <circle cx="130" cy="225" r="3.5" fill="#0288d1"/>
      <circle cx="190" cy="183" r="3.5" fill="#0288d1"/>
      <circle cx="310" cy="127" r="3.5" fill="#0288d1"/>
      <circle cx="370" cy="85" r="3.5" fill="#0288d1"/>
      
      <!-- Downward Sloping Curved Arc: Starts at (130, 85), passes through (250, 155), ends at (370, 225) -->
      <path d="M 130,85 Q 180,135 250,155 T 370,225" fill="none" stroke="#2e7d32" stroke-width="2.6"/>
      <circle cx="130" cy="85" r="3.5" fill="#2e7d32"/>
      <circle cx="185" cy="125" r="3.5" fill="#2e7d32"/>
      <circle cx="315" cy="185" r="3.5" fill="#2e7d32"/>
      <circle cx="370" cy="225" r="3.5" fill="#2e7d32"/>
      
      <!-- Equilibrium Point E -->
      <circle cx="250" cy="155" r="5.5" fill="#f57c00"/>
      <text x="264" y="151" font-family="Arial" font-size="11" font-weight="bold" fill="#e65100">E (₹30, 15 kg)</text>

      <!-- Curve Name Tags -->
      <text x="382" y="85" font-family="Arial" font-size="11" font-weight="bold" fill="#0288d1">Supply Curve</text>
      <text x="125" y="75" font-family="Arial" font-size="11" font-weight="bold" fill="#2e7d32">Demand Curve</text>
      
      <!-- Bottom Legend -->
      <g transform="translate(130, 305)" font-family="Arial, sans-serif" font-size="11">
        <path d="M 0,5 Q 10,0 20,5" fill="none" stroke="#0288d1" stroke-width="2.5"/>
        <text x="26" y="9" fill="#333">Upward-sloping (Supply)</text>
        <path d="M 180,5 Q 190,10 200,5" fill="none" stroke="#2e7d32" stroke-width="2.5"/>
        <text x="206" y="9" fill="#333">Downward-sloping (Demand)</text>
      </g>
    </svg>
  </div>
  <ul>
    <li><strong>a. Plotting &amp; Curve Identification:</strong>
      <br/>• In economic analysis, demand curves slope downwards due to the inverse relationship between price and quantity, while supply curves slope upwards due to the direct relationship between price and quantity.
      <br/>• Plotted across the schedule, the downward-sloping curve represents consumer demand behaviour, and the upward-sloping curve represents producer supply behaviour.
    </li>
    <li><strong>b. Equilibrium Price and Quantity:</strong> Both curves intersect at <strong>Point E</strong>:
      <br/>• <strong>Equilibrium Price = ₹30</strong>
      <br/>• <strong>Equilibrium Quantity = 15 kg</strong>
    </li>
    <li><strong>c. Analysis at ₹20 and ₹40:</strong>
      <br/>• <em>At Price = ₹20:</em> The market experiences a 10 kg shortage/imbalance. Competitive buying pressure bids prices upward toward the ₹30 equilibrium.
      <br/>• <em>At Price = ₹40:</em> The market experiences a 10 kg surplus/imbalance. Unsold inventory creates downward pricing pressure, bringing it back down toward the ₹30 equilibrium level.
    </li>
  </ul>
</div>`
  }
] },
                ]
            },
            ]
            }
    };


let currentSubjectKey = "";

function getLayerElement(rawId) {
    let el = document.getElementById(rawId);
    if (!el) el = document.getElementById(rawId.replace('-', ' '));
    if (!el) el = document.getElementById(rawId.replace(' ', '-'));
    return el;
}

function showLayer(layerId) {
    if (layerId === 'homepage-view') layerId = 'subject-view';
    document.querySelectorAll('.view-layer').forEach(layer => layer.classList.add('hidden'));
    const target = getLayerElement(layerId);
    if (target) target.classList.remove('hidden');

    // Scroll to top on layer transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveTab(tabKey) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabKey) {
            tab.classList.add('active');
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            tab.classList.remove('active');
        }
    });
}

function goToHomeUI() {
    clearSearch();
    updateActiveTab('all');
    showLayer('subject-view');
}

/* ============================================================ */
/* MULTI-PAGE CLIENT-SIDE ROUTER                                */
/* ============================================================ */

function getChapterUrlNumber(chapter, fallbackIndex = 0) {
    if (chapter && chapter.name) {
        const match = chapter.name.match(/Chapter\s+(\d+)/i);
        if (match) {
            return parseInt(match[1], 10);
        }
    }
    return fallbackIndex + 1;
}

function findChapterIndexInBranch(branchData, cNum) {
    if (!branchData || !branchData.chapters) return -1;
    // 1. Try matching extracted chapter number (e.g. Chapter 4 -> 4)
    let idx = branchData.chapters.findIndex((ch, i) => getChapterUrlNumber(ch, i) === cNum);
    if (idx !== -1) return idx;
    // 2. Fallback: 1-based relative array index
    const fallback = cNum - 1;
    if (fallback >= 0 && fallback < branchData.chapters.length) {
        return fallback;
    }
    return -1;
}

function findChapterIndex(chapters, cNum) {
    if (!chapters) return -1;
    let idx = chapters.findIndex((ch, i) => getChapterUrlNumber(ch, i) === cNum);
    if (idx !== -1) return idx;
    const fallback = cNum - 1;
    if (fallback >= 0 && fallback < chapters.length) {
        return fallback;
    }
    return -1;
}

function handleRoute() {
    const rawHash = window.location.hash || '#/';
    // Parse path and query string (e.g. #/subject/sst/branch/2/chapter/4?q=1)
    const hashWithoutPrefix = rawHash.replace(/^#\/?/, '');
    const [pathPart, queryPart] = hashWithoutPrefix.split('?');
    const path = (pathPart || '').replace(/^\/+|\/+$/g, '');
    const segments = path ? path.split('/') : [];

    // Parse query params (e.g. ?q=1 -> Natural numbers start from 1)
    let questionTarget = null;
    if (queryPart) {
        const params = new URLSearchParams(queryPart);
        if (params.has('q')) {
            const parsedQ = parseInt(params.get('q'), 10);
            if (!isNaN(parsedQ)) {
                questionTarget = parsedQ > 0 ? parsedQ - 1 : 0;
            }
        }
    }

    clearSearch();

    // 1. Home Route: #/ or empty
    if (segments.length === 0 || segments[0] === '' || segments[0] === 'home') {
        goToHomeUI();
        document.title = "Class 9 NCERT Solved Hub • Simple, Direct & Copy-Ready Solutions";
        return;
    }

    const first = segments[0].toLowerCase();

    // 2. Static Policy & Info Pages
    if (first === 'privacy') {
        updateActiveTab('none');
        showLayer('privacy-view');
        document.title = "Privacy Policy - NCERT Solved Hub";
        return;
    }

    if (first === 'terms') {
        updateActiveTab('none');
        showLayer('terms-view');
        document.title = "Terms of Service - NCERT Solved Hub";
        return;
    }

    if (first === 'contact') {
        updateActiveTab('none');
        showLayer('contact-view');
        document.title = "Contact Us - NCERT Solved Hub";
        return;
    }

    // 3. Subject-specific routes: #/subject/:subjectKey/...
    if (first === 'subject' && segments[1]) {
        const subKey = segments[1].toLowerCase();
        const data = ncertDatabase[subKey];
        if (!data) {
            goToHomeUI();
            return;
        }

        // 3a. Branch Chapter Solutions: #/subject/:subKey/branch/:bNum/chapter/:cNum
        if (segments[2] === 'branch' && segments[3] !== undefined && segments[4] === 'chapter' && segments[5] !== undefined) {
            const bNum = parseInt(segments[3], 10);
            const cNum = parseInt(segments[5], 10);
            if (!isNaN(bNum) && !isNaN(cNum)) {
                const bIdx = bNum > 0 ? bNum - 1 : 0;
                const branchData = data.branches?.[bIdx];
                if (branchData) {
                    const cIdx = findChapterIndexInBranch(branchData, cNum);
                    if (cIdx !== -1) {
                        renderBranchChapter(subKey, bIdx, cIdx, questionTarget);
                        return;
                    }
                }
                renderBranchView(subKey, bIdx);
                return;
            }
        }

        // 3b. Branch Chapter List: #/subject/:subKey/branch/:bNum
        if (segments[2] === 'branch' && segments[3] !== undefined) {
            const bNum = parseInt(segments[3], 10);
            if (!isNaN(bNum)) {
                const bIdx = bNum > 0 ? bNum - 1 : 0;
                renderBranchView(subKey, bIdx);
                return;
            }
        }

        // 3c. Standard Chapter Solutions: #/subject/:subKey/chapter/:cNum
        if (segments[2] === 'chapter' && segments[3] !== undefined) {
            const cNum = parseInt(segments[3], 10);
            if (!isNaN(cNum)) {
                if (!data.isBranching) {
                    const cIdx = findChapterIndex(data.chapters, cNum);
                    if (cIdx !== -1) {
                        renderChapter(subKey, cIdx, questionTarget);
                        return;
                    }
                } else {
                    // For branching subjects, find which branch contains this textbook chapter number
                    for (let b = 0; b < (data.branches || []).length; b++) {
                        const bBranch = data.branches[b];
                        const cIdx = findChapterIndexInBranch(bBranch, cNum);
                        if (cIdx !== -1 && getChapterUrlNumber(bBranch.chapters[cIdx], cIdx) === cNum) {
                            renderBranchChapter(subKey, b, cIdx, questionTarget);
                            return;
                        }
                    }
                }
            }
        }

        // 3d. Subject Chapter / Branch List: #/subject/:subKey
        renderSubjectView(subKey);
        return;
    }

    // Fallback: Default to Home
    goToHomeUI();
}

/* ============================================================ */
/* PAGE RENDERERS                                               */
/* ============================================================ */

function renderSubjectView(subjectKey) {
    currentSubjectKey = subjectKey;
    updateActiveTab(subjectKey);
    const data = ncertDatabase[subjectKey];
    if (!data) return;

    const titleEl = document.getElementById('chapter-title-heading');
    if (titleEl) titleEl.innerText = data.title;

    const backBtn = document.getElementById('chapter-back-link');
    if (backBtn) {
        backBtn.href = "#/";
        backBtn.innerText = "← Back to Subjects";
    }

    const grid = getLayerElement('chapters-list-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (data.isBranching) {
        data.branches.forEach((branch, index) => {
            grid.innerHTML += `<a class="chapter-select-btn" style="border-left: 5px solid #2563eb;" href="#/subject/${subjectKey}/branch/${index + 1}">📁 ${branch.name}</a>`;
        });
    } else {
        data.chapters.forEach((chapter, index) => {
            const chapNum = getChapterUrlNumber(chapter, index);
            const cleanTitle = (chapter.name || '').replace(/[\r\n]+/g, ' ').trim();
            grid.innerHTML += `<a class="chapter-select-btn" href="#/subject/${subjectKey}/chapter/${chapNum}">📖 ${cleanTitle}</a>`;
        });
    }

    showLayer('chapter-view');
    document.title = `${data.title} - Class 9 NCERT Solved Hub`;
}

function renderBranchView(subjectKey, branchIndex) {
    currentSubjectKey = subjectKey;
    updateActiveTab(subjectKey);
    const data = ncertDatabase[subjectKey];
    if (!data || !data.branches || !data.branches[branchIndex]) {
        renderSubjectView(subjectKey);
        return;
    }

    const branchData = data.branches[branchIndex];
    const titleEl = document.getElementById('chapter-title-heading');
    if (titleEl) titleEl.innerText = branchData.name + " Chapters";

    const backBtn = document.getElementById('chapter-back-link');
    if (backBtn) {
        backBtn.href = `#/subject/${subjectKey}`;
        backBtn.innerText = `← Back to ${data.title.replace(' Section', '').replace(' Chapters', '')}`;
    }

    const grid = getLayerElement('chapters-list-grid');
    if (!grid) return;
    grid.innerHTML = '';
    branchData.chapters.forEach((chapter, index) => {
        const chapNum = getChapterUrlNumber(chapter, index);
        const cleanTitle = (chapter.name || '').replace(/[\r\n]+/g, ' ').trim();
        grid.innerHTML += `<a class="chapter-select-btn" href="#/subject/${subjectKey}/branch/${branchIndex + 1}/chapter/${chapNum}">📖 ${cleanTitle}</a>`;
    });

    showLayer('chapter-view');
    document.title = `${branchData.name} Chapters - Class 9 NCERT Solved Hub`;
}

function renderBranchChapter(subjectKey, branchIndex, chapterIndex, questionTarget = null) {
    currentSubjectKey = subjectKey;
    updateActiveTab(subjectKey);
    const subjectData = ncertDatabase[subjectKey];
    const branchData = subjectData?.branches?.[branchIndex];
    const chapterData = branchData?.chapters?.[chapterIndex];
    if (!chapterData) {
        renderBranchView(subjectKey, branchIndex);
        return;
    }

    const chapNum = getChapterUrlNumber(chapterData, chapterIndex);
    const cleanTitle = (chapterData.name || '').replace(/[\r\n]+/g, ' ').trim();

    const headingEl = document.getElementById('final-solution-heading');
    if (headingEl) headingEl.innerText = cleanTitle;

    const backBtn = document.getElementById('solution-back-link');
    if (backBtn) {
        backBtn.href = `#/subject/${subjectKey}/branch/${branchIndex + 1}`;
        backBtn.innerText = `← Back to ${branchData.name}`;
    }

    const stack = getLayerElement('solutions-content-container');
    if (!stack) return;
    stack.innerHTML = '';

    chapterData.solutions.forEach((sol, idx) => {
        const uniqueId = `ans-branch-${idx}`;
        const questionHref = `#/subject/${subjectKey}/branch/${branchIndex + 1}/chapter/${chapNum}?q=${idx + 1}`;
        stack.innerHTML += `
            <div class="solution-card" id="card-branch-${idx}">
                <div class="card-question-header">
                    <span class="q-badge">Q${idx + 1}</span>
                    <div class="question-text">${sol.q}</div>
                </div>
                ${sol.image ? `<img src="${sol.image}" class="question-image" alt="Diagram">` : ''}
                <div id="${uniqueId}" class="answer-text">${sol.a}</div>
                <div class="card-actions-bar">
                    <button class="btn-copy-solution" onclick="copyTextToClipboard('${uniqueId}', this)">
                        <span>📋</span> Copy Answer
                    </button>
                    <button class="btn-copy-solution" onclick="copyQuestionLink('${questionHref}', this)" title="Copy direct link to this question">
                        <span>🔗</span> Share Link
                    </button>
                </div>
            </div>
        `;
    });

    showLayer('solution-view');
    document.title = `${cleanTitle} Solutions - ${branchData.name} | NCERT Solved Hub`;

    if (questionTarget !== null && questionTarget !== undefined) {
        setTimeout(() => {
            const card = document.getElementById(`card-branch-${questionTarget}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlight-target');
                setTimeout(() => card.classList.remove('highlight-target'), 2500);
            }
        }, 180);
    }
}

function renderChapter(subjectKey, chapterIndex, questionTarget = null) {
    currentSubjectKey = subjectKey;
    updateActiveTab(subjectKey);
    const subjectData = ncertDatabase[subjectKey];
    const chapterData = subjectData?.chapters?.[chapterIndex];
    if (!chapterData) {
        renderSubjectView(subjectKey);
        return;
    }

    const chapNum = getChapterUrlNumber(chapterData, chapterIndex);
    const cleanTitle = (chapterData.name || '').replace(/[\r\n]+/g, ' ').trim();

    const headingEl = document.getElementById('final-solution-heading');
    if (headingEl) headingEl.innerText = cleanTitle;

    const backBtn = document.getElementById('solution-back-link');
    if (backBtn) {
        backBtn.href = `#/subject/${subjectKey}`;
        backBtn.innerText = `← Back to Chapters`;
    }

    const stack = getLayerElement('solutions-content-container');
    if (!stack) return;
    stack.innerHTML = '';

    chapterData.solutions.forEach((sol, idx) => {
        const uniqueId = `ans-std-${idx}`;
        const questionHref = `#/subject/${subjectKey}/chapter/${chapNum}?q=${idx + 1}`;
        stack.innerHTML += `
            <div class="solution-card" id="card-std-${idx}">
                <div class="card-question-header">
                    <span class="q-badge">Q${idx + 1}</span>
                    <div class="question-text">${sol.q}</div>
                </div>
                ${sol.image ? `<img src="${sol.image}" class="question-image" alt="Question diagram">` : ''}
                <div id="${uniqueId}" class="answer-text">${sol.a}</div>
                <div class="card-actions-bar">
                    <button class="btn-copy-solution" onclick="copyTextToClipboard('${uniqueId}', this)">
                        <span>📋</span> Copy Answer
                    </button>
                    <button class="btn-copy-solution" onclick="copyQuestionLink('${questionHref}', this)" title="Copy direct link to this question">
                        <span>🔗</span> Share Link
                    </button>
                </div>
            </div>
        `;
    });

    showLayer('solution-view');
    const subTitle = subjectData.title.replace(' Section', '').replace(' Chapters', '');
    document.title = `${cleanTitle} Solutions - ${subTitle} | NCERT Solved Hub`;

    if (questionTarget !== null && questionTarget !== undefined) {
        setTimeout(() => {
            const card = document.getElementById(`card-std-${questionTarget}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlight-target');
                setTimeout(() => card.classList.remove('highlight-target'), 2500);
            }
        }, 180);
    }
}

// Navigation helpers
function selectSubject(subjectKey) {
    window.location.hash = `#/subject/${subjectKey}`;
}

function selectBranch(branchIndex) {
    window.location.hash = `#/subject/${currentSubjectKey}/branch/${branchIndex + 1}`;
}

function selectChapter(chapterIndex) {
    const data = ncertDatabase[currentSubjectKey];
    const chap = data?.chapters?.[chapterIndex];
    const chapNum = getChapterUrlNumber(chap, chapterIndex);
    window.location.hash = `#/subject/${currentSubjectKey}/chapter/${chapNum}`;
}

function selectBranchChapter(branchIndex, chapterIndex) {
    const data = ncertDatabase[currentSubjectKey];
    const chap = data?.branches?.[branchIndex]?.chapters?.[chapterIndex];
    const chapNum = getChapterUrlNumber(chap, chapterIndex);
    window.location.hash = `#/subject/${currentSubjectKey}/branch/${branchIndex + 1}/chapter/${chapNum}`;
}

function filterByTab(tabKey) {
    if (tabKey === 'all') {
        window.location.hash = '#/';
    } else {
        window.location.hash = `#/subject/${tabKey}`;
    }
}

function goToHome() {
    window.location.hash = '#/';
}

/* ============================================================ */
/* COPY ACTION & NOTIFICATIONS                                  */
/* ============================================================ */
function copyTextToClipboard(elementId, buttonElement) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const textToCopy = el.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalContent = buttonElement.innerHTML;
        buttonElement.innerHTML = "<span>✅</span> Copied!";
        buttonElement.classList.add('btn-copied');
        showToast("Answer copied to clipboard!", "success");
        setTimeout(() => {
            buttonElement.innerHTML = originalContent;
            buttonElement.classList.remove('btn-copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast("Could not copy answer automatically", "error");
    });
}

function copyQuestionLink(relativeHash, buttonElement) {
    const fullUrl = window.location.origin + window.location.pathname + relativeHash;
    navigator.clipboard.writeText(fullUrl).then(() => {
        const originalContent = buttonElement.innerHTML;
        buttonElement.innerHTML = "<span>✅</span> Link Copied!";
        buttonElement.classList.add('btn-copied');
        showToast("Direct link to question copied!", "success");
        setTimeout(() => {
            buttonElement.innerHTML = originalContent;
            buttonElement.classList.remove('btn-copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy link: ', err);
        showToast("Link: " + fullUrl, "info");
    });
}

function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✓' : 'ℹ'}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ============================================================ */
/* LIVE SEARCH ENGINE                                           */
/* ============================================================ */
function stripHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html || "";
    return tmp.textContent || tmp.innerText || "";
}

function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function handleSearch(val) {
    const query = val.trim();
    const clearBtn = document.getElementById('search-clear-btn');
    const container = document.getElementById('search-results-container');
    const list = document.getElementById('search-results-list');
    const countEl = document.getElementById('search-results-count');

    if (clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);

    if (query.length < 2) {
        if (container) container.classList.add('hidden');
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    // Iterate through all subjects in ncertDatabase
    for (const [subKey, subData] of Object.entries(ncertDatabase)) {
        const subjectDisplayName = subData.title.replace(' Section', '').replace(' Chapters', '');
        
        if (subData.isBranching) {
            subData.branches.forEach((branch, bIdx) => {
                branch.chapters.forEach((chap, cIdx) => {
                    const chapNum = getChapterUrlNumber(chap, cIdx);
                    const cleanChapTitle = (chap.name || '').replace(/[\r\n]+/g, ' ').trim();
                    chap.solutions.forEach((sol, qIdx) => {
                        const qClean = stripHtml(sol.q);
                        const aClean = stripHtml(sol.a);
                        if (
                            qClean.toLowerCase().includes(lowerQuery) ||
                            aClean.toLowerCase().includes(lowerQuery) ||
                            cleanChapTitle.toLowerCase().includes(lowerQuery) ||
                            branch.name.toLowerCase().includes(lowerQuery)
                        ) {
                            results.push({
                                subjectKey: subKey,
                                subjectName: subjectDisplayName,
                                branchName: branch.name,
                                branchIndex: bIdx,
                                chapterName: cleanChapTitle,
                                chapterIndex: cIdx,
                                chapterNumber: chapNum,
                                isBranching: true,
                                questionIndex: qIdx,
                                question: qClean,
                                answer: aClean.slice(0, 160) + (aClean.length > 160 ? '...' : '')
                            });
                        }
                    });
                });
            });
        } else {
            subData.chapters.forEach((chap, cIdx) => {
                const chapNum = getChapterUrlNumber(chap, cIdx);
                const cleanChapTitle = (chap.name || '').replace(/[\r\n]+/g, ' ').trim();
                chap.solutions.forEach((sol, qIdx) => {
                    const qClean = stripHtml(sol.q);
                    const aClean = stripHtml(sol.a);
                    if (
                        qClean.toLowerCase().includes(lowerQuery) ||
                        aClean.toLowerCase().includes(lowerQuery) ||
                        cleanChapTitle.toLowerCase().includes(lowerQuery)
                    ) {
                        results.push({
                            subjectKey: subKey,
                            subjectName: subjectDisplayName,
                            branchName: '',
                            branchIndex: -1,
                            chapterName: cleanChapTitle,
                            chapterIndex: cIdx,
                            chapterNumber: chapNum,
                            isBranching: false,
                            questionIndex: qIdx,
                            question: qClean,
                            answer: aClean.slice(0, 160) + (aClean.length > 160 ? '...' : '')
                        });
                    }
                });
            });
        }
    }

    if (container && list) {
        container.classList.remove('hidden');
        if (results.length === 0) {
            countEl.innerText = `No results found for "${query}"`;
            list.innerHTML = `
                <div class="search-empty-state">
                    <p>No questions or solutions matched your search. Try searching for terms like <strong>"cell"</strong>, <strong>"erosion"</strong>, <strong>"nitrogen cycle"</strong>, or <strong>"meander"</strong>.</p>
                </div>
            `;
        } else {
            countEl.innerText = `Found ${results.length} result${results.length > 1 ? 's' : ''} for "${query}"`;
            list.innerHTML = results.slice(0, 30).map(r => {
                const targetHash = r.isBranching
                    ? `#/subject/${r.subjectKey}/branch/${r.branchIndex + 1}/chapter/${r.chapterNumber}?q=${r.questionIndex + 1}`
                    : `#/subject/${r.subjectKey}/chapter/${r.chapterNumber}?q=${r.questionIndex + 1}`;
                return `
                <a class="search-result-card" href="${targetHash}" onclick="clearSearch()">
                    <div class="search-result-meta">
                        <span class="badge-sub badge-${r.subjectKey}">${r.subjectName}</span>
                        ${r.branchName ? `<span class="badge-branch">${r.branchName}</span>` : ''}
                        <span class="search-result-chap">${r.chapterName}</span>
                    </div>
                    <div class="search-result-q">
                        <strong>Q${r.questionIndex + 1}:</strong> ${highlightMatch(r.question.slice(0, 130), query)}
                    </div>
                    <div class="search-result-a">
                        ${highlightMatch(r.answer, query)}
                    </div>
                </a>
                `;
            }).join('');
        }
    }
}

function clearSearch() {
    const input = document.getElementById('global-search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.classList.add('hidden');
    const container = document.getElementById('search-results-container');
    if (container) container.classList.add('hidden');
}

function focusSearch() {
    window.location.hash = '#/';
    setTimeout(() => {
        const input = document.getElementById('global-search-input');
        if (input) {
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

function jumpToSearchResult(subKey, isBranching, branchIdx, chapNum, qIdx) {
    clearSearch();
    const targetHash = isBranching
        ? `#/subject/${subKey}/branch/${branchIdx + 1}/chapter/${chapNum}?q=${qIdx + 1}`
        : `#/subject/${subKey}/chapter/${chapNum}?q=${qIdx + 1}`;
    window.location.hash = targetHash;
}

/* ============================================================ */
/* SCROLL TO TOP & GLOBAL SHORTCUTS                             */
/* ============================================================ */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top-btn');
    if (btn) {
        btn.classList.toggle('hidden', window.scrollY < 300);
    }
});

// Shortcut listeners (Ctrl + K or / to search, Escape to close)
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        focusSearch();
    } else if (e.key === 'Escape') {
        clearSearch();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        focusSearch();
    }
});

/* ============================================================ */
/* ROUTER & EVENT LISTENERS INITIALIZATION                      */
/* ============================================================ */
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    handleRoute();
}
