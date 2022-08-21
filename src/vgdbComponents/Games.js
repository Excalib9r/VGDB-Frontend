import React from 'react'
import rdr2 from "./header.jpg"
import withcer3 from "./witcher3.jpg"
import sushima from "./sushima.png"
import cyberPunk from "./cyberpunk.png"
import gow from "./gow.jpg"
import gowrag from "./gowrag.png"
import last2 from "./last2.png"
import uncharted from "./uncharted.jpg"
import valhala from "./valhala.png"
import willofwisps from "./willofwisps.png"
import farcry6 from "./farcry6.jpg"
import codblack from "./codblack.jpg"
import apexlegends from "./apexlegends.jpg"
import blackmyth from "./blackmyth.jpg"
import brawlhala from "./brawlhala.jpg"
import eldenring from "./eldenring.png"
import sekiro from "./sekiro.jpg"
import pubgpc from "./pubgpc.jpg"
import valorant from "./valorant.png"
import { Game } from "./Game";

export const Games = (props) => {
  return (
    <>
    {
      props.allGames ? <div className='forGames'>
        <Game image={rdr2} title="RDR2" />
        <Game image={withcer3} title="Witcher 3" />
        <Game image={sushima} title="Ghost of Sushima" />
        <Game image={cyberPunk} title="CyberPunk 2077" />
        <Game image={gow} title="God of War" />
        <Game image={farcry6} title="Far Cry 6" />
        <Game image={codblack} title="Call of Duty : Black Ops" />
        <Game image={apexlegends} title="Apex Legends" />
        <Game image={blackmyth} title="Black Myth Wukong" />
        <Game image={brawlhala} title="Brawlhalla" />
        <Game image={eldenring} title="Elden Ring" />
        <Game image={sekiro} title="Sekiro : Shadows Die Twice" />
        <Game image={pubgpc} title="PUBG" />
        <Game image={valorant} title="Valorant" />
        <Game image={last2} title="The Last of Us 2" />
        <Game image={uncharted} title="Uncharted 4" />
        <Game image={gowrag} title="God of War Ragnarak" />
        <Game image={valhala} title="Assasins Creed Valhalla" />
        <Game image={willofwisps} title="Will of Wisps" />
      </div> : ""
    }
    {
      props.topRated ? <div className='forGames'>
        <Game image={rdr2} title="RDR2" />
        <Game image={withcer3} title="Witcher 3" />
        <Game image={sushima} title="Ghost of Sushima" />
        <Game image={cyberPunk} title="CyberPunk 2077" />
        <Game image={farcry6} title="Far Cry 6" />
        <Game image={codblack} title="Call of Duty : Black Ops" />
        <Game image={apexlegends} title="Apex Legends" />
        <Game image={blackmyth} title="Black Myth Wukong" />
      </div> : ""
    }
    {
      props.mostPlayed ? <div className='forGames'>
        <Game image={gow} title="God of War" />
        <Game image={last2} title="The Last of Us 2" />
        <Game image={uncharted} title="Uncharted 4" />
        <Game image={gowrag} title="God of War Ragnarak" />
        <Game image={valhala} title="Assasins Creed Valhalla" />
        <Game image={willofwisps} title="Will of Wisps" />
        <Game image={blackmyth} title="Black Myth Wukong" />
        <Game image={brawlhala} title="Brawlhalla" />
        <Game image={eldenring} title="Elden Ring" />
      </div> : ""
    }
    </>
  )
}
