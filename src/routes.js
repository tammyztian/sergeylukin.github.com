import React from "react"
import { Route } from "react-router"

import AppContainer from "./AppContainer"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Homepage from "./layouts/Homepage"
import Resume from "./layouts/Resume"
import Projects from "./layouts/Projects"
import Blog from "./layouts/Blog"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={ {
      Page,
      PageError,
      PageLoading,
      Homepage,
      Resume,
      Post,
      Projects,
      Blog,
    } }
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)