import Container from "react-bootstrap/Container";
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';
import { optivaultUrl } from "common/links";
import "./HogeProject.scss";

const HogeProject = () => (
  <Container fluid className="hoge-project">

    <Container fluid>
      <Container className="project">
        <div className="left">
          <h3>The Hoge Project</h3>
          <div className="text">
            Our inception was inspired by the phenomenon that originated in Doge, launching an entire crypto subculture. What started as comedic memes and bottomless entertainment quickly matured to an incredibly diverse community of like-minded thinkers who wanted to do more, together.

            At our core, we are decentralized. We are organically grown. That means no team wallets, and no developer taxes on holders. Everything we’ve achieved up to this point was not done with third-party capital infusion or working budgets. It was done through community.

            This ‘utility through community’ is what separates Hoge from the rest. It’s what keeps us building, through winters and bull runs. It’s what makes us rally when called upon. It’s what DeFi was always meant to be, and that’s Hoge.
          </div>

          <a href={"/roadmap"}>See What’s Next! View ‘23 Roadmap<ArrowRight className="icon" /></a>
        </div>
        <div className="right">
          <img alt="Hoge" src="/images/hoge_project.png" />
          <div className="image" />
        </div>
      </Container>
    </Container>

    <Container fluid>
      <Container>
        <div className="infos">
          <div className="info info-1">
            <div className="image" />
            <div className="value">2%</div>
            <div className="text">Burn & redistribution
              per transaction</div>
          </div>
          <div className="info info-2">
            <div className="image" />
            <div className="value">68K</div>
            <div className="text">Hoge holders
              & counting</div>
          </div>
          <div className="info info-3">
            <div className="image" />
            <div className="value">39.7%</div>
            <div className="text">Deflationary tokens
              left in circulation</div>
          </div>
        </div>
      </Container>
    </Container>

    <Container fluid className="tokens-wrapper">
      <Container className="tokens">
        <div className="left"></div>
        <div className="right">
          <h3>Token Specifications</h3>
          <div className="text">
            HOGE is an ERC20 token on the Ethereum blockchain. It’s designed to be deflationary, burning away at itself with every transaction. There were no team tokens allocated at launch, and the project today is 100% community owned and operated. There are no developer wallets or marketing wallets, meaning the community rallies together to raise funds, thus making HOGE a pure DeFi project.
            <br/><br/>
            As part of the deflationary aspect of the token, a 2% burn and redistribution tax applies to every transaction. That tax is split between a burn function (forever removing tokens out of circulation), and a redistribution action that gives back to the holders. That’s it. No taxes for marketing, team, or dev wallets exist.
          </div>
          <div className="funds">
            <div className="optivault" />
            <div className="text">
              <span>HOGE Liquidity is LOCKED via OptiVaults</span>
              <a href={optivaultUrl}>See The Funds<ArrowRight className="icon" /></a>
            </div>
          </div>
        </div>
      </Container>
    </Container>

  </Container>
);

export default HogeProject;
