const mainCompContainer = document.querySelector(".comps-main");
const compsList = document.querySelector(".comps-list");
const compsSelectedLevels = document.querySelector(".comps-levels");
const compsLevelsContainer = document.querySelector(".comps-levels-container");
const headlinersContent = document.querySelector(".headliners-content");
const itemsContent = document.querySelector(".items-content");
const rollAtLevel = document.querySelector(".rolling-at");
const augmentContent = document.querySelector(".augments-content");

const tierCompsData = [
  {
    title: "TwistedFate",
    info: {
      headliners: ["Twisted Fate", " Blitzcrank"],
      items: [
        "Twisted Fate: Archangel's Staff, Spear of Shojin, Morello",
        "<br><br>Blitzcrank: Steadfast Heart",
      ],
      augments: "-",
      rollingAt: 8,
    },
    levels: {
      4: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Taric.avif" alt="Taric" />
              <span>Taric</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_TahmKench.avif" alt="TahmKench" />
              <span>Tahm Kench</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>`,
      5: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Taric.avif" alt="Taric" />
              <span>Taric</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_TahmKench.avif" alt="TahmKench" />
              <span>Tahm Kench</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Bard.avif" alt="Bard" />
              <span>Bard</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>`,
      6: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Taric.avif" alt="Taric" />
              <span>Taric</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Bard.avif" alt="Bard" />
              <span>Bard</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Amumu.avif" alt="Amumu" />
              <span>Amumu</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Vex.avif" alt="Vex" />
              <span>Vex</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>`,
      7: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Blitzcrank.avif"
                alt="Blitzcrank"
              />
              <span>Blitzcrank</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Taric.avif" alt="Taric" />
              <span>Taric</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_TwistedFate.avif"
                alt="TwistedFate"
              />
              <span>Twisted Fate</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lulu.avif" alt="Lulu" />
              <span>Lulu</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>`,
      8: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Blitzcrank.avif"
                alt="Blitzcrank"
              />
              <span>Blitzcrank</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Illaoi.avif" alt="Illaoi" />
              <span>Illaoi</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_TwistedFate.avif"
                alt="TwistedFate"
              />
              <span>Twisted Fate</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Sona.avif" alt="Sona" />
              <span>Sona</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      9: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Blitzcrank.avif"
                alt="Blitzcrank"
              />
              <span>Blitzcrank</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Illaoi.avif" alt="Illaoi" />
              <span>Illaoi</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Sona.avif" alt="Sona" />
              <span>Sona</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_TwistedFate.avif"
                alt="TwistedFate"
              />
              <span>Twisted Fate</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ziggs.avif" alt="Ziggs" />
              <span>Ziggs</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      10: ` <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Qiyana.avif" alt="Qiyana" />
              <span>Qiyana</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_IllaoiMinion.png.avif"
                alt="Tentacle"
              />
              <span>Tentacle</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gragas.avif" alt="Gragas" />
              <span>Gragas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Illaoi.avif" alt="Illaoi" />
              <span>Illaoi</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Blitzcrank.avif" alt="Blitzcrank" />
              <span>Blitzcrank</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Nami.avif" alt="Nami" />
              <span>Nami</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TMP10_DiscoBall.avif" alt="DiscoBall" />
              <span>Disco Ball</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Sona.avif" alt="Sona" />
              <span>Sona</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>

    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_TwistedFate.avif"
                alt="TwistedFate"
              />
              <span>Twisted Fate</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ziggs.avif" alt="Ziggs" />
              <span>Ziggs</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lux.avif" alt="Lux" />
              <span>Lux</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    },
  },
  {
    title: "AkaliKarthus",
    info: {
      headliners: ["Akali", " Karthus"],
      items: [
        "Akali: Red Buff, Infinity Edge, Hand of Justice",
        "<br><br>Karthus: Spear of Shojin, Guardbreaker, Archangel's Staff",
      ],
      augments: "-",
      rollingAt: 8,
    },
    levels: {
      4: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kaisa.avif" alt="Kaisa" />
              <span>KaiSa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      5: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Evelynn.avif" alt="Evelynn" />
              <span>Evelynn</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kaisa.avif" alt="Kaisa" />
              <span>KaiSa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      6: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Neeko.avif" alt="Neeko" />
              <span>Neeko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon-wrapper">
          <div class="hexagon cost-1">
            <div class="hexagon-content">
              <div class="hexagon-img-container">
                <img src="assets/TFT10_Kennen.avif" alt="Kennen" />
                <span>Kennen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kaisa.avif" alt="Kaisa" />
              <span>Kaisa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_MissFortune.avif"
                alt="MissFortune"
              />
              <span>Miss Fortune</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      7: ` <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Neeko.avif" alt="Neeko" />
              <span>Neeko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gnar.avif" alt="Gnarr" />
              <span>Gnarr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Akali.avif" alt="Akali" />
              <span>Akali</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kennen.avif" alt="Kennen" />
              <span>Kennen</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Karthus.avif" alt="Karthus" />
              <span>Karthus</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      8: `<div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Gnar.avif" alt="Gnar" />
              <span>Gnar</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Yorick.avif" alt="Yorick" />
              <span>Yorick</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Neeko.avif" alt="Neeko" />
              <span>Neeko</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Akali.avif" alt="Akali" />
              <span>Akali</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon cost-4">
        <div class="hexagon-content">
          <div class="hexagon-img-container">
            <img src="assets/TFT10_Viego.avif" alt="Viego" />
            <span>Viego</span>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Karthus.avif" alt="Karthus" />
              <span>Karthus</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>`,
      9: `<div>As level 8</div>`,
      10: `<div>As level 8</div>`,
    },
  },
  {
    title: "TwinTerror",
    info: {
      headliners: ["Twitch", " Pantheon", " Vex"],
      items: [
        "Twitch: Infinity Edge, Red Buff, Blue Buff",
        "<br><br>Pantheon: Steadfast Heart, Evenshroud, Warmog's Armor",
      ],
      augments: "Twin Terror",
      rollingAt: "Level 6 or 7 slowroll",
    },
    levels: {
      4: `<div>See level 8</div>`,
      5: `<div>See level 8</div>`,
      6: `<div>See level 8</div>`,
      7: `<div>See level 8</div>`,
      8: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Akali.avif" alt="Akali" />
              <span>Akali</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Pantheon.avif" alt="Pantheon" />
              <span>Pantheon</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Akali.avif" alt="Akali" />
              <span>Akali</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Amumu.avif" alt="Amumu" />
              <span>Amumu</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Twitch.avif" alt="Twitch" />
              <span>Twitch</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Twitch.avif" alt="Twitch" />
              <span>Twitch</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Vex.avif" alt="Vex" />
              <span>Vex</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Vex.avif" alt="Vex" />
              <span>Vex</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      9: `<div>As level 8</div>`,
      10: `<div>As level 8</div>`,
    },
  },
  {
    title: "Riven3",
    info: {
      headliners: ["Riven (8-Bit > Edgelord)"],
      items: [
        "Riven: Bloodthirster, Quicksilver, Giant Slayer",
        "<br><br>Caitlyn: Red Buff, Infinity Edge",
      ],
      augments: "-",
      rollingAt: "7 Slowroll",
    },
    levels: {
      4: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kaisa.avif" alt="Kaisa" />
              <span>Kaisa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      5: ` <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Neeko.avif" alt="Neeko" />
              <span>Neeko</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kaisa.avif" alt="Kaisa" />
              <span>Kaisa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      6: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Neeko.avif" alt="Neeko" />
              <span>Neeko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kennen.avif" alt="Kennen" />
              <span>Kennen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Seraphine.avif" alt="Seraphine" />
              <span>Seraphine</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Senna.avif" alt="Senna" />
              <span>Senna</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      7: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Riven.avif" alt="Riven" />
              <span>Riven</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
              <span>Kayle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Caitlyn.avif" alt="Caitlyn" />
              <span>Caitlyn</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      8: `<div class="comps-row row1">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayn.avif" alt="Kayn" />
              <span>Kayn</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Riven.avif" alt="Riven" />
              <span>Riven</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
              <span>Kayle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Caitlyn.avif" alt="Caitlyn" />
              <span>Caitlyn</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      9: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayn.avif" alt="Kayn" />
              <span>Kayn</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Riven.avif" alt="Riven" />
              <span>Riven</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lucian.avif" alt="Lucian" />
              <span>Lucian</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
              <span>Kayle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Caitlyn.avif" alt="Caitlyn" />
              <span>Caitlyn</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      10: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Garen.avif" alt="Garen" />
              <span>Garen</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayn.avif" alt="Kayn" />
              <span>Kayn</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_Mordekaiser.avif"
                alt="Mordekeiser"
              />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Riven.avif" alt="Riven" />
              <span>Riven</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lucian.avif" alt="Lucian" />
              <span>Lucian</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img
                src="assets/TFT10_MissFortune.avif"
                alt="MissFortune"
              />
              <span>MissFortune</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
              <span>Kayle</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Corki.avif" alt="Corki" />
              <span>Corki</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Caitlyn.avif" alt="Caitlyn" />
              <span>Caitlyn</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    },
  },
  {
    title: "Yone",
    info: {
      headliners: ["Yone"],
      items: [
        "Yone: Hand of Justice, Edge of Night, Infinity Edge",
        "<br><br>Zed: Hand of Justice, Edge of Night, Infinity Edge",
      ],
      augments: "-",
      rollingAt: "7 Slowroll",
    },
    levels: {
      4: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_KSante.avif" alt="KSante" />
              <span>KSante</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Yone.avif" alt="Yone" />
              <span>Yone</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
      <div class="hexagon-content"></div>
    </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Aphelios.avif" alt="Aphelios" />
              <span>Aphelios</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      5: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_KSante.avif" alt="KSante" />
              <span>KSante</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Lillia.avif" alt="Lillia" />
              <span>Lillia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Yone.avif" alt="Yone" />
              <span>Yone</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Aphelios.avif" alt="Aphelios" />
              <span>Aphelios</span>
            </div>
          </div>
        </div>
      </div>
    
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Senna.avif" alt="Senna" />
              <span>Senna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`,
      6: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_KSante.avif" alt="KSante" />
              <span>KSante</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Mordekaiser.avif" alt="Mordekeiser" />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Yone.avif" alt="Yone" />
              <span>Yone</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
      <div class="hexagon cost-1">
        <div class="hexagon-content">
          <div class="hexagon-img-container">
            <img src="assets/TFT10_Evelynn.avif" alt="Evelynn" />
            <span>Evelynn</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Aphelios.avif" alt="Aphelios" />
              <span>Aphelios</span>
            </div>
          </div>
        </div>
      </div>
    
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Senna.avif" alt="Senna" />
              <span>Senna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`,
      7: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Mordekaiser.avif" alt="Mordekeiser" />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Zed.avif" alt="Zed" />
              <span>Zed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Katarina.avif" alt="Katarina" />
              <span>Katarina</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Evelynn.avif" alt="Evelynn" />
              <span>Evelynn</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-3">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Yone.avif" alt="Yone" />
          <span>Yone</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
          <span>Kayle</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
      <div class="hexagon-content"></div>
    </div>
    
    <div class="hexagon">
    <div class="hexagon-content"></div>
  </div>
    </div>
    </div>`,
      8: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Mordekaiser.avif" alt="Mordekeiser" />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Qiyana.avif" alt="Qiyana" />
              <span>Qiyana</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Zed.avif" alt="Zed" />
              <span>Zed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-2">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Katarina.avif" alt="Katarina" />
              <span>Katarina</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-3">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Yone.avif" alt="Yone" />
          <span>Yone</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
          <span>Kayle</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
      <div class="hexagon-content"></div>
    </div>
    
    <div class="hexagon">
    <div class="hexagon-content"></div>
  </div>
    </div>
    </div>`,
      9: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Mordekaiser.avif" alt="Mordekeiser" />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Qiyana.avif" alt="Qiyana" />
              <span>Qiyana</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Zed.avif" alt="Zed" />
              <span>Zed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Evelynn.avif" alt="Evelynn" />
              <span>Evelynn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-3">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Yone.avif" alt="Yone" />
          <span>Yone</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Katarina.avif" alt="Katarina" />
          <span>Katarina</span>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
          <span>Kayle</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
      <div class="hexagon-content"></div>
    </div>
    
    <div class="hexagon">
    <div class="hexagon-content"></div>
  </div>
    </div>
    </div>`,
      10: `<div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Mordekaiser.avif" alt="Mordekeiser" />
              <span>Mordekeiser</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Viego.avif" alt="Viego" />
              <span>Viego</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-5">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Qiyana.avif" alt="Qiyana" />
              <span>Qiyana</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-3">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Ekko.avif" alt="Ekko" />
              <span>Ekko</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hexagon-wrapper">
      <div class="hexagon cost-5">
        <div class="hexagon-content">
          <div class="hexagon-img-container">
            <img src="assets/TFT10_Qiyana.avif" alt="Qiyana" />
            <span>Qiyana</span>
          </div>
        </div>
      </div>
    </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-4">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Zed.avif" alt="Zed" />
              <span>Zed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-3">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Yone.avif" alt="Yone" />
          <span>Yone</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon-wrapper">
        <div class="hexagon cost-1">
          <div class="hexagon-content">
            <div class="hexagon-img-container">
              <img src="assets/TFT10_Evelynn.avif" alt="Evelynn" />
              <span>Evelynn</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Katarina.avif" alt="Katarina" />
          <span>Katarina</span>
        </div>
      </div>
    </div>
    </div>
    <div class="comps-row row1">
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
    </div>
    <div class="comps-row row2">
    <div class="hexagon-wrapper">
    <div class="hexagon cost-2">
      <div class="hexagon-content">
        <div class="hexagon-img-container">
          <img src="assets/TFT10_Kayle.avif" alt="Kayle" />
          <span>Kayle</span>
        </div>
      </div>
    </div>
  </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>
      <div class="hexagon">
        <div class="hexagon-content"></div>
      </div>

      <div class="hexagon">
      <div class="hexagon-content"></div>
    </div>
    
    <div class="hexagon">
    <div class="hexagon-content"></div>
  </div>
    </div>
    </div>`,
    },
  },

  // Add more comps as needed
];

const defaultColor = "transparent";

let activeSelectedElement = null;
let activeSelectedLevel = null;

let compLevelSpans = compsSelectedLevels.querySelectorAll("span");

compsList.addEventListener("click", (event) => {
  compLevelSpans.forEach((span) => {
    span.style.backgroundColor = defaultColor;
  });

  if (event.target.tagName === "LI") {
    if (activeSelectedElement) {
      activeSelectedElement.style.backgroundColor = defaultColor;
    }

    event.target.style.backgroundColor = "#e5cb61";
    activeSelectedElement = event.target;
    const selectedComp = event.target.textContent.replace(/\s+/g, "");
    const compData = tierCompsData.find((comp) => comp.title === selectedComp);
    if (compData) {
      displayCompContent(compData.levels[4]);
      displayExtraInfo(compData.info);

      compsSelectedLevels.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
          if (activeSelectedLevel) {
            activeSelectedLevel.style.backgroundColor = defaultColor;
          }

          e.target.style.backgroundColor = "#e5cb61";
          activeSelectedLevel = e.target;

          const selectedLevel = parseInt(e.target.textContent.trim());
          const levelContent = compData.levels[selectedLevel];

          if (levelContent) {
            displayCompContent(levelContent);
          }
        }
      });
    }
  }
});

function displayCompContent(content) {
  mainCompContainer.innerHTML = content;
}

function displayExtraInfo(data) {
  headlinersContent.innerHTML = data.headliners;
  itemsContent.innerHTML = data.items;
  rollAtLevel.innerHTML = data.rollingAt;
  augmentContent.innerHTML = data.augments;
}
