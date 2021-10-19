import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import helperSuperheroes from "../../helper/helperSuperheroes";
import Loader from "../Loader/Loader";
import "./PowerStatsTeam.css";
function PowerStatsTeam() {
  const { superheroes } = useSelector((state) => state);
  const [stats, setStats] = useState({
    name: "hola",
    value: 1000,
    height: 0,
    weight: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const promStats = helperSuperheroes.convertToPowerstats(superheroes);
    let { name, value } = promStats;
    const promHyW = helperSuperheroes.convertToHyW(superheroes);
    let { height, weight } = promHyW;
    setStats({ name, value, height, weight });
    setLoading(false);
  }, [superheroes]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-3 card  over-card bg-white rounded">
      <div className="d-flex flex-row board">
        <div className="p-4 text-center skill-block-team rounded ">
          <h6>Team: {stats.name}</h6>
          <h4>{Number(stats.value.toFixed(1))}</h4>
        </div>
        <div className="p-4 text-center skill-block-team rounded ">
          <h6>{"Weight"}</h6>
          <h4>{Number(stats.weight.toFixed(2)) || 0} Kg</h4>
        </div>
        <div className="p-4 text-center skill-block-team rounded ">
          <h6>{"Height"}</h6>
          <h4>{Number(stats.height.toFixed(2)) || 0} Mts</h4>
        </div>
      </div>
    </div>
  );
}

export default PowerStatsTeam;
