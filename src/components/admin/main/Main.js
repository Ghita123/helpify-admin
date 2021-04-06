import "./Main.css";
import hello from "./../../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>BONJOUR</h1>
            <p>Tableau de bord de l'adminastrateur</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Nombre d'utilisateurs</p>
              <span className="font-bold text-title">652</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-address-card fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Nombre de publications</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-comments  fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Nombre de commentaires</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Rapport</h1>
              </div>
              
            </div>
            <Chart />
          </div>

          <div className="charts__right">

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Offreurs</h1>
              </div>

              <div className="card2">
                <h1>Demandeurs</h1>
                </div>

              <div className="card3">
               <h1>Publications</h1>
              </div>

              <div className="card4">
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
