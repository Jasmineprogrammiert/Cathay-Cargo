import "./topBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Destination</h1>
      <div className="header-container">
        <h2 className="heading">Loc. (agent)</h2>
        <h2 className="heading">Times</h2>
      </div>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <div className="userTexts">
                <span className="destination">{user.destination}</span>
                <span className="agent">{user.agent}</span>
              </div>
            </div>
            <span className="time">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox