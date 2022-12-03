import Footer from "./Footer";

const Main = () => {
  return (
    <main className="card">
      <h1 className="card__title">Spending - Last 7 days</h1>

      <div className="card__graphs">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
        <div className="box box6"></div>
        <div className="box box7"></div>
      </div>

      <div className="days">
        <div className="day">mon</div>
        <div className="day">tue</div>
        <div className="day">wed</div>
        <div className="day">thu</div>
        <div className="day">fri</div>
        <div className="day">sat</div>
        <div className="day">sun</div>
      </div>

      <div className="divider"></div>

      <Footer />
    </main>
  );
};

export default Main;
