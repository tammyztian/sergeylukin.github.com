import React, { PropTypes } from "react"
import { Link } from "react-router"
import { BodyContainer } from "phenomic"
// import Svg from "react-svg-inline"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import SocialLinks from "../../components/SocialLinks"
import Navigation from "../../components/Navigation"

import styles from "./index.scss"

import Avatar from "../../components/Avatar"

import moment from "moment"

const Post = (
  {
    head,
    body,
  }) => {

  const formattedDate = moment(head.date).format("dddd, MMMM Do YYYY")

  return (
    <div>
      <div className={ styles.wrapper }>
        <Header className={ styles.container }
          carpetColor={ head.primaryColor ? head.primaryColor : null }
          noBottomGradient
        >
          <Navigation {...head} />
          <Card carpet>
            <div className={ styles.banner }>
              <div className={ styles.background }
                style={ {
                  backgroundImage: `url(${head.image})`,
                } }
              ></div>
              <div>
                <h1
                  style={ {
                    color: head.secondaryColor ? head.secondaryColor : null,
                    backgroundColor: head.primaryColor
                      ? head.primaryColor
                      : null,
                  } }
                >{ head.title }</h1>
              </div>
              <div>
                <time
                  style={ {
                    color: head.secondaryColor ? head.secondaryColor : null,
                    backgroundColor: head.primaryColor
                      ? head.primaryColor
                      : null,
                  } }
                  dateTime={ head.date } pubdate=""
                >{ formattedDate }</time>
              </div>
            </div>
            <div className={ styles.content }>
              { head.linksColor ?
                <style>
                { `\
                  .${styles.content} a {\
                    color:${head.linksColor};\
                  }\
                ` }
                </style>
              : null }
              { head.linksHoverColor ?
                <style>
                { `\
                  .${styles.content} a:hover {\
                    color:${head.linksHoverColor};\
                  }\
                ` }
                </style>
              : null }
              <BodyContainer>{ body }</BodyContainer>
            </div>
          </Card>
          <Card className={ styles.info }>
            <div className={ styles.content }>
              <div className={ styles.author }>
                <div className={ styles.avatar }>
                  <Link to="/">
                    <Avatar small
                      borderColor={
                        head.primaryColor ? head.primaryColor : null
                      }
                    />
                  </Link>
                </div>
                <div className={ styles.bio }>
                  <p>
                    { "Hi, I'm Sergey, 30yo, father of 2, currently"
                      + " based in Tel Aviv, Israel." }
                  </p>
                  <p>
                    { "#music, #programming, #sport, #ui, #ux"
                      + " are all part of what I'm mostly passionate"
                      + " about...in alphabetical order :)" }
                  </p>
                  <p>
                    { "Read more about me in my " }
                    <Link to="/resume">{ "Résumé" }</Link>
                  </p>
                  <div>
                    <SocialLinks stripped className={ styles.SocialLinks } />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Header>
      </div>
      <Footer />
    </div>
  )
}

Post.propTypes = {
  body: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
}

export default Post