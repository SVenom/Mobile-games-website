function swapImage() {
    // debugger
    var image = document.getElementById("imageToSwap");
    var dropd = document.getElementById("swapImg");
    image.src = dropd.options[dropd.selectedIndex].value;


    var map = document.getElementById("map");
    var heading = document.getElementById("heading3");
    var textGrey = document.getElementById("textGrey");
    var textGrey2 = document.getElementById("textGrey2");

    if (dropd.value == "../Maps/erangel.jpg") {
        map.innerHTML = "Erangel";
        heading.innerHTML = "PUBG’s Erangel is the game’s first playable map, which is laid out on an 8km X 8km grid, making it four times larger than the recently released Sanhok map. With such a large playing area, one could strategize their drop to maximise their survival during the initial stages of the game. Additionally, one might find themselves using vehicles on an occasional basis to traverse across this beautiful map.Erangel features a blend of cities, small towns, a power plant and a military place dotted over vast green lands, allowing the player to explore it with greater interest. The map offers dynamic weather,and with the large distances, one can expect all kinds of gunfights, including intense short bursts or those long-range sniper attacks.There are no exclusive weapons available on Erangel. SCAR-L assault rifle comes close as it only features on Erangel and Miramar";

        textGrey.innerHTML = "<strong>Erangel Map Loot Places</strong> <br> One could find maximum loot at the following three loot areas in the Erangel map. However, one should be extremely careful as these areas are usually swarming with other players during the initial stages of the game. <br> Sosnovka Military Base – Located in the southern island, the Sosnovka Military Base is one of the best   places in the game where you can find consistent loot that consists high quantities of weapons, armour and attachments. <br><br>      <strong>School</strong> – The school is located at the centre of the Erangel map and is one of the morepopular places amongst the players due to the proximity of its location. One can find good quantities of loot that includes assault rifles, DMRs and mostly level 2 gear.<br><strong> Mylta Power</strong> – Located in the east, the Mylta Power is a power plant that offers high quantities of supreme loot including sniper rifle attachments and level 3 military gear.Other areas that contain reasonable amounts of loot include the <strong>Pochinki,Gerogepol,Prison and Novorepnoye</strong>.";  

        textGrey2.innerHTML = "<strong>Erangel Map Guide – Start Locations</strong><br>  Erangel is a very large map and the ideal location to parachute yourself would a zone that is far away from the loot areas but still has a high spawn rate of vehicles, allowing you to quickly travel towards the concentrated areas while your opponents eliminate each other.";

        return false;
      }
    else if (dropd.value == "../Maps/minamar.jpg") {
        map.innerHTML = "Minamar";
        heading.innerHTML = "PUBG’s Miramar is the second-playable map released by the company behind the franchise. Like Erangel, this map too is laid out on an 8km X 8km grid, giving the players enough freedom of choice to plan their approach to become the last man standing carefully. However, unlike the lush green area of Erangel, the Miramar features a desert environment with minimal foliage. Buildings are the only sources of refuge if one is planning to avoid action for the most part of the game.Win94 sniper rifle is exclusively available in the Miramar map. SCAR-L, Sawed-off and R45 the other Miramar weapons that are not freely available across all the three PUBG maps.";

        textGrey.innerHTML = "<strong>Miramar Map Loot Places</strong> <br>One could find maximum loot at the following three loot areas in the Miramar map. However, one should be extremely careful as these areas are usually swarming with other players during the initial stages of the game.<br><strong>Prison</strong> – The prison is located in the south-west corner of the map, away from all the action that usually happens at the centre of Miramar. Nevertheless, the prison on a small island is a wonderful place for players who are looking for loot featuring weapons and armour. <br><strong> Pecado</strong> – The Pecado offers high-quality loot but features stiff competition during the early stages of the game due to its positioning in the centre of the map. Quite a few players tend to drop towards the centre, and one must be on their toes to navigate through the chaos seen while gathering the loot.<br><strong>Campo Militar</strong> – Campo Militar is located in the north-east corner of the map, and one has to do enough travelling to reach this spot if they choose to parachute themselves into the central area of the map.Other loot areas in Miramar include <strong>Planta Potabilizadora and Hacienda Del Patron.</strong>";
        textGrey2.innerHTML = "<strong>Miramar Map Guide – Start Locations</strong> <br> Parachuting yourself into one of the loot locations is an ideal strategy to stock up in the early stages of the game. However, this could be a risky move as one faces stiff competition with a bunch of players dropping in the same location. Ideally, one could land far off from a popular loot area and quickly move to the area with a vehicle and rush back to the safe zone.";

        return false;            
       
      }

    else if (dropd.value == "../Maps/sanhok.jpg") {
      map.innerHTML = "Sanhok";
      heading.innerHTML = "Unlike the other PUBG maps, Sanhok is specifically designed so that the players on the map  encounter a faster pace throughout the round. The map is 4km X 4km, which is four times smaller than the others offering an enhanced challenge.Inspired by the rainforests of the Southeast Asian region, Sanhok features lush greenery that is dotted with buildings, ruins and military bases alongside an expansive road and river network. Most importantly, the map marked the return of the weather system to the game along with better weapon spawns for a faster gameplay experience.Additionally, the map brings in a couple of exclusive vehicles and weapons, including the QBZ 95 assault rifle and the QBU88 Designated Marksman rifle.";

      textGrey.innerHTML = "<strong>Sanhok Map Loot Places</strong><br>One could find maximum loot at the following three loot areas in the Sanhok map:<br><strong>Ruins</strong> – The ruins are extensively dotted with loot across multiple floors making it a hotly-contested area during the initial stages of the game, and one should pack in enough firepower to survive the early onslaught.<br><strong>Bootcamp</strong> – This area houses tonnes weapons and is an ideal place for people looking to stock up before entering the battle zone during the final stages of the round.<br><strong>Camp Alpha, Bravo and Charlie</strong> – Although not high on loot, it is observed that these three camps have a relatively high amount of spawn gear, forcing a swarm of players towards these locations.Other areas of interest include the <strong>Paradise Resort and the Docks</strong>.";

      textGrey2.innerHTML = "<strong>Sanhok Map Guide – Start Locations</strong><br>Naturally, parachuting yourself into one of the loot areas gives you an opportunity to stock up on your supplies early on in the game. However, one faces stiff competition at these moments and plan the strategy well.As Sanhok is quarter the size of the other two maps on PUBG, landing at locations near the edges of the map could help one plan their approach as one does not need to traverse huge distances to maintain themselves in the safe zone.";
      
      return false;
    }
    else if (dropd.value == "../Maps/vikendi.jpg") {
        map.innerHTML = "Vikendi";
        heading.innerHTML = "<strong>Vikendi is a snow map introduced across all platforms in PUBG</strong>.<br><br> It is the forth map to be introduced in this battle royale game. Vikendi is a 6Km X 6Km map which a bit bigger than Sanhok but smaller than Erangel and Miramar. Based on an isolated Northern resort island, players can play both day and night version of the map.Vikendi also happens to be the only map which has G36C, an assault rifle. Major cities in Vikendi include Dobro Mesto, Goroka, Podvosto and Volnova.";

        textGrey.innerHTML = "<strong>Vikendi Map Loot Places</strong>";
        
        textGrey2.innerHTML = "<strong>Dino Park<br>Cement Factory<br>Cosomodrome<br>Hot Springs<br>Port</strong><br>Sep 14, 2021 3:38 am MOBILE PUBGWhen is Vikendi coming back to PUBG Mobile in Version 1.6?Players will have to wait a bit longer to play on the map again.        Wasif AhmedImage via PUBG Corp.Vikendi is coming to PUBG Mobile in version 1.6. The new update has already dropped into the game, but the snowy map hasn’t arrived yet. This is because it will released a bit later.Tencent confirmed that Vikendi will be added to PUBG Mobile on Oct. 8. The map will be added for a limited time and will be taken down on Nov. 15.";

        return false;
      }
      else if (dropd.value == "../Maps/livik.jpg") {
        map.innerHTML = "Livik";
        heading.innerHTML = "This text matches the A8 map";
        textGrey.innerHTML = "zzzz zzzzz";
        textGrey2.innerHTML = "pppp ppp pp p p";
        return false;
      }
      else if (dropd.value == "../Maps/karakin.jpg") {
        map.innerHTML = "Karakin";
        heading.innerHTML = "Karakin is the latest map released by PUBG Corp in the game. The map is the smallest in size out of all the available maps and it feels like a combination of Miramar and Sanhok. Karakin is a desert map that packs a lot of punch. The weapon spawn rate in the game is low compared to other maps(at least for the top tier) and using Winchester is important. The spawn rate for utilities is also low and players have to make the best out of what they find.";

        textGrey.innerHTML = "<strong>There are six big towns located in the corners of the map and the entire midsection of the map is filled with small structures. The only six named towns in Karakin are-<br><li>Al Hayik<br><li>Hadiqa Nemo<br><li>Bashara<br><li>Cargo Ship<br><li>Bahr Sahir<br><li>Al Habar</strong>";

        textGrey2.innerHTML = "Karakin is quite different from other maps in terms of gameplay. It is very fast-paced and players with an aggressive approach will find it more comfortable. As of now the map is only available of PUBG PC but expect it to arrive on Mobile platform soon.";
        return false;
      }
}