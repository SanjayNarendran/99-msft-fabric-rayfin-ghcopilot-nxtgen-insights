# To Boldly Go: Insights with Rayfin and GitHub Copilot

A presentation on where data insights are heading, in four stages, all built on Microsoft Fabric:

1. **Intelligent UX**: AI-native user experiences, and the Fabric platform that makes them possible: what 2026 added
   (Rayfin for the user experience, and MCP, through which GitHub Copilot drives agentic development)
2. **Automatic & Governed**: insights that find you, told for the role you play
3. **Generative UI**: visual-first insights
4. **Multimodal Insights**: natural-language cohort discovery, a patient's whole record with its slides and scans
   (Patient 360), and a conversation that answers with a breathing 4D CT

It then hands over to the demo.

**View it live:** https://sanjaynarendran.github.io/99-msft-fabric-rayfin-ghcopilot-nxtgen-insights/

The previous version (v1), whose first stage was **Conversational** (Microsoft 365 Copilot and GitHub Copilot in the
flow of work), is kept at [`v1/`](v1/index.html), live at
https://sanjaynarendran.github.io/99-msft-fabric-rayfin-ghcopilot-nxtgen-insights/v1/, and tagged `v1`.

The deck is a single self-contained HTML file ([`index.html`](index.html)): styles, scripts, fonts and logos are all
embedded (including the stage 4 images and videos), so it also works offline. Download it and open it in any modern browser (Edge, Chrome, Safari, Firefox).

## Hosted on Microsoft Fabric

The deck is also a Fabric App (Rayfin static hosting) in the **FabricChicagoPresentation** workspace, signed in with
Fabric: https://sandy-plum-8f8b0fe1d1-centralus.webapp.fabricapps.net. It runs on the workspace's capacity, which
must be running while the deck is shown. To publish a new version (Node.js 20, 22 or 24):

```bash
cd fabric
npm install
npm run deploy
```

## Controls

| Key | Action |
| --- | --- |
| → · Space · Page Down | Next step or slide |
| ← · Page Up | Previous step or slide |
| Home · End · 1–9 | First, last or numbered slide |
| Click a bar | Open that stage at its first slide |
| Click the line at the foot | Go to the slide under the pointer (its title shows on hover) |
| F | Full screen |
| N | Speaker notes |
| R | Replay the current slide |
| M | Motion on or off |
| T | Light or dark theme |

Presenter clickers that send Page Down / Page Up work as well.

## Credits

Set in [Fira Sans](https://github.com/mozilla/Fira), embedded under the SIL Open Font License
([`FiraSans-LICENSE.txt`](FiraSans-LICENSE.txt)). The data in stages 1 to 3 is from the public CMS Care Compare
healthcare-associated infection (HAI) files.

Stage 4 replays the Cohort Discovery, approval and Patient 360 apps of the Fabric medical cohort demo. Its patients are
synthetic; the images were captured from Patient 360's own viewers and are public research data attached to those
synthetic patients:

- Breast cancer slide TCGA-AC-A4ZE: NCI Genomic Data Commons, NIH GDC open access (cite the TCGA Research Network); AI
  immune-cell map from the Stony Brook TCGA TIL maps (Saltz J et al., Cell Reports 2018), CC BY 4.0
- Chest CT with the nodule outline: LIDC-IDRI, via NCI Imaging Data Commons
  ([doi:10.7937/K9/TCIA.2015.LO9QL9SX](https://doi.org/10.7937/K9/TCIA.2015.LO9QL9SX)), CC BY 3.0
- Breathing 4D CT: TCIA 4D-Lung (Hugo GD, Weiss E, Sleeman WC, et al., The Cancer Imaging Archive, 2016), via NCI
  Imaging Data Commons, CC BY 3.0
